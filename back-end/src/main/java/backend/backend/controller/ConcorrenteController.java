package backend.backend.controller;

import backend.backend.model.ConcorrenteModel;
import backend.backend.service.ConcorrenteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/concorrente")
public class ConcorrenteController {

    @Autowired
    private ConcorrenteService concorrenteService;

    @GetMapping
    public ResponseEntity<?> listarConcorrentes(){
        return new ResponseEntity<>(concorrenteService.listarConcorrentes(), HttpStatus.OK);
    }

    @GetMapping(path = "/{codigo}")
    public ResponseEntity<?> buscarConcorrentePorCodigo(@PathVariable Long codigo){
        return new ResponseEntity<>(concorrenteService.buscarConcorrentePorCodigo(codigo), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<?> salvarConcorrente(@RequestBody ConcorrenteModel concorrente){
        return new ResponseEntity<>(concorrenteService.salvarConcorrente(concorrente), HttpStatus.CREATED);
    }
}
