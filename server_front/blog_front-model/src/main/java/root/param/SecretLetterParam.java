package root.param;

import java.util.Date;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Setter
@Getter
public class SecretLetterParam {

	@NotBlank
    private String contact;

	@NotBlank
	@Size(min=10,max=200,message="内容长度保持在10-200之间")
    private String content;


}