<template>
	<view class="video-player">
		<video id="myVideo" :src="path(videoItem.src)" @click='click' :controls="false" class="video" :loop="false" :autoplay="autoplay">
		</video>
	</view>
</template>

<script>
	let timer = null;

	export default {
		props: [
			'videoItem',
			'index'
		],
		data() {
			return {
				isPlaying: false,
				isDblClick: true,
			}
		},
		computed: {
			autoplay() {
				return this.index === 0
			}
		},
		methods: {
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
				clearTimeout(timer)
				this.isDblClick = !this.isDblClick;
				timer = setTimeout(() => {
					if (this.isDblClick) { // 双击
						this.$emit('playerDblClick');
					} else { // 单击
						if (this.isPlaying) {
							this.pause()
						} else {
							this.play()
						}
						this.isPlaying = !this.isPlaying
					}

					this.isDblClick = true;
				}, 300);
			},
			
			path(src) {
				// 如果不是用数据库的话，要改下这个path
				return `http://localhost:8080/static/video/${src}.mp4`
			}
		},
		onReady() {
			this.videoContext = uni.createVideoContext('myVideo', this)
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
