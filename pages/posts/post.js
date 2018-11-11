Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
   var lists = [
     

     {
       date: "Nov 11 2018",
       title: "人民空军生日快乐",
       content: "现在很多人都不记得，11月11日不只是购物节，也是人民空军的建军节。今年的珠海航展上，比歼20编队还出风头的是携新型矢量推力发动机亮相的歼10B，演示了过去外国飞行员才能完成的“眼镜蛇”、“落叶飘”、超小半径筋斗等动作，在歼20总设计师杨伟的疯狂暗示下，歼20使用国产矢量发动机已经板上钉钉。",
       view_num: "6952",
       collect_num: "10358",
       img: {
         author_img: "/images/avatar/5.png",
         post_img: "/images/post/rmjfj.jpg"
       },
       author_img_condition: true
     },
     {
       date: "Nov 11 2018",
       title: "张智霖器官捐献",
       content: "据香港媒体报道，张智霖、欧铠淳昨天出席器官捐赠日宣传活动，张智霖表示自己早已登记器官捐赠，希望藉此以爱传爱，可以延续生命帮到人，所以现在他都很用心去保持好身体。",
       view_num: "258",
       collect_num: "360",
       img: {
         author_img: "/images/avatar/3.png",
         post_img: "/images/post/zzl.jpg"
       },
       author_img_condition: true
     },
     {
       date: "Nov 11 2018",
       title: "王思聪开奖",
       content: "网易娱乐11月11日报道 11日，王思聪在网上抽出113名用户等额平分113万现金，名单公布后，众多网友表示没有被抽中，而此次抽奖活动得到了两千多万条的转发，在抽奖消息公布后，抽奖平台甚至为王思聪修改了规则。",
       view_num: "586",
       collect_num: "1582",
       img: {
         author_img: "/images/avatar/4.png",
         post_img: "/images/post/wsc.jpg"
       },
       author_img_condition: true
     },
     {
       date: "Nov 11 2018",
       title: "中国扫地僧逆袭",
       content: "2018奥地利公开赛上，国乒男女队的两大世界第一在单打项目中全部被淘汰出局，虽然这两场比赛都是国乒“内战”，但还是让球迷感到有些意外，不过，国乒男队“扫地僧”梁靖崑4-2逆袭淘汰樊振东后激动地摔拍子，引发了不小的争议。而在赛场外国乒队员也发生了一些引发球迷关注的事情。",
       view_num: "686",
       collect_num: "982",
       img: {
         author_img: "/images/avatar/5.png",
         post_img: "/images/post/sdz.jpeg"
       },
       author_img_condition: true
     },
     {
       date: "Nov 25 2016",
       title: "正在虾肥蟹壮时",
       content: "大虾是产于水中可食用的一种动物。虾是甲壳纲动物，与蟹和龙虾相关。在中间有扁而有弹性的半透明的身体，并且有像扇子般的尾巴。大虾也是网络用语，指那些善用网络，具有一定网络技术的人，是“大侠”的谐音。",
       view_num: "92",
       collect_num: "106",
       img: {
         author_img: "/images/avatar/1.png",
         post_img: "/images/post/crab.png"
       },
       author_img_condition: true
     },
     {
       date: "Nov 18 2017",
       title: "体验虚拟世界",
       content: "虚拟现实技术是一种可以创建和体验虚拟世界的计算机仿真系统，它利用计算机生成一种模拟环境，是一种多源信息融合的、交互式的三维动态视景和实体行为的系统仿真使用户沉浸到该环境中。",
       view_num: "108",
       collect_num: "88",
       img: {
         author_img: "/images/avatar/2.png",
         post_img: "/images/post/vr.png"
       },
       author_img_condition: true
     }
   ]

   
  
   this.setData({
     "list_key":lists
   });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("onReady");
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("onShow");
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("onHide");
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("onUnload");
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