package root.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import root.model.Friend;

@Mapper
public interface FriendMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Friend record);

    int insertSelective(Friend record);

    Friend selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Friend record);

    int updateByPrimaryKey(Friend record);
    /**
     * 获得友链总数
     * @return
     */
	Long countAll();
	/**
	 * 获得分页数据
	 * @param currentPage
	 * @param pageSize
	 * @return
	 */
	List<Friend> page(@Param("skip") Integer skip,@Param("pageSize") Integer pageSize);
	/**
	 * 批量删除
	 * @param ids
	 */
	void delBatch(@Param("ids") List<Integer> ids);
	/**
	 * 友链信息
	 * @param id
	 * @return
	 */
	Friend info(@Param("id") Integer id);
	/**
	 * 是否存在
	 * @param id
	 * @return
	 */
	int countById(@Param("id") Integer id);
}