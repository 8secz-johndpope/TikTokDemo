<template>
	<view class="follow">
		<follow-nav></follow-nav>
		<follow-list :list="list"></follow-list>
		<tab></tab>
	</view>
</template>

<script>
	import followNav from '../../components/follow-nav.vue'
	import tab from '../../components/tab.vue'
	import followList from '../../components/follow-list.vue'
	import videoJson from '../../server_file/videos.json'
	export default {
		components: {
			followNav,
			tab,
			followList,
		},
		data() {
			return {
				list: []
			}
		},
		onLoad() {
			// uni.request({
			// 	url: 'http://localhost/videos.json',
			// 	success: (res) => {
			// 		this.list = res.data.list;
			// 	}
			// })
			
			this.list = videoJson.list
			
		},
		methods: {

		}
	}
</script>

<style>
	.follow {
		background: #000000;
		color: #FFFFFF;
		width: 100%;
		height: 100%;
	}
</style>
