import $http from '../http.js'

export const get_labelList = (data) => {
	return $http({
		url:'get_label',
		data
	})
}

export const get_list = (data) => {
	return $http({
		url:'get_list',
		data
	})
}

