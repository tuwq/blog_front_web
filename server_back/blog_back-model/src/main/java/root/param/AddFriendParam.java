package root.param;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;

@Setter
@Getter
public class AddFriendParam {

    @NotBlank
    private String nickname;

    private String avatarSite;

    @NotBlank
    private String website;

    @NotBlank
    private String desc;

}
