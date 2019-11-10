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
	import getServerData from '../../getServerData.js'

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
			getServerData('json/videos.json', 'list').then(value => {
				this.list = value
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
