<template>
	<view class="followRoot">
		<view class="followList">
			<view class="item">
				<view class="top">
					<image src='../static/1-1.jpeg' mode="" class="img"></image>

					<view class="author-name">
						张三
					</view>
					<view class="iconfont iconfenxiang">

					</view>

				</view>
				<view class="title">

				</view>
				<view class="video">

				</view>
				<view class="box">

				</view>
				<view class="comment">

				</view>
			</view>
		</view>
		<view class="ground"></view>
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
	.followRoot {
		width: 100%;
		height: 100%;
	}

	.followList {
		width: 100%;
		height: 100%;
		padding-top: 50px;
	}

	.item {
		padding: 0 15px;
	}

	.top {
		height: 50px;
		padding-top: 10px;
	}


	.img {
		width: 35px;
		height: 35px;
		border-radius: 50%;
		float: left;
	}

	.ground {
		width: 100%;
		height: 60px;
	}

	.author-name {
		float: left;
		font-size: 16px;
		height: 35px;
		line-height: 35px;
		margin-left: 10px;
	}
</style>
