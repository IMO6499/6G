<template>
  <el-dialog
    :modal-append-to-body='false'
    width="60%"
    :visible.sync="visible">

    <!-- Start Question Area -->
    <section>
      <div class="container">
        <h3 class="text-heading title_color">智能手机会被淘汰吗 ？</h3><br>
        <div align="center"><img src="/static/assets/images/6G/18.jpg" /></div><br>
        <p style="font-size: 18px">
          芬兰奥卢大学最近联合70多位专家发表了6G白皮书，介绍了6G时代的技术趋势。

          根据这个白皮书，6G网络会在2030年左右问世，其愿景就是泛在无线智能，意味着6G网络会通过无线技术覆盖全球各个角落，为人类社会提供更智能的感知服务和应用。

          具体的技术指标上，首先网速毫无疑问会进一步提升，现在5G能够提供1Gbps以上的速率，6G会再次提升10-100倍，单用户速率可达1Tbps，延迟低至0.1毫秒，定位精度在厘米级，频段会从5G的Sub-6G、28GHz毫米波进入THz太赫兹级别，网络容量进一步提升。

          然后6G时代很多终端产品都会被重塑或者淘汰，智能手机也会被取代，因为6G技术问世的时候，VR（虚拟现实）、AR（增强现实）及MR（混合现实）等技术就会成熟了，不同类型的新设备会取代智能手机成为人类工作、娱乐的主要工具。
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
