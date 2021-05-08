<template>
	<swiper class="home-swiper" :current="activeIndex" @change="change">
		<swiper-item v-for="(item, index) in tab" :key="index" class="swiper-item"><listItem :list="listCatchData[index]" @loadmore="loadmore"></listItem></swiper-item>
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
			listCatchData: {}  //考虑使用对象缓存值
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
			console.log('触发上拉1')
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
			this.$api.get_list({ name: this.tab[current].name,page:1,pageSize:10 }).then(res => {
				console.log(res);
				const { data } = res;
				// this.list = data
				// this.listCatchData[current] = data;
				// 数组懒加载
				this.$set(this.listCatchData,current,data)
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
