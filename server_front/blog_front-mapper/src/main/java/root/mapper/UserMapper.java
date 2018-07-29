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
     * 是否存在用户名
     * @param username
     * @return
     */
	int countByUsername(@Param("username") String username);
	/**
	 * 是否存在邮箱
	 * @param email
	 * @return
	 */
	int countByEmail(@Param("email") String email);
	/**
	 * 邮箱查找用户
	 * @param redisEmail
	 * @return
	 */
	User getByEmail(@Param("email") String email);
	/**
	 * 邮箱密钥查找用户
	 * @param key
	 * @return
	 */
	User getByActivationCode(@Param("key") String key);
    
}