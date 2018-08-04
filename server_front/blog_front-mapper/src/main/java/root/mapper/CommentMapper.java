package root.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import root.model.Comment;

@Mapper
public interface CommentMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Comment record);

    int insertSelective(Comment record);

    Comment selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Comment record);

    int updateByPrimaryKeyWithBLOBs(Comment record);

    int updateByPrimaryKey(Comment record);
    /**
     * 获得文章的评论分页数据和每个评论的用户信息
     * @param skip
     * @param pageSize
     * @param articleId
     * @return
     */
	List<Comment> pageByArtIdWithUser(@Param("skip") Integer skip,@Param("pageSize") Integer pageSize,@Param("articleId") Integer articleId);
	/**
	 * 获得文章的评论总数
	 * @param articleId
	 * @return
	 */
	Long countByArtId(@Param("articleId") Integer articleId);
}