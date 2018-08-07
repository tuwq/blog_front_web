package root.mapper;

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
}