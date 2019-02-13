package root.model;

import java.util.Date;

public class Comment {
    private Integer id;

    private Integer userId;

    private Integer articleId;

    private Integer parentId;

    private Integer rootId;

    private Date createTime;

    private Date updateTime;
    
    private Integer approval;

    private Integer oppose;

    private String content;
    
    // 评论所属用户
    private User user;
    // 评论所属文章
    private Article article;

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

    public Integer getParentId() {
        return parentId;
    }

    public void setParentId(Integer parentId) {
        this.parentId = parentId;
    }

    public Integer getRootId() {
        return rootId;
    }

    public void setRootId(Integer rootId) {
        this.rootId = rootId;
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

	public Integer getApproval() {
		return approval;
	}

	public void setApproval(Integer approval) {
		this.approval = approval;
	}

	public Integer getOppose() {
		return oppose;
	}

	public void setOppose(Integer oppose) {
		this.oppose = oppose;
	}

	public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content == null ? null : content.trim();
    }

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Integer getArticleId() {
		return articleId;
	}

	public void setArticleId(Integer articleId) {
		this.articleId = articleId;
	}

	public Article getArticle() {
		return article;
	}

	public void setArticle(Article article) {
		this.article = article;
	}
	
}