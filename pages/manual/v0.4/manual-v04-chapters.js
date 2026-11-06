/* Replace these examples with your real v0.4 documentation. */
const chapters = [
  {
    group: "Program",
    id: "program-overview",
    title: "Program overview",
    body: `
      <div class="article-meta">00 — OVERVIEW // 2.11.2026</div>
      <p>
        Welcome to the Daedalus user manual. 
        Daedalus is a program for designing and editing airfoils and wings. 
        This manual will guide you through the main features and help you get started with your projects.
        The program was designed so as to:
      </p>
      <ul>
        <li>Design and modify airfoils with intuitive tools.</li>
        <li>Paramterize the geometry and provide good fundation for geometry optimization.</li>
        <li>Create high quaility and fine detail geometries.</li>
        <li>Import/export airfoil files in various formats.</li>
      </ul>
      <img src="v0.4/assets/Daedalus/STEP_export.jpg" alt="Wing Workbench" style="height: 50vw; max-height: 500px;"/>

      <h2>Daedalus</h2>
      <p>Daedalus consists of two modules: <strong>2D airfoil designer</strong> and <strong>3D wing designer</strong>.
        Each module is equipped with common and dedicated widgets which store the functions to be executed on the geoemtrical models and program itself.
        The information is shared between modules. 
        It ensures that airfoils created in Airfoil Designer can be used to create wings. 
        If any new airfoii is created inside 3D module, it is possible to refine it in Airfoil Designer.
        Use buttons below to learn more about specific modules:
      </p>
      <div class="wrap">
        <div class="feature-grid actions" data-columns="2">
          <a class="btn" href="#manual/airfoil-overview" style="display: block; padding: 16px;">
            <small>MODULES // 01</small>
            <div style="display: flex; justify-content: space-evenly;">
              <div style="align-content: center; padding: 8px;">
                <img src="v0.4/assets/IconPack/Classic/AirfoilIcon.svg" height="96px">
              </div>
              <div>
                <strong style="margin: 42px 0 14px;padding-bottom: 8px;border-bottom: 1px solid var(--paper-line);font-size: 24px;letter-spacing: -.025em;scroll-margin-top: 24px;">AIRFOIL DESIGNER</strong>
                <p>Create 2D airfoils</p>
              </div>
            </div>
          </a>
          <a class="btn" href="#manual/wing-overview" style="display: block; padding: 16px;">
            <small>MODULES // 02</small>
            <div style="display: flex; justify-content: space-evenly;">
              <div style="align-content: center; padding: 8px;">
                <img src="v0.4/assets/IconPack/Classic/ComponentIcon.svg" height="96px">
              </div>
              <div>
                <strong style="margin: 42px 0 14px;padding-bottom: 8px;border-bottom: 1px solid var(--paper-line);font-size: 24px;letter-spacing: -.025em;scroll-margin-top: 24px;">WING DESIGNER</strong>
                <p>Create 3D wings and assemblies</p>
              </div>
            </div>
          </a>
        </div>
      </div>`
  },
  {
    group: "Program",
    id: "program-getting-started",
    title: "Getting started",
    body: `
      <p>Once DAEDALUS program is started user will be welcomed by Splash Screen of the program. With splash screen you can:</p>
      <ul>
          <li><b>Create new project:</b> Start a new project.</li>
          <li><b>Open existing project:</b> Load an existing project file.</li>
          <li><b>Open user manual:</b> Go directly to user manual without closing the Splash Screen</li>
          <li><b>Open realise notes:</b> Opens web browser with latest realise notes (reqires ethernet connection)</li>
      </ul>
      <img src="v0.4/assets/Daedalus/splashscreen.png" alt="Splash Screen" style="height: 45vh; max-height: 400px;"/> <br>`
  },
  {
    group: "Program",
    id: "program-common-widgets",
    title: "Common Widgets",
    body: `
      <p>There are 2 types of widgets in the Daedalus program. 
        <strong>Common widgets</strong> are widgets shared between the modules. 
        They are unrelated to geometries and actions performed to airfoils and wings, as they mostly interact with program or project.
        They can also provide a basis or storage for the geometry related functions.</p>

      <h2 id="MenuBar">Menu Bar</h2>
      <p> The Menu Bar widget allows user to interact with: project - <span class="highlight">File Menu</span>, module - <span class="highlight">Module Menu</span> and program - <span class="highlight">Program Menu</span>. 
        It also provides a storage for the module-related functions. 
        It also allows user to control currently displayed widgets in the module via - <span class="highlight">Window Menu</span>.</p>
        <p> The following menus are part of the Menu Bar and are common between the modules: </p>

      <h3 id="FileMenu">File Menu</h3>
      <p>The main goal is to give a user control over the project, therefore these functions are avaiable:</p>
      <ul>
          <li><b>New:</b> Start a new project.</li>
          <li><b>Open:</b> Load an existing project file.</li>
          <li><b>Save:</b> Save your current project. (Quick Save)</li>
          <li><b>Save as:</b> Save your current project as a new project.</li>
          <li><b>Edit project description:</b> Provide or edit the description of the project.</li>
          <li><b>Export:</b> Export 3D model to STEP format</li>
          <li><b>Exit:</b> Closes program after clarification.</li>
      </ul>

      <h3 id="WindowMenu">Window Menu</h3>
      <p>The main goal is to give a user control over the widgets displayed in program's window. 
        Although each module has it's own widgets, the following function is shared across all modules:</p>
      <ul>
          <li><b>Reset Layout:</b> Return widgets back to default state.</li>
      </ul>

      <h3 id="ModuleMenu">Module menu</h3>
      <p>Allows user to change betwwen the modules. Available modules are:</p>
      <ul>
        <li><a href="#manual/airfoil-overview" class="button-link">Airfoil Designer</a></li>
        <li><a href="#manual/wing-overview" class="button-link">Wing Designer</a></li>
      </ul>

      <h3 id="ProgramMenu">Program Menu</h3>
      <p> Allows user to interact and get information about the program itself. Basic interactions are:</p>
      <ul>
          <li><b>User Manual:</b> If user gets lost while using program, user manual can be displyed from here.</li>
          <li><b>About:</b> Show information about the program.</li>
          <li><b>Preferences:</b> Adjust program settings.</li>
      </ul>
      <h2>Tool Bar</h2>
      <p>Tool Bar has been created to expose the most useful or frequently used functions. 
        In v0.4 the toolbar has been divided to groups. 
        One is common between modules and shows the project related functions.</p>
      <div style="display: flex; justify-content: space-evenly;">
        <div style="display: grid; justify-items: center; background-color: var(--soft); padding: 8px; border-radius: 8px;">
          <img src="v0.4/assets/IconPack/Classic/NewFile.svg" height="48px">
          <span>New Project</span>
        </div>
        <div style="display: grid; justify-items: center; background-color: var(--soft); padding: 8px; border-radius: 8px;">
          <img src="v0.4/assets/IconPack/Classic/openFile.svg" height="48px">
          <span>Open Project</span>
        </div>
        <div style="display: grid; justify-items: center; background-color: var(--soft); padding: 8px; border-radius: 8px;">
          <img src="v0.4/assets/IconPack/Classic/SaveProject.svg" height="48px">
          <span>Save Project</span>
        </div>
        <div style="display: grid; justify-items: center; background-color: var(--soft); padding: 8px; border-radius: 8px;">
          <img src="v0.4/assets/IconPack/Classic/EditDescription.svg" height="48px">
          <span>Edit Description</span>
        </div>
      </div>
      <h2>Description Widget</h2>
      <p>Description widget consists of:</p>
      <ul>
        <li><span>Preview text area with edit button</span>
          <p>Preview of the description is displayed in a dockable widget it is to prevent accidental editing of the text.
            To edit the text press the <b>Edit</b> button, either in a widget or in a File Menu. It triggers the:</p></li>
        <li><span>Pop-up window with editable text area and buttons save and cancel</span>
          <p>Here a text can be edited. Press <b>Save</b> to apply the changes. Press <b>Cancel</b> to reject the changes and restore previous description.</p></li>
      </ul>
      <h2>Logger Console</h2>
      <p>The logger console has been created to display the <b><i>toolout.log</i></b> file which is created every time the program starts. 
        This file stores the log about the triggered actions and their output. It stores several log levels: DEBUG, INFO, WARNING, ERROR, CRITICAL.
        This file can be shared with developer completely voluntarily to help with bugfixing in the program.</p>
      <p>The logger console displays only limited information, it is: INFO, WARNING, ERROR, CRITICAL.
        It helps user to understand if the action has been finished or wheather any errors appeared during function execution, likely cause or tip to resolve the issue.</p>
      `
  },
  {
    group: "Program",
    id: "program-preferences",
    title: "Preferences & Settings",
    body: `
      <p>Preferences window allows user to customize the program settings according to needs.<br>
        <strong>Units</strong> - sets units <span class="highlight">FOR STEP EXPORT ONLY! (at least for now)</span>
        <ul>
          <li><strong>Length:</strong> allows to set length unit (for now only meters available)</li>
          <li><strong>Angle:</strong> allows to set angle unit (for now only radians)</li>
        </ul>
        <strong>General performance: </strong> Allows user to choose the details level in graphics rendering. Performace level is set using slider where 10 is lowest and 100 is highest detail level.<br>
        <img src="v0.4/assets/Daedalus/preferences_general_performance.png" alt="preferences general performance" style="height: 45vh; max-height: 400px;"/>

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
          <p>Airfoil designer module allows user to design, modify and export airfoils using control points and geometry tools. <br>
            Airfoils are defined as 4 splines, each for:</p>
            <ul>
              <li>Pressure Side</li>
              <li>Suction Side</li>
              <li>Leading Edge</li>
              <li>Trailing Edge</li>
            </ul>
          <p>It is belived that with such definition it would be easier to create such airfoil and ensure clean geometry to any CFD software as well as manufacturing.
            To Help with creation of airfoil, designer consists of widgets and other elements such as:</p>
            <ul>
              <li>Common Widgets</li>
              <li>Module Specific Widgets</li>
              <li>2D Viewport with grid and ruler</li>
              <li>Reference handling functions</li>
              <li>Refined geometry definition</li>
            </ul>
          <img src="v0.4/assets/AirfoilDesigner/airfoil_designer_elements.jpg" alt="Airfoil Designer Elements" style="width: stretch;"/>
        </div>`
  },
  {
    group: "Airfoil Designer",
    id: "airfoil-geometry",
    title: "Airfoils geometry",
    body: `<p>Daealus first and foremost goal is to help to create detailed, high quality, parametric airfoils with preserved continutity between the establishing curves.</p>

    <p>Each airfoil is defined by set of <i><b>parameters</b></i> and <i><b>attributes</b></i>. 
    For each of four establishing splines they generate a set of points which are used as anchors and poles for the created splines. This way a curve for:</p>
    <ul>
      <li>Pressure Side</li>
      <li>Suction Side</li>
      <li>Leading Edge</li>
      <li>Trailing Edge</li>
    </ul>
    <p>is created with a possibility to preserve G1 or G2 continuity between the splines.</p>

    <h2>Operations on Airfoils</h2>
    <p>Airfoil Designer module is equipped with certain set of functions to manage the airfoils.</p>

    <h3>Editing the shape</h3>
    <p>This is the most important operation avaiable to be performed in the Airfoil Designer.
    It relies on three widgets. First is the <a href="#manual/airfoil-widgets/ADAirfoilTree">Airfoil Tree</a> which requires user to select specific airfoil (or airfoil's element) from the Tree.
    Selecting the airfoil triggers:</p>
    <ul>
      <li><a href="#manual/airfoil-widgets/ADParameterTable">the Parameter Table</a><span> where parameters creating an airfoil can be adjusted using buttons. 
      Use arrow up <button>⯅</button> to increase value and arrow down <button>⯆</button> to decrease value of parameter in the specified row. 
      It is possible to change the increasement/decreasement value by holding keyboard keys while clicking on Left Mouse Button. Allowed modifiers are:</span>
      <ul>
        <li><strong>LMB:</strong> +/- 0.1</li>
        <li><strong>LMB+Shift:</strong> +/- 1.0</li>
        <li><strong>LMB+Ctrl:</strong> +/- 0.01</li>
      </ul></li>
      <li><a href="#manual/airfoil-widgets/ADStatisticsTable">the Statistics Table</a><span> where appropriate statistics can be controlled.</span></li>
      <li><a href="#manual/airfoil-widgets/ADViewport">2D Viewport</a><span> where an airfoil is displayed and it's shape and placement can be checked.</span></li>
    </ul>

    <h3>Create New</h3>
    <p>A new airfoil with a unique name and default set of parameters is created.</p>

    <h3>Duplicate</h3>
    <p>Select an Airfoil in <a href="#manual/airfoil-widgets/ADAirfoilTree">Airfoil Tree</a>. A new airfoil with unique name is created with parameters from the selected airfoil.</p>

    <h3>Save Airfoil</h3>
    <p>It is possible to save a single airfoil instead of the whole Daedalus Project. First select an airfoil in <a href="#manual/airfoil-widgets/ADAirfoilTree">Airfoil Tree</a>. 
    Call for <i>Save Airfoil</i> function. A dialog will open asking for the name and location of the selected Airfoil. Press <i>Save</i> to save the airfoil. 
    The airfoil will also be renamed according to specified name. It is possible to rename airfoil beforehand to ommit specifying the name in dialog.</p>

    <h3>Append Airfoil</h3>
    <p>Any airfoil saved in '.arf' (Daedalus airfoil format of v0.3) and/or '.arf.ddls' (Daedalus airfoil format of v0.4) can be imported to Daedalus project.
    Call for <i>Append Airfoil</i> function opens a dialog where an airfoil from an exisitng file can be appended into the project. An airfoil can than be freely edited or used in other modules right away.</p>
    <div class="note">
        <div class="inside">
          <h3>NOTE</h3>
          If an airfoil is imported from an older version of Daedalus projects a shape of an airfoil can be changed due to changes in definition of airfoil creation. A check is advised.
        </div>
      </div>

    <h3>Delete</h3>
    <p>If an airfoil is no longer required in the project it can be deleted from the program.
    First select an airfoil in <a href="#manual/airfoil-widgets/ADAirfoilTree">Airfoil Tree</a>. Call for <i>Delete Airfoil</i> function.
    A warning will appear to confirm that deletion is intentional. Accepting deletion removes an airfoil from a Project.</p>
    <div class="note">
      <div class="inside">
        <h3>NOTE</h3>
        Daedalus program doesn't have the UNDO button yet. Really double check whether you want to remove objects from your program.
      </div>
    </div>

    <h3>Flip Airfoil Horizontally</h3>
    <p>Since a lot of airfoil in the online database are aircraft aerodynamic profiles they feature a shape with a positive camber. This design allows to generate a Lift in the programs Coordinate System.
    For the cases where a downforce producing airfoil is required an airfoil can be created to match the reference airfoil from database and than by calling the <i>Flip Airfoil Horizontally</i> an airfoil will switch chamber angle.
    </p>
    <p>This airfoil changes the LE, TE angles and wedge angles. It also swaps the position of Pressure and Suction side to follow their function in the flow.</p>
    
    <h3>Export Airfoil</h3>
    <h3>Rename Airfoil</h3>
    <h3>Fit to Reference</h3>

    <h2>Attributes</h2>
    <p><i>Attributes do not hold any numerical value but rather a specific setting, key-word, or they point to specific object.</i></p>
    <p>An airfoil object itself does not have an attributes but the individual splines do have <b>1 attribute</b>:</p>
    <table style="width: stretch;">
      <caption>List of attributes</caption>
      <thead>
        <tr>
          <th>Attribute</th>
          <th>Allowed Values</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Type</td>
          <td>G1, G2</td>
          <td>Specify the continuity between the connecting spline. It increases number of poles creating the spline.</td>
        </tr>
      </tbody>
    </table>

    <h2>Parameters</h2>
    <p><i>Parameters store the numerical values (intigers or float).</i></p>
    <p>An airfoil object itself does not have an attributes but the individual splines do have <b>1 attribute</b>:</p>
    <table style="width: stretch;">
      <caption style="font-style: italic; text-align: left;">List of airfoil parameters</caption>
      <thead>
        <tr>
          <th>Parameter</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>origin X</td>
          <td></td>
        </tr>
        <tr>
          <td>origin Y</td>
          <td></td>
        </tr>
        <tr>
          <td>stretch</td>
          <td></td>
        </tr>
        <tr>
          <td>incline</td>
          <td></td>
        </tr>
        <tr>
          <td>LE thickness</td>
          <td></td>
        </tr>
        <tr>
          <td>LE angle</td>
          <td></td>
        </tr>
        <tr>
          <td>TE thickness</td>
          <td></td>
        </tr>
        <tr>
          <td>TE angle</td>
          <td></td>
        </tr>
      </tbody>
    </table>

    <p>An airfoil object itself does not have an attributes but the individual splines do have <b>1 attribute</b>:</p>
    <table style="width: stretch;">
      <caption style="font-style: italic; text-align: left;">List of detailed curve parameters</caption>
      <thead>
        <tr>
          <th>Parameter</th>
          <th>LE/TE subscript</th>
          <th>PS/SS subscript</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>wedge</td>
          <td>ps/ss</td>
          <td>fwd/rwd</td>
          <td></td>
        </tr>
        <tr>
          <td>ps/ss tan</td>
          <td>ps/ss</td>
          <td>fwd/rwd</td>
          <td></td>
        </tr>
        <tr>
          <td>ps/ss slope</td>
          <td>ps/ss</td>
          <td>fwd/rwd</td>
          <td></td>
        </tr>
        <tr>
          <td>ps/ss curv</td>
          <td>ps/ss</td>
          <td>fwd/rwd</td>
          <td></td>
        </tr>
      </tbody>
    </table>

    <h2>Statistics</h2>
    <p><i>Statistics store the numerical values (intigers or float).</i></p>
    <p>An airfoil object has been equipped with <b>5 statistics</b> that can be follow through the airfoil creation.</p>
    <table style="width: stretch;">
      <caption style="font-style: italic; text-align: left;">List of statistics</caption>
      <thead>
        <tr>
          <th>Statistic</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Chord</td>
          <td></td>
        </tr>
        <tr>
          <td>Position LE X</td>
          <td></td>
        </tr>
        <tr>
          <td>Position LE Y</td>
          <td></td>
        </tr>
        <tr>
          <td>Position TE X</td>
          <td></td>
        </tr>
        <tr>
          <td>Position TE Y</td>
          <td></td>
        </tr>
      </tbody>
    </table>

    <h2>Changelog</h2>
    <details>
      <summary><b>New Airfoil definition</b></summary>
      <p>
        Several changes were made in the Airfoil Designer including a new airfoil definition. New airfoil definition divides the airfoil's parameters into:<br>
          - <b>main paramters</b> - which allow to specify thickness, legnth and angles<br>
          - <b>curvature parameters</b> - which refine the airfoil and control the shape of the curves
      </p>
    </details>

    <details>
      <summary><b>Airfoils</b></summary>
      <p>
        There are several operations to be performed on airfoil in v0.4 which can be:<br>
        - Select via: <b>Airfoil Tree Widget</b><br>
        - Modified via: <b>Edit menu</b>, <b>Parameter Table Widget</b>, <b>Tool Bar Widget</b><br>
        - Analyzed via: <b>Statistics Table</b>
      </p>
    </details>

    <details>
      <summary><b>Available changes</b></summary>
      <p>New functions:</p>
      <ul>
        <li><b>Duplicate</b> selected airfoil</li>
        <li><b>Fit to Reference</b> shows a widgets where interatively an airfoil can be matched with a reference</li>
      </ul>
      <p>Removed functions:</p>
      <ul>
        <li><b>Airfoil description</b> option was removed and replaced with <b>Project description</b></li>
      </ul>
    </details>`
  },
  {
    group: "Airfoil Designer",
    id: "airfoil-references",
    title: "References",
    body: `
      <!-- Airfoil Designer Section -->
      <div id="airfoil" class="page-section">
        <div id="ADoverview">
          <p>Airfoil designer module allows user to design, modify and export airfoils using control points and geometry tools. <br>
            Airfoils are defined as 4 splines, each for:</p>
            <ul>
              <li>Pressure Side</li>
              <li>Suction Side</li>
              <li>Leading Edge</li>
              <li>Trailing Edge</li>
            </ul>
          <p>It is belived that with such definition it would be easier to create such airfoil and ensure clean geometry to any CFD software as well as manufacturing.
            To Help with creation of airfoil, designer consists of widgets and other elements such as:</p>
            <ul>
              <li>Common Widgets</li>
              <li>Module Specific Widgets</li>
              <li>2D Viewport with grid and ruler</li>
              <li>Reference handling functions</li>
              <li>Refined geometry definition</li>
            </ul>
          <img src="v0.4/assets/AirfoilDesigner/airfoil_designer_elements.jpg" alt="Airfoil Designer Elements" style="height: 60vw; max-height: 400px;"/>
        </div>`
  },
  {
    group: "Airfoil Designer",
    id: "airfoil-widgets",
    title: "Widgets overview",
    body: `
      <!-- Airfoil Designer Section -->
      <p></p>

      <h2 id="ADMenuBar">Menu Bar overview</h2>

      <h3>File menu</h3>
      <p>See the <a href="#manual/program-overview/FileMenu">File menu details</a></p>
          
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
          <li><b>Fit2Reference:</b> Fit the airfoil to a reference (beta feature).</li>
      </ul>

      <h3 id="ADReferenceMenu">Reference menu</h3>
      <p>Allows user to interact with Airfoil Designer. Contains basic functinality required to create, recreate, modify, reload airfoils</p>
      <ul>
          <li><b>Create:</b> Add a new airfoil to your project.</li>
          <li><b>Append:</b> Import an airfoil from a file.</li>
          <li><b>Delete:</b> Remove the selected airfoil.</li>
          <li><b>Save:</b> Save the selected airfoil to a file.</li>
          <li><b>Export:</b> Export the airfoil as a DXF file.</li>
          <li><b>Flip Airfoil:</b> Flip the selected airfoil horizontally.</li>
          <li><b>Rename:</b> Change the name of the selected airfoil.</li>
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

      <h3>Program menu</h3>
      See the <a href="#manual/program-overview/ProgramMenu">Program menu details</a>.

        
      <h2 id="ADViewport">Viewport overview</h2>
      <p>Airfoil Designer is equiped with OpenGL 2D viewport. To navigate in viewport drag around holding Left Mouse Button (LMB), use mouse wheel to zoom in and out.</p>
      <ul>
          <li><b>Grid:</b> displays a net to visualize a dimensions and help to navigate</li>
          <li><b>Ruler:</b> shows a dimensions that grid represents, at the same time show a project unit</li>
          <li><b>Control points:</b> visualize a point which defines a spline, each color represents different spline CP</li>
          <li><b>Construction:</b> show a connection between control points</li>
          <li><b>Wireframe:</b> show a spline shape created from control points</li>
        </ul>
      <img src="v0.4/assets/AirfoilDesigner/AD_Viewport.jpg" alt="Airfoil Designer Elements" style="height: 45vh; max-height: 400px;"/>
        
      <h2 id="ADArfTree">Airfoil Tree overview</h2>
      <p>Airfoil tree widget display all the airfoils in current project. To perform some operations (e.g. delete an airfoil, fit2reference or flip) it is neccessary to select one airfoil in the widget. 
      <br><strong>It is possible to have several airfoils under the same name</strong>
      </p>
      <ul>
          <li><b>Name:</b> show a airfoil name for representation</li>
          <li><b>Last modification:</b> shows a last modification date</li>
          <li><b>Creation Date:</b> shows a date of airfoil creation</li>
          <li><b>Description:</b> show a description atttached to airfoil</li>
        </ul>
      <img src="v0.4/assets/AirfoilDesigner/AD_Storage.png" alt="Airfoil Designer Elements" style="height: 45vh; max-height: 400px;"/>
        

      <h2 id="ADParamTab">Parameter Table overview</h2>

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
      <img src="v0.4/assets/AirfoilDesigner/AD_ParamTable.png" alt="Airfoil Designer Elements" style="height: 45vh; max-height: 400px;"/><br>`
  },
  {
    group: "Airfoil Designer",
    id: "airfoil-fit2ref",
    title: "Fit to references",
    body: `
      <p>
      This guide explains how to use <b>Fit Airfoil to Reference</b> function in the Airfoil Designer to make a Daedalus parametric airfoil follow a reference imported from <b>XY-point cloud</b>.
      </p>

      <h2>Before you start</h2>
      <ol>
        <li>Open or create a project and select the airfoil you want to modify in the Airfoil Designer tree. The fit starts from this airfoil's current shape.</li>
        <li>Prepare your reference. The algorythm currently accepts '.txt', and '.dat' files. Coordinate files should contain one ordered airfoil contour with finite X/Y coordinates.</li>
        <li>If you want to modify the reference airfoil before fitting use <a href="#manual/airfoil-widgets/ADReferenceMenu">Airfoil Designer Reference Widgets</a>.
        If the reference already meets your expectaition you can load it directly in the Fit to Reference widget.</li>
      </ol>

      <div class="note">
        <div class="inside">
          <h3>NOTE</h3>
          Keep in mind that the fit is geometric: it matches contours, not lift, drag, stability, or other aerodynamic properties.
        </div>
      </div>

      <h2>Workflow</h2>
      <ol>
        <li>Open <b>Fit to Reference</b> for the selected airfoil.</li>
        <li>Choose a project reference from <b>Reference airfoil</b>, or select <b>Add reference…</b> to load a file. Check that the preview displays the intended reference and its four colored regions.</li>
        <li>Review the four <b>LE / TE definitions</b>. They are percentages of chord, measured from 0% at the leading edge to 100% at the trailing edge. 
        The LE positions define where the leading-edge cap joins the pressure and suction surfaces; the TE positions define the corresponding trailing-edge joins.
        Move the divisions if they cut across an important shape feature or leave a region empty. The preview updates automatically.</li>
        <li>In <b>Parameter specification</b>, check the parameters that should be allowed to change. Start with only the parameters relevant to the mismatch. Leave unrelated parameters unchecked.</li>
        <li>Optionally enter a minimum and/or maximum for each selected parameter. Values use the units shown in the table. Leave a field blank when you do not need an additional limit. 
        To keep a parameter fixed, uncheck it; if it must remain selected, set equal minimum and maximum values.</li>
        <li>Keep the automatic safeguards in mind: tangent and curvature lengths must stay positive, and spline slopes are restricted to ±60°. User limits must be compatible with these safe ranges</li>
        <li>Set <b>Maximum optimizer evaluations</b>. The default is a practical starting budget, not a required number of iterations or a guarantee of convergence.</li>
        <li>Select <b>Proceed</b>. The preview, residual plot, parameter values, and region-distance table update while fitting. Use <b>Cancel</b> to abandon the run.</li>
        <li>When fitting finishes, inspect the overlaid contours and the LE, TE, PS, and SS minimum, maximum, and average distances. 
        Review the residual plot for persistent regional errors and the preview connectors for local departures.</li>
        <li>If the result is not satisfactory, close or cancel without accepting it, adjust the divisions, parameter selection, or bounds, and try again. 
        If the residual pattern suggests a different local solution, start from a different plausible airfoil shape.</li>
        <li>Select <b>Done</b> to accept a successful fit. Only the selected airfoil parameters are applied to the original airfoil; cancelling or a failed run does not apply a partial fit.</li>
      </ol>

      <p>Parameter selections, bounds, reference choice, and divisions are remembered as fitting preferences on this computer. 
      Review them when fitting a different airfoil; limits that were useful for one shape may be unsuitable for another.</p>

      <h2>Best practices</h2>
      <ul>
        <li>Begin with the fewest parameters that can explain the visible mismatch. 
        For example, correct overall placement or chord/thickness and angles before freeing multiple spline-curvature handles. 
        Then address the specific LE, pressure-side, or suction-side region that remains discrepant.</li>
        <li>Add parameter families in stages. A smaller parameter set is easier to interpret and lets the evaluation budget focus on fewer coupled variables.</li>
        <li>Use bounds to encode design knowledge and prevent implausible changes. Tighten them around a known feasible range rather than opening very wide ranges in the hope that the optimizer will find a good shape.</li>
        <li>Keep trailing-edge tangent and curvature bounds especially deliberate.
        The fit gives TE contour samples less influence than the other regions, but explicitly anchors the TE endpoints. 
        This reduces chasing isolated noisy tip points; it does not make an unsuitable TE division or unrealistic TE shape acceptable.</li>
        <li>Treat the preview and per-region errors as complementary evidence. A low average can conceal a localized error, so inspect maximum distance and the connector plot as well.</li>
        <li>Increase the evaluation limit only after checking divisions and narrowing the parameter set. More evaluations cannot fix a malformed reference, incompatible geometry, or an unsuitable set of bounds.</li>
        <li>Save a copy of an important starting airfoil before accepting a fit if you want a convenient way to compare alternatives.</li>
      </ul>

      <h2>Understanding the results</h2>

      <p>The results table gives minimum, maximum, and average contour distances for each of the four regions in the reference's coordinate units. 
      The residual plot uses distances normalized by reference chord, making its scales more comparable between differently sized airfoils. 
      These values are geometric distances, not anyhow connected to aerodynamic performance.</p>

      <p>The checklist's average-distance target is a visual aid, not a certification that the shape is suitable for a particular application. 
      The optimizer is bounded and local: it returns the best feasible candidate it evaluated for the selected starting airfoil, divisions, parameters, and bounds. 
      It does not guarantee a global best fit or aerodynamic equivalence.</p>

      <p>Despite many attempt's to calibrate the fitting algorythm after the fitting manual adjustment may still be required. 
      It is therefore recommended to treat the fitting as a guide for good match with original airfoil that still needs manual refinement. 
      With increased database of airfoil to adjust the fitting factors future version should be able to fine-tune the process.</p>

      <h2>Troubleshooting</h2>
      <table style="width: stretch;">
        <thead>
          <tr>
            <th>Symptom</th>
            <th>What to check</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>No usable surfaces or preview</td>
            <td>Check that the coordinate file contains enough finite X/Y points in a single ordered contour. Confirm that the LE and TE divisions are valid.</td>
          </tr>
          <tr>
            <td>Zero chord or empty region</td>
            <td>Check that the reference has nonzero chord and that each LE division is ahead of its corresponding TE division.</td>
          </tr>
          <tr>
            <td>A bound is rejected</td>
            <td>Use finite numeric values in the displayed units. Ensure minimum is no greater than maximum and that the limits allow the automatic slope or positive-length safeguards.</td>
          </tr>
          <tr>
            <td>Fit cannot find a valid shape</td>
            <td>Restore a plausible starting shape, fit fewer parameters, and tighten bounds that permit extreme coupled changes. Self-intersecting candidate contours are rejected.</td>
          </tr>
          <tr>
            <td>Fit finishes with visible residuals</td>
            <td>Inspect which region remains high, verify its divisions, and enable or free only the parameter family that can affect it. Try another plausible starting shape if the fit appears trapped.</td>
          </tr>
          <tr>
            <td>TE maximum remains high</td>
            <td>Inspect the TE division and tip coordinates. A sharp or noisy tip may not be representable by a smooth parametric edge; avoid fitting isolated coordinate noise.</td>
          </tr>
          <tr>
            <td>Fit stops before the shape is satisfactory</td>
            <td>Check whether the evaluation limit was reached. First review the selected parameters and bounds; then increase the limit if a useful search is still underway.</td>
          </tr>
        </tbody>
      </table>

      <p>For implementation details, calibration examples, tests, weighting, and the optimizer's exact objective, the relevant code doumentation will be created.</p>`
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
          <img src="v0.4/assets/WingDesigner/wing_workbench.jpg" alt="Wing Workbench" style="height: 60vw; max-height: 400px;"/>
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
          <img src="v0.4/assets/WingDesigner/WD_Viewport.jpg" alt="Wing Designer Elements" style="height: 45vh; max-height: 400px;"/>
        </div>
        
        <div id="WDStorage">
          <h2>Wing Storage overview</h2>
          <p>Wing storage widget display all the elements in current project. To perform some operations (e.g. delete a segment) it is neccessary to select one element in the widget. 
          </p>
          <ul>
              <li><b>Name:</b> show an element name for representation</li>
            </ul>
          <img src="v0.4/assets/WingDesigner/WD_Storage.jpg" alt="Wing Designer Storage" style="height: 37vh; max-height: 400px;"/>
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
          <img src="v0.4/assets/WingDesigner/WD_ParamTable.jpg" alt="Wing Designer Parameter Table" style="height: 45vh; max-height: 400px;"/><br>

        </div>
      </div>`
  },
];
