<template>
	<view class="navbar">
		<view class="navbar-fixed">
			<!-- 状态栏 -->
			<view :style="{height:statusBarHeight + 'px'}"></view>
			<!-- 导航栏内容 -->
			<view class="navbar-content" :style="{height:navBarHeight + 2 + 'px',width:windowWidth + 'px'}">
				<view class="navbar-search">
					<view class="navbar-search_icon">
						<!-- <text class="iconfont icon-sousuo"></text> -->
						<uni-icons type="search" size="16" color="#999"></uni-icons>
					</view>
					<view class="navbar-search_text">uni-app、vue</view>
				</view>
			</view>
	
		</view>
		<view :style="{height:statusBarHeight+navBarHeight+'px'}"></view>
	</view>
</template>

<script>
	export default {
		name:"navbar",
		data() {
			return {
				statusBarHeight:20,
				navBarHeight:45,
				windowWidth:375
			};
		},
		created() {
			// 获取手机系统信息
			let info = uni.getSystemInfoSync()
			// 设置状态栏高度
			this.statusBarHeight = info.statusBarHeight
			this.windowWidth = info.windowWidth
			console.log(info)
			// 
			// #ifndef H5 || APP-PLUS || MP-ALIPAY
			// 获取胶囊的位置
			const menuButtonInfo = uni.getMenuButtonBoundingClientRect()
			console.log(menuButtonInfo)
			// (胶囊底部高度 - 状态栏的高度) + （胶囊顶部高度 - 状态栏的高度）= 导航栏的高度
			this.navBarHeight = (menuButtonInfo.bottom -  info.statusBarHeight) + (menuButtonInfo.top - info.statusBarHeight)
			this.windowWidth = menuButtonInfo.left
			// #endif
		}
	}
</script>

<style lang="scss">
	@import  '../../common/css/icons.css';
	.navbar {
		.navbar-fixed {
			position: fixed;
			left: 0;
			top: 0;
			z-index: 99;
			width: 100%;
			width: 100%;
			background-color: $mk-base-color;
			.navbar-content {
				display: flex;
				justify-content: center;
				align-items: center;
				padding: 0 15px;
				height: 45px;
				box-sizing: border-box;
				.navbar-search {
					padding: 0 10px;
					display: flex;
					align-items: center;
					width: 100%;
					height: 32px;
					border-radius: 30px;
					background-color: #fff;
					.navbar-search_icon {
						// width: 10px;
						// height: 10px;
						// border: 1px red solid;
						margin-right: 10px;
					}
					.navbar-search_text {
						font-size: 12px;
						color: #999;
					}
				}
			}
			
		}
	}

</style>
