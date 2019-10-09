<template>
	<view>
		<view class="followNav">
			<view class="iconfont iconxiangji icon">
				<text class="xiangjitext">随拍</text>
			</view>

			<view class="middle">
				<navigator open-type="switchTab" class="text" url="/pages/index/index">
					关注
				</navigator>
				<navigator open-type="navigate" class="text" url="/pages/city/city">
					好友
				</navigator>
			</view>
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
	.followNav {
		width: 100%;
		height: 35px;
		position: fixed;
		top: 25px;
		left: 0;
		line-height: 35px;
		margin: 0 auto;
		z-index: 10;
	}

	.icon {
		position: absolute;
		top: 0;
		left: 5px;
		color: #FFFFFF;
		width: 20%;
		text-align: center;
		font-size: 20px;
	}

	.middle {
		text-align: center;
	}

	.text {
		display: inline;
		color: #FFFFFF;
		margin: 0 10px;
		font-size: 15px;
	}

	.xiangjitext {
		font-size: 15px;
		margin-left: 10px;
	}
</style>
