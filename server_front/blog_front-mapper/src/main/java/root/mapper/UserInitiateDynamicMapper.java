package root.mapper;

import org.apache.ibatis.annotations.Mapper;

import root.model.UserInitiateDynamic;

@Mapper
public interface UserInitiateDynamicMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(UserInitiateDynamic record);

    int insertSelective(UserInitiateDynamic record);

    UserInitiateDynamic selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(UserInitiateDynamic record);

    int updateByPrimaryKey(UserInitiateDynamic record);
}