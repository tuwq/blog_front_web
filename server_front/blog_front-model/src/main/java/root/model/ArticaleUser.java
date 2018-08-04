package root.model;

import java.util.Date;

public class ArticaleUser {
    private Integer id;

    private Integer articaleId;

    private Integer userId;
    // 是否看过,0:没看过,1:看过
    private Integer visit;
    // 看法,1:赞,2:踩
    private Integer vote;

    private Date createTime;

    private Date updateTime;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getArticaleId() {
        return articaleId;
    }

    public void setArticaleId(Integer articaleId) {
        this.articaleId = articaleId;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public Integer getVisit() {
        return visit;
    }

    public void setVisit(Integer visit) {
        this.visit = visit;
    }

    public Integer getVote() {
        return vote;
    }

    public void setVote(Integer vote) {
        this.vote = vote;
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
}