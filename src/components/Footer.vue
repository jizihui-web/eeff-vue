<template >
 <footer>
  <div class="footer-list">
    <div class="foot row ">
     <div class="foot-left col-md-6 col-sm-12">
       <div class="foot-logo">
         <a href="">
           <img src="img/index/logo.png" alt=""> 
         </a>
         <p>为中国服装穿针引线！</p>
       </div>
       <div class="left-detail">
         <p>穿针引线网成立于2001年，是服装行业深度交流平台，穿针引线网一直在以实际行动促进业界同仁的联合与中国服装行业的发展。</p>
       </div>
     </div>
     <div class="foot-right col-md-6 col-sm-12">
       <ul>
         <li ><a href="">关于</a></li>
         <li><a href="">关于引线</a></li>
         <li><a href="">产品服务</a></li>
       </ul>
       <ul>
        <li><a href="">商务</a></li>
        <li><a href="">关于引线</a></li>
        <li><a href="">产品服务</a></li>
        <li><a href="">产在线客服</a></li>
      </ul>
      <ul>
        <li><a href="">帮助</a></li>
        <li><a href="">关于引线</a></li>
        <li><a href="">产品服务</a></li>
        <li><a href="">关于引线</a></li>
        <li><a href="">产品服务</a></li>
      </ul>
     </div>
    </div> 
  </div> 
  <div class="foot-buttom row no-gutter">
    <div class="copyright col-lg-6 col-md-12">
        <p>穿针引线网 (粤ICP备05001120号) Copyright © 2001 - 2019 eeff.net. All Rights Reserved </p>  
    </div>
    <div class=" col-lg-3 col-md-12">
      <ul class="breadcrumb">
        <li class="breadcrumb-item">
          <a href="">无图浏览</a>
        </li>
        <li class="breadcrumb-item">
          <a href="">手机版</a>
        </li>
        <li class="breadcrumb-item">
          <a href="">网站地图</a>
        </li>
      </ul>
    </div>
    <div class="contant col-lg-3 col-md-12">
      <a href="">
        <i class="fa fa-mobile fa-lg" aria-hidden="true"></i>App
      </a>
      <a href="">
        <i class="fa fa-weibo fa-lg" aria-hidden="true"></i>
      </a>
      <a href="">
        <i class="fa fa-weixin fa-lg" aria-hidden="true"></i>
      </a>
    </div>
  </div>
</footer>
</template>
<script>
export default {
  
}
</script>
<style scoped>
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}

footer{
  width:100%;
  color: rgb(68, 68, 68);
  font: 12px/1.5 "PingFang SC", "Microsoft YaHei",  STHeiti, sans-serif;
}
footer .row{
  margin:0;
}
footer .footer-list{
  background: rgb(34, 34, 34);
  color: rgb(153, 153, 153);
  padding:50px 10% 25px;
}
footer .foot{
 display: flex;
 justify-content: space-between;
}
footer .foot-left{
  width:465px;
}
footer .foot-logo{
  display: flex;
  align-items: center;
}
footer .foot-logo p{
  margin-left:20px;
  font-size: 14px;
  color: rgb(255, 255, 255);
}
footer .left-detail{
  margin:18px 0 39px;
}
footer .left-detail p{
  line-height: 20px;
  text-align: left;
}
footer .foot-right{
  display: flex;
  justify-content: space-around;
  width:490px;
}
footer .foot-right ul{
  list-style: none;
}
footer .foot-right ul li{
  margin-bottom: 14px;
}
footer .foot-right ul li a{
  color: rgb(153, 153, 153);
}
footer .foot-right ul li a:hover{
  text-decoration: none;
  color: rgb(68, 68, 68);
}
footer .foot-right ul li:first-child a{
  color:#fff;
  font-size: 16px;
}
footer .foot-buttom{
background: #000;
padding:0 10%
}
footer .breadcrumb{
  padding: 0;
  margin:0;
  background-color:transparent;
}
footer .breadcrumb-item+.breadcrumb-item::before{
  content:"|";
}
footer .breadcrumb-item a{
  color: rgb(68, 68, 68);
  line-height: 46px;
  font-size: 14px;
}
footer .breadcrumb-item a:hover{
  text-decoration: none;
  color: rgb(153, 153, 153);
}
footer .copyright p{
  margin: 0;
}
footer .copyright{
  height:46px;
  display: flex;
  align-items: center;
}
footer .contant a{
  color: rgb(153, 153, 153);
  display: inline-block;
  margin-right:30px;
  line-height: 46px;
}
footer .contant a:hover{
  color:#fff;
}
</style>
