import React, { Component } from 'react';
import { NavDropdown, Modal, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { logUsage } from '../../logUsage';
import config from '../../config';

class FileExport extends Component {

    constructor(props) {
//        console.log("In FileSave.constructor props=",props);
        super(props);
        this.onExport = this.onExport.bind(this);
        this.onSortedExport = this.onSortedExport.bind(this);
        this.onCSVExport = this.onCSVExport.bind(this);
        this.onCancel = this.onCancel.bind(this);
        this.state = {
            modal: false,
        };
    }
    
    export(model, name, type) {
//        console.log('In FileExport.export model=',model);
        const url = window.URL.createObjectURL(new Blob([JSON.stringify(model, null, 2)]));
//        console.log('In FileExport.export','url=', url);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', name + '.' + type);
//        console.log('In FileExport.export','link=', link);
        document.body.appendChild(link);
        link.click();
    }

    onExport() {
//        console.log('In FileExport.onExport');
        if (config.node.env !== "production" && !this.state.modal) {
          this.setState({
              modal: !this.state.modal,
          });
          return;
        }
        this.export(this.props.state, this.props.name, 'json');
        logUsage('event', 'FileExport', { event_label: this.props.type + ' ' + this.props.name });
        this.setState({
            modal: false,
        });
    }
    
    // I created a special modified version of File Export which outputs a JSON file 
    // with all properties sorted in alphabetical order. 
    // It makes it easy to compare/diff two files and find the differences. 
    onSortedExport() {
//        console.log('In FileExport.onSortedExport');

        function sort(object){
            if (object instanceof Array) {
//                console.log('array=',object);
                var newArray = [];
                for (var j = 0; j < object.length; j++){
                    newArray.push(sort(object[j]));
                }
                return newArray;
            } else if (typeof object == "object") {
//                console.log('object=',object);
                var keys = Object.keys(object);
                keys.sort();
                var newObject = {};
                for (var i = 0; i < keys.length; i++){
                    newObject[keys[i]] = sort(object[keys[i]])
                }
                return newObject;
            } else {
                return object;
            }
        }

        var model = sort(this.props.state);
        this.export(model, 'SORTED_' + this.props.name, 'json');
        logUsage('event', 'FileExport', { event_label: 'SORTED ' + this.props.type + ' ' + this.props.name });
        this.setState({
            modal: !this.state.modal,
        });
    }
    
    exportCSV(symbol_table, name, type) {
//        console.log('In FileExport.exportCSV','symbol_table=',symbol_table,'name=',name,'type=',type);
        const url = window.URL.createObjectURL(new Blob(Object.keys(symbol_table).map(key => 
            symbol_table[key].name+","+
            symbol_table[key].value+","+
            symbol_table[key].units+
            "\n")));
//        console.log('In FileExport.exportCSV','url=', url);
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', name + '.' + type);
//        console.log('In FileExport.exportCSV','link=', link);
        document.body.appendChild(link);
        link.click();
    }

    onCSVExport() {
//        console.log('In FileExport.onCSVExport');

        function sort(object){
            if (object instanceof Array) {
//                console.log('In FileExport.onCSVExport','array=',object);
                var newArray = [];
                for (var j = 0; j < object.length; j++){
                    newArray.push(sort(object[j]));
                }
                return newArray;
            } else if (typeof object == "object") {
//                console.log('In FileExport.onCSVExport','object=',object);
                var keys = Object.keys(object);
                keys.sort();
                var newObject = {};
                for (var i = 0; i < keys.length; i++){
                    newObject[keys[i]] = sort(object[keys[i]])
                }
                return newObject;
            } else {
                return object;
            }
        }

        // Create object with symbol table name properties
        // Convert % to PC and convert all non-alphanumeric characters to _.
        // Ignore hidden objects
        var newObject = {};
        for (var j = 0; j < this.props.state.symbol_table.length; j++){
            var entry = this.props.state.symbol_table[j];
            entry.name = entry.name.replace('%','PC').replace(/[^a-zA-Z0-9]/g,'_');
            if (entry.hidden === false) {
                newObject[entry.name] = entry;
            }
        }
//        console.log('newObject=',newObject);
        var symbol_table = sort(newObject);
        this.exportCSV(symbol_table, 'CSV_' + this.props.name, 'csv');
        logUsage('event', 'FileExport', { event_label: 'CSV ' + this.props.type + ' ' + this.props.name });
        this.setState({
            modal: !this.state.modal,
        });
    }
    
    onCancel() {
//        console.log('In FileExport.onCancel');
        this.setState({
            modal: false,
        });
    }

    render() {
//        console.log('In FileExport.render');
        return (
            <>
                <NavDropdown.Item onClick={this.onExport}>
                    Export
                </NavDropdown.Item>
                <Modal show={this.state.modal} onHide={this.onCancel}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            <img src="favicon.ico" alt="Open Design Optimization Platform (ODOP) icon"/> &nbsp; File : Export
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.onCancel}>Cancel</Button>{' '}
                        <Button variant="info" onClick={this.onCSVExport}>CSV Export</Button>{' '}
                        <Button variant="info" onClick={this.onSortedExport}>Sorted Export</Button>{' '}
                        <Button variant="primary" onClick={this.onExport}>Export</Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
}

const mapStateToProps = state => ({
    name: state.name,
    type: state.model.type,
    state: state.model
});

const mapDispatchToProps = {
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FileExport);

