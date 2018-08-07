package root.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import root.model.Comment;
import root.param.PageParam;
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
     * 所有的评论数
     * @return
     */
	Long countAll();
	/**
	 * 获得分页数据和用户信息文章信息
	 * @param param
	 * @return
	 */
	List<Comment> pageWithUserAndArtList(PageParam param);
	/**
	 * 获得满足搜索条件评论数量
	 * @param keyword
	 * @return
	 */
	Long countAllByKeyWord(@Param("keyword") String keyword);
	/**
	 * 获得满足搜索条件的评论
	 * @param currentPage
	 * @param pageSize
	 * @param keyword
	 * @return
	 */
	List<Comment> pageWithUserAndArtListByKeyWord(@Param("skip") Integer skip,@Param("pageSize") Integer pageSize,@Param("keyword") String keyword);
	/**
	 * 批量删除评论
	 * @param ids
	 */
	void delBatch(@Param("ids") List<Integer> ids);
}