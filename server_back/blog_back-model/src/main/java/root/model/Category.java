package root.model;

public class Category {
    private Integer id;

    private String name;

    private Integer articaleSum;

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

    public Integer getArticaleSum() {
        return articaleSum;
    }

    public void setArticaleSum(Integer articaleSum) {
        this.articaleSum = articaleSum;
    }

    public Integer getCommentSum() {
        return commentSum;
    }

    public void setCommentSum(Integer commentSum) {
        this.commentSum = commentSum;
    }
}