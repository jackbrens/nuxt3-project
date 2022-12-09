import Http from '@/utils/http'

export const getRecommend = (timestamp?: number) => {
	return Http.post(
		'/recommend_api/v1/article/recommend_all_feed',
		{
			id_type: 2,
			client_type: 2608,
			sort_type: 200,
			cursor: '0',
			limit: 20,
			time: timestamp,
		},
		{
			aid: 2608,
			uuid: '7171816670422402593',
			spider: '0',
			time: timestamp,
		}
	)
}
