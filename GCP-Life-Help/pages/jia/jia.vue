<template>
  <view class="container">
    <!-- 导航栏 -->
    <view class="navbar">
      <view @click="switchPage('part-time')" :class="{ active: currentPage === 'part-time' }">校园跑腿</view>
      <view @click="switchPage('second-hand')" :class="{ active: currentPage === 'second-hand' }">出售二手物品</view>
    </view>

    <!-- 页面内容 -->
    <view class="content">
      <!-- 找兼职页面 -->
      <view v-if="currentPage === 'part-time'" class="outside_border">
        <view class="weui-panel">
          <view class="weui-cell weui-cell_input">
            <view class="weui-cell__hd">
              <view class="weui-label">跑腿业务</view>
            </view>
            <view class="weui-cell__bd">
              <input class="weui-input" v-model="jobName" placeholder="如：代拿快递" />
            </view>
          </view>
          <view class="weui-cell weui-cell_input">
            <view class="weui-cell__hd">
              <view class="weui-label">时间要求</view>
            </view>
            <view class="weui-cell__bd">
              <input class="weui-input" v-model="jobTime" placeholder="如：10月15号14点前送达" />
            </view>
          </view>
          <view class="weui-cell weui-cell_input">
            <view class="weui-cell__hd">
              <view class="weui-label">目的地</view>
            </view>
            <view class="weui-cell__bd">
              <input class="weui-input" v-model="jobPlace" placeholder="如：广城西区" />
            </view>
          </view>
          <view class="weui-cell weui-cell_input">
            <view class="weui-cell__hd">
              <view class="weui-label">人员要求</view>
            </view>
            <view class="weui-cell__bd">
              <input class="weui-input" v-model="jobRequir" placeholder="如：只限男/女生" />
            </view>
          </view>
          <view class="weui-cell weui-cell_input">
            <view class="weui-cell__hd">
              <view class="weui-label">资薪待遇</view>
            </view>
            <view class="weui-cell__bd">
              <input class="weui-input" v-model="jobSalary" placeholder="如：5元/件等" />
            </view>
          </view>
          <view class="weui-cell weui-cell_input">
            <view class="weui-cell__hd">
              <view class="weui-label">联系方式</view>
            </view>
            <view class="weui-cell__bd">
              <input class="weui-input" v-model="jobWay" placeholder="如：电话/微信/QQ" />
            </view>
          </view>
          <view class="weui-cell weui-cell_input">
            <view class="weui-cell__hd">
              <view class="weui-label">其他</view>
            </view>
            <view class="weui-cell__bd">
              <textarea class="weui-input describe" v-model="jobDescribe" placeholder="如：易碎品,需要轻拿轻放"></textarea>
            </view>
          </view>
        </view>
        <button type="primary" size="default" :disabled="!(jobName && jobTime && jobPlace && jobRequir && jobSalary && jobWay && jobDescribe)" :loading="buttonLoadingJob" @click="submitJob">
          立即发布
        </button>
      </view>

      <!-- 出售二手物品页面 -->
      <view v-if="currentPage === 'second-hand'" class="outside_border">
        <view class="weui-panel">
          <view class="weui-cell weui-cell_input">
            <view class="weui-cell__hd">
              <view class="weui-label">物品名称</view>
            </view>
            <view class="weui-cell__bd">
              <input class="weui-input" placeholder="请输入物品名称" v-model="thingName" type="text" />
            </view>
          </view>
          <view class="weui-cell weui-cell_input">
            <view class="weui-cell__hd">
              <view class="weui-label">价格</view>
            </view>
            <view class="weui-cell__bd">
              <input class="weui-input" placeholder="请输入价格" v-model="thingPrice" type="number" />
            </view>
          </view>
          <view class="weui-cell">
            <view class="weui-cell__hd">
              <view class="weui-label">校区</view>
            </view>
            <view class="weui-cell__bd">
              <picker :value="thingCampusIndex" :range="thingCampus" @change="handleCampusChange">
                <view class="weui-select weui-select_in-select-after">{{thingCampus[thingCampusIndex]}}</view>
              </picker>
            </view>
          </view>
          <view class="weui-cell weui-cell_input">
            <view class="weui-cell__hd">
              <view class="weui-label">电话</view>
            </view>
            <view class="weui-cell__bd">
              <input class="weui-input" placeholder="请输入您的电话号码" v-model="thingPhoneNumber" type="digit" />
            </view>
          </view>
          <view class="weui-cell weui-cell_input">
            <view class="weui-cell__hd">
              <view class="weui-label">备注</view>
            </view>
            <view class="weui-cell__bd">
              <textarea class="weui-input describe_thing" v-model="thingDescribe" placeholder="请输入物品的详情"></textarea>
            </view>
          </view>
        </view>
        <button type="primary" size="default" :disabled="!(thingName && thingPhoneNumber && thingImage && thingDescribe && thingPrice)" :loading="buttonLoadingThing" @click="submitThing">
          立即发布
        </button>
      </view>
    </view>
  </view>
</template>
<script setup>
import { ref } from 'vue';
const currentPage = ref('part-time');

// 切换页面的方法
function switchPage(page) {
  currentPage.value = page;
}

const postThing = ref(true);
const postJob = ref(false);

const thingName = ref('');
const thingPrice = ref('');
const thingCampusIndex = ref(0);
const thingCampus = ref(['科教城西区', '科教城东区']);
const thingPhoneNumber = ref('');
const thingDescribe = ref('');
const thingImage = ref('');
const buttonLoadingThing = ref(false);

const jobName = ref('');
const jobTime = ref('');
const jobPlace = ref('');
const jobRequir = ref('');
const jobSalary = ref('');
const jobWay = ref('');
const jobDescribe = ref('');
const buttonLoadingJob = ref(false);

function handleCampusChange(event) {
  thingCampusIndex.value = event.detail.value;
}

function submitThing() {
  // 处理提交逻辑
  console.log('提交物品');
}

function submitJob() {
  // 处理提交逻辑
  console.log('提交兼职');
}
</script>

<style scoped>
/* 基础样式 */
.container {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.navbar {
  display: flex;
  height: 60rpx;
  text-align: center;
  line-height: 70rpx;
  justify-content: space-around;
  background-color: #f0f0f0;
  padding: 10px;
}

.navbar button {
  padding: 10px 20px;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
}

.navbar .active {
  color: #528f8e;
  font-weight: bold;
}

.content {
  flex: 1;
  overflow-y: auto;
}
.outside_border {
  padding: 32rpx;
  background-color: #fff;
  border-radius: 16rpx;
  margin-bottom: 32rpx;
}

.weui-panel {
  margin-top: 32rpx;
}

.weui-cell {
  display: flex;
  align-items: center;
  padding: 24rpx 32rpx;
  border-bottom: 1rpx solid #ebedf0;
}

.weui-cell__hd {
}

.weui-label {
    text-align: left;
    width: 150rpx;
    font-size: 32rpx;
    color: #333;
}

.weui-cell__bd {
  width: 100%;
}

/* 输入框样式 */
.weui-input {
  width: 100%;
  height: 50rpx;
  padding: 10rpx;
  border: 1rpx solid #ddd;
  border-radius: 8rpx;
  font-size: 28rpx;
  color: #333;
}

.describe_thing,
.describe {
  width: 100%;
  margin-left: -10rpx;
  min-height: 150rpx;
  padding: 24rpx;
  border: 1rpx solid #ddd;
  border-radius: 8rpx;
  font-size: 28rpx;
  color: #333;
}

/* picker 样式 */
.picker-container {
  position: relative;
  width: 100%;
}

.picker-container .weui-select {
  width: 100%;
  height: 80rpx;
  padding: 24rpx;
  border: 1rpx solid #ddd;
  border-radius: 8rpx;
  font-size: 28rpx;
  color: #333;
  background-color: #fff;
}

/* picker 内容样式 */
.weui-select_in-select-after {
  display: inline-block;
  width: 95%;
  height: 50rpx;
  line-height: 40rpx;
  padding: 24rpx;
  border: 1rpx solid #ddd;
  border-radius: 8rpx;
  font-size: 28rpx;
  color: #333;
  background-color: #fff;
  cursor: pointer;
}

.tip {
  font-size: 28rpx;
  color: #666;
  margin-bottom: 32rpx;
}
</style>
