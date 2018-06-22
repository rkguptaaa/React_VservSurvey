import * as React from 'react';
import './ButtonStyles.scss';
export class Button extends React.Component{
    onClick = ()=>{
        //console.log('first');
        this.props.onClick();
        //console.log('second');
    };
    render()
    {        
        return(
            <button 
            id={this.props.id} 
            name={this.props.name} 
            className="button"
            onClick={this.onClick}
            >
            {this.props.text}
            </button>
        );
    }
}