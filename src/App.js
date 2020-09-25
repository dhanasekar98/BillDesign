import React from "react";
import "./App.css"
import FormContainer from "./Components/Library/FormContainer/FormContainer"
import AutoComplete from "../src/Components/Library/AutoComplete/AutoComplete"

import axios from "axios";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      records: []
    }
  }
  componentDidMount() {
    axios.get(`/getAllCircleName`)
    .then(x => {
      console.log(x);
      this.setState({records: x.data});
    });
  }

  showresult=()=>{
    return this.state.records.map(s=>s.circleName.split('\n'))
  }
  
  render() {
    return (
      <div className="main">
        <FormContainer />
        
        
      </div>
    );
  }
}

export default App;
