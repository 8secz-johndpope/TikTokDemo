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
	import {getVideoJson} from '../../getServerData.js'
	
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
			getVideoJson().then(value => {
				this.list = value
			});
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
