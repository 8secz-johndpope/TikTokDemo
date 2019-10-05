<template>
	<view class="video-list">
		<view class="swiper-box">
			<swiper :vertical="true" class="swiper">
				<swiper-item v-for="item of list" :key="item.id">
					<view class="swiper-item">
						<video-player :videoItem="item"></video-player>
					</view>
					<view class="video-info-box">
						<video-info :videoItem="item"></video-info>
					</view>
					<view class="video-opt-box">
						<video-opt :videoItem="item"></video-opt>
					</view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	import videoPlayer from './video-player.vue'
	import videoInfo from './video-info.vue'
	import videoOpt from './video-opt.vue'

	export default {
		components: {
			videoPlayer,
			videoInfo,
			videoOpt
		},
		props: [
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
		z-index: 0;
	}

	.video-info-box {
		z-index: 30;
		position: absolute;
		bottom: 50px;
		left: 10px;
	}

	.video-opt-box {
		z-index: 30;
		position: absolute;		
		bottom: 50px;
		right: 10px;
	}
</style>
