import React from "react";
import ReactDOM from "react-dom";
import List from "./Components/List.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: []
    };
  }
  componentDidMount() {
    fetch("/house", {
      method: "GET",
      headers: { "Content-type": "application/json" }
    })
      .then(data => {
        return data.json();
      })
      .then(data2 => {
        this.setState({
          info: data2
        });
        return data2;
      });
  }

  render() {
    return (
      <div>
        <div>
        <h2 className="homes">More homes you may like</h2>
          <List house={this.state.info} />
        </div>
      </div>
    );
  }
}

export default App;
