<template>
	<view class="selectCity">
		<select-header></select-header>
		<alphabet :citys="citys" @change='alphabetChange'></alphabet>
		<city-list :citys="citys" :letter="letter"></city-list>
	</view>
</template>

<script>
	import selectHeader from '../../components/select-header.vue'
	import cityList from '../../components/city-list.vue'
	import alphabet from '../../components/alphabet.vue'
	import getServerData from '../../getServerData.js'

	export default {
		components: {
			selectHeader,
			cityList,
			alphabet
		},
		data() {
			return {
				citys: [],
				letter: '',
			}
		},
		methods: {
			alphabetChange(alphabet) {
				this.letter = alphabet;
			}
		},
		created() {
			getServerData('json/city.json', 'city').then(value => {
				this.citys = value
			})
		}
	}
</script>

<style>
	.selectCity {
		width: 100%;
		background: #000000;
		color: #FFFFFF;
		height: 100%;
	}
</style>
