package root.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import root.model.CommentUser;

public interface CommentUserMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(CommentUser record);

    int insertSelective(CommentUser record);

    CommentUser selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(CommentUser record);

    int updateByPrimaryKey(CommentUser record);
    /**
     * 批量删除评论用户关系
     * @param ids
     */
	void delBatch(@Param("ids") List<Integer> ids);
}