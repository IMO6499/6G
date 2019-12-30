<template>
<div>
  <!-- Preloader Starts -->
  <div class="preloader">
    <div class="spinner"></div>
  </div>
  <!-- Preloader End -->



  <!-- Header Area Starts -->
  <header class="header-area single-page">
    <div class="header-top">
      <div class="container">
        <div class="row">
          <div class="col-lg-2">
            <div class="logo-area">
              <router-link to="/"><img src="static/assets/images/logo-light.png" alt="logo"></router-link>
            </div>
          </div>

          <div class="col-lg-10">
            <div class="custom-navbar">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div class="main-menu main-menu-light">
              <ul>
                <li class="active"><router-link to="/">首页</router-link></li>
                <li><router-link to="/about">关于-6G</router-link></li>
                <li><router-link to="/sight">智慧场景</router-link></li>
                <li><router-link to="/development">发展历程</router-link></li>
                <li><router-link to="/country">国家现状</router-link></li>
                <li class="menu-btn">
                  <a href="#" class="template-btn" @click="loginDialog()">log in</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="solarsys">
      <!--太阳-->
      <div class='sun'></div>
      <!--地球轨道-->
      <div class='earthOrbit'></div>
      <!--地球-->
      <div class='earth'></div>
    </div>
    <div class="page-title text-center">
      <div class="container">
        <div class="row">
          <div class="col-md-6 offset-md-3">
            <h2>6th generation mobile networks</h2>
            <p>第六代移动通信技术</p>
          </div>
        </div>
      </div>
    </div>
  </header>
  <!-- Header Area End -->

  <router-view></router-view>

  <!-- Footer Area Starts -->
  <footer class="footer-area section-padding">
    <div class="footer-widget">
      <div class="container">
        <div class="row">
          <div class="col-xl-2 col-lg-3">
            <div class="single-widget-home mb-5 mb-lg-0">
              <h3 class="mb-4">6G Introduction</h3>
              <ul>
                <li class="mb-2"><a href="#">梧州学院</a></li>
                <li class="mb-2"><a href="#">软件开发中心</a></li>
                <li class="mb-2"><a href="#">邮政编码：543000</a></li>
                <li><a href="#"></a></li>
              </ul>
            </div>
          </div>
          <div class="col-xl-5 offset-xl-1 col-lg-6">
            <div class="single-widget-home mb-5 mb-lg-0">
              <h3 class="mb-4">newsletter</h3>
              <p class="mb-4">如果您对6G有好的想法，让我们联系您</p>
              <form action="#">
                <input type="email" placeholder="Your email here" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Your email here'" required>
                <button type="submit" class="template-btn">subscribe now</button>
              </form>
            </div>
          </div>
          <div class="col-xl-3 offset-xl-1 col-lg-3">
            <div class="single-widge-home">
              <h3 class="mb-4">contact us</h3>
              <div class="feed">
                <img src="static/assets/images/feed1.jpg" alt="feed">
                <img src="static/assets/images/feed2.jpg" alt="feed">
                <img src="static/assets/images/feed3.jpg" alt="feed">
                <img src="static/assets/images/feed4.jpg" alt="feed">
                <img src="static/assets/images/feed5.jpg" alt="feed">
                <img src="static/assets/images/feed6.jpg" alt="feed">
                <img src="static/assets/images/feed7.jpg" alt="feed">
                <img src="static/assets/images/feed8.jpg" alt="feed">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-6">
            <span>Copyright &copy;2019 All rights reserved | 莫智帆 <i class="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://baike.baidu.com/item/6G/16839792?fr=aladdin" target="_blank">6G Link</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <!-- Footer Area End -->
  <login v-if="login" ref="login"/>
</div>
</template>
<script>
    import Login from './pages/Login'

    export default {
      data: function () {
        return {
          login: false
        }
      },
      components: {
        Login
      },
      methods: {
        loginDialog: function () {
          this.login = true
          this.$nextTick(() => {
            this.$refs.login.init()
          })
        }
      }
    }
</script>
<style>
  .solarsys{
    width: 300px;
    height: 300px;;
    position: absolute;
    margin: 0 auto;
    background-color: rgba(0,0,0,0);
    padding: 0;
    transform: scale(1);
  }

  /*太阳*/
  .sun {
    left:207px;
    top:107px;
    height: 90px;
    width: 90px;
    background-color: rgb(248,107,35);
    border-radius: 50%;
    box-shadow: 5px 5px 10px rgb(248,107,35), -5px -5px 10px rgb(248,107,35), 5px -5px 10px rgb(248,107,35), -5px 5px 10px rgb(248,107,35);
    position: absolute;
    margin: 0;
  }

  /*地球*/
  .earth {
    left:116.5px;
    top:141px;
    height: 38px;
    width: 38px;
    background-color: rgb(115,114,174);
    border-radius: 50%;
    position: absolute;
    transform-origin: 134px 9px;
    animation: rotate 6.25s infinite linear;
  }

  /*地球轨道*/
  .earthOrbit {
    left:125px;
    top:25px;
    height: 250px;
    width: 250px;
    background-color: transparent;
    border-radius: 50%;
    border-style: dashed;
    border-color: gray;
    position: absolute;
    border-width: 1px;
    margin: 0px;
    padding: 0px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(-360deg);
    }
  }
</style>

