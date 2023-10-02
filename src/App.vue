<template>
  <main class="my-0 mx-auto max-w-12xl text-left">
      <Table :items="data.items"/>
  </main>
</template>

<script>
export default {
  async mounted() {
    const response = await fetch('http://localhost:8080/data')

    if (response.ok) {
      this.data = await response.json()
    }
  },
  data() {
    return {
      data: []
    }
  }
}
</script>

<style>
</style>
