<template>
  <section style="height: calc(100vh - 230px); overflow: auto;">
    <a-empty v-if="!rows.left" />
    <h3 v-if="rows.left">属性</h3>
    <div v-if="rows.left" class="item-style">
      <a-row :gutter="16">
        <a-col class="gutter-row" :span="12">
          <div>
            <span class="title-style">坐标 X</span>
            <a-input-number v-model="rows.left" size="small" placeholder="坐标x" />
          </div>
        </a-col>
        <a-col class="gutter-row" :span="12">
          <div>
            <span class="title-style">坐标 Y</span>
            <a-input-number v-model="rows.top" size="small" placeholder="坐标 Y" />
          </div>
        </a-col>
      </a-row>
      <a-row :gutter="16">
        <a-col class="gutter-row" :span="12">
          <div>
            <span class="title-style">等宽比</span>
            <a-input-number v-model="rows.scaleX" size="small" :step="0.1" placeholder="等宽比" />
          </div>
        </a-col>
        <a-col class="gutter-row" :span="12">
          <div>
            <span class="title-style">等高比</span>
            <a-input-number v-model="rows.scaleY" size="small" :step="0.1" placeholder="等高比" />
          </div>
        </a-col>
      </a-row>
      <a-row :gutter="16" v-if="rows.text">
        <a-col class="gutter-row" :span="24">
          <div>
            <span class="title-style">字号</span>
            <a-input-number v-model="rows.fontSize" size="small" placeholder="字号" />
          </div>
        </a-col>
      </a-row>
      <a-row :gutter="16" v-if="!rows.name">
        <a-col class="gutter-row" :span="24">
          <div>
            <span class="title-style">边宽</span>
            <a-input-number v-model="rows.strokeWidth" size="small" placeholder="边宽" />
          </div>
        </a-col>
      </a-row>
      <a-row :gutter="16" v-if="rows.stroke !== null">
        <a-col class="gutter-row" :span="24">
          <span style="margin-right: 12px;">边框颜色</span>
          <colorPicker v-model="rows.stroke" />
        </a-col>
      </a-row>
      <a-row :gutter="16" v-if="rows.text">
        <span style="margin-right: 12px;">文 本</span>
        <a-input v-model="rows.text" size="small" placeholder="文本" />
      </a-row>
      <a-row :gutter="16" v-if="!rows.name && rows.fill !== null">
        <a-col class="gutter-row" :span="24">
          <span style="margin-right: 12px;">填充颜色</span>
          <colorPicker v-model="rows.fill" />
        </a-col>
      </a-row>
      <div v-if="!rows.NODATA && !rows.path">
        <a-row :gutter="16">
          <a-col class="gutter-row" :span="24">
            <span style="margin-right: 12px;">名称</span>
            <a-input v-model="rows.name" size="small" placeholder="名称" />
          </a-col>
        </a-row>
        <a-row :gutter="16">
          <a-col class="gutter-row" :span="24">
            <span style="margin-right: 12px;">编号</span>
            <a-input v-model="rows.no" size="small" placeholder="编号" />
          </a-col>
        </a-row>
        <a-row :gutter="16">
          <a-col class="gutter-row" :span="24">
            <span style="margin-right: 12px;">回路号</span>
            <a-input v-model="rows.hui" size="small" placeholder="回路号" />
          </a-col>
        </a-row>
        <a-row :gutter="16">
          <a-col class="gutter-row" :span="24">
            <span style="margin-right: 12px;">地址号</span>
            <a-input v-model="rows.address" size="small" placeholder="地址号" />
          </a-col>
        </a-row>
        <a-row :gutter="16">
          <a-col class="gutter-row" :span="24">
            <span style="margin-right: 12px;">位置</span>
            <a-input v-model="rows.position" size="small" placeholder="位置" />
          </a-col>
        </a-row>
      </div>
    </div>
    <div v-if="rows.left" class="btn-style">
      <a-button type="primary" style="width: 96%" @click="handleSave">保存</a-button>
    </div>
  </section>
</template>
<script>
/**
 * @author 🌈MARS <wangdaoo@yeah.net>
 * @desc 📝属性
 * @copyright 🤝In me the tiger sniffs the rose.
 */
import Vue from 'vue'
import vcolorpicker from 'vcolorpicker'
Vue.use(vcolorpicker)
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Attr',
  data() {
    return {}
  },
  computed: {
    ...mapState({
      rows: state => state.rows
    })
  },
  methods: {
    ...mapActions(['ChangeAttr']),
    handleSave() {
      console.log('%c' + 'save', 'color: #2ecc71; font-size: 13px;')
      console.log(this.rows)
      this.ChangeAttr(this.rows)
    }
  }
}
</script>
<style lang="css" scoped>
.ant-row {
  margin-bottom: 12px;
}
* >>> .colorBtn {
  width: 65px !important;
  border: 1px solid rgb(204, 204, 204);
}
h3 {
  margin: 9px;
  font-size: 14px;
  color: #919191;
}
.item-style {
  margin: auto 9px;
}
.item-style .title-style {
  display: block;
}

.item-style span {
  color: #919191;
  font-size: 12px;
}
.btn-style {
  width: 100%;
  position: absolute;
  bottom: 0px;
  left: 5px;
}
</style>
