<template>
  <div>
    <ul class="icon-list">
      <li v-for="icon in icons" :key="icon" @click="copyThis(icon)">
        <lu-icon :name="icon" size="30px" />
        <span>{{ icon }}</span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>

// 从 ../json/icons.json 中导入所有图标
import icons from '../json/icons.json'

const copyThis = (icon: string) => {
  const input = document.createElement('input')
  input.value = icon
  document.body.appendChild(input)
  input.select()
  document.execCommand('copy')
  document.body.removeChild(input)
}


</script>

<style lang="scss" scoped>
.icon-list {
  list-style: none;
  padding: 0;
  margin: 0;
  border-top: 1px solid #eeeeee;
  border-left: 1px solid #eeeeee;
  width: 100%;
  border-radius: 4px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);

  li {
    overflow: hidden;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-right: 1px solid #eeeeee;
    border-bottom: 1px solid #eeeeee;
    padding: 1rem 0;
    cursor: pointer;

    &:hover {
      background-color: var(--Icon-hover-color);
    }

    &:active {
      background-color: var(--Icon-active-color);
    }

    span {
      margin-top: 0.5rem;
      font-size: 0.75rem;
      text-align: center;
    }
  }
}

.vp-doc li+li {
  margin-top: 0;
}
</style>