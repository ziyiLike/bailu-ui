<template>
  <div :class="['lu-button', 'lu-btn-' + props.type]">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue';
import type { ButtonType } from './index'

const props = defineProps({
  type: {
    type: String as PropType<ButtonType>,
    default: "default",
    validator: (value: ButtonType) => {
      const types = ["default", "primary"]
      return types.includes(value)
    }
  }
})

</script>

<style scoped lang="scss">
.lu-button {
  padding: 0.4rem 1rem;
  margin: 4px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  height: fit-content;
  width: fit-content;
  color: #fff;
  transition: .3s ease;
  user-select: none;
  display: flex;
  align-content: center;
  justify-content: center;
  text-align: center;
  border: 1px solid #99999944;
}

.lu-btn-default {
  color: #000;
}

.lu-btn-default:hover {
  color: #409eff;
  background-color: #e2f1ff;
  border: 1px solid #fff;
}

.lu-btn-primary {
  background-color: #409eff;
  box-shadow: 0 0 2px #409eff;
}

.lu-btn-primary:hover {
  background-color: #1587ff;
}

.lu-btn-success {
  background-color: #67c23a;
  box-shadow: 0 0 2px #67c23a;
}

.lu-btn-success:hover {
  background-color: #53bb18;
}
</style>

