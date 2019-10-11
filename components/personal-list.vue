<template>
	<view class="">
		<view class="personal-list">
			<view class="item">
				<video :controls="false" src="http://localhost/2-2.mp4" class="video" objectFit="cover"></video>
				<view class="love-box">
					<text class="iconfont iconaixin_empty">12w</text>
				</view>
			</view>
			<view class="item">
				<video :controls="false" src="http://localhost/2-2.mp4" class="video" objectFit="cover"></video>
				<view class="love-box">
					<text class="iconfont iconaixin_empty">12w</text>
				</view>
			</view>
			<view class="item">
				<video :controls="false" src="http://localhost/2-2.mp4" class="video" objectFit="cover"></video>
				<view class="love-box">
					<text class="iconfont iconaixin_empty">12w</text>
				</view>
			</view>
			<view class="item">
				<video :controls="false" src="http://localhost/2-2.mp4" class="video" objectFit="cover"></video>
				<view class="love-box">
					<text class="iconfont iconaixin_empty">12w</text>
				</view>
			</view>

		</view>
		<view class="more">
			没有更多了
		</view>
		<view style="height: 50px;width: 100%;background: #000000;">

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
	.personal-list {
		width: 100%;
		overflow: hidden;
		padding: 0 0.5%;
		background: #000000;
	}

	.video {
		width: 100%;
		height: 100%;
	}

	.item {
		width: 33%;
		height: 120px;
		float: left;
		position: relative;
	}

	.love-box {
		position: absolute;
		bottom: 5px;
		left: 10px;
	}

	.love-icon {
		font-size: 14px;
	}

	.more {
		width: 100%;
		height: 30px;
		line-height: 30px;
		text-align: center;
		font-size: 12px;
		color: #999999;
		background-color: #000000
	}
</style>
