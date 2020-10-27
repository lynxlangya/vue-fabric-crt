<template>
  <section class="s-style">
    <a-tabs default-active-key="1">
      <a-tab-pane key="1">
        <span slot="tab">设 备</span>
        <Equipment />
      </a-tab-pane>
      <a-tab-pane key="2">
        <span slot="tab">属 性</span>
        <Attr />
      </a-tab-pane>
    </a-tabs>
  </section>
</template>
<script>
/**
 * @author 🌈MARS <wangdaoo@yeah.net>
 * @desc 📝配置
 * @copyright 🤝In me the tiger sniffs the rose.
 */
import Equipment from './Equipment'
import Attr from './Attr'
export default {
  name: 'Config',
  components: {
    Equipment,
    Attr
  }
}
</script>
<style lang="css" scoped>
* >>> .ant-tabs-tabpane.ant-tabs-tabpane-active {
  height: calc(100vh - 60px);
}
.s-style {
  width: calc(100% - 1390px);
  margin-left: 10px;
  overflow: auto;
  background: #ffffff;
}
.s-colorBlock {
  width: 20px;
  height: 20px;
  border-radius: 2px;
  float: left;
  cursor: pointer;
  margin-right: 8px;
  padding-left: 0px;
  padding-right: 0px;
  text-align: center;
  color: #fff;
  font-weight: 700;
}
i {
  font-size: 14px;
}
.s-title {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.85);
  height: 22px;
  line-height: 22px;
  margin: auto auto 6px 12px;
}
</style>
