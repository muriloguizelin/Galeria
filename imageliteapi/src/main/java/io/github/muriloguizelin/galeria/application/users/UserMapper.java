package io.github.muriloguizelin.galeria.application.users;

import org.springframework.stereotype.Component;

import io.github.muriloguizelin.galeria.domain.entity.User;

@Component
public class UserMapper {

    public User mapToUser(UserDTO dto){
        return User.builder()
                .email(dto.getEmail())
                .name(dto.getName())
                .password(dto.getPassword())
                .build();
    }
}
