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
			<view class="box">
				<view class="title">
					<icon class="iconfont icondingwei" style="color: #DD524D;"></icon>
					抖音热门城市
				</view>
				<view class="hotList">
					<view class="item" v-for="(item,index) of list" :key="index">
						{{item}}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: []
			};
		},
		created() {
			uni.request({
				url: "http://localhost/hot_city.json",
				success: (res) => {
					this.list = res.data.list;
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
</style>
