package root.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import root.model.SongCategory;

public interface SongCategoryMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(SongCategory record);

    int insertSelective(SongCategory record);

    SongCategory selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(SongCategory record);

    int updateByPrimaryKey(SongCategory record);
    /**
     * 歌曲分类是否存在
     * @return
     */
	Long countAll();
	/**
	 * 歌曲分类数据
	 * @return
	 */
	List<SongCategory> list();
}