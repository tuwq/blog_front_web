export function categoryPageApi(currentPage,pageSize,categoryId,success) {
	axios.get('/category/list',{
		params: {currentPage,pageSize,categoryId}
	}).then((res)=>{
		success(res)
	})
}

export function artWeightApi(success) {
	axios.get('/category/artWeight/'+global.artWeightQuantity)
	.then((res)=>{
		success(res)
	})
}

export function artNewTimeApi(success) {
	axios.get('/category/newTime/'+global.artNewTimeQuantity)
	.then((res)=>{
		success(res)
	})
}

export function artPraiseApi(success) {
	axios.get('/category/praise/'+global.articalePraiseQuantity)
	.then((res)=>{
		success(res)
	})
}

export function articaleCategoryApi(success) {
	axios.get('/category/articaleCategory/'+global.articaleCategoryQuantity)
	.then((res)=>{
		success(res)
	})
}

export function tutorialCategoryApi(success) {
	axios.get('/category/tutorialCategory/'+global.tutorialCategoryQuantity)
	.then((res)=>{
		success(res)
	})
}

export function shortCodeCategoryApi(success) {
	axios.get('/category/shortCodeCategory/'+global.shortCodeCategoryQuantity)
	.then((res)=>{
		success(res)
	})
}

export function chatCategoryApi(success) {
	axios.get('/category/chatCategory/'+global.chatCategoryQuantity)
	.then((res)=>{
		success(res)
	})
}

export function artHotDiscussApi(success) {
	axios.get('/category/hotDiscuss/'+global.artHotDiscussQuantity)
	.then((res)=>{
		success(res)
	})
}