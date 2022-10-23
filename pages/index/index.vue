<template>
	<view>
		<view class="top-swiper">
			<swiper class="swiper" :autoplay="true" :circular="true">
				<swiper-item v-for="item in counter.swiperList" :key="item.name">
					<view class="swiper-item">
						<image class="item-img" :src="item.url"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		
		<view class="center-icon">
			<uni-grid :column="4" :showBorder="false" @change="change">
				<uni-grid-item class="uni-grid-item" v-for="item in counter.iconList" :key="item._id" :index="item.index">
					<view class="icon-item">
						<image class="icon-img" :src="item.url"></image>
						<text>{{item.name}}</text>
					</view>
				</uni-grid-item>
			</uni-grid>
		</view>
	</view>
</template>

<script setup>

	
import { useCounterStore } from "../../store/counter";
const counter = useCounterStore();

	let change =(e)=>{
		counter.upactive(e.detail.index)
		uni.switchTab({
			url:"/pages/sort/sort"
		})
	} 
		
</script>

<style scoped lang="less">
	.swiper {
		height: 350rpx;

		.item-img {
			height: 350rpx;
			width: 750rpx;
		}
	}
	.center-icon{
			margin-top: 20rpx;
			background: #fff;
			padding-top: 10rpx;
			border-radius: 10px;
		.uni-grid-item{
			padding-bottom:10rpx;
		}
		.icon-item{
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;	
			width: 100%;
			height: 100%;

			.icon-img{
				width: 100rpx;
				height: 100rpx;
			}
		}
	}
</style>
