<template>
    <view class="container">
        <!-- 导航栏 -->
        <view class="nav-container">
            <view v-for="(item, index) in navList" :key="index" class="nav-item"
                :class="{ active: currentIndex === index }" @click="selectTab(index)">
                {{ item.name }}
            </view>
        </view>

        <!-- 内容区 -->
        <view class="content">
            <view v-if="currentIndex === 0">校园趣事内容</view>
            <view v-if="currentIndex === 1">失物招领内容</view>
            <view v-if="currentIndex === 2">二手书籍售卖内容</view>
            <view v-if="currentIndex === 3">跑腿兼职内容</view>
            <view v-if="currentIndex === 4">快递代拿内容</view>
            <view v-if="currentIndex === 5">闲置出售内容</view>
        </view>
    </view>
</template>

<script setup>
    import {
        ref
    } from 'vue';

    // 定义响应式变量
    const currentIndex = ref(0);
    const navList = [{
            name: '校园趣事'
        },
        {
            name: '失物招领'
        },
        {
            name: '卖二手书'
        },
        {
            name: '跑腿兼职'
        },
        {
            name: '快递代拿'
        },
        {
            name: '闲置出售'
        }
    ];

    // 方法
    const selectTab = (index) => {
        currentIndex.value = index;
    };
</script>

<style lang="scss">
    .container {
        border-top: 5rpx solid white;
        display: flex;
        flex-direction: column;
        font-weight: bolder;

        height: 100%;
    }

    .nav-container {
        display: flex;
        justify-content: space-around;
        height: 50px;
        color: white;
        text-align: center;
        background-color: #65a29f;
         border-radius: 10rpx 10rpx 0 0;
    }

    .nav-item {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        padding: 0 10px;
    }

    .active {
        color: #528f8e;
        font-weight: bold;
        border-radius: 10rpx 10rpx 0 0;
        background-color: #fff;
    }

    .content {
        flex: 1;
        padding: 10px;
        background-color: white;
    }
</style>