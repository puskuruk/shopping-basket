import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { removeBasket, REMOVE_PRODUCT  } from '../actions/basketAction';

class Basket extends React.Component {
    render() {
        let basketPrice = 0;
        const basketList = 
        this.props.basketState.basketList.map((product,index)=> {
            basketPrice += product.price * product.count;           
            return (
                <tr key={index}>
                    <td style={{paddingRight:'25px'}}>
                        {index+1} - {product.name} ({product.count})
                    </td>
                    <td>
                        <button className="removeProduct"
                        onClick={(e) => this.props.removeBasketAction(REMOVE_PRODUCT,product)}
                        >x</button>
                    </td> 
                </tr>
            )
        });
        return (
            <div className="basket">
                <h4 style={{marginBottom:'0'}}>Basket</h4>
                <hr/>
                {
                    basketList.length === 0 && <p style={{color:'red'}}>Your basket is empty.</p>
                }
                <table>
                    <tbody>                        
                        {basketList}
                    </tbody>
                </table>
                Total Price: {basketPrice}$
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        basketState: state.basket
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        removeBasketAction: removeBasket
        
    },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Basket);