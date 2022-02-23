import { CONSTRAINED } from '../../../store/actionTypes';
export const initialState = {
    "symbol_table": [
        {
            "input": true,
            "name": "OD_Free",
            "value": 28.00,
            "units": "mm",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 200.0,
            "sdlim": 1.0,
            "tooltip": "Outside diameter in free (no load) condition",
            "type": "equationset",
            "hidden": false
        },
        {
            "input": true,
            "name": "Wire_Dia",
            "value": 2.80,
            "units": "mm",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 50.0,
            "sdlim": 0.01,
            "tooltip": "Wire diameter",
            "type": "equationset",
            "hidden": false
        },
        {
            "input": true,
            "name": "L_Free",
            "value": 80.00,
            "units": "mm",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 400.0,
            "sdlim": 1.0,
            "tooltip": "Length in free (no load) condition",
            "type": "equationset",
            "hidden": false
        },
        {
            "input": true,
            "name": "Coils_T",
            "value": 10.0,
            "units": "coils",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 40,
            "sdlim": 1.0,
            "tooltip": "Total number of coils",
            "type": "equationset",
            "hidden": false
        },
        {
            "input": true,
            "name": "Force_1",
            "value": 4.50,
            "units": "newtons",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 50,
            "sdlim": 0.01,
            "tooltip": "Minimum operating load (Length L_1)",
            "type": "equationset",
            "hidden": false
        },
        {
            "input": true,
            "name": "Force_2",
            "value": 180.00,
            "units": "newtons",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 4000,
            "sdlim": 0.1,
            "tooltip": "Maximum operating load (Length L_2)",
            "type": "equationset",
            "hidden": false
        },
        {
            "input": false,
            "name": "Mean_Dia",
            "value": 25.20,
            "units": "mm",
            "lmin": 0,
            "lmax": 0,
            "cmin": 1.0,
            "cmax": 200.0,
            "sdlim": 1.0,
            "tooltip": "Average of inside and outside diameters",
            "type": "equationset",
            "hidden": false
        },
        {
            "input": false,
            "name": "Coils_A",
            "value": 8.0,
            "units": "coils",
            "lmin": CONSTRAINED,
            "lmax": CONSTRAINED,
            "cmin": 1.0,
            "cmax": 40.0,
            "sdlim": 1.0,
            "tooltip": "Number of Active coils",
            "type": "equationset",
            "hidden": false
        },
        {
            "input": false,
            "name": "Rate",
            "value": 4.758667,
            "units": "N/mm",
            "lmin": 0,
            "lmax": 0,
            "cmin": 1.0,
            "cmax": 200.0,
            "sdlim": 0.01,
            "tooltip": "Spring rate (spring constant); slope of force-deflection curve",
            "type": "equationset",
            "hidden": false
        },
        {
            "input": false,
            "name": "Deflect_1",
            "value": 0.945643,
            "units": "mm",
            "lmin": CONSTRAINED,
            "lmax": 0,
            "cmin": 0.0,
            "cmax": 200.0,
            "sdlim": 0.1,
            "tooltip": "Deflection from free to load point 1",
            "type": "equationset",
            "hidden": false
        },
        {
            "input": false,
            "name": "Deflect_2",
            "value": 37.825710,
            "units": "mm",
            "lmin": 0,
            "lmax": 0,
            "cmin": 1.0,
            "cmax": 400.0,
            "sdlim": 1.0,
            "tooltip": "Deflection from free to load point 2",
            "type": "equationset",
            "hidden": false
        },
        {
            "input": false,
            "name": "L_1",
            "value": 79.05436,
            "units": "mm",
            "lmin": 0,
            "lmax": 0,
            "cmin": 1.0,
            "cmax": 1000.0,
            "sdlim": 1.0,
            "tooltip": "Spring length at load point 1",
            "type": "equationset",
            "hidden": false
        },
        {
            "input": false,
            "name": "L_2",
            "value": 42.17428,
            "units": "mm",
            "lmin": 0,
            "lmax": 0,
            "cmin": 1.0,
            "cmax": 500.0,
            "sdlim": 1.0,
            "tooltip": "Spring length at load point 2",
            "type": "equationset",
            "hidden": false
        },
        {
            "input": false,
            "name": "L_Stroke",
            "value": 36.88007,
            "units": "mm",
            "lmin": CONSTRAINED,
            "lmax": 0,
            "cmin": 1.0,
            "cmax": 400.0,
            "sdlim": 0.1,
            "tooltip": "Length of stroke from point 1 to point 2",
            "type": "equationset",
            "hidden": false
        },
        {
            "input": false,
            "name": "L_Solid",
            "value": 28.00,
            "units": "mm",
            "lmin": 0,
            "lmax": 0,
            "cmin": 1.0,
            "cmax": 100.0,
            "sdlim": 1.0,
            "tooltip": "Spring length when fully compressed",
            "type": "equationset",
            "hidden": false
        },
        {
            "input": false,
            "name": "Slenderness",
            "value": 3.174603,
            "units": "ratio",
            "lmin": 0,
            "lmax": 0,
            "cmin": 1.0,
            "cmax": 10.0,
            "sdlim": 0.1,
            "tooltip": "Ratio of free length (L_Free) to mean diameter (Mean_Dia)",
            "type": "equationset",
            "hidden": false
        },
        {
            "input": false,
            "name": "ID_Free",
            "value": 22.40,
            "units": "mm",
            "lmin": CONSTRAINED,
            "lmax": 0,
            "cmin": 1,
            "cmax": 200.0,
            "sdlim": 0.1,
            "tooltip": "Inside diameter in free (no load) condition",
            "type": "equationset",
            "hidden": false
        },
        {
            "input": false,
            "name": "Weight",
            "value": 38.31588,
            "units": "grams",
            "lmin": 0,
            "lmax": 0,
            "cmin": 1.0,
            "cmax": 10000.0,
            "sdlim": 0.001,
            "tooltip": "Weight of one spring",
            "type": "equationset",
            "hidden": false
        },
        {
            "input": false,
            "name": "Spring_Index",
            "value": 9.0,
            "units": "ratio",
            "lmin": 0,
            "lmax": 0,
            "cmin": 4.0,
            "cmax": 10.0,
            "sdlim": 1.0,
            "tooltip": "Ratio of mean coil diameter (Mean_Dia) to wire diameter (Wire_Dia)",
            "type": "equationset",
            "hidden": false
        },
        {
            "input": false,
            "name": "Force_Solid",
            "value": 247.4507,
            "units": "newtons",
            "lmin": 0,
            "lmax": 0,
            "cmin": 1.0,
            "cmax": 4000.0,
            "sdlim": 0.1,
            "tooltip": "Load required to fully compress the spring",
            "type": "equationset",
            "hidden": false
        },
        {
            "input": false,
            "name": "Stress_1",
            "value": 15.28679,
            "units": "MPa",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0.0,
            "cmax": 1000.0,
            "sdlim": 100.0,
            "tooltip": "Torsion stress in wire at load point 1",
            "type": "equationset",
            "hidden": false
        },
        {
            "input": false,
            "name": "Stress_2",
            "value": 611.4717,
            "units": "MPa",
            "lmin": 0,
            "lmax": 0,
            "cmin": 100.0,
            "cmax": 1000.0,
            "sdlim": 1000.0,
            "tooltip": "Torsion stress in wire at load point 2",
            "type": "equationset",
            "hidden": false
        },
        {
            "input": false,
            "name": "Stress_Solid",
            "value": 840.6062,
            "units": "MPa",
            "lmin": 0,
            "lmax": 0,
            "cmin": 100.0,
            "cmax": 2000.0,
            "sdlim": 1000.0,
            "tooltip": "Torsion stress in wire when spring is fully compressed",
            "type": "equationset",
            "hidden": false
        },
        {
            "input": false,
            "name": "FS_2",
            "value": 1.462684,
            "units": "ratio",
            "lmin": CONSTRAINED,
            "lmax": CONSTRAINED,
            "cmin": 1.02,
            "cmax": 1.5,
            "sdlim": 0.1,
            "tooltip": "Factor of safety at load point 2",
            "type": "equationset",
            "hidden": false
        },
        {
            "input": false,
            "name": "FS_Solid",
            "value": 1.063982,
            "units": "ratio",
            "lmin": CONSTRAINED,
            "lmax": 0,
            "cmin": 1.0,
            "cmax": 1.5,
            "sdlim": 0.1,
            "tooltip": "Factor of safety when the spring is fully compressed",
            "type": "equationset",
            "hidden": false
        },
        {
            "input": false,
            "name": "FS_CycleLife",
            "value": 1.398757,
            "units": "ratio",
            "lmin": 0,
            "lmax": 0,
            "cmin": 1.02,
            "cmax": 1.5,
            "sdlim": 0.1,
            "tooltip": "Factor of safety to achieve the target cycle life category. See on-line Help.",
            "type": "equationset",
            "hidden": false
        },
        {
            "input": false,
            "name": "Cycle_Life",
            "value": 558149.5,
            "units": "cycles",
            "lmin": 0,
            "lmax": 0,
            "cmin": 10000,
            "cmax": 1000000,
            "sdlim": 10000.0,
            "tooltip": "Rough estimate of the average number of cycles to failure. See on-line Help.",
            "type": "equationset",
            "hidden": false
        },
        {
            "input": false,
            "name": "%_Avail_Deflect",
            "value": 72.74176,
            "units": "%",
            "lmin": 0,
            "lmax": CONSTRAINED,
            "cmin": 1,
            "cmax": 90.0,
            "sdlim": 10.0,
            "tooltip": "Deflection of load point 2 as a percent of total available deflection",
            "type": "equationset",
            "hidden": false
        },
        {
            "input": false,
            "name": "Energy",
            "value": 1,
            "units": "N-mm",
            "lmin": 0,
            "lmax": 0,
            "cmin": 1,
            "cmax": 1000000,
            "sdlim": 0.01,
            "tooltip": "Change in elastic potential energy between 1 and 2",
            "type": "equationset",
            "hidden": false
        },
        {
            "input": false,
            "name": "Spring_Type",
            "value": "Compression",
            "units": "",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "sdlim": 0.0,
            "tooltip": "Compression spring design",
            "type": "calcinput",
            "hidden": false
        },
        {
            "input": true,
            "name": "Prop_Calc_Method",
            "value": 1,
            "units": "",
            "format": "table",
            "table": "Spring/Compression/prop_calc",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "sdlim": 0.0,
            "tooltip": "Property Calculation Method - Controls how material properties are determined and used.  1-Use values from material table  2-Specify Tensile, %_Tensile_Stat & %_Tensile_Endur  3-Specify allowable stresses: Stress_Lim_Stat & Stress_Lim_Endur",
            "type": "calcinput",
            "hidden": false
        },
        {
            "input": true,
            "name": "Material_Type",
            "value": 2,
            "units": "",
            "format": "table",
            "table": "Spring/mat_SI",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "sdlim": 0.0,
            "tooltip": "Select wire material",
            "type": "calcinput",
            "hidden": false
        },
        {
            "input": true,
            "name": "ASTM/Fed_Spec",
            "value": "Defined in initialState",
            "units": "",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "sdlim": 0.0,
            "tooltip": "Wire specification",
            "type": "calcinput",
            "hidden": false
        },
        {
            "input": true,
            "name": "Process",
            "value": "Cold_Coiled",
            "units": "",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "sdlim": 0.0,
            "tooltip": "Coil winding process temperature - Cold coiled vs. Hot wound",
            "type": "calcinput",
            "hidden": false
        },
        {
            "input": true,
            "name": "Material_File",
            "value": "mat_SI.json",
            "units": "",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "sdlim": 0.0,
            "tooltip": "mat_SI.json for metric units. Anything else for US ips units",
            "type": "calcinput",
            "hidden": true
        },
        {
            "input": true,
            "name": "Life_Category",
            "value": 1,
            "units": "",
            "format": "table",
            "table": "Spring/Compression/lifetarget",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "sdlim": 0.0,
            "tooltip": "Select cycle life target. Selects %_Tensile_Endur from material table.",
            "type": "calcinput",
            "hidden": false
        },
        {
            "input": true,
            "name": "Density",
            "value": 0.00786,
            "units": "g/mm**3",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "sdlim": 0.0,
            "tooltip": "Wire material density",
            "type": "calcinput",
            "hidden": false
        },
        {
            "input": true,
            "name": "Torsion_Modulus",
            "value": 79293.0,
            "units": "MPa",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "sdlim": 0.0,
            "tooltip": "Wire torsion modulus (G)",
            "type": "calcinput",
            "hidden": false
        },
        {
            "input": true,
            "name": "Hot_Factor_Kh",
            "value": 1.0,
            "units": "ratio",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "sdlim": 0.0,
            "tooltip": "Reduction factor applied to modulus of hot-wound materials",
            "type": "calcinput",
            "hidden": false
        },
        {
            "input": true,
            "name": "Tensile",
            "value": 1788.8,
            "units": "MPa",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "sdlim": 0.0,
            "tooltip": "Wire tensile strength (computed as a function of wire diameter when Prop_Calc_Method=1; See on-line Help for details)",
            "type": "calcinput",
            "hidden": false
        },
        {
            "input": true,
            "name": "%_Tensile_Endur",
            "value": 50.0,
            "units": "%",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "sdlim": 0.0,
            "tooltip": "Allowable percent of tensile strength for selected life cycle category",
            "type": "calcinput",
            "hidden": false
        },
        {
            "input": true,
            "name": "%_Tensile_Stat",
            "value": 50.0,
            "units": "%",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "sdlim": 0.0,
            "tooltip": "Allowable percent of tensile strength for static applications",
            "type": "calcinput",
            "hidden": false
        },
        {
            "input": true,
            "name": "Stress_Lim_Endur",
            "value": 894.3903,
            "units": "MPa",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "sdlim": 0.0,
            "tooltip": "Allowable stress for selected life cycle category",
            "type": "calcinput",
            "hidden": false
        },
        {
            "input": true,
            "name": "Stress_Lim_Stat",
            "value": 894.3903,
            "units": "MPa",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "sdlim": 0.0,
            "tooltip": "Allowable stress for static applications",
            "type": "calcinput",
            "hidden": false
        },
        {
            "input": true,
            "name": "End_Type",
            "value": 4,
            "units": "",
            "format": "table",
            "table": "Spring/Compression/endtypes",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "sdlim": 0.0,
            "tooltip": "Select end type",
            "type": "calcinput",
            "hidden": false
        },
        {
            "input": true,
            "name": "Inactive_Coils",
            "value": 2.0,
            "units": "coils",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "sdlim": 0.0,
            "tooltip": "Number of coils not contributing to deflection. Depends on End_Type.",
            "type": "calcinput",
            "hidden": false
        },
        {
            "input": true,
            "name": "Add_Coils@Solid",
            "value": 0.0,
            "units": "coils",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "sdlim": 0.0,
            "tooltip": "Adjusts calculation of L_Solid. Depends on End_Type. See on-line Help for details.",
            "type": "calcinput",
            "hidden": false
        },
        {
            "input": false,
            "name": "Catalog_Name",
            "value": "",
            "units": "",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "sdlim": 0.0,
            "tooltip": "Name of the catalog from which the catalog entry was selected",
            "type": "calcinput",
            "hidden": false
        },
        {
            "input": false,
            "name": "Catalog_Number",
            "value": "",
            "units": "",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "sdlim": 0.0,
            "tooltip": "Catalog entry which was selected from the named catalog",
            "type": "calcinput",
            "hidden": false
        },
        {
            "input": true,
            "name": "tbase010",
            "value": 0.254,
            "units": "",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "sdlim": 0.0,
            "type": "calcinput",
            "hidden": true
        },
        {
            "input": true,
            "name": "tbase400",
            "value": 10.160,
            "units": "",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "sdlim": 0.0,
            "type": "calcinput",
            "hidden": true
        },
        {
            "input": true,
            "name": "const_term",
            "value": 1.0,
            "units": "",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "sdlim": 0.0,
            "type": "calcinput",
            "hidden": true
        },
        {
            "input": true,
            "name": "slope_term",
            "value": 1.0,
            "units": "",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "sdlim": 0.0,
            "type": "calcinput",
            "hidden": true
        },
        {
            "input": true,
            "name": "tensile_010",
            "value": 1000.0,
            "units": "MPa",
            "lmin": 0,
            "lmax": 0,
            "cmin": 0,
            "cmax": 0,
            "sdlim": 0.0,
            "type": "calcinput",
            "hidden": true
        }
    ],
    "labels": [
        {
            "name": "COMMENT",
            "value": "Compression Spring default start point ... metric units"
        },
        {
            "name": "Contact person",
            "value": ""
        },
        {
            "name": "Company name",
            "value": ""
        },
        {
            "name": "Street",
            "value": ""
        },
        {
            "name": "City, State & Zip",
            "value": ""
        },
        {
            "name": "Phone & email",
            "value": ""
        },
        {
            "name": "Date",
            "value": ""
        },
        {
            "name": "Part Number",
            "value": ""
        },
        {
            "name": "Data Source",
            "value": "print     sample      verbal"
        },
        {
            "name": "Mandril",
            "value": ""
        },
        {
            "name": "Wind",
            "value": "rh lh opt"
        },
        {
            "name": "Shot peen",
            "value": "yes no; details"
        },
        {
            "name": "Stress relieve/HT",
            "value": ""
        },
        {
            "name": "Pre-set",
            "value": "no"
        },
        {
            "name": "Finish",
            "value": ""
        },
        {
            "name": "Squareness",
            "value": ""
        },
        {
            "name": "End use",
            "value": ""
        },
        {
            "name": "Fits in / Works over",
            "value": ""
        },
        {
            "name": "Operating temp",
            "value": ""
        },
        {
            "name": "Special notes & tol",
            "value": ""
        },
        {
            "name": "Customer approval",
            "value": "__________________________ "
        },
        {
            "name": "Customer date",
            "value": " _______ "
        },
        {
            "name": "Vendor approval",
            "value": "__________________________ "
        },
            {
            "name": "Vendor date",
            "value": " _______ "
        }
    ],
    "type": "Spring/Compression",
    "version": "10",
    "result": {
        "objective_value": 0,
        "termination_condition": "",
        "violated_constraint_count": 0
    },
    "jsontype": "ODOP",
    "units": "Metric"
};
