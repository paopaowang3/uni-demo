<template>
	<view>
		<image class="list-img" :src="tabData[0].img" mode="widthFix" @click="bigiMG"></image>
	</view>
</template>

<script setup>
import { getCurrentInstance, onBeforeMount, reactive } from "vue";
	const props = defineProps({
		id: String,
		index:Number
	})
	const {
		proxy
	} = getCurrentInstance()
	let tabData = reactive([])
	tabData.push({img:null})
	onBeforeMount(async ()=>{
		let data = await proxy.$http.listDetails(proxy.id,proxy.index)
		tabData.splice(0,tabData.length,...data)
		uni.setNavigationBarTitle({
			title: tabData[0].title
		});
	})
	
	let bigiMG = () =>{
		uni.previewImage({
			current:tabData[0].img,
			urls:[tabData[0].img]
		})
	}
	
</script>

<style lang="less" scoped>
	.list-img{
		width: 100%;
	}
</style>
