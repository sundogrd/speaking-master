<template>
  <div class="subjects-wrapper">
    <el-table
      :data="subjectsData"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="#"
        width="150">
      </el-table-column>
      <el-table-column
        prop="name"
        label="Subject Name">
        <template slot-scope="scope">
          <router-link :to="{ name: 'subject', params: { subjectId: scope.row.id }}">{{ scope.row.name }}</router-link>
        </template>
      </el-table-column>
      <el-table-column
        label=""
        width="80">
        <template slot-scope="scope">
          <el-button
            @click.native.prevent="jumpSubmit(scope.row.id)"
            type="text"
            size="small">
            提交
          </el-button>
        </template>
      </el-table-column>
      <el-table-column
        prop="paticipants"
        label="Paticipants"
        width="120">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>

export default {
  name: 'index',
  components: {

  },
  data () {
    return {
      subjectsData: [{
        id: 1,
        name: 'Most attractive theme of children museum exhibition',
        tags: [
          'Toefl',
          'one of three',
          'task 1'
        ],
        paticipants: 12
      }, {
        id: 2,
        name: 'Agree or disagree we should be completly honest and open with friends',
        tags: [
          'Toefl',
          'agree or disagree',
          'task 2'
        ],
        paticipants: 3
      }]
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
.subjects-wrapper {
  margin-top: 20px;
}
</style>
