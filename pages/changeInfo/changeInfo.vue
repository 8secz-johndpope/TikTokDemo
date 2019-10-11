<template>
	<view class="change-info">
		<view class="nav-box">
			<navigator class="iconfont iconfanhui icon-nav" open-type="switchTab" url="/pages/personal/personal"></navigator>
			<view class="title">编辑个人资料</view>
		</view>
		<view class="box">
			<view class="img-box">
				<image :src="src" mode="" class="img" @click="changeImg"></image>
				<view class="text">
					点击更换头像
				</view>
			</view>
		</view>
		<view class="info-box">
			<view class="text-box">
				<view class="left">
					昵称
				</view>
				<view class="iconfont iconyoujiantou icon-info"></view>
				<view class="right">
					lcl
				</view>
			</view>
			<view class="text-box">
				<view class="left">
					抖音号
				</view>
				<view class="iconfont iconyoujiantou icon-info"></view>
				<view class="right">
					86862
				</view>
			</view>
			<view class="text-box">
				<view class="left">
					学校
				</view>
				<view class="iconfont iconyoujiantou icon-info"></view>
				<view class="right">
					ustc
				</view>
			</view>
			<view class="text-box">
				<view class="left">
					性别
				</view>
				<view class="iconfont iconyoujiantou icon-info"></view>
				<view class="right">
					男
				</view>
			</view>
			<view class="text-box">
				<view class="left">
					生日
				</view>
				<view class="iconfont iconyoujiantou icon-info"></view>
				<view class="right">
					1990/10/24
				</view>
			</view>
			<view class="text-box">
				<view class="left">
					地区
				</view>
				<view class="iconfont iconyoujiantou icon-info"></view>
				<view class="right">
					上海
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				src: '../../static/me.jpg'
			}
		},
		methods: {
			changeImg() {
				uni.chooseImage({
					count: 1,
					sourceType: ['album', 'camera'],
					sizeType: ['orignial', 'compressed'],
					success: (res) => {
						console.log(JSON.stringify(res.tempFilePaths));
						this.src = res.tempFilePaths
					}
				})
			}
		}
	}
</script>

<style>
	.change-info {
		width: 100%;
		height: 100%;
		background: #000000;
		color: #FFFFFF;
	}

	.nav-box {
		height: 80px;
		position: relative;
		margin: 0 auto;
	}

	.title {
		text-align: center;
		color: #FFFFFF;
		font-size: 18px;
		padding-top: 30px;
	}

	.icon-nav {
		position: absolute;
		top: 30px;
		color: #FFFFFF;
	}

	.box {
		width: 100%;
		height: 150px;
		margin: 0 auto;
		border-top: 1px solid #333333;
		border-bottom: 1px solid #333333;
	}

	.img-box {
		text-align: center;
	}

	.img {
		margin-top: 20px;
		width: 70px;
		height: 70px;
		border-radius: 50%;
	}

	.text {
		margin-top: 13px;
		color: #999999;
		text-align: 13px;
	}

	.info-box {
		padding: 0 10px;
		font-size: 15px;
	}

	.text-box {
		width: 100%;
		height: 40px;
		line-height: 40px;
	}

	.left {
		float: left;
	}

	.right {
		float: right;
		margin-right: 7px;
		color: #999999;
	}

	.icon-info {
		float: right;
		color: #999999;
		width: 10px;
	}
</style>
