import React, { Component } from 'react';
import cropName from '../helpers/cropName.js';

export default class FrequentPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      extras: this.props.extras,
      bundle: null,
      box1: true,
      box2: true,
      box3: true,
      activeBoxes: 3,
      addButton: 'all (3)',
    };
    this.getTotal = this.getTotal.bind(this);
    this.updateTotal = this.updateTotal.bind(this);
    this.updateBoxCount = this.updateBoxCount.bind(this);
    this.updateAddButton =  this.updateAddButton.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.currentProduct !== prevProps.currentProduct) {
      this.getTotal ();
      this.setState({
        box1: true,
        box2: true,
        box3: true,
        activeBoxes: 3,
        addButton: 'all (3)',
        extras: this.props.extras,
        bundle: [],
      });
    }
  }

  componentDidMount() {
    const { extras } = this.state;

    this.getTotal();
  }
  
  getTotal() {
    var sum = 0;
    const { extras } = this.state;

    sum += this.props.currentProduct.item_price;

    for (let i = 0; i < 2; i++) {
      sum += this.props.extras[i].item_price;
    }
    
    this.setState({ total: sum.toFixed(2) })
  }

  updateAddButton(n) {
    switch (n) {
      case 1: this.setState({ addButton: '' }); 
        break;
      case 2: this.setState({ addButton: '(2)' }); 
        break;
      case 3: this.setState({ addButton: 'all (3)' }); 
        break;
      default: this.setState({ addButton: '' });
    }
  }

  updateBoxCount(bool) {
    var currentCount = Number(this.state.activeBoxes);

    if (bool) {
      this.setState({ activeBoxes: currentCount + 1 });
    } else{
      this.setState({ activeBoxes: currentCount - 1 });
    }
    setTimeout(() => { this.updateAddButton(this.state.activeBoxes) }, 0);
  }

  updateTotal(amt) {
   this.setState({ total: (Number(this.state.total) + amt).toFixed(2) });
  }

  render() {
    const {
      extras, total, activeBoxes, addButton, box1, box2, box3,
    } = this.state;

    return (
      <div id="freqContainer">
        <div id="freqInnerContainer">
          <h3>Frequently bought together</h3>
          <div className="row">
            <div className="column">
              <img src={this.props.currentProduct.img_url} width={150} height={150} alt="item"></img>
              <div className="more-prod-desc">
                <p style={{ fontWeight: 'bold' }}>
                  $
                  {this.props.currentProduct.item_price.toFixed(2)}
                </p>
                <p>{cropName(this.props.currentProduct.item_name)}</p>
                <div>
                  <input
                    onChange={() => {
                      if (box1) {
                        this.updateTotal(this.props.currentProduct.item_price * -1);
                        this.setState({ box1: !box1 });
                        this.updateBoxCount(false);
                      } else {
                        this.updateTotal(this.props.currentProduct.item_price);
                        this.setState({ box1: !box1 });
                        this.updateBoxCount(true);
                      }
                    }}
                    type="checkbox"
                    id="added"
                    name="itemAdded"
                    defaultChecked
                  >
                  </input>
                </div>
              </div>
            </div>
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" focusable="false">
              <path id="nds-Icon561a" d="M12.75 3.25v8h8v1.5h-8v8h-1.5v-8h-8v-1.5h8v-8z"></path>
            </svg>
            <div className="column">
              <img src={extras[0].img_url} width={150} height={150} alt="item"></img>
              <div className="more-prod-desc">
                <p style={{ fontWeight: 'bold' }}>
                  $
                  {extras[0].item_price}
                </p>
                <p>{cropName(extras[0].item_name)}</p>
                <div>
                  <input
                    onChange={() => {
                      if (box2) {
                        this.updateTotal(extras[0].item_price * -1);
                        this.setState({ box2: !box2 });
                        this.updateBoxCount(false);
                      } else {
                        this.updateTotal(extras[0].item_price);
                        this.setState({ box2: !box2 });
                        this.updateBoxCount(true);
                      }
                    }}
                    type="checkbox"
                    id="added"
                    name="itemAdded"
                    defaultChecked
                  >
                  </input>
                </div>
              </div>
            </div>
            <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" focusable="false">
              <path id="nds-Icon561a" d="M12.75 3.25v8h8v1.5h-8v8h-1.5v-8h-8v-1.5h8v-8z"></path>
            </svg>
            <div className="column">
              <img src={extras[1].img_url} width={150} height={150} alt="item"></img>
              <div className="more-prod-desc">
                <p style={{ fontWeight: 'bold' }}>
                  $
                  {extras[1].item_price}
                </p>
                <p>{cropName(extras[1].item_name)}</p>
                <div>
                  <input
                    onChange={() => {
                      if (this.state.box3) {
                        this.updateTotal(extras[1].item_price * -1);
                        this.setState({ box3: !box3 });
                        this.updateBoxCount(false);
                      } else {
                        this.updateTotal(extras[1].item_price);
                        this.setState({ box3: !box3 });
                        this.updateBoxCount(true);
                      }
                    }}
                    type="checkbox"
                    id="added"
                    name="itemAdded"
                    defaultChecked
                  >
                  </input>
                </div>
              </div>
            </div>
          </div>
          <p className="freqSubtotal" style={{ fontSize: '19px', lineHeight: '44px', color: '#333333' }}>
            Subtotal: &nbsp;
            <span style={{ fontWeight: 'bold' }}>
            $
            {total} &nbsp;
            </span>
            ({activeBoxes} items) &nbsp;
            <button
              onClick={() => console.log(box1, box2, box3)}
              style={{ fontWeight: 'bold', backgroundColor: '#CA0813', color: 'white' }}
            >
              Add {addButton} &nbsp;to cart
            </button>
          </p>
        </div>
      </div>);
  }
}
