<template>
  <vue-final-modal
    class="confirm-modal"
    content-class="confirm-modal-content"
    overlay-transition="vfm-fade"
    content-transition="vfm-fade"
  >
    <div class="modal-content">
      <resident-form>
        <template #title>Заполните заявку, чтобы стать резидентом</template>
      </resident-form>
    </div>
  </vue-final-modal>
</template>

<script setup lang="ts">
import { ResidentForm } from '@/features/resident-form/ui'
import { VueFinalModal } from 'vue-final-modal'
</script>

<style>
.confirm-modal {
  display: flex;
  justify-content: center;
  align-items: center;
}
.confirm-modal-content {
  padding: 2rem;
  background: #fff;
  border-radius: 0.5rem;
}
.modal-content {
  position: relative;
  max-height: 90vh;
  overflow-y: auto;
  padding: 0 0.25rem;
}

.vfm-modal {
  height: auto;
}
</style>
