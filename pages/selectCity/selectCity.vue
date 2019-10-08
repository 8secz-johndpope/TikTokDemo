<template>
	<view class="selectCity">
		<select-header></select-header>
		<city-list></city-list>
	</view>
</template>

<script>
	import selectHeader from '../../components/select-header.vue'
	import cityList from '../../components/city-list.vue'
	export default {
		components: {
			selectHeader,
			cityList,
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
.selectCity{
	width: 100%;
	background: #000000;
	color: #FFFFFF;
}
</style>
