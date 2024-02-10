package com.emna.dojoninja.services;


import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.emna.dojoninja.models.Dojomodel;
import com.emna.dojoninja.repositories.DojoRepositorie;


@Service
public class DojoService {
    // adding 
    private final DojoRepositorie dojoRepositorie;
    
    public DojoService(DojoRepositorie dojoRepositorie) {
        this.dojoRepositorie = dojoRepositorie;
    }

    // returns all 
    public List<Dojomodel> allDojo() {
        return dojoRepositorie.findAll();
    }

    // creates 
    public Dojomodel createDojo(Dojomodel dojo) {
        return dojoRepositorie.save(dojo);
    }
    // READ ONE 
    // retrieves 
    public Dojomodel findDojo(Long id) {
        Optional<Dojomodel> optionalDojo = dojoRepositorie.findById(id);
        if(optionalDojo.isPresent()) {
            return optionalDojo.get();
        } else {
            return null;
        }
    }
}