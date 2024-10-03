<template>
  <view class="container">
    <uni-collapse accordion @change="handleChange">
      <uni-collapse-item v-for="(category, index) in categories" :key="index" :title="category.name" :name="category.id">
        <view class="book-list" slot="content">
          <view class="book-item" v-for="book in category.books" :key="book.id">
            <text>{{ book.title }}</text>
          </view>
        </view>
      </uni-collapse-item>
    </uni-collapse>
  </view>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        {
          name: '计算机科学',
          id: 'cs',
          books: [
            { title: '算法导论', id: 'cs1' },
            { title: '数据结构与算法分析', id: 'cs2' },
            { title: '计算机网络', id: 'cs3' }
          ]
        },
        {
          name: '经济学',
          id: 'economics',
          books: [
            { title: '经济学原理', id: 'eco1' },
            { title: '微观经济学', id: 'eco2' },
            { title: '宏观经济学', id: 'eco3' }
          ]
        },
        {
          name: '文学',
          id: 'literature',
          books: [
            { title: '红楼梦', id: 'lit1' },
            { title: '三国演义', id: 'lit2' },
            { title: '西游记', id: 'lit3' }
          ]
        }
      ],
      activeNames: []
    };
  },
  methods: {
    handleChange(e) {
      this.activeNames = e.detail;
      console.log('当前激活的项:', e.detail);
    }
  }
};
</script>

<style scoped>
.container {
  padding: 20px;
}

.book-list {
  padding: 10px;
}

.book-item {
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.book-item:last-child {
  margin-bottom: 0;
}
</style>