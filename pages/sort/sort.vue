<template>
	<view class="nav-tabbar">
     <scroll-view class="scroll-view_H" scroll-x="true" bindscroll="scroll" style="width: 100%">
          <view :class="['scroll-view-item_H',i==navindex?'navactive':'']" v-for="(item,i) in minicon" :key="item.index" @click="navClick(i)">
          	{{item.name}}
          </view>
        </scroll-view>
	</view>
	<view class="sort-list">
		<uni-list >
			<uni-list-item v-for="item in goodlist" :title="item.title" clickable @click="goodlistTo(item.index)" :key="item._id" ></uni-list-item>
		</uni-list>
	</view>
</template>

<script setup>
	import {
		getCurrentInstance,
		onBeforeMount,
		reactive,
		ref,
		watch
	} from "vue";
	
	// 设置点击下标
	const navindex = ref(0)
	const navClick = (e) => {
		navindex.value=e
	}

	// 接受首页传递参数设置下标
	const props = defineProps({
		id: {
		type: Number,
		default: 0
		}
	})
	navindex.value=props.id
	
	// 获取标题已经列表数据
	const {
		proxy
	} = getCurrentInstance()
	const minicon = reactive([])
	const goodlist = reactive([])
	onBeforeMount(async ()=>{
		let iconData = await proxy.$http.query("icon")
		minicon.push(...iconData)
		
		watch(navindex,async ()=>{
			let goodlistData = await proxy.$http.query(minicon[navindex.value].name)
			goodlist.splice(0,goodlist.length,...goodlistData)
			
		},{immediate:true})
	})

	const goodlistTo = (e) => {
		uni.navigateTo({
		url:`/pages/info/info?id=${minicon[navindex.value].name}&index=${e}`
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
