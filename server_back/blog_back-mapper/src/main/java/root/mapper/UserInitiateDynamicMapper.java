package root.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import root.model.UserInitiateDynamic;

@Mapper
public interface UserInitiateDynamicMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(UserInitiateDynamic record);

    int insertSelective(UserInitiateDynamic record);

    UserInitiateDynamic selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(UserInitiateDynamic record);

    int updateByPrimaryKey(UserInitiateDynamic record);
    /**
     * 获得评论id的主动动态
     * @param ids
     * @return
     */
	List<Integer> getIdsByCommentIds(@Param("commentIds") List<Integer> ids);
	/**
	 * 批量删除主动动态
	 * @param initiateIds
	 */
	void delBatch(@Param("ids") List<Integer> ids);
}