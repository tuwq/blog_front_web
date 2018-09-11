export function getCategoryListApi(success) {
	axios.get(global.serverUrl+'/sys/category/info')
	.then((res)=>{
		success(res)
	})
}