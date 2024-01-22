<template>
  <form class="edit-form" @submit.prevent="onSubmit">
    <div class="customer-block">
      <span class="customer-block__label">Customer:</span>
      <span class="customer-block__label">{{ user_name }}</span>
    </div>
    <label for="" class="edit-form__label">
      Server Name
      <input class="edit-form__input" type="text" v-model="server_name" @input="obviousInput(server_name, 'server_name')">
    </label>
    <label for="" class="edit-form__label">
      Server Type
      <select name="" id="" class="edit-form__select" v-model="server_type">
        <option value="vds">vds</option>
        <option value="dedicated">dedicated</option>
        <option value="hosting">hosting</option>

      </select>
    </label>
    <button type="submit" class="edit-form__btn-submit">Submit</button>
    <span class="form-error">{{ errorText }}</span>

  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: ['server'],
  emits: ['updateServerInfo'],
  data() {
    return {
      server_name: '' as string,
      server_type: '' as string,
      user_name: '' as string,
      errorText: '' as string
    }
  },
  watch: {
    server(newVal: { customer_id: string, server_type: string, server_name: string }) {
      this.server_name = newVal.server_name,
        this.server_type = newVal.server_type,
        this.user_name = newVal.customer_id
      this.errorText = ''
    },
  },
  methods: {
    obviousInput(text: string, type: string) {
      if (type == 'server_name') {
        this.server_name = text.replace(/[^a-zA-Z0-9]/g, '')
      } else if (type == 'server_type') {
        this.server_type = text.replace(/[^a-zA-Z0-9]/g, '')
      }
    },
    onSubmit() {
      console.log('ss')
      if (this.user_name == '') {
        this.errorText = 'Выберите сервер'
        return
      }
      if ((this.server_name.length < 3) || (this.server_type.length < 3)) {
        this.errorText = 'Введите не менее трех букв латинского алфавита или цифр'
      } else {
        this.sendEmit();
        this.server_name = '';
        this.server_type = '';
        this.user_name = '';
        this.errorText = ''
        document.querySelectorAll('.server-el__active').forEach(el => el.classList.remove('server-el__active'))
        document.querySelector('.edit-form__btn-submit')?.classList.add('btn-submit__active')
        setTimeout(() => document.querySelector('.edit-form__btn-submit')?.classList.remove('btn-submit__active'), 1000)
      }

    },
    sendEmit() {
      this.$emit('updateServerInfo', [this.server_name, this.server_type, this.user_name])
    },
    toggleSubmitBtn(type: string) {
      if (type == 'unActive') {

      }
    }
  }
})
</script>

<style scoped lang="scss">
.edit-form {
  display: flex;
  flex-direction: column;
  width: 40rem;
  gap: 3rem;

  align-items: center;

  &__label {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .5rem;
    font-size: 1.6rem;
    font-weight: 500;
  }

  &__select {
    width: 28rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
    font-size: 1.7rem;
    font-weight: 500;
    border-radius: 1rem;
    height: 5rem;
    text-align: center;
    cursor: pointer;
  }


  &__input {
    border: 2px solid $bgColorBrown;
    border-radius: 1rem;
    height: 5rem;
    width: 28rem;
    font-size: 1.6rem;
    font-weight: 500;
    padding: 0 1.5rem;
    text-align: center;
  }

  &__btn-submit {
    height: 5rem;
    width: 21rem;
    font-size: 1.6rem;
    font-weight: 800;
    background: $bgColorBrown
  }
}

.customer-block {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 28rem;
  padding: 0 1rem 0 0;

  &__label {
    font-size: 1.8rem;
    font-weight: 500;
  }
}

.btn-submit__active {
  background: rgb(1, 201, 1);
  transition: all ease-in-out .25s;
}

.form-error {
  font-size: 1.6rem;
  width: 28rem;
  height: 3rem;
  color: red;
}
</style>