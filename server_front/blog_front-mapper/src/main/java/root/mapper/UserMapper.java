package root.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import root.model.SysUser;
import root.model.User;
import root.param.LoginParam;

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
	/**
	 * 是否存在用户名或邮箱
	 * @param param
	 * @return
	 */
	int countByUsernameOrEmail(LoginParam param);
	/**
	 * 用户名或邮箱查找用户
	 * @param param
	 * @return
	 */
	User getByUsernameOrEmail(LoginParam param);
	/**
	 * id查找用户
	 * @param userId
	 * @return
	 */
	User InfoById(@Param("id") Integer id);
	/**
	 * 是否存在昵称
	 * @param nickname
	 * @return
	 */
	int countByNickName(@Param("nickname") String nickname);
	/**
	 * 是否存在id
	 * @param id
	 * @return
	 */
	int countById(@Param("id") Integer id);
	/**
	 * 获得Id列表中所有的用户信息
	 * @param fromIdList
	 * @return
	 */
	List<User> getListByIdList(@Param("idList") List<Integer> idList);
	/**
	 * 评论者的评论数量增加
	 * @param commentUserId
	 */
	void commentSumIncr(@Param("id") Integer id);
	/**
	 * 修改用户密码
	 * @param id
	 * @param encrypt
	 */
	void updatePass(@Param("id") Integer id,@Param("password") String password);    
}