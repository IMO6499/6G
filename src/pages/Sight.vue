<template>
  <div>
    <!-- Feature Area Starts -->
    <section class="feature-area section-padding2">
      <div class="container">
        <h2>6G Wisdom scene</h2>
        <p>Let wisdom be within reach</p>
      </div>
    </section>
    <!-- Feature Area End -->

    <!-- 6G科普视频 Starts-->
    <div style="text-align: center; position: relative">
      <video width="1320" height="740" controls="controls">
        <source src="/static/video/6G2.mp4" type="video/mp4">
      </video>
    </div>
    <!-- 6G科普视频 End-->

    <div id="img">
      <h3 style="text-align: center; margin-bottom: 50px" >Image Gallery</h3>
      <div id="div">
        <div class="d1">
          <a href="static/assets/images/6G/1.jpeg" class="img-gal">
            <div class="single-gallery-image" style="background: url(static/assets/images/6G/1.jpeg);"></div>
          </a>
        </div>
        <div class="d2">
          <a href="static/assets/images/6G/2.jpg" class="img-gal">
            <div class="single-gallery-image" style="background: url(static/assets/images/6G/2.jpg);"></div>
          </a>
        </div>
        <div class="d3">
          <a href="static/assets/images/6G/3.jpg" class="img-gal">
            <div class="single-gallery-image" style="background: url(static/assets/images/6G/3.jpg);"></div>
          </a>
        </div>
        <div class="d4">
          <a href="static/assets/images/6G/4.jpg" class="img-gal">
            <div class="single-gallery-image" style="background: url(static/assets/images/6G/4.jpg);"></div>
          </a>
        </div>
        <div class="d5">
          <a href="static/assets/images/6G/5.jpg" class="img-gal">
            <div class="single-gallery-image" style="background: url(static/assets/images/6G/10.jpg);"></div>
          </a>
        </div>
        <div class="d6">
          <a href="static/assets/images/6G/6.jpg" class="img-gal">
            <div class="single-gallery-image" style="background: url(static/assets/images/6G/6.jpg);"></div>
          </a>
        </div>
        <div class="d7">
          <a href="static/assets/images/6G/7.jpeg" class="img-gal">
            <div class="single-gallery-image" style="background: url(static/assets/images/6G/7.jpeg);"></div>
          </a>
        </div>
        <div class="d8">
          <a href="static/assets/images/6G/8.jpg" class="img-gal">
            <div class="single-gallery-image" style="background: url(static/assets/images/6G/8.jpg);"></div>
          </a>
        </div>
        <div class="d9">
          <a href="static/assets/images/6G/9.jpeg" class="img-gal">
            <div class="single-gallery-image" style="background: url(static/assets/images/6G/9.jpeg);"></div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  #img {
      width: 1320px;
      margin: 0 auto;
      margin-top: 120px;
      margin-bottom: 60px;
  }
  #div {
    width: 100%;
    height: 800px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    border:2px solid #ffffff;
    justify-content: space-between;
  }

  #div div {
    width: 380px;
    height: 230px;
    color: white;
    font-size: 30px;
    box-shadow: darkgrey 10px 10px 10px 10px ;
  }

</style>

