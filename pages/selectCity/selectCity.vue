<template>
	<view class="selectCity">
		<select-header></select-header>
		<alphabet :citys="citys"></alphabet>
		<city-list :citys="citys"></city-list>
	</view>
</template>

<script>
	import selectHeader from '../../components/select-header.vue'
	import cityList from '../../components/city-list.vue'
	import alphabet from '../../components/alphabet.vue'
	export default {
		components: {
			selectHeader,
			cityList,
			alphabet
		},
		data() {
			return {
				citys: []
			}
		},
		methods: {

		},
		created() {
			uni.request({
				url: "http://localhost/city.json",
				success: (res) => {
					this.citys = res.data.city;
				}
			})
		}
	}
</script>

<style>
	.selectCity {
		width: 100%;
		background: #000000;
		color: #FFFFFF;
	}
</style>
