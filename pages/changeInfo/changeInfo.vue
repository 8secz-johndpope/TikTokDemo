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
				<picker :range="schoolList" @change="bindSchoolChange">
					<view class="left">
						学校
					</view>
					<view class="iconfont iconyoujiantou icon-info"></view>
					<view class="right">
						{{user.school}}
					</view>
				</picker>
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
				<picker mode="region" @change="bindCityChange">
					<view class="left">
						地区
					</view>
					<view class="iconfont iconyoujiantou icon-info"></view>
					<view class="right">
						{{user.city}}
					</view>
				</picker>

			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				src: 'http://127.0.0.1:8080/static/img/头像.jpg',
				user: {
					school: '中国科学技术大学',
					city: '上海'
				},
				schoolList: ['北京大学', '清华大学', '复旦大学', '上海交通大学', '中国科学技术大学']
			}
		},
		methods: {
			changeImg() {
				uni.chooseImage({
					count: 1,
					sourceType: ['album', 'camera'],
					sizeType: ['orignial', 'compressed'],
					success: (res) => {
						const tempFilePath = res.tempFilePaths
						this.src = tempFilePath;
						
						console.log(this.src);
						uni.uploadFile({
							url:'http://127.0.0.1:8080/upload',
							filePath:tempFilePath[0],
							name:'file',
							formData:{
								'name':'头像.jpg',
								'type':'img'
							},
							success:(uploadFileRes)=>{
								console.log(11111111111);
								console.log(uploadFileRes.data);
							}
						})
					}
				})
			},
			bindSchoolChange(res) {
				this.user.school = this.schoolList[res.target.value];
				uni.setStorage({
					key: 'school',
					data: this.schoolList[res.target.value]
				})
			},
			bindCityChange(res) {
				this.user.city = res.target.value[0]; // 只到省
				uni.setStorage({
					key: 'city',
					data: res.target.value[0]
				})
			}
		},
		onLoad() {
			uni.getStorage({
				key: 'school',
				success: (res) => {
					this.user.school = res.data
				}
			})
			uni.getStorage({
				key: 'city',
				success: (res) => {
					this.user.city = res.data
				}
			})
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
