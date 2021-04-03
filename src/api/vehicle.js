import request from '@/utils/request'

export function getPeoples() {
	return request({
		url: `api/people/`,
		method: 'GET'
	})
}

export function getPeopleById(id, params) {
	return request({
		url: `api/people/${id}`,
		method: 'GET',
		params: params
	})
}
