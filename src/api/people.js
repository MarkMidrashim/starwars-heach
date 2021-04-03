import request from '@/utils/request'

export function getPeople(id, params) {
	return request({
		url: `/tem/contracts/categoria/${id}`,
		method: 'GET',
		params: params
	})
}
