<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h3>A模块的名字: {{ name || 2}}</h3>
    <h4>A-num: {{ count }}</h4>
    <button @click="call">click</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'About',
  computed: {
    ...mapState({
      name: state => state.moduleA.name,
      count: state => state.moduleA.count
    })
  },
  methods: {
    ...mapMutations({
      call: 'moduleA/changeCount'
    })
  }
}
</script>
