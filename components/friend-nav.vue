<template>
	<view>
		<view class="followNav">
			<view class="middle">
				<navigator open-type="switchTab" class="text" url="/pages/follow/follow">
					关注
				</navigator>
				<navigator open-type="switchTab" class="text" url="/pages/friend/friend" style="border-bottom: 2px solid #F0AD4E;">
					好友
				</navigator>
				
				<!-- TODO 好友列表 -->
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
