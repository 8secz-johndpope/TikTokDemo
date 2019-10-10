<template>
	<view class="friend">
		<friend-nav></friend-nav>
		<friend-list :list="list"></friend-list>
		<tab></tab>
	</view>
</template>

<script>
	import friendNav from '../../components/friend-nav.vue'
	import tab from '../../components/tab.vue'
	import friendList from '../../components/friend-list.vue'
	export default {
		components: {
			friendNav,
			tab,
			friendList,
		},
		data() {
			return {
				list: []
			}
		},
		methods: {

		},
		onLoad() {
			uni.request({
				url: 'http://localhost/videos.json',
				success: (res) => {
					this.list = res.data.list;
				}
			})
		},
	}
</script>

<style>
	.friend {
		width: 100%;
		height: 100%;
		background-color: #000000;
		font-size: 15px;
		color: #FFFFFF;
	}
</style>
