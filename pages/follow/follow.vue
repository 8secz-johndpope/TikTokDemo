<template>
	<view class="follow">
		<follow-nav></follow-nav>
		<follow-list></follow-list>
		<tab></tab>
	</view>
</template>

<script>
	import followNav from '../../components/follow-nav.vue'
	import tab from '../../components/tab.vue'
	import followList from '../../components/follow-list.vue'
	export default {
		components: {
			followNav,
			tab,
			followList,
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
	.follow {
		background: #000000;
		color: #FFFFFF;
		width: 100%;
		height: 100%;
	}
</style>
