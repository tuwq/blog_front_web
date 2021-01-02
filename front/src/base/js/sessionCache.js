var sessionStorage = window.sessionStorage

const IMG_CONFIG_KEY = 'IMG_CONFIG_KEY'

export function _setItem(key,value) {
	sessionStorage.setItem(key,value)
	return value
}

export function _getItem(key) {
	return sessionStorage.getItem(key)
}


export function _setImgConfigItem(value) {
	sessionStorage.setItem(IMG_CONFIG_KEY,value)
	return value
}

export function _getImgConfigItem() {
	return sessionStorage.getItem(IMG_CONFIG_KEY)
}

