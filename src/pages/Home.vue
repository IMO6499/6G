<template>
  <div>
    <!-- Feature Area Starts -->
    <section class="feature-area section-padding2">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-top text-center">
              <h2>Imagine the future </h2>
              <p>关于6G的一些疑惑</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4">
            <div class="single-feature mb-4 mb-lg-0">
              <h4>6G时代什么时候来临 ？</h4>
              <p class="py-3">
                到2030年，数字世界将与物理世界深度融合，许多当前仍是幻想的场景将成为现实，人类生活将发生巨大变革。—— 6G来临</p>
              <a href="#" class="secondary-btn" @click="questionOneDialog()">了解更多<span class="flaticon-next"></span></a>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="single-feature mb-4 mb-lg-0">
              <h4>6G给人们带来的变革 ？</h4>
              <p class="py-3">
                孪生体域网、超能交通、通感互联网、全息通信、智慧生产、机器间的协同、虚拟助理、情感和触觉应用、多感官混合现实、空间通信。</p>
              <a href="#" class="secondary-btn" @click="questionTwoDialog()">了解更多<span class="flaticon-next"></span></a>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="single-feature">
              <h4>智能手机会被淘汰吗 ？</h4>
              <p class="py-3">
                6G技术问世的时候，VR、AR及MR等技术就会成熟了，不同类型的新设备会逐渐取代智能手机成为人类工作、娱乐的主要工具。</p>
              <a href="#" class="secondary-btn" @click="questionThreeDialog()">了解更多<span class="flaticon-next"></span></a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Feature Area End -->

    <!-- News Area Starts -->
    <section id="blog" class="news-area section-padding3">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-top text-center">
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4 col-md-6">
            <div class="single-news mb-5 mb-lg-0">
              <div class="news-img news-img1"></div>
              <div class="news-tag">
                <ul class="my-4">
                </ul>
              </div>
              <div class="news-title">
                <h4><a href="#"><center>万物互联时代</center></a></h4>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="single-news mb-5 mb-lg-0">
              <div class="news-img news-img2"></div>
              <div class="news-tag">
                <ul class="my-4">
                </ul>
              </div>
              <div class="news-title">
                <h4><a href="#"><center>智慧出行</center></a></h4>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="single-news">
              <div class="news-img news-img3"></div>
              <div class="news-tag">
                <ul class="my-4">
                </ul>
              </div>
              <div class="news-title">
                <h4><a href="#"><center>智慧设备</center></a></h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- News Area End -->

    <!-- 弹窗 -->
    <question-one v-if="questionone" ref="questionone"/>
    <question-two v-if="questiontwo" ref="questiontwo"/>
    <question-three v-if="questionthree" ref="questionthree"/>
  </div>
</template>

<script>
    import QuestionOne from '../pages/question/question-one'
    import QuestionTwo from '../pages/question/question-two'
    import QuestionThree from '../pages/question/question-three'

    export default {
      data: function () {
        return {
          questionone: false,
          questiontwo: false,
          questionthree: false
        }
      },
      components: {
        QuestionOne,
        QuestionTwo,
        QuestionThree
      },
      methods: {
        questionOneDialog: function () {
          this.questionone = true
          this.$nextTick(() => {
            this.$refs.questionone.init()
          })
        },
        questionTwoDialog: function () {
          this.questiontwo = true
          this.$nextTick(() => {
            this.$refs.questiontwo.init()
          })
        },
        questionThreeDialog: function () {
          this.questionthree = true
          this.$nextTick(() => {
            this.$refs.questionthree.init()
          })
        }
      }
    }
</script>

