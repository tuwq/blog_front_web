package root.mapper;

import org.apache.ibatis.annotations.Mapper;

import root.model.UserDynamic;

@Mapper
public interface UserDynamicMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(UserDynamic record);

    int insertSelective(UserDynamic record);

    UserDynamic selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(UserDynamic record);

    int updateByPrimaryKey(UserDynamic record);
}