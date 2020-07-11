import React, {Component} from 'react';
class hooksetstate extends Component {
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
                <input type="text" onChange={(event)=>{this.handleChange(event)}}/>
        <p>{this.state.FirstName}</p>
            </div>
        )
    }
}
export default hooksetstate;