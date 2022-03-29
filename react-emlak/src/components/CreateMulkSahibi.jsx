import React, {Component} from 'react';
import SahipService from '../services/SahipService';

class CreateMulkSahibi extends Component {
   
    constructor(props) {

        super(props)
        this.state = {
            isim: '',
            eposta:'',
            telefon: ''


        }
        this.changeIsim = this.changeIsim.bind(this);
        this.changeEposta = this.changeEposta.bind(this);
        this.changeTelefon = this.changeTelefon.bind(this);
        this.saveSahip = this.saveSahip.bind(this)
    }

    saveSahip = (e) => {
        e.preventDefault();
        let sahip = {adSoyad: this.state.isim, telefon: this.state.telefon, eposta: this.state.eposta};
        console.log('person =>' + JSON.stringify(sahip))
        debugger;
         SahipService.createMulkSahibi(sahip).then(res =>{
             debugger;
            this.props.history.push('/liste')
          });}
    cancel(){
        this.props.history.push('/liste')
    }
    changeTelefon = (event)=>{
        this.setState({telefon: event.target.value});
    }
    changeEposta = (event)=>{
        this.setState({eposta: event.target.value});
    }
    changeIsim = (event)=>{
        this.setState({isim: event.target.value});
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3">
                            <h3 className="text-center">Mülk Sahibi Ekle</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Ad Soyad:</label>
                                        <input placeholder="Ad Soyad"
                                               name="isim"
                                               className="form-control"
                                               value={this.state.isim}
                                               onChange={this.changeIsim}/>
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
                                        <label>Eposta:</label>
                                        <input placeholder="ePosta"
                                               name="eposta"
                                               className="form-control"
                                               value={this.state.eposta}
                                               onChange={this.changeEposta}/>
                                    </div>

                                    <button className="btn btn-success"
                                             onClick={this.saveSahip}>Kaydet</button>
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

export default CreateMulkSahibi;