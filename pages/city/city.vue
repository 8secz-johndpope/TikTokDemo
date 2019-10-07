<template>
	<view class="city">
		<tab></tab>
		<first-nav></first-nav>
		<city-content></city-content>
	</view>
</template>

<script>
	import tab from '../../components/tab.vue'
	import firstNav from '../../components/first-nav.vue'
	import cityContent from '../../components/city-content.vue'
	export default {
		components:{
			tab,
			firstNav,
			cityContent
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
	.city{
		width: 100%;
		height: 100%;
		background-color: #000000;
	}

</style>
