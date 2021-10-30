<template>
  <div class="form_container">
    <div class="form">
      <form action="#" class="form_body">
        <div class="form_item">
          <label for="signs_amount">Ввести кількість знаків:</label>
          <input
            type="number"
            id="signs_amount"
            name="number"
            class="form_input"
          />
        </div>
        <div class="form_item">
          <select name="amount" id="amount">
            <option value="signsnum">Кількість знаків</option>
            <option value="pagesnum1800"
              >Кількість сторінок (1800 знаків)</option
            >
            <option value="pagesnum2000"
              >Кількість сторінок (2000 знаків)</option
            >
          </select>
        </div>
        <div class="form_item">
          <div class="checkbox">
            <input
              id="formAgreement"
              checked
              type="checkbox"
              name="agreement"
            />
            <label for="formAgreement" class="checkbox_label"
              >Я не публікуватиму книжку на російських платформах</label
            >
          </div>
        </div>
        <div class="form-item">
          <button type="button" class="send" @click="getResponse">
            Вартість
          </button>
        </div>
        <div id="price-result"></div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    async getResponse() {
      let currency = await fetch(
        'https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11'
      ); /* звертаємось до API привату */
      let content = await currency.json();
      content = content.splice(0, 1);

      let key;

      for (key in content) {
        var itemPrice = Math.ceil(
          content[key].sale * 5
        ); /* ціна за 1000 знаків складає 5 доларів за поточним курсом */
      }

      let signsAmount = document.getElementById('signs_amount')
        .value; /* число, що вводимо у поле */
      let formAgreement = document.getElementById(
        'formAgreement'
      ); /* чекбокс для непублікації книжки на російських платформах */
      let amountOption = document.getElementById(
        'amount'
      ); /* вибір кількості знаків */
      let result = document.querySelector(
        '#price-result'
      ); /* сюди виводимо пораховану ціну */

      if (signsAmount != '') {
        if (
          amountOption.value == 'signsnum' &&
          formAgreement.getAttribute('type') === 'checkbox' &&
          formAgreement.checked === true
        ) {
          result.innerHTML = `До сплати ${Math.ceil(
            (signsAmount / 1000) * itemPrice * 0.8
          )} грн`;
        } else if (
          amountOption.value == 'signsnum' &&
          formAgreement.getAttribute('type') === 'checkbox' &&
          formAgreement.checked === false
        ) {
          result.innerHTML = `До сплати ${Math.ceil(
            (signsAmount / 1000) * itemPrice
          )} грн`;
        } else if (
          amountOption.value == 'pagesnum1800' &&
          formAgreement.getAttribute('type') === 'checkbox' &&
          formAgreement.checked === true
        ) {
          result.innerHTML = `До сплати ${Math.ceil(
            signsAmount * 1.8 * itemPrice * 0.8
          )} грн`;
        } else if (
          amountOption.value == 'pagesnum1800' &&
          formAgreement.getAttribute('type') === 'checkbox' &&
          formAgreement.checked === false
        ) {
          result.innerHTML = `До сплати ${Math.ceil(
            signsAmount * 1.8 * itemPrice
          )} грн`;
        } else if (
          amountOption.value == 'pagesnum2000' &&
          formAgreement.getAttribute('type') === 'checkbox' &&
          formAgreement.checked === true
        ) {
          result.innerHTML = `До сплати ${Math.ceil(
            signsAmount * 2 * itemPrice * 0.8
          )} грн`;
        } else if (
          amountOption.value == 'pagesnum2000' &&
          formAgreement.getAttribute('type') === 'checkbox' &&
          formAgreement.checked === false
        ) {
          result.innerHTML = `До сплати ${Math.ceil(
            signsAmount * 2 * itemPrice
          )} грн`;
        }
      } else {
        result.innerHTML = 'Будь ласка введіть кількість знаків';
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/scss/_variables.scss';

.form_body,
label {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: $grey;
}
.form_input {
  width: 80%;
  padding: 0.2rem;
}
.checkbox {
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  width: 100%;
}
</style>
