<template>
  <div ref="selectElement" class="app-select">
    <base-input-wrapper @click="toggleMenu">
      <div ref="selectInputElement" class="app-select__input">
        <div class="app-select__input_items" tabindex="0" @keydown="keyArrowsHandler">
          <div v-for="item in selectedItems" :key="item.value" class="app-select__input_item">
            {{ item.label }}
          </div>
        </div>
        <ChevronDown class="app-select__icon" />
      </div>
      <span><slot></slot></span>
    </base-input-wrapper>
    <transition name="fade" appear>
      <ul v-if="isOpen" class="app-select__menu">
        <li
          v-for="(item, index) in items"
          :key="item.value"
          @click="onSelect(index)"
          class="app-select__menu_item"
          :class="[
            {
              'app-select__menu_item--active': selectedItems.find((i) => i.value === item.value),
            },
            {
              'app-select__menu_item--active': hoverIndex === index,
            },
          ]"
        >
          {{ item.label }}
        </li>
      </ul>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref, onMounted, onUnmounted } from 'vue'
import { BaseInputWrapper } from '.'
import type { IBaseSelectItem, IBaseSelectProps } from './types'
import { ChevronDown } from '../icons'

const $emits = defineEmits(['update:modelValue'])

const $props = withDefaults(defineProps<IBaseSelectProps>(), {
  items: () => [
    {
      label: '',
      value: '',
    },
  ],
  mode: 'select',
})

const selectElement = ref<HTMLElement | null>(null)
const selectInputElement = ref<HTMLElement | null>(null)
const isOpen = ref<boolean>(false)
const selectedItems = ref<IBaseSelectItem[]>([])
const hoverIndex = ref<number>(-1)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
  if (selectInputElement.value) {
    const el = selectInputElement.value
    if (!isOpen.value) {
      if (!selectedItems.value.length) {
        el.classList.remove('app-selected')
      }
      hoverIndex.value = -1
    } else {
      el.classList.add('app-selected')
    }
  }
}

const outsideClickHandler = (event: Event) => {
  if (
    event.target !== selectElement.value &&
    !selectElement.value?.contains(event.target as Node)
  ) {
    isOpen.value = false
    if (selectInputElement.value) {
      const el = selectInputElement.value
      if (!selectedItems.value.length) {
        el.classList.remove('app-selected')
      }
    }
  }
}

const onSelect = (index: number) => {
  if ($props.mode === 'multiselect') {
    onMultiSelect(index)
  } else {
    onSingleSelect(index)
  }
}

const onSingleSelect = (index: number) => {
  if (selectedItems.value.find((i) => i.value === $props.items[index].value)) {
    const el = selectInputElement.value
    el?.classList.remove('app-selected')
    selectedItems.value = []
  } else {
    selectedItems.value = [{ ...$props.items[index] }]
  }
  $emits('update:modelValue', ...selectedItems.value)
  isOpen.value = false
}

const onMultiSelect = (index: number) => {
  const listIndex = selectedItems.value.findIndex((i) => $props.items[index].value === i.value)
  if (listIndex === -1) {
    selectedItems.value.push($props.items[index])
  } else {
    selectedItems.value.splice(listIndex, 1)
  }
  $emits('update:modelValue', selectedItems.value)
}

const keyArrowsHandler = (event: KeyboardEvent) => {
  if (!isOpen.value) {
    if (event.key === 'Enter') {
      toggleMenu()
    }
  } else {
    if (event.key === 'ArrowDown') {
      if (hoverIndex.value === $props.items.length - 1) {
        hoverIndex.value = 0
      } else {
        hoverIndex.value += 1
      }
    }
    if (event.key === 'ArrowUp') {
      if (hoverIndex.value === 0) {
        hoverIndex.value = $props.items.length - 1
      } else {
        hoverIndex.value -= 1
      }
    }
    if (event.key === 'Enter') {
      onSelect(hoverIndex.value)
    }
    if (event.key === 'Escape') {
      toggleMenu()
    }
  }
}

onMounted(() => document.addEventListener('click', outsideClickHandler))
onUnmounted(() => document.removeEventListener('click', outsideClickHandler))
</script>
