import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom';
import axios from 'axios';
class ProductEdit extends Component {
	constructor(props){
        super(props)
        this.state = {
          category : [],
          id :'',
          name : '',
          status : '',
          price : '',
          sale : '',
          image : '',
          n_category : '',
          tinhtranghang : '',
          trangthai: ''
        }
    }   
    componentDidMount(){
      axios({
          method: 'GET',
          url :'http://localhost:3000/category',
          data : null
        }).then(res =>{
          this.setState({
            category :res.data
          });
        }).catch( err =>{
        });


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
            id : data.id,
           name :data.name,
           status :data.status,
           price :data.price,
           sale :data.sale,
           image :data.image,
           n_category :data.n_category,
           tinhtranghang :data.tinhtranghang,
         	 trangthai :data.trangthai
        	});
      		}).catch( err =>{
        	console.log(err);
      		});
        
    	}
    }
    onChange = (event) =>{
      var target =event.target;
      var name =target.name;
      var type =target.type;
      var value =target.value;
      if (name === 'tinhtranghang') {
        value =target.value === 'true' ? true :false;
      }
      if (type === 'file') {
        value = this.image.value.replace( /C:\\fakepath\\/i, "/images/" );
      }

      this.setState({
        [name] : value,
      });
    }
    delete=(e)=> {
      e.preventDefault();
      var {match} = this.props;
      var id = match.params.id;
      var {history} = this.props;
          axios({
          method: 'delete',
          url :`http://localhost:3000/products/${id}`
          }).then(res =>{
              history.push("/product");
          });
    }
    onSave =(e) =>{
      e.preventDefault();
      var {id, name, status, price, sale, image , n_category, tinhtranghang, trangthai} = this.state;
      var {history} = this.props;
          axios({
          method: 'PUT',
          url :`http://localhost:3000/products/${id}`,
          data : {
              name : name,
              status : status,
              price : price,
              sale : sale,
              image : image,
              n_category : n_category,
              tinhtranghang : tinhtranghang,
              trangthai : trangthai,
            }
          }).then(res =>{
              history.push("/");
          });
    } 
    
    
 render() {
  	return (
      <div className="panel panel-warning col-md-12">
              <div className="panel-heading">
                <h3 className="panel-title col-md-12 text-center mt-3">Hãy nhập thông tin sản phẩm
                </h3>
              </div>

              <div className="panel-body">
                <form onSubmit = {this.onSave} >
                  <div className="col-md-6 m-auto border p-2 mb-2">
                      <div className="form-group col-md-12 float-left mt-2">
                        <label className="col-md-3 text-right float-left">Tên Sản phẩm :</label>
                        <input type="text" name="name" 
                          value ={this.state.name} 
                          onChange ={this.onChange} 
                          className="form-control col-md-9 float-left" required/>
                      </div>
                      <div className="form-group col-md-12 float-left mt-2">
                        <label className="col-md-3 text-right float-left">Mô tả :</label>
                        <input type="text" name="status" 
                          value ={this.state.status} 
                          onChange ={this.onChange} 
                          className="form-control col-md-9 float-left" required/>
                      </div>
                      <div className="form-group col-md-12 float-left mt-2">
                        <label className="col-md-3 text-right float-left">Giá Sản phẩm :</label>
                        <input type="number" name="price" 
                          value ={this.state.price} 
                          onChange ={this.onChange} 
                          className="form-control col-md-9 float-left" required/>
                      </div>
                      <div className="form-group col-md-12 float-left mt-2">
                        <label className="col-md-3 text-right float-left">Giá Khuyến Mãi :</label>
                        <input type="number" name="sale" 
                          value ={this.state.sale} 
                          onChange ={this.onChange} 
                          className="form-control col-md-9 float-left" required/>
                      </div>
                      <div className="form-group col-md-12 float-left mt-2">
                        <label className="col-md-3 text-right float-left">Chọn Ảnh :</label>
                        <img width="118px" height="118px" 
                          name="image"
                          className=" col-md-3 float-left"
                          onChange={this.onChange}
                          src={this.state.image} alt="Card image cap"/>
                        <input type="file" name="image"
                          ref ={ (input) => { this.image = input} } 
                          onChange ={this.onChange} 
                          className="form-control col-md-4 float-left" />
                      </div>
                      <div className="form-group col-md-12 float-left mt-2">
                        <label className="col-md-3 text-right float-left">Tên danh mục: </label>
                        <select className="browser-default custom-select col-md-9 float-left" 
                          name="n_category" 
                          value={this.state.n_category}
                          onChange={this.onChange} required>
                          <option >Nhấn để chọn...</option>
                          {this.state.category.map(function(item, i){
                                return (
                                        <option key={i} value={item.name}>{item.name}</option>
                                    )
                            })}
                          
                          
                        </select>
                      </div>
                      <div className="form-group col-md-12 float-left mt-2">
                          <label className="col-md-3 text-right float-left">Tình trạng hàng :</label>
                          <select className="browser-default custom-select  col-md-9 float-left" 
                            name ="tinhtranghang" 
                            value ={this.state.tinhtranghang} 
                            onChange ={this.onChange} required="required">
                            <option value={true}>Còn hàng</option>
                            <option value={false}>Hết hàng</option>
                          </select>
                      </div>
                      <div className="form-group col-md-12 float-left mt-2">
                        <label className="col-md-3 text-right float-left">Trạng thái: </label>
                        <select className="browser-default custom-select col-md-9 float-left" 
                          name="trangthai" 
                          value={this.state.trangthai}
                          onChange={this.onChange} required>
                          <option >Nhấn để chọn...</option>
                          <option value="Mới">Mới</option>
                          <option value="Hot">Hot</option>
                          <option value="Khuyến mãi">Khuyến mãi</option>
                        </select>
                      </div>
                      <br />
                      <div className="text-center">
                        <button type="submit"  className="btn btn-info">Lưu</button>&nbsp;
                        <button onClick={this.delete}  className="btn btn-danger">Xóa</button>&nbsp;
                        <Link to="/" className="btn btn-primary ml-1">Trở lại</Link>
                      </div>
                  </div>
                </form>
              </div>
            </div>
   		);
	}
}

export default ProductEdit;