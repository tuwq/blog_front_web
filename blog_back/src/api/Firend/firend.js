// export function addFirendApi(formdata,success) {
// 	axios.post(global.serverUrl+'/sys/firend/add',formdata,{
// 		headers:{'Content-Type':'multipart/form-data'}
// 	}).then((res)=>{
// 		success(res)
// 	})
// }

export function addFirendApi(state,success) {
	let nickname = state.nickname
	let avatarSite = state.avatarSite
	let website = state.website
	let desc = state.desc
	axios.post(global.serverUrl+'/sys/firend/insert',{
		nickname,avatarSite,website,desc
	}).then((res)=>{
		success(res)
	})
}

export function EditFirendApi(id,state,success) {
	let nickname = state.nickname
	let avatarSite = state.avatarSite
	let desc = state.desc
	let website = state.website
	axios.put(global.serverUrl+'/sys/firend/update',{
		id,nickname,avatarSite,desc,website
	}).then((res)=>{
		success(res)
	})
}

export function getFirendInfoApi(id,success) {
	axios.get(global.serverUrl+'/sys/firend/info/'+id)
	.then((res)=>{
		success(res)
	})
}

export function pageFirendApi(currentPage,pageSize,success) {
	axios.get(global.serverUrl+'/sys/firend/page',{
		params: {currentPage,pageSize}
	}).then((res)=>{
		success(res)
	})
}

export function updateAvatarApi(formdata,success) {
	axios.post(global.serverUrl+'/sys/firend/update/avatar',formdata,{
		headers:{'Content-Type':'multipart/form-data'}
	}).then((res)=>{
		success(res)
	})
}

export function delBatchApi(ids,success) {
	axios.delete(global.serverUrl+'/sys/firend/delBatch/'+ids)
	.then((res)=>{
		success(res)
	})
}

