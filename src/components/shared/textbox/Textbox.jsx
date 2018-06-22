import * as React from 'react';
import './TextAreaStyles.scss';

export class Textbox extends React.Component {
    onChange = event => {
        this.props.onChange(event, this.props.index);
    };

    render() {
        return (
            <textarea
                id={this.props.id}
                name={this.props.name || this.props.id}
                aria-labelledby={this.props.ariaLabelledBy}
                // value={this.props.value}
                style={{ width: this.props.width }}
                onChange={this.onChange}
                placeholder={this.props.placeholder}
                index={this.props.index}
            />
        );
    }
}
