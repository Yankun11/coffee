// pages/menu/menu.js
Page({
	data: {
		// banner的轮播图数组
		swiperArr: [
			"/image/banner/music01.webp",
			"/image/banner/music02.webp",
			"/image/banner/music03.webp",
		],
		menuArr: [
			{
				id: 0,
				title: '人气Top',
				sunArr: [
					{ imgSrc: "/image/menu/menu_1.jpg", imgDesc: "拿铁" },
					{ imgSrc: "/image/menu/menu_1.jpg", imgDesc: "桃桃芝士红宝石" },
					{ imgSrc: "/image/menu/menu_1.jpg", imgDesc: "咖啡风味安慕希" },
					{ imgSrc: "/image/menu/menu_1.jpg", imgDesc: "陨石拿铁" },
					{ imgSrc: "/image/menu/menu_1.jpg", imgDesc: "冲绳拿铁" }
				]
			},
			{
				id: 1,
				title: '大师咖啡',
				sunArr: [
					{ imgSrc: "/image/menu/menu_1.jpg", imgDesc: "拿铁" },
					{ imgSrc: "/image/menu/menu_1.jpg", imgDesc: "桃桃芝士红宝石" },
					{ imgSrc: "/image/menu/menu_1.jpg", imgDesc: "咖啡风味安慕希" },
					{ imgSrc: "/image/menu/menu_1.jpg", imgDesc: "陨石拿铁" },
					{ imgSrc: "/image/menu/menu_1.jpg", imgDesc: "冲绳拿铁" }
				]
			},
			{
				id: 2,
				title: '小鹿茶精选',
				sunArr: [
					{ imgSrc: "/image/menu/menu_1.jpg", imgDesc: "拿铁" },
					{ imgSrc: "/image/menu/menu_1.jpg", imgDesc: "桃桃芝士红宝石" },
					{ imgSrc: "/image/menu/menu_1.jpg", imgDesc: "咖啡风味安慕希" },
					{ imgSrc: "/image/menu/menu_1.jpg", imgDesc: "陨石拿铁" },
					{ imgSrc: "/image/menu/menu_1.jpg", imgDesc: "冲绳拿铁" }
				]
			},
			{
				id: 3,
				title: '瑞纳冰',
				sunArr: [
					{ imgSrc: "/image/menu/menu_1.jpg", imgDesc: "拿铁" },
					{ imgSrc: "/image/menu/menu_1.jpg", imgDesc: "桃桃芝士红宝石" },
					{ imgSrc: "/image/menu/menu_1.jpg", imgDesc: "咖啡风味安慕希" },
					{ imgSrc: "/image/menu/menu_1.jpg", imgDesc: "陨石拿铁" },
					{ imgSrc: "/image/menu/menu_1.jpg", imgDesc: "冲绳拿铁" }
				]
			},
			{
				id: 4,
				title: '鲜榨果蔬汁',
				sunArr: [
					{ imgSrc: "/image/menu/menu_1.jpg", imgDesc: "拿铁" },
					{ imgSrc: "/image/menu/menu_1.jpg", imgDesc: "桃桃芝士红宝石" },
					{ imgSrc: "/image/menu/menu_1.jpg", imgDesc: "咖啡风味安慕希" },
					{ imgSrc: "/image/menu/menu_1.jpg", imgDesc: "陨石拿铁" },
					{ imgSrc: "/image/menu/menu_1.jpg", imgDesc: "冲绳拿铁" }
				]
			},
			{
				id: 5,
				title: '经典饮品',
				sunArr: [
					{ imgSrc: "/image/menu/menu_1.jpg", imgDesc: "拿铁" },
					{ imgSrc: "/image/menu/menu_1.jpg", imgDesc: "桃桃芝士红宝石" },
					{ imgSrc: "/image/menu/menu_1.jpg", imgDesc: "咖啡风味安慕希" },
					{ imgSrc: "/image/menu/menu_1.jpg", imgDesc: "陨石拿铁" },
					{ imgSrc: "/image/menu/menu_1.jpg", imgDesc: "冲绳拿铁" }
				]
			},
			{
				id: 6,
				title: '健康轻食',
				sunArr: [
					{ imgSrc: "/image/menu/menu_1.jpg", imgDesc: "拿铁" },
					{ imgSrc: "/image/menu/menu_1.jpg", imgDesc: "桃桃芝士红宝石" },
					{ imgSrc: "/image/menu/menu_1.jpg", imgDesc: "咖啡风味安慕希" },
					{ imgSrc: "/image/menu/menu_1.jpg", imgDesc: "陨石拿铁" },
					{ imgSrc: "/image/menu/menu_1.jpg", imgDesc: "冲绳拿铁" }
				]
			}
		],
		// 左侧的id
		leftId: 'left0',
		// 左侧当前项
		leftActiveNum: 0,
		// 右侧的id
		rightId: 'right0',
		// 右侧高度的数组
		heightArr:[]
	},
	// 获取每个区块的高度（操作dom）
	onReady() {
		let _this = this;
		setTimeout(() => {
			let initArr = [0]; // 初始的数组
			let initNum = 0; // 初始的数值
			const query = wx.createSelectorQuery()
			query.selectAll('.rightblock').boundingClientRect()
			query.selectViewport().scrollOffset()
			query.exec(function (res) {
				// console.log(initArr); // 拿到每一个的height，并且存起来
				res[0].map(val => {
					initNum += val.height; // 实现高度的累加
					initArr.push(initNum); // 将累加的高度push到数组中
				})
				_this.setData({
					heightArr:initArr
				})
			})
		}, 300)
	},
	// 左侧点击事件
	leftClickFn(e) {
		console.log(this.data.heightArr);
		this.setData({
			leftActiveNum: e.target.dataset.myid,
			leftId: 'left' + e.target.dataset.myid,
			rightId: 'right' + e.target.dataset.myid
		})
	},
	// 右侧滚动事件
	rightScrollFn(e){
		console.log(e.detail.scrollTop);
		let st = e.detail.scrollTop;
		let myarr = this.data.heightArr
		for(let i=0;i<myarr.length;i++){
			if (st>=myarr[i] && st<myarr[i+1]) {
				this.setData({
					leftId:'left'+i,
					leftActiveNum:i
				});
				return;
			}
		}
	}
})