<template>
	<view class="alphabet">
		<view class="list">
			<view class="item" v-for="(item,index) of citys " :key="index" @click="click(item.initial)">
				{{item.initial}}
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		props: ['citys'],
		data() {
			return {

			};
		},
		methods: {
			click(alphabet) {
				this.$emit('change' , alphabet);
			}
		}
	}
</script>
 
<style>
	.alphabet {
		position: fixed;
		top: 150px;
		right: 2px;
		z-index: 27;
		color: #FFFFFF;
		float: right;
	}

	.list {
		width: 30px;
	}

	.item {
		text-align: right;
		line-height: 20px;
		font-size: 10px;
		margin-right: 1px;
		color: #AAAAAA;
	}
</style>
