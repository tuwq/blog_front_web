package root.model;

import java.util.Date;

public class Articale {
    private Integer id;

    private Integer userId;

    private String title;

    private String faceCover;

    private Integer praise;
    
    private Integer commentSum;

    private Integer browseSum;

    private Integer status;

    private Integer weight;

    private Date createTime;

    private Date updateTime;

    private String content;

    public Integer getId() {
        return id;
    }

	public void setId(Integer id) {
        this.id = id;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title == null ? null : title.trim();
    }

    public String getFaceCover() {
        return faceCover;
    }

    public void setFaceCover(String faceCover) {
        this.faceCover = faceCover == null ? null : faceCover.trim();
    }

    public Integer getPraise() {
		return praise;
	}

	public void setPraise(Integer praise) {
		this.praise = praise;
	}
    
    public Integer getCommentSum() {
        return commentSum;
    }

    public void setCommentSum(Integer commentSum) {
        this.commentSum = commentSum;
    }

    public Integer getBrowseSum() {
        return browseSum;
    }

    public void setBrowseSum(Integer browseSum) {
        this.browseSum = browseSum;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public Integer getWeight() {
        return weight;
    }

    public void setWeight(Integer weight) {
        this.weight = weight;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    public Date getUpdateTime() {
        return updateTime;
    }

    public void setUpdateTime(Date updateTime) {
        this.updateTime = updateTime;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content == null ? null : content.trim();
    }
}