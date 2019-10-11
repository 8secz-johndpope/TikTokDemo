<template>
	<view class="personal">
		<personal-info></personal-info>
		<personal-list></personal-list>
		<tab></tab>
	</view>
</template>

<script>
	import tab from '../../components/tab.vue'
	import personalInfo from '../../components/personal-info.vue'
	import personalList from '../../components/personal-list.vue'
	export default {
		components: {
			tab,
			personalInfo,
			personalList,
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
	.personal {
		width: 100%;
		height: 100%;
		background-color: #000000;
		color: #FFFFFF;
	}
</style>
