import React, { Component } from 'react';
import EmlakService from '../services/EmlakService';

class SearchEmlak extends Component {
    constructor(props) {
        super(props)
        this.state = {
            evler: []
        }
        this.changeKira = this.changeKira.bind(this);
    }
    componentDidMount() {
        EmlakService.getEmlak().then((res) => {
            this.setState({ evler: res.data })
        });
    }
    changeKira = (event)=>{
        this.setState({kira: event.target.value==="kira" ? true:false});
        
    }
    render() {
        return (
            <div>

                <div class="flexbox-container">
                    <div>
                        <input placeholder="Şehir ismi yazınız"
                            name="sehir"
                            className="form-control"
                            value={this.state.sehir}
                            onChange={this.changeSehir} /></div>
                    

                    <div><label>Kiralık:</label>
                        <input type="radio"
                            value={"kira"}
                            checked={this.state.kira === true}
                            onChange={this.changeKira} />
                        <label>Satılık:</label>
                        <input type="radio"
                            value={""}
                            checked={this.state.kira === false}
                            onChange={this.changeKira} /></div>
                            <button className="btn btn-primary"
                                             onClick={this.saveEmlak}>Ara</button>
                </div>



            </div>
        );
    }
}

export default SearchEmlak;