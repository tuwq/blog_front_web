package root.mapper;

import org.apache.ibatis.annotations.Mapper;

import root.model.ArticleTagBindArticleCategory;

@Mapper
public interface ArticleTagBindArticleCategoryMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(ArticleTagBindArticleCategory record);

    int insertSelective(ArticleTagBindArticleCategory record);

    ArticleTagBindArticleCategory selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(ArticleTagBindArticleCategory record);

    int updateByPrimaryKey(ArticleTagBindArticleCategory record);
}