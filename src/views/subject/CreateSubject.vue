<template>
  <div class="create-subject-wrapper">
    <div class="main">
      <div class="subject-name">
        <label for="subjectName">Subject Name</label>
        <br>
        <el-input v-model="subjectName" placeholder="请输入名称" name="subjectName"></el-input>
      </div>

      <div class="subject-content">
        <label for="subjectContent">Subject Content</label>
        <br>
        <el-input
          type="textarea"
          :rows="5"
          name="subjectContent"
          v-model="subjectContent"
          placeholder="请输入内容">
        </el-input>
      </div>

      <el-button type="info" @click="createSubject">创建</el-button>
    </div>

  </div>
</template>

<script>
import { createSubject } from 'api/subjects'

export default {
  name: 'create-subject',
  components: {

  },
  data () {
    return {
      subjectName: '',
      subjectContent: ''
    }
  },
  computed: {},
  methods: {
    createSubject: function () {
      console.log('createSubject')

      /* 判空 */
      if (this.subjectName === '' || this.subjectContent === '') {
        alert('名称或者内容不能为空')
      } else {
        /* 发送到服务器 */
        console.log('create...')
        createSubject({
          name: this.subjectName,
          content: this.subjectContent
        })
          .then(response => {
            console.log('succ')
            this.$router.push({
              path: '/subjects'
            })
          })
          .catch(error => {
            alert('创建失败')
            console.log(error)
          })
      }
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .create-subject-wrapper {
    display: flex;
    justify-content: center;
    .main {
      margin-top: 20px;
      flex: 0.5;
      .subject-content {
        margin: 15px 0;
      }
      label {
        line-height: 2;
        font-weight: normal
      }
    }
  }
</style>
