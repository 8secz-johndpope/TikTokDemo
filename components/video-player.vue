<template>
	<view class="video-player">
		<video :src="fullSrc(videoItem.src)" :controls="false" class="video" :loop="false"></video>
	</view>
</template>

<script>
	export default {
		props: [
			'videoItem'
		],
		data() {
			return {

			};
		},
		computed: {

		},
		methods: {
			fullSrc(fileName) {
				return `http://localhost/${fileName}.mp4`;
			}
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
