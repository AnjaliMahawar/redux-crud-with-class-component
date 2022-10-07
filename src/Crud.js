import React, { Component } from 'react'
import {connect} from 'react-redux'
import { addEmployeesActionCreator, employDelActionCreator, updateEmployeesActionCreator } from './Action/actionCreator'
const mapStateToProps=(props)=>{
    return{
  
   add:props.addReducer,
  deleteD:props.deleteReducer,
  updateR:props.updateEmployeesReducer

    }
   }
  
   const mapDispatchToProps=(dispatch)=>{ 
    return{
      
     addData:(data)=>dispatch(addEmployeesActionCreator(data)),
    deleteData:(data,data1)=>dispatch(employDelActionCreator(data,data1)),
    updateEmp:(data)=>dispatch(updateEmployeesActionCreator(data))
    }
  }
  
 class Crud extends Component {
    constructor(props){

        super(props)
           this.state={
                username:"",  email:"",Mobile:"", employeeData:[], ditIndex:"",show:false, editIndex:''   
            }
        }
  
 onChange=(e)=>{
 
     this.setState({[e.target.name]:e.target.value})
    
 }
onSubmit=(e)=>{
    e.preventDefault()
    console.log("ok")
    this.props.addData(this.state)
   this.setState({
  username:'',
  email:"",
  Mobile:""
})

}
handleDelete=(e)=>{
  
let id=e.target.value
console.log("id",id)
this.props.deleteData(id,this.state)
//console.log("add data",this.state)
}
handleEdit=(indx,data)=>{
    var userName1=data.userName
  var email1=data.email
  var Mobile1=data.Mobile

  this.setState({
    username:userName1,
    email:email1,
    Mobile:Mobile1,
    show:true,
    editIndex:indx
  })


}

handleUpdate=(e)=>{
    e.preventDefault()
    this.props.updateEmp(this.state)
    this.setState({
        employeeData:this.state.employeeData
      })
      this.setState({
        username:'',
        email:"",
        Mobile:""
      })

}

  render() {
    let employeeData=this.state.employeeData;
    const{username,password,error,email,usernameL2,Mobile,err}=this.state
    return (
      <>
      <h1>React Redux crud with class componenet </h1>
      <form >
        <label>Name :</label>
        <input type="text"
        name='username'
        value={username}
        onChange={this.onChange}/>
        
        <br/>
       <label>SurName:</label>
        <input type="text"
        name='email'
        value={email}
        onChange={this.onChange}/>
        <br/>
       <label>Address:</label>
        <input type="text"
        name='Mobile'
        value={Mobile}
        onChange={this.onChange}/>
        <br/>
        {!this.state.show?<button onClick={this.onSubmit}>Add</button>:
            <button onClick={this.handleUpdate}>Update</button>}
     </form>
     <div className='table-responsive'>
     
     <table className='table'>
     <tbody>
      <tr>
         <th>Name</th>
         <th>SurName</th>
         <th>Address</th>
      </tr>
      {
   
    this.props.add.add_Data.map((data,indx)=>
    <tr key={indx}>
        <td>{data.userName}</td>
        <td>{data.email}</td>
        <td>{data.Mobile}</td>
        <td><button className="edit" onClick={()=>this.handleEdit(indx,data)} >Edit</button>
        <button className="delete" value={indx} onClick={(e)=>{this.handleDelete(e)}}>Delete</button></td>
       </tr>
)
  }  
      </tbody>
   </table>

  </div>
      </>
    )
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Crud)