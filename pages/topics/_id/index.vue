<template>
	<div class="topic-detail">
		<header>
			<div class="topic-detail__header--img-holder">
				<img class="topic-detail__header--img" src="http://p1.pstatp.com/list/640x360/d27f0005bc717ef8950f" alt="">
			</div>
			<span class="opic-detail__header--title">{{topic.title}}</span>
		</header>
		<section>
			<article>
				<div class="topic-detail__main--content">{{topic.content}}</div>
				<div class="topic-detail__main--info">
					<span class="topic-detail__main--info-item">
						<icon-svg icon-class="star"></icon-svg>
						<span>{{topic.starNum}}</span>
					</span>
					<span class="topic-detail__main--info-item">
						<icon-svg icon-class="dump"></icon-svg>
						<span>{{topic.dumpNum}}</span>
					</span>
					<span class="topic-detail__main--info-item">
						<icon-svg icon-class="share"></icon-svg>
						<span>{{topic.shareNum}}</span>
					</span>
					<span class="topic-detail__main--info-item">
						<icon-svg icon-class="collection"></icon-svg>
						<span>{{topic.collectionNum}}</span>
					</span>
				</div>
				<div class="topic-detail__main--tags">
					<sm-tag v-for="(tag, index) in (topic.tags || [])" :key="index">{{tag}}</sm-tag>
				</div>
			</article>
		</section>
		<!--video-->
		<section>
			<topic-detail :videos="topic.videos || []"></topic-detail>
		</section>
	</div>
</template>
<script>
import SmTag from "~/components/common/sm-tag";
import TopicDetail from "~/components/topics/topic-detail";
export default {
  validate({ params }) {
    console.log("topic id is: " + params.id);
    return /^\d+$/.test(+params.id);
  },
  components: {
    SmTag,
    TopicDetail
  },
  props: {
    //   topic: {
    //       required: true,
    //       type: Object
    //   }
  },
  layout: "sm",
  //   asyncData({params}) {
  //     return axios.get(`/topics/${params.id}`)
  //     .then((res) => {
  //       return { topic: res.data.topic }
  //     })
  //   },
  data() {
    return {
      activeName: "new",
      topic: {
        recommend: "lvfei",
        imgUrl: "",
        tags: ["tecnology", "science"],
        title: "This is a simple title test",
        content:
          "This is content test test the content and the component is right or not!something goes wrong.This is content test test the content and the component is right or not!something goes wrong.This is content test test the content and the component is right or not!something goes wrong.This is content test test the content and the component is right or not!something goes wrong",
        time: "2017.4.23",
        starNum: 252,
        dumpNum: 32,
        shareNum: 23,
        collectionNum: 12,
        videos: []
      }
    };
  }
};
</script>
<style lang="less" scoped>
.topic-detail {
  color: @fontBlack;
  header {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .topic-detail__header--img-holder {
      width: 100%;
      height: 0px;
      padding-bottom: 50%;
      position: relative;
      img {
        position: absolute;
        width: 100%;
        height: 100%;
      }
    }
    .opic-detail__header--title {
      font-size: 18px;
      font-weight: bold;
    }
  }
  section {
	  .topic-detail__main--content {
		  font-size: 14px;
			.word();
	  }
	  .topic-detail__main--info {
		  margin: 25px 0px 15px;
		  display: flex;
		  align-items: center;
		  justify-content: space-around;
		  .topic-detail__main--info-item{ 
			  display: flex;
			  align-items: center;
			  span {
				  margin-left: 3px;
				  font-size: 14px;
				  color: #9D9D9D;
			  }
			  svg {
				  font-size: 26px;
			  }
		  }
	  }
	  .topic-detail__main--tags {
		  display: flex;
		  justify-content: flex-end;
		  margin: 5px 0px 20px;
		  .sm-tag {
			  height: 24px;
			  line-height: 24px;
		  }
	  }
  }
}
</style>
