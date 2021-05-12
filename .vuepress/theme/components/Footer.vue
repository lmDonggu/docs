<template>
  <div class="footer-wrapper">

    <!-- 显示vuepress theme 版本号 -->
    <span>
      <reco-icon icon="reco-theme" />
      <a target="blank" href="https://vuepress-theme-reco.recoluan.com">{{`vuepress-theme-reco@${version}`}}</a>
    </span>

    <!-- ICP 备案文案 -->
    <!-- <span v-if="$themeConfig.record">
      <reco-icon icon="reco-beian" />
      <a :href="$themeConfig.recordLink || '#'">{{ $themeConfig.record }}</a>
    </span> -->

    <!-- 版权 -->
    <span>
        <reco-icon icon="reco-copyright" />
        <span>Powered by </span>
        <a href="https://github.com/vuejs/vuepress" target="_blank">VuePress</a>
        <span> | </span>
        <a href="https://github.com/vuepress-reco/vuepress-theme-reco" target="_blank">vuepress-theme-reco</a>
    </span>

    <!-- 作者和博客建设时间 -->
    <span>
      <reco-icon icon="reco-other" />
      <a>
        <span v-if="$themeConfig.author">{{ $themeConfig.author }}</span>
        &nbsp;&nbsp;
        <span v-if="$themeConfig.startYear && $themeConfig.startYear != (new Date().getFullYear())">{{ $themeConfig.startYear }} - </span>
        {{ new Date().getFullYear() }}
      </a>
    </span>

    <!-- 公安部备案文案 -->
    <!-- <span v-show="showAccessNumber">
      <reco-icon icon="reco-eye" />
      <AccessNumber idVal="/" />
    </span>
    <p class="cyber-security" v-if="$themeConfig.cyberSecurityRecord">
      <img src="https://img.alicdn.com/tfs/TB1..50QpXXXXX7XpXXXXXXXXXX-40-40.png" alt="">
      <a :href="$themeConfig.cyberSecurityLink || '#'">{{ $themeConfig.cyberSecurityRecord }}</a>
    </p>
    <Comments :isShowComments="false"/> -->

  </div>
</template>

<script>
import { defineComponent, computed, getCurrentInstance } from 'vue-demi'
import { RecoIcon } from '@vuepress-reco/core/lib/components'
import { version } from '../package.json'
export default defineComponent({
  components: { RecoIcon },
  setup (props, ctx) {
    const instance = getCurrentInstance().proxy
    const showAccessNumber = computed(() => {
      const {
        $themeConfig: { valineConfig },
        $themeLocaleConfig: { valineConfig: valineLocalConfig }
      } = instance

      const vc = valineLocalConfig || valineConfig

      return vc && vc.visitor != false
    })
    return { version, showAccessNumber }
  }
})
</script>

<style lang="stylus" scoped>
  .footer-wrapper {
    overflow: hidden;
    padding: 1.5rem 2.5rem;
    border-top: 1px solid var(--border-color);
    text-align: center;
    color: lighten($textColor, 25%);
    a {
      font-size 14px
    }
    > span {
      margin-left 1rem
      > i {
        margin-right .5rem
      }
    }
    .cyber-security {
      img {
        margin-right .5rem
        width 20px
        height 20px
        vertical-align middle
      }
      a {
        vertical-align middle
      }
    }
  }

@media (max-width: $MQMobile) {
  .footer {
    text-align: left!important;
    > span {
      display block
      margin-left 0
      line-height 2rem
    }
  }
}
</style>
