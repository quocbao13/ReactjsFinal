import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom';
import axios from 'axios';
import './AllProduct.css';
import Logout from '../logout/logout.js';
class ProductList extends Component {
	 constructor(props){
        super(props)
        this.state = {
           products : [],
           keyword : '',
        }
    }    
    componentDidMount(){
      axios({
        method: 'GET',
        url :'http://localhost:3000/products',
        data : null
      }).then(res =>{
        this.setState({
          products :res.data
        });
      }).catch( err =>{
      });
    }

    onChange = (event) =>{
      var target = event.target;
      var name = target.name;
      var value = target.value;
      this.setState({
        [name] : value
      });
    }    
    render() {
    var { products,keyword } = this.state;
    let search =  this.state.products.filter(
      (product) =>{
        return product.name.toLowerCase().indexOf(this.state.keyword.toLowerCase()) !== -1;
      }
    );
  	return (
       <React.Fragment>        
  		    <div className="">

                <div className="border-bottom border-top col-md-12">
                    <nav className="navbar navbar-expand-lg navbar-light container  ">
                     
                        <form className="form-inline my-2 my-lg-0">
                          <input className="form-control mr-sm-2 search" name="keyword" 
                            value={keyword} onChange ={ this.onChange} 
                            type="search" placeholder="Search" aria-label="Search"/>
                          
                        </form>
                        <NavLink  className="btn btn-primary"  to={`/category/add`}>Thêm danh mục</NavLink>
                        <NavLink  className="btn btn-primary ml-2"  to={`/add`}>Thêm sản phẩm</NavLink>
                        <div className=" col-3 "><Logout/></div>
                    </nav> 

                </div>
                <div className="container">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>Tên sản phẩm</th>
                        <th>Tên danh mục</th>
                        <th>Giá</th>
                        <th>Tình trạng hàng</th>
                        <th>Hình ảnh</th>
                        <th colSpan="2">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                        { search.map((products,index) => {
                        return <Item key={index} products={products} />
                    })}
                    </tbody>
                  </table>
                </div>
        	 </div>
        </React.Fragment>
   		);
	}
}
// Outside component

class Item extends Component {
    render() {
        return (
          <tr >
            <td>
              {this.props.products.name}
            </td>
            <td>
              {this.props.products.n_category}
            </td>
            <td>
              {this.props.products.price}
            </td>
            <td>
              {this.props.products.tinhtranghang === true ? 'Còn hàng' : 'Hết hàng'}
            </td>
            <td>
              <img src={this.props.products.image} width="50px" height="50"/>
            </td>
            <td>
              <NavLink className="btn btn-danger" 
                       to={`/products/${this.props.products.id}/productedit`}>Sửa/Xóa
              </NavLink>&nbsp;
            </td>
          </tr>

        );
    }
}



export default ProductList;