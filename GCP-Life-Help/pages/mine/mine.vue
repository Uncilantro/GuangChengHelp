<template>
<view class="my-userinfo-container">
    
        <!-- 头像昵称区域 -->
       <view class="top-box">
          <image src="" class="avatar"></image>
          <view class="nickname">xxx</view>
        </view>
    
    </view>
      <!-- <view class="panel">
        <view class="panel-list-item">
          <text>我的订单</text>
          <uni-icons type="arrowright" size="15"></uni-icons>
        </view>
        <view class="panel-list-item">
          <text>加入我们</text>
          <uni-icons type="arrowright" size="15"></uni-icons>
        </view>
        <view class="panel-list-item">
          <text>退出登录</text>
          <uni-icons type="arrowright" size="15"></uni-icons>
        </view>
      </view> -->
      <view class="weui-cells weui-cells_after-title">
      
        <navigator url="myPost/myPost" class="weui-cell weui-cell_access" hover-class="weui-cell_active">
          <view class="weui-cell__bd">我的发布</view>
          <view class="weui-cell__ft weui-cell__ft_in-access"></view>
        </navigator>
      
        <navigator url="myorder/myorder" class="weui-cell weui-cell_access" hover-class="weui-cell_active">
          <view class="weui-cell__bd">我的订单</view>
          <view class="weui-cell__ft weui-cell__ft_in-access"></view>
        </navigator>
      
        <navigator url="purchaseHistory/purchaseHistory" class="weui-cell weui-cell_access" hover-class="weui-cell_active">
          <view class="weui-cell__bd">购买记录</view>
          <view class="weui-cell__ft weui-cell__ft_in-access"></view>
        </navigator>
      
        <navigator url="addressAdmin/addressAdmin" class="weui-cell weui-cell_access" hover-class="weui-cell_active">
          <view class="weui-cell__bd">地址管理</view>
          <view class="weui-cell__ft weui-cell__ft_in-access"></view>
        </navigator>
        <navigator url="myCart/myCart" class="weui-cell weui-cell_access" hover-class="weui-cell_active">
          <view class="weui-cell__bd">购物车</view>
          <view class="weui-cell__ft weui-cell__ft_in-access"></view>
        </navigator>
        <button class="btm" bindtap='bindClear'>退出帐号</button>
      
      </view>
</template>

<script setup>
</script>

<style lang="scss">
    .panel-list-item {
      height: 45px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 15px;
      padding: 0 10px;
    }
    .my-userinfo-container {
      height: 100%;
      // 为整个组件的结构添加浅灰色的背景
      background-color: #f4f4f4;
    
      .top-box {
        height: 300rpx;
        border-top: 10rpx solid #f4f4f4;
        background-color: #fff;
        display: flex;
        flex: 2;
        // display: flex;
        // flex-direction: column;
        // align-items: center;
        // justify-content: center;
    
        .avatar {
          width: 90px;
          height: 90px;
          border-radius: 45px;
          border: 2px solid white;
          box-shadow: 0 1px 5px black;
          margin-top:50rpx ;
        }
    
        .nickname {
          color: #65a29f;
          font-weight: bolder;
          font-size: 80rpx;
          margin-top: 80rpx;
          margin-left:50rpx ;
        }
      }
    }
    /* pages/my/my.wxss */
    
    /*@import "../../style/weui.wxss";*/
    
    page {
      background-color: #f0eff4;
    }
    
    .top {
      background-color: #f0eff4;
      padding: 10rpx;
      /* border-bottom: 2rpx solid #d0d0d0; */
      position: relative;
      height: 180rpx;
      display: flex;
      box-sizing: border-box;
      
    }
    .btn-logn {
     background-color: transparent;
     width: 100%;
     height: 100%;
    }
    
    .top image {
      position: absolute;
      left: 0rpx;
      height: 138rpx;
      width: 138rpx;
      margin-left: 25rpx;
      border-radius: 10rpx;
      border: 2rpx solid #d0d0d0;
      margin-top: 10rpx;
    }
    
    .btm {
      border: 0;
      border-radius: 0;
      height: 100rpx;
      line-height: 100rpx;
      font-size: 38rpx;
      color: #e94f4f;
      background-color: #fff;
    }
    .weui-cell__bd{
        line-height: 100rpx;
        border: 2rpx solid gray;
        text-align: left;
    }
    .weui-cell weui-cell_access{
        
    }

           
</style>
