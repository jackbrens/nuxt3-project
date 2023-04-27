> 大家好啊，本篇文章是我逐渐摸索（踩了一些坑）得到 `nuxt3` 使用的心得体会，希望能帮助到大家，文章只讲搭建过程，不讲原理，写得不好还请见谅哈。不多说，开搞吧 :facepunch:

## 搭建前提

1. `node` 版本：`16.16.0`
2. `yarn` 版本：`1.22.18`
3. 搭配 [nuxt3 中文文档](https://www.nuxtjs.org.cn/) 食用效果更好哦

## 创建项目

打开内置终端并输入下面命令创建一个 nuxt 项目：

```sh
npx nuxi init nuxt3-project
```

> 我的 node 版本：16.16.0
>
> 提示： node 版本最好要高于 `14.16.0`，否则会报错
>
> **再次提示：项目路径不能含有中文，否则会出现下面的错误，换到英文路径下，即可解决！！！**
>
> `No response returned from render handler: /__nuxt_error?url=/&statusCode=500&statusMessage=Vite+Error&message=[vite-node]+[ERR_INVALID_URL_SCHEME]+/node_modules/ufo/dist/index.mjs&stack=%3Cpre%3E%3Cspan+class=%22stack+internal%22%3Eat+/node_modules/ufo/dist/index.mjs%3C/span%3E%3C/pre%3E&data`

![image-20221116173447428](https://github.com/jackbrens/img-bad/raw/main/nuxt3-project/image-20221116173447428.png)

`cd` 进入项目文件夹，安装依赖，启动项目

```sh
# 进入项目文件夹
cd nuxt3-project
# 安装依赖
yarn
# 启动
yarn dev
```

浏览器打开 [http://localhost:3000](http://localhost:3000)

![image-20221116174332212](https://github.com/jackbrens/img-bad/raw/main/nuxt3-project/image-20221116174332212.png)

## ESLint + Prettier + EditorConfig 环境配置

### 安装 Vscode 插件（ESLint）：

![image-20221117105857251](https://github.com/jackbrens/img-bad/raw/main/nuxt3-project/image-20221117105857251.png)

### 安装 ESlint

> 这里选择以 Nuxt 3 官方提供的 ESLint 设定來做标准配置，并添加支持 Vue 3 的 ESLint 设定

```sh
yarn add eslint @nuxtjs/eslint-config eslint-plugin-vue -D
```

> 1. **@nuxtjs/eslint-config**: 对应 [@nuxtjs/eslint-config](https://www.npmjs.com/package/@nuxtjs/eslint-config) 套件，由 Nuxt 官方提供用于 Nuxt 的 ESLint 规则配置。如果你是使用 TypeScript 则换成 [@nuxtjs/eslint-config-typescript](https://www.npmjs.com/package/@nuxtjs/eslint-config-typescript)。
> 2. **plugin:vue/vue3-recommended**: 对应 [eslint-plugin-vue](https://www.npmjs.com/package/eslint-plugin-vue) 套件，由 Vue.js 官方提供的 ESLint [插件](https://github.com/vuejs/eslint-plugin-vue)，包含了能配合 Vue SFC 语法及特性的规则，也可以参考 [官方文件](https://eslint.vuejs.org/user-guide/#bundle-configurations)，依据需求稍作调整。

### 根目录下新建 .eslintrc.js

```js
module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['@nuxtjs', 'plugin:vue/vue3-recommended'],
	parserOptions: {
		ecmaVersion: 13,
		sourceType: 'module',
	},
	plugins: [],
	rules: {
		'no-undef': 'off',
	},
}
```

### 根目录下新建 .eslintignore

```
# eslint 忽略检查 (根据项目需要自行添加)
*.sh
node_modules
*.md
*.woff
*.ttf
.vscode
.idea
dist
/public
/docs
.husky
.local
/bin
```

### 用 ESLint 来尝试检查

修改一下 `app.vue`

```vue
<template>
	<div>
		<NuxtWelcome />
	</div>
</template>

<script setup>
const title = 'jackbrens'
</script>
```

在 `package.json` 的 `scripts` 脚本中，我們可以新增一个命令 `"lint": "eslint --ext .js,.vue ."`

```
yarn lint
```

![image-20221116181755768](https://github.com/jackbrens/img-bad/raw/main/nuxt3-project/image-20221116181755768.png)

### 安装 Vscode 插件（Prettier）：

![image-20221117110107194](https://github.com/jackbrens/img-bad/raw/main/nuxt3-project/image-20221117110107194.png)

### 安装 Prettier

```
yarn add prettier eslint-config-prettier eslint-plugin-prettier -D
```

> 1. 安装 `eslint-config-prettier` 是为了解决 `ESLint` 中的样式规范和 `Prettier` 中样式规范的 `冲突`，以 `Prettier` 的样式规范 `为准`，使 ESLint 中的样式规范自动失效。
> 2. 安装 `eslint-plugin-prettier` 是为了将 `Prettier` 的 `rules` 以插件的形式加入到 `ESLint` 里面。

### 根目录下新建 .prettierrc.js

```js
module.exports = {
	// 两个缩进
	tabWidth: 2,
	// jsx使用单引号
	jsxSingleQuote: true,
	// 在jsx中把'>' 是否单独放一行
	jsxBracketSameLine: true,
	// 行宽 120 个字符
	printWidth: 120,
	// js 使用单引号
	singleQuote: true,
	// 换行符统一
	endOfLine: 'auto',
	// 分号不要
	semi: false,
	// json文件 行宽 200 个字符
	overrides: [
		{
			files: '*.json',
			options: {
				printWidth: 200,
			},
		},
	],
	// 箭头函数 "always" （默认）在所有情况下都需要参数
	arrowParens: 'always',
}
```

### 根目录下新建 .prettierignore

```
# 忽略格式化文件 (根据项目需要自行添加)
node_modules
dist
```

### 安装 VsCode 插件（EditorConfig ）：

![image-20221117120634157](https://github.com/jackbrens/img-bad/raw/main/nuxt3-project/image-20221117120634157.png)

### 根目录下新建 .editorconfig

> **EditorConfig** 帮助开发人员在 **不同的编辑器** 和 **IDE** 之间定义和维护一致的编码样式。

```
# @see: http://editorconfig.org

root = true

[*] # 表示所有文件适用
charset = utf-8 # 设置文件字符集为 utf-8
end_of_line = lf # 控制换行类型(lf | cr | crlf)
insert_final_newline = true # 始终在文件末尾插入一个新行
indent_style = tab # 缩进风格（tab | space）
indent_size = 2 # 缩进大小
max_line_length = 120 # 最大行长度

[*.md] # 表示仅 md 文件适用以下规则
max_line_length = off # 关闭最大行长度限制
trim_trailing_whitespace = false # 关闭末尾空格修剪
```

## Git 流程规范配置

项目中执行下面命令， `git` 初始化

```
git init
```

### husky 安装

```
yarn add husky -D
```

在 `package.json` 的 `scripts` 中添加

```json
"scripts": {
    "prepare": "husky install"
}
```

然后执行 `yarn prepare` ，根目录会多出 一个 `.husky` 的文件夹。

### lint-staged 安装（本地暂存代码检查工具）

```
yarn add lint-staged -D
```

> 添加 ESlint Hook（在.husky 文件夹下添加 pre-commit 文件）
>
> 作用：通过钩子函数，判断提交的代码是否符合规范，并使用 prettier 格式化代码
>
> **注意：npx 命令是 `npm` 从 `5.2` 版开始增加的命令，报错请自行安装（百度）**

```
npx husky add .husky/pre-commit "npm run lint:lint-staged"
```

在 `package.json` 的 `scripts` 中添加

```json
"scripts": {
    "lint:lint-staged": "lint-staged"
}
```

### 根目录下新建 lint-staged.config.js

```js
module.exports = {
	'*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],
	'{!(package)*.json,*.code-snippets,.!(browserslist)*rc}': ['prettier --write--parser json'],
	'package.json': ['prettier --write'],
	'*.vue': ['eslint --fix', 'prettier --write'],
	'*.{scss,less,styl,html}': ['prettier --write'],
	'*.md': ['prettier --write'],
}
```

### commitlint 安装

> **commit 信息校验工具，不符合则报错**

```
yarn add @commitlint/cli @commitlint/config-conventional -D
```

> 在.husky 文件夹下添加 commit-msg 文件
>
> **注意：**如果添加失败的话，以管理员身份运行 `cmd` 或者 `Powershell`，再次运行下面命令

```
npx husky add .husky/commit-msg 'npx --no-install commitlint --edit "$1"'
```

### commitizen 安装

> **基于 Node.js 的 git commit 命令行工具，生成标准化的 message**

```
yarn add commitizen -D
```

### cz-git 安装

> **指定提交文字规范，一款工程性更强，高度自定义，标准输出格式的 commitizen 适配器**

```
yarn add cz-git -D
```

在 `package.json` 中新增

```json
"config": {
  "commitizen": {
    "path": "node_modules/cz-git"
  }
}
```

### 根目录下新建 commitlint.config.js

```js
// @see: https://cz-git.qbenben.com/zh/guide
/** @type {import('cz-git').UserConfig} */

module.exports = {
	ignores: [(commit) => commit.includes('init')],
	extends: ['@commitlint/config-conventional'],
	rules: {
		// @see: https://commitlint.js.org/#/reference-rules
		'body-leading-blank': [2, 'always'],
		'footer-leading-blank': [1, 'always'],
		'header-max-length': [2, 'always', 108],
		'subject-empty': [2, 'never'],
		'type-empty': [2, 'never'],
		'subject-case': [0],
		'type-enum': [
			2,
			'always',
			[
				'feat',
				'fix',
				'docs',
				'style',
				'refactor',
				'perf',
				'test',
				'build',
				'ci',
				'chore',
				'revert',
				'wip',
				'workflow',
				'types',
				'release',
			],
		],
	},
	prompt: {
		messages: {
			// type: "Select the type of change that you're committing:",
			// scope: 'Denote the SCOPE of this change (optional):',
			// customScope: 'Denote the SCOPE of this change:',
			// subject: 'Write a SHORT, IMPERATIVE tense description of the change:\n',
			// body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
			// breaking: 'List any BREAKING CHANGES (optional). Use "|" to break new line:\n',
			// footerPrefixsSelect: 'Select the ISSUES type of changeList by this change (optional):',
			// customFooterPrefixs: 'Input ISSUES prefix:',
			// footer: 'List any ISSUES by this change. E.g.: #31, #34:\n',
			// confirmCommit: 'Are you sure you want to proceed with the commit above?',

			// 中文版
			type: '选择你要提交的类型 :',
			scope: '选择一个提交范围（可选）:',
			customScope: '请输入自定义的提交范围 :',
			subject: '填写简短精炼的变更描述 :\n',
			body: '填写更加详细的变更描述（可选）。使用 "|" 换行 :\n',
			breaking: '列举非兼容性重大的变更（可选）。使用 "|" 换行 :\n',
			footerPrefixsSelect: '选择关联issue前缀(可选):',
			customFooterPrefixs: '输入自定义issue前缀 :',
			footer: '列举关联issue (可选) 例如: #31, #I3244 :\n',
			confirmCommit: '是否提交或修改commit ?',
		},
		types: [
			// {
			// 	value: 'feat',
			// 	name: 'feat:     🚀  A new feature',
			// 	emoji: '🚀',
			// },
			// {
			// 	value: 'fix',
			// 	name: 'fix:      🧩  A bug fix',
			// 	emoji: '🧩',
			// },
			// {
			// 	value: 'docs',
			// 	name: 'docs:     📚  Documentation only changes',
			// 	emoji: '📚',
			// },
			// {
			// 	value: 'style',
			// 	name: 'style:    🎨  Changes that do not affect the meaning of the code',
			// 	emoji: '🎨',
			// },
			// {
			// 	value: 'refactor',
			// 	name: 'refactor: ♻️   A code change that neither fixes a bug nor adds a feature',
			// 	emoji: '♻️',
			// },
			// {
			// 	value: 'perf',
			// 	name: 'perf:     ⚡️  A code change that improves performance',
			// 	emoji: '⚡️',
			// },
			// {
			// 	value: 'test',
			// 	name: 'test:     ✅  Adding missing tests or correcting existing tests',
			// 	emoji: '✅',
			// },
			// {
			// 	value: 'build',
			// 	name: 'build:    📦️   Changes that affect the build system or external dependencies',
			// 	emoji: '📦️',
			// },
			// {
			// 	value: 'ci',
			// 	name: 'ci:       🎡  Changes to our CI configuration files and scripts',
			// 	emoji: '🎡',
			// },
			// {
			// 	value: 'chore',
			// 	name: "chore:    🔨  Other changes that don't modify src or test files",
			// 	emoji: '🔨',
			// },
			// {
			// 	value: 'revert',
			// 	name: 'revert:   ⏪️  Reverts a previous commit',
			// 	emoji: '⏪️',
			// },

			// 中文版
			{ value: 'feat', name: 'feat:   🚀  新增功能', emoji: '🚀' },
			{ value: 'fix', name: 'fix:   🧩  修复缺陷', emoji: '🧩' },
			{ value: 'docs', name: 'docs:   📚  文档变更', emoji: '📚' },
			{ value: 'style', name: 'style:   🎨  代码格式（不影响功能，例如空格、分号等格式修正）', emoji: '🎨' },
			{ value: 'refactor', name: 'refactor:   ♻️  代码重构（不包括 bug 修复、功能新增）', emoji: '♻️' },
			{ value: 'perf', name: 'perf:   ⚡️  性能优化', emoji: '⚡️' },
			{ value: 'test', name: 'test:   ✅  添加疏漏测试或已有测试改动', emoji: '✅' },
			{
				value: 'build',
				name: 'build:   📦️  构建流程、外部依赖变更（如升级 npm 包、修改 webpack 配置等）',
				emoji: '📦️',
			},
			{
				value: 'ci',
				name: 'ci:   🎡  修改 CI 配置、脚本',
				emoji: '🎡',
			},
			{
				value: 'revert',
				name: 'revert:   ⏪️  回滚 commit',
				emoji: '⏪️',
			},
			{
				value: 'other',
				name: 'other:   🔨  对构建过程或辅助工具和库的更改（不影响源文件、测试用例）',
				emoji: '🔨',
			},
		],
		useEmoji: true,
		themeColorCode: '',
		scopes: [],
		allowCustomScopes: true,
		allowEmptyScopes: true,
		customScopesAlign: 'bottom',
		customScopesAlias: 'custom',
		emptyScopesAlias: 'empty',
		upperCaseSubject: false,
		allowBreakingChanges: ['feat', 'fix'],
		breaklineNumber: 100,
		breaklineChar: '|',
		skipQuestions: [],
		issuePrefixs: [{ value: 'closed', name: 'closed:   ISSUES has been processed' }],
		customIssuePrefixsAlign: 'top',
		emptyIssuePrefixsAlias: 'skip',
		customIssuePrefixsAlias: 'custom',
		allowCustomIssuePrefixs: true,
		allowEmptyIssuePrefixs: true,
		confirmColorize: true,
		maxHeaderLength: Infinity,
		maxSubjectLength: Infinity,
		minSubjectLength: 0,
		scopeOverrides: undefined,
		defaultBody: '',
		defaultIssues: '',
		defaultScope: '',
		defaultSubject: '',
	},
}
```

在 `package.json` 的 `scripts` 中添加

```json
"scripts": {
    "lint:lint-staged": "lint-staged"
}
```

在终端执行如下命令：

```
# 1、先添加你想要提交的代码
git add .

# 2、在执行 git-cz
yarn git-cz
```

![image-20221117173449436](https://github.com/jackbrens/img-bad/raw/main/nuxt3-project/image-20221117173449436.png)

![image-20221117173611848](https://github.com/jackbrens/img-bad/raw/main/nuxt3-project/image-20221117173611848.png)

![image-20221117173707632](https://github.com/jackbrens/img-bad/raw/main/nuxt3-project/image-20221117173707632.png)

出现上图中的结果，说明 `commit` 成功了，`push` 代码之后，在仓库中可以看到效果，如下图所示：

![image-20221117173944985](https://github.com/jackbrens/img-bad/raw/main/nuxt3-project/image-20221117173944985.png)

> **这时有人会问了，如果我不想用 `yarn git-cz` 提交代码，而是使用 `git commit` 提交行不行？**
>
> **删除 `utils` 文件夹下的 `time.ts` ，然后执行下面的命令，很明显失败了**

![image-20221117180139606](https://github.com/jackbrens/img-bad/raw/main/nuxt3-project/image-20221117180139606.png)

![image-20221117180053573](https://github.com/jackbrens/img-bad/raw/main/nuxt3-project/image-20221117180053573.png)

> **然后又人问了，如果我不想执行 `commitlint` 里的规则，就想什么校验都不做，直接 `commit` 代码，行不行？**
>
> **答案是可以的**

在 `app.vue` 中随便修改一点代码，在 `commit` 代码时，后面加上 `--no-verify` 即可

![image-20221117181120345](https://github.com/jackbrens/img-bad/raw/main/nuxt3-project/image-20221117181120345.png)

当然，为了各个成员之间能统一规范，最好还是通过 `commitlint` 的规则提交代码比较好呢 🤣

## SCSS 配置

### 安装

```
yarn add sass -D
```

在 `app.vue` 中使用

```css
<style lang="scss" scoped>
$font-color: pink;
div {
	color: $font-color;
}
</style>
```

### 配置全局 scss 样式文件

根目录下新建 `assets\styles` 文件夹，用于存放全局样式。

在 `styles` 中新建 `global.scss` ，尝试添加一个变量：

```
$theme-color: pink
```

那应该如何在项目任意地方使用它的呢？在 `nuxt.config.ts` 中配置即可。

```typescript
export default defineNuxtConfig({
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@use "@/assets/styles/global.scss" as *;', // 注意文件路径要配成自己的
				},
			},
		},
	},
})
```

### 组件中使用

> 不需要任何的引入直接可以使用全局 scss 定义的变量

```css
div {
	color: $theme-color;
}
```

在 `webstrom` 中按住 `Ctrl` 然后鼠标移动到变量上，可以看到变量定义在哪个文件中。

![image-20221118102017244](https://github.com/jackbrens/img-bad/raw/main/nuxt3-project/image-20221118102017244.png)

## Element Plus 配置

### 安装

```
yarn add element-plus @element-plus/icons-vue
```

### 配置

因为 `element-plus` 属于第三方插件，需要在 `plugins` 目录配置

根目录新建 `plugins` 文件夹，在目录下新建 `element-plus.ts` 文件，（注意：默认必须在 `plugins` 下新建配置文件，这是 **约定**，详情见 [插件 plugins](https://www.nuxtjs.org.cn/directory-structure/plugins.html#%E6%8F%92%E4%BB%B6%E7%9B%AE%E5%BD%95))

在 `element-plus.ts` 中配置全局

```typescript
// @ts-ignore
import ElementPlus from 'element-plus/dist/index.full'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.use(ElementPlus, {
		locale: zhCn,
	})
})
```

### 组件中使用

```vue
<template>
	<div>
		<el-button type="primary">Primary</el-button>
		<el-button :icon="Search" circle />
	</div>
</template>

<script lang="ts" setup>
import { Search } from '@element-plus/icons-vue'
</script>
```

## 使用 Easy Mock 实现后台接口数据

## 统一封装请求

根目录下新建 `utils\http.ts` ，用于封装 `useFetch` 请求。

```typescript
import { checkStatus } from '@/api/helper/checkStatus'
import { useFetch, useRuntimeConfig } from '#app'

// 接口统一返回类型
export interface HttpResponse<T = unknown> {
	code?: number
	msg?: string
	data?: T
}

// 请求体拓展
function configOptions(options: any = {}) {
	options.lazy = true
	options.headers = {
		token: '!@#$%^&*(123456', // 例子（随便填的）
		'Content-Type': 'application/json',
	}
	return options
}

const baseURL = 'https://api.juejin.cn'

const fetch = async (url: string, options: any = {}): Promise<any> => {
	options = configOptions(options)

	// 从 useRuntimeConfig 中获取环境变量中的 url 地址
	const {
		public: { VITE_API_URL },
	} = useRuntimeConfig()
	const reqUrl = (VITE_API_URL ?? baseURL) + url
	return await useFetch<HttpResponse>(reqUrl, options).then(({ data, error }) => {
		// 请求成功
		if (!error.value && data.value) {
			return data.value
		} else {
			// 错误 code 收集
			const e = {
				code: error.value?.statusCode || data.value?.code,
			}
			checkStatus(e.code as number)
			return Promise.reject(error)
		}
	})
}

export default class Http {
	static get<T>(url: string, query: any = {}): Promise<HttpResponse<T>> {
		return fetch(url, { method: 'get', query })
	}

	static post<T>(url: string, body: any = {}, query?: any): Promise<HttpResponse<T>> {
		return fetch(url, { method: 'post', body, query })
	}

	static put<T>(url: string, body: any = {}): Promise<HttpResponse<T>> {
		return fetch(url, { method: 'put', body })
	}

	static delete<T>(url: string, body: any = {}): Promise<HttpResponse<T>> {
		return fetch(url, { method: 'delete', body })
	}
}
```

## 环境变量配置

## pinia 状态管理

### pnia 安装

### 实现主题化功能

## nuxt.config.ts 常用配置

## 多媒体适配和设备兼容方案

## 首屏优化方案（对大图压缩成 webp）

## 线上部署

## 约定路由

> **Nuxt3 内部整合了 `vue-router` ，只有在 `pages` 文件夹中新建 `vue` 组件，才会在路由表中新增对应的映射，这是规定**
>
> **详情查看 [Nuxt3 路由](https://nuxt.com/docs/getting-started/routing)**

### 页面/目录

```sh
pages/
--| about.vue
--| posts/
----| [id].vue
--| index.vue  # 首页
```

### 生成路由结构

```typescript
{
  "routes": [
    {
      "path": "/about",
      "name": "about",
      "component": "pages/about.vue"
    },
    {
      "path": "/posts/:id",
      "name": "post-id",
      "component": "pages/posts/[id].vue"
    },
    {
      "path": "/index",
      "name": "index",
      "component": "pages/index.vue"
    },
  ]
}
```

如果我们在文件名或者文件夹名称里面包含了`方括号`，它们将被转换为`动态路由`参数。

例如上面的例子中我们可以在组件 `[id].vue` 中访问 `id` 这个参数：

```vue
<!-- [id].vue -->
<template>
	<div>详情页参数=====>{{ $route.params.id }}</div>
</template>
```

别忘了在 `app.vue` 中添加路由出口：

```vue
<template>
	<div>
		<!-- 路由出口 -->
		<NuxtPage />
	</div>
</template>
```

上面我们知道了 **参数** 如何获取，那应该怎么传递过去呢？ 有几种方式呢？

传递参数的两种方式：

1. 直接链接跳转

   在 `app.vue` 中添加一个 `NuxtLink` （功能类似于 `router-link` ）：

   ```vue
   <template>
   	<div>
   		<NuxtLink to="/">首页</NuxtLink>
   		<NuxtLink to="/post/123">详情页（固定传参）</NuxtLink>
   		<NuxtLink :to="{ name: 'post-id', params: { id } }">详情页（动态传参）</NuxtLink>
   		<NuxtPage />
   	</div>
   </template>

   <script lang="ts" setup>
   import { ref } from 'vue'

   const id = ref<number>(456)
   </script>
   ```

   > 这里需要注意的是，如果你的 `pages` 目录是这样的：
   >
   > ```diff
   > | pages/
   > --| posts/
   > ----| postsdetail/
   > ------| [id].vue
   > ```
   >
   > 路由表中 `name` 则变成： `posts-postsdetail-id` ，会用 **短横线** 拼接目录的名字。

2. 路由传参

   在 `app.vue` 中添加一个 `button` 和 一个 `函数`：

   ```vue
   <template>
   	<div>
   		<NuxtLink to="/">首页</NuxtLink>
   		<NuxtLink to="/post/123">详情页（固定传参）</NuxtLink>
   		<NuxtLink :to="{ name: 'post-id', params: { id } }">详情页（动态传参）</NuxtLink>
   		<button @click="toPostDetail">详情页（路由传参）</button>
   		<NuxtPage />
   	</div>
   </template>

   <script lang="ts" setup>
   import { ref } from 'vue'
   import { useRouter } from 'vue-router'
   const router = useRouter()

   const id = ref<number>(456)

   // 跳转到详情页
   const toPostDetail = () => {
   	router.push({ name: 'post-id', params: { id: id.value } })
   }
   </script>
   ```

## 自动导入 components

> **`components/` 目录是存放可导入到你的页面中的 Vue 组件或其他组件**
>
> **`Nuxt` 会自动导入 `components/` 目录下任何组件 (以及你可能正在使用的任何模块注册的组件)。**
>
> **详情查看 [Nuxt3 components](https://www.nuxtjs.org.cn/directory-structure/components.html)**

```sh
| components/
--| BaseHeader.vue
--| BaseFooter.vue
```

```vue
<template>
	<div>
		<BaseHeader />
		<NuxtPage />
		<BaseFooter />
	</div>
</template>
```

### 只在客户端渲染组件

> **Nuxt 提供了 `<ClientOnly>` 组件，是专门在客户端渲染组件的组件。只在客户端导入组件或在客户端插件中注册该组件**

```vue
<template>
	<div>
		<Sidebar />
		<ClientOnly>
			<!-- 该组件只会在客户端渲染 -->
			<Comments />
		</ClientOnly>
	</div>
</template>
```
