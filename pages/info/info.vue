<template>
	<view>
		<image class="list-img" :src="counter.listDetails[0].img" mode="widthFix" @click="bigiMG"></image>
	</view>
</template>

<script setup>
import { getCurrentInstance} from "vue";
	const props = defineProps({
		index:Number
	})
	
	import { useCounterStore } from "../../store/counter";
	const counter = useCounterStore();
	counter.uplistDetails(props.index)
	
	let bigiMG = () =>{
		uni.previewImage({
			current:counter.listDetails[0].img,
			urls:[counter.listDetails[0].img]
		})
	}
	
</script>

<style lang="less" scoped>
	.list-img{
		width: 100%;
	}
</style>
