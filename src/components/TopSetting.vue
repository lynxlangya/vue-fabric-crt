<template>
  <section class="t-style">
    <img src="@/assets/crtImg/add.svg" title="新增" alt="add" @click="handleAdd" />
    <a-upload
      name="file"
      :action="uploadAction"
      :headers="headers"
      :fileList="fileList"
      :beforeUpload="beforeUpload"
      @change="handleChange"
      style="display: inline-block;"
    >
      <img src="@/assets/crtImg/img.svg" title="导入背景图" alt="img" />
    </a-upload>
    <img src="@/assets/crtImg/save.svg" title="保存" alt="save" @click="handleSave" />
    <a-divider type="vertical" />
    <img src="@/assets/crtImg/select.svg" title="选择" alt="select" @click="handleSetting('')" />
    <img
      src="@/assets/crtImg/square.svg"
      title="正方形"
      alt="square"
      @click="handleSetting('square')"
    />
    <img src="@/assets/crtImg/round.svg" title="圆形" alt="round" @click="handleSetting('round')" />
    <img src="@/assets/crtImg/polygon.svg" title="多边" alt="polygon" @click="drawPolygon" />
    <img src="@/assets/crtImg/arrow.svg" title="箭头" alt="arrow" @click="handleSetting('arrow')" />
    <img src="@/assets/crtImg/pen.svg" title="钢笔" alt="pen" @click="handleSetting('pen')" />
    <img src="@/assets/crtImg/text.svg" title="文字" alt="text" @click="handleSetting('text')" />
    <img src="@/assets/crtImg/delete.svg" title="删除" alt="delete" @click="handleDel" />
  </section>
</template>
<script>
/**
 * @author 🌈MARS <wangdaoo@yeah.net>
 * @desc 📝顶部配置
 * @copyright 🤝In me the tiger sniffs the rose.
 */
export default {
  name: 'TopSetting',
  data() {
    return {
      /** 上传路径, 请替换自己项目路径 */
      uploadAction: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
      headers: {},
      fileList: []
    }
  },

  mounted() {},

  methods: {
    /**
     * @func 上传之前
     * @param {Object} file
     * @desc 📝类型/大小检查
     */
    beforeUpload(file) {
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
      if (!isJpgOrPng) {
        this.$message.error('请上传正确图片类型，png/jpg/jpeg!')
      }
      const isLt5M = file.size / 1024 / 1024 < 5
      if (!isLt5M) {
        this.$message.error('图片大小不能超过5M')
      }
      return isJpgOrPng && isLt5M
    },
    /** 上传背景图 */
    handleChange(info) {
      if (info.file.status === 'done') {
        this.$message.success(`${info.file.name} 上传成功`)
        this.$emit('bgImage', info.file.response.message)
      } else if (info.file.status === 'error') {
        this.$message.error(`${info.file.name} 上传失败`)
      }
      this.fileList = info.fileList
    },
    handleAdd() {
      this.$message.success('请根据项目进行适配')
    },
    handleSave() {
      this.$emit('handleSave')
    },
    handleSetting(str) {
      this.$emit('handleSetting', str)
    },
    /** 多边形绘制 */
    drawPolygon() {
      this.$emit('drawPolygon')
    },
    /** 元素删除 */
    handleDel() {
      this.$emit('handleDel')
    }
  }
}
</script>
<style lang="css" scoped>
.t-style {
  height: 32px;
  background: rgb(245, 244, 244);
}
.ant-divider,
.ant-divider-vertical {
  margin: 0 30px;
  height: 28px;
  background: #cccccc;
}
* >>> .ant-upload-list.ant-upload-list-text {
  display: none !important;
}
img {
  margin: 5px 8px;
  cursor: pointer;
}
</style>
