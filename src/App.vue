<template>
  <div class="layout">
    <div class="appInfo">
      <div><img src="/easyLogo2.png" class="logo" alt="App logo" /></div>
      <br />
      <div>0.0.0</div>
    </div>
    <div class="funList">
      <!-- 循环加载按钮 -->
      <router-link v-for="item in funBtnList" :key="item.path" :to="item.path"
        ><el-button type="primary">{{ item.name }}</el-button></router-link
      >
    </div>
    <div class="content">
      <!-- 路由的显示入口 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";

export default {
  setup() {
    // 新建一个ref数组储存按钮的信息
    const funBtnList = reactive([
      {
        name: "主页",
        path: "/",
      },
      {
        name: "关于",
        path: "/about",
      },
      {
        name: "视频",
        path: "/video",
      },
      // 其他按钮数据...
    ]);

    // 在 setup 函数中返回 funBtnList，使其在模板中可用
    return {
      funBtnList,
    };
  },
};
</script>

<style scoped>
.layout {
  display: flex;
}
.appInfo {
  /* 固定在顶部 */
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  height: 60px;
  width: 200px;
  background-color: #fff;
  border-bottom: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
}
.logo {
  height: 70px;
  width: 70px;
}
.funList {
  /* 固定在左侧 */
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 200px;
  border-right: 1px solid rgb(64, 158, 255);
  padding-top: 100px;
  text-align: center;
}
.funList .el-button {
  width: 80%;
  margin: 10px 0;
}
.content {
  /* 添加左侧边距，使内容不重叠 */
  margin-left: 200px; /* 与左侧 funList 的宽度保持一致 */
  flex: 1; /* 填充剩余空间 */
}
</style>
