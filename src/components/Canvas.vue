<template>
  <section class="c-style">
    <div class="setting-style">
      <TopSetting
        ref="setting"
        @handleSetting="handleSetting"
        @bgImage="bgImage"
        @handleSave="handleSave"
        @handleDel="handleDel"
        @drawPolygon="drawPolygon"
      />
    </div>
    <canvas id="c" :width="width" :height="height"></canvas>
  </section>
</template>
<script>
/**
 * @author 🌈MARS <wangdaoo@yeah.net>
 * @desc 📝Canvas 图例配置
 * @copyright 🤝In me the tiger sniffs the rose.
 */
import { fabric } from 'fabric'
import TopSetting from './TopSetting'
import { MouseMethod } from './js/MouseMethod'
import { DrawMethods } from './js/DrawMethods'
import { PolygonMethods } from './js/PolygonMethods'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Canvas',
  components: { TopSetting },
  data() {
    return {
      /** 是否开启平移 */
      panning: false,
      /** canvas 实例 */
      canvas: {},
      /** canvas width */
      width: 1400,
      /** canvas height */
      height: 868,
      /** 鼠标划过起始位置 */
      mouseFrom: {},
      /** 鼠标划过结束位置 */
      mouseTo: {},
      /** 图片路径 */
      imgURL: 'https://imgchr.com/i/BlPTVU',
      /** 选择类型 */
      drawType: null,
      /** 绘制状态 */
      doDrawing: false,
      /** 绘制移动计数器 */
      moveCount: 1,
      /** 当前绘制对象 */
      drawingObject: null,
      /** 笔触宽度 */
      drawWidth: 4,
      /** 画笔颜色 */
      color: '#E34F51',
      /** 文本 */
      textBox: null,
      /** polygon, 多边形 - 相关参数 */
      polygonMode: false,
      pointArray: [],
      lineArray: [],
      activeShape: false,
      activeLine: '',
      line: {},
      /** 属性参数 */
      attr: {}
    }
  },

  computed: {
    ...mapState({
      imgObj: state => state.imgObj,
      rows: state => state.rows
    })
  },
  watch: {
    rows(rows) {
      let obj = this.canvas.getActiveObject()
      if (obj !== null) {
        obj.set({
          ...rows,
          // opacity: 0, // 透明度
          // scaleX: 1,
          // scaleY: 1
          // angle: 0  // 旋转角度
        })
        // NICE: 注释掉的为动画效果
        // obj.animate('scaleX', 2, {
        //   onChange: this.canvas.renderAll.bind(this.canvas),
        //   duration: 2000,
        //   easing: fabric.util.ease.easeOutExpo
        // })
        // obj.animate('scaleY', 2, {
        //   onChange: this.canvas.renderAll.bind(this.canvas),
        //   duration: 2000,
        //   easing: fabric.util.ease.easeOutExpo
        // })
        // obj.animate('opacity', 1, {
        //   onChange: this.canvas.renderAll.bind(this.canvas),
        //   duration: 2000,
        //   easing: fabric.util.ease.easeOutExpo
        // })
        this.canvas.renderAll()
      }
    }
  },

  mounted() {
    /**
     * 创建 canvas 实例
     * fireRightClick: true 右键单击
     * 检查按钮值 3，用于拖动画布
     */
    this.canvas = this.__canvas = new fabric.Canvas('c', {
      stopContextMenu: true,
      fireRightClick: true
    })
    /** canvas 背景颜色 */
    this.canvas.backgroundColor = 'rgb(0, 0, 0,0.05)'
    this.canvas.setWidth(this.width)
    this.canvas.setHeight(this.height)
    /** 监听 canvas 事件 */
    this.canvas.on('mouse:down', this.mousedown)
    this.canvas.on('mouse:up', this.mouseup)
    this.canvas.on('mouse:move', this.mousemove)
    this.canvas.on('mouse:wheel', this.mousewheel)
    /** 元素删除，监听键盘 delete 点按事件 */
    document.onkeydown = e => {
      if (e.keyCode === 46) this.deleteItem()
    }
    this.init()
  },

  methods: {
    ...MouseMethod,
    ...DrawMethods,
    ...PolygonMethods,
    ...mapActions(['ClearImg', 'ChangeAttr']),
    /** 实例初始化 */
    init() {
      if (!this.canvas) return
      fabric.Image.fromURL(
        require('@/assets/crtImg/canvas.jpg'),
        img => {
          img.set({
            scaleX: this.canvas.width / img.width,
            scaleY: this.canvas.height / img.height
          })
          this.canvas.setBackgroundImage(img, this.canvas.renderAll.bind(this.canvas))
          this.canvas.renderAll()
        },
        { crossOrigin: 'anonymous' }
      )
    },
    /** 图形设置 */
    handleSetting(str) {
      console.log(str)
      this.drawType = str
      if (str === 'pen') {
        this.canvas.freeDrawingBrush.width = 2
        this.canvas.freeDrawingBrush.color = 'red'
        this.canvas.isDrawingMode = true
      } else {
        this.canvas.isDrawingMode = false
      }
    },
    /** 多边形绘制 */
    drawPolygon() {
      this.drawType = 'polygon'
      this.polygonMode = true
      this.pointArray = new Array()
      this.lineArray = new Array()
      this.canvas.isDrawingMode = false
    },
    /** 背景图导入 */
    bgImage(url) {
      console.log('%c' + url, 'color: #2ecc71; font-size: 13px;')
      this.$message.success('请替换路径')
      // this.imgURL = url;
      // this.init();
    },
    /** 获取当前选中元素对象，进行删除 */
    handleDel() {
      let obj = this.canvas.getActiveObject()
      this.canvas.remove(obj)
      this.canvas.renderAll()
    },
    /** 删除实例元素 */
    deleteItem() {
      this.canvas.getActiveObjects().map(item => {
        this.canvas.remove(item)
      })
    },
    /** 保存 */
    handleSave() {
      let query = {
        id: 1,
        ...this.canvas.toJSON()
      }
      console.log(query)
      console.log(JSON.stringify(query))
    }
  }
}
</script>
<style lang="css" scoped>
.c-style {
  width: 1400px;
  height: 900px;
  background: #ffffff;
}
</style>
