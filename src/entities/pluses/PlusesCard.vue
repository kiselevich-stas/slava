<script setup lang="ts">
import type { CardProps } from '~/src/types/pluses/plusesType'

const props = defineProps<CardProps>()
</script>

<template>
  <div class="pluses__item">
    <component :is="props.icon" v-if="props.icon" class="item__icon" />
    <div class="item__text">
      <h3 v-if="props.title">{{ props.title }}</h3>
      <p v-if="props.description">{{ props.description }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.pluses__item {
  display: flex;
  flex-direction: column;
  align-items: center;

  .item__text {
    margin: 16px;
    h3 {
      @include title3;
      text-align: center;
    }
    p {
      margin-top: 16px;
      text-align: center;
    }
  }
}
@media (max-width: 991px) {
  .pluses__item{
   .item__text{
     h3{
       font-size: toRem(18px);
     }
   }
  }
}

@media (max-width: 768px) {
  .pluses__item{
    .item__icon{
      width: 150px;
    }
  }
}
@media (max-width: 576px) {
  .pluses__item{
    .item__icon{
      width: 200px;
    }
  }
}
</style>
