package root.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import root.model.Song;

@Mapper
public interface SongMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Song record);

    int insertSelective(Song record);

    Song selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Song record);

    int updateByPrimaryKeyWithBLOBs(Song record);

    int updateByPrimaryKey(Song record);
    /**
     * 获得总数
     * @return
     */
	Long countAll();
	/**
	 * 获得分页数据
	 * @param skip
	 * @param pageSize
	 * @return
	 */
	List<Song> page(@Param("skip") Integer skip,@Param("pageSize") Integer pageSize);
	/**
	 * 批量删除
	 * @param ids
	 */
	void delBatch(@Param("ids") List<Integer> ids);
	/**
	 * 是否存在
	 * @param id
	 * @return
	 */
	int countById(@Param("id") Integer id);
	/**
	 * 符合搜索条件的总数，包括歌名,歌手名,分类名
	 * @param keyword
	 * @return
	 */
	Long countByKeyword(@Param("keyword") String keyword);
	/**
	 * 符合搜素条件的分页数据，包括歌名，歌手名，分类名
	 * @param skip
	 * @param pageSize
	 * @param keyword
	 * @return
	 */
	List<Song> pageByKeyword(@Param("skip") Integer skip,@Param("pageSize") Integer pageSize,
			@Param("keyword") String keyword);
}