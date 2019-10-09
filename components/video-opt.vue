<template>
	<view class="video-opt">
		<view class="author-img">
			<!-- TODO 从服务器获取头像 -->
			<image src="../static/me.jpg" mode="" class="img"></image>
			<view class="iconfont iconjiahao add" @click="star" v-show="!isStar">
				<!-- 关注&取关按钮 -->
			</view>
		</view>

		<!-- 点赞 -->
		<view class="iconfont iconaixin btn" @click="love" :style="loveColor"></view>
		<view class="number">
			{{videoItem.loveNumber}}
		</view>

		<!-- 评论 -->
		<view class="iconfont iconpinglun btn"></view>
		<view class="number">
			{{videoItem.commentNumber}}
		</view>

		<!-- 分享 -->
		<view class="iconfont iconfenxiang btn"></view>
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
				isStar: false,
				isLove: false,
				loveColor: 'color:white',
			};
		},
		methods: {
			star() {
				this.isStar = !this.isStar;
			},
			love() {
				this.isLove = !this.isLove;
				this.loveColor = this.isLove ? 'color:red' : 'color:white';
			},
			dblLove() {
				if (!this.isLove) { // 未点赞时点赞
					this.love();
				}
			}
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

	.btn {
		font-size: 32px;
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

	.author-img {
		position: relative;
	}

	.add {
		width: 18px;
		height: 18px;
		border-radius: 50%;
		background-color: red;
		position: absolute;
		bottom: 0;
		left: 16px;
		text-align: center;
		line-height: 18px;
		font-size: 10px;
	}
</style>
