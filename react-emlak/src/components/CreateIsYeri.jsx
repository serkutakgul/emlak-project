import React, { Component } from 'react';
import IsYeriService from '../services/IsYeriService';

class CreateIsYeri extends Component {
    constructor(props) {

        super(props)
        this.state = {
            unvan: '',
            yetkili:'',
            telefon: '',
            sehir:''


        }
        this.changeUnvan = this.changeUnvan.bind(this);
        this.changeYetkili = this.changeYetkili.bind(this);
        this.changeTelefon = this.changeTelefon.bind(this);
        this.changeSehir = this.changeSehir.bind(this);

        this.saveIsYeri = this.saveIsYeri.bind(this);

       
    }

    saveIsYeri = (e) => {
        e.preventDefault();
        let isYeri = {unvan: this.state.unvan, telefon: this.state.telefon, yetkili: this.state.yetkili, sehir: this.state.sehir};
        debugger;
        console.log('isYeri =>' + JSON.stringify(isYeri));
         IsYeriService.createIsYeri(isYeri).then(res =>{
            this.props.history.push('/musteri')
          });
          }
    cancel(){
        this.props.history.push('/')
    }
    changeTelefon = (event)=>{
        this.setState({telefon: event.target.value});
    }
    changeYetkili = (event)=>{
        this.setState({yetkili: event.target.value});
    }
    changeUnvan = (event)=>{
        this.setState({unvan: event.target.value});
    }
    changeSehir = (event)=>{
        this.setState({sehir: event.target.value});
    }
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3">
                            <h3 className="text-center">İş Yeri Ekle</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Unvan:</label>
                                        <input placeholder="Unvan"
                                               name="isim"
                                               className="form-control"
                                               value={this.state.unvan}
                                               onChange={this.changeUnvan}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Telefon</label>
                                        <input placeholder="Telefon"
                                               name="telefon"
                                               className="form-control"
                                               value={this.state.telefon}
                                               onChange={this.changeTelefon}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Yetkili:</label>
                                        <input placeholder="Yetkili"
                                               name="yetkili"
                                               className="form-control"
                                               value={this.state.yetkili}
                                               onChange={this.changeYetkili}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Şehir:</label>
                                        <input placeholder="Şehir"
                                               name="sehir"
                                               className="form-control"
                                               value={this.state.sehir}
                                               onChange={this.changeSehir}/>
                                    </div>

                                    <button className="btn btn-success"
                                             onClick={this.saveIsYeri}>Kaydet</button>
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

export default CreateIsYeri;