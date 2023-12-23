import { Component } from 'react';
import { connect } from 'react-redux';
import { CONSTRAINED, MIN, MAX, FIXED, FDCL } from '../store/actionTypes';
import Emitter from './Emitter';
import { toODOPPrecision } from '../toODOPPrecision'

export const ERR = 'Err';
export const WARN = 'Warn';
export const NOTICE = 'Notice';
export const INFO = 'Info';

export var check_message = function(design, prefix, left, op, right, suffix = '') {
  return prefix + ': ' + design.model.symbol_table[left].name + ' (' + toODOPPrecision(design.model.symbol_table[left].value) + ') ' + op + 
  ' ' + design.model.symbol_table[right].name + ' (' + toODOPPrecision(design.model.symbol_table[right].value) +')' + (suffix !== '' ? suffix : '');
}

        // DCD is Default Constraint Disabled 
export var check_DCD_alert = function(element, minmax, urlCode) {
    if (element.lmin & FIXED) {
        return;
    } else if (minmax === MIN && element.lmin & CONSTRAINED) {
        return;
    } else if (minmax === MAX && element.lmax & CONSTRAINED) {
        return;
    }
    var urlString;
    switch(urlCode){
        case "C":
            urlString = '[Help](/docs/Help/DesignTypes/Spring/Compression/alerts.html#C_DefaultConstraint)'
            break;
        case "E":
            urlString = '[Help](/docs/Help/DesignTypes/Spring/Extension/alerts.html#E_DefaultConstraint)'
            break;
        case "T":
            urlString = '[Help](/docs/Help/DesignTypes/Spring/Torsion/alerts.html#T_DefaultConstraint)'
            break;
        default:
            urlString = '[Help](/docs/Help/DesignTypes/Spring/alerts.html#DefaultConstraint)'
    }
    addAlert({
        element: element,
        name: element.name, 
        message: 'Default ' + minmax + ' constraint not enabled',
        severity: WARN,
        help_url: urlString
    });
}

export var checks = function(store) {
//    console.log('In Alerts.checks store=',store);
    var design = store.getState();

        // OBJECTIVE VALUE CHECKS 
        if (design.model.result.objective_value === Number.POSITIVE_INFINITY || design.model.result.objective_value === Number.NEGATIVE_INFINITY) { // Check for objective value of Infinity
            addAlert({
                name: 'Objective Value', 
                message: 'Objective Value is Infinity',
                severity: ERR,
                help_url: '[Help](/docs/Help/alerts.html#OBJ_Infinite)'
            });
        };
        if (Number.isNaN(design.model.result.objective_value)) { // Check for objective value of NaN
            addAlert({
                name: 'Objective Value', 
                message: 'Objective Value is Not a Number (NaN)',
                severity: ERR,
                help_url: '[Help](/docs/Help/alerts.html#OBJ_NaN)'
            });
        };

    var total = 0;
    for (let i = 0; i < design.model.symbol_table.length; i++) {
        var element = design.model.symbol_table[i];
//        console.log('name=',element.name,'element=',element);

        // VALUE VALIDITY CHECKS
        var severity = ERR;
        if (element.type === 'equationset' && !element.input) { // Dependent Variable?
          severity = INFO; // Make Invalid Dependent Variable only Info
        }
        if (element.format === undefined && typeof element.value === 'number' && element.value < element.validmin) {
            let validmin;
            if (element.validminchoice !== undefined) {
                validmin = element.validmin === -Number.MIN_VALUE ? 'Number.MIN_VALUE' : element.validminchoices[element.validminchoice] + '(' + toODOPPrecision(element.validmin) + ')';
            } else {
                validmin = element.validmin === -Number.MIN_VALUE ? 'Number.MIN_VALUE' : toODOPPrecision(element.validmin);
            }
            let relational = ' < ';
            addAlert({
                element: element,
                name: element.name,
                message: 'INVALID VALUE: ' + element.name + ' (' + toODOPPrecision(element.value) + ')' + relational + validmin,
                severity: severity,
                help_url: '[Help](/docs/Help/alerts.html#Validity_Below)'
            });
        } else if (element.format === undefined && typeof element.value === 'number' && element.value > element.validmax) {
            let validmax;
            if (element.validmaxchoice !== undefined) {
                validmax = element.validmax === Number.MAX_VALUE ? 'Number.MAX_VALUE' : element.validmaxchoices[element.validmaxchoice] + '(' + toODOPPrecision(element.validmax) + ')';
            } else {
                validmax = element.validmax === Number.MAX_VALUE ? 'Number.MAX_VALUE' : toODOPPrecision(element.validmax);
            }
            let relational = ' > ';
            addAlert({
                element: element,
                name: element.name,
                message: 'INVALID VALUE: ' + element.name + ' (' + toODOPPrecision(element.value) + ')' + relational + validmax,
                severity: severity,
                help_url: '[Help](/docs/Help/alerts.html#Validity_Above)'
            });
        }
        if (element.format === undefined && Number.isNaN(element.value)) { // Not a table and value is not a number
            addAlert({
                element: element,
                name: element.name,
                message: 'INVALID VALUE: ' + element.name + ' (NaN) is Not a Number',
                severity: severity,
                help_url: '[Help](/docs/Help/alerts.html#NotNumber)'
            });
        };

        // CONSTRAINT VALIDITY CHECKS (ONLY FOR INDEPENDENT AND DEPENDENT NUMERIC VARIABLES, NOT FOR CALC INPUTS)
        if (element.type === 'equationset' && element.format === undefined && typeof element.cmin === 'number' && (element.lmin & CONSTRAINED) && element.cmin < element.validmin) {
            let validmin;
            if (element.validminchoice !== undefined) {
                validmin = element.validmin === -Number.MIN_VALUE ? 'Number.MIN_VALUE' : element.validminchoices[element.validminchoice] + '(' + toODOPPrecision(element.validmin) + ')';
            } else {
                validmin = element.validmin === -Number.MIN_VALUE ? 'Number.MIN_VALUE' : toODOPPrecision(element.validmin);
            }
            let relational = ' < ';
            addAlert({
                element: element,
                name: element.name+' MIN',
                message: 'INVALID CONSTRAINT VALUE: ' + element.name+' MIN  (' + toODOPPrecision(element.cmin) + ')'+ relational + validmin,
                severity: ERR,
                help_url: '[Help](/docs/Help/alerts.html#Constraint_Below)'
            });
        } else if (element.type === 'equationset' && element.format === undefined && typeof element.cmin === 'number' && (element.lmin & CONSTRAINED) && element.cmin > element.validmax) {
            let validmax;
            if (element.validmaxchoice !== undefined) {
                validmax = element.validmax === Number.MAX_VALUE ? 'Number.MAX_VALUE' : element.validmaxchoices[element.validmaxchoice] + '(' + toODOPPrecision(element.validmax) + ')';
            } else {
                validmax = element.validmax === Number.MAX_VALUE ? 'Number.MAX_VALUE' : toODOPPrecision(element.validmax);
            }
            let relational = ' > ';
            addAlert({
                element: element,
                name: element.name+' MIN',
                message: 'INVALID CONSTRAINT VALUE: ' + element.name+' MIN  (' + toODOPPrecision(element.cmin) + ')' + relational + validmax,
                severity: ERR,
                help_url: '[Help](/docs/Help/alerts.html#Constraint_Above)'
            });
        }
        if (element.type === 'equationset' && element.format === undefined && typeof element.cmax === 'number' && (element.lmax & CONSTRAINED) && element.cmax < element.validmin) {
            let validmin;
            if (element.validminchoice !== undefined) {
                validmin = element.validmin === -Number.MIN_VALUE ? 'Number.MAX_VALUE' : element.validminchoices[element.validminchoice] + '(' + toODOPPrecision(element.validmin) + ')';
            } else {
                validmin = element.validmin === -Number.MIN_VALUE ? 'Number.MIN_VALUE' : toODOPPrecision(element.validmin);
            }
            let relational = ' < ';
            addAlert({
                element: element,
                name: element.name+' MAX',
                message: 'INVALID CONSTRAINT VALUE: ' + element.name+' MAX  (' + toODOPPrecision(element.cmax) + ')' + relational + validmin,
                severity: ERR,
                help_url: '[Help](/docs/Help/alerts.html#Constraint_Below)'
            });
        } else if (element.type === 'equationset' && element.format === undefined && typeof element.cmax === 'number' && (element.lmax & CONSTRAINED) && element.cmax > element.validmax) {
            let validmax;
            if (element.validmaxchoice !== undefined) {
                validmax = element.validmax === Number.MAX_VALUE ? 'Number.MAX_VALUE' : element.validmaxchoices[element.validmaxchoice] + '(' + toODOPPrecision(element.validmax) + ')';
            } else {
                validmax = element.validmax === Number.MAX_VALUE ? 'Number.MAX_VALUE' : toODOPPrecision(element.validmax);
            }
            let relational = ' > ';
            addAlert({
                element: element,
                name: element.name+' MAX',
                message: 'INVALID CONSTRAINT VALUE: ' + element.name+' MAX  (' + toODOPPrecision(element.cmax) + ')' + relational + validmax,
                severity: ERR,
                help_url: '[Help](/docs/Help/alerts.html#Constraint_Above)'
            });
        }

        // CONSTRAINT CHECKS (ONLY FOR INDEPENDENT AND DEPENDENT VARIABLES, NOT FOR CALC INPUTS)
        if (element.type === "equationset" && !element.input && ((element.lmin & FIXED) && element.vmin > 0.0 && design.model.result.objective_value > design.model.system_controls.objmin)) {
            addAlert({
                element: element,
                name: element.name+' MIN',
                message: 'FIX VIOLATION: ' + element.name + ' (' + toODOPPrecision(element.value) + ') Value < '+ toODOPPrecision(element.cmin),
                severity: NOTICE,
                help_url: '[Help](/docs/Help/alerts.html#Fix_Violation)'
            });
        } else if (element.type === "equationset" && (element.lmin & CONSTRAINED) && element.vmin > 0.0 && design.model.result.objective_value > design.model.system_controls.objmin) {
            addAlert({
                element: element,
                name: element.name+' MIN',
                message: 'CONSTRAINT VIOLATION: ' + element.name + ' (' + toODOPPrecision(element.value) + ') Value < '+ toODOPPrecision(element.cmin),
                severity: NOTICE,
                help_url: '[Help](/docs/Help/alerts.html#MIN_Violation)'
            });
        }
        if (element.type === "equationset" && !element.input && ((element.lmax & FIXED) && element.vmax > 0.0 && design.model.result.objective_value > design.model.system_controls.objmin)) {
            addAlert({
                element: element,
                name: element.name+' MAX',
                message: 'FIX VIOLATION: ' + element.name + ' (' + toODOPPrecision(element.value) + ') Value > '+ toODOPPrecision(element.cmax),
                severity: NOTICE,
                help_url: '[Help](/docs/Help/alerts.html#Fix_Violation)'
            });
        } else if (element.type === "equationset" && (element.lmax & CONSTRAINED) && element.vmax > 0.0 && design.model.result.objective_value > design.model.system_controls.objmin) {
            addAlert({
                element: element,
                name: element.name+' MAX',
                message: 'CONSTRAINT VIOLATION: ' + element.name + ' (' + toODOPPrecision(element.value) + ') Value > '+ toODOPPrecision(element.cmax),
                severity: NOTICE,
                help_url: '[Help](/docs/Help/alerts.html#MAX_Violation)'
            });
        }
        if (element.type === "equationset" && (element.lmin & CONSTRAINED) && (element.lmax & CONSTRAINED) && element.cmin > element.cmax) {
            addAlert({
                element: element,
                name: element.name+' MIN',
                message: 'INVERTED CONSTRAINT RANGE: from '+ toODOPPrecision(element.cmin)+' to '+ toODOPPrecision(element.cmax)+' for ' + element.name + ' (' + toODOPPrecision(element.value) + ')',
                severity: ERR,
                help_url: '[Help](/docs/Help/alerts.html#Constraint_Inconsistency)'
            });
            addAlert({
                element: element,
                name: element.name+' MAX',
                message: 'INVERTED CONSTRAINT RANGE: from '+ toODOPPrecision(element.cmin)+' to '+ toODOPPrecision(element.cmax)+' for ' + element.name + ' (' + toODOPPrecision(element.value) + ')',
                severity: ERR,
                duplicate: true
            });
        }

        // FDCL CHECKS(ONLY FOR INDEPENDENT AND DEPENDENT VARIABLES, NOT FOR CALC INPUTS)
        if (element.type === "equationset" && (element.lmin & FIXED) === 0 && element.cminchoices !== undefined && element.cminchoices.length > 0) {
            if (element.lmin & CONSTRAINED) {
                addAlert({
                    element: element,
                    name: element.name+' MIN',
                    message: element.lmin & FDCL ? ('FDCL: ' + element.name+' MIN set to ' + element.cminchoices[element.cminchoice]) : ('Non-FDCL: ' + element.name+' MIN set to ' + element.cmin),
                    severity: INFO,
                    help_url: '[Help](/docs/Help/alerts.html#FDCL)'
                });
            }
        }
        if (element.type === "equationset" && (element.lmax & FIXED) === 0 && element.cmaxchoices !== undefined && element.cmaxchoices.length > 0) {
            if (element.lmax & CONSTRAINED) {
                addAlert({
                    element: element,
                    name: element.name+' MAX',
                    message: element.lmax & FDCL ? ('FDCL: ' + element.name+' MAX set to ' + element.cmaxchoices[element.cmaxchoice]) : ('Non-FDCL: ' + element.name+' MAX set to ' + element.cmax),
                    severity: INFO,
                    help_url: '[Help](/docs/Help/alerts.html#FDCL)'
                });
            }
        }

        // GENERAL CHECKS (ONLY INDEPENDENT VARIABLES)
        if ((element.type === 'equationset' && element.input) && !(element.lmin & FIXED)) {
            total++;
        }
    }
    if (total === 0) {
            addAlert({
                message: 'SYSTEM: No free independent variables',
                severity: INFO,
                help_url: '[Help](/docs/Help/alerts.html#NoFreeIV)'
             });
    }
}

export var getSeverityNumberByNameAndObjValue = function(name, severity) {
//    console.log('In Alerts.getSeverityNumberByNameAndObjValue this=',this,'name=',name);
    var severityNumber = 0;
    if (name !== undefined && (name.endsWith(' MIN') || name.endsWith(' MAX')) && severity !== INFO) {
        if (this.props.objective_value > 4*this.props.system_controls.objmin) {
            severityNumber = 3;
        } else if (this.props.objective_value > this.props.system_controls.objmin) {
            severityNumber = 2;
        } else if (this.props.objective_value > 0.0) {
            severityNumber = 1;
       }
    }
//    console.log('In Alerts.getSeverityNumberByNameAndObjValue name-',name,'severity=',severity,'severityNumber=',severityNumber);
    return severityNumber;
}

export var getFeasibilityClassBySeverityNumber = function(severityNumber) {
//    console.log('In Alerts.getFeasibilityClassBySeverityNumber this=',this,'severityNumber=',severityNumber);
    var feasibilityClasses = ["", "text-feasible ", "text-close-to-feasible ", "text-not-feasible "];
    return feasibilityClasses[severityNumber];
}

export var getFontClassBySeverityNumber = function(severityNumber) {
//    console.log('In Alerts.getFeasibilityClassBySeverityNumber this=',this,'severityNumber=',severityNumber);
    var fontClasses = ["text-alert-info ", "text-alert-notice ", "text-alert-warn ", "text-alert-err "];
    return fontClasses[severityNumber];
}

export var getSeverityNumberBySeverity = function(severity) {
//    console.log('In Alerts.getSeverityNumberBySeverity this=',this,'severity=',severity);
    var severityNumber = {Err: 3, Warn: 2, Notice: 1, Info: 0};
    return severityNumber[severity];
}

export var getAlertsByName = function(name, includeViolations = false) {
//    console.log('In Alerts.getAlertsByName this=',this,'name=',name,'includeViolations=',includeViolations);
    var alerts = [];
    var maxSeverityNumber = 0;
    this.state.alerts.filter(entry => entry.severity === ERR).forEach((entry) => {
        var severityNumber;
        if (entry.name === name) { // Matches exactly
            severityNumber = getSeverityNumberBySeverity(entry.severity);
            entry.className = getFontClassBySeverityNumber(severityNumber);
            maxSeverityNumber = Math.max(maxSeverityNumber, getSeverityNumberByNameAndObjValue(entry.name, entry.severity));
            alerts.push(entry);
        } else if (includeViolations && (entry.name === name+' MIN' || entry.name === name+' MAX')) { // Matches name prefix
            severityNumber = getSeverityNumberBySeverity(entry.severity);
            entry.className = getFontClassBySeverityNumber(severityNumber);
            maxSeverityNumber = Math.max(maxSeverityNumber, getSeverityNumberByNameAndObjValue(entry.name, entry.severity));
            alerts.push(entry);
        }
    });
    this.state.alerts.filter(entry => entry.severity === WARN).forEach((entry) => {
        var severityNumber;
        if (entry.name === name) { // Matches exactly
            severityNumber = getSeverityNumberBySeverity(entry.severity);
            entry.className = getFontClassBySeverityNumber(severityNumber);
            maxSeverityNumber = Math.max(maxSeverityNumber, getSeverityNumberByNameAndObjValue(entry.name, entry.severity));
            alerts.push(entry);
        } else if (includeViolations && (entry.name === name+' MIN' || entry.name === name+' MAX')) { // Matches name prefix
            severityNumber = getSeverityNumberBySeverity(entry.severity);
            entry.className = getFontClassBySeverityNumber(severityNumber);
            maxSeverityNumber = Math.max(maxSeverityNumber, getSeverityNumberByNameAndObjValue(entry.name, entry.severity));
            alerts.push(entry);
        }
    });
    this.state.alerts.filter(entry => entry.severity === NOTICE).forEach((entry) => {
        var severityNumber;
        if (entry.name === name) { // Matches exactly
            severityNumber = getSeverityNumberBySeverity(entry.severity);
            entry.className = getFontClassBySeverityNumber(severityNumber);
            maxSeverityNumber = Math.max(maxSeverityNumber, getSeverityNumberByNameAndObjValue(entry.name, entry.severity));
            alerts.push(entry);
        } else if (includeViolations && (entry.name === name+' MIN' || entry.name === name+' MAX')) { // Matches name prefix
            severityNumber = getSeverityNumberBySeverity(entry.severity);
            entry.className = getFontClassBySeverityNumber(severityNumber);
            maxSeverityNumber = Math.max(maxSeverityNumber, getSeverityNumberByNameAndObjValue(entry.name, entry.severity));
            alerts.push(entry);
        }
    });
    this.state.alerts.filter(entry => entry.severity === INFO).forEach((entry) => {
        var severityNumber;
        if (entry.name === name) { // Matches exactly
            severityNumber = getSeverityNumberBySeverity(entry.severity);
            entry.className = getFontClassBySeverityNumber(severityNumber);
            maxSeverityNumber = Math.max(maxSeverityNumber, getSeverityNumberByNameAndObjValue(entry.name, entry.severity));
            alerts.push(entry);
        } else if (includeViolations && (entry.name === name+' MIN' || entry.name === name+' MAX')) { // Matches name prefix
            severityNumber = getSeverityNumberBySeverity(entry.severity);
            entry.className = getFontClassBySeverityNumber(severityNumber);
            maxSeverityNumber = Math.max(maxSeverityNumber, getSeverityNumberByNameAndObjValue(entry.name, entry.severity));
            alerts.push(entry);
        }
    });
//    console.log('In Alerts.getAlertsByName maxSeverityNumber=',maxSeverityNumber,'alerts=',alerts);
    return {className: getFeasibilityClassBySeverityNumber(maxSeverityNumber), alerts: alerts};
}

export var getAlertsBySeverity = function(severity='*') {
//    console.log('In Alerts.getAlertsBySeverity');
    var results;
    if (severity === '*') {
        results = this.state.alerts.filter(entry => {
//            console.log('severity=',severity,'entry=',entry);
            var severityNumber = getSeverityNumberBySeverity(entry.severity);
            entry.className = getFontClassBySeverityNumber(severityNumber);
            return entry.duplicate === undefined || entry.duplicate === false;
        });
    } else {
        results = this.state.alerts.filter(entry => {
//            console.log('severity=',severity,'entry=',entry);
            var severityNumber = getSeverityNumberBySeverity(entry.severity);
            entry.className = getFontClassBySeverityNumber(severityNumber);
            return entry.severity === severity && (entry.duplicate === undefined || entry.duplicate === false);
        });
    }
//    console.log('In Alerts.getAlertsBySeverity results=',results);
    return results;
}

export var clearAlerts = function() {
//    console.log('In Alerts.clearAlerts this=',this);
    if (this === undefined) return; // to allow test cases to run
    this.setState((prevState, props) => {
        return {
            alerts: []
        };
    });
    Emitter.emit('clearAlerts');
}

export var addAlert = function(alert) {
//    console.log('In Alerts.addAlert this-',this,'alert=',alert);
    if (this === undefined) return; // to allow test cases to run
    this.setState((prevState, props) => {
        return {
            alerts: [...prevState.alerts, alert]
        };
    });
    Emitter.emit('addAlert', alert);
}

class Alerts extends Component {
    constructor(props) {
//        console.log('In Alerts.constructor props=',props);
        super(props);
        getSeverityNumberByNameAndObjValue = getSeverityNumberByNameAndObjValue.bind(this); // Bind external function - no 'this'
        getFeasibilityClassBySeverityNumber = getFeasibilityClassBySeverityNumber.bind(this); // Bind external function - no 'this'
        getFontClassBySeverityNumber = getFontClassBySeverityNumber.bind(this); // Bind external function - no 'this'
        getSeverityNumberBySeverity = getSeverityNumberBySeverity.bind(this); // Bind external function - no 'this'
        getAlertsByName = getAlertsByName.bind(this); // Bind external function - no 'this'
        getAlertsBySeverity = getAlertsBySeverity.bind(this); // Bind external function - no 'this'
        clearAlerts = clearAlerts.bind(this); // Bind external function - no 'this'
        addAlert = addAlert.bind(this); // Bind external function - no 'this'
        this.state = {
            alerts: []
        };
    }

    render() {
//        console.log('In Alerts.render this.state.alerts=',JSON.stringify(this.state.alerts));
        return '';
    }
}

const mapStateToProps = state => ({
    system_controls: state.model.system_controls,
    objective_value: state.model.result.objective_value
});

export default connect(mapStateToProps)(Alerts);
