<template>
  <div class="app-wrapper">
    <div class="main-left">
      <p class="subject-name"> {{ $route.params.subjectId }}. {{ subjectData.name }}</p>
      <div class= "subject-content">
        <p>{{ subjectData.content }}</p>
      </div>
    </div>

    <div class="main-right">
      <div class="record-controller">
          录音controller
      </div>

      <div class="record-text-component">
        录音文本组件区域
      </div>

      <el-button class="record-btn-publish" type="info" @click="publish">发布</el-button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      subjectData: {}
    }
  },
  components: {

  },
  computed: {},
  methods: {
    getSubjectData (subjectId) {
      return {
        id: 1,
        name: 'Most attractive theme of children museum exhibition',
        content: 'What the fuck is that you are a fucking doubi',
        tags: [
          'Toefl',
          'one of three',
          'task 1'
        ],
        paticipants: 12
      }
    },
    publish () {
      console.log('发布成功')
    }
  },
  async mounted () {
    this.subjectData = this.getSubjectData(this.$route.params.subjectId)
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .app-wrapper {
      margin-top: 5px;
      display: flex;
    }

    .main-left {
      width: 360px;
      .subject-content {
        background: #EBEBEB;
        border: 2px solid #AAA;
        margin-top: 30px;
      }
    }

    .main-right {
      flex: 1;
      text-align: center;
      padding: 10px;
      .record-controller {
        height: 80px;
        overflow: auto;
        background: #EBEBEB;
        border: 2px solid #AAA;
      }
      .record-text-component {
        height: 240px;
        overflow: auto;
        margin-top: 30px;
        background: #EBEBEB;
        border: 2px solid #AAA;
      }
      .record-btn-publish {
        margin-top: 10px;
      }
    }

</style>
