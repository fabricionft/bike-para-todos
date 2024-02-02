package backend.backend.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity(name = "Concorrente")
@Getter
@Setter
@Table(name = "concorrentes")
public class ConcorrenteModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long codigo;

    private String nome;

    private String email;

    private String celular;

    private String cpf;

    private Boolean pagou;
}
