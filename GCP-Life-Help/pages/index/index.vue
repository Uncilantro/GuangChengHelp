<template>
<<<<<<< Updated upstream
=======
<<<<<<< HEAD
    <view class="searcher">
        <input type="text" class="search" placeholder="请输入要搜索的内容" />
        <image src="../../static/搜索.png" mode="" class="icon-search"></image>
    </view>

    <scroll-view class="navcroll" scroll-x="true" enable-flex>
        <view class="xianzhi-box">
            <image class="xianzhi" src="../../static/闲置物.png" mode=""></image>
            <text class="text">闲置出售</text>
        </view>
        <view class="xianzhi-box">
            <image class="xianzhi" src="../../static/books.png" mode=""></image>
            <text class="text">二手书籍</text>
        </view>
        <view class="xianzhi-box">
            <image class="xianzhi" src="../../static/兼职.png" mode=""></image>
            <text class="text">寻找兼职</text>
        </view>
        <view class="xianzhi-box">
            <image class="xianzhi" src="../../static/快递.png" mode=""></image>
            <text class="text">快递代拿</text>
        </view>
        <view class="xianzhi-box">
            <image class="xianzhi" src="../../static/校园.png" mode=""></image>
            <text class="text">校园趣事</text>
        </view>
        <view class="xianzhi-box">
            <image class="xianzhi" src="../../static/跑腿.png" mode=""></image>
            <text class="text">帮我跑腿</text>
        </view>
    </scroll-view>
    <swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
        <swiper-item>
            <view class="swiper-item">
                <image src="../../static/lunbotu6.jpg" class="lunbo" mode=""></image>
            </view>
        </swiper-item>
        <swiper-item>
            <view class="swiper-item">
                <image src="../../static/lunbotu2.png" class="lunbo" mode=""></image>
            </view>
        </swiper-item>
        <swiper-item>
            <view class="swiper-item">
                <image src="../../static/lunbotu3.png" class="lunbo" mode=""></image>
            </view>
        </swiper-item>
    </swiper>
    <view class="tuijian">
        <image class="fengmian" src="../../static/lunbotu2.png" mode=""></image>
        <view class="right">
            <view class="title">
                书名：毛概
            </view>
            <view class="jiage">价格：5元
            <view class="jiaoyi">
                联系方式：1858588888
                <view class="">
                 交易地点：广城C3楼下
                </view>
                
                
            </view>
            </view>
        </view>

    </view>
    <view class="tuijian">
        <image class="fengmian" src="../../static/lunbotu3.png" mode=""></image>
        <view class="right">
            <view class="title">
                书名：习概
            </view>
            <view class="jiage">价格：5元
            <view class="jiaoyi">
                联系方式：1858588888
                <view class="">
                 交易地点：广城C3楼下
                </view>
                
                
            </view>
            </view>
        </view>
    
    </view>、
    <view class="tuijian">
        <image class="fengmian" src="../../static/lunbotu6.jpg" mode=""></image>
        <view class="right">
            <view class="title">
                书名：高数
            </view>
            <view class="jiage">价格：5元
            <view class="jiaoyi">
                联系方式：1858588888
                <view class="">
                 交易地点：广城C3楼下
                </view>
                
                
            </view>
            </view>
        </view>
    
    </view>
    <view class="tuijian">
        <image class="fengmian" src="../../static/lunbotu2.png" mode=""></image>
        <view class="right">
            <view class="title">
                书名：毛概
            </view>
            <view class="jiage">价格：5元
            <view class="jiaoyi">
                联系方式：1858588888
                <view class="">
                 交易地点：广城C3楼下
                </view>
                
                
            </view>
            </view>
        </view>
    
    </view>
    <view class="tuijian">
        <image class="fengmian" src="../../static/lunbotu2.png" mode=""></image>
        <view class="right">
            <view class="title">
                书名：毛概
            </view>
            <view class="jiage">价格：5元
            <view class="jiaoyi">
                联系方式：1858588888
                <view class="">
                 交易地点：广城C3楼下
                </view>
                
                
            </view>
            </view>
        </view>
    
    </view>
    <view class="tuijian">
        <image class="fengmian" src="../../static/lunbotu2.png" mode=""></image>
        <view class="right">
            <view class="title">
                书名：毛概
            </view>
            <view class="jiage">价格：5元
            <view class="jiaoyi">
                联系方式：1858588888
                <view class="">
                 交易地点：广城C3楼下
                </view>
                
                
            </view>
            </view>
        </view>
    
    </view>
</template>

<script>

</script>

<style lang="scss">
    .swiper-item {
        width: 100%;
        height: 100%;

    }

    .lunbo {
        margin: 15rpx 0 15rpx 20rpx;
        border-radius: 15rpx;
        width: 95%;
        height: 95%;
    }

    .searcher {
        display: flex;
        background-color: #f3f3f3;
    }

    .search {
        margin: 20rpx;
        padding: 20rpx;
        width: 800rpx;
        border-radius: 50rpx;
        background-color: #fff;

    }

    .icon-search {
        width: 80rpx;
        height: 60rpx;
        margin: 35rpx;
    }

    .navcroll {
        display: flex;
        overflow-x: auto;
        background-color: #f3f3f3;
        height: 190rpx;
    }

    .xianzhi-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 20rpx 50rpx 10rpx 0rpx;


    }

    .xianzhi {
        width: 110rpx;
        height: 110rpx;
    }

    .text {
        font-size: 25rpx;
        font-weight: bold;
        color: #65a29f;
        text-align: center;
    }

    .tuijian {
        padding-top: 20rpx;
        background-color: #f3f3f3;
        border-radius: 15rpx;
        margin: 15rpx 0 15rpx 20rpx;
        width: 95%;
        display: flex;
        box-shadow: 5rpx 10rpx 10rpx gray;
        flex: 2;
    }

    .fengmian {
        width: 200rpx;
        height: 300rpx;
        margin: 10rpx;
        border-radius: 15rpx;
    }
    .right{
        margin-left: 50rpx;
        line-height: 80rpx;
    }

    .title {
        font-size: 50rpx;
        color: #528f8e;
        font-weight: bolder;
    }
</style>
=======
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
=======
>>>>>>> 31bd41b3a091c76fa289d062195b5d30c71ab0e6
>>>>>>> Stashed changes
