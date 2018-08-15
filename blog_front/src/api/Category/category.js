export function categoryPageApi(currentPage,pageSize,categoryId,success) {
	axios.get(global.serverUrl+'/category/list',{
		params: {currentPage,pageSize,categoryId}
	}).then((res)=>{
		success(res)
	})
}

export function artWeightApi(success) {
	axios.get(global.serverUrl+'/category/artWeight/'+global.artWeightQuantity)
	.then((res)=>{
		success(res)
	})
}

export function artNewTimeApi(success) {
	axios.get(global.serverUrl+'/category/newTime/'+global.artNewTimeQuantity)
	.then((res)=>{
		success(res)
	})
}

export function artPraiseApi(success) {
	axios.get(global.serverUrl+'/category/praise/'+global.articalePraiseQuantity)
	.then((res)=>{
		success(res)
	})
}

export function articaleCategoryApi(success) {
	axios.get(global.serverUrl+'/category/articaleCategory/'+global.articaleCategoryQuantity)
	.then((res)=>{
		success(res)
	})
}

export function nodeCategoryApi(success) {
	axios.get(global.serverUrl+'/category/nodeCategory/'+global.nodeCategoryQuantity)
	.then((res)=>{
		success(res)
	})
}

export function shortCodeCategoryApi(success) {
	axios.get(global.serverUrl+'/category/shortCodeCategory/'+global.shortCodeCategoryQuantity)
	.then((res)=>{
		success(res)
	})
}

export function chatCategoryApi(success) {
	axios.get(global.serverUrl+'/category/chatCategory/'+global.chatCategoryQuantity)
	.then((res)=>{
		success(res)
	})
}

export function artHotDiscussApi(success) {
	axios.get(global.serverUrl+'/category/hotDiscuss/'+global.artHotDiscussQuantity)
	.then((res)=>{
		success(res)
	})
}