package root.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import root.model.User;
@Mapper
public interface UserMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(User record);

    int insertSelective(User record);

    User selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(User record);

    int updateByPrimaryKey(User record);
    /**
     * 更新文章数+1
     * @param frontId
     */
	void increaseArtSum(@Param("id") Integer id);
	/**
	 * 所有用户的数量
	 * @return
	 */
	Long countAll();
	/**
	 * 获得用户数据信息
	 * @param skip
	 * @param pageSize
	 * @return
	 */
	List<User> page(@Param("skip") Integer skip,@Param("pageSize") Integer pageSize);
	/**
	 * 获得符合搜索条件的用户数量
	 * @param keyword
	 * @return
	 */
	Long countByKeyWord(@Param("keyword") String keyword);
	/**
	 * 获得符合搜索条件的数据
	 * @param skip
	 * @param pageSize
	 * @param keyword
	 * @return
	 */
	List<User> pageByKeyword(@Param("skip") Integer skip,@Param("pageSize") Integer pageSize,@Param("keyword") String keyword);
	/**
	 * 批量修改用户的禁言状态
	 * @param ids
	 */
	void updateBatch(@Param("ids") List<Integer> ids);
}