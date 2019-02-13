package root.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import root.model.Friend;

public interface FriendMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Friend record);

    int insertSelective(Friend record);

    Friend selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Friend record);

    int updateByPrimaryKey(Friend record);
    /**
     * 友链数量
     * @return
     */
	Long countAll();
	/**
	 * 根据id列表获得所有友链
	 * @return
	 */
	List<Friend> getAllByIds(@Param("ids") List<Integer> ids);
	/**
	 * 获得随机id列表
	 * @return
	 */
	List<Integer> randomAll();

}