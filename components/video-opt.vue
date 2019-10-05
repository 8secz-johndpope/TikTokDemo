<template>
	<view class="video-opt">
		<view class="author-img">
			<!-- TODO 从服务器获取头像 -->
			<image src="../static/1-1.jpeg" mode="" class="img"></image>
		</view>

		<!-- 点赞 -->
		<view class="iconfont iconaixin"></view>
		<view class="number">
			{{videoItem.loveNumber}}
		</view>

		<!-- 评论 -->
		<view class="iconfont iconpinglun"></view>
		<view class="number">
			{{videoItem.commentNumber}}
		</view>

		<!-- 分享 -->
		<view class="iconfont iconfenxiang"></view>
		<view class="number">
			{{videoItem.shareNumber}}
		</view>
		<view class="around">
			<image src="../static/2-1.jpg" mode="" class="img rotate"></image>
		</view>
	</view>
</template>

<script>
	export default {
		props: [
			"videoItem"
		],
		data() {
			return {

			};
		}
	}
</script>

<style>
	.video-opt {
		width: 50px;
		margin: 0 auto;
		text-align: center;
		line-height: 40px;
		margin-top: 10px;
		font-size: 33px;
		color: #FFFFFF;
	}

	.number {
		font-size: 12px;
		line-height: 12px;
	}

	.img {
		width: 40px;
		height: 40px;
		border-radius: 50%;
		border: 2px solid #FFFFFF;
	}

	.around {
		margin-top: 15px;		
	}
	
	.rotate {
		animation: rotate 1.5s linear 0.2s infinite;
	}

	@keyframes rotate {
		0% {
			transform: rotate(0deg)
		}

		100% {
			transform: rotate(360deg)
		}
	}
	
</style>
