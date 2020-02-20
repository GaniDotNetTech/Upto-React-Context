import React,{Component} from 'react'
import PropTypes from 'prop-types'
import Css from './Person.css'
import Auxiliary from '../../hoc/Auxiliary'
import withClass from '../../hoc/withClass'
import AuthContext from '../../context/AuthContext'

class person extends Component{
//  creating ref using constructor
constructor(props){
  super(props);
  this.inputElementRef = React.createRef();
}
static contextType = AuthContext;
//accessing created ref and setting
  componentDidMount(){
  this.inputElementRef.current.focus();
  }

  render(){
    console.log('Excuting person')
    return(
  //retrun jsx elements by creating a  component
   <Auxiliary> 
   {this.context.authenticated ? <p>Authenticated</p> : <p>Please log in </p> }
       
        <a onClick={this.props.deleteClickedHandler}>
          I'm {this.props.name} and I am {this.props.name} years old!
        </a>
        <p>{this.props.children}</p>
        <p>Modified</p>
        <input
          type="text"
          ref ={this.inputElementRef}
          onChange={this.props.textChangeHandler}
          value={this.props.name}
        />
   </Auxiliary>
       
);
}


}

person.propTypes ={
  deleteClickedHandler : PropTypes.func,
  name : PropTypes.string,
  textChangeHandler : PropTypes.func
};
export default withClass(person,Css.Person)

//normally return jsxelements
  //   <div className = {Css.person}>
  //     <p >I'm loaded{this.props.name}</p>
  //     <input type="text" onChange={this.props.textChangeHandler} value={this.props.name} />       
  //     <button onClick={this.props.deleteClickedHandler}>Delete</button>
       
  // </div>

    //creating reference to input elemnent
        // <input
        //   type="text"
        //   ref ={(eventRef)=>{this.inputElemnet = eventRef}}
        //   onChange={this.props.textChangeHandler}
        //   value={this.props.name}
        // />

  //accessing ref of input element and setting focus
  // componentDidMount(){
  // this.inputElemnet.focus();
  // }
