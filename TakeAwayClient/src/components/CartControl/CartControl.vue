<template>
  <div class="cartcontrol">
    <transition name="move">
      <div class="iconfont remove" v-if="food.count" @click.stop="updateFoodCount(false)"></div>
    </transition>
    <div class="cart-count">{{ food.count }}</div>
    <div class="iconfont zengjia" @click.stop="updateFoodCount(true)"></div>
  </div>
</template>

<script>
export default {
  name: 'CartControl',
  props: {
    food: Object
  },
  methods: {
    updateFoodCount (isAdd) {
      this.$store.dispatch('updateFoodCount', {isAdd, food: this.food})
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
.cartcontrol
  font-size: 0
  .cart-decrease
    display: inline-block
    padding: 6px
    line-height: 24px
    font-size: 24px
    color: rgb(0, 160, 220)

  .remove
    display: inline-block
    padding 5px
    line-height 24px
    font-size 20px
    color #82CAFF
    &.move-enter-active, &.move-leave-active
      transition all .3s
    &.move-enter, &.move-leave-to
      opacity 0
      transform translateX(15px) rotate(180deg)
  .cart-count
    display: inline-block
    vertical-align: top
    width: 12px
    padding-top: 6px
    line-height: 24px
    text-align: center
    font-size: 10px
    color: rgb(147, 153, 159)
  .zengjia
    display: inline-block
    padding: 5px
    line-height: 24px
    font-size: 24px
    color #82CAFF
</style>
