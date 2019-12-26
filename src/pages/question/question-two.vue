<template>
  <el-dialog
    :modal-append-to-body='false'
    width="60%"
    :visible.sync="visible">

    <!-- Start Question Area -->
    <section>
      <div class="container">
        <h3 class="text-heading title_color">6G给人们带来的变革 ？</h3><br>
        <div align="center"><img src="/static/assets/images/6G/19.png" /></div><br>
        <P style="text-align: center">中国移动研究院首席专家  刘光毅</P>
        <p style="font-size: 18px">

          刘光毅列出了以下6G时代的新应用场景：孪生体域网、超能交通、通感互联网、全息通信、智慧生产、机器间的协同、虚拟助理、情感和触觉应用、多感官混合现实、空间通信。

          其中，孪生体域网能够通过6G和信息通信技术模拟出虚拟人体，能够全天候跟踪，对病变提前预测，也能够对虚拟人体进行模拟手术和用药，预判效果，从而提升人的生命质量。

          超能交通是指未来的交通方式将出现革命性的变化，从主要集中在地面的通信发展到地空一体化，通过智慧交通大脑可实现不同交通工具的智慧互联，以及多维度的护航确保交通安全可信。

          通感互联网是指6G时代，触觉互联网将演进为通感互联网，信息将携带触觉、味觉、嗅觉等更多感官感受，实现人机物间的体验交互。“比如机器可以直接将动作传感到人的肌肉，指导怎样更好地锻炼身体。”刘光毅举例。

          全息通信是一种新的呈现形式，6G时代，全息影像将从视觉应用扩展到可操控应用，并通过移动通信网络实现多人远程实时交互，应用场景包括协同办公、远程教育、交互式会议、社交等。

          虚拟助理虽然是机器助理，但是在未来将会比自己更了解自己。

          智慧生产将通过全覆盖网络，引入纳米技术、数字孪生、大数据、AI、云计算和边缘计算等，实现太空农业、水下种植、自驱生产、智能生产、协同生产、智控产销、健康监测、生命周期监测等

          “6G时代，业务需求将会多样化、网络覆盖立体化，交互形式和内容将会多样化，业务趋于开放化和定制化，通信计算将与AI和安全更深度融合，从目前打补丁的方式演变为原生的技术的方式。”
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
