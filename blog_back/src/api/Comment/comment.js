export function getCommentApi(currentPage,pageSize,success) {
	axios.get(global.serverUrl+'/sys/comment/page',{
		params: {currentPage,pageSize}
	}).then((res)=>{
		success(res)
	})
}

export function getSearchListApi(currentPage,pageSize,keyword,success) {
	axios.post(global.serverUrl+'/sys/comment/search',{
		currentPage,pageSize,keyword
	}).then((res)=>{
		success(res)
	})
}

export function delBatchApi(ids,success) {
	axios.delete(global.serverUrl+'/sys/comment/delBatch/'+ids)
	.then((res)=>{
		success(res)
	})
}