<template>
	<view class="nav-tabbar">
     <scroll-view class="scroll-view_H" scroll-x="true" style="width: 100%">
          <view :class="['scroll-view-item_H',i==counter.sortActive?'navactive':'']" v-for="(item,i) in counter.tatileNameList" :key="i" @click="navClick(i)">
          	{{item}}
          </view>
        </scroll-view>
	</view>
	<view class="sort-list">
		<uni-list >
			<uni-list-item v-for="item in counter.sortList[counter.sortActive]" :title="item.title" clickable @click="goodlistTo(item.index)" :key="item._id" ></uni-list-item>
		</uni-list>
	</view>
</template>

<script setup>	
	import { useCounterStore } from "../../store/counter";
	const counter = useCounterStore();
	
	const navClick = (e) => {
		counter.upactive(e)
	}
	
	const goodlistTo = (e) => {
		uni.navigateTo({
		url:`/pages/info/info?index=${e}`
		})
	}

</script>

<style lang="less">
.scroll-view_H{
	white-space: nowrap;
	.scroll-view-item_H{
	position: relative;
	display: inline-block;
	width: 25%;
	padding: 20rpx;
	height: 100rpx;
	line-height: 60rpx;
	text-align: center;
	box-sizing: border-box;
	}
	.navactive{
		color: #1677ff;
		&:before{
			content: "";
			position: absolute;
			width: 30rpx;
			height: 5rpx;
			bottom: 0;
			left: 50%;
			background: #1677ff;
			transform: translateX(-50%)
		}
	}
}

</style>
