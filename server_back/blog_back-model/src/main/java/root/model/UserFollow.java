package root.model;

public class UserFollow {
    private Integer id;

    private Integer fromId;

    private Integer targetId;

    private Integer followstatus;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getFromId() {
        return fromId;
    }

    public void setFromId(Integer fromId) {
        this.fromId = fromId;
    }

    public Integer getTargetId() {
        return targetId;
    }

    public void setTargetId(Integer targetId) {
        this.targetId = targetId;
    }

    public Integer getFollowstatus() {
        return followstatus;
    }

    public void setFollowstatus(Integer followstatus) {
        this.followstatus = followstatus;
    }
}