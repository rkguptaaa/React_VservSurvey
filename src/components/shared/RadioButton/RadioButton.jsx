import * as React from 'react';
import './RadioButtonStyles.scss';
export class RadioButton extends React.Component {
    onChange = () => {
        this.props.onChange(this.props.index);
    };
    render() {
        return (
            <input
                type="radio"
                id={this.props.id}
                value={this.props.value}
                name="radio"
                index={this.props.index}
                onChange={this.onChange}
            />
        );
    }
}
