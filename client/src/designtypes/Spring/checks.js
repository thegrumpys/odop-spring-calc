import { checks as commonChecks } from '../../components/Alerts';

export function checks(store) {
//    console.log('<li>','@@@@@ Start Spring check store=',store,'</li><ul>');

// Alerts common to all round-wire coil springs 

    if (design.model.symbol_table[o.Wire_Dia].value > design.model.symbol_table[o.ID_Free].value) {
        addAlert({
            element: design.model.symbol_table[o.Wire_Dia],
            name: design.model.symbol_table[o.Wire_Dia].name, 
            message: check_message(design,o.Wire_Dia,'>',o.ID_Free),
            severity: WARN,
            help_url: '[Help](/docs/Help/DesignTypes/Spring/alerts.html#Wire_Dia_GT_ID_Free)'
        });
        addAlert({
            element: design.model.symbol_table[o.ID_Free],
            name: design.model.symbol_table[o.ID_Free].name, 
            message: check_message(design,o.ID_Free,'<=',o.Wire_Dia),
            severity: WARN,
            duplicate: true
        });
    }
    if (design.model.symbol_table[o.Wire_Dia].value < 0.5 * design.model.symbol_table[o.tbase010].value && design.model.symbol_table[o.Prop_Calc_Method].value === 1) {
        addAlert({
            element: design.model.symbol_table[o.Wire_Dia],
            name: design.model.symbol_table[o.Wire_Dia].name, 
            message: 'Material properties for this ' + design.model.symbol_table[o.Wire_Dia].name + ' (' + design.model.symbol_table[o.Wire_Dia].value.toODOPPrecision() + ') may not be accurate.',
            severity: WARN,
            help_url: '[Help](/docs/Help/DesignTypes/Spring/alerts.html#MatPropAccuracy)'
        });
    }
    if (design.model.symbol_table[o.Wire_Dia].value > 5.0 * design.model.symbol_table[o.tbase400].value && design.model.symbol_table[o.Prop_Calc_Method].value === 1) {
        addAlert({
            element: design.model.symbol_table[o.Wire_Dia],
            name: design.model.symbol_table[o.Wire_Dia].name, 
            message: 'Material properties for this ' + design.model.symbol_table[o.Wire_Dia].name + ' (' + design.model.symbol_table[o.Wire_Dia].value.toODOPPrecision() + ') may not be accurate.',
            severity: WARN,
            help_url: '[Help](/docs/Help/DesignTypes/Spring/alerts.html#MatPropAccuracy)'
        });
    }
    if (design.model.symbol_table[o.Life_Category].value > 1 && !(design.model.symbol_table[o.FS_CycleLife].lmin & CONSTRAINED)) {
        addAlert({
            element: design.model.symbol_table[o.FS_CycleLife], 
            name: design.model.symbol_table[o.FS_CycleLife].name, 
            message: design.model.symbol_table[o.FS_CycleLife].name + ' MIN is not set.', 
            severity: WARN, 
            help_url: '[Help](/docs/Help/DesignTypes/Spring/alerts.html#FS_CycleLife_MIN_not_set)'
        });
    }
    if (design.model.symbol_table[o.FS_2].lmax & CONSTRAINED && design.model.symbol_table[o.FS_2].value > design.model.symbol_table[o.FS_2].cmax && design.model.result.objective_value > design.model.system_controls.objmin) {
        addAlert({
            element: design.model.symbol_table[o.FS_2], 
            name: design.model.symbol_table[o.FS_2].name, 
            message: 'Over-design concern', 
            severity: WARN, 
            help_url: '[Help](/docs/Help/DesignTypes/Spring/alerts.html#OverDesign)' 
        });
    }
    if (design.model.symbol_table[o.Coils_A].value < 1.0) {
        addAlert({
            element: design.model.symbol_table[o.Coils_A],
            name: design.model.symbol_table[o.Coils_A].name, 
            message: 'RELATIONSHIP: ' + design.model.symbol_table[o.Coils_A].name + ' (' + design.model.symbol_table[o.Coils_A].value.toODOPPrecision() + ') < 1.0',
            severity: WARN, 
            help_url: '[Help](/docs/Help/DesignTypes/Spring/alerts.html#Coils_A_LT_1)'
        });
    }
    if (design.model.symbol_table[o.Spring_Index].value < 4.0 || design.model.symbol_table[o.Spring_Index].value > 25.0) {
        addAlert({
            element: design.model.symbol_table[o.Spring_Index], 
            name: design.model.symbol_table[o.Spring_Index].name, 
            message: 'Manufacturability concern', 
            severity: WARN,
            help_url: '[Help](/docs/Help/DesignTypes/Spring/alerts.html#SI_manufacturability)' 
        });
    }
    if (design.model.symbol_table[o.Prop_Calc_Method].value !== 1) {
        if (design.model.symbol_table[o.Cycle_Life].lmin & CONSTRAINED || design.model.symbol_table[o.Cycle_Life].lmax & CONSTRAINED) {
            addAlert({
                element: design.model.symbol_table[o.Cycle_Life],
                name: design.model.symbol_table[o.Cycle_Life].name, 
                message: design.model.symbol_table[o.Cycle_Life].name + ' calculation not available',
                severity: WARN,
                help_url: '[Help](/docs/Help/DesignTypes/Spring/alerts.html#Cycle_LifeNA)'
            });
        } else {
            addAlert({
                element: design.model.symbol_table[o.Cycle_Life],
                name: design.model.symbol_table[o.Cycle_Life].name, 
                message: design.model.symbol_table[o.Cycle_Life].name + ' calculation not available',
                severity: INFO,
                help_url: '[Help](/docs/Help/DesignTypes/Spring/alerts.html#Cycle_LifeNA)'
            });
        }
    }
    if (design.model.symbol_table[o.FS_2].value <= 1.0) {
        if (design.model.symbol_table[o.Cycle_Life].lmin & CONSTRAINED || design.model.symbol_table[o.Cycle_Life].lmax & CONSTRAINED) {
            addAlert({
                element: design.model.symbol_table[o.Cycle_Life],
                name: design.model.symbol_table[o.Cycle_Life].name, 
                message: design.model.symbol_table[o.Cycle_Life].name + ' not defined beyond yield',
                severity: WARN,
                help_url: '[Help](/docs/Help/DesignTypes/Spring/alerts.html#Cycle_LifeNA_FS_2)'
            });
        } else {
            addAlert({
                element: design.model.symbol_table[o.Cycle_Life],
                name: design.model.symbol_table[o.Cycle_Life].name, 
                message: design.model.symbol_table[o.Cycle_Life].name + ' not defined beyond yield',
                severity: INFO,
                help_url: '[Help](/docs/Help/DesignTypes/Spring/alerts.html#Cycle_LifeNA_FS_2)'
            });
        }
    }
    if (!(design.model.symbol_table[o.Coils_A].lmin & CONSTRAINED)) add_DCD_alert(design.model.symbol_table[o.Coils_A], '');
    if (!(design.model.symbol_table[o.Spring_Index].lmin & CONSTRAINED)) add_DCD_alert(design.model.symbol_table[o.Spring_Index], '');
    if (!(design.model.symbol_table[o.Spring_Index].lmax & CONSTRAINED)) add_DCD_alert(design.model.symbol_table[o.Spring_Index], '');
    if (!(design.model.symbol_table[o.FS_2].lmin & CONSTRAINED)) add_DCD_alert(design.model.symbol_table[o.FS_2], '');
    if (!(design.model.symbol_table[o.FS_2].lmax & CONSTRAINED)) add_DCD_alert(design.model.symbol_table[o.FS_2], '');
    if (design.model.symbol_table[o.Tensile].value <= design.model.system_controls.smallnum) {
        addAlert({
            element: design.model.symbol_table[o.Tensile],
            name: design.model.symbol_table[o.Tensile].name, 
            message: 'RELATIONSHIP: ' + design.model.symbol_table[o.Tensile].name + ' (' + design.model.symbol_table[o.Tensile].value.toODOPPrecision() + ') <= ' + design.model.system_controls.smallnum.toODOPPrecision(),
            severity: WARN,
            help_url: '[Help](/docs/Help/DesignTypes/Spring/alerts.html#TensileValueSuspect)'
        });
    }

    commonChecks(store); // Now run the generic checks after the more specific checks

//    console.log('</ul><li>','End check','</li>');
}