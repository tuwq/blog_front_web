export function getUserApi(currentPage,pageSize,success) {
	axios.get(global.serverUrl+'/sys/userManage/page',{
		params: {currentPage,pageSize}
	}).then((res)=>{
		success(res)
	})
}

export function getSearchListApi(currentPage,pageSize,keyword,success) {
	axios.post(global.serverUrl+'/sys/userManage/search',{
		currentPage,pageSize,keyword
	}).then((res)=>{
		success(res)
	})
}

export function updateBatchApi(ids,success) {
	axios.put(global.serverUrl+'/sys/userManage/updateBatch/'+ids)
	.then((res)=>{
		success(res)
	})
}