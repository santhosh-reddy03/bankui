import React from 'react'

// class Button extends React.Component{

//     constructor(props){
//         super(props);
//     }

//     render(){
//         return <button type={this.props.type} className={this.props.className} onClick={this.props.onClick} disabled={this.props.disabled}>{this.props.children}</button>;
//     }
// }

const Button = (props) => {
    return <button type={props.type} className={props.className} onClick={props.onClick} disabled={props.disabled}>{props.children}</button>;
}
export default Button;