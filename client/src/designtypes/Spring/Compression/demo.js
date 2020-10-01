import React from 'react';
import { Image } from 'react-bootstrap';
import { changeSymbolValue, changeSymbolConstraint, loadInitialState, fixSymbolValue, changeLabelsValue, search } from '../../../store/actionCreators';
import { MAX } from '../../../store/actionTypes';
export const execute = {
    steps: [
        {
            title: "Session Now In Progress",
            text: (
                <React.Fragment>
                    <p>
                    The following example illustrates the use of ODOP:Spring to check
                    the design of a compression spring. 
                    </p>
                    
                    <p>
                    As with the other tutorial and demo sessions, 
                    this session needs to start from a known state.  
                    So, if you have entered any work of value that is not yet saved,
                    use the <b>File : Save</b> menu item to save your work before continuing.
                    Moving to the next page will establish the necessary initialState
                    for the ODOP <b>Compression Spring</b> design type.
                    </p>
                    
                    <p>
                    To continue with this example, just click the "Next" button as you finish
                    reading each page (step). 
                    </p>
                    <br />
                </React.Fragment>
            )
        },
        {
            title: "Page 02 of 10",
            text: (
                <React.Fragment>
                    <p>
                    The initial conditions expected by this demo session are now established.
                    Before we make additional changes, let's review the problem statement:<br />
                    </p>
                    
                    <p>
                    Estimate the life of a compression spring of the specified dimensions
                    when subjected to the given working lengths; determine corresponding forces,
                    stress levels, tendency to buckle, and other figures of merit for the design.
                    </p>
                    
                    <table>
                        <tbody>
                            <tr><th>wire diameter</th><td>=</td><td>0.0395</td><td>inches</td><td width="5%"></td><td>Music wire  ASTM A228</td></tr>
                            <tr><th>outside diameter</th><td>=</td><td>0.357</td><td>inches</td><td></td><td>closed & ground ends</td></tr>
                            <tr><th>free length</th><td>=</td><td>0.807</td><td>inches</td></tr>
                            <tr><th>total coils</th><td>=</td><td>8.0</td><td>turns</td></tr>
                            <tr><td>&nbsp;</td></tr>
                            <tr><th>first load height</th><td>=</td><td>0.689</td><td>inches</td></tr>
                            <tr><th>second load height</th><td>=</td><td>0.394</td><td>inches</td></tr>
                        </tbody>
                    </table>
                </React.Fragment>
            ),
            actions: [
                loadInitialState('Spring/Compression'),
                changeSymbolValue("L_Free", 3.0),
                changeSymbolConstraint('%_Avail_Deflect', MAX, 98.),
                changeLabelsValue([{name: 'COMMENT', value: 'Compression Spring Demo'}])
            ]
        },
        {
            title: "Page 03 of 10",
            text: (
                <React.Fragment>
                    <p>
                    In general, the easiest way to begin is to modify an existing design.
                    This demo will modify this design until it meets the requirements of the current design problem.
                    The following sequence of pages will illustrate this process.
                    </p>
                    
                    <p>
                    Since you may not be familiar with the names of ODOP:Spring variables,
                    the next screen will illustrate several variable names in the
                    context of a force-deflection diagram.
                    </p>
                    <br />
                </React.Fragment>
            )
        },
        {
            title: "Page 04 of 10",
            text: (
                <React.Fragment>
                   <Image fluid src="designtypes/Spring/Compression/ForceVsDeflection.png" alt="Force vs Deflection graph"/>
                </React.Fragment>
            )
        },
        {
            title: "Page 05 of 10",
            text: (
                <React.Fragment>
                    <p>Next, we enter everything we know about the problem. </p>
                    
                    <p>Because this session is simply checking the performance of an existing design, 
                    we will primarily use the ODOP capability to FIX the value of selected Independent 
                    and Dependent variables.  
                    Other demo and tutorial sessions
                    that illustrate the use of ODOP:Spring in an original design situation
                    will introduce additional capabilities of the software.</p>
                    
                    <p>This is a good time to take a good look at the existing values.
                    Many values will update immediately as the demo process enters the changes.</p>
                    
                    <p>You can scroll the page down to view the complete set of values. 
                    Scroll back up in order to use the Next button to continue.</p>
                </React.Fragment>
            )
        },
        {
            title: "Page 06 of 10",
            text: (
                <React.Fragment>
                    <p>
                    The demo has now entered what is known about the problem. 
                    In summary, the changes were:<br />
                    </p>
                    FIX  Wire_Dia   0.0395<br/>
                    FIX  OD_Free    0.357<br/>
                    FIX  L_Free     0.807<br/>
                    FIX  Coils_T    8<br/>
                    FIX  L_1 &nbsp; 0.689<br/>
                    FIX  L_2 &nbsp; 0.394<br/>
                    <br />
                    <p>
                    The current values for Force_1 and Force_2 were established as defaults by the initialState. 
                    </p>
                </React.Fragment>
            ),
            actions: [
                fixSymbolValue('Wire_Dia', 0.0395),
                fixSymbolValue('OD_Free', 0.357),
                fixSymbolValue('L_Free', 0.807),
                fixSymbolValue('Coils_T', 8),
                fixSymbolValue('L_1', 0.689),
                fixSymbolValue('L_2', 0.394),
            ]
        },
        {
            title: "Page 07 of 10",
            text: (
                <React.Fragment>
                    <p>
                    Now that we have expressed what we want the design to accomplish,
                    we will ask "Search" for a solution.
                    Specifically, to solve for the Force_1 and Force_2 
                    values that correspond to the FIXes that have just been established.
                    </p>

                    <p>
                    If the program can find a solution that satisfies all the constraints,
                    it will display "<b>FEASIBLE</b>" in the Result section (immediately below these words).  
                    If a satisfactory solution is found, but one or more constraints remain violated by a
                    trivial amount, the program will display "<b>MARGINALLY FEASIBLE</b>" in the Result section.
                    </p>
                </React.Fragment>
            )
        },
        {
            title: "Page 08 of 10",
            text: (
                <React.Fragment>
                    <p>We have a solution. Take a moment to scroll through and view the values.</p>
                    <p>Note that cycle life as well as other figures of merit such as weight and
                    percentage of available deflection utilized at load point 2 are given in
                    Report&nbsp;1&nbsp;(mini).  
                    Simply select (click on) that tab to view the report.</p>
                    <p>The message: 
                    "<b>Coil to coil contact may cause inaccuracy in point 2.</b>" 
                    is produced any time that the second load uses more
                    than 80 % of available deflection.</p>
                    <p>There is no warning about buckling so that is not a concern for this design.</p>
                </React.Fragment>
            ),
            actions: [
                search()
            ]
        },
        {
            title: "Page 09 of 10",
            text: (
                <React.Fragment>
                    <p>
                    Don't forget to switch back to the tab containing the main page ("Design:").
                    <br /><br />
                    Just in case you missed them on the previous screen,
                    scroll down to view the values of <b>Cycle_Life, %_Avail_Deflect</b> and <b>Weight</b>.
                    </p>
                </React.Fragment>
            )
        },
        {
            title: "Page 10 of 10 (last page)",
            text: (
                <React.Fragment>
                    <p>
                    This completes the first ODOP:Spring demonstration problem.
                    </p>
                    
                    <p>
                    The next demonstration problem provides a more 
                    detailed example of spring design from original specifications.  
                    Select "longdemo" from the <b>Help : Demo...</b> menu item.
                    </p>
                    
                    <p>
                    Several more demo problems are available. 
                    They are named demo1, demo2, ... etc. 
                    Tutorial sessions named tutor3, tutor4, ... etc. provide instructions on how to use 
                    the ODOP software.
                    Refer to the on-line documentation section (Help entry) covering the  
                    &nbsp;<a href="https://www.springdesignsoftware.org/odop/docs/Help/tutordemo" target="_blank" rel="noopener noreferrer">Tutorial and Demo</a>&nbsp; 
                    for a complete list of the tutorial and demo topics.
                    </p>
                    
                    <p>
                    If you do not wish to continue with more demonstration problems, 
                    you can experiment with the various ODOP:Spring features, menus and reports. 
                    The HELP menu is a good place to start. 
                    </p>
                </React.Fragment>
            )
        }
    ]
}
