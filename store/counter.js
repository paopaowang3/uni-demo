import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
	state:() => {
		return {
			swiperList:[],
			// 首页-轮播图
			iconList:[],
			// 首页-图标
			amuseList:[],
			// 沙雕图-img、
			tatileNameList:[],
			// 分类-菜单名字
			tatiletList:[],
			// 分类-数据库名字
			sortList:[],
			// 分类-总数据
			sortActive:0,
			// 分类-当前下标
			listDetails:[],
			// 详细页-当前数据
		};
	},

	actions: {
		async load(){
			// 初始化
			this.swiperList =await uniCloud.importObject('my-data').query("swiper")
			this.iconList =await uniCloud.importObject('my-data').query("icon")
			this.amuseList =await uniCloud.importObject('my-data').query("amuse")
			
			this.tatileNameList=this.iconList.map(e=>e.name)
			this.tatiletList=this.iconList.map(e=>e.data)
			for (let e in this.tatiletList) {
				this.sortList.push(await uniCloud.importObject('my-data').query(this.tatiletList[e])) 
			}
				
		},
		
		// 更新分类下标
		upactive(e){	
			this.sortActive=e
		},
		
		// 更新详细页数据的信息
		async uplistDetails(e){
			this.listDetails = await  uniCloud.importObject('my-data').listDetails(this.tatiletList[this.sortActive],e)
		}

	},
});