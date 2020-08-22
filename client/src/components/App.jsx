import React, { Component } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import axios from 'axios';
import { shuffle } from 'underscore';
import ProductList from './ProductList.jsx';
import SimilarItemsList from './SimilarItemsList.jsx';
import SuggestedProductsList from './SuggestedProductsList.jsx';
import FrequentPanel from './FrequentPanel.jsx';
import sampleData from '../sampleData';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      key: 'more to consider',
      products: sampleData,
      productID: '',
      currentCategory: null,
      currentProduct: sampleData[19],
      productsByCategory: sampleData,
      additionalProducts: sampleData.slice(0, 2),
    };

    this.getAllItems = this.getAllItems.bind(this);
    this.handleProductInput = this.handleProductInput.bind(this);
    this.handleSearchClick = this.handleSearchClick.bind(this);
    this.filterByCategory = this.filterByCategory.bind(this);
    this.handleProductIdSearch = this.handleProductIdSearch.bind(this);
  }

  componentDidMount() {
    this.getAllItems();
    this.setState({productID: window.product_id || 1});
    setTimeout(() => {this.handleSearchClick();}, 0);
    document.addEventListener('click', () => { 
      this.handleProductIdSearch()})
  }

  handleProductIdSearch(){
    if(window.product_id){
      if(window.product_id !== this.state.productID) {
        this.setState({productID: window.product_id});
        this.handleSearchClick();
      }
    }
  }

  getAllItems() {
    axios.get('http://ec2-18-222-181-197.us-east-2.compute.amazonaws.com:4040/items/')
      .then((items) => this.setState({ products: items.data }))
      .then(() => console.log('Fetched products'))
      .catch((error) => console.log(`Couldn't fetch any products`, error));
  }

  filterByCategory() {
    const { products, currentCategory, productsByCategory } = this.state;
    const filteredProducts = products.filter((product) => product.category === currentCategory);
   
    this.setState({ productsByCategory: filteredProducts });
    this.setState({ additionalProducts: shuffle(filteredProducts) });
  }

  handleProductInput(input) {
    this.setState({ productID: input.target.value });
  }

  handleSearchClick() {
    const { productID } = this.state;

    axios.get(`http://ec2-18-222-181-197.us-east-2.compute.amazonaws.com:4040/items/${productID}`)
      .then((prod) => {
        this.setState({ currentCategory: prod.data[0].category });
        this.setState({ currentProduct: prod.data[0] });
      })
      .then(() => this.filterByCategory())
      .catch((error) => console.log(`Couldn't fetch products by ID`, error));
  }

  render() {
    const {
      key, currentProduct, products, productsByCategory, additionalProducts,
    } = this.state;

    return (
      <div id="tabs-outerContainer">
        <FrequentPanel
          currentProduct={currentProduct}
          extras={additionalProducts}
        />
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
            <SuggestedProductsList products={shuffle(products)} />
          </Tab>
        </Tabs>
        <hr />
        <img alt="Sponsored. Home essentials, now home delivered. Order with same delivery for contactless Shopping. Target same day delivery. Shopped by SHIPT." 
          className="heroImg" src="https://tpc.googlesyndication.com/simgad/14598546974536872415?"></img>
          <span style={{margin: 0 , float: 'right', paddingBottom: '20px', fontSize: '10px'}}>sponsored</span>
      </div>
    );
  }
}
