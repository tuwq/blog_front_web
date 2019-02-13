package root.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import root.model.Song;

public interface SongMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Song record);

    int insertSelective(Song record);

    Song selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Song record);

    int updateByPrimaryKeyWithBLOBs(Song record);

    int updateByPrimaryKey(Song record);
    /**
     * 分类的歌曲数量
     * @param categoryId
     * @return
     */
	Long countByCategory(@Param("categoryId") Integer categoryId);
	/**
	 * 分类的歌曲数据
	 * @param skip
	 * @param pageSize
	 * @param categoryId
	 * @return
	 */
	List<Song> pageByCategory(@Param("skip") Integer skip,@Param("pageSize") Integer pageSize,@Param("categoryId") Integer categoryId);
	/**
	 * 符合条件的歌曲,包括歌名,歌手,歌曲分类
	 * @param keyword
	 * @return
	 */
	Long countByKeyword(@Param("keyword") String keyword);
	/**
	 * 符合条件的歌曲数据,包括歌名,歌手,歌曲分类
	 * @param skip
	 * @param pageSize
	 * @param keyword
	 * @return
	 */
	List<Song> pageByKeyword(@Param("skip") Integer skip,@Param("pageSize") Integer pageSize,@Param("keyword") String keyword);
}