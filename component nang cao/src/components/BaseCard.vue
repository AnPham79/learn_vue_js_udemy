<template>
    <div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    props : ['content']
}
</script>

<style scoped>
    div {
        width: 100%;
        height: 5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #14005e;
  }
</style>