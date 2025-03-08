<template>
  <div class="app-input" :class="[$attrs.class ? $attrs.class : 'app-input--default']">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { useAttrs } from 'vue'
const $attrs = useAttrs()
</script>
