import React , {Component} from 'react';
import ReactDOM from 'react';



class Jph extends Component {
    
    render(){

        const getJph = document.querySelector('.testtt');    
        
        return(
            <React.Fragment>
                
                <button id="getJph" className="testtt">Traer Datos</button>
                

            </React.Fragment>
        );
    }
}

export default Jph; 