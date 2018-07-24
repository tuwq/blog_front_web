package root.dto;

import root.model.SysUser;
import root.util.DtoUtil;

public class SysUserDto extends SysUser{

	public static SysUserDto adapt(SysUser sysUser) {
		return DtoUtil.adapt(new SysUserDto(), sysUser);
	}
}
