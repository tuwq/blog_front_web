import storage from 'good-storage'

const SEARCH_SONGS_KEY = 'SEARCH_SONGS_KEY'

export function _saveSearchSongs(value) {
	storage.set(SEARCH_SONGS_KEY,value)
	return value
}

export function _loadSearchSongs() {
	return storage.get(SEARCH_SONGS_KEY,'')
}

export function _removeSearchSongs() {
	storage.remove(SEARCH_SONGS_KEY)
}

export function _saveStorage(key,value) {
 	storage.set(key, value)
 	return value;
}

export function _loadStorage(key){
	// 如果找不到返回空串
	return storage.get(key, '')
}

