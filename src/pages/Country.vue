<template>
  <div>
    <!-- Start Chain Area -->
    <section class="sample-text-area">
      <div class="container">
        <h3 class="text-heading title_color">中国6G研发正式启动！</h3>
        <p class="sample-text">
          11月3日，科技部会同发展改革委、教育部、工业和信息化部、中科院、自然科学基金委在北京组织召开6G技术研发工作启动会。会议宣布成立国家6G技术研发推进工作组和总体专家组，这标志着我国6G技术研发工作正式启动。
          会上，总体专家组代表介绍了6G技术研发态势及未来发展思路与建议；TD产业联盟、未来移动通信论坛代表分别介绍了前期工作开展情况、未来6G畅想及下一步工作计划的建议。
          科技部副部长王曦表示，目前全球6G技术研究仍处于探索起步阶段，技术路线尚不明确，关键指标和应用场景还未有统一的定义。在国家发展的关键时期，要高度重视、统筹布局、高效推进、开放创新。
          下一步，科技部将会同有关部门组织总体专家组系统开展6G技术研发方案的制订工作，开展6G技术预研，探索可能的技术方向。
          通过6G技术研发的系统布局，凝练和解决移动通信与信息安全领域面临的一系列基础理论、设计方法和核心技术问题，力争在基础研究、核心关键技术攻关、标准规范等诸多方面获得突破。为移动通信产业发展和建设创新型国家奠定坚实的科技基础。
        </p>
      </div>
    </section>
    <!-- End Chain Area -->
    <!-- Start HuaWei Area -->
    <div class="container" style="margin-bottom: 50px">
      <h3 class="text-heading title_color">华为引领世界！</h3>
      <p class="sample-text">
        今5G普及的浪潮还方兴未艾，在这国家发展的关键时期，我国在移动通信这一关键科技领域再着一步重棋。显然，我国不仅在5G时代立于世界的潮头，而且正准备着在面向未来的6G核心技术攻关、标准规范制定等方面赢得话语权。
        当其他公司还在为明年的5G商用奔波时，通信产业的头部代表公司华为已经在为十年后的6G商用做准备了，多次释放出6G研究的相关信息。
        华为技术有限公司创始人兼首席执行官任正非任正非接受采访的多篇文章中，任正非提到华为的6G和5G是同步做的，华为的6G研究也领先世界。
        在近期发布的CNBC专访华为创始人兼CEO任正非的视频中，任正非谈到，华为研发6G技术已经有3年至5年时间，未来会不惜投资，继续保持华为在6G技术的全球领导地位。
        10月20日，在回答科威特国家新闻社记者提及的6G方面的问题时，任正非透露，6G和5G其实华为是同步做的。“6G主要是带宽更宽了，但是覆盖能力不够，它是毫米波，覆盖距离比较短。这有赖于传播技术中的理论突破、技术突破，6G才能走向实用，我们估计需要十年。”
        对于华为6G，华为驻加拿大负责人曾表示，5G技术的确是目前最新的技术。但展望未来，6G也是5G演进的一部分，因此在5G落地的同时，华为布局6G也同样关键。
        为了积极筹备未来6G网络的研究，华为也曾在今年2月下旬宣布，将在加拿大再次招聘200名员工，此次扩编，华为加拿大分部员工数也将增加20％。
      </p>
    </div>
    <!-- End HuaWei Area -->
    <!-- Start Country Area -->
      <div class="container">
        <div class="section-top-border">
          <h3 class="mb-30 title_color" style="text-align: center">世界各国研发6G现状</h3>
          <div class="progress-table-wrap">
            <div class="progress-table">
              <div class="table-head">
                <div class="serial">#</div>
                <div class="country">Countries</div>
                <div class="visit">population</div>
                <div class="percentage">Percentages</div>
              </div>
            </div>
          </div>
            <transition-group id='app' name="drog" tag="ul">
              <li draggable="true" v-for="(item, index) in lists" style="background: url(static/assets/images/elements/f8.jpg)" @dragstart="dragStart($event, index)"
                  @dragover="allowDrop" @drop="drop($event, index)" v-bind:key="item">
                    <div class="progress-table">
                      <div class="table-row">
                        <div class="serial">{{item.id}}</div>
                        <div class="country"><img :src="item.src" alt="flag">{{item.country}}</div>
                        <div class="visit">{{item.population}}</div>
                        <div class="percentage">
                          <div class="progress">
                            <div :class="item.clas" role="progressbar" :style="{'width': item.progress}" aria-valuenow="80"
                                 aria-valuemin="0" aria-valuemax="100"></div>
                          </div>
                        </div>
                      </div>
                    </div>
              </li>
            </transition-group>
      </div>
    </div>
    <!-- End Country Area -->
  </div>
</template>
<script>
    export default {
      data: function () {
        return {
          lists: [
            {
              id: 1,
              country: 'country',
              population: 645032,
              progress: '90%',
              src: 'static/assets/images/elements/f6.jpg',
              clas: 'progress-bar color-2'
            },
            {
              id: 2,
              country: 'country',
              population: 645032,
              progress: '80%',
              src: 'static/assets/images/elements/f2.jpg',
              clas: 'progress-bar color-1'
            },
            {
              id: 3,
              country: 'country',
              population: 645032,
              progress: '70%',
              src: 'static/assets/images/elements/f4.jpg',
              clas: 'progress-bar color-3'
            },
            {
              id: 4,
              country: 'country',
              population: 645032,
              progress: '60%',
              src: 'static/assets/images/elements/f3.jpg',
              clas: 'progress-bar color-4'
            },
            {
              id: 5,
              country: 'country',
              population: 645032,
              progress: '40%',
              src: 'static/assets/images/elements/f5.jpg',
              clas: 'progress-bar color-5'
            },
            {
              id: 6,
              country: 'country',
              population: 645032,
              progress: '10%',
              src: 'static/assets/images/elements/f1.jpg',
              clas: 'progress-bar color-6'
            },
            {
              id: 7,
              country: 'country',
              population: 645032,
              progress: '5%',
              src: 'static/assets/images/elements/f7.jpg',
              clas: 'progress-bar color-7'
            },
            {
              id: 8,
              country: 'country',
              population: 645032,
              progress: '5%',
              src: 'static/assets/images/elements/f8.jpg',
              clas: 'progress-bar color-8'
            }]
        }
      },
      components: {},
      methods: {
            // 取消默认行为
        allowDrop (e) {
          e.preventDefault()
        },
            // 开始拖动
        dragStart (e, index) {
          let tar = e.target
          e.dataTransfer.setData('Text', index)
          if (tar.tagName.toLowerCase() === 'li') {
          }
        },
            // 放置
        drop (e, index) {
          this.allowDrop(e)
          let arr = this.lists.concat([])
          let dragIndex = e.dataTransfer.getData('Text')
          let temp = arr.splice(dragIndex, 1)
          arr.splice(index, 0, temp[0])
          this.lists = arr
        }
      }
    }
</script>
<style>
  #draggable{

  }
  #draggable ul {
    min-height: 100px;
    width: 1110px;
    margin: 28px auto;
    background: #eee;
  }

  #draggable li {
    min-height: 2em;
    margin-top: 10px;
    background: #abcded;
  }

  /*组件过渡类*/

  .drog-move {
    transition: transform 1s;
  }
</style>
