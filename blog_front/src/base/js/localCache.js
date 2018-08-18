import storage from 'good-storage'

export function _saveStorage(key,value) {
 	storage.set(key, value)
 	return value;
}

export function _loadStorage(key){
	// 如果找不到返回空串
	return storage.get(key, '')
}