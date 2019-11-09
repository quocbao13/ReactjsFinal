import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import routes from './routes.js';
import AllProduct from './components/product/AllProduct.js';
class App extends Component {
  render(){
  return (
    <Router>
      <div className="bg" >
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
            <NavLink className="navbar-brand" to="/"><h1>VASCARA</h1></NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
              </ul>
              <form className="form-inline my-2 my-lg-0">
                
              </form>
            </div>
          </nav>
      </div>
         
       
      </div>
      
      <div className="col-md-12 float-left">
        <Switch>  
        {this.showContentMenu(routes)} 
        </Switch>
      </div>
        
      <div className="row">
        <div className=" col-md-12 float-left">
          <section className="footer">
          <div className="container">
            <div className="row text-center text-xs-center text-sm-left text-md-left">
              <div className="col-xs-12 col-sm-4 col-md-4">
                <h5>Sản phẩm</h5>
                <ul className="list-unstyled quick-links">
                  <li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>Zoe</a></li>
                  <li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>Kith</a></li>
                  <li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>Thể thao</a></li>
                  <li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>Búp bê</a></li>
                  <li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>Dép</a></li>
                </ul>
              </div>
              <div className="col-xs-12 col-sm-4 col-md-4">
                <h5>Tin tức</h5>
                <ul className="list-unstyled quick-links">
                  <li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>Mới</a></li>
                  <li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>Hot</a></li>
                  <li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>Khuyến mãi</a></li>
                </ul>
              </div>
              <div className="col-xs-12 col-sm-4 col-md-4">
                <h5>Địa chỉ</h5>
                <ul className="list-unstyled quick-links">
                  <li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>Hà Nội</a></li>
                  <li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>Đà Nẵng</a></li>
                  <li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>Sài gòn</a></li>
                  <li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>Huế</a></li>
                  <li><a href="https://wwwe.sunlimetech.com" title="Thành phố Cà Mau"><i className="fa fa-angle-double-right"></i>Cà Mau</a></li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
                <ul className="list-unstyled list-inline social text-center">
                  <li className="list-inline-item"><a href="javascript:void();" title="Facebook"><i className="fa fa-facebook"></i></a></li>
                  <li className="list-inline-item"><a href="javascript:void();" title="Twitter"><i className="fa fa-twitter"></i></a></li>
                  <li className="list-inline-item"><a href="javascript:void();" title="Instagram"><i className="fa fa-instagram"></i></a></li>
                  <li className="list-inline-item"><a href="javascript:void();" title="Google"><i className="fa fa-google-plus"></i></a></li>
                  <li className="list-inline-item"><a href="javascript:void();" title="Mail" target="_blank"><i className="fa fa-envelope"></i></a></li>
                </ul>
              </div>
            </div>  
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
                <p><u><a href="https://www.nationaltransaction.com/">National Transaction Corporation</a></u> is a Registered MSP/ISO of Elavon, Inc. Georgia [a wholly owned subsidiary of U.S. Bancorp, Minneapolis, MN]</p>
                <p className="h6">&copy All right Reversed.<a className="text-green ml-2" href="https://www.sunlimetech.com" target="_blank">Sunlimetech</a></p>
              </div>
            </div>  
          </div>
        </section>

        </div>
      </div>
      </Router>

    );

  }
  showContentMenu = (routes) =>{
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) =>{
        return (
            <Route key ={index} path = {route.path} exact = {route.exact} component={route.main} />
          );
      });
    }
    return result;
  }
}

export default App;