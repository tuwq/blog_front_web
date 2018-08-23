package root.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import root.model.SongCategory;

@Mapper
public interface SongCategoryMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(SongCategory record);

    int insertSelective(SongCategory record);

    SongCategory selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(SongCategory record);

    int updateByPrimaryKey(SongCategory record);
    /**
     * 所有的分类数量
     * @return
     */
	int countAll();
	/**
	 * 所有的歌曲分类
	 * @return
	 */
	List<SongCategory> list();
	/**
	 * 歌曲所有的分类信息
	 * @param integer
	 * @return
	 */
	List<SongCategory> getListBySongId(@Param("songId") Integer songId);
	/**
	 * 歌曲所有分类的id
	 * @param id
	 * @return
	 */
	List<Integer> getIdListBySongId(@Param("songId") Integer id);
}