<template>
	<view class="personal">
		<personal-info></personal-info>
		<tab></tab>
	</view>
</template>

<script>
	import tab from '../../components/tab.vue'
	import personalInfo from '../../components/personal-info.vue'
	export default {
		components: {
			tab,
			personalInfo
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
