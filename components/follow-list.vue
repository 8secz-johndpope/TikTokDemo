<template>
	<view class="followlist">
		<view class="living">
			<scroll-view scroll-x="true" class="livingScroll">
				<view class="livingItem" v-for="(i, k) in 10" :key="k">
					<image src="../static/me.jpg" class="livingImg"></image>
					<text class="livingText">直播中</text>
					<text class="livingAuthor">lcl{{i}}</text>
				</view>
			</scroll-view>
		</view>
		<view class="videoScorllList">
			<video-scroll-list :list="list"></video-scroll-list>
		</view>
	</view>

</template>

<script>
	import videoScrollList from './video-scroll-list.vue'
	export default {
		components:{
			videoScrollList
		},
		props: [
			'list'
		],
		data() {
			return {
			};
		},
		methods: {
		}
	}
</script>

<style>
	.followlist {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 50px
	}

	.living {
		padding-top: 10px;
		height: 110px;
	}

	.livingScroll {
		width: 100%;
		height: 110px;
		white-space: nowrap;
	}

	.livingItem {
		width: 20%;
		display: inline-block;
	}

	.livingImg {
		width: 50px;
		height: 50px;
		border-radius: 50%;
		margin: 10px;
		border: 1px solid #DD524D;
	}

	.livingText {
		position: relative;
		font-size: 12px;
		top: -6px;
		left: -55px;
		background-color: #DD524D
	}

	.livingAuthor {
		position: relative;
		font-size: 14px;
		top: 14px;
		left: -84px;
	}

	.videoItem {
		padding: 0 15px;
		width: 90%;
		height: 550px;
	}
	
	.videoScorllList {
		height: 100%;
		width: 100%;
	}
</style>
