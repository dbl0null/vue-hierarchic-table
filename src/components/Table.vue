<template>
  <table>
    <thead>
    <tr>
      <th>Категория</th>
      <th @click="sortAscending=-sortAscending">👀{{ sortAscending > 0 ? '↑' : '↓' }}</th>
      <th>▶️</th>
      <th>↑</th>
      <th>️️📤</th>
      <th>💳</th>
      <th>👀/↑</th>
      <th>👀/💳</th>
    </tr>
    </thead>
    <tbody>
    <template v-for="item in sortedItems">
      <TestRow v-bind="{
        title: item.title,
        countView: item.countView,
        countPlay: item.countPlay,
        countSend: item.countSend,
        countOrder: item.countOrder,
        countPay: item.countPay,
        viewSend: item.viewSend,
        viewPay: item.viewPay,
        children: item.children,
      }"/>
    </template>
    <tr style="background: lightgray">
      <td>Итого:</td>
      <td>{{total.countView}}</td>
      <td>{{total.countPlay}}</td>
      <td>{{total.countSend}}</td>
      <td>{{total.countOrder}}</td>
      <td>{{total.countPay}}</td>
      <td>{{total.viewSend}}%</td>
      <td>{{total.viewPay}}%</td>
    </tr>
    </tbody>
  </table>
</template>

<script>
import TestRow from "./Row.vue"

export default {
  name: "table",
  components: { TestRow },
  props: {
    items: {
      type: Array,
      default: () => [],
      required: true,
    }
  },
  data() {
    return {
      sortAscending: 1
    }
  },
  computed: {
    sortedItems() {
      return  this.items.sort((a, b) => (a.countView > b.countView) ? this.sortAscending : -this.sortAscending) // Некрасиво, но работает
    },
    total() {
      const total = {
        countView: 0,
        countPlay: 0,
        countSend: 0,
        countOrder: 0,
        countPay: 0,
        viewSend: 0,
        viewPay: 0
      }

      this.items.forEach(item => {
        total.countView += item.countView
        total.countPlay += item.countPlay
        total.countSend += item.countSend
        total.countOrder += item.countOrder
        total.countPay += item.countPay
      })

      total.viewSend = (total.countSend / (total.countView / 100)).toFixed(2)
      total.viewPay = (total.countPay / (total.countView / 100)).toFixed(2)

      return total
    }
  }
}
</script>

<style>
table {
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
}
table tr {
  border-bottom: 1px solid lightgray;
}
</style>