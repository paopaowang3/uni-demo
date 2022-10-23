<template>
	<view class="amuse">
		<view class="item" v-for="(item,i) in counter.amuseList" :key="i" @click="bigImg(i)">
			<image :src="item.url" mode="widthFix" class="item-img"></image>
		</view>

	</view>
</template>

<script setup>

	import { useCounterStore } from "../../store/counter";
	const counter = useCounterStore();

	const bigImg = (e) =>{
		uni.previewImage({
			current:e,
			urls:counter.amuseList.map(item => item.url)
		})
	}

</script>

<style lang="less" scoped>
	.amuse {
		width: 100%;
		columns: 2;
		column-gap: 10rpx;
		background-color: #dcdcdc;
		.item{
			
			.item-img{
				width: 100%;
				border-radius: 15px;
			}
		}
	}


</style>
