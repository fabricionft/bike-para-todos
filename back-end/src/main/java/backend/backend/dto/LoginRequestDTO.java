package backend.backend.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LoginRequestDTO {

    private String usuario;
    private String senha;
}
