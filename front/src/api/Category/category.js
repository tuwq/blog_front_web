export function categoryPageByIdApi(currentPage,pageSize,categoryId,success) {
	axios.get(global.serverUrl+'/articleCategory/list',{
		params: {currentPage,pageSize,categoryId}
	}).then((res)=>{
		success(res)
	})
}

export function categoryAllApi(success) {
	axios.get(global.serverUrl+'/articleCategory/all')
	.then((res)=>{
		success(res)
	})
}

export function artWeightApi(success, quantity) {
	quantity = quantity>0?quantity:global.artWeightQuantity
	axios.get(global.serverUrl+'/articleCategory/artWeight/'+ quantity)
	.then((res)=>{
		success(res)
	})
}

export function artNewTimeApi(success, quantity) {
	quantity = quantity>0?quantity:global.artNewTimeQuantity
	axios.get(global.serverUrl+'/articleCategory/newTime/' + quantity)
	.then((res)=>{
		success(res)
	})
}

export function artPraiseApi(success) {
	axios.get(global.serverUrl+'/articleCategory/praise/'+global.articalePraiseQuantity)
	.then((res)=>{
		success(res)
	})
}

export function findListByArticleAndQuantityApi(success, articleCategoryId, quantity) {
	axios.get(global.serverUrl+'/articleCategory/findListByArticleAndQuantity/' + quantity,{
		params: { articleCategoryId }
	}).then((res)=>{
		success(res)
	})
}

export function artHotDiscussApi(success) {
	axios.get(global.serverUrl+'/articleCategory/hotDiscuss/'+global.artHotDiscussQuantity)
	.then((res)=>{
		success(res)
	})
}

export function randomArticleApi(success, articleCategoryId, quantity) {
	quantity = quantity>0?quantity:global.randomArticleQuantity
	axios.get(global.serverUrl+'/articleCategory/randomArticle/' + quantity,{
		params: { articleCategoryId }
	}).then((res)=>{
		success(res)
	})
}