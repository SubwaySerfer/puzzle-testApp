<template>
  <div class="servers-wrapper">
    <h1 class="servers-wrapper__title">Servers:</h1>

    <ul class="servers-list">
      <li class="server-el server-el__main">
        <span class="server-el__label">Customer</span><span class="server-el__label">Server Name</span><span
          class="server-el__label">Server Type</span>
      </li>
      <li v-for="server in servers" :key="server.customer_id" class="server-el server-el__item" ref="servers"
        :id="server.customer_id" @click="handleServer(server.customer_id)">
        <span class="server-el__label">{{ server.customer_id }}</span>
        <span class="server-el__label">{{ server.server_name }}</span>
        <span class="server-el__label">{{ server.server_type }}</span>
      </li>
      <h1>
      </h1>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
  props: ['servers'],
  emits: ['updateServer'],
  data() {
    return {
      currentServerId: {} as { customer_id: string, server_name: string, server_type: string },
    }
  },
  methods: {
    handleServer(id: string) {
      this.currentServerId = this.servers.find((el: { customer_id: string; }) => el.customer_id == id);
      this.$emit('updateServer', (this.currentServerId))
    },
  },
  watch: {
    currentServerId(_, _2) {
      document.querySelectorAll('.server-el__active').forEach(el => el.classList.remove('server-el__active'))
      document.querySelector(`#${this.currentServerId.customer_id}`)?.classList.add('server-el__active')
    }
  }
})
</script>

<style scoped lang="scss">
.servers-wrapper {
  display: flex;
  flex-direction: column;
  gap: 3rem;

  &__title {
    font-size: 3rem;
    font-weight: 500;

  }
}



.servers-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 60rem;
  gap: 2rem;

  .server-el {
    display: flex;
    flex-direction: row;
    border: 1px solid $bgColor;
    border-radius: 1rem;
    height: 5rem;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    width: 100%;
    min-width: min-content;

    &__main {
      background: $bgColorBrown
    }

    &__label {
      font-weight: 500;
      font-size: 1.8rem;
      width: 33%;
      min-width: 20rem;
      text-wrap: nowrap;
    }

    &__active {
      background: $curColor;
      box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.2);

    }

    &__item {
      cursor: pointer;
    }
  }

  .info-block {
    display: flex;
    flex-direction: row;
    gap: 2rem;
  }
}
</style>