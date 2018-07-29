package root.mapper;

import org.apache.ibatis.annotations.Mapper;

import root.model.CommentUser;

@Mapper
public interface CommentUserMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(CommentUser record);

    int insertSelective(CommentUser record);

    CommentUser selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(CommentUser record);

    int updateByPrimaryKey(CommentUser record);
}