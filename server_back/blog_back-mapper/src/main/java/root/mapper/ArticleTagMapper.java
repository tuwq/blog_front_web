package root.mapper;

import org.apache.ibatis.annotations.Mapper;

import root.model.ArticleTag;

@Mapper
public interface ArticleTagMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(ArticleTag record);

    int insertSelective(ArticleTag record);

    ArticleTag selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(ArticleTag record);

    int updateByPrimaryKey(ArticleTag record);
}