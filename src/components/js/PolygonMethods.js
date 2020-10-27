/**
 * @author 🌈MARS <wangdaoo@yeah.net>
 * @desc 📝多边形复杂绘制
 * @copyright 🤝In me the tiger sniffs the rose.
 */
import { fabric } from 'fabric'
export const PolygonMethods = {
  /** 多边新增 */
  addPoint(e) {
    var random = Math.floor(Math.random() * 10000)
    var id = new Date().getTime() + random
    var circle = new fabric.Circle({
      radius: 5,
      fill: '#ffffff',
      stroke: '#333333',
      strokeWidth: 0.5,
      left: (e.pointer.x || e.e.layerX) / this.canvas.getZoom(),
      top: (e.pointer.y || e.e.layerY) / this.canvas.getZoom(),
      selectable: false,
      hasBorders: false,
      hasControls: false,
      originX: 'center',
      originY: 'center',
      id: id,
      objectCaching: false
    })
    if (this.pointArray.length == 0) {
      circle.set({
        fill: 'red'
      })
    }
    var points = [
      (e.pointer.x || e.e.layerX) / this.canvas.getZoom(),
      (e.pointer.y || e.e.layerY) / this.canvas.getZoom(),
      (e.pointer.x || e.e.layerX) / this.canvas.getZoom(),
      (e.pointer.y || e.e.layerY) / this.canvas.getZoom()
    ]

    this.line = new fabric.Line(points, {
      strokeWidth: 2,
      fill: '#999999',
      stroke: '#999999',
      class: 'line',
      originX: 'center',
      originY: 'center',
      selectable: false,
      hasBorders: false,
      hasControls: false,
      evented: false,

      objectCaching: false
    })
    if (this.activeShape) {
      var pos = this.canvas.getPointer(e.e)
      // eslint-disable-next-line no-redeclare
      var points = this.activeShape.get('points')
      points.push({
        x: pos.x,
        y: pos.y
      })
      var polygon = new fabric.Polygon(points, {
        stroke: '#333333',
        strokeWidth: 1,
        fill: '#cccccc',
        opacity: 0.3,

        selectable: false,
        hasBorders: false,
        hasControls: false,
        evented: false,
        objectCaching: false
      })
      this.canvas.remove(this.activeShape)
      this.canvas.add(polygon)
      this.activeShape = polygon
      this.canvas.renderAll()
    } else {
      var polyPoint = [
        {
          x: (e.pointer.x || e.e.layerX) / this.canvas.getZoom(),
          y: (e.pointer.y || e.e.layerY) / this.canvas.getZoom()
        }
      ]
      // eslint-disable-next-line no-redeclare
      var polygon = new fabric.Polygon(polyPoint, {
        stroke: '#333333',
        strokeWidth: 1,
        fill: '#cccccc',
        opacity: 0.3,
        selectable: false,
        hasBorders: false,
        hasControls: false,
        evented: false,
        objectCaching: false
      })
      this.activeShape = polygon
      this.canvas.add(polygon)
    }
    this.activeLine = this.line

    this.pointArray.push(circle)
    this.lineArray.push(this.line)
    this.canvas.add(this.line)
    this.canvas.add(circle)
  },
  generatePolygon() {
    var points = new Array()
    this.pointArray.map(point => {
      points.push({
        x: point.left,
        y: point.top
      })
      this.canvas.remove(point)
    })
    this.lineArray.map(line => {
      this.canvas.remove(line)
    })
    this.canvas.remove(this.activeShape).remove(this.activeLine)
    var polygon = new fabric.Polygon(points, {
      stroke: this.color,
      strokeWidth: this.drawWidth,
      fill: 'rgba(255, 255, 255, 0)',
      opacity: 1,
      hasBorders: true,
      hasControls: false
    })
    this.canvas.add(polygon)

    this.activeLine = null
    this.activeShape = null
    this.polygonMode = false
    this.doDrawing = false
    this.drawType = null
  }
}
