import React,{Component} from 'react';
import classnames from 'classnames';
import './style.less';
class Pagination extends Component {

    onClick=(index)=>{
        this.props.onPaginationClick(index);
    }
    render(){
        const {dots, currentIndex} = this.props;
        const dotsArray = Array(dots).fill(1);
       return(
            <ul className="pagination">
                {dotsArray.map((ele, index) =>{
                    return(
                        <li 
                            key={index} 
                            className={classnames("pagination-item", {"selected": index===currentIndex})}
                            onClick={()=>this.onClick(index)}
                            ></li>
                    )
                    
                })}
            </ul>
       )
    }
}

export default Pagination;
