<template>
	<view>
		<view class="headBg"></view>
		<scroll-view scroll-y="true" >
			<view class="pay">
				<view class="info">
					<view class="title">成为会员</view>
					<view class="setAmount">
						<input type="number" placeholder="99" disabled :value="amount" />
						<text>元</text>
					</view>
				</view>
				<view class="info">
					<view class="title">会员权益</view>
					<view class="description">开通会员即可参与步数换金豆</view>
				</view>
				<view class="shereButton">
					<button>立即支付</button>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import Vip from "./vip-model.js";
	const vip = new Vip()
	export default {
		data() {
			return {
				amount: 99,
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="less">
	@import url("../../static/css/variable.less");
	page {
		// background-color: #fff;
	}
	.headBg {
		background-color: @themeColor;
		width: 100%;
		height: 122rpx;
		border-radius: 0 0 20rpx 20rpx;
		z-index: 1;
	}
	scroll-view {
		position: absolute;
		top: 0;
		left: 0;
		width: 750rpx;
		height: auto;
	}
	.pay {
		.info:nth-child(2){
			border-radius: 0;
			margin-top: 30rpx;
			.description {
				width: 100%;
				height: auto;
				line-height: 40rpx;
				font-size: @descriptionSize;
				color: @fontColor_2;
			}
		}
		.info {
			width: 710rpx;
			height: auto;
			padding: 30rpx 20rpx;
			border-radius: 20rpx 20rpx 0 0;
			background-color: #fff;
			.title {
				font-size: @titleSize_1;
				font-weight: @mainFontWeight;
				color: @mainFontColor;
				padding-bottom: 30rpx;
			}
			.setAmount {
				width: 670rpx;
				height: 80rpx;
				padding: 0 20rpx;
				margin-top: 30rpx;
				margin-bottom: 50rpx;
				background-color: #F1F1F1;
				font-size: @descriptionSize;
				color: @mainFontColor;
				display: flex;
				align-items: center;
				justify-content: flex-end;
				border-radius: 10rpx;
				input {
					width: 100%;
					height: 100%;
					text-align: right;
					padding: 0 20rpx;
				}
			}
		}
		.shereButton {
			position: fixed;
			left: 0;
			bottom: 0;
			width: 100%;
			height: auto; // 140rpx
			button {
				width: 710rpx;
				height: 80rpx;
				margin: 20rpx;
				background: @buttonGradient;
				color: #fff;
				display: flex;
				align-items: center;
				justify-content: center;
			}
		}
	}
</style>
