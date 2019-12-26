<template>
  <el-dialog
    :modal-append-to-body='false'
    width="60%"
    :visible.sync="visible">

    <!-- Start Question Area -->
    <section>
      <div class="container">
        <h3 class="text-heading title_color">6G时代什么时候来临 ？</h3><br>
        <div align="center"><img src="/static/assets/images/6G/17.jpg" /></div><br>
        <p style="font-size: 18px">
          5G已在全球开始商用，按照业界认同的每10年移动通信将迭代的规律看，6G将在2030年左右出现。<br>中国移动研究院首席科学家易芝玲说：“移动通信技术的迭代不单纯由技术决定，包括很多因素，目前还不知道什么时候部署6G，但迭代的时间一定会越来越短。”天津大学计算机科学与技术学院教授王晓飞在接受科技日报记者采访时表示，6G除非在如太赫兹、空天地、水下、物理层、基础材料等特别核心的领域产生积极作用，仅速度的提升没有意义。 按照芬兰奥卢大学发布的全球首个6G白皮书（《KEY DRIVERS AND RESEARCH CHALLENGES FOR 6G UBIQUITOUS WIRELESS INTELLIGENCE》，以下简称白皮书）所描述，除了传输能力显著提升，无线网络将不再困于地面，而将实现地面、卫星和机载网络的无缝连接。6G将几乎没有“盲点”。
        </p>
      </div>
    </section>
    <!-- End Question Area -->

    <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="visible = false">返回</el-button>
    </span>
  </el-dialog>
</template>

<script>
  export default {
    data () {
      return {
        visible: false
      }
    },
    methods: {
      init () {
        this.visible = true
      }
    }
  }
</script>
