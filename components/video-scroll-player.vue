<template>
	<view class="player">
		<video id="myVideo" :src="fullSrc(item.src)" class="video" objectFit="contain" loop="true">
		</video>
	</view>
</template>

<script>
	export default {
		props: [
			'item'
		],
		data() {
			return {


			};
		},
		methods: {
			fullSrc(fileName) {
				return `http://localhost/${fileName}.mp4`
			},
			play() {
				this.videoContext.play()
			},
			pause() {
				this.videoContext.pause()
			}
		},
		onReady() {
			this.videoContext = uni.createVideoContext('myVideo', this)
			console.log(this.videoContext)
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
	}
</style>
