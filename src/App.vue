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
                <li><router-link to="/about">发展历程</router-link></li>
                <li><router-link to="/elements">国家现状</router-link></li>
                <li class="menu-btn">
                  <a href="#" class="template-btn">log in</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
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
              <h3 class="mb-4">6th generation mobile networks</h3>
              <ul>
                <li class="mb-2"><a href="#">managed website</a></li>
                <li class="mb-2"><a href="#">managed reputation</a></li>
                <li class="mb-2"><a href="#">power tools</a></li>
                <li><a href="#">marketing service</a></li>
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
              <h3 class="mb-4">instagram feed</h3>
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
                            <span><!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
Copyright &copy;2019 All rights reserved | 莫智帆 <i class="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                              <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
</span>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="social-icons">
              <ul>
                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                <li><a href="#"><i class="fa fa-dribbble"></i></a></li>
                <li><a href="#"><i class="fa fa-behance"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <!-- Footer Area End -->

</div>
</template>
<script>
export default {
  name: 'app'
}
</script>

