<template>
	<view class="news">
		<news-nav></news-nav>
		<news-content></news-content>
	</view>
</template>

<script>
	import newsNav from '../../components/news-nav.vue'
	import newsContent from '../../components/news-content.vue'
	export default {
		components: {
			newsNav,
			newsContent,
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
