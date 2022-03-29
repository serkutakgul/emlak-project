package com.spring.emlak.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "mulk_sahibi")
public class MulkSahibi implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    int id;
    @Column(name = "ad_soyad")
    String adSoyad;
    String telefon;
    String eposta;

    @OneToMany(mappedBy = "mulkSahibi", cascade = CascadeType.ALL)
    private List<Emlak> emlaklar;

    @JsonBackReference//postman sonsuz döngü
    public List<Emlak> getEmlaklar() {
        return emlaklar;
    }

//    @JsonProperty
    public void setEmlaklar(List<Emlak> emlaklar) {
        this.emlaklar = emlaklar;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getAdSoyad() {
        return adSoyad;
    }

    public void setAdSoyad(String adSoyad) {
        this.adSoyad = adSoyad;
    }

    public String getTelefon() {
        return telefon;
    }

    public void setTelefon(String telefon) {
        this.telefon = telefon;
    }

    public String getEposta() {
        return eposta;
    }

    public void setEposta(String eposta) {
        this.eposta = eposta;
    }

    public MulkSahibi(int id, String adSoyad, String telefon, String eposta) {
        this.id = id;
        this.adSoyad = adSoyad;
        this.telefon = telefon;
        this.eposta = eposta;
    }

    public MulkSahibi() {
    }


    public void emlakEkle(Emlak emlak) {
        if (emlaklar == null) {
            emlaklar = new ArrayList<>();
            emlaklar.add(emlak);
            emlak.setMulkSahibi(this);

        }
    }
}
