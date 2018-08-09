package root.util;

import org.springframework.beans.BeanUtils;

public class DtoUtil {
	
	public static<T, S> T adapt(T dto, S model) {
		if (model == null) {
			try {
				model = (S) model.getClass().newInstance();
			} catch (InstantiationException e) {
				throw new RuntimeException(e.getMessage());
			} catch (IllegalAccessException e) {
				throw new RuntimeException(e.getMessage());
			}
		}
		BeanUtils.copyProperties(model, dto);
		return dto;
	}
}
