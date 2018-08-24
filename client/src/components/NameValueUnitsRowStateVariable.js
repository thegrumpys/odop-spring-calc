import React from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input, UncontrolledTooltip } from 'reactstrap';
import { connect } from 'react-redux';
import { MIN, MAX, FIXED, CONSTRAINED } from '../store/actionTypes';
import { changeStateVariableValue, changeStateVariableConstraint, saveStateVariableConstraints, 
    restoreStateVariableConstraints, setStateVariableFlag, resetStateVariableFlag } from '../store/actionCreators';

class NameValueUnitsRowStateVariable extends React.Component {
    
    constructor(props) {
        super(props);
        this.onChangeStateVariableValue = this.onChangeStateVariableValue.bind(this);
        this.onSetStateVariableFlag = this.onSetStateVariableFlag.bind(this);
        this.onResetStateVariableFlag = this.onResetStateVariableFlag.bind(this);
    }
    
    onChangeStateVariableValue(event) {
        this.props.changeStateVariableValue(this.props.state_variable.name, parseFloat(event.target.value));
    }
    
    onSetStateVariableFlag(event) {
        this.props.saveStateVariableConstraints(this.props.state_variable.name);
        this.props.setStateVariableFlag(this.props.state_variable.name, MIN, FIXED|CONSTRAINED);
        this.props.setStateVariableFlag(this.props.state_variable.name, MAX, FIXED|CONSTRAINED);
        this.props.changeStateVariableConstraint(this.props.state_variable.name, MIN, this.props.state_variable.value);
        this.props.changeStateVariableConstraint(this.props.state_variable.name, MAX, this.props.state_variable.value);
    }
    
    onResetStateVariableFlag(event) {
        this.props.restoreStateVariableConstraints(this.props.state_variable.name);
    }
    
    render() {
        // =======================================
        // Table Row
        // =======================================
        return (
            <tr key={this.props.state_variable.name}>
                <td className="align-middle" colSpan="2" id={'state_variable_'+this.props.index}>{this.props.state_variable.name}</td>
                { this.props.state_variable.tooltip !== undefined && <UncontrolledTooltip placement="left" target={'state_variable_'+this.props.index}>{this.props.state_variable.tooltip}</UncontrolledTooltip>}
                <td className="align-middle" colSpan="2">
                    <InputGroup>
                        <span className="text-right form-control bg-light">{this.props.state_variable.value.toFixed(4)}</span>
                        <InputGroupAddon addonType="append">
                            <InputGroupText>
                                <Input addon type="checkbox" aria-label="Checkbox for fixed value" checked={this.props.state_variable.lmin & FIXED} onChange={this.props.state_variable.lmin & FIXED ? this.onResetStateVariableFlag : this.onSetStateVariableFlag} />
                            </InputGroupText>
                        </InputGroupAddon>
                    </InputGroup>
                </td>
                <td className="text-nowrap align-middle" colSpan="1">{this.props.state_variable.units}</td>
                <td></td>
            </tr>
        );
    }
}


const mapDispatchToStateVariableProps = {
    changeStateVariableValue: changeStateVariableValue,
    changeStateVariableConstraint: changeStateVariableConstraint,
    saveStateVariableConstraints: saveStateVariableConstraints,
    restoreStateVariableConstraints: restoreStateVariableConstraints,
    setStateVariableFlag: setStateVariableFlag,
    resetStateVariableFlag: resetStateVariableFlag
};

export default connect(null, mapDispatchToStateVariableProps)(NameValueUnitsRowStateVariable);