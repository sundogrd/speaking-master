<template>
    <div class="topic-header">
        <img :src="imgUrl || 'http://p1.pstatp.com/list/640x360/d27f0005bc717ef8950f'" class="image">
            <div class="topic-header__detail">
            <span class="topic-header--rec">来自{{recommend}}的推荐</span>
            <span class="topic-header--tags">
                <sm-tag type="label" v-for="tag in tags" :key="tag">{{tag}}</sm-tag>
            </span>
        </div>
    </div>
</template>
<script>
import SmTag from '~/components/common/sm-tag/index.vue';
export default {
    name: 'TopciHeader',
    componentName: 'TopicHeader',
    components: {
        SmTag
    },
    props: {
        imgUrl: String,
        recommend: String,
        tags: Array
    },
    data() {
        return {
        }
    }
}
</script>
<style lang="less" scoped>
.topic-header {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    .topic-header__detail {
        margin-top: 8px;
        margin-bottom: 4px;
        display: flex;
        justify-content: space-between;
    }
    .image {
        width: 100%;
        max-height: 200px;
        min-height: 150px;
        border-radius: 15px;
    }
    .topic-header--rec {
        font-size: 10px;
        color: @fontGray;
    }
    .topic-header--tags {
        font-size: 10px;
        color: @fontBlack;
        font-weight: bold;
    }
}
</style>

