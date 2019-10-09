<template>
	<view class="followlist">
		<view class="living">
			<scroll-view scroll-x="true" class="livingScroll">
				<view class="livingItem" v-for="(i, k) in 10" :key="k">
					<image src="../static/me.jpg" class="livingImg"></image>
					<text class="livingText">直播中</text>
					<text class="livingAuthor">lcl{{i}}</text>
				</view>
			</scroll-view>
		</view>
		<view class="videoList">
			<scroll-view scroll-y="true" style="height: 100%;">
				<view class="videoItem" v-for="(i, k) in 10" :key="k">
					<view class="authorInfo">
						<image src="../static/me.jpg" class="authorImg"></image>
						<text class="authorName">lcl</text>
						<icon class="iconfont iconshenglvehao share"></icon>
					</view>

					<view class="videoBox">
						<text class="title">
							@抖音小助手 你怎么看
						</text>
						<video src="http://localhost/2-3.mp4 " controls class="video" objectFit="contain"></video>
						<view class="music-box">
							<view class="music">
								我和我的祖国
							</view>
						</view>
					</view>
					<view class="dataBox">
						<view class="data-left">
							<text>3小时前</text>
						</view>
						<view class="data-right">
							<icon class="iconfont iconaixin icon">
								<text>赞</text>
							</icon>

							<icon class="iconfont iconpinglun icon">
								<text>评论</text>
							</icon>

							<icon class="iconfont iconfenxiang icon">
								<text>分享</text>
							</icon>
						</view>
					</view>
					<view class="comment">
						<text class="loveNumber">1.1w评论过</text>
						<view class="commentBox">
							<icon class="iconfont iconqianbi" style="float: left;"></icon>
							<input type="text" value="" placeholder="添加评论..." class="inputComment" />
						</view>
					</view>
				</view>
			</scroll-view>
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
	.followlist {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 50px
	}

	.living {
		padding-top: 10px;
	}

	.livingScroll {
		width: 100%;
		height: 110px;
		white-space: nowrap;
	}

	.livingItem {
		width: 20%;
		display: inline-block;
	}

	.livingImg {
		width: 50px;
		height: 50px;
		border-radius: 50%;
		margin: 10px;
		border: 1px solid #DD524D;
	}

	.livingText {
		position: relative;
		font-size: 12px;
		top: -6px;
		left: -55px;
		background-color: #DD524D
	}

	.livingAuthor {
		position: relative;
		font-size: 14px;
		top: 14px;
		left: -84px;
	}

	.videoItem {
		padding: 0 15px;
		width: 90%;
		height: 100%;
	}

	.authorInfo {
		height: 35px;
		line-height: 35px;

	}

	.authorImg {
		width: 35px;
		height: 35px;
		border-radius: 50%;
		float: left;
	}

	.authorName {
		font-size: 16px;
		margin-left: 10px;
		text-align: center;
	}

	.share {
		float: right;
		font-size: 25px;
		margin-right: 5px;
	}

	.videoBox {
		width: 100%;
		height: 370px;
	}

	.video {
		width: 85%;
		height: 100%;
		z-index: 5;
	}

	.music-box {
		z-index: 8;
		position: relative;
		bottom: 30px;
		font-size: 14px;
		width: 100px;
		overflow: hidden;
	}

	.music {
		width: 200px;
		animation: XLeft 4s linear infinite;
	}

	.title {
		width: 100%;
		font-size: 13px;
		margin-top: 25px;
		line-height: 25px;
	}

	.dataBox {
		height: 25px;
		margin-top: 40px;
		line-height: 25px;
	}

	.data-left {
		float: left;
		font-size: 15px;
		color: #AAAAAA;
		font-size: 11px;
	}

	.data-right {
		float: right;
	}

	.icon {
		float: right;
		font-size: 11px;
		padding: 0 10px;
	}

	.loveNumber {
		width: 100%;
		height: 25px;
		font-size: 15px;
		line-height: 15px;
		color: #AAAAAA;
		margin: 10px 0;
	}

	.commentBox {
		height: 25px;
	}

	.inputComment {
		margin-left: 30px;
		font-size: 15px;
	}

	.videoList {
		width: 100%;
		height: 100%;
	}


	@keyframes XLeft {
		0% {
			transform: translate3d(80%, 0, 0);
		}

		100% {
			transform: translate3d(-80%, 0, 0);
		}
	}
</style>
