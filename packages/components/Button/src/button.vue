<template>
  <div :class="['lu-button', 'lu-btn-' + props.type]">
    <LuIcon :name="props.icon" :color="props.iconColor" :size="props.iconSize"></LuIcon>
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import LuIcon from '../../Icon'
import { buttonProps } from './buttonProps'

defineOptions({
  name: 'lu-button'
})


const props = defineProps(buttonProps())

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
  align-items: center;
  align-content: center;
  justify-content: center;
  text-align: center;
  font-size: 16px;
}

.lu-btn-default {
  color: #000;
  border: 1px solid #99999944;
  background-color: #fff;

  &:hover {
    color: #858DE6;
    background-color: #e2f1ff;
    border: 1px solid #fff;
  }

  &:active {
    color: #858DE6;
    background-color: #c5d9ff;
    border: 1px solid #fff;
  }
}

.lu-btn-primary {
  background-color: #858DE6;
  box-shadow: 0 0 2px #858DE6;
  border: 1px solid #858DE6;

  &:hover {
    background-color: #a3a9e9;
  }

  &:active {
    background-color: #6c72c6;
  }
}

.lu-btn-success {
  background-color: #67c23a;
  box-shadow: 0 0 2px #67c23a;
  border: 1px solid #67c23a;

  &:hover {
    background-color: #53bb18;
  }

  &:active {
    background-color: #3d8a12;
  }
}

.lu-btn-warning {
  background-color: #e6a23c;
  box-shadow: 0 0 2px #e6a23c;
  border: 1px solid #e6a23c;

  &:hover {
    background-color: #e0931b;
  }

  &:active {
    background-color: #b56c15;
  }
}

.lu-btn-danger {
  background-color: #f56c6c;
  box-shadow: 0 0 2px #f56c6c;
  border: 1px solid #f56c6c;

  &:hover {
    background-color: #f78989;
  }

  &:active {
    background-color: #d33f3f;
  }
}

.lu-btn-info {
  background-color: #909399;
  box-shadow: 0 0 2px #909399;
  border: 1px solid #909399;

  &:hover {
    background-color: #a6a9ad;
  }

  &:active {
    background-color: #6e7074;
  }
}

.lu-btn-text {
  background-color: transparent;
  box-shadow: none;
  border: none;
  color: #858DE6;

  &:hover {
    color: #707ae9;
  }

  &:active {
    color: #84a1d8;
  }
}
</style>

