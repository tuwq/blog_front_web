package root.param;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

@Setter
@Getter
public class EditFriendParam {
    @NotNull
    private Integer id;

    @NotBlank
    private String nickname;

    private String avatarSite;

    @NotBlank
    private String website;

    @NotBlank
    private String desc;
}
