<script lang="ts" setup>
const props = defineProps({
  theme: { type: String, default: 'brand' },
  disabled: { type: Boolean, default: false },
  isLoading: { type: Boolean, default: false },
  outline: { type: Boolean, default: false },
  colorLoader: { type: String, default: '#ffffff' }
})
</script>

<template>
  <button
    class="btn"
    :class="[
      `btn--${props.theme}`,
      props.outline ? 'btn--outline' : '',
      props.disabled ? 'btn--disabled' : ''
    ]"
    :disabled="props.disabled"
  >
    <div v-if="props.isLoading" class="loader">
      loader
    </div>
    <template v-else>
      <slot name="before" />
      <span>
        <slot />
      </span>
      <slot name="after" />
    </template>
  </button>
</template>

<style lang="scss">
.btn{
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: $transition;
  cursor: pointer;
  &--brand{
    &:hover{
      background: $red;
      color: $white;
    }
  }
  &--secondary{
    background: $white;
    border: 1px solid $red;
    &:hover{
      background: $red;
      color: $white;
    }
  }
}
</style>
