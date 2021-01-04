import React, { Component } from 'react';
import { Table, OverlayTrigger, Tooltip  } from 'react-bootstrap';
import NameValueUnitsHeaderIndependentVariable from './NameValueUnitsHeaderIndependentVariable';
import NameValueUnitsRowIndependentVariable from './NameValueUnitsRowIndependentVariable';
import NameValueUnitsHeaderDependentVariable from './NameValueUnitsHeaderDependentVariable';
import NameValueUnitsRowDependentVariable from './NameValueUnitsRowDependentVariable';
import NameValueUnitsHeaderCalcInput from './NameValueUnitsHeaderCalcInput';
import NameValueUnitsRowCalcInput from './NameValueUnitsRowCalcInput';
import { connect } from 'react-redux';

class NameValueUnitsTable extends Component {
    
    render() {
//        console.log('In NameValueUnitsTable.render this=',this);
        return (
            <React.Fragment>
                <Table className="col-md-6 border border-secondary" size="sm">
                    <thead>
                        <NameValueUnitsHeaderIndependentVariable />
                    </thead>
                    <tbody>
                        {this.props.symbol_table.map((element,index) => element.type === "equationset" && element.input && !element.hidden && <NameValueUnitsRowIndependentVariable key={element.name} element={element} index={index} />)}
                    </tbody>
                    <thead>
                        <NameValueUnitsHeaderDependentVariable />
                    </thead>
                    <tbody>
                        {this.props.symbol_table.map((element,index) => element.type === "equationset" && !element.input && !element.hidden && <NameValueUnitsRowDependentVariable key={element.name} element={element} index={index} />)}
                    </tbody>
                    <thead>
                        <NameValueUnitsHeaderCalcInput />
                    </thead>
                    <tbody>
                        {this.props.symbol_table.map((element,index) => element.type === "calcinput" && !element.hidden && <NameValueUnitsRowCalcInput key={element.name} element={element} index={index} />)}
                    </tbody>
                </Table>
            </React.Fragment>
        );
    }
    
}

const mapStateToProps = state => ({
    symbol_table: state.model.symbol_table,
    system_controls: state.model.system_controls
});

export default connect(mapStateToProps)(NameValueUnitsTable);
