package com.spring.emlak.model;

import javax.persistence.*;

@Entity
@Table(name = "is_yeri")
public class IsYeri {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;
    String unvan;
    String sehir;
    String yetkili;
    String telefon;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUnvan() {
        return unvan;
    }

    public void setUnvan(String unvan) {
        this.unvan = unvan;
    }

    public String getSehir() {
        return sehir;
    }

    public void setSehir(String adres) {
        this.sehir = adres;
    }

    public String getYetkili() {
        return yetkili;
    }

    public void setYetkili(String yetkili) {
        this.yetkili = yetkili;
    }

    public String getTelefon() {
        return telefon;
    }

    public void setTelefon(String telefon) {
        this.telefon = telefon;
    }

    public IsYeri(int id, String unvan, String sehir, String yetkili, String telefon) {
        this.id = id;
        this.unvan = unvan;
        this.sehir = sehir;
        this.yetkili = yetkili;
        this.telefon = telefon;
    }
    public IsYeri(){

    }
}
