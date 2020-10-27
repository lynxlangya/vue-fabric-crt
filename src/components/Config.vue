<template>
  <section class="s-style">
    <a-tabs default-active-key="1" @change="callback">
      <a-tab-pane key="1">
        <span slot="tab">属 性</span>
        <h3 class="s-title">填充色</h3>
        <div style="height: 20px; margin-left: 12px;">
          <a-tooltip class="s-colorBlock" v-for="(item, index) in ColorSetting" :key="index">
            <template slot="title">
              {{ item.key }}
            </template>
            <a-tag :color="item.color" @click="changeColor(item.color)">
              <a-icon type="check" v-if="item.color === primaryColor"></a-icon>
            </a-tag>
          </a-tooltip>
        </div>
        <colorPicker v-model="textColor" />
      </a-tab-pane>
      <a-tab-pane key="2">
        <span slot="tab">图 例</span>
      </a-tab-pane>
      <a-tab-pane key="3">
        <span slot="tab">设 备</span>
        敬请期待...
      </a-tab-pane>
      <a-tab-pane key="4">
        <span slot="tab">图 层</span>
        敬请期待...
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
import { ColorSetting } from './js/Color'
export default {
  name: 'Config',
  data() {
    return {
      ColorSetting,
      primaryColor: '',
      textColor: '#ff0000'
    }
  },

  mounted() {},

  methods: {
    callback(key) {
      console.log(key)
    },
    changeColor(color) {
      console.log(color)
      this.primaryColor = color
    }
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
