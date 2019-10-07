<template>
	<view class="video-list">
		<view class="swiper-box">
			<swiper :vertical="true" class="swiper" @change="change" @touchstart="touchStart" @touchend="touchEnd">
				<swiper-item v-for="(item,index) of list" :key="item.id">
					<view class="swiper-item">
						<video-player :videoItem="item" ref="player" @playerDblClick="playerDblClick" :index='index'></video-player>
					</view>
					<view class="video-info-box">
						<video-info :videoItem="item"></video-info>
					</view>
					<view class="video-opt-box">
						<video-opt :videoItem="item" ref="opt"></video-opt>
					</view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	import videoPlayer from './video-player.vue'
	import videoInfo from './video-info.vue'
	import videoOpt from './video-opt.vue'

	export default {
		components: {
			videoPlayer,
			videoInfo,
			videoOpt
		},
		props: [
			"list" // 监听index.vue中list的变化
		],
		data() {
			return {
				pageStartY: 0,
				pageEndY: 0,
				currentIndex: 0,
			};
		},
		methods: {
			change(res) {
				this.currentIndex = res.detail.current;
			},
			touchStart(res) {
				this.pageStartY = res.changedTouches[0].pageY;
			},
			touchEnd(res) {
				this.pageEndY = res.changedTouches[0].pageY;

				if (Math.abs(this.pageEndY - this.pageStartY) < 1) return; // 忽略微小滑动

				let lastIndex = this.currentIndex; // 之前的index

				if (this.pageEndY > this.pageStartY) { // 下拉
					lastIndex++;
				} else if (this.pageEndY < this.pageStartY) { // 上推
					lastIndex--;
				}

				if (lastIndex >= 0) this.$refs.player[lastIndex].pause();
				// console.log(lastIndex);

				this.$refs.player[this.currentIndex].play(true);
			},
			playerDblClick() {
				this.$refs.opt[0].dblLove();
			}
		}
	}
</script>

<style>
	.video-list {
		width: 100%;
		height: 100%;
	}

	.swiper-box {
		width: 100%;
		height: 100%;
	}

	.swiper {
		width: 100%;
		height: 100%;
	}

	.swiper-item {
		width: 100%;
		height: 100%;
		z-index: 0;
	}

	.video-info-box {
		z-index: 30;
		position: absolute;
		bottom: 50px;
		left: 10px;
	}

	.video-opt-box {
		z-index: 30;
		position: absolute;
		bottom: 50px;
		right: 10px;
	}
</style>
