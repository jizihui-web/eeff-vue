<template>
  <header>
    <div class="navbar" id="header-navbar">
      <div class="brand">
        <div class="logo">
            <a href="" class="nav-link">
                <svg width="128px" height="40px" viewBox="0 0 1237.7 394"><g fill-rule="evenodd" clip-rule="evenodd" fill="#fff"><path d="M799.9,169c-0.4,36-8.6,46.2-16.1,53.2c-6.6-6.5-16.1-17.6-16.5-53.2v-48.5H706c0,12.6,0,20.5,0,24.1h25.1c2.1,0,3.7,1.7,3.7,3.7l0,0c0,2.1-1.7,3.7-3.7,3.7H706c0,3.8,0,9.6,0,37.8c0,13.6,9,18.9,27.2,22.2c-33.3,10.8-58.2,6.7-58.2-22.2c0-27.7,0-33.3,0-37.8h-16c-2.1,0-3.7-1.7-3.7-3.7l0,0c0-2.1,1.7-3.7,3.7-3.7h16c0-8.4,0.2-16-0.2-24.1h-13.6c-2.1,0-3.7-1.9-3.7-4.3l0,0c0-2.3,1.7-4.3,3.7-4.3h106.1V54c0.1-3.5,0.8-5,6.2-5.6h20.2c5.2,0.6,5.9,2.1,6.1,5.6c0,40.9,0,52.6,0,57.9h31.4c2,0,3.7,1.9,3.7,4.3l0,0c0,2.3-1.7,4.3-3.7,4.3h-31.4C799.9,126.1,799.9,137.7,799.9,169L799.9,169zM654.8,98.2c30.2-0.2,31.1-4.6,40-20.2l36.3-0.1c2.1,0,3.7-1.7,3.7-3.7l0,0c0-2.1-1.7-3.7-3.7-3.7h-33.4l8.6-21.8C653,48.9,678.6,76.5,654.8,98.2z"></path><path d="M455,98.9V79.6c-0.5-11,7.3-16.6,29-16.6l39.3,0v-8.8c0.1-3.8,0.6-5.3,6.3-5.9H555c6,0.7,6,2.5,6.2,7.3c0,0,0,0,0,0v7.3h41.1c18.6,0,27.3,5.4,27.1,16.1c-0.2,16-4.3,20-32.9,19.8l-0.3-19c-0.1-8.7-7.2-9.5-19.6-9.5h-65.6c-16.6,0-22.3,1-23,11C487.3,92.1,481.6,98.4,455,98.9L455,98.9z M513.4,78.9c-6.8,0-8.2,1.1-11.3,9.1c-3.5,8.9-6.6,14.3-13.8,18.5c26.8,0.5,32.8-0.8,42.4-16.4c4.5-7.3,4.2-11.1-3.4-11.1H513.4L513.4,78.9zM567.7,78.9h-13.9c-7.6,0-7.9,3.9-3.4,11.1c9.6,15.6,15.7,17,42.4,16.4c-7.2-4.2-10.4-9.6-13.8-18.5C575.9,80,574.5,78.9,567.7,78.9L567.7,78.9zM626.8,152.2h-21.4v39.5c0,29.1-42.8,31.3-79.2,24.5c11.8-2.5,47.2,4.5,47.3-24.2v-39.8c-42.4,0-35.4,61.4-118.8,60.8c19.1-8.3,38.3-30.6,66-60.8h-38.8c-13.4,0-19.9-3.4-20.2-10.2c-0.3-7.7,22.4-16.9,45.8-17.2c-7.3,8.3-9.5,11.5-9.3,14.2c-0.5,3.9,2.3,5.9,8.5,5.9h66.7v-23.8H458c-2.1,0-3.7-1.9-3.7-4.3l0,0c0-2.3,1.7-4.3,3.7-4.3h168.9c2,0,3.7,1.9,3.7,4.3l0,0c0,2.3-1.7,4.3-3.7,4.3h-21.5l0.1,23.8c6.7,0,13.4,0,20.2,0c2.1,0,3.7,1.7,3.7,3.7l0,0C629.4,150.3,628.3,151.7,626.8,152.2z"></path><path d="M1003.8,172.1c-0.4,36-7.9,43.6-14.7,50.6c-6.1-6.5-14.7-15-15.1-50.6c0-133.9,0,37.1,0-114.9c0.1-3.5,0.7-5,5.7-5.6h18.5c4.8,0.6,5.4,2.1,5.6,5.6C1003.8,161.8,1003.8,77,1003.8,172.1L1003.8,172.1zM907.6,110.3c9.7,0,10.9-2.1,10.9-11l0-26.9c0-8.7-1.6-10.4-10.8-10.6h-47.4c-2.1,0-3.7-1.8-3.7-3.9l0,0c0-2.1,1.7-3.9,3.7-3.9c22.7,0,45.6,0.1,68.2,0.1c16.1,0,22.5,5.3,22.5,19.1l0,26.9c0,12.7-4.9,18.3-17.8,18.3h-36.1c-9.4,0-11.9,5.7-12,14.2c-0.1,10,2.5,12.5,12,12.5h35.4c12.9,0,20.2,6.8,20.2,19v27.7c0,30.3-59.2,31.4-98,23.1c12.3-2.7,63.9,5.9,63.9-23v-28.6c0-6.9-2.6-9.5-9.3-9.5h-41.9c-8.8,0-11.7-5.5-11.7-15.3l0.1-14.4c0.6-9.4,3.1-13.8,11.7-13.8L907.6,110.3z"></path><path d="M1185.7,51.2h18c-3.9,21.7-9.1,32.7-42.1,33c6.8-3.5,8.4-8.4,13.9-23.3C1177.6,55.1,1179.7,51.2,1185.7,51.2L1185.7,51.2z M1143.8,178.8c-28.8,23.6-66.6,31.8-102.9,33.6c-2.4,0.1-4.5,2-4.5,4.5l0,0c0,2.5,2,4.6,4.5,4.5c37.8-1.9,77.4-7.8,110.4-27.8c16.2,23.7,42.4,27.4,58.7,27.3c-18.2-6.8-28.4-16.1-39.4-38.6c11.1-7.5,15.9-12.3,25.2-23.4c9.7-11.5,9.4-17.5,1.9-17.8l-20.6,0c-4.9,6.7-9.7,13.1-14,17.7c-1.6-5.7-3.4-15.6-5.2-27.9l43.8-7.6c2.4-0.4,4.1-2.7,3.7-5.2l0,0c-0.4-2.4-2.8-4.1-5.2-3.7l-43.5,7.5c-0.7-5.3-1.4-10.9-2-16.7l42.7-7.3c2.4-0.4,4.1-2.8,3.7-5.2l0,0c-0.4-2.4-2.8-4.1-5.2-3.7l-42.1,7.2c-1.3-13.2-2.5-26.9-3.2-39.6c-0.3-5.4-1.4-5.9-15-5.8c-13.6,0.1-14.5,0.5-14.1,6.2c1.8,14.3,3.6,29.1,5.7,43.8l-21.8,3.7c-2.4,0.4-4.1,2.7-3.7,5.2l0,0c0.4,2.4,2.8,4.1,5.2,3.7l21.6-3.7c0.8,5.6,1.7,11.2,2.7,16.6l-29,5c-2.4,0.4-4.1,2.7-3.7,5.2l0,0c0.4,2.4,2.8,4.1,5.2,3.7l29.1-5C1135.8,151.2,1139.3,166.1,1143.8,178.8L1143.8,178.8zM1078.9,101.4c21.2,14.6,11.7,26.7,6.9,33.9c-15.6,23.3-19.3,27.1-19.3,36.4c0,9.6,22.1,4,41.1-2.2c-10.9,16.1-68.5,32.1-69.8,2.9c-0.2-4.4,1.3-8.8,3.9-13.2c6.9-11.9,14.3-23.5,21.7-35.1c-11.9,5-27.7-2.1-27-19.3c0.3-6.8,8.1-18.9,25.4-45.3c6.2-9.4,10.5-9.4,37.4-9.7c-32.6,48.9-41.3,56.7-41.2,64.8c0,4.6,5,4.4,8.5,4.4C1071.1,113.1,1075.3,107.3,1078.9,101.4z"></path><path d="M63.3,74c102.9-3.8,129.5,57.5,190.5,61.7c-16.8,12.3-45.5,3.9-71.8-8.5c28,72.6,98.7,141.7,196.8,112c-97.5,52.8-161.3,4.3-188.2-45.5c-5.2-9.7-13.3-25.4-24.2-21.1c-36.5,14.6,47.3,99.2,131.2,92.9c-50.3,11.4-119-9.7-150.1-52.4C113.6,166.6,119.7,91.6,63.3,74z"></path><path d="M249.9,206.7c47.8,47.2,169.1,45.7,163.4-46.2c-9.3,86.4-83.7,56.5-123.3,30.3C258.7,170,215.1,172.4,249.9,206.7z"></path><path d="M346.1,208.4c60.2,15.3,73.8-55.6,51.4-95.7c16.9,69.9-35.2,67-53.2,77.3C330.3,198.1,334.1,205.3,346.1,208.4z"></path><path d="M372.1,147.5c-9.8-26.8,4.8-51.2-21.3-93.4c40.8,34.8,49.9,72.9,40.7,96.6C384.7,168,378.9,166,372.1,147.5z"></path><path d="M357.5,95.6c-44-7.9-14.5-49.3-100-84.5C340,26.9,358.6,65.7,357.5,95.6z"></path><path d="M304.9,50c-6.1-12.6-56.1-53.2-122.2-36.8C251.7,15.1,253.5,57.8,304.9,50z"></path> <path d="M242.6,38.3C217,22.4,176.1,3,121.8,38.4C180.5,19.4,196.9,55.1,242.6,38.3z"></path> <path d="M77.3,92.3C31.7,155.4,36,251.1,59.9,297.8C20.1,234.8,24.5,144.1,69,86.9C71.9,88.3,74.7,90.1,77.3,92.3L77.3,92.3z M177.7,383.1c-95.8-21.9-134.3-185.7-89-277.7c-2.3-3.1-4.8-6-7.5-8.5C31.5,190,62.6,360.6,177.7,383.1L177.7,383.1z M101.8,129.3c-2.6-6.1-5.5-12-8.7-17.3C51.7,231.7,137,400.5,273.5,383.4C146,389.3,76.4,232.8,101.8,129.3L101.8,129.3z M120.3,182.4c10.1,98.6,97.9,202.5,242.1,152.5c-155.6,67-273.1-74.9-255.8-194c4.1,10.8,7.6,22,11,32.7C118.4,176.6,119.4,179.5,120.3,182.4L120.3,182.4z M89.7,64.2c26.8-24.6,58.7-33.8,98.9-18.3c-16.3,7.1-31.7,18.2-42,31.1c-3.8-1.5-7.8-2.9-11.9-4.2c3.3-4.3,6.9-8.6,10.7-12.6c-4.9,3.5-9.4,7.4-13.6,11.7c-2.7-0.8-5.5-1.6-8.3-2.3c-2.4-0.6-4.9-1.2-7.4-1.7c1.9-2.6,3.9-5.2,6-7.7c-3.1,2.2-6,4.6-8.8,7.1C106,65.9,98.1,64.9,89.7,64.2z"></path><path d="M447.7,316.8V250h54.4v7.8h-44.4v20.5h41.6v7.8h-41.6v22.8h46.2 v7.8H447.7L447.7,316.8z M550.3,316.8V250h54.4v7.8h-44.4v20.5h41.6v7.8h-41.6v22.8h46.2v7.8H550.3L550.3,316.8zM653.2,316.8V250h50.8v7.8h-40.8v20.8h35.4v7.8h-35.4v30.3H653.2L653.2,316.8z M750,316.8V250h50.8v7.8H760v20.8h35.4v7.8H760v30.3H750L750,316.8zM957,316.8V250h10.2l39.5,52.4V250h9.6v66.8h-10.2l-39.5-52.4v52.4H957L957,316.8z M1065.8,316.8V250h54.4v7.8h-44.4v20.5h41.6v7.8h-41.6v22.8h46.2v7.8H1065.8L1065.8,316.8zM1187.3,316.8v-58.9h-24.8V250h59.7v7.8h-24.8v58.9H1187.3L1187.3,316.8zM851.1,316.4c-1.6,0-3.1-0.5-4.3-1.5c-1.2-1-1.8-2.3-1.8-4c0-1.7,0.6-3,1.8-4c1.2-1,2.7-1.5,4.3-1.5c1.6,0,3.1,0.5,4.3,1.6 c1.2,1.1,1.8,2.4,1.8,3.8c0,1.7-0.6,3-1.8,4C854.2,315.9,852.8,316.4,851.1,316.4z"></path></g></svg>
              </a>
        </div>
        <ul class="navbar-nav">
          <li class="nav-item">
          <a href="" class="nav-link">首页</a>
          </li>
          <li class="nav-item">
              <a href="" class="nav-link">论坛</a>
          </li>
          <li class="nav-item">
              <a href="" class="nav-link">赛事</a>
          </li>
          <li class="nav-item" id="school">
              <a href="" class="nav-link">学院</a>
              <div class="school nav-list">
                <ul class="works-list">
                  <li class="works-item">
                    <a class="works-link" href="">全部课程</a>
                  </li>
                  <li class="works-item">
                    <a class="works-link" href="">全部课程</a>
                  </li>
                  <li class="works-item">
                    <a class="works-link" href="">全部课程</a>
                  </li>
                  </ul>
              </div>
          </li>
          <li class="nav-item" id="works">
              <a href="" class="nav-link">作品
                <i class="fa fa-angle-down" aria-hidden="true"></i>
              </a>
              <div class="works nav-list">
                <ul class="works-list">
                  <li class="works-item-top">
                    <a class="works-link" href="">作品展示&gt;</a>
                  </li>
                  <ul class="works-item-row">
                    <li class="works-item">
                      <a class="works-link" href="">服装系列</a>
                    </li>
                    <li class="works-item">
                      <a class="works-link" href="">设计稿</a>
                    </li>
                  </ul>
                  <ul class="works-item-row" >
                    <li class="works-item">
                      <a class="works-link" href="">服装系列</a>
                    </li>
                    <li class="works-item">
                      <a class="works-link" href="">设计稿</a>
                    </li>
                  </ul>
                  <ul  class="works-item-row">
                    <li class="works-item">
                      <a class="works-link" href="">服装系列</a>
                    </li>
                    <li class="works-item">
                      <a class="works-link" href="">设计稿</a>
                    </li>
                  </ul>
                </ul>
                <ul class="works-list ">
                  <li class="works-item-top">
                    <a class="works-link" href="">作品展示&gt;</a>
                  </li>
                  <ul class="works-item-row">
                    <li class="works-item">
                      <a class="works-link" href="">服装系列</a>
                    </li>
                    <li class="works-item">
                      <a class="works-link" href="">设计稿</a>
                    </li>
                  </ul>
                  <ul  class="works-item-row">
                    <li class="works-item">
                      <a class="works-link" href="">服装系列</a>
                    </li>
                    <li class="works-item">
                      <a class="works-link" href="">设计稿</a>
                    </li>
                  </ul>
                </ul>
                <ul class="works-list">
                  <li class="works-item-top">
                    <a class="works-link" href="">作品展示&gt;</a>
                  </li>
                </ul>
              </div>
          </li>
          <li class="nav-item">
              <a href="" class="nav-link">原设计</a>
          </li>
          <li class="nav-item">
              <a href="" class="nav-link">招聘</a>
          </li>
          <li class="nav-item" id="more">
              <a href="" class="nav-link">更多
                <i class="fa fa-angle-down" aria-hidden="true"></i>
              </a>
              <div class="more nav-list">
                <ul class="works-list">
                  <li class="works-item">
                    <a class="works-link" href="">云趋势</a>
                  </li>
                  <li class="works-item">
                    <a class="works-link" href="">云趋势</a>
                  </li>
                  <li class="works-item">
                    <a class="works-link" href="">云趋势</a>
                  </li>
                  <li class="works-item">
                    <a class="works-link" href="">云趋势</a>
                  </li>
                  <li class="works-item">
                    <a class="works-link" href="">云趋势</a>
                  </li>
                  <li class="works-item">
                    <a class="works-link" href="">云趋势</a>
                  </li>
                  </ul>
              </div>
          </li>
        </ul>
        <div class="navbar-side">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a href="" class="nav-link">
                <i class="fa fa-search"></i>
              </a>
            </li>
            <li class="nav-item">
                <a href="http://localhost:8080/login" class="nav-link">登录</a>
            </li>
            <li class="nav-item">
                <a href="http://localhost:8080/register" class="nav-link">注册</a>
            </li>
          </ul>
        </div>
    </div> 
    </div>  
  </header>
</template>

<script>

export default {
  
}
</script>
<style  scoped>
    *{
  margin:0;
  padding:0;
  box-sizing: border-box;
}
body{
  color: rgb(68, 68, 68);
  font: 12px/1.5 "PingFang SC", "Microsoft YaHei",  STHeiti, sans-serif;
  background: #f1f1f1;
}
a{
  text-decoration: none;
  color:#626262;
}
a:hover{
  color: #16aa3a;
}
ul{
  list-style: none;
}
header{
  position: relative;
}
#header-navbar.navbar{
  background:#fff;
  margin:0;
  height:60px;
  padding:0 60px;
  width: 100%;
  display: flex;
  flex:wrap;
}
#header-navbar .logo a svg{
  margin-top:10px;
}
#header-navbar .logo a svg g{
  fill: #16aa3a;
}
#header-navbar .brand{
  display: flex;
  height:60px;
  flex-wrap: wrap;
  width:100%;
}
#header-navbar .navbar-nav{
  flex-direction: row;
  margin-left:20px;
  height:60px;
  flex-wrap: wrap;
}
#header-navbar .nav-item{
  width:80px;
  line-height: 60px;
  float:left;
  position:relative;
}
#header-navbar .nav-link{
  font-size: 16px;
  padding: 0;
  height:60px;
  text-align: center;
}
#header-navbar .school.nav-list,#header-navbar .works.nav-list,#header-navbar .more.nav-list{
  position: absolute;
  display: none;
  z-index: 10;
  box-shadow: 0 0 5px rgb(151, 149, 149);
  top:60px;
  left:0;
}
/* .school.nav-list:hover,.works.nav-list:hover,.more.nav-list:hover{
  display: block;
} */
#header-navbar #school:hover .school.nav-list{
  display: block;
}
#header-navbar #works:hover .works.nav-list{
  display: block;
}
#header-navbar #more:hover .more.nav-list{
  display: block;
}
#header-navbar .nav-list{
  background:#fff;
  width:150px;
  position: absolute;
}
#header-navbar .works-item{
  text-align: center;
  height: 36px;
  line-height: 36px;
}
#header-navbar .works-item-row{
  display: flex;
  justify-content: space-around;
}
#header-navbar .works-item-top{
  text-align: left;
  height: 36px;
  line-height: 36px;
  margin-left: 13px;
}
#header-navbar .works-link{
  font: 14px "PingFang SC", "Microsoft YaHei", 微软雅黑, STHeiti, sans-serif;
  color:#626262;
}
#header-navbar .school.nav-list .works-item:hover ,#header-navbar .more.nav-list .works-item:hover{
  background-color: #f1f1f1;  
}
#header-navbar .school.nav-list .works-item:hover .works-link ,#header-navbar .more.nav-list .works-item:hover .works-link{
  color:#626262;
}
#header-navbar .works .works-list+.works-list {
  border-top: 1px solid  rgb(153, 153, 153); 
}
#header-navbar .works-list{
margin: 0;
}
#header-navbar .navbar-side{
  display: flex;
  justify-content: flex-end;
  flex:1 0 0;
}
</style>
  
