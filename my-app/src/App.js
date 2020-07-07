import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
 constructor(){
   super();
   this.state = {
    userData: [],
    userFollowers: []
   }
   console.log('constructor works!')

 }


 componentDidMount(){
   axios.get('https://api.github.com/users/hnetty').then(res => {
     // console.log(res.data)

     this.setState({
       userData: res.data
     });

   });

   axios.get('https://api.github.com/users/hnetty/followers').then(res => {
     // console.log(res.data)

     this.setState({
       userFollowers: res.data
     });
   });


 }

 render(){
  // console.log(this.state.userData)
  console.log(this.state.userFollowers)
  return(
    <div className="mainContent">
      <h1 className="headingContent">Github Cards</h1>
      <div>
        <h3 className="headingContent">This is the user:</h3>
        <p className="userCard">{this.state.userData.login}</p>
        <h3 className="headingContent">These are their followers:</h3> {this.state.userFollowers.map(position => (
          <p className="userCard">{position.login}</p>
        )

        )}
      </div>
    </div>
    
    
  )
 }
}

export default App;
