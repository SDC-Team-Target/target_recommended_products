import React, { Component } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import axios from 'axios';
import ProductList from './ProductList.jsx';
import SimilarItemsList from './SimilarItemsList.jsx';
import SuggestedProductsList from './SuggestedProductsList.jsx';
import FrequentPanel from './FrequentPanel.jsx';
import sampleData from '../sampleData';
import grabRandomItems from '../helpers/grabRandomItems.js';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      key: 'more to consider',
      products: sampleData,
      productID: '',
      currentCategory: null,
      currentProduct: sampleData[0],
      productsByCategory: sampleData,
      extras: sampleData.slice(0, 2)
    };

    this.getAllItems = this.getAllItems.bind(this);
    this.handleProductInput = this.handleProductInput.bind(this);
    this.handleSearchClick = this.handleSearchClick.bind(this);
    this.filterByCategory = this.filterByCategory.bind(this);
  }

  componentDidMount() {
    this.getAllItems();
  }

  getAllItems() {
    axios.get('http://localhost:4040/items/')
      .then((items) => this.setState({ products: items.data }))
      .then(()=> console.log('Fetched products'))
      .catch((error) => console.log(`Couldn't fetch kitchen products`, error));
  }
  
  filterByCategory(){
    const { products, currentCategory} = this.state;
    const filteredProducts = products.filter(product => 
      product.category === currentCategory );
    
    this.setState({productsByCategory: filteredProducts});
  }

  handleProductInput(input) {
    this.setState({ productID: input.target.value });
  }

  handleSearchClick() {
    const { productID } = this.state;
    
    axios.get(`http://localhost:4040/items/${productID}`)
    .then( (prod)=> {
      this.setState({currentCategory: prod.data[0].category})
      this.setState({currentProduct: prod.data[0]})})
    .then(() => this.filterByCategory())
    .then(()=> {
      const arr = [];
      const randos = grabRandomItems(this.state.productsByCategory, this.state.currentProduct);

      for(let i = 0; i < 2; i++) {
        arr.push(this.state.productsByCategory[randos[i]]);
      }
      return arr;
    })
    .then((ranArr)=> this.setState({extras: ranArr}))
    .catch((error) => console.log(`Couldn't fetch products by ID`, error))
    
  }
  
  render() {
    
    const { key, currentProduct, products, productsByCategory, extras} = this.state;

    return(
      <div id="tabs-outerContainer">
        <div >
        <label>Product:  
        <input type='text' name ='product_id' onChange={this.handleProductInput} placeholder='enter product id' />
        </label>
        <button onClick={this.handleSearchClick}>Search</button>
      </div>
      <br></br><br></br>
      {/* <FrequentPanel 
      currentProduct={currentProduct} extras={extras}/> */}
      <h3>Recommended</h3>
      <Tabs
        id=""
        transition={false} 
        activeKey={key}
        onSelect={(key) => this.setState({ key })}
      >
        <Tab eventKey="more to consider" title="More to consider">
          <ProductList products={productsByCategory} />
        </Tab>
        <Tab eventKey="similar items" title="Similar items">
          <SimilarItemsList products={productsByCategory} />
        </Tab>
        <Tab eventKey="guests also bought" title="Guests also bought">
          <SuggestedProductsList products={products}/>
        </Tab>
      </Tabs><hr></hr>
      </div>
    );
  }
}

