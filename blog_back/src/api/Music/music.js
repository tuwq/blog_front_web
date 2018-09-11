export function getMusicCategoryApi(success) {
	axios.get(global.serverUrl+'/sys/music/category/list')
	.then((res)=>{
		success(res)
	})
}

export function getSongInfo(id,success) {
	axios.get(global.serverUrl+'/sys/music/'+id)
	.then((res)=>{
		success(res)
	})
}

export function pageSongApi(currentPage,pageSize,success) {
	axios.get(global.serverUrl+'/sys/music/page',{
		params: {currentPage,pageSize}
	}).then((res)=>{
		success(res)
	})
}

export function pageSearchApi(currentPage,pageSize,keyword,success) {
	axios.post(global.serverUrl+'/sys/music/search',{
		currentPage,pageSize,keyword
	}).then((res)=>{
		success(res)
	})
}

export function addMusicApi(formdata,success) {
	axios.post(global.serverUrl+'/sys/music/add',formdata,{
		headers:{'Content-Type':'multipart/form-data'}
	}).then((res)=>{
		success(res)
	})
}

export function editMusicApi(id,state,success) {
	let categoryNames = state.categoryNames
	let songName = state.songName
	let singer = state.singer
	let lyric = state.lyric
	let weight = state.weight
	let duration = state.duration
	axios.post(global.serverUrl+'/sys/music/edit',{
		id,categoryNames,songName,singer,lyric,weight,duration
	}).then((res)=>{
		success(res)
	})
}

export function delBatchApi(ids,success) {
	axios.delete(global.serverUrl+'/sys/music/delBatch/'+ids)
	.then((res)=>{
		success(res)
	})
}

export function updateCoverApi(formdata,success) {
	axios.post(global.serverUrl+'/sys/music/update/cover',formdata,{
		headers:{'Content-Type':'multipart/form-data'}
	}).then((res)=>{
		success(res)
	})
}

export function updateMusicApi(formdata,success) {
	axios.post(global.serverUrl+'/sys/music/update/music',formdata,{
		headers:{'Content-Type':'multipart/form-data'}
	}).then((res)=>{
		success(res)
	})
}

