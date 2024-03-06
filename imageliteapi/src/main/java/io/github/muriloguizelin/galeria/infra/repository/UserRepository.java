package io.github.muriloguizelin.galeria.infra.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import io.github.muriloguizelin.galeria.domain.entity.User;

public interface UserRepository extends JpaRepository<User, String> {

    User findByEmail(String email);
}
