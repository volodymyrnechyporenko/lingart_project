<template>

<div class="uk-container uk-container-small uk-margin">
  <div class="form">
    <form action="#" class="form_body">
      <div class="form_item uk-margin">
          <label for="formName" class="form_label">Ім'я*:</label>
          <input type="text" id="formName" name="name" class="uk-input">
      </div>
      <div class="form_item">
          <label for="formPhone" class="form_label">Телефон*:</label>
          <input type="text" id="formPhone" name="phone" class="uk-input">
      </div>
      <div id="upload" class="uk-margin">
          <div v-if="!image" class="js-upload uk-form-custom">
              <h3>Завантаження файлу</h3>
              <input type="file" @change="onFileChange" class="uk-input" required multiple>
              <button class="uk-button uk-button-secondary" type="button" tabindex="-1">Вибрати файл</button>
          </div>
          <div v-else>
              <button v-if="!uploadURL" @click="removeImage" class="uk-button uk-button-secondary uk-button-small">Очистити</button>
              <button v-if="!uploadURL" @click="uploadImage" id="upload-btn" class="uk-button uk-button-secondary uk-button-small">Завантажити</button>
          </div>
          <p v-if="uploadURL">Успішно завантажено</p>
      </div>
      <div id="results" class="uk-margin"></div>
      <div class="form-item uk-margin">
          <button onclick="paymentValidate()" id="pay-book" type="button" class="uk-button uk-button-secondary">Оплатити</button>
      </div>
    </form>
  </div>
</div>

</template>

<script>

import axios from 'axios'

const MAX_IMAGE_SIZE = 1000000;
const API_ENDPOINT = "https://x2d409llv4.execute-api.us-east-2.amazonaws.com/default/getPresignedURL";

export default {
  el: "#upload",
  data() {
    return {
      image: "",
      uploadURL: ""
    }
  },
  methods: {
    onFileChange (e) {
      let files = e.target.files || e.dataTransfer.files
      if (!files.length) return
      this.createImage(files[0])
    },
    createImage (file) {
      let reader = new FileReader()
      reader.onload = (e) => {
        console.log('length: ', e.target.result.includes('data:application/pdf'))
        if (!e.target.result.includes('data:application/pdf')) {
          return alert('Wrong file type.')
        }
        if (e.target.result.length > MAX_IMAGE_SIZE) {
          return alert('Document is loo large.')
        }
        this.image = e.target.result
      }
      reader.readAsDataURL(file)
    },
    removeImage () {
      console.log('Remove clicked')
      this.image = ''
    },
    async uploadImage () {
      console.log('Upload clicked')
      // Get the presigned URL
      const response = await axios({
        method: 'GET',
        url: API_ENDPOINT
      })
      console.log('Response: ', response)
      console.log('Uploading: ', this.image)
      let binary = atob(this.image.split(',')[1])
      let array = []
      for (var i = 0; i < binary.length; i++) {
        array.push(binary.charCodeAt(i))
      }
      let blobData = new Blob([new Uint8Array(array)], {type: 'application/pdf'})
      console.log('Uploading to: ', response.uploadURL)
      const result = await fetch(response.uploadURL, {
        method: 'PUT',
        body: blobData
      })
      console.log('Result: ', result)
      // Final URL for the user doesn't need the query string params
      this.uploadURL = response.uploadURL.split('?')[0]
    }
  }
}

</script>

<style scoped>

</style>