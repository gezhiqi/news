<template>
	<swiper class="home-swiper" :current="activeIndex" @change="change">
		<swiper-item v-for="(item, index) in tab" :key="index" class="swiper-item">
			<listItem :list="listCatchData[index]" :load="load[index]" @loadmore="loadmore"></listItem>
		</swiper-item>
	</swiper>
</template>

<script>
import listItem from './list-item.vue';
export default {
	name: 'list',
	components: {
		listItem
	},
	props: {
		tab: {
			type: Array,
			default() {
				return [];
			}
		},
		activeIndex: {
			type: Number,
			default: 0
		}
	},
	data() {
		return {
			list: [], //同用一个数组切换时会闪烁
			listCatchData: {}, //考虑使用对象缓存值
			load: {},
			pageSize: 19
		};
	},
	watch: {
		tab(newVal) {
			if (newVal.length === 0) return;
			this.getList(this.activeIndex);
		}
	},
	created() {},
	methods: {
		loadmore() {
			// this.page++
			if (this.load[this.activeIndex].loading === 'noMore') return
			this.load[this.activeIndex].page++;
			this.getList(this.activeIndex);
		},
		change(e) {
			const { current } = e.detail;
			console.log(this.tab[current].name);
			this.$emit('change', current);
			if (!this.listCatchData[current] || this.listCatchData.length === 0) {
				this.getList(current);
			}
		},
		getList(current) {
			if (!this.load[current]) {
				this.load[current] = {
					page: 1,
					loading: 'loading'
				};
			}
			this.$api
				.get_list({
					name: this.tab[current].name,
					page: this.load[current].page,
					pageSize: this.pageSize
				})
				.then(res => {
					const { data } = res;
					if (data.length === 0) {
						let oldLoad = {};
						oldLoad.loading = 'noMore';
						oldLoad.page = this.load[current].page
						this.$set(this.load, current, oldLoad)
						//强制渲染页面
						this.$forceUpdate()
						return;
					}
					// this.list = data
					// this.listCatchData[current] = data;
					let oldList = this.listCatchData[current] || [];
					oldList.push(...data);
					// 数组懒加载
					this.$set(this.listCatchData, current, oldList);
				});
		}
	}
};
</script>

<style lang="scss">
page {
	height: 100%;
}
.home-swiper {
	height: 100%;
	.swiper-item {
		height: 100%;
		overflow: hidden;
		.list-scroll {
			height: 100%;
		}
	}
}
</style>
