import cookies from 'js-cookie'

export function _set(name,value,config) {
	cookies.set(name,value,config)
	return value
}

export function _get(name) {
	return cookies.get(name)
}

export function _remove(name,config) {
	cookies.remove(name,config)
}

export function _getJSON(name) {
	cookies.getJSON(name)
}