package root.mapper;


import root.model.ArticleBindArticleCategory;

public interface ArticleBindArticleCategoryMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(ArticleBindArticleCategory record);

    int insertSelective(ArticleBindArticleCategory record);

    ArticleBindArticleCategory selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(ArticleBindArticleCategory record);

    int updateByPrimaryKey(ArticleBindArticleCategory record);
}