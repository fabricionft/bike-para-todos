package backend.backend.service;

import backend.backend.dto.LoginRequestDTO;
import backend.backend.exception.RequestException;
import backend.backend.model.UsuarioModel;
import backend.backend.repository.UsuarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;


    public List<UsuarioModel> listarUsuarios(){
        return usuarioRepository.findAll();
    }

    public UsuarioModel buscarUsuarioPorCodigo(Long codigo){
        return usuarioRepository.findByCodigo(codigo)
               .orElseThrow(() -> new RequestException("Usuário inexistente"));
    }

    public UsuarioModel salvarUsurio(UsuarioModel usuario){
        usuario.setSenha(passwordEncoder.encode(usuario.getSenha()));

        return usuarioRepository.save(usuario);
    }

    public UsuarioModel fazerLogin(LoginRequestDTO loginRequest){
        UsuarioModel usuario = buscarUsuarioPorUsername(loginRequest.getUsuario());

        if(passwordEncoder.matches(loginRequest.getSenha(), usuario.getSenha())) {
            return usuario;
        }else throw  new RequestException("Credenciais incorretas!");

    }

    //Métodos privdos
    private UsuarioModel buscarUsuarioPorUsername(String usernme){
        return  usuarioRepository.findByUsuario(usernme)
                .orElseThrow(() -> new RequestException("Usuário inexistente"));
    }
}
