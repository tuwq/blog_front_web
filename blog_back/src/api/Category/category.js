export function getCategoryListApi(success) {
	axios.get('/sys/category/info')
	.then((res)=>{
		success(res)
	})
}