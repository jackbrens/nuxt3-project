<template>
	<div v-if="catalogHtml" class="catalog sticky-block-box">
		<div class="catalog-title">目录</div>
		<div class="catalog-body" v-html="catalogHtml"></div>
	</div>
</template>

<script lang="ts" setup>
const props = defineProps({
	post: {
		type: String,
		required: true,
	},
})
const catalogHtml = ref<string>('')
const createCatalog = () => {
	// 正则匹配所有的 h1,h2,h3... 标签
	const toc: string[] = (props.post.match(/<[hH][1-6]>.*?<\/[hH][1-6]>/g) as string[]).filter(
		(v) => !v.includes('theme') && !v.includes('highlight')
	)

	catalogHtml.value = toToc(toc)

	// 获取 h[1-6] 标签，设置属性，实现锚点跳转
	const label = document.querySelectorAll('.article-content h1,h2,h3,h4,h5,h6')
	const arrLabel = Array.from(label).filter((v) => !v.outerHTML.includes('theme') && !v.outerHTML.includes('highlight'))
	arrLabel.forEach((item, index) => {
		item.setAttribute('id', `heading-${index}`)
	})

	handleCatalog()
}

// 将这些 h 标签转化为 ul>li 的形式
function toToc(data: string[]) {
	const levelStack: string[] = []
	let result: string = ''
	const addStartUL = () => {
		result += '<ul class="catalog-list">'
	}
	const addEndUL = () => {
		result += '</ul>'
	}
	const addLI = (index: number, itemText: string) => {
		result +=
			'<li><a name="link" class="toc-link' + '-#' + index + '" href="#heading-' + index + '">' + itemText + '</a></li>'
	}
	data.forEach((item: any, index: number) => {
		const itemText: string = item.replace(/<[^>]+>/g, '') // 匹配h标签的文字
		const itemLabel: string = item.match(/<\w+?>/)[0] // 匹配h?标签<h?>
		let levelIndex: number = levelStack.indexOf(itemLabel) // 判断数组里有无<h?>
		// 没有找到相应<h?>标签，则将新增ul、li
		if (levelIndex === -1) {
			levelStack.unshift(itemLabel)
			addStartUL()
			addLI(index, itemText)
		}

		// 找到了相应<h?>标签，并且在栈顶的位置则直接将li放在此ul下
		else if (levelIndex === 0) {
			addLI(index, itemText)
		}

		// 找到了相应<h?>标签，但是不在栈顶位置，需要将之前的所有<h?>出栈并且打上闭合标签，最后新增li
		else {
			while (levelIndex--) {
				levelStack.shift()
				addEndUL()
			}
			addLI(index, itemText)
		}
	})

	// 如果栈中还有<h?>，全部出栈打上闭合标签
	while (levelStack.length) {
		levelStack.shift()
		addEndUL()
	}
	return result
}

// 目录的点击事件
function handleCatalog() {
	nextTick(() => {
		const lis = document.querySelectorAll('.catalog-body .catalog-list li') as unknown as HTMLElement[]
		lis.forEach((el) => {
			el.onclick = function () {
				lis.forEach((item) => item.classList.remove('active'))
				el.classList.add('active')
			}
		})
	})
}

onMounted(() => {
	createCatalog()
})
</script>
<style lang="scss" scoped>
.sticky-block-box {
	position: sticky;
	top: 6rem;
	transition: top 0.2s;
}
.catalog {
	background-color: var(--primary-background-color);
	padding: 1.333rem 1.667rem;
	font-size: 13px;
	.catalog-title {
		padding-bottom: 1rem;
		font-size: 16px;
		line-height: 2rem;
		color: var(--primary-color);
		border-bottom: 1px solid var(--border-line-color);
	}
	.catalog-body {
		:deep(.catalog-list) {
			padding-left: 20px;
			&:first-child {
				padding-left: 0;
			}
			li {
				&.active a {
					color: var(--link-color);
				}
			}
			li a {
				line-height: 2;
				@include text-overflow();
				&:hover {
					color: var(--link-color);
				}
			}
		}
	}
}
</style>
