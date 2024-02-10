package com.emna.dojoninja.repositories;



import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.emna.dojoninja.models.Dojomodel;

@Repository
public interface DojoRepositorie extends CrudRepository<Dojomodel, Long>{
	 // this method retrieves all the books from the database
    List<Dojomodel> findAll();
}