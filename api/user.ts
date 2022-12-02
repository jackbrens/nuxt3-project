import Http from '@/utils/http'

export const getRecommend = () => {
	return Http.post('/recommend_api/v1/article/recommend_all_feed?aid=2608&uuid=7171816670422402593&spider=0', {
		id_type: 2,
		client_type: 2608,
		sort_type: 200,
		cursor: '0',
		limit: 20,
	})
}
