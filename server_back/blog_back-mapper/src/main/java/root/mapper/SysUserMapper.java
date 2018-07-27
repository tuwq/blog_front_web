package root.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import root.model.SysUser;

@Mapper
public interface SysUserMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(SysUser record);

    int insertSelective(SysUser record);

    SysUser selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(SysUser record);

    int updateByPrimaryKey(SysUser record);
    
    /**
     * 是否存在用户,根据用户名
     * @param username
     * @return
     */
	int CountfindByUsername(@Param("username") String username);
	/**
	 * 查询密码，根据用户名
	 * @param username
	 */
	SysUser findSysUserByUsername(@Param("username") String username);
	/**
	 * 获得用户信息
	 * @param userId
	 */
	SysUser InfoById(@Param("id") Integer id);
	/**
	 * 后台用户的前台账号
	 * @param userId
	 * @return
	 */
	Integer FrontUserIdById(@Param("id") Integer id);
}