import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom';
import axios from 'axios';
class ProductDetail extends Component {
  constructor(props){
        super(props)
        this.state = {
           products : []
        }
    }    
    componentDidMount(){
      var {match} = this.props;
      if (match) {
        var id = match.params.id;
        axios({
        method: 'GET',
        url :`http://localhost:3000/products/${id}`,
        data : null
       }).then(res =>{
        var data =res.data;
          this.setState({
           products :res.data
          });
          }).catch( err =>{
          console.log(err);
          });
      }
    }
    onClick(){
      alert("Cảm ơn bạn đã đặt hàng !");
    }
      onClick1(){
      alert("Sản phẩm tạm thời hết hàng!");
    }
    

    
    
 render() {

  var price1 = this.state.products.price-(this.state.products.price*this.state.products.sale/100);
  var {products} = this.state;
  let tinhtrang;
  if (products.tinhtranghang ===true) {
    tinhtrang = <button type="submit" className="btn btn-danger " onClick={this.onClick}>Đặt Hàng</button>                 
  } else {
    tinhtrang = <button className="btn btn-danger" readOnly onClick={this.onClick1}>Hết Hàng</button>
  }
    return (
      <div>
        <div className="border-bottom border-top col-md-12">
                    <nav className="navbar navbar-expand-lg navbar-light container ">
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
                      </div>
                    </nav> 
                </div>
        <div className="container">
          <div className="card mb-3" style={{maxWidth: 'auto'}}>
            <div className="row">
              <div className="col-md-4">
               <img src={products.image} className="card-img" />
              </div>
              <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{products.name}</h5>
                <div className="col-md-12" >
                  <div className="row">
                    <p className="col-md-6 loaimay" style={{float:'left'}}>Loại sản phẩm: Giày {this.state.products.n_category}</p>
                    <p  className="col-md-6" style={{float:'right'}}>Tình trạng: {this.state.products.tinhtranghang === true ? 'Còn hàng' : 'Hết hàng'}</p>
                  </div>
                </div>
                <span className="text-danger h4 " >{price1}₫ </span>
                <span className="text-muted "><del>{this.state.products.price}₫</del></span><br/>

                <div className="col-md-12 mt-5" >
                {tinhtrang}
                </div>
                
              </div>
              </div>
             </div>
          </div>
        </div>
        <div className="container">
          <div className="card mb-3 border-0" style={{maxWidth: 'auto'}}>
            <h6>Mô tả:</h6>
            <p>{products.status}</p>
          </div>
        </div>
      </div>
      );
  }
}

export default ProductDetail;