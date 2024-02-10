package com.emna.dojoninja.services;


import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.emna.dojoninja.models.Ninjamodel;
import com.emna.dojoninja.repositories.NinjaRepositorie;




@Service
public class Ninjaservice {

    private final NinjaRepositorie ninjarepositorie;

    public Ninjaservice(NinjaRepositorie ninjarepositorie) {
        this.ninjarepositorie = ninjarepositorie;
    }

    public List<Ninjamodel> allNinjas() {
        return ninjarepositorie.findAll();
    }

    public Ninjamodel createNinja(Ninjamodel ninja) {
        return ninjarepositorie.save(ninja);
    }

    public Ninjamodel findNinja(Long id) {
        Optional<Ninjamodel> optionalNinja = ninjarepositorie.findById(id);
        return optionalNinja.orElse(null);
    }

    public Ninjamodel updateNinja(Ninjamodel ninja) {
        return ninjarepositorie.save(ninja);
    }

    public void deleteNinja(Long id) {
        ninjarepositorie.deleteById(id);
    }
}