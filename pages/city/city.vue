<template>
	<view class="city">
		<tab></tab>
		<first-nav></first-nav>
		<city-content :list="list"></city-content>
	</view>
</template>

<script>
	import tab from '../../components/tab.vue'
	import firstNav from '../../components/first-nav.vue'
	import cityContent from '../../components/city-content.vue'	
	import getServerData from '../../getServerData.js'
	
	export default {
		components: {
			tab,
			firstNav,
			cityContent
		},
		data() {
			return {
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
	.city {
		width: 100%;
		height: 100%;
		background-color: #000000;
	}
</style>
