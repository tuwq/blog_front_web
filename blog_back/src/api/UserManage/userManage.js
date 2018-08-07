export function getUserApi(currentPage,pageSize,success) {
	axios.get('/sys/userManage/page',{
		params: {currentPage,pageSize}
	}).then((res)=>{
		success(res)
	})
}

export function getSearchListApi(currentPage,pageSize,keyword,success) {
	axios.post('/sys/userManage/search',{
		currentPage,pageSize,keyword
	}).then((res)=>{
		success(res)
	})
}

export function updateBatchApi(ids,success) {
	axios.put('/sys/userManage/updateBatch/'+ids)
	.then((res)=>{
		success(res)
	})
}