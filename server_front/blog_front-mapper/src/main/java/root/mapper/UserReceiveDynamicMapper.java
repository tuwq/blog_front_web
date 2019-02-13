package root.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import root.model.UserInitiateDynamic;
import root.model.UserReceiveDynamic;

public interface UserReceiveDynamicMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(UserReceiveDynamic record);

    int insertSelective(UserReceiveDynamic record);

    UserReceiveDynamic selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(UserReceiveDynamic record);

    int updateByPrimaryKey(UserReceiveDynamic record);
    /**
     * 获得用户接受动态的总数量
     * @param userId
     * @return
     */
	Long countByReceiveUserId(@Param("receiveUserId") Integer userId);
	/**
	 * 用户接受的用户动态信息
	 * @param userId
	 * @return
	 */
	List<UserInitiateDynamic> getInitiateDynamicListByReceiveUserId(@Param("skip") Integer skip,@Param("pageSize") Integer pageSize, @Param("receiveUserId")Integer userId);
	/**
	 * 修改动态的观看状态
	 * @param list
	 */
	void updateBatchVisit(@Param("ids") List<Integer> ids);
	/**
	 * 获得用户接收动态id
	 * @param skip
	 * @param pageSize
	 * @param userId
	 * @return
	 */
	List<Integer> getIdsByReceiverUserId(@Param("skip") Integer skip,@Param("pageSize") Integer pageSize, @Param("receiveUserId")Integer userId);
	/**
	 * 获得新动态的数量
	 * @param id
	 * @return
	 */
	Long countByReceiveUserIdAndVisit(@Param("receiveUserId") Integer receiveUserId);
	/**
	 * 获得用户接收动态对象
	 * @param skip
	 * @param pageSize
	 * @param userId
	 * @return
	 */
	List<UserReceiveDynamic> getByReceiverUserId(@Param("skip") Integer skip,@Param("pageSize") Integer pageSize, @Param("receiveUserId")Integer userId);
	
}