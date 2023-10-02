<template>
  <main class="my-0 mx-auto max-w-12xl text-left">
    <Table :items="items.items"/>
  </main>
</template>

<script>
export default {
  async mounted() {
    const response = await fetch('http://localhost:8080/data')

    if (response.ok) {
      this.items = await response.json()
    }
  },
  data() {
    return {
      items: []
    }
  }
}
</script>

<style>
</style>
