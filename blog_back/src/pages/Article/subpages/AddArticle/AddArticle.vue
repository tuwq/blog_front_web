<template>
  <div id="AddArticle" class="AddArticle">
     <div class="wrap">
     		<div class="markdownEditor" id="editor">
           <button @click="uploadimg" class="uploadBtn">替换图片地址</button>
           <button @click="finish" class="finishBtn">完成</button>
     			 <mavon-editor style="height: 100%" v-model="content" ref=md @imgAdd="$imgAdd" @imgDel="$imgDel"></mavon-editor>
     		</div>
        <ArticleTemplate ref="$addTemplate" :content="content"/>
     </div>
     <div class="info">
        <div class="title">
          <h2>新增文章</h2>
          <input v-model="title" type="text" placeholder="文章标题">
          封面<input type="file" class="uploadCover" ref="$addCover">
          <div class="faceCover" v-if="faceCover"><img :src="artimgUrl+faceCover" alt="cover"/></div>
        </div>
        <div class="categroy">
          <h2>文章分类</h2>
          <div class="checkbox-group" v-if="categoryList">
            <div class="checkbox-control" v-for="(item,index) in categoryList" :key="item.id">
              <label for="article">{{item.name}}</label> 
              <input type="checkbox" id="article" :value="item.id" v-model="categoryNames">
            </div>
          </div>
          <div><input type="number" v-model="weight" placeholder="权重"></div>
        </div>
     </div>
  </div>
</template>

<script type="text/ecmascript-6">
    import { mavonEditor } from 'mavon-editor'
    import 'mavon-editor/dist/css/index.css'
    import { addArticleApi,getImgURIApi,getFaceCoverUrlApi } from 'api/Article/article'
    import { getCategoryListApi } from 'api/Category/category'
    import { checkContent } from 'base/js/check'
    import ArticleTemplate from '../ArticleTemplate/ArticleTemplate'
  export default {  
    data() {
    	return {
        title: '',
        weight: 0,
    		categoryNames: [],
        categoryList: [],
        content: '',
        img_file: {},
        faceCover: '',
        artimgUrl: global.artimgUrl
    	}
    },
    created() {
      getCategoryListApi((res)=>{
        if (res.data.code == 200) {
         this.categoryList = res.data.result
        }
      })
    },
    mounted() {
      $(this.$refs.$addCover).on('change',()=>{
        this.uploadCover()
      })
    },
    destroyed() {
      $(this.$refs.$addCover).off('change')
    },
    methods: {
      uploadCover() {
        var file = $(this.$refs.$addCover)[0].files[0]
        var formdata = new FormData()
        formdata.append('faceCover',file)
        formdata.append("coverImg", this.faceCover)
        getFaceCoverUrlApi(formdata,(res)=>{
          if (res.data.code == 200) {
            this.faceCover = res.data.imgNodes[0].path
          }
        })
      },
      // 绑定@imgAdd event
      $imgAdd(pos, $file){
          // 缓存图片信息
          this.img_file[pos] = $file;
      },
      $imgDel(file){
          delete this.img_file[file[1]];
      },
      uploadimg($e) {
        if(JSON.stringify(this.img_file)=="{}"){return;}
        // 第一步.将图片上传到服务器.
        var formdata = new FormData();
        for(var _img in this.img_file){
            formdata.append('fileArray', this.img_file[_img])
        }
        getImgURIApi(formdata,(res)=>{
           if (res.data.code == 200) {
             for(var img in res.data.imgNodes) {
              this.$refs.md.$img2Url(img,res.data.imgNodes[img].path)
             }
             alert('上传成功')
           }
        })
      },
      finish() {
        console.log(this.weight)
        if (checkContent(this.title,this.categoryNames,this.content,this.faceCover)) {
          addArticleApi(this.title,this.weight,this.categoryNames,this.content,this.faceCover,(res)=>{
            if(res.data.code==200) {
                alert('发表成功了')
                this.title = ''
                this.categoryNames=[]
                this.content=''
            }
          })
        }
      }
    },
    watch: {
      content(oldval,newval) {
         if(newval!='') {
          this.$refs.$addTemplate.mountedContent()
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
  @import "./AddArticle.scss";
  @import "./MAddArticle.scss";
</style>

<!--  -->