<template>
	<view class="video-player">
		<video :src="src" :controls="false" class="video" :loop="true"></video>
	</view>
</template>

<script>
	export default {
		props: [
			'src'
		],
		data() {
			return {

			};
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
