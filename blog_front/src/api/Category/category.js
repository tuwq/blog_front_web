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

export function articaleCategoryApi(success) {
	axios.get(global.serverUrl+'/articleCategory/articaleCategory/'+global.articaleCategoryQuantity)
	.then((res)=>{
		success(res)
	})
}

export function nodeCategoryApi(success) {
	axios.get(global.serverUrl+'/articleCategory/nodeCategory/'+global.nodeCategoryQuantity)
	.then((res)=>{
		success(res)
	})
}

export function shortCodeCategoryApi(success) {
	axios.get(global.serverUrl+'/articleCategory/shortCodeCategory/'+global.shortCodeCategoryQuantity)
	.then((res)=>{
		success(res)
	})
}

export function chatCategoryApi(success) {
	axios.get(global.serverUrl+'/articleCategory/chatCategory/'+global.chatCategoryQuantity)
	.then((res)=>{
		success(res)
	})
}

export function artHotDiscussApi(success) {
	axios.get(global.serverUrl+'/articleCategory/hotDiscuss/'+global.artHotDiscussQuantity)
	.then((res)=>{
		success(res)
	})
}


export function randomArticleApi(success, quantity) {
	quantity = quantity>0?quantity:global.randomArticleQuantity
	axios.get(global.serverUrl+'/articleCategory/randomArticle/' + quantity)
	.then((res)=>{
		success(res)
	})
}