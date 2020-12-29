import React, {Component} from 'react';
import DetailData from './DetailData';

class Detail extends Component{
    render(){
        return(
            <div>
                  <DetailData id={this.props.match.params.id} history={this.props.history}/>
            </div>
        )
    }
}

export default Detail;