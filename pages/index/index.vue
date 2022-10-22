<template>
	<view>
		<view class="top-swiper">
			<swiper class="swiper" :autoplay="true" :circular="true">
				<swiper-item v-for="item in swiper" :key="item.name">
					<view class="swiper-item">
						<image class="item-img" :src="item.url"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>
		
		
	
		<view class="center-icon">
		<!-- 	<view class="icon-item" v-for="item in minicon" :key="item._id">
				<image class="icon-img" :src="item.url"></image>
				<text>{{item.name}}</text>
			</view> -->
			<uni-grid :column="4" :showBorder="false" @change="change">
				<uni-grid-item class="uni-grid-item" v-for="item in minicon" :key="item._id" :index="item.index">
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
	import {
		getCurrentInstance,
		onBeforeMount,
		reactive
	} from "vue";

	
	const {
		proxy
	} = getCurrentInstance()
	let swiper = reactive([])
	let minicon = reactive([])
	
	onBeforeMount(async ()=>{
		let swiperData =await proxy.$http.query("swiper")
		swiper.push(...swiperData)
		let iconData = await proxy.$http.query("icon")
		minicon.push(...iconData)
	})

	
	
	
	let change =(e)=>{
		uni.reLaunch({
			url:"/pages/sort/sort?id="+e.detail.index
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
