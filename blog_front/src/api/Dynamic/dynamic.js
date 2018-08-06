export function getInitiateApi(currentPage,pageSize,userId,success) {
	axios.get('/dynamic/initiate',{
		params:{currentPage,pageSize,userId}
	}).then((res)=>{
		success(res)
	})
}

export function getReceiveApi(currentPage,pageSize,userId,success) {
	axios.get('/dynamic/receive',{
		params:{currentPage,pageSize,userId}
	}).then((res)=>{
		success(res)
	})
}