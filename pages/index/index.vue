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
	import getServerData from '../../getServerData.js'

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
			getServerData('json/videos.json', 'list').then(value => {
				this.list = value
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
