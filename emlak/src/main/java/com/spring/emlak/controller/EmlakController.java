package com.spring.emlak.controller;

import com.spring.emlak.model.Emlak;
import com.spring.emlak.model.MulkSahibi;
import com.spring.emlak.repository.EmlakRepository;
import com.spring.emlak.repository.MusteriRepository;
import com.spring.emlak.service.EmlakService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;


import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Locale;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/api/emlak")

public class EmlakController {

    @Autowired
    private EmlakRepository emlakRepository;
    @Autowired
    private MusteriRepository musteriRepository;
    @Autowired
    private EmlakService emlakService;

    @GetMapping("/")
    public ResponseEntity<List<Emlak>> findAllEmlak() {
        ResponseEntity<List<Emlak>> emlakListe = new ResponseEntity<>(emlakService.findAllEmlak(), HttpStatus.OK);
        return emlakListe;

    }

    @GetMapping("/{emlakId}")
    public ResponseEntity<Emlak> findEmlakById(@PathVariable("emlakId") Integer id) {
        Emlak emlak = emlakService.findEmlakById(id);
        ResponseEntity<Emlak> emlakResponse = new ResponseEntity<>(emlak, HttpStatus.OK);
        return emlakResponse;
    }

    @GetMapping("/list/{il}")
    public ResponseEntity<List<Emlak>> findEmlakByIl(@PathVariable("il") String il) {

        ResponseEntity<List<Emlak>> emlakListe = new ResponseEntity<>(emlakService.findEmlakByIl(il), HttpStatus.OK);
        return emlakListe;
    }

    @PostMapping(value = "/")
    public Emlak createEmlak(@RequestBody Emlak emlak) {
        return emlakService.createEmlak(emlak);
    }


}

