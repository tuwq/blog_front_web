package root.model;

public class ArticleCategory {
    private Integer id;

    private String name;

    private String desc;

    private Integer articleSum;

    private Integer commentSum;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name == null ? null : name.trim();
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc == null ? null : desc.trim();
    }

    public Integer getArticleSum() {
        return articleSum;
    }

    public void setArticleSum(Integer articleSum) {
        this.articleSum = articleSum;
    }

    public Integer getCommentSum() {
        return commentSum;
    }

    public void setCommentSum(Integer commentSum) {
        this.commentSum = commentSum;
    }
}