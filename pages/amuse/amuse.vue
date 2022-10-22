<template>
	<view class="amuse">
		<view class="item" v-for="(item,i) in itemlist" @click="bigImg(i)">
			<image :src="item.url" mode="widthFix" class="item-img"></image>
		</view>

	</view>
</template>

<script setup>
import { getCurrentInstance, onBeforeMount,reactive } from "vue";
const {
		proxy
	} = getCurrentInstance()
	let itemlist = reactive([])

	onBeforeMount(async ()=>{
		let itemData =await proxy.$http.query("amuse")
		itemlist.push(...itemData)
	})
	
	const bigImg = (e) =>{
		
		
		// console.log(imglist);
		uni.previewImage({
			current:e,
			urls:itemlist.map(item => item.url)
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
