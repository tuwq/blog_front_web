export function addFirendApi(formdata,success) {
	axios.post('/sys/firend/add',formdata,{
		headers:{'Content-Type':'multipart/form-data'}
	}).then((res)=>{
		success(res)
	})
}

export function EditFirendApi(id,state,success) {
	let nickname = state.nickname
	let desc = state.desc
	let website = state.website
	axios.put('/sys/firend/edit',{
		id,nickname,desc,website
	}).then((res)=>{
		success(res)
	})
}

export function getFirendInfoApi(id,success) {
	axios.get('/sys/firend/info/'+id)
	.then((res)=>{
		success(res)
	})
}

export function pageFirendApi(currentPage,pageSize,success) {
	axios.get('/sys/firend/page',{
		params: {currentPage,pageSize}
	}).then((res)=>{
		success(res)
	})
}

export function updateAvatarApi(formdata,success) {
	axios.post('/sys/firend/update/avatar',formdata,{
		headers:{'Content-Type':'multipart/form-data'}
	}).then((res)=>{
		success(res)
	})
}

export function delBatchApi(ids,success) {
	axios.delete('/sys/firend/delBatch/'+ids)
	.then((res)=>{
		success(res)
	})
}

