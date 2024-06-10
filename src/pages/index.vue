<script setup lang="ts">

import MainBanner from '~/src/widgets/MainBanner.vue'
import Pluses from '~/src/widgets/Pluses.vue'
import UniqueFeatures from '~/src/widgets/UniqueFeatures.vue'

definePageMeta({ layout: 'default' })
</script>
<template>
  <div>
    <MainBanner />
    <Pluses />
    <UniqueFeatures />
  </div>
</template>
<style lang="scss">

</style>
