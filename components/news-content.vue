<template>
	<view class="newsContent">
		<view class="btns">
			<view class="imgBtn">
				<view class="imgBox">
					<image src="../static/me.jpg" class="img"></image>
				</view>
				<view class="text">
					粉丝
				</view>
			</view>
			<view class="imgBtn">
				<view class="imgBox">
					<image src="../static/me.jpg" class="img"></image>
				</view>
				<view class="text">
					点赞
				</view>
			</view>
			<view class="imgBtn">
				<view class="imgBox">
					<image src="../static/me.jpg" class="img"></image>
				</view>
				<view class="text">
					@我的
				</view>
			</view>
			<view class="imgBtn">
				<view class="imgBox">
					<image src="../static/me.jpg" class="img"></image>
				</view>
				<view class="text">
					评论
				</view>
			</view>
		</view>

		<view class="messages">
			<view class="item">
				<view class="authorImgBox">
					<image class="authorImg" src="../static/me.jpg"></image>
				</view>
				<view class="msgText">
					<view class="top">
						<view class="name">
							张三
						</view>
						<view class="time">
							周三
						</view>
					</view>
					<view class="content">
						你好，很高兴认识你
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

			};
		}
	}
</script>

<style>
	.newsContent {
		width: 100%;
	}

	.btns {
		width: 100%;
		height: 100%;
	}

	.imgBtn {
		width: 25%;
		height: 100px;
		margin: 0 auto;
		float: left;
	}

	.imgBox {
		width: 100%;
		height: 50px;
	}

	.text {
		text-align: center;
		font-size: 13px;
	}

	.img {
		width: 40px;
		height: 40px;
		border-radius: 5px;
		display: block;
		margin: 10px auto;
	}

	.item {
		height: 60px;
		margin: 15px 10px;
	}

	.authorImgBox {
		float: left;
		margin-left: 10px;
	}

	.authorImg {
		width: 45px;
		height: 45px;
		border-radius: 50%;
	}

	.msgText {
		margin-left: 20px;
		height: 50px;
		width: 75%;
		text-align: left;
		font-size: 13px;
		float: left;
	}

	.top {
		height: 25px;
		line-height: 25px;
	}

	.name {
		float: left;
		font-size: 18px;
	}

	.time {
		float: right;
		font-size: 11px;
		color: #AAAAAA;
	}

	.content {
		height: 25px;
		line-height: 25px;
		font-size: 13px;
		color: #AAAAAA;
	}
</style>
