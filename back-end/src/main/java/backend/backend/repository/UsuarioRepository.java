package backend.backend.repository;

import backend.backend.model.UsuarioModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UsuarioRepository extends JpaRepository<UsuarioModel, Long> {

    Optional<UsuarioModel> findByCodigo(Long codigo);

    Optional<UsuarioModel> findByUsuario(String usuario);
}
