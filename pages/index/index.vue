<template>
	<view class="content">
		<first-nav></first-nav>
		<video-list :list="list"></video-list>
		<tab></tab>
	</view>
</template>

<script>
	import tab from '../../components/tab.vue'
	import firstNav from '../../components/first-nav.vue'
	import videoList from '../../components/video-list.vue'
	export default {
		components: {
			tab,
			firstNav,
			videoList
		},
		data() {
			return {
				title: 'Hello',
				list: [],
			}
		},
		onLoad() {
			uni.request({
				url: 'http://localhost/videos.json',
				success: (res) => {
					this.list = res.data.list;
				}
			})

		},
		methods: {

		}
	}
</script>

<style>
	.content {
		width: 100%;
		height: 100%;
	}
</style>
