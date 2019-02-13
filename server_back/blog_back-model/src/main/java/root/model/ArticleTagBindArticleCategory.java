package root.model;

public class ArticleTagBindArticleCategory {
    private Integer id;

    private Integer articleCategoryId;

    private Integer articleTagId;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getArticleCategoryId() {
        return articleCategoryId;
    }

    public void setArticleCategoryId(Integer articleCategoryId) {
        this.articleCategoryId = articleCategoryId;
    }

    public Integer getArticleTagId() {
        return articleTagId;
    }

    public void setArticleTagId(Integer articleTagId) {
        this.articleTagId = articleTagId;
    }
}