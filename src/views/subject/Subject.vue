<template>
  <div class="subject-wrapper">
    <h1>{{subject.id}}. {{ subject.name }}</h1>
    <p>{{subject.content}}</p>
    <el-button @click="jumpSubmit(subject.id)">Submit</el-button>
  </div>
</template>

<script>

export default {
  name: 'index',
  components: {

  },
  data () {
    const subject = {
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
    return {
      subject
    }
  },
  computed: {},
  methods: {
    jumpSubmit (subjectId) {
      this.$router.push({
        name: 'subjectSubmit',
        params: {
          subjectId
        }
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.subject-wrapper {
  margin-top: 20px;
}
</style>
