<template>
	<view class="video-player">
		<video id="myVideo" :src="fullSrc(videoItem.src)" @click='click' :controls="false" class="video" :loop="false"></video>
	</view>
</template>

<script>
	export default {
		props: [
			'videoItem'
		],
		data() {
			return {
				isPlaying: false
			}
		},
		computed: {

		},
		methods: {
			fullSrc(fileName) {
				return `http://localhost/${fileName}.mp4`
			},

			play(restart = false) {
				if (restart) {
					this.videoContext.seek(0) // 跳转至开头播放
				}
				this.videoContext.play()
			},

			pause() {
				this.videoContext.pause()
			},

			click() {
				if (this.isPlaying) {
					this.pause()
				} else {
					this.play()
				}
				this.isPlaying = !this.isPlaying
			}
		},
		onReady() {
			this.videoContext = uni.createVideoContext('myVideo', this)
			console.log(this.videoContext)
		}
	}
</script>

<style>
	.video-player {
		width: 100%;
		height: 100%;
	}

	.video {
		width: 100%;
		height: 100%;
	}
</style>
