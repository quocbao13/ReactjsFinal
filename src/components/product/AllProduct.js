import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom';
import axios from 'axios';
import './AllProduct.css';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';   
import Alert from './alert.js';
import AlertDetail from './AlertDetail.js';

class AllProduct extends Component {
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
  		    <div className="bbb row ">

                <div className="border-bottom border-top col-md-12">
                    <nav className="navbar navbar-expand-lg navbar-light container  ">
                      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                      </button>

                      <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                           <li className="nav-item">
                            <NavLink className="nav-link" to="/product/sanphamthethao">THỂ THAO</NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink className="nav-link" to="/product/sanphamsandal">SANDAL</NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink className="nav-link" to="/product/sanphamdep">DÉP</NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink className="nav-link" to="/product/sanphambupbe">BÚP BÊ</NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink className="nav-link" to="/product/sanphamboot">BOOT</NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink className="nav-link" to="/product/sanphamkith">KITH</NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink className="nav-link" to="/product/sanphamzoe">ZOE</NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink className="nav-link" to="/product/sanphammoi">SP MỚI</NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink className="nav-link" to="/product/sanphamhot">SP HOT</NavLink>
                          </li>
                          <li className="nav-item">
                            <NavLink className="nav-link" to="/product/sanphamkhuyenmai">SP KHUYẾN MÃI</NavLink>
                          </li>

                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                          <input className="form-control mr-sm-2 search" name="keyword" 
                            value={keyword} onChange ={ this.onChange} 
                            type="search" placeholder="Search" aria-label="Search"/>
                          
                        </form>
                        <NavLink className="btn btn-outline-primary my-2 my-sm-0" to={`/login`}>ĐĂNG NHẬP</NavLink>
                      </div>
                    </nav> 
                </div>
                    <div className="container mt-2">
                        { search.map((product,index) => {
                        return <Item key={index} product={product} />
                    })}
                    </div>
        	 </div>
        </React.Fragment>
   		);
	}
}
// Outside component

class Item extends Component {
    onClickThis(){
        alert('Cảm ơn đã đặt hàng');
    }
    format_price =(price)=>{
        return price.replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1.")
    }
    render() {
        var price1 = this.props.product.price-(this.props.product.price*this.props.product.sale/100);
        var {product} = this.props;
        var name = this.props.product.name;
        var length = 30;
        var trimmedString = name.length > length ? 
                    name.substring(0, length - 3) + "..." : 
                    name;
        return (
          <div className="mt-2" className="col-md-12 bbb" >
            <div className="col-md-3 float-left">
                <div className="hovereffect a">
                    <div className="sale-flash">
                      <b> - {this.props.product.sale}% </b>                           
                    </div>
                    <div className="trangthai-flash ">
                      <b>  {this.props.product.trangthai} </b>                           
                    </div>
                    <img className="img-responsive" src={this.props.product.image} alt=""/>
                        <div className="overlay">
                            <NavLink className="alert1" to={''}><Alert/></NavLink>
                          <NavLink  className="alert2"  to={`/products/${product.id}/productdetail`}><AlertDetail/></NavLink>
                            
                            
                            
                               
                               
                                
                        </div>
                    <h6 className="card-text col-12 float-left">{trimmedString}</h6>
                    <span className="text-muted float-right"><del>{this.format_price(this.props.product.price)}₫</del></span>
                    <span className="text-danger float-left" >{price1}₫ </span>
                 
                </div>
            </div>
          </div> 

        );
    }
}



export default AllProduct;