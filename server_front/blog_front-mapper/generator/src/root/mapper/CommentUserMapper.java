package root.mapper;

import root.model.CommentUser;

public interface CommentUserMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(CommentUser record);

    int insertSelective(CommentUser record);

    CommentUser selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(CommentUser record);

    int updateByPrimaryKey(CommentUser record);
}