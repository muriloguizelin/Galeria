package io.github.muriloguizelin.galeria.domain.service;

import io.github.muriloguizelin.galeria.domain.AccessToken;
import io.github.muriloguizelin.galeria.domain.entity.User;

public interface UserService {
    User getByEmail(String email);
    User save(User user);
    AccessToken autheticate(String email, String password);
}
