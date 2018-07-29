package root.mapper;

import root.model.ArticaleCategory;

public interface ArticaleCategoryMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(ArticaleCategory record);

    int insertSelective(ArticaleCategory record);

    ArticaleCategory selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(ArticaleCategory record);

    int updateByPrimaryKey(ArticaleCategory record);
}