<template>
  <main class="home-page">
    <servers-list :servers="serversList" @update-server="updateServer($event)"></servers-list>
    <edit-field :server="currentServer" @update-server-info="updateServerInfo"></edit-field>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ServersList from '../../components/home/ServersList.vue'
import EditField from '../../components/home/EditField.vue'

import { listObj } from '../../../public/assets/data/serversList.ts'

export default defineComponent({

  components: {
    ServersList,
    EditField
  },
  data() {
    return {
      serversList: listObj,
      currentServer: {} as object,
      currentIdx: NaN as number
    }
  },
  created() {
    if (localStorage.getItem('puzzle')) {
      this.serversList = JSON.parse(localStorage.getItem('puzzle') || '')
    }
  },
  watch: {
    currentIdx() {
      if (!isNaN(this.currentIdx)) {
        console.log(this.serversList[this.currentIdx])
      }
    }
  },
  methods: {
    updateServer(server: object) {
      this.currentServer = server;
    },
    updateServerInfo(info: string[]) {
      this.currentIdx = this.serversList.findIndex(el => el.customer_id == info[2])
      if (!isNaN(this.currentIdx)) {
        this.serversList[this.currentIdx] = { server_name: info[0], server_type: info[1], customer_id: this.serversList[this.currentIdx].customer_id }
      }
      localStorage.setItem('puzzle', JSON.stringify(this.serversList))
    }
  }
})
</script>

<style scoped lang="scss">
.home-page {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 2rem;
  padding: 3rem 2rem;

  @media(max-width: 1100px) {
    flex-direction: column;
    align-items: center
  }
}
</style>