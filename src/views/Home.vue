<template>
  <div class="home">
    <h1>this is a home page</h1>
    <ul v-for="(item, index) in userInfo" :key="index">
      <li>{{ item }}</li>
    </ul>
    <h2>{{ getMother }}</h2>
    <h3>{{ name }}</h3>
    <h4>B-num: {{ count }}</h4>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {},
  computed: {
    ...mapState(['userInfo']),
    ...mapGetters(['getMother']),
    ...mapState({
      name: state => state.moduleB.name,
      count: state => state.moduleB.count
    })
  }
}
</script>
