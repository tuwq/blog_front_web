export function getArticleCategoryAllApi(success) {
	axios.get(global.serverUrl+'/sys/articleCategory/all')
	.then((res)=>{
		success(res)
	})
}