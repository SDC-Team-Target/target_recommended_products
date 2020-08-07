import React, {Component} from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import Tab1 from './Tab1.jsx';
import Tab2 from './Tab2.jsx';
import Tab3 from './Tab3.jsx';

export default class App extends Component {
  constructor(props){
    super();
    this.state = {
      activeTab: 'More to consider',
      key: 'home'
    }
    this.handleTabClick = this.handleTabClick.bind(this);
  }

  handleTabClick(tab) {
    this.setState({activeTab: tab});
  }

  render() {
    const{initial, key} = this.state;
    
    return(
        <Tabs
        id="controlled-tab-example"
        transition={false} 
        activeKey={key}
        onSelect={key => this.setState({ key })}
      >
        <Tab eventKey="more to consider" title="More to consider">
            more to consider data
    
        </Tab>
        <Tab eventKey="similar items" title="Similar items">
            similar items

        </Tab>
        <Tab eventKey="guests also bought" title="Guests also bought">
        guests also bought
        </Tab>
      </Tabs>
    )
  }
};