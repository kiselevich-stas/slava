<template>
  <div v-if="data" class="container uniq-features">
    <h2>{{ (data as Data)?.blockHeading }}</h2>
    <transition-group name="slide" tag="div" class="features-list">
      <FeatureCard v-for="(feature) in data.features" :key="feature.sorting" :feature="feature" />
    </transition-group>
    <UiButton theme="secondary" class="uniq-features__btn" @click="addFeature">Добавить особенность</UiButton>
  </div>
</template>

<script setup lang="ts">
import { useAsyncData } from 'nuxt/app'
import { useUniqueFeaturesStore, type Feature } from '@/app/stores/features'
import FeatureCard from '~/src/entities/FeatureCard.vue'

const uniqueFeaturesStore = useUniqueFeaturesStore()

interface Data {
  blockHeading: string;
  assetsDomain: string;
  features: Feature[];
}

const asyncData = useAsyncData<Data | null>('unique-features', async () => {
  await uniqueFeaturesStore.fetchUniqueFeatures()
  return {
    blockHeading: uniqueFeaturesStore.blockHeading,
    assetsDomain: uniqueFeaturesStore.assetsDomain,
    features: uniqueFeaturesStore.features
  }
})

const data = asyncData.data || { blockHeading: '', assetsDomain: '', features: [] }

const addFeature = () => {
  const newFeature: Feature = {
    model_name: 'Figaro',
    description: 'Вращение стационарно заставляет иначе взглянуть на то, что такое нестационарный гироскопический стабилизатор.',
    image: '/assets/img4.png',
    image_alt: 'нестационарный гироскопический стабилизатор'
  }
  uniqueFeaturesStore.addFeature(newFeature)
}
</script>

<style scoped lang="scss">
.uniq-features{
  padding-top: 64px;
  padding-bottom: 64px;
  &__btn{
    margin: 0 auto;
    margin-top: 40px;
    min-width: 280px;
    min-height: 50px;
    @include df;
  }
  .features-list {
    margin-top: 48px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 24px;
    justify-content: space-between;
  }
  h2{
    @include title2;
  }
}
@media (max-width: 991px) {
  .uniq-features{
    h2{
      font-size: toRem(22px);
    }
    .features-list{
      grid-template-columns: 1fr 1fr;
    }
  }
}

@media (max-width: 576px) {
  .uniq-features{
    h2{
      font-size: toRem(20px);
    }
    .features-list{
      grid-template-columns: 1fr ;
    }
  }
}
</style>
