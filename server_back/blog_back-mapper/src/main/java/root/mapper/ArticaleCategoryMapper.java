package root.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import root.model.ArticaleCategory;

@Mapper
public interface ArticaleCategoryMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(ArticaleCategory record);

    int insertSelective(ArticaleCategory record);

    ArticaleCategory selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(ArticaleCategory record);

    int updateByPrimaryKey(ArticaleCategory record);
    
    /**
     * 批量添加文章分类关系
     */
    int insertBatch(@Param("list") List<ArticaleCategory> list);
    /**
     * 批量删除文章分类关系
     * @param ids
     */
	void delBatch(@Param("ids") List<Integer> ids);
	
}