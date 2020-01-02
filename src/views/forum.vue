<template >
<div id="forum">
    <div  class="container">
        <div class="topbar">
          <ul >
            <li class="active"><a href="">论坛</a></li>
            <li><a href="">家园</a></li>
            <li><a href="">广播</a></li>
            <li><a href="">积分充值</a></li>
            <li><a href="">淘贴</a></li>
            <li><a href="">马甲</a></li>
            <li><a href="">签到</a></li>
            <li><a href="">APP下载</a></li>
            <li><a href="">快捷导航</a></li>
          </ul >
        </div>
        <div class="warning row no-gutters">
          <div class="col-lg-6 col-md-12">

            <h6>公告: </h6> 
            <span>即日起严禁任何人发布任何微信群\二维码</span>
            <p>(2018-2-26)</p>
          </div>
          <div  class="col-lg-6 col-md-12">

            <p> 今日: </p>
            <h6>1248</h6>
            <p>&nbsp;| &nbsp;昨日: </p>
            <h6>2683</h6>
            <p>&nbsp;| &nbsp;帖子:</p>
            <h6>18701694</h6>
            <p>&nbsp;| &nbsp;会员: </p>
            <h6>1252953</h6>
            <p>&nbsp;| &nbsp;欢迎新会员:</p>
            <h6>nianzxc</h6>
          </div>
        </div>
        <div class="fool1">
          <div class="top_topic" >
              <div class="top_topic1 active">
                <b>论坛头条</b>
              </div>
              <div class="top_topic2">
                <b>热门话题</b>
              </div>
          </div>
          <div class="lunbo">
            <div class="lunbo_img active">
              <img src="img/forum/1.jpg" alt="">
              <div class="cover">画画一时爽</div>
            </div>
            <div class="lunbo_img">
              <img src="img/forum/1.jpg" alt="">
              <div class="cover">画画一时爽</div>
            </div>
            <div class="lunbo_img">
              <img src="img/forum/1.jpg" alt="">
              <div class="cover">画画一时爽</div>
            </div>
            <div class="lunbo_img">
              <img src="img/forum/1.jpg" alt="">
              <div class="cover">画画一时爽</div>
            </div>
            <div class="changeImg">
              <ul>
                <li class="active"><a href=""></a></li>
                <li><a href=""></a></li>
                <li><a href=""></a></li>
                <li><a href=""></a></li>
              </ul>
            </div>
          </div>
          <div class="news">
            <h3><a href="">穿针引线网2020校园大使招募啦~</a></h3>
            <p>拥有一份独一无二的实习机会、提前收获更多职场经验、让大学多姿多彩拥有无限可能</p>
            <h3><a href="">服装设计研究生的婚纱创业路（5）</a></h3>
            <p>工作室暂时关闭了。才短短一年多的时间，严格地说还不算入行吧？觉得很可惜，但是</p>

            <div class="news_detail">
              <ul>
                <li v-for="i of 12" :key="i">
                  <a href="" title="" target="_blank">关于服装行业职涯个人小感想，小困惑</a>
                </li>

              </ul>
            </div>
          </div>
        </div>
        <div class="fool-card">
          <div>
            <h2>服装信息</h2>
            <div>
              <p>分区版主：</p>
              <a href="">www198352</a>
              <a href="">熙熙的龙</a>
            </div>
          </div>
          <ul class="row no-gutters">
            <li class="col-lg col-md-4 col-sm-6 card_item"   v-for="i of 5" :key="i">
              <a href=""><img src="img/forum/common_163_icon.png" alt=""></a>
              <div class="card_detail">
                  <h4>招聘/求职</h4><span>(103)</span>
                  <p>主题:   9万, 帖数:   74万</p>
                  <a href="">最后发表：4小时前</a>
              </div>
            </li>
          </ul>
        </div>
        <div class="fool-card">
          <div>
            <h2>服装设计</h2>
            <div>
              <p>分区版主：</p>
              <a href="">www198352</a>
              <a href="">熙熙的龙</a>
            </div>
          </div>
          <ul class="row no-gutters">
            <li class="col-lg col-md-4 col-sm-6 card_item"  v-for="i of 5" :key="i">
              <a href=""><img src="img/forum/common_163_icon.png" alt=""></a>
              <div class="card_detail">
                  <h4>招聘/求职</h4><span>(103)</span>
                  <p>主题:   9万, 帖数:   74万</p>
                  <a href="">最后发表：4小时前</a>
              </div>
            </li>
            
          </ul>
        </div>
        <div class="fool-card">
          <div>
            <h2>服装应用</h2>
            <div>
              <p>分区版主：</p>
              <a href="">www198352</a>
              <a href="">熙熙的龙</a>
            </div>
          </div>
          <ul class="row no-gutters">
            <li class="col-lg-3 col-md-4 col-sm-6 card_item" v-for="i of 8" :key="i">
              <a href=""><img src="img/forum/common_163_icon.png" alt=""></a>
              <div class="card_detail">
                  <h4>招聘/求职</h4><span>(103)</span>
                  <p>主题:   9万, 帖数:   74万</p>
                  <a href="">最后发表：4小时前</a>
              </div>
            </li>
           
          </ul>
        </div>
        <div class="fool-card">
          <div>
            <h2>服装圈子</h2>
            <div>
              <p>分区版主：</p>
              <a href="">www198352</a>
              <a href="">熙熙的龙</a>
            </div>
          </div>
          <ul class="row no-gutters">
            <li class="col-lg-3 col-md-4 col-sm-6 card_item" v-for="i of 14" :key="i">
              <a href=""><img src="img/forum/common_163_icon.png" alt=""></a>
              <div class="card_detail">
                  <h4>招聘/求职</h4><span>(103)</span>
                  <p>主题:   9万, 帖数:   74万</p>
                  <a href="">最后发表：4小时前</a>
              </div>
            </li>
          </ul>
        </div>
        <div class="fool-card">
          <div>
            <h2>休闲大区</h2>
            <div>
              <p>分区版主：</p>
              <a href="">www198352</a>
              <a href="">熙熙的龙</a>
            </div>
          </div>
          <ul class="ul_2">
            <li class="card_item" v-for="i of 2" :key="i">
              <a href=""><img src="img/forum/common_163_icon.png" alt=""></a>
              <div class="card_detail">
                  <h4>招聘/求职</h4><span>(103)</span>
                  <p>主题:   9万, 帖数:   74万</p>
                  <a href="">最后发表：4小时前</a>
              </div>
            </li>
            
          </ul>
        </div>
        <div class="fool-card">
          <div>
            <h2>引线牵手</h2>
            <div>
              <p>分区版主：</p>
              <a href="">www198352</a>
              <a href="">熙熙的龙</a>
            </div>
          </div>
          <ul class="ul_2">
            <li class="card_item" v-for="i of 2" :key="i">
              <a href=""><img src="img/forum/common_163_icon.png" alt=""></a>
              <div class="card_detail">
                  <h4>招聘/求职</h4><span>(103)</span>
                  <p>主题:   9万, 帖数:   74万</p>
                  <a href="">最后发表：4小时前</a>
              </div>
            </li>
          </ul>
        </div>
        <div class="fool-card">
          <div>
            <h2>社区服务</h2>
            <div>
              <p>分区版主：</p>
              <a href="">www198352</a>
              <a href="">熙熙的龙</a>
            </div>
          </div>
          <ul class="ul_2">
            <li class="card_item" >
              <a href=""><img src="img/forum/common_163_icon.png" alt=""></a>
              <div class="card_detail">
                  <h4>招聘/求职</h4><span>(103)</span>
                  <p>主题:   9万, 帖数:   74万</p>
                  <a href="">最后发表：4小时前</a>
              </div>
            </li>
          </ul>
        </div>
        <div class="link">
          <ul>
            <li><a href=""> 服装设计培训</a></li>
            <li><a href=""> 时尚头条</a></li>
            <li><a href=""> 云趋势</a></li>
            <li><a href=""> 中国服装协会</a></li>
            <li><a href=""> 中国服装网</a></li>
            <li><a href=""> 中国品牌服装网</a></li>
            <li><a href=""> 编织人生</a></li>
            <li><a href=""> 全球纺织网</a></li>
            <li><a href=""> 女装批发</a></li>
            <li><a href=""> 中国丽人网</a></li>
            <li><a href=""> 有货网</a></li>
            <li><a href=""> 包包论坛</a></li>
            <li><a href=""> 女装加盟</a></li>
          </ul>
        </div>
    </div>
</div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
*{
  padding: 0;
  box-sizing: border-box;
}
#forum{
color: rgb(68, 68, 68);
  font:12px / 1.5 "PingFang SC", "Microsoft YaHei", 微软雅黑, STHeiti, sans-serif;
  background: #f1f1f1;
  text-align: center;
}

a{
  text-decoration: none;
  cursor: pointer;
  color:#626262;
}
a:hover{
  color: rgb(22, 170, 58);
  text-decoration: none;
}
ul{
  list-style: none;
}
@media (min-width: 1200px){
.container {
    max-width: 1210px;
  }
}
#forum  .contanier{
 padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
.topbar{
  width:100%;
  height:45px;
  background-color: #fff;
  line-height: 45px;
  margin:10px 0;
}
.topbar ul{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.topbar ul li a{
  font-size: 14px;
  color: #626262;
  line-height: 25px;
  margin: 5px 0px 5px 20px;
  padding: 5px 10px;
}
.topbar ul li.active a{
  background-color:rgb(22, 170, 58); 
  color:#fff;
  border-radius: 2px;
}
.topbar ul li:last-child a{
  color:#336699;
  font-weight: bold; 
}
.topbar ul li a:hover{
  color:rgb(22, 170, 58); 
}
.warning{
  display: flex;
  justify-content: space-between;
}
.warning>div{
  display: flex;
  align-items: center;
  height:40px;
  line-height: 40px;
}
.warning div h6{
  font-size: 12px;
  color:#444444;
  margin: 0;
}
.warning div p{
  font-size: 12px;
  color:#999999;
  margin:0;
}
.warning div span{
  color:#f00;
}
.warning>div:last-child{
  justify-content: flex-end;
}
.fool1{
  width:100%;
  background-color: #fff;
  display: flex;
  margin-bottom:20px;
}
.fool1 .top_topic{
  width:75px;
}
.fool1 .top_topic  .top_topic1.active{
  background: url("/project/img/forum/luntan_hot.jpg") no-repeat;
    width: 63px;
    height: 255px;
    color: #fff;
    cursor: pointer;
}
.fool1 .top_topic   b{
  float: left;
  font-weight: 400;
  height: 55px;
  padding: 15px 0 0;
  text-align: center;
  width: 55px;
  font-size: 20px;
}
.fool1 .top_topic  .top_topic2.active{
  background: url(/img/forum/luntan_hot.jpg) no-repeat -50px 0;
    width: 63px;
    height: 255px;
    color: #fff;
    cursor: pointer;
}
.lunbo{
  position: relative;
  margin:40px 20px 10px 50px;
}
.lunbo .lunbo_img{
  display: none;
  position: relative;
}
.lunbo .lunbo_img.active{
  display: block;
}
.lunbo .lunbo_img img{
  width:470px;
}
.lunbo .lunbo_img>div{
  width: 470px;
  height: 55px;
  text-align: center;
  line-height: 40px;
  color: #fff;
  position: absolute;
  font-size: 16px;
  bottom: 0;
  left: 0;
  /* background-color: rgba(0 0 0 .6); */
  background: #000;
  opacity: .6; 
}
.lunbo .changeImg ul{
  display: flex;
  position: absolute;
  bottom: 5px;
  left:130px;
  margin:0;
}
.lunbo .changeImg ul li a{
  width: 45px;
  height: 6px;
  display: inline-block;
  background: #e4e4e4;
  font-size: 0;
  line-height: 0;
  margin: 0 2px;
}
.lunbo .changeImg ul li.active a{
  background-color:rgb(22, 170, 58); 
}
.news {
  margin:20px 25px 0 20px;
}
.news h3{
  text-align: center;
}
.news h3 a{
 font-size: 18px;
 color:#626262;
 padding:15px 0 5px;
 text-align: center;
}
.news h3 a:hover{
  color:rgb(22, 170, 58);
}
.news p{
  font-size: 14px;
  color:#444444;
  margin: 0;
}
.news_detail ul{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 5px 0 0 0;
}
.news_detail ul li{
  background: url(/project/img/forum/ico.png) no-repeat scroll 1px -95px;
  padding:0 0 0 10px;
  line-height: 30px;
  width:267;
}
.news_detail ul li a{
  font-size: 14px;
}
.fool-card{
  background-color: #fff;
  padding:20px 20px 0 30px;
}
.fool-card div:first-child{
  width:100%;
  background-color: rgb(242, 242, 242);
  display: flex;
  justify-content: space-between;
  height:45px;
  padding: 0 10px;
}
.fool-card div:first-child h2{
  font-size: 16px;
  color:#000;
  margin: 0;
  line-height: 45px;
}
.fool-card div:first-child>div{
  display: flex;
}
.fool-card div:first-child>div p{
  font-size: 14px;
  color:#888888;
  margin:0;
  line-height: 45px;
}
.fool-card div:first-child>div a{
  font-size: 12px;
  color:#000;
  line-height: 45px;
}
.fool-card  ul{
  margin:0;
}
.fool-card  ul li{
  padding:30px 0 30px 20px;
  display: flex;
}
.fool-card  ul li .card_detail{
  margin-left:10px;
  font-size: 12px;
}
.fool-card  ul li .card_detail h4{
  font-size: 12px;
  font-weight: bold;
  margin:0;
  display: inline;
  line-height: 21px;
}
.fool-card  ul li .card_detail span{
  color: rgb(242, 108, 79);
  line-height: 21px;
}
.fool-card  ul li .card_detail p{
  margin:0;
  line-height: 21px;
}
.fool-card ul.ul_2{
  display: flex;
}
.fool-card ul.ul_2 li{
  width:25%;
}
.fool-card ul.ul_2 li{
  padding: 30px 0
}

.link{
  background: #fff;
  padding:10px;
  margin: 10px 0;
}
.link ul{
 list-style: none;
 margin:0;
 display: flex;
 flex-wrap: wrap;
}
.link ul li{
  min-width:110px;
  line-height:24px;
}
.link ul li a{
  color: #626262;
}
.link ul li a:hover{
  color: #16aa3a;
}
</style>