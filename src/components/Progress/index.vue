<template>
  <div>
    <div class="progress" :class="[color, progress]">
      <slot>
        <div class="info" ref="info"></div>
      </slot>
      <p class="text">{{ progress }}%</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    color: {
      type: String,
      default: 'default',
    },
    progress: {
      type: String,
      default: 'default',
    },
  },
  watch: {
    progress: {
      handler(newVal) {
        this.$nextTick(() => {
          this.$refs.info.style.width = newVal + '%';
        });
      },
      immediate: true, // 立即执行
    },
  },
  created() {},

  methods: {},

  computed: {},
};
</script>

<style lang="less" scoped>
.progress {
  position: relative;
  margin: 20px 30px;
  width: 666px;
  height: 66px;
  border-radius: 33px;
  background-color: #ccc;
  font-size: 24px;
  line-height: 66px;
  border: 1px solid black;
  .text {
    position: absolute;
    top: 0px;
    left: 20px;
    margin: 0;
  }
}
.info {
  height: 100%;
  // transition: all 2s;
  background-color: #fff;
  border-radius: 33px;
  font-size: 24px;
}
.red {
  background-color: red;
}
.green {
  background-color: lawngreen;
}
.hotpink {
  background-color: hotpink;
}
.skyblue {
  background-color: skyblue;
}
</style>
