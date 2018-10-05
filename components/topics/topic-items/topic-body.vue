<template>
    <div class="topic-body">
        <div class="topic-body__title">{{title}}</div>
        <p class="topic-body__content">{{content}}</p>
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
    .topic-body__title {
        font-size: 16px;
        color: #000;
    }
    .topic-body__content {
        font-size: 12px;
        color: #666;
    }
}
</style>


