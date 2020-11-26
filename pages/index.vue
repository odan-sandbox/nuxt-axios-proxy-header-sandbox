<template>
  <div class="container">
    <div>ようこそ: {{ name }}</div>
    <div>
      <form @submit.prevent="login">
        <input v-model="name" type="text">
        <button>ログイン</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  async asyncData (context) {
    const { name } = await context.$axios.$get('profile')
    return { name }
  },
  data: () => ({ name: undefined }),
  methods: {
    async login () {
      console.log(this.name)

      await this.$axios.$post('/login', { name: this.name })
    }
  }
})
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
}

</style>
