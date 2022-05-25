import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Form, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { connect } from 'react-redux';

/*eslint no-extend-native: ["error", { "exceptions": ["Number"] }]*/
Number.prototype.toODOPPrecision = function() {
    var value = this.valueOf();
    var odopValue;
    if (value < 10000.0 || value >= 1000000.0)
         odopValue = value.toPrecision(4);
    else odopValue = value.toFixed(0);
    return odopValue;
};

class FormControlTypeNumber extends Component {

    constructor(props, context) {
//        console.log('In FormControlTypeNumber.constructor props=',props,'context=',context);
        super(props, context);
        this.onClick = this.onClick.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onContextMenu = this.onContextMenu.bind(this);
        var value = parseFloat(this.props.value);
        this.state = {
            value: value,
            valueString: value.toString(), // Update the display
            isInvalid: false,
            focused: false,
        };
    }

    componentDidUpdate(prevProps) {
        if (Number.isFinite(this.props.value) && prevProps.value !== this.props.value) {
//            console.log('In FormControlTypeNumber.componentDidUpdate prevProps.value=',prevProps.value,'props.value=',this.props.value,'value=',this.state.value,'valueString=',this.state.valueString);
            if (this.props.value !== this.state.value) { // Only update our internal state value if they differ leaving the valueString unchanged.
                var value = parseFloat(this.props.value);
                this.setState({
                    value: value,
                    valueString: value.toString(), // Update the display
                });
            }
        }
    }

    onClick(event) {
//        console.log('In FormControlTypeNumber.onClick event.target.value=',event.target.value,'state=',this.state);
        this.props.onClick(event); // Pass valid number onward
    }

    onChange(event) {
//        console.log('In FormControlTypeNumber.onChange event.target.value=',event.target.value,'state=',this.state);
        var value = parseFloat(event.target.value);
        if (!isNaN(value)) {
//            console.log('In FormControlTypeNumber.onChange Valid event.target.value=',event.target.value,'state=',this.state);
            this.setState({
                value: value,
                valueString: event.target.value, // Update the display
                isInvalid: false,
            });
            this.props.onChangeValid(event); // Pass valid number onward
            this.props.onChange(event); // Pass valid number onward
        } else {
//            console.log('In FormControlTypeNumber.onChange Invalid event.target.value=',event.target.value,'state=',this.state);
            this.setState({
                valueString: event.target.value, // Update the display
                isInvalid: true,
            });
            this.props.onChangeInvalid(event); // Pass invalid number onward
        }
    }

    onFocus(event) {
//        console.log('In FormControlTypeNumber.onFocus event.target.value=',event.target.value,'state=',this.state);
        if (!this.props.readOnly) {
            this.setState({
                valueString: this.state.value.toString(), // Update the display with unformatted value
                focused: true,
            });
        }
        this.props.onFocus(event);
    }

    onBlur(event) {
//        console.log('In FormControlTypeNumber.onBlur event.target.value=',event.target.value,'state=',this.state);
        if (this.state.isInvalid) {
            event.target.value = this.state.value.toString();
            this.props.onChangeValid(event); // Pass valid number onward
            this.props.onChange(event); // Pass valid number onward
        }
        this.setState({
            valueString: this.state.value.toODOPPrecision(), // Update the display with formatted value
            isInvalid: false,
            focused: false,
        });
        this.props.onBlur(event);
    }

    onContextMenu(event) {
//        console.log('In FormControlTypeNumber.onContextMenu event.target.value=',event.target.value);
        this.props.onContextMenu(event);
    }

    render() {
//        console.log('In FormControlTypeNumber.render value=',this.state.value,'valueString=',this.state.valueString);
        var value_class = (this.props.className !== undefined ? this.props.className : '') + ' text-right';
        if (this.state.focused && isNaN(parseFloat(this.state.valueString))) {
            value_class += ' borders-invalid';
        }
        var icon_invalid_tag = '';
        if (!this.props.disabledText && Number.isFinite(this.state.value) && this.state.value <= this.props.validmin) { 
            let validmin = this.props.validmin === Number.MIN_VALUE ? 'Number.MIN_VALUE' : this.props.validmin;
            icon_invalid_tag =
                <OverlayTrigger placement="top" overlay={<Tooltip>Invalid Value - Less than or equal to {validmin}</Tooltip>}>
                    <i className="fas fa-exclamation-triangle fa-sm icon-invalid"></i>
                </OverlayTrigger>;
        } else if (!this.props.disabledText && Number.isFinite(this.state.value) && this.state.value >= this.props.validmax) {
            let validmax = this.props.element.validmax === Number.MAX_VALUE ? 'Number.MAX_VALUE' : this.props.element.validmax;
            icon_invalid_tag =
                <OverlayTrigger placement="top" overlay={<Tooltip>Invalid Value - Greater than or equal to {validmax}</Tooltip>}>
                    <i className="fas fa-exclamation-triangle fa-sm icon-invalid"></i>
                </OverlayTrigger>;
        }
        var p = Object.assign({},this.props); // clone the props
        delete p.onChangeValid; // remove special on functions
        delete p.onChangeInvalid;
        delete p.disabledText;
        delete p.validmin;
        delete p.validmax;
        return (<>
            {icon_invalid_tag}
            <Form.Control type="number"
                {...p} // Allow OverlayTrigger to pass-in other props
                onClick={this.onClick}
                onChange={this.onChange}
                onFocus={this.onFocus}
                onBlur={this.onBlur}
                className={value_class}
                value={this.props.disabledText ? '' : this.state.focused ? this.state.valueString : (Number.isFinite(this.state.value) ? this.state.value.toODOPPrecision() : '')} />
        </>)
    }
}

FormControlTypeNumber.propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    disabledText: PropTypes.bool,
    readOnly: PropTypes.bool,
    value: PropTypes.number,
    validmin: PropTypes.number,
    validmax: PropTypes.number,
    step: PropTypes.string,
    onClick: PropTypes.func,
    onChange: PropTypes.func,
    onChangeValid: PropTypes.func,
    onChangeInvalid: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
}

FormControlTypeNumber.defaultProps = {
    className: '',
    disabled: false,
    disabledText: false,
    readOnly: false,
    value: '',
    validmin: -Number.MAX_VALUE,
    validmax: Number.MAX_VALUE,
    step: 'any',
    onClick: (()=>{}),
    onChange: (()=>{}),
    onChangeValid: (()=>{}),
    onChangeInvalid: (()=>{}),
    onFocus: (()=>{}),
    onBlur: (()=>{}),
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(FormControlTypeNumber);