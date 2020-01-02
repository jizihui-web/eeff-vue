<template >
<div class="register">
  <div class="container">
      <div class="content">
        <div class="fristline">
          <a >
            登录
          </a>
          <a class="active">
            注册
          </a>
        </div>
        <div class="secoundline">
          <img src="img/login/loginlog.png" alt="">
          <div>
            <h5>穿针引线Hi，未登录网友，登录穿针引线与,<span>1251588</span> +位设计师，一起交流设计分享快乐吧！</h5>
            <p>Hi~friend, you have not logged in yet. Please log in eeff and share your designing experience and have fun with 1251588 + designers!</p>
          </div>
        </div>
        <div class="millder-line">
                  <div class="millder-img"></div>
        </div>

        </div>
        <div class="thirdline row no-gutters">
          <div class="left col-lg-6 col-md-12">
            <form>
              <table>
                <tr>
                  <th><span class="rq">*</span>用户名：</th>
                  <td><input type="text" placeholder="请输入您的用户名" v-model="uname" @input="inputUname"></td>
                </tr>
                <tr>
                  <th>&nbsp;&nbsp;&nbsp;&nbsp;</th>
                    <td><span class="inputSpan" :class="unameClass" >{{ unameReg}}</span></td>
                </tr>
                <tr>
                  <th><span class="rq">*</span>密码：</th>
                  <td><input type="text" placeholder="请输入您的密码" v-model="upwd" @input="inputUpwd"></td>
                  
                </tr>
                <tr>
                  <th></th>
                  <td><span class="inputSpan" :class="upwdClass" >{{upwdReg}}</span></td>
                </tr>
                <tr>
                  <th><span class="rq">*</span>手机号：</th>
                  <td><input type="text" placeholder="请输入您的手机号" v-model="uphone" @input="inputUphone"></td>
                  
                </tr>
                <tr>
                  <th></th>
                  <td><span class="inputSpan" :class="uphoneClass" >{{uphoneReg}}</span></td>
                </tr>
                <tr>
                  <th></th>
                  <td><button type="button" @click="register">下一步</button></td>
                </tr>
              </table>
            </form>
          </div>
          <div class="right col-lg-6 col-md-12">
            <a href=""><img src="img/login/logintu.png" alt=""> </a>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      uname: "",
      upwd: "",
      uphone:"",
      unameReg: "用户名为3-16位字母及数字",
      upwdReg: "密码为6-12位字母及数字",
      uphoneReg: "手机号为13开头的11位数字",
      unameClass: {
        success: false,
        fail: false
      },
      upwdClass: {
        success: false,
        fail: false
      },
      uphoneClass: {
        success: false,
        fail: false
      }
    }
  },
  methods:{
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
      inputUphone() {
      var regUphone = /^[1]([3-9])[0-9]{9}$/;
      if (this.uphone == "") {
        this.uphoneReg = "手机不能为空";
        this.uphoneClass = {
          success: false,
          fail: true
        };
      } else if (!regUphone.test(this.uphone)) {
        this.uphoneReg = "密码格式不正确";
        this.uphoneClass = {
          success: false,
          fail: true
        };
      } else {
        this.uphoneReg = "密码格式正确";
        this.uphoneClass = {
          success: true,
          fail: false
          };
        } 
     },
     register(){
       var regUname = /^[a-zA-Z0-9_]{3,16}$/;
       var regUpwd = /^[\w]{6,12}$/;
       var regUphone = /^[1]([3-9])[0-9]{9}$/;
      if(this.uname==""){
        this.$toast("用户名为空")
      }else if(this.upwd==""){
        this.$toast("密码为空")
      }else if(this.uphone==""){
        this.$toast("手机号为空")
      }else if(regUname.test(this.uname)==false||regUpwd.test(this.upwd)==false||regUphone.test(this.uphone)==false){
        this.$messagebox("消息","用户名/密码/手机号格式错误")
      }else if (regUname.test(this.uname) && regUpwd.test(this.upwd)&& regUphone.test(this.uphone)) {
        this.axios.post("/user/register", {
          uname: this.uname,
          upwd: this.upwd,
          uphone: this.uphone,
        })
          .then(result => {
            if(result.data.code==200){
              this.$toast("注册成功")
              // this.$router.push("/");
            }else if(result.data.code==201){
              this.$messagebox("注册失败","用户名已占用")
            }else if(result.data.code==202){
              this.$messagebox("注册失败","用户名、密码或手机号错误")
            }
          });
       }
     } 
   }
 }
</script>
<style scoped>
*{
  margin :0;
  padding: 0;
}
.register{
  color: rgb(68, 68, 68);
  font:12px / 1.5 "PingFang SC", "Microsoft YaHei", 微软雅黑, STHeiti, sans-serif;
  background: #f1f1f1;
  text-align: center;
}
.register .container{
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
a{
  text-decoration: none;
  cursor: pointer;
}
a:hover{
  color: rgb(22, 170, 58);
}
.register  ul{
  list-style: none;
}
.register .content{
  width:100%;
}
.register  .content .fristline{
  display: flex;
  width:100%;
  height:61px;
  align-items: center;
  border: 1px solid rgb(235, 235, 235);
  border-top:none;
  background-color: #fff;
  margin-top: 10px;
}
.register  .content .fristline a{
  display: block;
  width:135px;
  height:60px;
  line-height: 60px;
  text-align: center;
  color:#333333;
  font-size: 20px;
  border: 1px solid rgb(235, 235, 235);
  border-top:none;
}
.content .fristline a.active{
  color:rgb(22, 170, 58);
  border-bottom: 2px solid rgb(22, 170, 58); 
}
.secoundline{
  display: flex;
  width:100%;
  height:81px;
  padding:12px 20px;
  border: 1px solid rgb(235, 235, 235);
    margin-top: 10px;
      background-color: #fff;
}
.secoundline div{
  margin:5px 0 0 20px;
}
.secoundline h5{
  line-height: 24px;
  margin:0;
  font-size: 12px;
}
.secoundline h5 span{
  font-size: 18px;
  color:#ff9900;
}
.secoundline p{
 color:#a5a5a5;
}
.millder-line{
    background-color: #fff;
    height:156px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid rgb(235, 235, 235);
}
.millder-img{
    width: 825px;
    height: 36px;
    background: url(/img/resgiter/step_tips.jpg) no-repeat;
}
.thirdline{
  width:100%;
  display: flex;
   background-color: #fff;
}
.thirdline .left{
  position: relative;
  width:50%;
  height:510px;
  border-right: 1px solid rgb(235, 235, 235);
  padding :40px 40px 60px;
}
.thirdline .right{
  text-align: center;
  height:510px;
}
.thirdline .left table{
 width:100%;
}
.thirdline .left table tr{
 height:56px;
}
.thirdline .left table tr th{
  line-height: 34px;
  font-weight: normal;
  text-align: right;
  padding-left:10px;
  width:150px;
  font-size:16px;
  font-weight: bold;
}
.thirdline .left table tr th span{
  color:#f00;
}
.thirdline .left table tr td>input{
  width:230px;
  height:36px;
  line-height: 17px;
  padding: 2px 4px;
}

.thirdline .left table tr td>span.inputSpan{
   width:230px;
  display: block;
  height:26px;
  line-height: 26px;
  padding:0 8px;
  background-color: #e8e8e8;
  color:#4d4d4d;
  margin:auto;
}
.thirdline .left table tr td>span.inputSpan.success{
  background-color: #19a93a;
  color:#fff;
}
.thirdline .left table tr td>span.inputSpan.fail{
  background-color: #f00;
  color:#fff;
}
.thirdline .left table tr td>button{
  width:180px;
  height:40px;
  line-height: 40px;
  background-color: #fff;
  color:#19a93a;
  font-size: 16px;
  text-align: center;
  border: 2px solid #19a93a;
  font-weight: 700;
}

</style>