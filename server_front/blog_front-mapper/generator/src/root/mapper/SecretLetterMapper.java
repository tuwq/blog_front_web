package root.mapper;

import root.model.SecretLetter;

public interface SecretLetterMapper {
    int insert(SecretLetter record);

    int insertSelective(SecretLetter record);
}