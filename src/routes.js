import React from 'react';
import SanPhamHot from './components/SanPhamHot.js';
import SanPhamKhuyenMai from './components/SanPhamKhuyenMai.js';
import SanPhamMoi from './components/SanPhamMoi.js';
import Add from './components/product/Add.js';
import AllProduct from './components/product/AllProduct.js';
import ProductDetail from './components/product/ProductDetail.js';
import ProductEdit from './components/product/ProductEdit.js';
import NotFound from './components/NotFound.js';
import AddCate from './components/category/AddCate.js';
import SanPhamTheThao from './components/SanPhamTheThao.js';
import SanPhamSandal from './components/SanPhamSandal.js';
import SanPhamDep from './components/SanPhamDep.js';
import SanPhamBupbe from './components/SanPhamBupbe.js';
import SanPhamBoot from './components/SanPhamBoot.js';
import SanPhamKith from './components/SanPhamKith.js';
import SanPhamZoe from './components/SanPhamZoe.js';
import ProductList from './components/product/ProductList.js';
import Login from './components/login/login.js';


const routes = [
	{
		path : '/add',
		exact : true,
		main : ({history})=> <Add history={history} />
	},

	{
		path : '/',
		exact : true,
		main : ()=> <AllProduct />
	},
	{
		path : '/products/:id/productdetail',
		exact : true,
		main : ({match})=> <ProductDetail  match ={match}/>
	},
	{
		path : '/products/:id/productedit',
		exact : true,
		main : ({match, history})=> <ProductEdit  match ={match} history={history}/>
	},
	{
		path : '/product/sanphamhot',
		exact : true,
		main : ({match})=> <SanPhamHot match ={match}/>
	},
	{
		path : '/product/sanphamkhuyenmai',
		exact : true,
		main : ({match})=> <SanPhamKhuyenMai match ={match}/>
	},
	{
		path : '/product/sanphammoi',
		exact : true,
		main : ({match})=> <SanPhamMoi match ={match}/>
	},
	{
		path : '/product/sanphamthethao',
		exact : true,
		main : ({match})=> <SanPhamTheThao match ={match}/>
	},
	{
		path : '/product/sanphamsandal',
		exact : true,
		main : ({match})=> <SanPhamSandal match ={match}/>
	},
	{
		path : '/product/sanphamdep',
		exact : true,
		main : ({match})=> <SanPhamDep match ={match}/>
	},
	{
		path : '/product/sanphambupbe',
		exact : true,
		main : ({match})=> <SanPhamBupbe match ={match}/>
	},
	{
		path : '/product/sanphamboot',
		exact : true,
		main : ({match})=> <SanPhamBoot match ={match}/>
	},
	{
		path : '/product/sanphamkith',
		exact : true,
		main : ({match})=> <SanPhamKith match ={match}/>
	},
	{
		path : '/product/sanphamzoe',
		exact : true,
		main : ({match})=> <SanPhamZoe match ={match}/>
	},
	{
		path : '/category/add',
		exact : true,
		main : ({history})=> <AddCate history={history} />
	},

	{
		path : '/product',
		exact : true,
		main : ({match})=> <ProductList match={match} />
	},
	{
		path : '/login',
		exact : true,
		main : ({match})=> <Login match={match} />
	},
	{
		path : '',
		exact : false,
		main : ()=> <NotFound />
	},
];

export default routes;