package com.emna.dojoninja.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.emna.dojoninja.models.Dojomodel;
import com.emna.dojoninja.services.DojoService;

import jakarta.validation.Valid;

@Controller
@RequestMapping("/dojos")
public class DojoController {
	@Autowired
	private DojoService dojoserv;

    @GetMapping("")
    public String home(@ModelAttribute("dojo") Dojomodel dojo, Model model) {
    	List<Dojomodel> allDojos = dojoserv.allDojo();
		model.addAttribute("allDojos",allDojos);
        return "Dojos.jsp";
    }
    @PostMapping("/processForm")
    public String createDojo(@Valid @ModelAttribute("dojo") Dojomodel dojo, BindingResult result, Model model) {
        if (result.hasErrors()) {
            return "Dojos.jsp";
        } else {
            dojoserv.createDojo(dojo);
            return "redirect:/dojos";
        }
    }
}