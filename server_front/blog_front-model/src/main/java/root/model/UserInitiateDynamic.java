package root.model;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;
import root.model.Comment.CommentBuilder;

@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserInitiateDynamic {
    private Integer id;
    // 动态类型,1:评论相关,2:文章相关
    private Integer type;
    // 动作类型,1:提出,2.回复另一个评论
    private Integer action;
    // 动态类型的id,取决于type的类型
    private Integer typeId;
    // 动态发起者的id
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