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
     * 获得用户的所有发起动态
     * @param userId 
     * @param integer 
     * @param userId
     * @return
     */
	List<UserInitiateDynamic> getListByInitiateUserId(@Param("skip") Integer skip,@Param("pageSize") Integer pageSize,@Param("initiateUserId") Integer InitiateUserId);
	/**
	 * 获得用户的所有发起动态数量
	 * @param userId
	 * @return
	 */
	Long countByInitiateUserId(@Param("initiateUserId") Integer InitiateUserId);
}