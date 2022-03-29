package com.spring.emlak.service;

import com.spring.emlak.model.Emlak;
import com.spring.emlak.model.MulkSahibi;
import com.spring.emlak.repository.EmlakRepository;
import com.spring.emlak.repository.MusteriRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.ArrayList;
import java.util.List;
import java.util.Locale;

@Service
public class EmlakService {

    @Autowired
    private EmlakRepository emlakRepository;
    @Autowired
    private MusteriRepository musteriRepository;


    public List<Emlak> findAllEmlak() {
        List<Emlak> emlakList = new ArrayList<>();
        emlakRepository.findAll().forEach(emlakList::add);
        return emlakList;

    }


    public Emlak findEmlakById( Integer id) {
        Emlak emlak = emlakRepository.findById(id).orElseThrow(() -> new RuntimeException("Employee not exist with id: " + id));

        return emlak;
    }


    public List<Emlak> findEmlakByIl(String il) {
        List<Emlak> emlakList = new ArrayList<>();
        emlakRepository.findBySehir(il.toUpperCase(Locale.ROOT)).forEach(emlakList::add);

        return emlakList;
    }


    public Emlak createEmlak( Emlak emlak) {
        String sehir = emlak.getSehir();
        emlak.setSehir(sehir.toUpperCase(Locale.ROOT));
        MulkSahibi mulkSahibi = musteriRepository.findById(emlak.getMulkSahibi().getId()).get();
        emlak.setMulkSahibi(mulkSahibi);
        return emlakRepository.save(emlak);
    }
}
