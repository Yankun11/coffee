// cpmponents/banner/banner.js
Component({
	properties:{
		swiperArr:{
			// 定义类型
			type:Array,
			// 定义默认值
			value:[]
		}
	},
	data: {
		interval: 2000,
		duration: 500,
		
		activeNum:0
	},
	methods:{
		swiperChange(e){
			//轮播图当前页
			let current = e.detail.current
			this.setData({
				activeNum:current
			})
		}
	}
})