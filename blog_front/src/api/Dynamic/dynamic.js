export function getInitiateApi(currentPage,pageSize,userId,success) {
	axios.get(global.serverUrl+'/dynamic/initiate',{
		params:{currentPage,pageSize,userId}
	}).then((res)=>{
		success(res)
	})
}

export function getReceiveApi(currentPage,pageSize,userId,success) {
	axios.get(global.serverUrl+'/dynamic/receive',{
		params:{currentPage,pageSize,userId}
	}).then((res)=>{
		success(res)
	})
}