<template>
  <div>
    <ShopHeader/>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/shop/foods" replace>点餐</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/shop/ratings" replace>评价</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/shop/info" replace>商家</router-link>
      </div>
    </div>
    <keep-alive><router-view/></keep-alive>
  </div>
</template>

<script>
import ShopHeader from '../../components/ShopHeader/ShopHeader.vue'
export default {
  name: 'Shop',
  mounted () {
    this.$store.dispatch('getShopInfo')
  },
  components: {
    ShopHeader
  }
}
</script>

<style  lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
.tab
  height 40px
  line-height 40px
  background #fff
  bottom-border-1px #82CAFA
  .tab-item
    float left
    width: 33.33333%
    text-align center
    font-size 14px
    color #82CAFA
    a
      display block
      position relative
      &.router-link-active
        color #5CB3FF
        &::after
          content ''
          position absolute
          left 50%
          bottom 1px
          width 35px
          height 2px
          transform translateX(-50%)
          background #6698FF
</style>
