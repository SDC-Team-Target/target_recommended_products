import React, {Component} from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import axios from 'axios';
import ProductList from './ProductList.jsx';
import Tab2 from './Tab2.jsx';
import Tab3 from './Tab3.jsx';

export default class App extends Component {
  constructor(props){
    super();
    this.state = {
      activeTab: 'More to consider',
      key: 'more to consider',
      products: ''
    }
    this.getItems = this.getItems.bind(this);
  }

  componentDidMount(){
    this.getItems();
  }

  getItems(){
    axios.get(`http://localhost:4040/kitchen`)
    .then(items => this.setState({products: items.data}))
    .then(()=> console.log(this.state.products))
    .catch(error => console.log(`Couldn't fetch kitchen products`))
  }

  render() {
    const{key, products} = this.state;
    
    return(
      <Tabs
        id=""
        transition={false} 
        activeKey={key}
        onSelect={key => this.setState({ key })}
      >
        <Tab eventKey="more to consider" title="More to consider">
          <ProductList products={products}/>
        </Tab>
        <Tab eventKey="similar items" title="Similar items">
          <Tab2 />
        </Tab>
        <Tab eventKey="guests also bought" title="Guests also bought">
          <Tab3 />
        </Tab>
        </Tabs>
    )
  }
};