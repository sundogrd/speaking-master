<template>
    <div class="topic-body">
        <div>{{title}}</div>
        <p>{{content}}</p>
    </div>
</template>
<script>
export default {
    name: 'TopicBody',
    componentName: 'TopicBody',
    props: {
        title: String,
        content: String
    },
    data() {
        return {
        }
    }
}
</script>
<style lang="less" scoped>
.topic-body {
    font-family: "PingFang SC";
    & > div {
        font-size: 16px;
        color: #000;
    }
    p {
        font-size: 12px;
        color: #666;
    }
}
</style>


