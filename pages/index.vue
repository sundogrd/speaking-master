<template>
  <div class="index">
    <header>
      <search-bar class="search"></search-bar>
      <div class="notice">
        <icon-svg icon-class="notice" />
      </div>
    </header>
    <ul class="category-list">
      <li class="category">
        <icon-svg icon-class="notice" />
        <span>TOEFL</span>
      </li>
      <li class="category">
        <icon-svg icon-class="notice" />
        <span>TOEFL</span>
      </li>
      <li class="category">
        <icon-svg icon-class="notice" />
        <span>TOEFL</span>
      </li>
      <li class="category">
        <icon-svg icon-class="notice" />
        <span>TOEFL</span>
      </li>
    </ul>
    <div class="banner" v-swiper:mySwiper="swiperOption">
      <div class="banner-wrapper">
        <div class="banner-item" v-for="banner in banners" :key="banner.id">
          <img :src="banner.src">
        </div>
      </div>
    </div>
    <hr />
    <hr />
    <hr />
    <hr />
    <sticky-tabs v-model="activeName" @tab-click="handleTabClick">
      <tab-pane label="New" name="new">testasd</tab-pane>
      <tab-pane label="keke" name="keke">keketest</tab-pane>
    </sticky-tabs>
  </div>
</template>

<script>
import SearchBar from '~/components/index-header/search-bar.vue'
import Notice from '~/components/index-header/notice.vue'
import { Tabs as StickyTabs, TabPane, TabBar, TabNav } from '~/components/common/sticky-tabs'

export default {
  layout: 'sm',
  transition: 'bounce',
  components: {
    SearchBar,
    StickyTabs,
    TabPane,
  },
  mounted() {
    console.log(this.mySwiper)
  },
  data() {
    return {
      banners: [{
        id: 1,
        src: 'http://p1.pstatp.com/list/640x360/d27f0005bc717ef8950f'
      }, {
        id: 3,
        src: 'http://p98.pstatp.com/list/190x124/pgc-image/15386008864223b307f8af7'
      }, {
        id: 6,
        src: 'http://p3.pstatp.com/origin/f7c0001e255a7310e36'
      }, {
        id: 7,
        src: 'http://p1.pstatp.com/origin/f7b0002184a9637e87c'
      }],
      swiperOption: {
        slidesPerView: 'auto',
        slideClass: 'banner-item',
        wrapperClass: 'banner-wrapper',
        spaceBetween: 0,
        on: {
          slideChange() {
            console.log('onSlideChangeEnd', this);
          },
          tap() {
            console.log('onTap', this);
          }
        }
      },
      activeName: 'keke'
    }
  },
  methods: {
    handleTabClick() {
      console.log("tab clicked")
    }
  }
}
</script>
<style lang="less" scoped>
.index {
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
  .category-list {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    .category {
      flex: 1;
      text-align: center;
      .icon {
        margin-bottom: 4px;
        color: #399EF4;
        font-size: 44px;
      }
      font-size: 14px;
      color: #B2B2B2;
    }
  }
  .banner {
    .banner-wrapper {
      display: flex;
      width: 100%;
      .banner-item {
        padding: 9px 15px 9px 0;
        img {
          border-radius: 5px;
          width: 185px;
          height: 108px;
        }
      }
    }
  }
}
</style>

