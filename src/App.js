import React, {Component} from 'react';
class App extends Component {
  constructor() {
      super();
      this.state = {  
          FirstName: '',
          LastName: "patel"  
      }
        }  
        handleChange= (event) => {
          this.setState({FirstName: event.target.value})
          console.log(event)
  }
  render(){
      return(
          <div>
            <label>enter name here</label>
              <input type="text" onChange={(event)=>{this.handleChange(event)}}/>
              
      <p>{this.state.FirstName}</p>
          </div>
      )
  }
}
export default App;