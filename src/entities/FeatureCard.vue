<template>
  <div class="feature">
    <div class="img-container">
      <img :src="imageUrl" :alt="feature.image_alt">
    </div>
    <p>{{ feature.description }}</p>
  </div>
</template>

<script setup lang="ts">
import { type Feature, useUniqueFeaturesStore } from '@/app/stores/features'

const props = defineProps<{
  feature: Feature;
}>()
const uniqueFeaturesStore = useUniqueFeaturesStore()
const assetsDomain = uniqueFeaturesStore.assetsDomain
const imageUrl = `${assetsDomain}${props.feature.image}`
</script>

<style scoped lang="scss">
/* Стили для карточки особенности */
.feature {
  flex: 0 0 calc(33.333% - 20px);
  margin-bottom: 20px;
}
.feature .img-container {
  max-width: 100%;
  height: auto;
  //min-height: 200px;
  display: block;
  overflow: hidden;
  img{
    transition: $transition;
    max-width: 100%;
    display: block;
  }
  &:hover{
    img{
      filter: brightness(0.8);
      scale: 1.15;
    }
  }
}
.feature p {
  @include body;
  margin-top: 16px;

}
</style>
