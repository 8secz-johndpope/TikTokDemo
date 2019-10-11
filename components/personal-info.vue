<template>
	<view class="personalInfo">
		<view class="bg-box">
			<image class="bg" src="../static/background.jpg"></image>
		</view>
		<view class="top">
			<view class="person-img-box">
				<image class="person-img" src="../static/me.jpg"></image>
			</view>
			<view class="change">
				编辑资料
			</view>
		</view>
		<view class="name-box">
			<view class="name">
				lcl
			</view>
			<view class="douyinid">
				抖音号: 8682
			</view>
		</view>
		<view class="intro-box">
			<view class="intro-text">
				你还没有填写个人简介，点击添加...
			</view>
			<view class="label-box">
				<view class="label">
					上海
				</view>
				<view class="label">
					+增加性别年龄、学校等标签
				</view>
			</view>
		</view>
		<view class="number-box">
			<view class="nbox">
				<text class="number">123</text>
				<text class="number-text">获赞</text>
			</view>
			<view class="nbox">
				<text class="number">46</text>
				<text class="number-text">关注</text>
			</view>
			<view class="nbox">
				<text class="number">999</text>
				<text class="number-text">粉丝</text>
			</view>
		</view>
		<view class="option-box">
			<view class="option">
				作品
			</view>
			<view class="option">
				动态
			</view>
			<view class="option">
				喜欢
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
	.personalInfo {
		width: 100%
	}

	.bg-box {
		width: 100%;
		padding: 0 1px;
		z-index: 1;
	}

	.bg {
		width: 100%;
	}

	.top {
		width: 100%;
		position: absolute;
		top: 140px;
		left: 0;
		z-index: 3;
	}

	.person-img-box {
		margin-top: 40px;
		margin-left: 30px;
	}

	.person-img {
		width: 80px;
		height: 80px;
		border-radius: 50%;
	}

	.change {
		position: absolute;
		top: 80px;
		right: 75px;
		width: 40%;
		height: 40px;
		line-height: 40px;
		font-size: 16px;
		text-align: center;
		background: #333333;
		border-radius: 5px;
	}

	.name-box {
		padding: 10px 25px;
		color: #eeeeee;
	}

	.name {
		height: 50px;
		line-height: 50px;
		font-size: 26px;

	}

	.douyinid {
		height: 25px;
		line-height: 25px;
		font-size: 14px;
	}

	.intro-box {
		padding: 0 25px;
		margin-top: 15px;
		border-top: 1px solid #222222;
	}

	.intro-text {
		height: 50px;
		line-height: 50px;
		font-size: 15px;
		color: #EEEEEE;
	}

	.label-box {
		width: 100%;
		height: 25px;
		line-height: 25px;
	}

	.label {
		height: 20px;
		padding: 0 5px;
		line-height: 20px;
		font-size: 12px;
		background: #333333;
		float: left;
		color: #999999;
		border-radius: 2px;
		margin-right: 10px;
	}

	.number-box {
		width: 100%;
		height: 50px;
		line-height: 50px;
	}

	.nbox {
		height: 40px;
		line-height: 40px;
		float: left;
		margin-right: 5px;
		margin: 0 25px;
	}

	.number {
		font-size: 15px;
	}

	.number-text {
		color: #999999;
		font-size: 13px;
	}

	.option-box {
		width: 100%;
		height: 50px;
		line-height: 50px;
	}

	.option {
		width: 33%;
		color: #999999;
		float: left;
		text-align: center;
	}
</style>
