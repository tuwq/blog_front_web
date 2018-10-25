package root.configConstant;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class QiniuProperties {

	private String defaultAvatarname;
	private String qiniuAcKey;
	private String qiniuSeKey;
	private String qiniuImgBucket;
	private String qiniuUserAvatarPrefix;
}
