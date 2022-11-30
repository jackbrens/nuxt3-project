// server/api/count.ts-例子
let counter = 0
export default () => {
	counter++
	return JSON.stringify(counter)
}
