<template>
	<view class="video-list">
		<view class="swiper-box">
			<swiper :vertical="true" class="swiper">
				<swiper-item v-for="item of list" :key="item.id">
					<view class="swiper-item">
						<video-player :videoItem="item"></video-player>
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
		props:[
			"list" // 监听index.vue中list的变化
		],
		data() {
			return {
				
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
