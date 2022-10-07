// import React, { Component } from 'react'
// import { Increment,Decrement } from './Action/actionCreator.js'
// import { connect } from 'react-redux'
// const mapStateToProps=(props)=>{
//  return{
//   inc:props.increment,
//   dec:props. decrement//combinReducer
//  }
// }

// const mapDispatchToProps=(dispatch)=>{
//   return{
//      increment:()=>dispatch(Increment()), //actions
//      decrement:()=>dispatch(Decrement())
//   }
// }

// class App extends Component {
//   render() {
//     return (
//       <div>
//          <h1>incement count:{this.props.inc}</h1>
//          <h1>decrement Count:{this.props.dec}</h1>
//          <button onClick={()=>{this.props.increment()}}>+</button>
//          <button onClick={()=>{this.props.decrement()}}>-</button>
//       </div>
//     )
//   }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(App)