package com.spring.emlak.repository;

import com.spring.emlak.model.Emlak;
import org.springframework.data.jpa.repository.JpaRepository;


import java.util.List;


public interface EmlakRepository extends JpaRepository<Emlak,Integer> {


    public List<Emlak> findBySehir(String il);

}
