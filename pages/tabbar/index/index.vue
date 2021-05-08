<template>
	<view class="home">
		<navbar></navbar>
		<tab :list="tabList" @tab="tab" :tabIndex="tabIndex"></tab>
		<view class="home-list"><list :tab="tabList" :activeIndex="activeIndex" @change="change"></list></view>
		<!-- <list-scroll>
			<list-card mode="base"></list-card>
			<list-card mode="image"></list-card>
			<list-card mode="column"></list-card>
			<list-card mode="column"></list-card>
			<list-card mode="column"></list-card>
			<list-card mode="column"></list-card>
		</list-scroll> -->
	</view>
</template>

<script>
// easyCom components/组件名/组件名.vue
// import navbar from '@/components/navbar/navbar.vue'

export default {
	data() {
		return {
			title: 'Hello',
			tabList: [],
			tabIndex: 0,
			activeIndex:0
		};
	},
	onLoad() {
		this.getLabel();
	},
	methods: {
		tab(data) {
			console.log(data);
			this.activeIndex = data.index
		},
		getLabel() {
			this.$api
				.get_labelList({})
				.then(res => {
					const { data } = res
					data.unshift({name:'全部'})
					this.tabList = data;
					console.log(res);
				})
				.catch(err => {
					console.log(err);
				});
			// uniCloud
			// 	.callFunction({
			// 		name: 'get_label'
			// 	})
			// 	.then(res => {
			// 		const { result } = res;
			// 		this.tabList = result.data;
			// 	});
		},
		change(current) {
			console.log('当前swiper的值',current);
			this.tabIndex = current
		}
	}
};
</script>

<style lang="scss">
page {
	height: 100%;
	display: flex;
}
.home {
	display: flex;
	flex-direction: column;
	flex: 1;
	border: 1px red solid;
	.home-list {
		flex: 1;
		box-sizing: border-box;
		border: 1px red solid;
	}
}
</style>
