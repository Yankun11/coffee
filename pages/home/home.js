// pages/home/home.js
Page({
	data: {
		// banner的轮播图数组
		swiperArr:[
			"/image/banner/music01.webp",
			"/image/banner/music02.webp",
			"/image/banner/music03.webp",
			"/image/banner/music02.webp"
		],
		// 咖啡的故事
		cardArr:[
			{
				src:"/image/bar/card_01.jpg",
				text:'给特别的你'
			},
			{
				src:"/image/bar/card_01.jpg",
				text:'给特别的你'
			},
			{
				src:"/image/bar/card_01.jpg",
				text:'给特别的你'
			},
			{
				src:"/image/bar/card_01.jpg",
				text:'给特别的你'
			},
			{
				src:"/image/bar/card_01.jpg",
				text:'给特别的你'
			},
			{
				src:"/image/bar/card_01.jpg",
				text:'给特别的你'
			},
			{
				src:"/image/bar/card_01.jpg",
				text:'给特别的你'
			},
			{
				src:"/image/bar/card_01.jpg",
				text:'给特别的你'
			},
			{
				src:"/image/bar/card_01.jpg",
				text:'给特别的你'
			},
		],
		// 新品展示
		newArr:[
			{imgSrc:"/image/bar/card_01.jpg",imgTxt:"卡布奇诺"},
			{imgSrc:"/image/bar/card_01.jpg",imgTxt:"白咖啡"},
			{imgSrc:"/image/bar/card_01.jpg",imgTxt:"摩卡咖啡"},
			{imgSrc:"/image/bar/card_01.jpg",imgTxt:"爱尔兰"},
			{imgSrc:"/image/bar/card_01.jpg",imgTxt:"甜品咖啡"},
			{imgSrc:"/image/bar/card_01.jpg",imgTxt:"意大利咖啡"},
			{imgSrc:"/image/bar/card_01.jpg",imgTxt:"拿铁咖啡"},
			{imgSrc:"/image/bar/card_01.jpg",imgTxt:"中式咖啡"},
		]
	},
	goPage(){
		// 跳转页面
		wx.navigateTo({
		  url: '/pages/aaa/aaa',
		})
	}
})