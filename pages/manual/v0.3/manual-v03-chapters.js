/* Replace these examples with your real v0.3 documentation. */
const chapters = [
  {
    group: "Program",
    id: "program-overview",
    title: "Program overview",
    body: `
      <div class="article-meta">PROGRAM / 00 — OVERVIEW</div>
      <h2>Program overview</h2>
      <p>
              Welcome to the Daedalus user manual. 
              Daedalus is a program for designing and editing airfoils and wings. 
              This manual will guide you through the main features and help you get started with your projects.
          </p>
          <ul>
              <li>Design and modify airfoils with intuitive tools.</li>
              <li>Import/export airfoil files in various formats.</li>
              <li>Use the Wing Workbench for advanced wing design.</li>
          </ul>
          <img src="v0.3/assets/Daedalus/STEP_export.jpg" alt="Wing Workbench" style="height: 50vw; max-height: 500px;"/>

          <h2>Daedalus</h2>
          <p>Daedalus consists of two modules:             <a href="#manual/airfoil-overview">2D airfoil designer</a> and
            <a href="#manual/wing-overview">3D wing designer</a>.
            Each module is equipped with Menu Bar which allows for usage of functions and interaction with program objects and program itself.
            Global program interactions can be made through the <span class="highlight">File</span> and <span class="highlight">Program</span> menus.
          </p>

          <h2>Getting Started</h2>
          <p>Once DAEDALUS program is started user will be welcomed by Splash Screen of the program. With splash screen you can:</p>
          <ul>
              <li><b>Create new project:</b> Start a new project.</li>
              <li><b>Open existing project:</b> Load an existing project file.</li>
              <li><b>Open user manual:</b> Go directly to user manual without closing the Splash Screen</li>
              <li><b>Open realise notes:</b> Opens web browser with latest realise notes (reqires ethernet connection)</li>
          </ul>
          <img src="v0.3/assets/Daedalus/splashscreen.png" alt="Splash Screen" style="height: 45vh; max-height: 400px;"/> <br>

          Once new File or Open Project is clicked an <a href="#manual/airfoil-overview">Airfoil Designer</a> window opens.
          In every module user can interact with bar menu sections:

          <h2 id="FileMenu">File Menu</h2>
          <p> Allows user to interact with <span class="highlight">PROJECT</span> itself. Available interactions and functions are:</p>
          <ul>
              <li><b>New:</b> Start a new project.</li>
              <li><b>Open:</b> Load an existing project file.</li>
              <li><b>Save:</b> Save your current project.</li>
              <li><b>Exit:</b> Closes program after clarification.</li>
          </ul>

          <h2 id="ProgramMenu">Program Menu</h2>
          <p> Allows user to interact and get information about <span class="highlight">PROGRAM</span> itself. Basic interactions are:</p>
          <ul>
              <li><b>User Manual:</b> If user gets lost while using program, user manual can be displyed from here.</li>
              <li><b>About:</b> Show information about the program.</li>
              <li><b>Preferences:</b> Adjust program settings.</li>
          </ul>

          <h3>Preferences</h3>
          <p>Preferences window allows user to customize the program settings according to needs.<br>
            <strong>Units</strong> - sets units <span class="highlight">FOR STEP EXPORT ONLY! (at least for now)</span>
            <ul>
              <li><strong>Length:</strong> allows to set length unit (for now only meters available)</li>
              <li><strong>Angle:</strong> allows to set angle unit (for now only radians)</li>
            </ul>
            <strong>General performance: </strong> Allows user to choose the details level in graphics rendering. Performace level is set using slider where 10 is lowest and 100 is highest detail level.<br>
            <img src="v0.3/assets/Daedalus/preferences_general_performance.png" alt="preferences general performance" style="height: 45vh; max-height: 400px;"/>

            <h4>Beta features</h4>
            Unlocks functions that are not well tested or stable. Used at user's own risk!
          </p>`
  },
  {
    group: "Airfoil Designer",
    id: "airfoil-overview",
    title: "Airfoil Designer overview",
    body: `
      <!-- Airfoil Designer Section -->
      <div id="airfoil" class="page-section">
        <div id="ADoverview">
          <p>Airfoil designer module allows useer to design, modify and export airfoils using control points and geometry tools. <br>
            Airfoils are defined as 4 splines, each for:
            <ul>
              <li>Pressure Side</li>
              <li>Suction Side</li>
              <li>Leading Edge</li>
              <li>Trailing Edge</li>
            </ul>
            It is belived that with such definition it would be easier to create such airfoil and ensure clean geometry to any CFD software as well as manufacturing.
            To Help with creation of airfoil, designer consists of elements such as:
            <ul>
              <li>Menu Bar</li>
              <li>Viewport</li>
              <li>Airfoil storage</li>
              <li>Parameters tabele</li>
            </ul>
          </p>
          <img src="v0.3/assets/AirfoilDesigner/airfoil_designer_elements.jpg" alt="Airfoil Designer Elements" style="height: 60vw; max-height: 400px;"/>
        </div>`
  },
  {
    group: "Airfoil Designer",
    id: "airfoil-widgets",
    title: "Widgets overview",
    body: `
      <!-- Airfoil Designer Section -->
        <div id="ADMenuBar">
          <h2>Menu Bar overview</h2>

          <h3>File menu</h3>
          See the <a href="#manual/program-overview/FileMenu">File menu details</a>.
          <h3>Edit menu</h3>
          <p>Allows user to interact with Airfoil Designer. Contains basic functinality required to create, recreate, modify, reload airfoils</p>
            <ul>
                <li><b>Create:</b> Add a new airfoil to your project.</li>
                <li><b>Append:</b> Import an airfoil from a file.</li>
                <li><b>Delete:</b> Remove the selected airfoil.</li>
                <li><b>Save:</b> Save the selected airfoil to a file.</li>
                <li><b>Export:</b> Export the airfoil as a DXF file.</li>
                <li><b>Flip Airfoil:</b> Flip the selected airfoil horizontally.</li>
                <li><b>Rename:</b> Change the name of the selected airfoil.</li>
                <li><b>Edit Description:</b> Edit the airfoil's description.</li>
                <li><b>Fit2Reference:</b> Fit the airfoil to a reference (beta feature).</li>
            </ul>

          <h3>View menu</h3>
          <p>Allows user to add elements to be displayed</p>
            <ul>
                <li><b>Show Reference:</b> Chooses a reference airfoil and makes it visible in viewport (works for selig format airfoils (.txt) and for ddls-parametric (.arf))</li>
            </ul>
            <div class="note">
              <div class="inside">
                <h3>NOTE</h3>
                To toggle a reference you must first select an airfoil from Airfoil Tree
              </div>
            </div>
          
          <h3>Module menu</h3>
          Allows user to change module menu. Available modules are:
          <a href="#manual/wing-overview" class="button-link">Wing Designer</a>

          <h3>Program menu</h3>
          See the <a href="#manual/program-overview/ProgramMenu">Program menu details</a>.

        </div>
        
        <div id="ADViewport">
          <h2>Viewport overview</h2>
          <p>Airfoil Designer is equiped with OpenGL 2D viewport. To navigate in viewport drag around holding Left Mouse Button (LMB), use mouse wheel to zoom in and out.</p>
          <ul>
              <li><b>Grid:</b> displays a net to visualize a dimensions and help to navigate</li>
              <li><b>Ruler:</b> shows a dimensions that grid represents, at the same time show a project unit</li>
              <li><b>Control points:</b> visualize a point which defines a spline, each color represents different spline CP</li>
              <li><b>Construction:</b> show a connection between control points</li>
              <li><b>Wireframe:</b> show a spline shape created from control points</li>
            </ul>
          <img src="v0.3/assets/AirfoilDesigner/AD_Viewport.jpg" alt="Airfoil Designer Elements" style="height: 45vh; max-height: 400px;"/>
        </div>
        
        <div id="ADArfTree">
          <h2>Airfoil Tree overview</h2>
          <p>Airfoil tree widget display all the airfoils in current project. To perform some operations (e.g. delete an airfoil, fit2reference or flip) it is neccessary to select one airfoil in the widget. 
          <br><strong>It is possible to have several airfoils under the same name</strong>
          </p>
          <ul>
              <li><b>Name:</b> show a airfoil name for representation</li>
              <li><b>Last modification:</b> shows a last modification date</li>
              <li><b>Creation Date:</b> shows a date of airfoil creation</li>
              <li><b>Description:</b> show a description atttached to airfoil</li>
            </ul>
          <img src="v0.3/assets/AirfoilDesigner/AD_Storage.png" alt="Airfoil Designer Elements" style="height: 45vh; max-height: 400px;"/>
        </div>
        
        <div id="ADParamTab">
          <h2>Parameter Table overview</h2>

          <p> Parameter table widget shows parameters of a selected in Airfoil storage overview airfoil. Table is divided into 4 columns:
            <ul>
            <li><strong>Parameter:</strong> name of the parameter</li>
            <li><strong>Value:</strong> modifiable value of the parameter. To change the value use arrows or input new value in the input box. If value is incorrect parameter will go back to last know value.</li>
            <li><strong>Nominal:</strong> shows the parameter value before change</li>
            <li><strong>Unit:</strong> shows a unit of the parameter</li>
          </ul>
          Use arrow up <button>⯅</button> to increase value and arrow down <button>⯆</button> to decrease value of parameter in the same row.
          It is possible to change the increasement/decreasement value by holding keyboard keys while clicking on Left Mouse Button. Allowed modifiers are:
          <ul>
            <li><strong>LMB:</strong> 0.1</li>
            <li><strong>LMB+Shift:</strong> 1.0</li>
            <li><strong>LMB+Ctrl:</strong> 0.01</li>
          </ul>
          </p>
          <img src="v0.3/assets/AirfoilDesigner/AD_ParamTable.png" alt="Airfoil Designer Elements" style="height: 45vh; max-height: 400px;"/><br>

        </div>`
  },
  {
    group: "Wing Designer",
    id: "wing-overview",
    title: "Wing Designer overview",
    body: `
      <!-- Wing Workbench Section -->
      <div id="wing" class="page-section active">
        <div id="WDoverview">
          <p>Assemble full wings from created / established in Airfoil Designer profiles.
          Wing designer module allows useer to design, modify and export 3D wing geometries<br>
          Wings are defined as a structures consisting of:
            <ul>
              <li><b>Components:</b> Primary object consits of wing (representation of e.g. Rear Wing in racecar )</li>
              <li><b>Wings:</b> Secondary object consits of segments (representation of e.g. 1st Wing of Rear Wing )</li>
              <li><b>Segments:</b> Constructional element of the wing. Give Wing a shape (representation of e.g. Ribs inside Wing )</li>
            </ul>
            It is belived that with such definition it would be easier to create such airfoil and ensure clean geometry to any CFD software as well as manufacturing.
            To Help with creation of wings, designer consists of elements such as:
            <ul>
              <li>Menu Bar</li>
              <li>Viewport</li>
              <li>Geometry storage</li>
              <li>Parameters tabele</li>
            </ul>
          </p>
          <img src="v0.3/assets/WingDesigner/wing_workbench.jpg" alt="Wing Workbench" style="height: 60vw; max-height: 400px;"/>
        </div>`
  },
  {
    group: "Wing Designer",
    id: "wing-widgets",
    title: "Widgets overview",
    body: `
        <div id="WDMenuBar">
          <h2>Menu Bar overview</h2>
          <h3>File menu</h3>
          See the <a href="#manual/program-overview/FileMenu">File menu details</a>.
          <h3>Edit menu</h3>
          <p>Allows user to interact with Airfoil Designer. Contains basic functinality required to create, recreate, modify, reload airfoils</p>
          <ul>
              <li><b>Add Component:</b> Add a new component to your project.</li>
              <li><b>Delete Component:</b> deletes selected component from a project.</li>
              <li><b>Add Wing:</b> adds new wing under selected component</li>
              <li><b>Delete Wing:</b> deletes selected wing from a compoent</li>
              <li><b>Add Segment:</b> adds a new segment to selected wing</li>
              <li><b>Delete Segment:</b> removes selected segment from wing</li>
          </ul>

          <h3>View menu</h3>
          <p>Allows user to select preset view direction</p>
            <ul>
              <li><b>X+:</b> X axis points at the camera</li>
              <li><b>Y+:</b> Y axis points at the camera</li>
              <li><b>Z+:</b> Z axis points at the camera</li>
              <li><b>X-:</b> X axis points away from the camera</li>
              <li><b>Y-:</b> Y axis points away from the camera</li>
              <li><b>Z-:</b> Z axis points away from the camera</li>
            </ul>
          
          <h3>Module menu</h3>
          Allows user to change module menu. Available modules are:
          <a href="#manual/airfoil-overview" class="button-link">Airfoil Designer</a>

          <h3>Program menu</h3>
          See the <a href="#manual/program-overview/ProgramMenu">Program menu details</a>.

        </div>
        
        <div id="WDViewport">
          <h2>Viewport overview</h2>
          <p>Wing Designer is equiped with OpenGL 3D viewport. To navigate in viewport use mouse:</p>
            <ul>
              <li><b>Left Mouse Button LMB:</b> rotate viewport along center</li>
              <li><b>Middle Mouse Button MMB:</b> translate viewport</li>
              <li><b>Right Mouse Button</b> or <b>Mouse Wheel:</b> zoom in and out</li>
            </ul>
          <p>Viewport displays certain objects: </p>
          <ul>
              <li><b>Grid:</b> displays a net to visualize a dimensions and help to navigate</li>
              <li><b>Control points:</b> visualize a uv grid which defines a surface</li>
              <li><b>Construction:</b> show a connection between control points</li>
              <li><b>Wireframe:</b> show a spline shape created from control points</li>
              <li><b>Surface:</b> representation of wing skin geometry</li>
            </ul>
          <img src="v0.3/assets/WingDesigner/WD_Viewport.jpg" alt="Wing Designer Elements" style="height: 45vh; max-height: 400px;"/>
        </div>
        
        <div id="WDStorage">
          <h2>Wing Storage overview</h2>
          <p>Wing storage widget display all the elements in current project. To perform some operations (e.g. delete a segment) it is neccessary to select one element in the widget. 
          </p>
          <ul>
              <li><b>Name:</b> show an element name for representation</li>
            </ul>
          <img src="v0.3/assets/WingDesigner/WD_Storage.jpg" alt="Wing Designer Storage" style="height: 37vh; max-height: 400px;"/>
        </div>
        
        <div id="ADParamTab">
          <h2>Parameter Table overview</h2>

          <p> Parameter table widget shows parameters of a selected in Wing Storage Widget element (component/wing/segment). Table is divided into 4 columns:
            <ul>
            <li><strong>Parameter:</strong> name of the parameter</li>
            <li><strong>Value:</strong> modifiable value of the parameter. To change the value use arrows or input new value in the input box. If value is incorrect parameter will go back to last know value.</li>
            <li><strong>Nominal:</strong> shows the parameter value before change</li>
            <li><strong>Unit:</strong> shows a unit of the parameter</li>
          </ul>
          Use arrow up <button>⯅</button> to increase value and arrow down <button>⯆</button> to decrease value of parameter in the same row.
          It is possible to change the increasement/decreasement value by holding keyboard keys while clicking on Left Mouse Button. Allowed modifiers are:
          <ul>
            <li><strong>LMB:</strong> 0.1</li>
            <li><strong>LMB+Shift:</strong> 1.0</li>
            <li><strong>LMB+Ctrl:</strong> 0.01</li>
          </ul>
          </p>
          <img src="v0.3/assets/WingDesigner/WD_ParamTable.jpg" alt="Wing Designer Parameter Table" style="height: 45vh; max-height: 400px;"/><br>

        </div>
      </div>`
  },
];
