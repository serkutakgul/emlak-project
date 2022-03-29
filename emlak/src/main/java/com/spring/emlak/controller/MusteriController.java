package com.spring.emlak.controller;

import com.spring.emlak.model.Emlak;
import com.spring.emlak.model.MulkSahibi;
import com.spring.emlak.repository.MusteriRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Locale;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/api/musteri")
public class MusteriController {
    @Autowired
    MusteriRepository musteriRepository;

    @GetMapping("/")
    public ResponseEntity<List<MulkSahibi>> findAllMusteri() {
        List<MulkSahibi> musteriList = new ArrayList<>();
        musteriRepository.findAll().forEach(musteriList::add);
        ResponseEntity<List<MulkSahibi>> musteriListe = new ResponseEntity<>(musteriList, HttpStatus.OK);
        return musteriListe;

    }
    @PostMapping("/create")
    public MulkSahibi createMusteri( MulkSahibi ms) {
        String isim = ms.getAdSoyad();
        String eposta = ms.getEposta();

        ms.setAdSoyad(isim.toUpperCase(Locale.ROOT));
        ms.setEposta(eposta.toLowerCase(Locale.ROOT));
        return musteriRepository.save(ms);
    }

}
