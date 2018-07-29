package root.model;

public class ArticaleCategory {
    private Integer id;

    private Integer articaleId;

    private Integer categoryId;

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

    public Integer getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(Integer categoryId) {
        this.categoryId = categoryId;
    }
}