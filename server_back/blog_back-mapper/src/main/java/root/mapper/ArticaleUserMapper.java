package root.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import root.model.ArticaleUser;

public interface ArticaleUserMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(ArticaleUser record);

    int insertSelective(ArticaleUser record);

    ArticaleUser selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(ArticaleUser record);

    int updateByPrimaryKey(ArticaleUser record);
    /**
     * 批量删除文章用户关系
     * @param ids
     */
	void delBatch(@Param("ids") List<Integer> ids);
}