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
    <div>
      <h1>Github Cards</h1>
      <div>
        <p>This is the login - {this.state.userData.login}</p>
        <p>These are their followers - {this.state.userFollowers.map(position => (
          <p>{position.login}</p>
        )

        )}</p>
      </div>
    </div>
    
    
  )
 }
}

export default App;
