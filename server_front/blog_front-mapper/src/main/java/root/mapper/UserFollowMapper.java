package root.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import root.model.UserFollow;

public interface UserFollowMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(UserFollow record);

    int insertSelective(UserFollow record);

    UserFollow selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(UserFollow record);

    int updateByPrimaryKey(UserFollow record);
    /**
     * 关注关系是否存在
     * @param userId
     * @param followId
     */
	int countByFromIdAndTargetId(@Param("fromId") Integer fromId,@Param("targetId") Integer targetId);
	/**
	 * 查找关注关系
	 * @param userId
	 * @param followId
	 * @return
	 */
	UserFollow getByFromIdAndTargetId(@Param("fromId") Integer fromId,@Param("targetId") Integer targetId);
	/**
	 * 查找被关注着下所有的粉丝Id
	 * @param id
	 * @return
	 */
	List<Integer> getFromIdListByTargetId(@Param("targetId") Integer targetId);
	/**
	 * 查找id对目标的关注状态
	 * @param userId
	 * @param fansId
	 * @return
	 */
	Integer getStatusByFromId(@Param("fromId") Integer fromId,@Param("targetId") Integer targetId);
	/**
	 * 查找粉丝所关注的目标列表
	 * @param id
	 * @return
	 */
	List<Integer> getTargetIdListByFromId(@Param("fromId") Integer fromId);
	/**
	 * 关注了多少人
	 * @param id
	 * @return
	 */
	Integer countByFromId(@Param("fromId") Integer fromId);
	/**
	 * 被多少人关注了
	 * @param id
	 * @return
	 */
	Integer countByTargetId(@Param("targetId") Integer targetId);
}