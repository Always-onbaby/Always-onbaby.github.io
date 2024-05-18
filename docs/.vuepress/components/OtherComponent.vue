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
const navList = ref<any>([])
onMounted(() => {
  getList()

})


const getList = async () => {
  const _list: any = []
  // const globModules = import.meta.glob("../../javaScript/**/*.md");
  // for (const [key, value] of Object.entries(globModules)) {
  //   const name = key.slice(key.indexOf("/javaScript"), key.lastIndexOf("."));
  //   const _name = key.slice(key.lastIndexOf("/") + 1, key.lastIndexOf("."));
  //   _list.push({
  //     label: _name,
  //     link: `${name}.html`,
  //     time: new Date().getTime()
  //   })
  // }
  navList.value = _list
}

</script>
<style lang="scss" scoped>
.content-link {
  // padding: 0 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

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

  &:not(:last-child) {
    border-bottom: 1px dashed #eaecef;
  }

}
</style>
