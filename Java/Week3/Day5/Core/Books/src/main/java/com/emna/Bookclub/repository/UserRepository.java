package com.emna.Bookclub.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.emna.Bookclub.models.User;


@Repository
public interface UserRepository extends CrudRepository<User, Long> {

    // for logging user
    Optional<User>findByEmail(String email);

}