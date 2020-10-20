/* eslint-disable no-case-declarations */
/**
 * @author 🌈MARS <wangdaoo@yeah.net>
 * @desc 📝单一图形绘制
 * @copyright 🤝In me the tiger sniffs the rose.
 */
import { fabric } from 'fabric';
export const DrawMethods = {
  /** 图形绘制 */
  _draw() {
    /** 重绘当前图形 */
    if (this.drawingObject) {
      this.canvas.remove(this.drawingObject);
    }
    let canvasObject = null;
    let left = this.mouseFrom.x,
      top = this.mouseFrom.y,
      mouseFrom = this.mouseFrom,
      mouseTo = this.mouseTo;
    switch (this.drawType) {
      /** 正方形 */
      case 'square':
        var path =
          'M ' +
          mouseFrom.x +
          ' ' +
          mouseFrom.y +
          ' L ' +
          mouseTo.x +
          ' ' +
          mouseFrom.y +
          ' L ' +
          mouseTo.x +
          ' ' +
          mouseTo.y +
          ' L ' +
          mouseFrom.x +
          ' ' +
          mouseTo.y +
          ' L ' +
          mouseFrom.x +
          ' ' +
          mouseFrom.y +
          ' z';
        canvasObject = new fabric.Path(path, {
          left: left,
          top: top,
          stroke: this.color,
          strokeWidth: this.drawWidth,
          fill: 'rgba(255, 255, 255, 0)',
          hasControls: false,
        });
        break;
      /** 圆形 */
      case 'round':
        // let radius =
        //   Math.sqrt(
        //     (mouseTo.x - left) * (mouseTo.x - left) +
        //       (mouseTo.y - top) * (mouseTo.y - top)
        //   ) / 2;
        canvasObject = new fabric.Ellipse({
          left: (mouseTo.x - left) / 2 + left,
          top: (mouseTo.y - top) / 2 + top,
          stroke: this.color,
          fill: 'rgba(255, 255, 255, 0)',
          originX: 'center',
          originY: 'center',
          rx: Math.abs(left - mouseTo.x) / 2,
          ry: Math.abs(top - mouseTo.y) / 2,
          strokeWidth: this.drawWidth,
          hasControls: false,
        });
        break;
      /** 箭头 */
      case 'arrow':
        let x1 = mouseFrom.x,
          x2 = mouseTo.x,
          y1 = mouseFrom.y,
          y2 = mouseTo.y;
        let w = x2 - x1,
          h = y2 - y1,
          sh = Math.cos(Math.PI / 4) * 16;
        let sin = h / Math.sqrt(Math.pow(w, 2) + Math.pow(h, 2));
        let cos = w / Math.sqrt(Math.pow(w, 2) + Math.pow(h, 2));
        let w1 = (16 * sin) / 4,
          h1 = (16 * cos) / 4,
          centerx = sh * cos,
          centery = sh * sin;
        // eslint-disable-next-line no-redeclare
        var path = ' M ' + x1 + ' ' + y1;
        path += ' L ' + (x2 - centerx + w1) + ' ' + (y2 - centery - h1);
        path += ' L ' + (x2 - centerx + w1 * 2) + ' ' + (y2 - centery - h1 * 2);
        path += ' L ' + x2 + ' ' + y2;
        path += ' L ' + (x2 - centerx - w1 * 2) + ' ' + (y2 - centery + h1 * 2);
        path += ' L ' + (x2 - centerx - w1) + ' ' + (y2 - centery + h1);
        path += ' Z';
        canvasObject = new fabric.Path(path, {
          stroke: this.color,
          fill: this.color,
          strokeWidth: this.drawWidth,
          hasControls: false,
        });
        break;
      /** 文本框 */
      case 'text':
        this.textBox = new fabric.Textbox('', {
          left: mouseFrom.x,
          top: mouseFrom.y - 10,
          fontSize: 22,
          fill: this.color, // 字体颜色
          // fontStyle: 'italic',
          // fontFamily: 'Delicious', // 设置字体
          // stroke: '#ecf0f1', // 描边颜色
          // strokeWidth: 3, // 描边宽度
          hasControls: false, // 是否开启实例拖拽
          borderColor: '#2ecc71', // 边框颜色
          editingBorderColor: '#3498db', // 点击文字进入编辑状态时的边框颜色
        });
        this.canvas.add(this.textBox);
        this.textBox.enterEditing();
        this.textBox.hiddenTextarea.focus();
        break;
      default:
        break;
    }
    if (canvasObject) {
      this.canvas.add(canvasObject);
      this.drawingObject = canvasObject;
    }
  },
};
