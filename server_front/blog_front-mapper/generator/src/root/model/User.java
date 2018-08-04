package root.model;

import java.util.Date;

public class User {
    private Integer id;

    private String username;

    private String email;

    private String password;

    private String nickname;

    private String desc;

    private String website;

    private String avatar;

    private Integer praise;

    private Integer status;

    private String activationCode;

    private Integer activationStatus;

    private Integer followerSum;

    private Integer fansSum;

    private Integer commentSum;

    private Integer articaleSum;

    private String beforeLoginIp;

    private String nowLoginIp;

    private Date createTime;

    private Date operateTime;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username == null ? null : username.trim();
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email == null ? null : email.trim();
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password == null ? null : password.trim();
    }

    public String getNickname() {
        return nickname;
    }

    public void setNickname(String nickname) {
        this.nickname = nickname == null ? null : nickname.trim();
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc == null ? null : desc.trim();
    }

    public String getWebsite() {
        return website;
    }

    public void setWebsite(String website) {
        this.website = website == null ? null : website.trim();
    }

    public String getAvatar() {
        return avatar;
    }

    public void setAvatar(String avatar) {
        this.avatar = avatar == null ? null : avatar.trim();
    }

    public Integer getPraise() {
        return praise;
    }

    public void setPraise(Integer praise) {
        this.praise = praise;
    }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }

    public String getActivationCode() {
        return activationCode;
    }

    public void setActivationCode(String activationCode) {
        this.activationCode = activationCode == null ? null : activationCode.trim();
    }

    public Integer getActivationStatus() {
        return activationStatus;
    }

    public void setActivationStatus(Integer activationStatus) {
        this.activationStatus = activationStatus;
    }

    public Integer getFollowerSum() {
        return followerSum;
    }

    public void setFollowerSum(Integer followerSum) {
        this.followerSum = followerSum;
    }

    public Integer getFansSum() {
        return fansSum;
    }

    public void setFansSum(Integer fansSum) {
        this.fansSum = fansSum;
    }

    public Integer getCommentSum() {
        return commentSum;
    }

    public void setCommentSum(Integer commentSum) {
        this.commentSum = commentSum;
    }

    public Integer getArticaleSum() {
        return articaleSum;
    }

    public void setArticaleSum(Integer articaleSum) {
        this.articaleSum = articaleSum;
    }

    public String getBeforeLoginIp() {
        return beforeLoginIp;
    }

    public void setBeforeLoginIp(String beforeLoginIp) {
        this.beforeLoginIp = beforeLoginIp == null ? null : beforeLoginIp.trim();
    }

    public String getNowLoginIp() {
        return nowLoginIp;
    }

    public void setNowLoginIp(String nowLoginIp) {
        this.nowLoginIp = nowLoginIp == null ? null : nowLoginIp.trim();
    }

    public Date getCreateTime() {
        return createTime;
    }

    public void setCreateTime(Date createTime) {
        this.createTime = createTime;
    }

    public Date getOperateTime() {
        return operateTime;
    }

    public void setOperateTime(Date operateTime) {
        this.operateTime = operateTime;
    }
}