<template>
  <section class="crt-page">
    <Canvas />
    <Config />
  </section>
</template>
<script>
/**
 * @author 🌈MARS <wangdaoo@yeah.net>
 * @desc 📝CRT 系统模块图例
 * @copyright 🤝In me the tiger sniffs the rose.
 */
import Canvas from './components/Canvas'
import Config from './components/Config'
export default {
  name: 'CRTModules',
  components: {
    Canvas,
    Config
  },
  data() {
    return {}
  },

  mounted() {},

  methods: {}
}
</script>
<style lang="css" scoped>
.crt-page {
  display: flex;
  background: rgb(226, 226, 226);
}
</style>
