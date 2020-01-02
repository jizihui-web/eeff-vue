<template>
  <div id="login">
      <div class="container">
        <div class="top">
          <h3>登录</h3>
          <p>没有账号？<a href="">注册</a></p>
        </div>
        <div class="content">
          <div class="fristline">
            <a class="active">
              登录
            </a>
            <a href="http://localhost:8080/register">
              注册
            </a>
          </div>
          <div class="secoundline">
            <img src="img/login/loginlog.png" alt="" />
            <div>
              <h5>
                穿针引线Hi，未登录网友，登录穿针引线与,<span>1251588</span>
                +位设计师，一起交流设计分享快乐吧！
              </h5>
              <p>
                Hi~friend, you have not logged in yet. Please log in eeff and
                share your designing experience and have fun with 1251588 +
                designers!
              </p>
            </div>
          </div>
          <div class="thirdline row no-gutters">
            <div v-show="codeShow" id="left1" class="left col-lg-6 col-md-12 ">
              <div class="png">
                <img id="tips" src="img/login/qrcode_login_tips.png" alt="" />
                <a href="javascript:;">
                  <img
                    id="code"
                    @click="changeCode"
                    src="img/login/code_login_eeff.png"
                    alt=""
                /></a>
              </div>
              <form action="">
                <input
                  placeholder="请输入用户名/邮箱/手机号"
                  type="text"
                  class="inp1"
                  v-model="uname"
                  @input="inputUname"
                />
                <span class="inputReg" :class="unameClass" id="unameReg">{{
                  unameReg
                }}</span>
                <input
                  type="password"
                  placeholder="请输入登录密码"
                  class="inp1"
                  v-model="upwd"
                  @input="inputUpwd"
                />
                <span class="inputReg" :class="upwdClass" id="upwdReg">{{
                  upwdReg
                }}</span>
                <input
                  type="text"
                  placeholder="安全提问（未设置请忽略）"
                  value="安全提问（未设置请忽略）"
                  class="inp1"
                />
                <div id="forget_password">
                  <div><input type="checkbox" />记住密码</div>
                  <a href="">忘记密码？</a>
                </div>
                <a @click="login" class="btn" href="javascript:;">登录</a>
                <p>还没有账号，<a href="">立即注册</a></p>
                <div class="contact">
                  <a href=""><img src="img/login/qq_login_eeff.png" alt=""/></a>
                  <a href=""
                    ><img src="img/login/weibo_login_eeff.png" alt=""
                  /></a>
                  <a href=""
                    ><img src="img/login/wechat_login1_eeff.png" alt=""
                  /></a>
                </div>
              </form>
            </div>
            <div
              id="left2"
              class="left col-lg-6 col-md-12 saoMa"
              v-show="!codeShow"
            >
              <a href="javascript:;" 
                ><img
                  id="pc_login"
                  @click="changeCode2"
                  src="img/login/pc_login_eeff.png"
                  alt=""
              /></a>
              <div class="text">
                <h3>扫码登录，防止盗号</h3>
                <div>
                  <p>
                    二维码已过期，请按快捷键F5或刷新当前网页，重新获取新的二维码
                  </p>
                  <img src="img/login/saoyisao_eeff.png" alt="" />
                </div>
                <div class="saoyisao">
                  <img src="img/login/saoyisao_icon_eeff.png" alt="" />
                  <div>
                    <p>打开 <span>手机穿针引线 APP</span></p>
                    <p>扫一扫登录</p>
                  </div>
                </div>
                <p>
                  <a href="">账户密码登录</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a
                    href=""
                    >免费注册</a
                  >
                </p>
              </div>
            </div>
            <div class="right col-lg-6 col-md-12">
              <a href=""><img src="img/login/logintu.png" alt=""/></a>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      codeShow: true,
      uname: "",
      upwd: "",
      unameReg: "用户名为3-16位字母及数字",
      upwdReg: "密码为6-12位字母及数字",
      unameClass: {
        success: false,
        fail: false
      },
      upwdClass: {
        success: false,
        fail: false
      }
    };
  },
  methods: {
    changeCode() {
      // document.getElementById("#left1").hide();
      // document.getElementById("#left2").show();
      this.codeShow = false;
    },
    changeCode2() {
      // document.getElementById("#left1").show();
      // document.getElementById("#left2").hide();
      this.codeShow = true;
    },
    inputUname() {
      var regUname = /^[a-zA-Z0-9_]{3,16}$/;
      if (this.uname == "") {
        this.unameReg = "用户名不能为空";
        this.unameClass = {
          success: false,
          fail: true
        };
      } else if (!regUname.test(this.uname)) {
        this.unameReg = "用户名格式不正确";
        this.unameClass = {
          success: false,
          fail: true
        };
      } else {
        this.unameReg = "用户名格式正确";
        this.unameClass = {
          success: true,
          fail: false
        };
      }
    },
    inputUpwd() {
      var regUpwd = /^[\w]{6,12}$/;
      if (this.upwd == "") {
        this.upwdReg = "密码不能为空";
        this.upwdClass = {
          success: false,
          fail: true
        };
      } else if (!regUpwd.test(this.upwd)) {
        this.upwdReg = "密码格式不正确";
        this.upwdClass = {
          success: false,
          fail: true
        };
      } else {
        this.upwdReg = "密码格式正确";
        this.upwdClass = {
          success: true,
          fail: false
        };
      }
    },
    login() {
       var regUname = /^[a-zA-Z0-9_]{3,16}$/;
        var regUpwd = /^[\w]{6,12}$/;
      if(this.uname==""){
        this.$toast("用户名为空")
      }else if(this.upwd==""){
        this.$toast("密码为空")
      }else if(regUname.test(this.uname)==false||regUpwd.test(this.upwd)==false){
        this.$messagebox("消息","用户名或密码格式错误")
      }else if (regUname.test(this.uname) && regUpwd.test(this.upwd)) {
        this.axios
          .post("/user/login", {
            uname: this.uname,
            upwd: this.upwd
          })
          .then(result => {
            if(result.data.code==200){
              this.$toast("登录成功")
              this.$router.push("/");
            }else if(result.data.code==301){
              this.$toast("用户名或密码错误")
            }
          });
      }
    }
  }
};
</script>
<style scoped>
#login * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  
}
#login{
color: rgb(68, 68, 68);
font: 12px / 1.5 "PingFang SC", "Microsoft YaHei", 微软雅黑, STHeiti,
    sans-serif;
  background: #f1f1f1;
  margin-top:0;
}

#login .container {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
#login a {
  text-decoration: none;
  cursor: pointer;
  color: #626262;
}
#login a:hover {
  color: rgb(22, 170, 58);
}
#login ul {
  list-style: none;
}
#login .top {
  width: 100%;
  height: 47px;
  padding: 0 10px;
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
}
#login .top > h3 {
  font-size: 16px;
  font-weight: bold;
  line-height: 45px;
  color: rgb(128, 128, 128);
  margin: 0;
}
#login .top > p {
  font-size: 14px;
  color: rgb(128, 128, 128);
  line-height: 45px;
  margin: 0;
}
#login .content {
  width: 100%;
  background-color: #fff;
}
#login .content .fristline {
  display: flex;
  width: 100%;
  height: 61px;
  align-items: center;
  border: 1px solid rgb(235, 235, 235);
  border-top: none;
}
#login .content .fristline a {
  display: block;
  width: 135px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  color: #333333;
  font-size: 20px;
  border: 1px solid rgb(235, 235, 235);
  border-top: none;
}
#login .content .fristline a.active {
  color: rgb(22, 170, 58);
  border-bottom: 2px solid rgb(22, 170, 58);
}
#login .secoundline {
  display: flex;
  width: 100%;
  height: 81px;
  padding: 12px 20px;
  border: 1px solid rgb(235, 235, 235);
}
#login .secoundline div {
  margin: 5px 0 0 20px;
}
#login .secoundline h5 {
  line-height: 24px;
  margin: 0;
  font-size: 12px;
}
#login .secoundline h5 span {
  font-size: 18px;
  color: #ff9900;
}
#login .secoundline p {
  color: #a5a5a5;
}
#login .thirdline {
  width: 100%;
  display: flex;
}
#login .thirdline .left {
  position: relative;
  width: 50%;
  height: 510px;
  border-right: 1px solid rgb(235, 235, 235);
  padding: 40px 80px 60px;
}
#login .thirdline .right {
  text-align: center;
  height: 510px;
}
#login .thirdline .left .png #tips {
  width: 168px;
  position: absolute;
  top: 10px;
  right: 80px;
}
#login .thirdline .left .png #code {
  width: 80px;
  position: absolute;
  top: 5px;
  right: 5px;
}
#login .left form {
  width: 315px;
}
#login .left form .inp1 {
  width: 315px;
  height: 47px;
  padding: 12px 8px 12px 35px;
  background: url(/img/login/loginico.png) 10px 12px no-repeat;
  font-size: 14px;
  color: rgb(102, 102, 102);
  border: 1px solid rgb(229, 229, 229);
  margin-top: 12px;
}
#login .left form .inp1:nth-child(2) {
  background: url(/img/login/loginico.png) 10px -54px no-repeat;
}
#login .left form .inp1:nth-child(3) {
  background: url(/img/login/loginico.png) 10px -124px no-repeat;
  color: rgb(153, 153, 153);
}
#login #forget_password {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 8px 0;
  align-items: center;
  height: 46px;
}
#login #forget_password input {
  font-size: 12px;
  color: #444444;
  margin-right: 5px;
  vertical-align: middle;
}
#login #forget_password a {
  display: block;
}
#login #forget_password a:hover {
  text-decoration: underline;
  color: rgb(68, 68, 68);
}
#login form a.btn {
  display: block;
  width: 100%;
  height: 40px;
  background-color: rgb(22, 170, 58);
  color: #fff;
  text-align: center;
  line-height: 40px;
  font-weight: bold;
  font-size: 12px;
  padding: 0;
}
#login form span {
  font-size: 14px;
}
#login form span.infor {
  color: #999;
}
#login form span.success {
  color: green;
}
#login form span.fail {
  color: red;
}
#login form p {
  widows: 100%;
  height: 46px;
  line-height: 46px;
  color: #a5a5a5;
  text-align: end;
  margin: 0;
}
#login form p a {
  color: #444444;
}
#login form p a:hover {
  color: #444444;
  text-decoration: underline;
}
#login form .contact {
  text-align: center;
}
#login .saoMa {
  background-color: #e7f7e7;
  position: relative;
  padding: 5px 5px 50px 50px;
}
#login .saoMa > a > img {
  width: 80px;
  position: absolute;
  top: 5px;
  right: 5px;
}
#login .saoMa .text {
  margin-top: 20px;
}
#login .saoMa .text h3 {
  font-size: 16px;
  color: #444444;
  font-weight: bold;
  margin-bottom: 20px;
}
#login .saoMa .text > div {
  display: flex;
  margin: 0 0 20px 20px;
}
#login .saoMa .text > div p {
  font-size: 14px;
  line-height: 30px;
}
#login .saoMa .text .saoyisao {
  margin-left: 20px;
  display: flex;
}
#login .saoMa .text .saoyisao img {
  width: 61px;
  height: 57px;
}
#login .saoMa .text .saoyisao div p {
  margin: 0;
  font-size: 14px;
  color: #a5a5a5;
}
#login .saoMa .text .saoyisao div p span {
  color: #16aa3a;
}
#login .saoMa .text > p {
  text-align: center;
  font-size: 14px;
  color: #444444;
}
</style>
