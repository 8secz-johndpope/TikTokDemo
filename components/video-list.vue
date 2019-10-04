<template>
	<view class="video-list">
		<view class="swiper-box">
			<swiper :vertical="true" class="swiper">
				<swiper-item v-for="item of list" :key="item.id">
					<view class="swiper-item">
						<video-player :src='item.src'></video-player>
					</view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	import videoPlayer from './video-player.vue'

	export default {
		components: {
			videoPlayer
		},
		data() {
			return {
				list: [{
						id: 1,
						src: require('../static/video/1-1.mp4')
					},
					{
						id: 2,
						src: require('../static/video/1-2.mp4')
					},
					{
						id: 3,
						src: require('../static/video/1-3.mp4')
					}
				]
			};
		}
	}
</script>

<style>
	.video-list {
		width: 100%;
		height: 100%;
	}

	.swiper-box {
		width: 100%;
		height: 100%;
	}

	.swiper {
		width: 100%;
		height: 100%;
	}

	.swiper-item {
		width: 100%;
		height: 100%;
		z-index: 19;
	}
</style>
