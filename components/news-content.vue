<template>
	<view class="newsContent">
		<view class="btns">
			<view class="imgBtn">
				<view class="imgBox">
					<image src="../static/fans.jpg" class="img"></image>
				</view>
				<view class="text">
					粉丝
				</view>
			</view>
			<view class="imgBtn">
				<view class="imgBox">
					<image src="../static/love.jpg" class="img"></image>
				</view>
				<view class="text">
					点赞
				</view>
			</view>
			<view class="imgBtn">
				<view class="imgBox">
					<image src="../static/dong.jpg" class="img"></image>
				</view>
				<view class="text">
					@我的
				</view>
			</view>
			<view class="imgBtn">
				<view class="imgBox">
					<image src="../static/comment.jpg" class="img"></image>
				</view>
				<view class="text">
					评论
				</view>
			</view>
		</view>

		<view class="messages">
			<view class="item" v-for="item in list" :key="item.id">
				<view class="authorImgBox">
					<image class="authorImg" src="../static/me.jpg"></image>
				</view>
				<view class="msgText">
					<view class="top">
						<view class="name">
							{{item.name}}
						</view>
						<view class="time">
							{{item.time}}
						</view>
					</view>
					<view class="content">
						{{item.content}}
					</view>
				</view>
			</view>

			<view class="more">
				没有更多消息了
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
						id: 1,
						name: '张三',
						time: '13分钟前',
						content: '你好，我也喜欢这个'
					},
					{
						id: 2,
						name: '李四',
						time: '1小时前',
						content: '6666666666'
					},
					{
						id: 3,
						name: '王五',
						time: '昨天',
						content: '牛逼啊'
					}
				]
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

	.messages {
		width: 100%;
		height: 100%;
		float: left;
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
		width: 100%;
		margin: 15px 10px;
	}

	.authorImgBox {
		float: left;
		margin-left: 10px;
		width: 20%;
	}

	.authorImg {
		width: 45px;
		height: 45px;
		border-radius: 50%;
	}

	.msgText {
		margin-left: 20px;
		height: 50px;
		width: 80%;
		text-align: left;
		font-size: 13px;
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
		float: left;
	}

	.more {
		width: 100%;
		height: 50px;
		font-size: 12px;
		color: #AAAAAA;
		text-align: center;
		float: left;
	}
</style>
