package backend.backend.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.util.Date;

@ControllerAdvice
public class HandlerException {

    @ExceptionHandler(RequestException.class)
    public ResponseEntity<MessgeRequestException> tratrErros(Exception exception){
        MessgeRequestException messge = new MessgeRequestException(
            new Date(),
            HttpStatus.UNAUTHORIZED.value(),
            "Sem utorização",
            exception.getMessage()
        );

        return new ResponseEntity<>(messge, HttpStatus.UNAUTHORIZED);
    }
}
