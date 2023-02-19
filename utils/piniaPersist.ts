import { PersistedStateOptions } from 'pinia-plugin-persistedstate'

/**
 * @description: - pinia持久化参数配置
 * @param {string} key - 存储持久化的 name
 * @param {Array} paths - 需要持久化的 state name
 * @return {*} - persist 对象
 */
const piniaPersistConfig = (key: string, paths?: string[]) => {
	// persist只在客户端生效
	if (!process.client) return
	const persist: PersistedStateOptions = {
		key,
		storage: localStorage,
		paths,
	}
	return persist
}
export default piniaPersistConfig
