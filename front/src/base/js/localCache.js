import storage from 'good-storage'

const SEARCH_SONGS_KEY = 'SEARCH_SONGS_KEY'
const CACHE_CONFIG_KEY = 'CACHE_CONFIG_KEY'

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

export function _saveCacheConfig(result) {
	storage.set(CACHE_CONFIG_KEY, JSON.stringify({
		result: result,
		longTime: new Date().getTime() 
	}))
}

export function _loadCacheConfig() {
	try {
		let data = JSON.parse(storage.get(CACHE_CONFIG_KEY, null)) 
		if (_isFivesDayed(data.longTime)) {
			return null
		}
		return data.result
	} catch(e) {
		return null
	}	
}

// 超过五天算过期
export function _isFivesDayed(longTime) {
	let curDate = new Date()
	let timeStamp = curDate.getTime() - longTime
	let expiration = 5*24*60*60*1000
	if (timeStamp >= expiration) {
		return true
	}
    return false
}
