<template>
	<view class="video-list">
		<view class="author">
			{{videoItem.author}}
		</view>
		<view class="title">
			{{videoItem.title}}
		</view>
		<view class="music-box">
			<view class="music">
				{{ videoItem.music }}
				<span v-if="videoItem.musicAuthor"> @ {{ videoItem.musicAuthor }}</span>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: [
			"videoItem"
		],
		data() {
			return {

			};
		}
	}
</script>

<style>
	.video-list {
		height: 150px;
		margin-left: 10px;
		color: #FFFFFF;
		width: 150px;
	}

	.author {
		height: 35px;
		line-height: 35px;
		font-size: 15px;
		width: 100%;
	}

	.title {
		line-height: 22px;
		font-size: 12px;
		word-wrap: break-word;
	}

	.music {
		height: 35px;
		line-height: 35px;
		font-size: 12px;
		animation: XLeft 4s linear 0.2s infinite;
		width: 150px;
	}

	.music-box {
		width: 100px;
		overflow: hidden;
	}

	@keyframes XLeft {
		0% {
			transform: translate3d(80%, 0, 0);
		}

		100% {
			transform: translate3d(-80%, 0, 0);
		}
	}
</style>
