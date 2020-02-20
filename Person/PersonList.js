import React,{PureComponent} from 'react'
import Person from './PersonContent/Person'

class PersonList extends PureComponent{
  static getDerivedStateFromProps(props,state){
    console.log('Excuting getDerviedStateFromProps in PersonList')  ;  
    return state;
  }
  //  shouldComponentUpdate(nextProps,nextState){
  //   if(nextProps.persons !== this.props.persons){
  //   console.log('Excuting shouldComponentUdpate in PersonList');
  //     return true;
  //   }
  //   else{
  //   return false;
  //   }
  //   return true;
  //}
  getSnapshotBeforeUpdate(pervProps,prevState){
   console.log('Excuting getShapShotBeforeUpdate in PersonList');
   return true;
  }
  componentDidUpdate(p,q,r){
    console.log('componentDidUpadte in PersonList');
  }
  
   
      render(){
        console.log('Executing PersonList')
         
         return this.props.persons.map((person, index) => {
          return (
        <Person
        name ={person.name}
          key={person.id}
          textChangeHandler={this.props.textChangeHandler.bind(this,event, person.id)} 
          deleteClickedHandler = {()=>this.props.deleteClickedHandler(index)}
        >Hi Im Children</Person>
      );
    });
            
              
              
    }

}

export default PersonList