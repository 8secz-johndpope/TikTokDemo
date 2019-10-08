<template>
	<view class="city-list">
		<view class="box">
			<view class="title">
				<icon class="iconfont icondingwei" style="color: #007AFF;"></icon>
				自动定位
			</view>
			<view class="currentCity">
				上海
			</view>
		</view>
		<view class="box">
			<view class="title">
				<icon class="iconfont icondingwei" style="color: #DD524D;"></icon>
				抖音热门城市
			</view>
			<view class="hotList">
				<view class="item" v-for="(item,index) of hotList" :key="index">
					{{item}}
				</view>
			</view>
		</view>

		<view class="citys" v-for='(item,index) of citys ' :key="index">
			<view class="initial">
				{{item.initial}}
			</view>
			<view v-for="(c,i) of item.list" :key="i" class="cityName">
				{{c.name}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				hotList: [],
				citys: []
			};
		},
		created() {
			uni.request({
				url: "http://localhost/hot_city.json",
				success: (res) => {
					this.hotList = res.data.list;
				}
			})
			uni.request({
				url: "http://localhost/city.json",
				success: (res) => {
					this.citys = res.data.city;
				}
			})
		}
	}
</script>

<style>
	.city-list {
		width: 100%;
		background: #000000;
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
