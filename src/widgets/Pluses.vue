<script setup lang="ts">
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper-bundle.css'
import type { Swiper as SwiperType } from 'swiper'

import PlusesCard from '~/src/entities/pluses/PlusesCard.vue'
import { cards } from '~/src/widgets/Pluses/static/data'

const swiperInstance = ref<SwiperType | null>(null)
const onSwiper = (swiper: SwiperType) => {
  swiperInstance.value = swiper
}

const swiperConfig = ref({
  slidesPerView: 1,
  spaceBetween: 24,
  pagination: {
    clickable: true
  }
})
</script>

<template>
  <div class="container">
    <div class="pluses">
      <h1>Мы ценим Ваше время и комфорт!<br> Запишитесь на сервис Nissan онлайн</h1>
      <div class="pluses__items">
        <div class="grid-items">
          <PlusesCard
            v-for="(card, index) in cards"
            :key="index"
            :icon="card.icon"
            :title="card.title"
            :description="card.description"
          />
        </div>
        <div class="swiper-items">
          <Swiper v-bind="swiperConfig" @swiper="onSwiper">
            <SwiperSlide
              v-for="(card, index) in cards"
              :key="index"
            >
              <PlusesCard :icon="card.icon" :title="card.title" :description="card.description" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

.pluses {
  padding-top: 20px;

  h1 {
    @include title1;
    position: relative;
    @include capslock;

    &:before {
      position: absolute;
      top: -16px;
      content: '';
      width: 78px;
      background: $red;
      height: 4px;
    }
  }

  &__items {
    margin-top: 48px;
  }

  .grid-items {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
  }

  .swiper-items {
    display: none;
  }
}
@media (max-width: 1199px) {
  .pluses{
    h1{
      font-size: toRem(36px);
    }
    .grid-items{
      grid-template-columns: 1fr 1fr;
    }
  }
}
@media (max-width: 991px) {
  .pluses{
    h1{
      font-size: toRem(28px);
    }
  }
}
@media (max-width: 768px) {
  .pluses{
    h1{
      font-size: toRem(24px);
    }
  }
}
@media (max-width: 575px) {
  .pluses{
    h1{
      br{
        display: none;
      }
      font-size: toRem(22px);
    }
    .grid-items {
      display: none;
    }
    .swiper-items {
      display: block;
    }
  }
}
</style>
