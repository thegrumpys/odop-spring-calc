import { createStore, applyMiddleware } from 'redux';
import { initialState } from '../../../designtypes/Spring/Extension/initialState';
import { initialSystemControls } from '../../../initialSystemControls';
import { loadInitialState,
         changeLabelsValue,
         changeSymbolValue,
         setSymbolFlag,
         changeSymbolConstraint,
         fixSymbolValue,
         search } from '../../../store/actionCreators';
import { reducers } from '../../../store/reducers';
import { dispatcher } from '../../../store/middleware/dispatcher';
import { MIN, MAX, CONSTRAINED } from '../../../store/actionTypes';

// This is a mapping of the demo6 execute file to an equivalent test case file

it('demo6', () => {
    var state = Object.assign({}, initialState, { system_controls: initialSystemControls }); // Merge initialState and initialSystemControls
    const store = createStore(
        reducers,
        {"user": "USERID0123456789", name: "initialState", model: state},
        applyMiddleware(dispatcher));

    var design = store.getState(); // before
    design = store.getState();
    expect(design.model.result.objective_value).toEqual(0.0);

// title: "Session Now In Progress",
    // No-op
    
// title: "Page 02 of 09"
    store.dispatch(loadInitialState("Spring/Extension","US"));
    store.dispatch(changeLabelsValue([{"name":"COMMENT","value":"Extension Spring Demo"}]));
    
design = store.getState();
    expect(design.model.result.objective_value).toBeCloseTo(0.0000000,7);
    
// title: "Page 03 of 09"
    // No-op
    
// title: "Page 04 of 09"
    store.dispatch(changeSymbolValue("Material_Type",3));
    store.dispatch(changeSymbolValue("End_Type",1));
    store.dispatch(setSymbolFlag("ID_Free",MIN,CONSTRAINED));
    store.dispatch(changeSymbolConstraint("ID_Free",MIN,0.765));
    store.dispatch(setSymbolFlag("OD_Free",MAX,CONSTRAINED));
    store.dispatch(changeSymbolConstraint("OD_Free",MAX,1.235));
    store.dispatch(fixSymbolValue("Force_1",25));
    store.dispatch(fixSymbolValue("L_1",5.6));
    store.dispatch(fixSymbolValue("Force_2",35));
    store.dispatch(fixSymbolValue("L_2",6.6));
    
design = store.getState();
    expect(design.model.result.objective_value).toBeCloseTo(0.3825930,7);
    
// title: "Page 05 of 09"
    
design = store.getState();
    expect(design.model.result.objective_value).toBeCloseTo(0.3825930,7);
    
// title: "Page 06 of 09"
    store.dispatch(search());
    
design = store.getState();
    expect(design.model.result.objective_value).toBeCloseTo(0.0000092,7);
    
// title: "Page 07 of 09"
    // No-op
    
// title: "Page 08 of 09"
    store.dispatch(fixSymbolValue("Wire_Dia",0.105));
    store.dispatch(search());
    
design = store.getState();
    expect(design.model.result.objective_value).toBeCloseTo(0.0000042,7);
    
// title: "Page 09 of 09 (last page)"
    store.dispatch(fixSymbolValue("OD_Free",1.105));
    store.dispatch(fixSymbolValue("Coils_T",17.5));
    store.dispatch(fixSymbolValue("Initial_Tension",6.35));
    store.dispatch(changeSymbolValue("End_Type",6));
    store.dispatch(changeSymbolValue("Hook_Deflect_All",0));
    
design = store.getState();
    expect(design.model.result.objective_value).toBeCloseTo(0.0000002,7);
    
});

