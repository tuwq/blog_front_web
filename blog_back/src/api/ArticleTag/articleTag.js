export function getArticleTagAllApi(success) {
	axios.get(global.serverUrl+'/sys/articleTag/all')
	.then((res)=>{
		success(res)
	})
}