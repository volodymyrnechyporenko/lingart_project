<template>
  <div class="card_wrap">
    <div class="item_left">
      <div class="book-img"><img src="../img/dummy.png" alt="" /></div>
    </div>
    <div class="item_right">
      <h3>Автор та назва книги</h3>
      <ul>
        <li>Категорія роботи</li>
        <li>Складність</li>
        <li>Час виконання</li>
        <li>Залучені актори озвучування</li>
      </ul>
      <div class="book-info">
        <button>Більше робіт</button>
        <button>Замовити книгу</button>
      </div>
    </div>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
@import '@/scss/_variables.scss';

.card_wrap {
  display: flex;
  flex-direction: row;
  padding: 1rem;
  gap: 1rem;

  @media screen and (max-width: 812px) {
    flex-direction: column-reverse;
  }
}
.item_left,
.item_right {
  width: 50%;

  @media screen and (max-width: 767px) and (orientation: portrait) {
    width: 100%;
  }
}
</style>
