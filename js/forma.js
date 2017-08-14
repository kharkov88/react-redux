import React from 'react'
import {connect}from'react-redux'
import {addData}from'./actions'

let _firstName,_lastName,_email;
class Forma extends React.Component{
    constructor(props){
        super(props)
        this.handleSub = this.handleSub.bind(this)
    }
    handleSub(e){
        e.preventDefault()
        if(_firstName.value.trim()==0) alert("Введите хотя бы имя!")
        else{
        this.props.dispatch(addData({
             fName:_firstName.value,
             lName:_lastName.value,
             email:_email.value}))
        document.getElementsByClassName('forma')[0].innerHTML='Спасибо за регистрацию!<br>(состояние redux в консоли...)'
    }}
    render(){
        return(
            <div className="forma">
            <form onSubmit={this.handleSub}>
                <div><input ref={input=>_firstName=input} className=" form-control" type="text" placeholder="First Name:"/></div>
                <div><input ref={input=>_lastName=input} className=" form-control" type="text" placeholder="Last Name:"/></div>
                <div><input ref={input=>_email=input} className=" form-control" type="text" placeholder="email:"/></div>
                <div><button className="form-control btn btn-info btn-sm">send</button></div>
            </form>
            </div>
        )
    }
}
export default Forma = connect()(Forma)