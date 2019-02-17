<template>
  <div id="EditArticle" class="EditArticle">
      <div class="wrap">
     		<div class="markdownEditor" id="editor">
           <button @click="uploadimg" class="uploadBtn">替换图片地址</button>
           <button @click="finish" class="finishBtn">完成修改</button>
     			 <mavon-editor style="height: 100%" v-model="content" ref=updatemd @imgAdd="$imgAdd" @imgDel="$imgDel"></mavon-editor>
     		</div>
        <ArticleTemplate v-if="content" ref="$editTemplate" :content="content"/>
      </div>
      <div class="info">
        <div class="title">
          <h2>新增文章</h2>
          <input v-model="title" type="text" placeholder="文章标题">
           封面<input type="file" class="uploadCover" ref="$updateCover">
          <div class="faceCover" v-if="faceCover"><img :src="artimgUrl+faceCover" alt="cover"/></div>
        </div>
        <div class="categroy">
          <h2>文章分类</h2>
          <div class="checkbox-group" v-if="articleCategoryList">
            <div class="checkbox-control" v-for="(item,index) in articleCategoryList" :key="item.id">
              <label for="articleCategory">{{item.name}}</label> 
              <input type="checkbox" id="articleCategory" :value="item.id" v-model="articleCategoryIds">
            </div>
          </div>
          <div><input type="number" v-model="weight" placeholder="权重"></div>
        </div>
        <div class="categroy">
          <h2>文章标签</h2>
          <div class="checkbox-group" v-if="articleTagList">
            <div class="checkbox-control" v-for="(item,index) in articleTagList" :key="item.id">
              <label for="articleTag">{{item.name}}</label> 
              <input type="checkbox" id="articleTag" :value="item.id" v-model="articleTagIds">
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { mavonEditor } from 'mavon-editor'
  import { getArticleDetailApi,updateArticleApi,getFaceCoverUrlApi,getImgURIApi } from 'api/Article/article'
  import { getArticleCategoryAllApi } from 'api/ArticleCategory/articleCategory'
  import { getArticleTagAllApi } from 'api/ArticleTag/articleTag'
  import 'mavon-editor/dist/css/index.css'
  import ArticleTemplate from '../ArticleTemplate/ArticleTemplate'
  import { isNumber } from 'base/js/check'
  export default {  
    data() {
    	return {
	   	  articleCategoryIds: [],
        articleTagIds: [],
        articleCategoryList: [],
        articleTagList: [],
	      content: '',
	      img_file: {},
        title: '',
        weight: 0,
        faceCover: '',
        artimgUrl: global.artimgUrl
    	}
    },
    mounted() {
      $(this.$refs.$updateCover).on('change',()=>{
        this.uploadCover()
      })
    },
    destroyed() {
      $(this.$refs.$updateCover).off('change')
    },
    created() {
      if(!isNumber(this.$route.params.id)) {
        this.$router.go(-1)
      }
      getArticleDetailApi(this.$route.params.id,(res)=>{
        if (res.data.code==200) {
            this.title = res.data.result.title
            this.weight = res.data.result.weight
            this.content = res.data.result.content
            this.articleCategoryIds = res.data.result.articleCategoryIds
            this.articleTagIds = res.data.result.articleTagIds
            this.faceCover = res.data.result.faceCover
        }
      })
      getArticleCategoryAllApi((res)=>{
        if (res.data.code == 200) {
         this.articleCategoryList = res.data.result
        }
      })
      getArticleCategoryAllApi((res)=>{
        if (res.data.code == 200) {
         this.articleCategoryList = res.data.result
        }
      })
      getArticleTagAllApi((res)=>{
        if (res.data.code == 200) {
         this.articleTagList = res.data.result
        }
      })
    },
    methods: {
      uploadCover() {
        var file = $(this.$refs.$updateCover)[0].files[0]
        var formdata = new FormData()
        formdata.append('faceCover',file)
        formdata.append("coverImg", this.faceCover)
        getFaceCoverUrlApi(formdata,(res)=>{
          if (res.data.code == 200) {
             this.faceCover = res.data.imgNodes[0].path
          }
        })
      },
      finish() {
        updateArticleApi(this.$route.params.id,this.title,this.weight,this.articleCategoryIds,
          this.articleTagIds,this.content,this.faceCover,
          (res)=>{
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
        if(JSON.stringify(this.img_file)=="{}"){return;}
        var formdata = new FormData();
        for(var _img in this.img_file){
            formdata.append('fileArray', this.img_file[_img])
        }
        getImgURIApi(formdata,(res)=>{
          if (res.data.code == 200) {
            for(var img in res.data.imgNodes) {
              this.$refs.updatemd.$img2Url(img,res.data.imgNodes[img].path)
             }
             alert('上传成功')
          }
        })
      }
    },
    watch: {  
      content(oldval,newval) {
        if (newval!='') {
          this.$refs.$editTemplate.mountedContent()
        }
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