package backend.backend.service;

import backend.backend.exception.RequestException;
import backend.backend.model.ConcorrenteModel;
import backend.backend.repository.ConcorrenteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ConcorrenteService {

    @Autowired
    private ConcorrenteRepository concorrenteRepository;


    public List<ConcorrenteModel> listarConcorrentes(){
        return concorrenteRepository.findAll();
    }

    public ConcorrenteModel buscarConcorrentePorCodigo(Long codigo){
        return concorrenteRepository.findByCodigo(codigo)
               .orElseThrow(() -> new RequestException("Concorrente inexistente!"));
    }

    public ConcorrenteModel salvarConcorrente(ConcorrenteModel concorrente){
        if(concorrenteRepository.findByCpf(concorrente.getCpf()).isEmpty()){
            return concorrenteRepository.save(concorrente);
        }else throw new RequestException("Desculpe, este CPF já foi cadastrado!");
    }


    //Métodos privados
    private ConcorrenteModel buscarConcorrentePorCPF(String cpf){
        return concorrenteRepository.findByCpf(cpf)
                .orElseThrow(() -> new RequestException("Concorrente inexistente!"));
    }
}
