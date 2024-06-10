<script setup lang="ts">

import BannerLogo from '~/src/entities/banner/BannerLogo.vue'

const hoverBtn = ref(false)
const handleHover = () => {
  hoverBtn.value = true
}
const handleLeave = () => {
  hoverBtn.value = false
}
</script>

<template>
  <div>
    <div class="main-banner">
      <div class="container">
        <div class="main-banner__wrapper">
          <div class="logo">
            <UiIconsLogo />
          </div>
          <div class="car">
            <img src="/app/assets/images/banner/nissan.png">
          </div>
          <UiButton class="main-banner__btn" @mouseenter="handleHover" @mouseleave="handleLeave">
            Тест драйв
            <template #after>
              <UiIconsArrow :color="hoverBtn ? '#ffffff' :'#000000'" />
            </template>
          </UiButton>
        </div>
      </div>
    </div>
    <BannerLogo />
  </div>
</template>

<style scoped lang="scss">

.main-banner{
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 116px 0 64px;
  background-color: $brand;
  background-image: url("/app/assets/images/banner/background-main-banner.png");
  background-position: center calc(50% - 38px);
  background-size: 100%;
  background-repeat: no-repeat;

  &__btn{
    min-width: 280px;
    margin-top: 38px;
    align-self: flex-start;
    transition: $transition;
    path{
      transition: $transition;
    }
  }
  &__wrapper{
    display: flex;
    flex-direction: column;
    align-items: baseline;
    position: relative;
  }
  .car{
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translateY(150px);
  }
}
.logo{
  @include df;
  margin-left: 130px;
}

@media (max-width: 1199px) {
  .logo{
    margin-left: 0;
    width: 100%;
  }
  .main-banner{
    .car{
      position: relative;
      transform: translateY(0);
    }
    &__btn{
      margin: 0 auto;
    }
  }
}
@media (max-width: 991px) {
  .logo{
    width: 100%;
  }
  .main-banner{
    .car{
      width: 100%;
      img{
        max-width: 100%;
      }
    }
    &__wrapper{
      gap: 12px;
    }
  }
}

</style>
