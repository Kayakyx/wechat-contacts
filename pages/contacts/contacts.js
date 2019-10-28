// pages/contacts/contacts.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    //通讯录假数据
    contactsList: [
      {
        "kind": "1",
        "entitys": [
          {
            "id": 889,
            "managerCode": "785868",
            "initial": "1",
            "name": "1221",
            "gender": 1
          }
        ]
      },
      {
        "kind": "C",
        "entitys": [
          {
            "id": 845,
            "managerCode": "105050",
            "initial": "C",
            "name": "测试姓名",
            "gender": 0
          },
          {
            "id": 884,
            "managerCode": "999996",
            "initial": "C",
            "name": "册",
            "gender": 1
          },
          {
            "id": 844,
            "managerCode": "000123",
            "initial": "C",
            "name": "测试员工",
            "gender": 1
          }
        ]
      },
      {
        "kind": "G",
        "entitys": [
          {
            "id": 912,
            "managerCode": "400414",
            "initial": "G",
            "name": "高小阔",
            "gender": 1
          },
          {
            "id": 1045,
            "managerCode": "547566",
            "initial": "G",
            "name": "高阔入职",
            "gender": 1
          },
          {
            "id": 1100,
            "managerCode": "000989",
            "initial": "G",
            "name": "高德钊",
            "gender": 1
          }
        ]
      },
      {
        "kind": "H",
        "entitys": [
          {
            "id": 1050,
            "managerCode": "101309",
            "initial": "H",
            "name": "红色",
            "gender": 1
          },
          {
            "id": 1051,
            "managerCode": "108525",
            "initial": "H",
            "name": "红星",
            "gender": 1
          },
          {
            "id": 1096,
            "managerCode": "123123",
            "initial": "H",
            "name": "洪烽杰",
            "gender": 0
          }
        ]
      },
      {
        "kind": "L",
        "entitys": [
          {
            "id": 779,
            "managerCode": "000929",
            "initial": "L",
            "name": "李帅",
            "gender": 1
          },
          {
            "id": 852,
            "managerCode": "101507",
            "initial": "L",
            "name": "刘菲菲",
            "gender": 0
          },
          {
            "id": 1046,
            "managerCode": "441486",
            "initial": "L",
            "name": "ll",
            "gender": 1
          },
          {
            "id": 919,
            "managerCode": "454554",
            "initial": "L",
            "name": "李媛媛",
            "gender": 1
          },
          {
            "id": 920,
            "managerCode": "100900",
            "initial": "L",
            "name": "李多鹅",
            "gender": 0
          },
          {
            "id": 1055,
            "managerCode": "100852",
            "initial": "L",
            "name": "李三三",
            "gender": 1
          },
          {
            "id": 1090,
            "managerCode": "082929",
            "initial": "L",
            "name": "娄馨予",
            "gender": 1
          }
        ]
      },
      {
        "kind": "P",
        "entitys": [
          {
            "id": 848,
            "managerCode": "000937",
            "initial": "P",
            "name": "潘仲慧",
            "gender": 0
          },
          {
            "id": 1098,
            "managerCode": "1",
            "initial": "P",
            "name": "彭于晏",
            "gender": 1
          }
        ]
      },
      {
        "kind": "T",
        "entitys": [
          {
            "id": 842,
            "managerCode": "989898",
            "initial": "T",
            "name": "test",
            "gender": 1
          }
        ]
      },
      {
        "kind": "W",
        "entitys": [
          {
            "id": 104,
            "managerCode": "000132",
            "initial": "W",
            "name": "王洪磊",
            "gender": 1
          },
          {
            "id": 871,
            "managerCode": "000950",
            "initial": "W",
            "name": "王小7",
            "gender": 0
          },
          {
            "id": 878,
            "managerCode": "000959",
            "initial": "W",
            "name": "王小黑修改2",
            "gender": 1
          },
          {
            "id": 24,
            "managerCode": "580093",
            "initial": "W",
            "name": "王名嫱",
            "gender": 0
          },
          {
            "id": 777,
            "managerCode": "101385",
            "initial": "W",
            "name": "王凤婷",
            "gender": 0
          },
          {
            "id": 853,
            "managerCode": "000999",
            "initial": "W",
            "name": "王橘子",
            "gender": 1
          },
          {
            "id": 863,
            "managerCode": "00947",
            "initial": "W",
            "name": "王宗祥",
            "gender": 1
          },
          {
            "id": 864,
            "managerCode": "000949",
            "initial": "W",
            "name": "魏金越",
            "gender": 0
          },
          {
            "id": 866,
            "managerCode": "222211",
            "initial": "W",
            "name": "王励勤",
            "gender": 1
          },
          {
            "id": 1072,
            "managerCode": "188188",
            "initial": "W",
            "name": "王多余",
            "gender": 0
          }
        ]
      },
      {
        "kind": "X",
        "entitys": [
          {
            "id": 847,
            "managerCode": "000935",
            "initial": "X",
            "name": "解雨薇",
            "gender": 0
          },
          {
            "id": 1087,
            "managerCode": "000778",
            "initial": "X",
            "name": "谢广坤",
            "gender": 0
          }
        ]
      },
      {
        "kind": "Y",
        "entitys": [
          {
            "id": 1081,
            "managerCode": "000987",
            "initial": "Y",
            "name": "杨鑫雨",
            "gender": 0
          },
          {
            "id": 1094,
            "managerCode": "001111",
            "initial": "Y",
            "name": "于晓媚",
            "gender": 1
          },
          {
            "id": 1097,
            "managerCode": "0018306",
            "initial": "Y",
            "name": "杨冬雪",
            "gender": 0
          },
          {
            "id": 1093,
            "managerCode": "001830",
            "initial": "Y",
            "name": "杨冬雪",
            "gender": 0
          }
        ]
      },
      {
        "kind": "Z",
        "entitys": [
          {
            "id": 916,
            "managerCode": "852656",
            "initial": "Z",
            "name": "张王",
            "gender": 0
          },
          {
            "id": 1088,
            "managerCode": "000454",
            "initial": "Z",
            "name": "张庆封",
            "gender": 0
          },
          {
            "id": 1099,
            "managerCode": "000189",
            "initial": "Z",
            "name": "张春波",
            "gender": 1
          },
          {
            "id": 1048,
            "managerCode": "101304",
            "initial": "Z",
            "name": "张三十",
            "gender": 1
          },
          {
            "id": 1075,
            "managerCode": "000977",
            "initial": "Z",
            "name": "朱昱姿",
            "gender": 0
          },
          {
            "id": 1080,
            "managerCode": "000986",
            "initial": "Z",
            "name": "郑科",
            "gender": 1
          },
          {
            "id": 1082,
            "managerCode": "000996",
            "initial": "Z",
            "name": "在大海边啊126",
            "gender": 1
          },
          {
            "id": 1095,
            "managerCode": "000988",
            "initial": "Z",
            "name": "张廷宇",
            "gender": 1
          },
          {
            "id": 1063,
            "managerCode": "400401",
            "initial": "Z",
            "name": "张飞非",
            "gender": 1
          }
        ]
      }
    ], 
    windowHeight: 0, 
    toViewId: '', //scroll-view 跳转id
  },

  //字母排序变化
  handleLetterOrder(ev){
    console.log('父-字母排序变化', ev);
    this.setData({
      toViewId: ev.detail.id
    });
  },

  handleGetSystemInfo(){
    wx.getSystemInfo({
      success: (res) => {
        this.setData({
          windowHeight: res.windowHeight
        });
      }
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    this.handleGetSystemInfo();

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})