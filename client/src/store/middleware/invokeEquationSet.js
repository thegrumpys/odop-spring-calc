import { changeOutputSymbolValues } from '../actionCreators';
import { eqnset as pcyl_eqnset } from '../../designtypes/Piston-Cylinder/eqnset';
import { eqnset as solid_eqnset } from '../../designtypes/Solid/eqnset';
import { eqnset as spring_eqnset } from '../../designtypes/Spring/eqnset';

// Invoke Equation Set
export function invokeEquationSet(store) {
    
    var element;

    var design = store.getState();
    
    // Loop to create p from symbol_table
    var p = [];
    for (let i = 0; i < design.symbol_table.length; i++) {
        element = design.symbol_table[i];
        if (element.input) {
            p[i] = element.value;
        }
    }

    // Compute outputs x from inputs p using equations
    var x;
    switch(design.type) {
    default:
    case 'Piston-Cylinder':
        x = pcyl_eqnset(p);
        break;
    case 'Solid':
        x = solid_eqnset(p);
        break;
    case 'Spring':
        x = spring_eqnset(p);
        break;
    }

    // Compute and dispatch state variable changes
    store.dispatch(changeOutputSymbolValues(x));
    
}
