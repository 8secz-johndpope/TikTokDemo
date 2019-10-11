<template>
	<view class="city-list">
		<scroll-view scroll-y="true" class="scrolly" :scroll-into-view="letter">
			<view class="box">
				<view class="title">
					<icon class="iconfont icondingwei" style="color: #007AFF;"></icon>	
					自动定位
				</view>
				<view class="currentCity">
					{{cCity}}
				</view>
			</view>
			<view class="box">
				<view class="title">
					<icon class="iconfont iconremen" style="color: #DD524D;"></icon>
					抖音热门城市
				</view>
				<view class="hotList">
					<view class="item" v-for="(item,index) of hotList" :key="index" @click="clickCityName(item)">
						{{item}}
					</view>
				</view>
			</view>

			<view class="citys" v-for='(item, index) of citys' :key="index">
				<view class="initial" :id="item.initial">
					{{item.initial}}
				</view>
				<view v-for="(c, i) of item.list" :key="i" class="cityName" @click="clickCityName(c.name)">
					{{c.name}}
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import hotCityJson from '../server_file/hot_city.json'
	export default {
		props: ['citys', 'letter'],
		data() {
			return {
				hotList: [],
				cCity: '上海',
			};
		},
		created() {
			// uni.request({
			// 	url: "http://localhost/hot_city.json",
			// 	success: (res) => {
			// 		this.hotList = res.data.list;
			// 	}
			// })
			this.hotList = hotCityJson.list;
			uni.getStorage({
				key: 'city',
				success: (res) => {
					this.cCity = res.data;
				}
			})
		},
		methods: {
			clickCityName(res) {
				uni.setStorage({
					key: 'city',
					data: res,
				});

				uni.getStorage({
					key: 'city',
					success: (res) => {
						this.cCity = res.data;
					}
				})

				uni.redirectTo({
					url: '/pages/city/city'
				})
			}
		}
	}
</script>

<style>
	.scrolly {
		height: 100%;
	}

	.city-list {
		width: 100%;
		background: #000000;
		height: 100%;
	}

	.box {
		background: #222222;
		margin-top: 10px;
		padding: 0 5px 20px 5px;
	}

	.title {
		height: 40px;
		line-height: 40px;
		margin-left: 15px;
		color: #FFFFFF;
		font-size: 14px;
	}

	.currentCity {
		color: #AAAAAA;
		font-size: 15px;
		margin-left: 15px;
	}

	.hotList {
		width: 100%;
		overflow: hidden;
	}

	.item {
		width: 30%;
		height: 24px;
		line-height: 24px;
		font-size: 12px;
		float: left;
		background: #333333;
		margin-left: 2.5%;
		margin-bottom: 10px;
		text-align: center;
	}

	.initial {
		height: 25px;
		line-height: 25px;
		background: #000000;
		padding-left: 10px;
		font-size: 14px;
	}

	.cityName {
		background: #222222;
		height: 40px;
		line-height: 40px;
		padding-left: 10px;
		font-size: 12px;
	}

	.citys {}
</style>
