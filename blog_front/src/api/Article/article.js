export function artPraiseApi(success) {
	axios.get('/articale/praise/'+global.articalePraiseQuantity)
	.then((res)=>{
		success(res)
	})
}

export function articaleCategoryApi(success) {
	axios.get('/articale/articaleCategory/'+global.articaleCategoryQuantity)
	.then((res)=>{
		success(res)
	})
}

export function tutorialCategoryApi(success) {
	axios.get('/articale/tutorialCategory/'+global.tutorialCategoryQuantity)
	.then((res)=>{
		success(res)
	})
}

export function shortCodeCategoryApi(success) {
	axios.get('/articale/shortCodeCategory/'+global.shortCodeCategoryQuantity)
	.then((res)=>{
		success(res)
	})
}

export function chatCategoryApi(success) {
	axios.get('/articale/chatCategory/'+global.chatCategoryQuantity)
	.then((res)=>{
		success(res)
	})
}

export function artHotDiscussApi(success) {
	axios.get('/articale/hotDiscuss/'+global.artHotDiscussQuantity)
	.then((res)=>{
		success(res)
	})
}
