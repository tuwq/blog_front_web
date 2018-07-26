<template>
  <div id="EditArticle" class="EditArticle">
      <div class="wrap">
     	<div class="content">
     		<div class="title">
          <h2>更改文章</h2>
     			<input v-model="title" type="text" placeholder="文章标题">
     		</div>
     		<div class="categroy">
     			<h2>文章分类</h2>
     			<div class="checkbox-group">
	     			<div class="checkbox-control">
	     				<label for="article">文章</label> 
	     				<input type="checkbox" id="article" value="1" v-model="categoryNames">
	     			</div>
	     			<div class="checkbox-control">
		     			<label for="tutorial">教程</label>
						<input type="checkbox" id="checkbox" value="2" v-model="categoryNames">
					</div>
					<div class="checkbox-control">
						<label for="shortCode">短代码</label>
						<input type="checkbox" id="checkbox" value="3" v-model="categoryNames">
	     			</div>
	     			<div class="checkbox-control">
						<label for="leisure">个人闲谈</label>
						<input type="checkbox" id="leisure" value="4" v-model="categoryNames">
	     			</div>
     			</div>
     		</div>
     		<div class="markdownEditor" id="editor">
           <button @click="uploadimg" class="uploadBtn">上传图片</button>
           <button @click="finish" class="finishBtn">完成修改</button>
           <button @click="reMounted" class="MountedBtn">重新渲染</button>
     			 <mavon-editor style="height: 100%" v-model="content" ref=updatemd @imgAdd="$imgAdd" @imgDel="$imgDel"></mavon-editor>
     		</div>
     	</div>
     </div>
     <ArticleTemplate ref="$editTemplate" :content="content"/>
  </div>
</template>

<script type="text/ecmascript-6">
  import { mavonEditor } from 'mavon-editor'
  import { getArticleDetail,updateArticleApi } from 'api/Article/article'
  import 'mavon-editor/dist/css/index.css'
  import ArticleTemplate from '../ArticleTemplate/ArticleTemplate'
  export default {  
    data() {
    	return {
	    	  categoryNames: [],
	        content: '',
	        img_file: {},
          title: ''
    	}
    },
    created() {
      getArticleDetail(this.$route.params.id,(res)=>{
        if (res.data.code==200) {
            this.title = res.data.result.title
            this.content = res.data.result.content
            this.categoryNames = res.data.result.categoryIds
        }
      })
    },
    methods: {
      finish() {
        updateArticleApi(this.$route.params.id,this.title,this.categoryNames,this.content,(res)=>{
           if (res.data.code==200) {
            alert('修改成功了')
           }
        })
      },
      $imgAdd(pos,$file) {
        // pos为图片标志
        // 保存图片
        this.img_file[pos] = $file
      },
      $imgDel(pos) {
        delete this.img_file[pos]
      },
      uploadimg() {
        var formData = new FormData()
        for (var _img in this.img_file) {
          formData.append(_img,this.img_file[_img])
        }
        alert('上传成功')
      },
      reMounted() {
        this.$refs.$editTemplate.mountedContent()
      }
    },
    components: {
        mavonEditor,
        ArticleTemplate
    }
  }
</script>

<style lang="scss" scoped type="text/css">
  @import "./EditArticle.scss";
  @import "./MEditArticle.scss";
</style>
