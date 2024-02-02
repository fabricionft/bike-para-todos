package backend.backend.repository;

import backend.backend.model.ConcorrenteModel;;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ConcorrenteRepository extends JpaRepository<ConcorrenteModel, Long> {

    Optional<ConcorrenteModel> findByCodigo(Long codigo);

    Optional<ConcorrenteModel> findByCpf(String cpf);
}
