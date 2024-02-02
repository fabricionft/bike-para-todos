package backend.backend.controller;

import backend.backend.dto.LoginRequestDTO;
import backend.backend.model.UsuarioModel;
import backend.backend.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/usuario")
public class USuarioController {

    @Autowired
    private UsuarioService usuarioService;


    @GetMapping
    private ResponseEntity<?> listarUsuarios(){
        return new ResponseEntity<>(usuarioService.listarUsuarios(), HttpStatus.OK);
    }

    @GetMapping(path = "/{codigo}")
    public ResponseEntity<?> buscarUsuarioPorCodigo(@PathVariable Long codigo){
        return new ResponseEntity<>(usuarioService.buscarUsuarioPorCodigo(codigo), HttpStatus.OK);
    }
    
    @PostMapping
    public ResponseEntity<?> buscarUsuarioPorCodigo(@RequestBody UsuarioModel usuario){
        return new ResponseEntity<>(usuarioService.salvarUsurio(usuario), HttpStatus.CREATED);
    }

    @PostMapping(path = "/login")
    public ResponseEntity<?> buscarUsuarioPorCodigo(@RequestBody LoginRequestDTO loginRequest){
        return new ResponseEntity<>(usuarioService.fazerLogin(loginRequest), HttpStatus.OK);
    }
}
