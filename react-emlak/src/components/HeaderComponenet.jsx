import React, {Component} from 'react';
import CreateEmlak from './CreateEmlak';
import CreateIsYeri from './CreateIsYeri';

class HeaderComponenet extends Component {
    constructor(props) {

        super(props)
        this.state = {
        
        }
        
    }
  
    
    render() {
        return (
            
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div><a href="https://google.com" className="navbar-brand">Sanal Emlak</a> </div>


                    </nav>
                </header>
               
            </div>
        );
    }
}

export default HeaderComponenet;