import React, {Component} from 'react';
import EmlakService from "../services/EmlakService";
import HeaderComponenet from './HeaderComponenet';

class CreateEmlak extends Component {
    constructor(props) {

        super(props)
        this.state = {
            sehir: '',
            oda: 0,
            kat: 0,
            alan:0,
            kira:true,
            fiyat:1,
            mid:0,
            mulkSahibi:{}
        }
        this.changeSehir = this.changeSehir.bind(this);
        this.changeAlan = this.changeAlan.bind(this);
        this.changeFiyat = this.changeFiyat.bind(this);
        this.changeKat = this.changeKat.bind(this);
        this.changeOda = this.changeOda.bind(this);
        this.changeKira = this.changeKira.bind(this);
        this.changeMusteriId = this.changeMusteriId.bind(this);
        this.saveEmlak = this.saveEmlak.bind(this)

        
    }

    saveEmlak = (e) => {
        e.preventDefault();
        let emlak = {sehir: this.state.sehir, 
            alan: this.state.alan, 
            kat: this.state.kat,
            oda: this.state.oda,
            kira: this.state.kira,
            fiyat: this.state.fiyat,
            mulkSahibi:{
                id:this.state.mid
            }};
            debugger;
        console.log('emlak =>' + JSON.stringify(emlak))
        EmlakService.createEmlak(emlak).then(res =>{
           this.props.history.push('/liste')
         });
         
    }
    cancel(){
        this.props.history.push('/liste')
    }
    changeSehir = (event)=>{
        this.setState({sehir: event.target.value});
    }
    changeOda = (event)=>{
        this.setState({oda: event.target.value});
    }
    changeKat = (event)=>{
        this.setState({kat: event.target.value});
    }
    changeAlan = (event)=>{
        this.setState({alan: event.target.value});
    }
    changeKira = (event)=>{
        this.setState({kira: event.target.value==="kira" ? true:false});
        
        console.log(this.state.kira);
        console.log(event.target.value);
    }
    changeFiyat = (event)=>{
        this.setState({fiyat: event.target.value});
        
        
    }
    changeMusteriId = (event)=>{
        this.setState({mid: event.target.value});
       
        
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3">
                            <h3 className="text-center">Yeni İlan</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Şehir:</label>
                                        <input placeholder="Şehir ismi yazınız"
                                               name="sehir"
                                               className="form-control"
                                               value={this.state.sehir}
                                               onChange={this.changeSehir}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Oda Sayısı:</label>
                                        <input placeholder="Oda sayısını yazınız"
                                               name="oda"
                                               className="form-control"
                                               value={this.state.oda}
                                               onChange={this.changeOda}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Bulunduğu Kat:</label>
                                        <input placeholder="Bulunduğu katı yazınız"
                                               name="kat"
                                               className="form-control"
                                               value={this.state.kat}
                                               onChange={this.changeKat}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Alan:</label>
                                        <input placeholder="Alanı yazınız"
                                               name="alan"
                                               className="form-control"
                                               value={this.state.alan}
                                               onChange={this.changeAlan}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Kiralık:</label>
                                        <input type="radio"
                                            value={"kira"}
                                            checked={this.state.kira===true}
                                            onChange={this.changeKira} />
                                        <label>Satılık:</label>
                                        <input type="radio"
                                            value={""}
                                            checked={this.state.kira===false}
                                            onChange={this.changeKira} />

                                    </div>
                                    <div className="form-group">
                                        <label>Fiyat:</label>
                                        <input placeholder="Fiyat"
                                               name="fiyat"
                                               className="form-control"
                                               value={this.state.fiyat}
                                               onChange={this.changeFiyat}/>
                                    </div>
                                    <div className="form-group">
                                        <label>İlan Sahibi Id:</label>
                                        <input placeholder="Kimlik numarası giriniz."
                                               name="mid"
                                               className="form-control"
                                               value={this.state.mid}
                                               onChange={this.changeMusteriId}/>
                                    </div>

                                    <button className="btn btn-success"
                                             onClick={this.saveEmlak}>Kaydet</button>
                                    <button className="btn btn-danger"
                                            onClick={this.cancel.bind(this)}
                                            style={{marginLeft : "10px"}}>İptal</button>
                                </form>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateEmlak;