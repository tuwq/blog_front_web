package root.mapper;

import org.apache.ibatis.annotations.Mapper;

import root.model.ArticaleCategory;

@Mapper
public interface ArticaleCategoryMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(ArticaleCategory record);

    int insertSelective(ArticaleCategory record);

    ArticaleCategory selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(ArticaleCategory record);

    int updateByPrimaryKey(ArticaleCategory record);
}