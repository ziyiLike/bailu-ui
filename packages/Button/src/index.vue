<template>
  <div :class="['hq-button', 'hq-btn-' + props.type]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "lu-button"
}
</script>

<script setup>
const props = defineProps({
  type: {
    type: String,
    default: "default",
    validator: value => {
      const types = ["default", "primary"]
      return types.includes(value)
    }
  }
})

</script>

<style scoped lang="scss">
.hq-button {
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

.hq-btn-default {
  color: #000;
}

.hq-btn-default:hover {
  color: #409eff;
  background-color: #e2f1ff;
  border: 1px solid #fff;
}

.hq-btn-primary {
  background-color: #409eff;
  box-shadow: 0 0 2px #409eff;
}

.hq-btn-primary:hover {
  background-color: #1587ff;
}

.hq-btn-success {
  background-color: #67c23a;
  box-shadow: 0 0 2px #67c23a;
}

.hq-btn-success:hover {
  background-color: #53bb18;
}
</style>

