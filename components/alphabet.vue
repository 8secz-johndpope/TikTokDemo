<template>
	<view class="alphabet">
		<view class="list">
			<view class="item" v-for="(item,index) of citys " :key="index" @click="click(item.initial)" @touchstart="touchstart"
			 @touchend="touchend" @touchmove="touchmove">
				{{item.initial}}
			</view>
		</view>

	</view>
</template>

<script>
	var timer = null;
	export default {
		props: ['citys'],
		data() {
			return {
				touch: false,
			};
		},
		methods: {
			click(alphabet) {
				this.$emit('change', alphabet);
			},
			touchstart() {
				this.touch = true;
			},
			touchend() {
				this.touch = false;
			},
			touchmove(res) {
				clearTimeout(timer); // debounce  

				timer = setTimeout(() => {
					if (this.touch) {
						const distanceFromA = res.changedTouches[0].pageY - 150;
						const index = Math.floor(distanceFromA / 20);

						if (index >= 0 && index < this.citys.length)
							this.$emit('change', this.citys[index].initial);
					}
				}, 30)
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
		font-size: 12px;
		margin-right: 1px;
		color: #AAAAAA;
	}
</style>
