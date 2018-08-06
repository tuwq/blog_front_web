export function getinitiateApi(currentPage,pageSize,userId,success) {
	axios.get('/dynamic/initiate',{
		params:{currentPage,pageSize,userId}
	}).then((res)=>{
		success(res)
	})
}