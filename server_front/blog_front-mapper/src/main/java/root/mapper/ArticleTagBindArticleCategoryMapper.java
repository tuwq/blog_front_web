package root.mapper;

import root.model.ArticleTagBindArticleCategory;

public interface ArticleTagBindArticleCategoryMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(ArticleTagBindArticleCategory record);

    int insertSelective(ArticleTagBindArticleCategory record);

    ArticleTagBindArticleCategory selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(ArticleTagBindArticleCategory record);

    int updateByPrimaryKey(ArticleTagBindArticleCategory record);
}