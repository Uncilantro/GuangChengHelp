<template>
    <swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
        <swiper-item>
            <view class="swiper-item">itrm1</view>
        </swiper-item>
        <swiper-item>
            <view class="swiper-item">item2</view>
        </swiper-item>
        <swiper-item>
            <view class="swiper-item">item3</view>
        </swiper-item>
    </swiper>
	
</template>

<script setup>

</script>

<style>
    .swiper-item{
        background-color: green;
        width: 800rpx;
        height: 400rpx;
        
    }

</style>
