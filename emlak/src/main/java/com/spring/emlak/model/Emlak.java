package com.spring.emlak.model;


import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "emlak")
public class Emlak implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String sehir;
    private int oda;
    private int kat;
    private double alan;
    private boolean kira;
    private double fiyat;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "sahip_id")
    private MulkSahibi mulkSahibi;

    public MulkSahibi getMulkSahibi() {
        return mulkSahibi;
    }

    //@JsonManagedReference//sonsuz çıktı için

    public void setMulkSahibi(MulkSahibi mulkSahibi) {
        this.mulkSahibi = mulkSahibi;
    }

    public double getAlan() {
        return alan;
    }

    public void setAlan(double alan) {
        this.alan = alan;
    }

    public boolean isKira() {
        return kira;
    }

    public void setKira(boolean kira) {
        this.kira = kira;
    }

    public double getFiyat() {
        return fiyat;
    }

    public void setFiyat(double miktar) {
        this.fiyat = miktar;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getSehir() {
        return sehir;
    }

    public void setSehir(String sehir) {
        this.sehir = sehir;
    }

    public int getOda() {
        return oda;
    }

    public void setOda(int oda) {
        this.oda = oda;
    }

    public int getKat() {
        return kat;
    }

    public void setKat(int kat) {
        this.kat = kat;
    }

    public Emlak(int id, String sehir, int oda, int kat, double alan, boolean kira, double fiyat) {
        this.id = id;
        this.sehir = sehir;
        this.oda = oda;
        this.kat = kat;
        this.alan = alan;
        this.kira = kira;
        this.fiyat = fiyat;
    }

    public Emlak() {
    }


}
