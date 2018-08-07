<template>
  <div class="DataCard">
  	<div class="card-list">
  		<div class="card-control bac_lightred">
		    <div class="card-wrap">
 				<div class="meta">
 					<span><i class="fa fa-eye media-object"></i></span>
 					<div class="info">
 						<small>访问数</small>
 						<h2>{{cardData.accessSum}}</h2>
 					</div>
 				</div>
		 	</div>
	 	</div>
	 	<div class="card-control bac_lightblue">
		    <div class="card-wrap">
 				<div class="meta">
 					<span><i class="fa fa-pencil media-object"></i></span>
 					<div class="info">
 						<small>文章数</small>
 						<h2>{{cardData.totalArticleSum}}</h2>
 					</div>
 				</div>
		 	</div>
	 	</div>
	 	<div class="card-control bac_lightgreen">
		    <div class="card-wrap">
 				<div class="meta">
 					<span><i class="fa fa fa-cubes media-object"></i></span>
 					<div class="info">
 						<small>评论数</small>
 						<h2>{{cardData.totalCommentSum}}</h2>
 					</div>
 				</div>
		 	</div>
	 	</div>
	 	<div class="card-control bac_lightblack">
		    <div class="card-wrap">
 				<div class="meta">
 					<span><i class="fa fa-users media-object"></i></span>
 					<div class="info">
 						<small>用户数</small>
 						<h2>{{cardData.totalUserSum}}</h2>
 					</div>
 				</div>
		 	</div>
	 	</div>
 	</div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {  
  	props: {
      cardData: {
        type: Object,
        default: null
      }
    }
  }
</script>

<style lang="scss" scoped type="text/css">
  @import "./DataCard.scss";
  @import "./MDataCard.scss";
</style>
