package root.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import root.model.Comment;
import root.model.User;

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
	/**
	 * 评论是否存在
	 * @param rootId
	 * @return
	 */
	int countById(@Param("id") Integer id);
	/**
	 * 子评论的总数
	 * @param rootId
	 * @return
	 */
	Long countChildByRootId(@Param("rootId") Integer rootId);
	/**
	 * 子评论的数据和每个评论的用户信息
	 * @param rootId
	 * @return
	 */
	List<Comment> getChildByRootIdWithUser(@Param("skip") Integer skip,@Param("pageSize") Integer pageSize,@Param("rootId") Integer rootId);
	/**
	 * 获得评论者的id
	 * @param parentId
	 * @return
	 */
	Integer getUserIdById(@Param("id") Integer id);
	/**
	 * 获得评论的用户信息
	 * @param id
	 * @return
	 */
	User getUserById(@Param("id") Integer id);
	/**
	 * 获得评论的信息和评论的用户信息
	 * @param rootId
	 * @return
	 */
	Comment getByIdWithUser(@Param("id") Integer id);

}