package root.mapper;

import org.apache.ibatis.annotations.Mapper;

import root.model.ArticleBindArticleTag;

@Mapper
public interface ArticleBindArticleTagMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(ArticleBindArticleTag record);

    int insertSelective(ArticleBindArticleTag record);

    ArticleBindArticleTag selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(ArticleBindArticleTag record);

    int updateByPrimaryKey(ArticleBindArticleTag record);
}