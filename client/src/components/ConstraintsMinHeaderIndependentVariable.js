import React, { Component } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { connect } from 'react-redux';

class ConstraintMinHeaderIndependentVariable extends Component {

    render() {
//        console.log('In ConstraintMinHeaderIndependentVariable.render this=',this);
        return (
            <React.Fragment>
                <tr>
                    <th className="text-center bg-secondary text-white" colSpan="4" id="IVMinConstraintTitle">
                        <OverlayTrigger placement="top" overlay={<Tooltip>Lower limits on Independent Variables</Tooltip>}>
                            <span>IV Min Constraint</span>
                        </OverlayTrigger>
                    </th>
                </tr>
                <tr>
                    <th className="text-left d-lg-none" id="IVMinConstraintNameTitle">
                        <OverlayTrigger placement="top" overlay={<Tooltip className="d-lg-none">Variable names</Tooltip>}>
                            <span>Name</span>
                        </OverlayTrigger>
                    </th>
                    <th className="text-left" id="IVMinConstraintConstrainTitle">
                        <OverlayTrigger placement="top" overlay={<Tooltip>Check box to establish lower limit</Tooltip>}>
                            <span>Constrain</span>
                        </OverlayTrigger>
                    </th>
                    <th className="text-center" id="IVMinConstraintValueTitle">
                        <OverlayTrigger placement="top" overlay={<Tooltip>Enter value for lower limit</Tooltip>}>
                            <span>Value</span>
                        </OverlayTrigger>
                    </th>
                    <th className={"text-right " + (this.props.system_controls.show_violations ? "" : "d-none")} id="IVMinConstraintViolationTitle">
                        <OverlayTrigger placement="top" overlay={<Tooltip>Measure of constraint <br />satisfaction (-) or violation (+)</Tooltip>}>
                            <span>Violation</span>
                        </OverlayTrigger>
                    </th>
                </tr>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    system_controls: state.model.system_controls
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(ConstraintMinHeaderIndependentVariable);
