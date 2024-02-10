package com.emna.dojoninja.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.emna.dojoninja.models.Ninjamodel;

@Repository
public interface NinjaRepositorie extends CrudRepository<Ninjamodel,Long> {
	List<Ninjamodel> findAll();
}