import moment from 'moment'
moment.updateLocale('zh-cn', {
	relativeTime: {
		future: '%s内',
		past: '%s前',
		s: '几秒',
		m: '1 分钟',
		mm: '%d 分钟',
		h: '1 小时',
		hh: '%d 小时',
		d: '1 天',
		dd: '%d 天',
		M: '1 个月',
		MM: '%d 个月',
		y: '1 年',
		yy: '%d 年',
	},
})

/**
 * 格式化时间
 * @param timestamp
 * @returns
 */
export const recommendDate = (timestamp: number | string) => {
	return moment(Number(timestamp) * 1000).fromNow()
}

export const changeDate = (date: string) => {
	return moment(date).format('X')
}
