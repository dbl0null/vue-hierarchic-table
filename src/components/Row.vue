<template>
  <tr @click="collapsed=!collapsed">
    <td :style="{ paddingLeft: `${level * 20}px` }">{{arrow}} {{title}}</td>
    <td>{{countView}}</td>
    <td>{{countPlay}}</td>
    <td>{{countSend}}</td>
    <td>{{countOrder}}</td>
    <td>{{countPay}}</td>
    <td>{{viewSend}}</td>
    <td>{{viewPay}}</td>
  </tr>

  <template v-for="(item, index) in children" v-if="children.length && !collapsed" :key="index">
    <test-row v-bind="{
      level: level + 1,
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
</template>

<script>
export default {
  name: "test-row",
  data() {
    return {
      collapsed: true
    }
  },
  computed: {
    arrow() {
      if (!this.children.length) return ''
      return this.collapsed ? '️️〉':'﹀️️'
    }
  },
  props: {
    level: {
      type: Number,
      required: true,
      default: () => 0
    },
    title: {
      type: String,
      required: true,
    },
    countView: {
      type: Number,
      required: true,
    },
    countPlay: {
      type: Number,
      required: true,
    },
    countSend: {
      type: Number,
      required: true,
    },
    countOrder: {
      type: Number,
      required: true,
    },
    countPay: {
      type: Number,
      required: true,
    },
    viewSend: {
      type: Number,
      required: true,
    },
    viewPay: {
      type: Number,
      required: true,
    },
    children: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style scoped>
</style>