package com.spring.emlak.controller;

import com.spring.emlak.model.IsYeri;
import com.spring.emlak.model.MulkSahibi;
import com.spring.emlak.repository.IsYerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Locale;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/api/isyeri")
public class IsYeriController {

    @Autowired
    IsYerRepository isYerRepository;

    @PostMapping("/")
    public IsYeri createIsYeri(@RequestBody IsYeri isYeri) {
        String unvan = isYeri.getUnvan();
        String sehir = isYeri.getSehir();
        String yetkili = isYeri.getYetkili();

        isYeri.setUnvan(unvan.toUpperCase(Locale.ROOT));
        isYeri.setYetkili(yetkili.toUpperCase(Locale.ROOT));
        isYeri.setSehir(sehir.toUpperCase(Locale.ROOT));
        return  isYerRepository.save(isYeri);
    }

}
