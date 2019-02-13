package root.mapper;

import root.model.ArticleBindArticleTag;

public interface ArticleBindArticleTagMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(ArticleBindArticleTag record);

    int insertSelective(ArticleBindArticleTag record);

    ArticleBindArticleTag selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(ArticleBindArticleTag record);

    int updateByPrimaryKey(ArticleBindArticleTag record);
}