<template>
	<view class="tab">
		<navigator class="tab-box" open-type="switchTab" url="/pages/index/index">
			首页
		</navigator>
		<navigator class="tab-box" open-type="switchTab" url="/pages/follow/follow">
			关注
		</navigator>
		<view class="tab-box">
			<view class="iconfont iconjiahao icon-box">
			</view>
		</view>
		<navigator class="tab-box" open-type="switchTab" url="/pages/news/news">
			消息
		</navigator>
		<navigator class="tab-box" open-type="switchTab" url="/pages/personal/personal">
			我
		</navigator>
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
	.tab {
		height: 50px;
		width: 100%;
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 15;
	}

	.tab-box {
		float: left;
		width: 20%;
		color: #FFFFFF;
		text-align: center;
		height: 50px;
		line-height: 50px;
	}

	.icon-box {
		width: 60%;
		height: 30px;
		background-color: #FFFFFF;
		color: #000000;
		margin: 10px 20%;
		line-height: 30px;
		border-radius: 5px;
		font-size: 20px;
	}
</style>
