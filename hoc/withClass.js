import React from 'react'
// const withClass = props => {
//   return(
// <div className = {props.divClass}>{props.children}</div> );
// }
// export default withClass;
const withClass = (WrappedComponent,className) =>{
  return props =>(
    <div className = {className}>
    <WrappedComponent {...props}/>
        </div>
  );
}

export default withClass;