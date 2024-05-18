<template>
  <!-- <div>我去，这是一个自定义的Vue组件，好难~~
    <span>222</span>
  </div>
  <p>需要在config配置里面使用clientConfigFile Hook来指定客户配置文件的路径</p> -->
  <RouteLink class="content-link" :to="item.link" v-for="item of navList" :key="item.link">
    <p class="title">{{ item.label }}</p>
    <p class="time">{{ item.time }}</p>
  </RouteLink>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { getList } from '../writeList'
const navList = ref<any>([])
onMounted(() => {
  navList.value = getList()

})

</script>
<style lang="scss" scoped>
.content-link {
  // padding: 0 10px;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  width: calc(33.3333% - 26.6667px);
  // margin-bottom: 0px;
  margin-top: unset;
  background: transparent;
  margin: 10px;
  border: 1px dashed #eaecef;

  .title {
    flex: 1;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: var(--c-text);
    padding-left: 16px;
    position: relative;
  }

  .time {
    margin-left: 20px;
    font-size: 14px;
    font-weight: 400;
    color: #6a8bad;
  }


}
</style>
