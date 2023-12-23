// Invoke Check
export function invokeCheck(store) {
    
//    console.log('<li>','Start invokeCheck','</li><ul>');

    var design = store.getState();
//    console.log('In invokeCheck design=',design);
    
    // Check relationships among symbol tasble variables and create alerts
    var { checks } = require('../../designtypes/'+design.model.type+'/checks.js'); // Dynamically load eqnset
    checks(store);

//    console.log('</ul><li>','End invokeCheck','</li>');
}
