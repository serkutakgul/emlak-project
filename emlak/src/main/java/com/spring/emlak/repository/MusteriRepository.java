package com.spring.emlak.repository;

import com.spring.emlak.model.MulkSahibi;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MusteriRepository extends JpaRepository<MulkSahibi,Integer> {
}
