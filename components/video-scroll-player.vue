<template>
	<view class="player">
		<video id="myVideo" :src="item.src" class="video" objectFit="contain" loop="true" :controls="false">
			<cover-view class="iconfont icon iconbofang" @click="click" v-show="!isPlaying"></cover-view>
			<cover-view class="iconfont icon iconzanting" @click="click" v-show="isPlaying"></cover-view>
		</video>
	</view>
</template>

<script>
	export default {
		props: [
			'item',
			'index'
		],
		data() {
			return {
				isPlaying: false,
			};
		},
		methods: {
			play() {
				if (!this.isPlaying) {
					this.videoContext.play()
					this.isPlaying = true
				}
			},
			pause() {
				if (this.isPlaying) {
					this.videoContext.pause()
					this.isPlaying = false
				}
			},
			click() {
				if (this.isPlaying) {
					this.pause()
				} else {
					this.play()
				}
			}
		},
		onReady() {
			this.videoContext = uni.createVideoContext('myVideo', this)
			if (this.index == 0) {
				this.play()
			}
		}
	}
</script>

<style>
	.player {
		width: 100%;
		height: 100%;
	}

	.video {
		width: 85%;
		height: 100%;
		z-index: 5;
		position: relative;
	}

	.icon {
		position: absolute;
		bottom: 5px;
		right: 10px;
		font-size: 20px;
	}
</style>
