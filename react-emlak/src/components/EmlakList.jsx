import React, { Component,useState, useEffect } from 'react';
import EmlakService from '../services/EmlakService';
import { useHistory } from "react-router-dom";


const initializeEmlakListState =
{
    evler: [],
    evlerYedek: [],
    sehir: '',
    kira: undefined
}

const EmlakList = (props) => {
    let history = useHistory();

    const [state, setState] = useState(initializeEmlakListState)

    useEffect(() => {
        debugger;
        EmlakService.getEmlak().then((res) => {
            setState({...state,evler: res.data , evlerYedek:res.data})
            debugger
           
        })
    }, [])
    
    
    const changeKira = (event) => {
        setState({...state, kira: event.target.value === "kira" ? true : false });
        
    }
    const changeSehir = (event) => {
        setState({...state, sehir: event.target.value });
    }
    const addEmlak = () => {
        history.push('/ekle');
    }
    const addMusteri=()=>{
        history.push('/musteri')
    }

    const emlakAra = () => {
        const filterFunction = (ev) => {
            return ev.kira === state.kira && ev.sehir === state.sehir
        }
        
        setState({...state, evler: state.evlerYedek.filter(filterFunction)});
    }
        return (
            <div>
                <h2 className='text-center'>Kiralık / Satılık Ev</h2>
                
                <div className="flexbox-container">
                    <div className='search'>
                        <input placeholder="Şehir ismi yazınız"
                            name="sehir"
                            className="form-control"
                            value={state.sehir}
                            onChange={changeSehir} /></div>


                    <div className='searchR'><label>Kiralık:</label>
                        <input type="radio"
                            value={"kira"}
                            checked={state.kira}
                            onChange={changeKira} /></div>
                        <div className='search'><label>Satılık:</label>
                        <input type="radio"
                            value={""}
                            checked={!state.kira}
                            onChange={changeKira} /></div>
                    <div className='search'><button className="btn btn-primary"
                        onClick={emlakAra}>Ara</button></div>

<div className='ilan'><button className='btn btn-warning float-right' onClick={addEmlak}>Yeni İlan</button></div>

                        
                </div>

               
                
                <div >
                
                </div>

                <div className='row'>
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th>Şehir</th>
                                <th>Alan</th>
                                <th>Oda Sayısı</th>
                                <th>Bulunduğu Kat</th>
                                <th>Durum</th>
                                <th>Fiyat</th>
                                <th>İlan Sahibi</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                state.evler.map((ev) =>
                                    <tr key={ev.emlak_id}>
                                        <td>{ev.sehir}</td>
                                        <td>{ev.alan}</td>
                                        <td>{ev.oda}</td>
                                        <td>{ev.kat}</td>
                                        <td>{ev.kira === true ? 'Kiralık' : 'Satılık'}</td>
                                        <td>{ev.fiyat}</td>
                                        <td>{ev.mulkSahibi.adSoyad}</td>

                                    </tr>)

                            }

                        </tbody>
                    </table>
                </div>
               
                <button className='btn btn-secondary  float-right' onClick={addMusteri}>Mülk Sahibi Ekle</button>

            </div>
        );
}

export default EmlakList;