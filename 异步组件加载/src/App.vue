<script>
import HomePage from "./components/HomePage.vue";
import { defineAsyncComponent } from "vue";
// import ProductPage from "./components/ProductPage.vue";

const ProductPage = defineAsyncComponent(() =>
  import("./components/ProductPage.vue")
);

export default {
  components: {
    HomePage,
    ProductPage,
  },
  data() {
    return {
      currentPage: "HomePage",
    };
  },
};
</script>

<template>
  <ul>
    <li><a href="#" @click.prevent="currentPage = 'HomePage'">首页 </a></li>
    <li><a href="#" @click.prevent="currentPage = 'ProductPage'">产品页</a></li>
  </ul>

  <main>
    <component :is="currentPage" />
  </main>
</template>

<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 200px;
  background-color: #f1f1f1;
}

li a {
  display: block;
  color: #000;
  padding: 8px 16px;
  text-decoration: none;
}

/* 鼠标移动到选项上修改背景颜色 */
li a:hover {
  background-color: #555;
  color: white;
}
</style>
