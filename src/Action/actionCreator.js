

import { ADDEMPLOYEES1, DELETEEMPLOYEES, NEWUPDATEEMPLOYEES, UPDATEEMPLOYEES } from "../Constant/Constant"

export const tableAddActionCreator = (get_tbl) => {
    return {
        type:NEWUPDATEEMPLOYEES,
        payload:get_tbl.data
    }
}
export const employDelActionCreator = (del_data,data1) => {
   data1.employeeData.splice(del_data,1)
       return {
        type:DELETEEMPLOYEES,
        payload:del_data
    }
}
export const updateEmpActionCreator = (updt_data) => {
    return{
        type:UPDATEEMPLOYEES,
        payload:updt_data.data
    }
}
export const updateEmployeesActionCreator = (my_emp_updt) => {
    var newData={
        userName:my_emp_updt.username,
        email:my_emp_updt.email,
        Mobile:my_emp_updt.Mobile
    }
   
    my_emp_updt.employeeData.splice(my_emp_updt.editIndex,1,newData)
    return{
        type:UPDATEEMPLOYEES,
        payload:my_emp_updt
    }
}

export const addEmployeesActionCreator = (my_emp_updt) => {
  
  let employeeData=my_emp_updt.employeeData;
  let username=my_emp_updt.username;
  
  let email=my_emp_updt.email;
  let Mobile=my_emp_updt.Mobile;
 let  newEmployee={
   'userName':username,
    'email':email,
    'Mobile':Mobile
}
employeeData.push(newEmployee)
return{
       type:ADDEMPLOYEES1,
        payload:employeeData
    }
}
