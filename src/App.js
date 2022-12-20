import React from "react";
import './App.css';
class App extends React.Component {
   
    // Constructor 
    constructor(props) {
        super(props);
   
        this.state = {
            items: [],
            DataisLoaded: false
        };
    }
   
    // ComponentDidMount is used to
    // execute the code 
    componentDidMount() {
        fetch(
"https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }
    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div> ;
   
        return (
        <div className = "App">
            <h1> Table of names and email</h1>  
            {
                <table id="table">
                <tr>
                  <th>name</th>
                  <th>email</th>
                </tr>
                  {items.map((item)=> (
                    <tr>
                      <td>{item.name} </td>
                      <td>{item.email}</td>
                    </tr>))}
                </table>
                
            }
        </div>
    );
}
}
   
export default App;
