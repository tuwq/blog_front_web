package root.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ArticleBindArticleCategory {
    private Integer id;

    private Integer articleId;

    private Integer articleCategoryId;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

	public Integer getArticleId() {
		return articleId;
	}

	public void setArticleId(Integer articleId) {
		this.articleId = articleId;
	}

	public Integer getArticleCategoryId() {
		return articleCategoryId;
	}

	public void setArticleCategoryId(Integer articleCategoryId) {
		this.articleCategoryId = articleCategoryId;
	}
    
}