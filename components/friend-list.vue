<template>
	<view class="videoScorllList">
		<video-scroll-list :list="list"></video-scroll-list>
	</view>
</template>

<script>
	import videoScrollList from './video-scroll-list.vue'
	export default {
		components:{
			videoScrollList
		},
		props: [
			'list'
		],
		data() {
			return {
			};
		}
	}
</script>

<style>
	.videoScorllList {
		padding-top: 50px;
		height: 100%;
		width: 100%;
	}
</style>
