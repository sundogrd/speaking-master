<template>
    <div class="topic">
        <header>
            <search-bar class="search"></search-bar>
            <div class="notice">
                <icon-svg icon-class="notice" />
            </div>
        </header>
        <sticky-tabs activeName="new">
            <tab-pane label="New" name="new">
                <topic-items :topics="topics"></topic-items>
            </tab-pane>
            <tab-pane label="keke" name="keke">keketest</tab-pane>
            <tab-pane label="testtestetste" name="test">恒昌很发哈发发发地方方东方红东方地方看到覅代发货的发生符合地方</tab-pane>
        </sticky-tabs>
    </div>
</template>
<script>
import SearchBar from "~/components/index-header/search-bar.vue";
import {TopicItems} from "~/components/topics";
import {
  Tabs as StickyTabs,
  TabPane,
  TabBar,
  TabNav
} from "~/components/common/sticky-tabs";

export default {
  validate({ params }) {
    // Must be a number
    // console.log(params.id)
    return /^\d+$/.test(params.id);
  },
  components: {
    SearchBar,
    StickyTabs,
    TabPane,
    TopicItems
  },
  layout: "sm",
  data() {
    return {
      activeName: "new",
      topics: [
        {
          recommend: "lvfei",
          imgUrl: "",
          tags: ["tecnology", "science"],
          title: "This is a simple title test",
          content: "This is content test test the content and the component is right or not!something goes wrong",
          time: '2017.4.23',
          listenNum: 252,
          videoNum: 32,
          like: 23
        },
        {
          recommend: "dark deep fantasy",
          imgUrl: "",
          tags: ["tecnology", "science"],
          title: "This is a simple title test",
          content: "This is content test test the content and the component is right or not!something goes wrong",
          time: '2018-2-3',
          listenNum: 252,
          videoNum: 32,
          like: 23
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
.topic {
  font-family: 'PingFang SC';
  header {
    display: flex;
    margin-bottom: 16px;
    .search {
      flex: 1;
    }
    .notice {
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 0 0 33px;
      font-size: 24px;
    }
  }
}
</style>
