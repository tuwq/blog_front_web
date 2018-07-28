<template>
  <div id="ArticleTemplate" class="ArticleTemplate">
      <div class="article">
      	<!-- <div class="thumbnail"></div> -->
		<div class="content-wrapper">
			<div ref="$content" id="artContent" class="content">
				 
			</div>
		</div>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import marked from 'marked'
  import hljs from 'highlight.js'
  export default {  
    props: {
      content: {
        type: String,
        default: ''
      },
    },
    mounted() {
      hljs.initHighlightingOnLoad()
      this.mountedContent()
    },
    methods: {
    	mountedContent() {
        $('#artContent').html(marked(this.content))  
        $('#artContent pre code').each(function(i, block) {
          hljs.highlightBlock(block);
        });

    	}
    }
  }
</script>

<style lang="scss" type="text/css">
  @import "./ArticleTemplate.scss";
  @import "./MArticleTemplate.scss";
</style>
