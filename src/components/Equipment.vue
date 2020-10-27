<template>
  <section>
    <h3>消控室报警主机</h3>
    <div class="item-style">
      <div class="img-style">
        <img
          src="@/assets/crtImg/bjzj.svg"
          title="消防报警主机"
          alt="消防报警主机"
          @click="handleImg(require('@/assets/crtImg/bjzj.svg'))"
        />
        <p>8374832</p>
      </div>
    </div>
    <h3>智慧安全用电系统</h3>
    <div class="item-style">
      <div class="img-style">
        <img
          src="@/assets/crtImg/aqydxt.svg"
          title="智慧安全用电系统"
          alt="智慧安全用电系统"
          @click="handleImg(require('@/assets/crtImg/aqydxt.svg'))"
        />
        <p>8374832</p>
      </div>
    </div>
    <h3>消防水池</h3>
    <div class="item-style">
      <div class="img-style">
        <img
          src="@/assets/crtImg/xfsc.svg"
          title="消防水池"
          alt="消防水池"
          @click="handleImg(require('@/assets/crtImg/xfsc.svg'))"
        />
        <p>8374832</p>
      </div>
    </div>
    <h3>高位水箱</h3>
    <div class="item-style">
      <div class="img-style">
        <img
          src="@/assets/crtImg/gwsx.svg"
          title="高位水箱"
          alt="高位水箱"
          @click="handleImg(require('@/assets/crtImg/gwsx.svg'))"
        />
        <p>8374832</p>
      </div>
    </div>
    <h3>淋喷系统</h3>
    <div class="item-style">
      <div class="img-style">
        <img
          src="@/assets/crtImg/lpxt.svg"
          title="淋喷系统"
          alt="淋喷系统"
          @click="handleImg(require('@/assets/crtImg/lpxt.svg'))"
        />
        <p>8374832</p>
      </div>
    </div>
    <h3>市政消防栓</h3>
    <div class="item-style">
      <div class="img-style">
        <img
          src="@/assets/crtImg/xfs.svg"
          title="市政消防栓"
          alt="市政消防栓"
          @click="handleImg(require('@/assets/crtImg/xfs.svg'))"
        />
        <p>8374832</p>
      </div>
    </div>
    <h3>独立烟感系统</h3>
    <div class="item-style">
      <div class="img-style">
        <img
          src="@/assets/crtImg/ygxt.svg"
          title="独立烟感系统"
          alt="独立烟感系统"
          @click="handleImg(require('@/assets/crtImg/ygxt.svg'))"
        />
        <p>8374832</p>
      </div>
    </div>
  </section>
</template>
<script>
/**
 * @author 🌈MARS <wangdaoo@yeah.net>
 * @desc 📝设备
 * @copyright 🤝In me the tiger sniffs the rose.
 */
import { mapActions } from 'vuex'
export default {
  name: 'Equipment',
  methods: {
    ...mapActions(['ChangeImg']),
    /** 插入图片 */
    handleImg(img) {
      let query = {
        url: img,
        id: 1,
        name: '设备测试',
        no: 17511686400,
        hui: 123123123,
        address: 123123123,
        position: 33333333,
        originX: 'center',
        originY: 'center',
      }
      console.log(query);
      this.ChangeImg(query)
    }
  }
}
</script>
<style lang="css" scoped>
h3 {
  margin: 9px;
  font-size: 14px;
  color: #919191;
}
.item-style {
  margin: auto 9px;
  border-bottom: 1px solid #cccccc;
  display: flex;
  flex-wrap: wrap;
}
img {
  width: 46px;
  cursor: pointer;
}
.item-style .img-style {
  width: 80px;
  text-align: center;
}
p {
  text-align: center;
  width: 80px;
  overflow: hidden;
  font-size: 12px;
  color: rgb(141, 138, 138);
  margin-bottom: 0px;
}
</style>
