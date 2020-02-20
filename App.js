import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Default/Hello';
import withClass from './hoc/withClass'
import styleClass from  './style.css';
import Aux from './hoc/Auxiliary';
import PersonList from './Person/PersonList';
import AuthContext from './././context/AuthContext'

class App extends Component {
  constructor() {
    super();
    console.log('excuting Constructor')
   
    this.state={
      persons :[
        {name : 'A' ,id:1}, {name : 'B',id:2}, {name : 'C',id:3}, {name : 'D',id:4}
      ],
    showEmpolyee: false,
    name : 'React',
    stateCount : 0,
    authenticated : false
    }
  }
  static getDerivedStateFromProps(props,state){
  console.log('Excuting getDerviedStateFromProps in Index.js');
  } 
  getSnapshotBeforeUpdate(prevProps,nextProps){
    console.log('Excuting getSnapshotBeforeUpdate in Index.js');
    return true;
  }
  componentDidMount(){
    console.log('componentWillmount in index.js');
  }
  componentDidUpdate(p,q,r){
    console.log('componentDidUpdate in index.js');
  }
  //click events
      deleteClickedHandler =(index) =>{
          console.log('delete');
        const personObject = [...this.state.persons];
        personObject.splice(index,1);
        this.setState({persons:personObject});

      };
       textChangeHandler =(event,index) =>{
        
            const empIndex = this.state.persons.findIndex(p => {
              return p.id === index;
            });
            console.log(empIndex);
            const personObject = {...this.state.persons[empIndex]};
            personObject.name = event.target.value;
            const personlist = [...this.state.persons];
            personlist[empIndex] = personObject
            console.log(personObject);
              this.setState((prevState,props) =>{
                return{
                  persons:personlist,
                  stateCount : prevState.stateCount + 1
                };
              }
              );
      }
      buttonClickHandler =()=>{
        const shwoPerson = this.state.showEmpolyee;
        this.setState({showEmpolyee:!shwoPerson});
        console.log(this.state.showEmpolyee);
      }
      loginClickHandler =()=>{
    this.setState( {authenticated : true} );
      }
//click events end
  render() {
    let person = '';
    let hello = '';
    if(this.state.showEmpolyee){
     person= <PersonList persons={this.state.persons } deleteClickedHandler={this.deleteClickedHandler} 
     textChangeHandler ={this.textChangeHandler} showEmpolyee={this.state.showEmpolyee}/>
    }
   
    return (
      <Aux> 
        <AuthContext.Provider value={
          {
            authenticated : this.state.authenticated,
            login : this.loginClickHandler
          }
        }>
      <button onClick = {this.buttonClickHandler}>Click</button>
       {this.state.showEmpolyee ?
        <Hello name={this.props.appTitle} buttonClicked = {this.buttonClickHandler} /> : console.log('em')
        
      }
        <p>
        {person}
          Start editing to see some magic happen :)
        </p>
        </AuthContext.Provider>
      </Aux>
    );
  }
}

export default withClass(App,styleClass.App);
