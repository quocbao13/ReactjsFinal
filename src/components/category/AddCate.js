import React, {Component} from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
class AddCate extends Component {
	constructor(props){
        super(props);
        this.state = {
            id: '',
            name : '' 
        }
    }

    onChange = (event) =>{
      var target =event.target;
      var name =target.name;
      var type =target.type;
      var value =target.value;

      this.setState({
        [name] : value,
      });
    }

    onSave =(e) =>{
    	e.preventDefault();
    	var { name} = this.state;
      var {history} = this.props;
        axios({
        method: 'POST',
        url :'http://localhost:3000/category',
        data : {
            name : name,
          }
        }).then(res =>{
 			      history.push("/product");
        });
    } 

    onClear = () =>{
      this.setState({
            name : '',
      });
    }

    render() {
    	var { name} = this.state;
  	return (
  		<div className="panel panel-warning col-md-12">
              <div className="panel-heading">
                <h3 className="panel-title col-12 text-center mt-3">Hãy nhập thông tin sản phẩm
                </h3>
              </div>

              <div className="panel-body col-6 m-auto">
                <form onSubmit = {this.onSave}>
                  <div className="form-group">
                    <label className="col-3 float-left">Tên Sản phẩm :</label>
                    <input type="text" name="name" 
                      value ={this.state.name} 
                      onChange ={this.onChange} 
                      className="form-control col-9 float-left" required/>
                  </div>
                  
                  <br />
                  <div className="text-center mt-5">
                    <button type="submit"  className="btn btn-primary">Lưu</button>&nbsp;
                    <button type="button" onClick={this.onClear} className="btn btn-primary">Clear</button>
                    <Link to="/product" className="btn btn-primary ml-1">Trở lại</Link>
                  </div>
                </form>
              </div>
            </div>
   		);
	}
}

export default AddCate;