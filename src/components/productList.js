import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addBasket, ADD_PRODUCT} from "../actions/basketAction";

class ProductList extends React.Component {
    
    render(){
        const list = this.props.products.map((product,index) => {
            return (
                <li className="product" key={index}>
                    {product.name}
                    <button className="buttons" onClick={(e) => {
                        this.props.addBasketAction(ADD_PRODUCT,product)
                    }}>+</button>    
                    <span className="price">{product.price}$ </span>
                </li>
            )
        });

        return (
            <div>
                <h1>Product List ({this.props.products.length})</h1>
                <ul>
                    {list}
                </ul>
            </div>
            
        )
    }
}

function mapStateToProps(state) {
    return {
        basketState: state.basket
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        addBasketAction: addBasket
    },dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductList);