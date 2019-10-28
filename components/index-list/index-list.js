// components/index-list/index-list.js
var indexArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    arrIdArr: indexArr,
    idItemHeight: 15, //每个字母 的高度
    indexShow: false,
    indexEnglish: '',

    toView: '', //scroll-iew的跳转位置  元素id
    touchStartPageY: 0,//获取鼠标点击的Y轴位置
  },

  /**
   * 组件的方法列表
   */
  methods: {


    getArrEnglish(dataArr, num, index) {
      if (!dataArr[index + num]) return; 
      return dataArr[index + num]
    },

    handleTouchstart(ev){
      console.log('移入',ev);
      this.setData({
        toView: ev.currentTarget.id,
        touchStartPageY: ev.touches[0].pageY,//获取鼠标点击的Y轴位置
        indexShow: true, //让提示框显示
        indexEnglish: ev.currentTarget.id //提示框显示的英文字母
      });
      //触发父组件 事件
      this.triggerEvent('onChange', { id: ev.currentTarget.id });

    },

    // handleTouchmoveTest(ev){
    //   console.log(ev, '2121212');
    // },



    handleTouchmove(ev){
      // console.log('正在移动', ev);

      var touchStartLetterIndex = this.data.arrIdArr.indexOf(ev.target.id);   //第一次鼠标移动上去的  字母 所在数组的 索引
      var touchmovePageY = ev.touches[0].pageY;  // 鼠标移动时 距离 所左上角的 Y坐标
      // Math.round((touchmovePageY - this.data.touchStartPageY)  // 四舍五入
      // console.log("点击索引和移动时坐标和移入的坐标", touchStartLetterIndex, touchmovePageY, this.data.touchStartPageY);
      //鼠标 自点击后， 鼠标移动了 几个 字母  的距离
      let offsetNumber = Math.round((touchmovePageY - this.data.touchStartPageY) / this.data.idItemHeight);
      //获取 鼠标下 的  字母
      let moveLetter = this.getArrEnglish(this.data.arrIdArr, offsetNumber, touchStartLetterIndex);
      console.log('moveLetter is', moveLetter);
      if ( moveLetter ) { 
        this.setData({
          indexEnglish: moveLetter
        })

        //触发父组件 事件
        this.triggerEvent('onChange', { id: moveLetter });
      }
    },
    handleTouchend(ev){
      console.log('移出', ev);
/*
      this.setData({
        indexShow: true,
        indexEnglish: ev.currentTarget.id
      })
*/
      this.setData({
        indexShow: false
      })

    }

  }
})
