/**
 * @author 🌈MARS <wangdaoo@yeah.net>
 * @desc 📝鼠标事件抽离
 * @copyright 🤝In me the tiger sniffs the rose.
 */
import { fabric } from 'fabric'
export const MouseMethod = {
  /**
   * @func 鼠标按下事件
   * @param {Object} e
   * @desc 📝监听鼠标右键
   */
  mousedown(e) {
    console.log(e)
    if (e.target !== null) {
      this.attr = { ...e.target }
      console.log(this.attr)
    }
    /** 右键开启拖拽 */
    if (e.button === 3) {
      this.panning = true
      this.canvas.selection = true
    }
    /** 绘图位置定点 */
    let xy = e.pointer || this.transformMouse(e.e.offsetX, e.e.offsetY)
    this.mouseFrom.x = xy.x
    this.mouseFrom.y = xy.y
    /** 开启绘制状态 */
    this.doDrawing = true
    /** 普通绘制 */
    if (this.drawType === 'text') {
      this._draw()
    }
    /** 多边形绘制 */
    if (this.drawType === 'polygon') {
      try {
        if (this.pointArray.length > 1) {
          if (e.target && e.target.id == this.pointArray[0].id) {
            this.generatePolygon()
          }
        }
        if (this.polygonMode) {
          this.addPoint(e)
        }
      } catch (error) {
        console.log(error)
      }
    }
  },
  /**
   * @func 鼠标抬起事件
   * @param {Object} e
   */
  mouseup(e) {
    if (e.button === 3) {
      this.panning = false
      this.canvas.selection = false
    }
    /** 绘图位置定点 */
    let xy = e.pointer || this.transformMouse(e.e.offsetX, e.e.offsetY)
    this.mouseTo.x = xy.x
    this.mouseTo.y = xy.y
    this.drawingObject = null
    this.moveCount = 1

    /** 非多边形绘制，关闭绘制状态 */
    if (this.drawType !== 'polygon') {
      this.doDrawing = false
    }
  },
  /**
   * @func 鼠标移动
   * @param {Object} e
   */
  mousemove(e) {
    if (this.panning && e && e.e) {
      let delta = new fabric.Point(e.e.movementX, e.e.movementY)
      this.canvas.relativePan(delta)
    }
    /** 减少绘制频率 */
    if (this.moveCount % 2 && !this.doDrawing) {
      return
    }
    this.moveCount++
    let xy = e.pointer || this.transformMouse(e.e.offsetX, e.e.offsetY)
    this.mouseTo.x = xy.x
    this.mouseTo.y = xy.y
    /** 判断是否为文本输入或多边绘制 */
    if (this.drawType !== 'text' || this.drawType !== 'polygon') {
      this._draw()
    }
    /** 多边绘制 */
    if (this.drawType == 'polygon') {
      if (this.activeLine && this.activeLine.class == 'line') {
        var pointer = this.canvas.getPointer(e.e)
        this.activeLine.set({ x2: pointer.x, y2: pointer.y })

        var points = this.activeShape.get('points')
        points[this.pointArray.length] = {
          x: pointer.x,
          y: pointer.y,
          zIndex: 1
        }
        this.activeShape.set({
          points: points
        })
        this.canvas.renderAll()
      }
      this.canvas.renderAll()
    }
  },
  /**
   * @func 比例放大缩小
   */
  mousewheel() {
    let zoom = (event.deltaY > 0 ? -0.1 : 0.1) + this.canvas.getZoom()
    zoom = Math.max(0.2, zoom)
    zoom = Math.min(3, zoom)
    let zoomPoint = new fabric.Point(event.pageX, event.pageY)
    this.canvas.zoomToPoint(zoomPoint, zoom)
  },
  transformMouse(mouseX, mouseY) {
    return { x: mouseX / 1, y: mouseY / 1 }
  }
}
