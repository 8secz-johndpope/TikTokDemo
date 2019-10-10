<template>
	<view class="news">
		<news-nav></news-nav>
		<news-content></news-content>
		<tab></tab>
	</view>
</template>

<script>
	import newsNav from '../../components/news-nav.vue'
	import newsContent from '../../components/news-content.vue'
	import tab from '../../components/tab.vue'
	export default {
		components: {
			newsNav,
			newsContent,
			tab,
		},
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>
	.news {
		width: 100%;
		height: 100%;
		background-color: #000000;
		color: #FFFFFF;
	}
</style>
