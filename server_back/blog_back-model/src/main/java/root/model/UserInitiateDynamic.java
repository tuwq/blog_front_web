package root.model;

import java.util.Date;

public class UserInitiateDynamic {
    private Integer id;

    private Integer type;

    private Integer action;

    private Integer typeId;

    private Integer initiateUserId;

    private Date createTime;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getType() {
        return type;
    }

    public void setType(Integer type) {
        this.type = type;
    }

    public Integer getAction() {
        return action;
    }

    public void setAction(Integer action) {
        this.action = action;
    }

    public Integer getTypeId() {
        return typeId;
    }

    public void setTypeId(Integer typeId) {
        this.typeId = typeId;
    }

    public Integer getInitiateUserId() {
        return initiateUserId;
    }

    public void setInitiateUserId(Integer initiateUserId) {
        this.initiateUserId = initiateUserId;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }
}