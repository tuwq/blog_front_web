package root.model;

import java.util.Date;

public class UserReceiveDynamic {
    private Integer id;

    private Integer initiateDynamicId;

    private Integer receiveUserId;

    private Date createTime;
    
    private Integer visit;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getInitiateDynamicId() {
        return initiateDynamicId;
    }

    public void setInitiateDynamicId(Integer initiateDynamicId) {
        this.initiateDynamicId = initiateDynamicId;
    }

    public Integer getReceiveUserId() {
        return receiveUserId;
    }

    public void setReceiveUserId(Integer receiveUserId) {
        this.receiveUserId = receiveUserId;
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

	public Integer getVisit() {
		return visit;
	}

	public void setVisit(Integer visit) {
		this.visit = visit;
	}
}