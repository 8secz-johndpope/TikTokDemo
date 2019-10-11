<template>
	<view class="">
		<view class="personal-list">
			<view class="item" v-for="item in list" :key="item.id">
				<video :controls="false" :src="item.src" class="video" objectFit="cover" autoplay="true" loop="true"></video>
				<view class="love-box">
					<text class="iconfont iconaixin_empty">{{item.loveNumber}}</text>
				</view>
			</view>
		</view>
		<view class="more">
			没有更多了
		</view>
		<view style="height: 50px;width: 100%;background: #000000;">

		</view>
	</view>
</template>

<script>
	import videoJson from '../server_file/videos.json'
	export default {
		data() {
			return {
				list:[]
			};
		},
		onLoad(){
			this.list = videoJson.list;
		}
	}
</script>

<style>
	.personal-list {
		width: 100%;
		overflow: hidden;
		padding: 0 0.5%;
		background: #000000;
	}

	.video {
		width: 100%;
		height: 100%;
	}

	.item {
		width: 33%;
		height: 120px;
		float: left;
		position: relative;
	}

	.love-box {
		position: absolute;
		bottom: 5px;
		left: 10px;
	}

	.love-icon {
		font-size: 14px;
	}

	.more {
		width: 100%;
		height: 30px;
		line-height: 30px;
		text-align: center;
		font-size: 12px;
		color: #999999;
		background-color: #000000
	}
</style>
