package com.emna.Bookclub.repository;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.emna.Bookclub.models.Book;

import java.util.List;

@Repository
public interface BookRepository extends CrudRepository<Book , Long> {

    List<Book> findAll();
}
