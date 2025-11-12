import React from "react";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>This is a class compoenet</h1>
        <h2>The name is : {this.props.name}</h2>
        <h2>Count : {count}</h2>
        <button
          onClick={() => {
            this.setState({
              count: 1,
            });
          }}
        >
          IncreaseCount
        </button>
      </div>
    );
  }
}

export default Cart;
