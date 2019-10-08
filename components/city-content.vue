<template>
	<view class="cityContent">
		<view class="conlation">
			<view class="iconfont icondingwei conlation-left">
				自动定位: 上海
			</view>
			<navigator url="/pages/selectCity/selectCity" class="conlation-right">
				切换 <text class="iconfont iconyoujiantou"></text>
			</navigator>
		</view>

		<view class="video-list">
			<span v-for="(i,index) in 10" :key="index">
				<view class="item">
					<view class="video">
						<video src="http://localhost/1-2.mp4" controls style="width: 100%; height: 100%;"></video>
					</view>
					<view class="image-box">
						<image src="../static/1-1.jpeg" class="image"></image>
					</view>
				</view>
			</span>


		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style>
	.cityContent {
		padding: 4px;
		width: 100%;
		background-color: #000000;
	}

	.conlation {
		width: 100%;
		height: 40px;
		margin-top: 60px;
		overflow: hidden;
		color: #aaaaaa;
		font-size: 14px;
		line-height: 14px;
	}

	.conlation-right {
		float: right;
		padding-right: 15px;
	}

	.conlation-left {
		float: left;
		padding-left: 15px;
	}

	.video-list {
		width: 100%;
		overflow: auto;
		background: #000000;
	}

	.item {
		width: 50%;
		float: left;
		position: relative;
	}

	.video {
		width: 92%;
		margin: 0 auto;
		height: 300px;
	}

	.image-box {
		position: absolute;
		bottom: 10px;
		right: 25px;

	}

	.image {
		width: 20px;
		height: 20px;
		border-radius: 50%;
	}
</style>
