function doGet() {

  var html = `
<!DOCTYPE html>
<html>
<head>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Engineer Career Navigator | Chirag Prajapati</title>

<style>

*{
  box-sizing:border-box;
  margin:0;
  padding:0;
  font-family:Arial,sans-serif;
}

body{
  background:#f4f7fb;
  color:#172033;
  line-height:1.6;
}

header{
  background:linear-gradient(135deg,#172554,#2563eb);
  color:white;
  padding:55px 20px;
  text-align:center;
}

header h1{
  font-size:38px;
  margin-bottom:10px;
}

header p{
  font-size:18px;
}

.creator{
  margin-top:15px;
  font-size:16px;
  color:#dbeafe;
}

.container{
  width:92%;
  max-width:1200px;
  margin:30px auto;
}

.card{
  background:white;
  border-radius:18px;
  padding:28px;
  margin-bottom:25px;
  box-shadow:0 8px 25px rgba(0,0,0,.08);
}

h2{
  color:#172554;
  margin-bottom:20px;
}

label.main-label{
  display:block;
  font-weight:bold;
  margin:18px 0 8px;
}

select{
  width:100%;
  padding:14px;
  border:1px solid #d1d5db;
  border-radius:9px;
  font-size:16px;
  background:white;
}

.interests{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(180px,1fr));
  gap:12px;
  margin:15px 0 25px;
}

.interest{
  padding:14px;
  background:#f8fafc;
  border:1px solid #dbe2ea;
  border-radius:10px;
  cursor:pointer;
}

.interest:hover{
  background:#eff6ff;
}

.interest input{
  margin-right:8px;
}

button{
  width:100%;
  border:none;
  border-radius:10px;
  padding:16px;
  background:#2563eb;
  color:white;
  font-size:17px;
  font-weight:bold;
  cursor:pointer;
}

button:hover{
  background:#1d4ed8;
}

#results{
  display:none;
}

.result-summary{
  background:#eff6ff;
  border-left:5px solid #2563eb;
  padding:18px;
  border-radius:10px;
  margin-bottom:22px;
}

.career-grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(310px,1fr));
  gap:20px;
}

.career{
  border:1px solid #e5e7eb;
  border-radius:16px;
  padding:22px;
  background:#fff;
}

.career:hover{
  box-shadow:0 8px 25px rgba(0,0,0,.10);
  transform:translateY(-2px);
  transition:.2s;
}

.career h3{
  color:#1d4ed8;
  font-size:21px;
  margin-bottom:10px;
}

.description{
  margin-bottom:15px;
}

.info{
  margin-top:13px;
  padding:12px;
  border-radius:9px;
  background:#f8fafc;
}

.info strong{
  color:#172554;
}

.badges{
  display:flex;
  flex-wrap:wrap;
  gap:7px;
  margin-top:14px;
}

.badge{
  padding:6px 10px;
  border-radius:20px;
  font-size:13px;
  font-weight:bold;
  background:#e0f2fe;
  color:#075985;
}

.match{
  display:inline-block;
  margin-top:15px;
  padding:8px 12px;
  border-radius:20px;
  background:#dcfce7;
  color:#166534;
  font-weight:bold;
}

.future{
  margin-top:15px;
  padding:14px;
  background:#fff7ed;
  border-left:4px solid #f97316;
  border-radius:8px;
}

.ai{
  margin-top:15px;
  padding:14px;
  background:#f5f3ff;
  border-left:4px solid #7c3aed;
  border-radius:8px;
}

.ai h4{
  color:#6d28d9;
  margin-bottom:6px;
}

.details{
  margin-top:15px;
  padding:15px;
  background:#f8fafc;
  border-radius:10px;
}

.roadmap{
  display:grid;
  gap:12px;
}

.step{
  padding:16px;
  background:#eff6ff;
  border-left:5px solid #2563eb;
  border-radius:8px;
}

.warning{
  background:#fefce8;
  border-left:5px solid #eab308;
  padding:16px;
  border-radius:8px;
  margin-top:20px;
}

.creatorBox{
  text-align:center;
  padding:25px;
  background:#172554;
  color:white;
  border-radius:15px;
  margin-top:25px;
}

footer{
  margin-top:40px;
  background:#111827;
  color:white;
  padding:35px;
  text-align:center;
}

.small{
  font-size:13px;
  color:#94a3b8;
  margin-top:8px;
}

@media(max-width:600px){

  header h1{
    font-size:28px;
  }

  .container{
    width:95%;
  }

  .card{
    padding:20px;
  }

  .career-grid{
    grid-template-columns:1fr;
  }

}

</style>

</head>

<body>

<header>

<h1>🚀 Engineer Career Navigator</h1>

<p>Discover the best career options for your engineering branch.</p>

<div class="creator">
Created by <strong>Chirag Prajapati</strong> ❤️
</div>

</header>


<div class="container">


<div class="card">

<h2>🎓 Find Your Engineering Career</h2>

<label class="main-label">
Engineering Branch
</label>

<select id="branch">

<option value="">Select your branch</option>

<option>Computer Science & Engineering</option>
<option>Information Technology</option>
<option>Artificial Intelligence & Data Science</option>
<option>Electronics & Communication Engineering</option>
<option>Electrical Engineering</option>
<option>Mechanical Engineering</option>
<option>Civil Engineering</option>
<option>Chemical Engineering</option>
<option>Aerospace Engineering</option>
<option>Industrial Engineering</option>
<option>Biotechnology</option>
<option>Mining Engineering</option>
<option>Petroleum Engineering</option>
<option>Agricultural Engineering</option>
<option>Production Engineering</option>
<option>Metallurgy & Materials Engineering</option>
<option>Marine Engineering</option>
<option>Biomedical Engineering</option>
<option>Environmental Engineering</option>
<option>Mechatronics Engineering</option>
<option>Instrumentation & Control Engineering</option>

</select>


<label class="main-label">
❤️ What are you interested in?
</label>

<div class="interests">

<label class="interest">
<input type="checkbox" value="Coding">
💻 Coding
</label>

<label class="interest">
<input type="checkbox" value="AI">
🤖 AI / Machine Learning
</label>

<label class="interest">
<input type="checkbox" value="Cybersecurity">
🔐 Cybersecurity
</label>

<label class="interest">
<input type="checkbox" value="Electronics">
⚡ Electronics
</label>

<label class="interest">
<input type="checkbox" value="Design">
🎨 Design
</label>

<label class="interest">
<input type="checkbox" value="Machines">
⚙️ Machines
</label>

<label class="interest">
<input type="checkbox" value="Research">
🔬 Research
</label>

<label class="interest">
<input type="checkbox" value="Management">
📊 Management
</label>

<label class="interest">
<input type="checkbox" value="Construction">
🏗️ Construction
</label>

<label class="interest">
<input type="checkbox" value="Automobile">
🚗 Automobile
</label>

<label class="interest">
<input type="checkbox" value="Mathematics">
📐 Mathematics
</label>

<label class="interest">
<input type="checkbox" value="Data">
📊 Data
</label>

<label class="interest">
<input type="checkbox" value="Robotics">
🦾 Robotics
</label>

<label class="interest">
<input type="checkbox" value="Energy">
🔋 Energy
</label>

<label class="interest">
<input type="checkbox" value="Environment">
🌱 Environment
</label>

</div>


<label class="main-label">
Preferred Career Route
</label>

<select id="goal">

<option value="Private">💼 Private Job</option>
<option value="Government">🏛️ Government Job</option>
<option value="Higher Studies">🎓 Higher Studies</option>
<option value="Research">🔬 Research</option>
<option value="Startup">🚀 Startup</option>

</select>


<button onclick="findCareer()">
🔎 Analyze My Career Options
</button>

</div>


<div class="card" id="results">

<h2>🎯 Your Career Analysis</h2>

<div id="summary" class="result-summary"></div>

<div id="careerList" class="career-grid"></div>

</div>


<div class="card" id="roadmapSection" style="display:none">

<h2>🗺️ Engineering Career Roadmap</h2>

<div class="roadmap">

<div class="step">
<strong>1️⃣ Understand Yourself</strong><br>
Identify your interests, strengths and preferred type of work.
</div>

<div class="step">
<strong>2️⃣ Build Engineering Fundamentals</strong><br>
Master the important subjects of your engineering branch.
</div>

<div class="step">
<strong>3️⃣ Select a Career</strong><br>
Choose a specialization according to your interests.
</div>

<div class="step">
<strong>4️⃣ Learn Required Skills</strong><br>
Learn programming, software, simulation tools, laboratory skills or other technologies required by your career.
</div>

<div class="step">
<strong>5️⃣ Build Real Projects</strong><br>
Projects demonstrate that you can apply your knowledge.
</div>

<div class="step">
<strong>6️⃣ Gain Experience</strong><br>
Try internships, competitions, research projects and practical work.
</div>

<div class="step">
<strong>7️⃣ Learn AI</strong><br>
Use AI as a learning and productivity tool while keeping strong fundamentals.
</div>

<div class="step">
<strong>8️⃣ Build Your Career</strong><br>
Choose jobs, higher studies, research, government careers or entrepreneurship.
</div>

</div>

<div class="warning">

<strong>⚠️ Important:</strong>

AI impact and career-match scores shown here are educational estimates.
They are not guarantees of future employment.

AI is more likely to transform many engineering jobs than completely eliminate every profession.

</div>

</div>


<div class="creatorBox">

<h2 style="color:white;">
🚀 Engineer Career Navigator
</h2>

<p>
Created & Developed by
<strong>Chirag Prajapati</strong>
</p>

<p class="small">
Helping engineering students discover career possibilities.
</p>

</div>


</div>


<footer>

<h3>Engineer Career Navigator 🚀</h3>

<p>Choose skills, not just a job title.</p>

<p class="small">
Created by Chirag Prajapati | Educational Career Guidance
</p>

</footer>


<script>


var careerData = {


"Computer Science & Engineering":[

{
name:"Software Engineer",
icon:"💻",
description:"Design, develop and maintain software applications and systems.",
skills:"Programming, DSA, OOP, DBMS, OS, Computer Networks",
tools:"C/C++, Java, Python, JavaScript, Git, SQL, Linux",
projects:"Build a full-stack application, REST API or software system.",
route:"Private Job / Startup / Higher Studies",
scope:"Very High",
aiImpact:"High transformation",
automation:"Medium-High",
aiCanDo:"Boilerplate code, basic testing, documentation and code suggestions.",
humanValue:"Architecture, complex debugging, security, system design and engineering decisions.",
future:"Software development is moving toward AI-assisted engineering.",
roadmap:"Programming → DSA → CS Fundamentals → Development → Projects → Internship → Interview",
higher:"M.Tech/MS CS, Software Engineering, AI, Distributed Systems",
interests:["Coding","Mathematics","AI"],
routes:["Private","Startup","Higher Studies"]
},

{
name:"AI / Machine Learning Engineer",
icon:"🤖",
description:"Build intelligent systems using machine learning and artificial intelligence.",
skills:"Python, Linear Algebra, Probability, Statistics, ML, Deep Learning",
tools:"Python, NumPy, Pandas, Scikit-learn, PyTorch, TensorFlow",
projects:"Recommendation system, computer vision system or NLP project.",
route:"Private / Research / Startup / Higher Studies",
scope:"Very High",
aiImpact:"AI is the core technology",
automation:"Medium",
aiCanDo:"Code generation, experimentation and standard modelling.",
humanValue:"Problem formulation, evaluation, research and responsible AI.",
future:"AI is creating new engineering opportunities while automating repetitive tasks.",
roadmap:"Python → Mathematics → Statistics → ML → Deep Learning → LLMs → MLOps",
higher:"M.Tech/MS AI, ML, Data Science, Robotics",
interests:["AI","Coding","Mathematics","Research"],
routes:["Private","Startup","Research","Higher Studies"]
},

{
name:"Cybersecurity Engineer",
icon:"🔐",
description:"Protect computers, networks, applications and data from security threats.",
skills:"Networking, Linux, OS, Cryptography, Web Security",
tools:"Linux, Wireshark, Burp Suite, Python, SIEM",
projects:"Secure web application, network monitoring or security lab.",
route:"Private / Government / Defence / Research",
scope:"Very High",
aiImpact:"Medium transformation",
automation:"Medium",
aiCanDo:"Log analysis, anomaly detection and vulnerability prioritization.",
humanValue:"Threat modelling, incident response and security architecture.",
future:"AI will become both a security tool and a source of new security challenges.",
roadmap:"Networking → Linux → Security → Web Security → Cryptography → Projects",
higher:"M.Tech/MS Cybersecurity, Information Security",
interests:["Cybersecurity","Coding","Research"],
routes:["Private","Government","Research","Higher Studies"]
}

],


"Information Technology":[

{
name:"Full Stack Developer",
icon:"🌐",
description:"Build complete web applications using frontend, backend and databases.",
skills:"HTML, CSS, JavaScript, React, APIs, Databases",
tools:"VS Code, Git, React, Node.js, SQL",
projects:"Build and deploy a complete web application.",
route:"Private / Startup / Freelancing",
scope:"High",
aiImpact:"High transformation",
automation:"Medium-High",
aiCanDo:"Generate components, APIs and boilerplate code.",
humanValue:"Architecture, product thinking, debugging and security.",
future:"Developers who understand systems and use AI effectively can remain highly valuable.",
roadmap:"HTML/CSS → JavaScript → React → Backend → Database → Git → Cloud",
higher:"M.Tech/MS CS, IT, Software Engineering",
interests:["Coding","Design","AI"],
routes:["Private","Startup","Higher Studies"]
}

],


"Artificial Intelligence & Data Science":[

{
name:"AI Engineer",
icon:"🤖",
description:"Develop AI-powered applications and intelligent systems.",
skills:"Python, Mathematics, ML, Deep Learning, NLP, Computer Vision",
tools:"Python, PyTorch, TensorFlow, Hugging Face",
projects:"AI assistant, recommendation engine or computer vision system.",
route:"Private / Startup / Research",
scope:"Very High",
aiImpact:"AI is the core technology",
automation:"Medium",
aiCanDo:"Assist programming, experiments and model development.",
humanValue:"Problem definition, evaluation, architecture and domain knowledge.",
future:"AI engineering is rapidly expanding across almost every industry.",
roadmap:"Python → Mathematics → ML → Deep Learning → LLMs → AI Applications → MLOps",
higher:"MS/M.Tech AI, ML, Data Science",
interests:["AI","Coding","Mathematics","Research"],
routes:["Private","Startup","Research","Higher Studies"]
},

{
name:"Data Scientist",
icon:"📊",
description:"Use statistics, programming and machine learning to extract useful insights from data.",
skills:"Statistics, Python, SQL, Machine Learning, Data Visualization",
tools:"Python, Pandas, SQL, Jupyter, Power BI",
projects:"Predictive model, recommendation system or analytics project.",
route:"Private / Research",
scope:"High",
aiImpact:"High transformation",
automation:"Medium-High",
aiCanDo:"Data cleaning, visualization and standard modelling.",
humanValue:"Problem formulation, experimentation and decision-making.",
future:"AI will automate routine analysis while increasing demand for deeper analytical skills.",
roadmap:"Statistics → Python → SQL → Data Analysis → ML → Domain Knowledge",
higher:"MS/M.Tech Data Science, Statistics, AI",
interests:["AI","Data","Mathematics","Research"],
routes:["Private","Research","Higher Studies"]
}

],


"Electronics & Communication Engineering":[

{
name:"VLSI Design Engineer",
icon:"🔬",
description:"Design and verify digital and semiconductor systems.",
skills:"Digital Electronics, Computer Architecture, Verilog, CMOS",
tools:"Verilog, SystemVerilog, FPGA, EDA tools",
projects:"Processor component, UART/SPI module or FPGA project.",
route:"Semiconductor / Research",
scope:"Very High",
aiImpact:"Medium transformation",
automation:"Medium",
aiCanDo:"Assist HDL generation and verification.",
humanValue:"Architecture, verification and hardware decisions.",
future:"Semiconductors remain strategically important for AI, electronics and computing.",
roadmap:"Digital Electronics → Computer Architecture → Verilog → FPGA → VLSI",
higher:"M.Tech/MS VLSI, Microelectronics",
interests:["Electronics","Research","Coding"],
routes:["Private","Research","Higher Studies"]
},

{
name:"Embedded Systems Engineer",
icon:"⚙️",
description:"Develop software and firmware that interact directly with hardware.",
skills:"C/C++, Microcontrollers, Embedded Linux, RTOS",
tools:"STM32, Arduino, ESP32, ARM, FreeRTOS",
projects:"Smart sensor, motor controller or IoT device.",
route:"Automotive / IoT / Electronics",
scope:"High",
aiImpact:"Low-Medium transformation",
automation:"Low-Medium",
aiCanDo:"Firmware templates and debugging suggestions.",
humanValue:"Hardware-software integration and real-time engineering.",
future:"Embedded systems remain important because AI needs physical computing devices.",
roadmap:"C → Microcontrollers → Electronics → RTOS → Embedded Linux → Projects",
higher:"M.Tech/MS Embedded Systems, Robotics",
interests:["Electronics","Coding","Machines"],
routes:["Private","Research","Higher Studies"]
}

],


"Electrical Engineering":[

{
name:"Power Systems Engineer",
icon:"⚡",
description:"Design and operate electrical generation, transmission and distribution systems.",
skills:"Power Systems, Electrical Machines, Protection, Power Electronics",
tools:"MATLAB, Simulink, ETAP, PSCAD",
projects:"Power flow analysis or renewable integration model.",
route:"Utilities / Government / Energy",
scope:"High",
aiImpact:"Low-Medium transformation",
automation:"Low-Medium",
aiCanDo:"Monitoring, forecasting and optimization.",
humanValue:"Grid planning, safety and infrastructure decisions.",
future:"Renewable energy, smart grids and electrification create new opportunities.",
roadmap:"Electrical Fundamentals → Machines → Power Systems → Protection → Renewable Energy",
higher:"M.Tech/MS Power Systems, Energy",
interests:["Energy","Machines","Mathematics"],
routes:["Private","Government","Research","Higher Studies"]
},

{
name:"EV Engineer",
icon:"🚗",
description:"Work on electric vehicles, motors, batteries and charging systems.",
skills:"Electrical Machines, Power Electronics, Batteries, Control",
tools:"MATLAB/Simulink, CAN tools, simulation software",
projects:"EV motor simulation, BMS prototype or charging controller.",
route:"Automotive / Energy / EV",
scope:"Very High",
aiImpact:"Low-Medium transformation",
automation:"Low-Medium",
aiCanDo:"Simulation, diagnostics and optimization.",
humanValue:"Vehicle integration, hardware validation and safety.",
future:"Vehicle electrification is creating interdisciplinary opportunities.",
roadmap:"Electrical → Machines → Power Electronics → Batteries → Control → EV Systems",
higher:"M.Tech/MS EV, Power Electronics",
interests:["Automobile","Electrical","Electronics"],
routes:["Private","Startup","Research","Higher Studies"]
}

],


"Mechanical Engineering":[

{
name:"Mechanical Design Engineer",
icon:"⚙️",
description:"Design mechanical components, machines and products.",
skills:"Mechanics, Machine Design, CAD, Materials, Manufacturing",
tools:"SolidWorks, CATIA, AutoCAD, Creo",
projects:"Gearbox, robotic mechanism or machine assembly.",
route:"Manufacturing / Product Design",
scope:"High",
aiImpact:"Medium transformation",
automation:"Medium",
aiCanDo:"Generate design alternatives and optimization suggestions.",
humanValue:"Safety, manufacturability and physical validation.",
future:"AI-assisted design will make engineers faster while physical engineering remains important.",
roadmap:"Mechanics → Machine Design → CAD → Manufacturing → Simulation → Prototyping",
higher:"M.Tech/MS Mechanical Design, Robotics",
interests:["Machines","Design"],
routes:["Private","Research","Higher Studies"]
},

{
name:"Robotics Engineer",
icon:"🦾",
description:"Develop robots using mechanical, electrical and software engineering.",
skills:"Mechanics, Electronics, Control, Programming, Robotics",
tools:"Python, C++, ROS/ROS2, MATLAB, CAD",
projects:"Robotic arm, mobile robot or autonomous navigation system.",
route:"Robotics / Automation / AI",
scope:"Very High",
aiImpact:"AI-augmented",
automation:"Low-Medium",
aiCanDo:"Path planning, perception and coding assistance.",
humanValue:"Robot integration, safety and physical engineering.",
future:"Robotics combines AI with physical engineering and is a major interdisciplinary field.",
roadmap:"Mechanics → Electronics → Programming → Control → ROS → Computer Vision → Project",
higher:"M.Tech/MS Robotics, Mechatronics, AI",
interests:["Robotics","AI","Machines","Coding"],
routes:["Private","Startup","Research","Higher Studies"]
}

],


"Civil Engineering":[

{
name:"Structural Engineer",
icon:"🏗️",
description:"Design safe structures such as buildings and bridges.",
skills:"Structural Analysis, RCC, Steel Design, Mechanics",
tools:"STAAD.Pro, ETABS, AutoCAD, Revit",
projects:"Structural model, RCC design or BIM project.",
route:"Construction / Consulting / Government",
scope:"High",
aiImpact:"Medium transformation",
automation:"Low-Medium",
aiCanDo:"Optimization, calculations and drafting assistance.",
humanValue:"Safety, site conditions and engineering responsibility.",
future:"AI and BIM improve productivity while safety remains a major human responsibility.",
roadmap:"Mechanics → Structural Analysis → RCC/Steel → CAD/BIM → Projects → Internship",
higher:"M.Tech Structural Engineering",
interests:["Construction","Design","Mathematics"],
routes:["Private","Government","Research","Higher Studies"]
}

],


"Chemical Engineering":[

{
name:"Process Engineer",
icon:"🧪",
description:"Design and optimize industrial chemical processes.",
skills:"Thermodynamics, Fluid Mechanics, Heat Transfer, Mass Transfer",
tools:"Aspen Plus, MATLAB, Process Simulation",
projects:"Process simulation or heat exchanger design.",
route:"Chemical / Energy / Manufacturing",
scope:"High",
aiImpact:"Medium transformation",
automation:"Low-Medium",
aiCanDo:"Process optimization and predictive analysis.",
humanValue:"Plant safety and process engineering decisions.",
future:"Digital process optimization and cleaner technologies are reshaping chemical engineering.",
roadmap:"Thermodynamics → Fluid Mechanics → Heat Transfer → Mass Transfer → Process Control",
higher:"M.Tech/MS Chemical Engineering",
interests:["Research","Machines","Mathematics"],
routes:["Private","Research","Higher Studies"]
}

],


"Aerospace Engineering":[

{
name:"Aerospace Design Engineer",
icon:"✈️",
description:"Design aircraft, spacecraft and aerospace components.",
skills:"Aerodynamics, Fluid Mechanics, Propulsion, Structures",
tools:"CATIA, ANSYS, MATLAB, CFD",
projects:"Airfoil simulation, UAV design or propulsion analysis.",
route:"Aerospace / Defence / Space",
scope:"High",
aiImpact:"Medium transformation",
automation:"Low-Medium",
aiCanDo:"Simulation optimization and design exploration.",
humanValue:"Safety-critical engineering and physical testing.",
future:"Drones, autonomous systems and space technology create new opportunities.",
roadmap:"Mechanics → Fluid Mechanics → Aerodynamics → Propulsion → CFD → Project",
higher:"M.Tech/MS Aerospace, Propulsion",
interests:["Design","Research","Mathematics"],
routes:["Private","Government","Research","Higher Studies"]
}

],


"Industrial Engineering":[

{
name:"Industrial Engineer",
icon:"🏭",
description:"Improve productivity, quality, cost and efficiency of industrial systems.",
skills:"Operations Research, Optimization, Statistics, Manufacturing",
tools:"Excel, Python, MATLAB, Simulation",
projects:"Production optimization or scheduling model.",
route:"Manufacturing / Operations / Consulting",
scope:"High",
aiImpact:"Medium-High transformation",
automation:"Medium-High",
aiCanDo:"Scheduling, forecasting and optimization.",
humanValue:"Process understanding and implementation.",
future:"Smart factories require engineers who understand automation and data.",
roadmap:"Statistics → Operations Research → Optimization → Manufacturing → Data Analytics",
higher:"M.Tech/MS Industrial Engineering",
interests:["Management","Mathematics","Data"],
routes:["Private","Research","Higher Studies"]
}

],


"Biotechnology":[

{
name:"Biotechnology Researcher",
icon:"🧬",
description:"Apply engineering and biological sciences to medicine, agriculture and industry.",
skills:"Molecular Biology, Genetics, Biochemistry, Research",
tools:"Laboratory techniques, Bioinformatics tools",
projects:"Biological data analysis or research project.",
route:"Research / Pharma / Biotech",
scope:"High",
aiImpact:"AI-augmented",
automation:"Medium",
aiCanDo:"Data analysis and pattern discovery.",
humanValue:"Experimental design and biological interpretation.",
future:"AI is accelerating genomics, drug discovery and biological research.",
roadmap:"Biology → Genetics → Biochemistry → Laboratory → Research → Bioinformatics",
higher:"M.Tech/MS Biotechnology, Bioinformatics, PhD",
interests:["Research","AI"],
routes:["Research","Higher Studies","Private"]
}

],


"Mining Engineering":[

{
name:"Mining Engineer",
icon:"⛏️",
description:"Plan and manage safe and efficient extraction of minerals.",
skills:"Mining Methods, Geology, Mine Safety, Surveying",
tools:"Mine Planning, CAD, GIS",
projects:"Mine planning or safety analysis.",
route:"Mining / Government / Natural Resources",
scope:"Medium-High",
aiImpact:"Medium transformation",
automation:"Medium",
aiCanDo:"Planning, monitoring and predictive maintenance.",
humanValue:"Field engineering and safety decisions.",
future:"Autonomous mining equipment will change skills but engineering responsibility remains.",
roadmap:"Mining → Geology → Mine Planning → Safety → Automation → Field Experience",
higher:"M.Tech Mining Engineering",
interests:["Machines","Research"],
routes:["Private","Government","Higher Studies"]
}

],


"Petroleum Engineering":[

{
name:"Petroleum Engineer",
icon:"🛢️",
description:"Work on exploration, drilling, reservoirs and production.",
skills:"Fluid Mechanics, Reservoir Engineering, Drilling, Geology",
tools:"Reservoir Simulation, Petroleum Software",
projects:"Reservoir simulation or production optimization.",
route:"Energy / Oil & Gas / Research",
scope:"Medium-High",
aiImpact:"Medium transformation",
automation:"Medium",
aiCanDo:"Prediction, optimization and data analysis.",
humanValue:"Field decisions, physical understanding and safety.",
future:"The energy transition is changing the sector and broader energy skills are increasingly useful.",
roadmap:"Fluid Mechanics → Reservoir → Drilling → Production → Simulation → Energy Skills",
higher:"M.Tech/MS Petroleum, Energy Engineering",
interests:["Energy","Research","Machines"],
routes:["Private","Government","Research","Higher Studies"]
}

],


"Agricultural Engineering":[

{
name:"Agricultural Engineer",
icon:"🌾",
description:"Apply engineering to agriculture, irrigation, machinery and smart farming.",
skills:"Mechanics, Irrigation, Farm Machinery, Sensors",
tools:"CAD, GIS, Sensors, Data Tools",
projects:"Smart irrigation or agricultural machine project.",
route:"Agriculture / Government / AgriTech",
scope:"High",
aiImpact:"AI-augmented",
automation:"Medium",
aiCanDo:"Crop prediction, monitoring and optimization.",
humanValue:"Field conditions and agricultural system design.",
future:"Precision agriculture, drones, sensors and AI are creating new opportunities.",
roadmap:"Agriculture → Machinery → Irrigation → Sensors → IoT → Data/AI",
higher:"M.Tech Agricultural Engineering, AgriTech",
interests:["Agriculture","Machines","AI"],
routes:["Private","Government","Startup","Research"]
}

],


"Production Engineering":[

{
name:"Production Engineer",
icon:"🏭",
description:"Plan and optimize manufacturing processes and production systems.",
skills:"Manufacturing, Production Planning, Quality, Materials",
tools:"CAD, ERP, Excel, Manufacturing Simulation",
projects:"Production optimization or quality improvement.",
route:"Manufacturing / Operations",
scope:"High",
aiImpact:"Medium-High transformation",
automation:"Medium-High",
aiCanDo:"Scheduling, monitoring and forecasting.",
humanValue:"Process improvement and factory decisions.",
future:"Smart factories need engineers who understand automation and data.",
roadmap:"Manufacturing → Quality → Production Planning → Automation → Data Analytics",
higher:"M.Tech Production, Manufacturing, Industrial Engineering",
interests:["Machines","Management","Manufacturing"],
routes:["Private","Higher Studies","Research"]
}

],


"Metallurgy & Materials Engineering":[

{
name:"Materials Engineer",
icon:"🔩",
description:"Develop and select materials for engineering applications.",
skills:"Materials Science, Metallurgy, Failure Analysis",
tools:"Materials Testing, Simulation",
projects:"Material characterization or failure analysis.",
route:"Automotive / Aerospace / Manufacturing / Research",
scope:"High",
aiImpact:"AI-augmented",
automation:"Low-Medium",
aiCanDo:"Materials discovery and data analysis.",
humanValue:"Testing and physical materials understanding.",
future:"Advanced materials, batteries and semiconductor materials create new opportunities.",
roadmap:"Materials → Metallurgy → Testing → Characterization → Advanced Materials",
higher:"M.Tech/MS Materials Science, Metallurgy",
interests:["Materials","Research","Design"],
routes:["Private","Research","Higher Studies"]
}

],


"Marine Engineering":[

{
name:"Marine Engineer",
icon:"🚢",
description:"Operate and maintain marine propulsion and machinery systems.",
skills:"Thermodynamics, Fluid Mechanics, Marine Machinery",
tools:"Marine Simulation and Engineering Tools",
projects:"Marine propulsion or energy efficiency project.",
route:"Shipping / Maritime",
scope:"Medium-High",
aiImpact:"Low-Medium transformation",
automation:"Low-Medium",
aiCanDo:"Monitoring and predictive maintenance.",
humanValue:"Safety-critical decisions and machinery operation.",
future:"Automation may reduce routine work while increasing systems expertise.",
roadmap:"Mechanical → Marine Machinery → Safety → Ship Systems → Practical Training",
higher:"M.Tech Marine Engineering, Naval Architecture",
interests:["Machines"],
routes:["Private","Government","Higher Studies"]
}

],


"Biomedical Engineering":[

{
name:"Biomedical Engineer",
icon:"🏥",
description:"Develop engineering solutions for medical devices and healthcare technology.",
skills:"Electronics, Biology, Medical Instrumentation, Signal Processing",
tools:"MATLAB, Python, Electronics Prototyping",
projects:"Medical sensor, ECG analysis or assistive device.",
route:"Healthcare / Medical Devices / Research",
scope:"High",
aiImpact:"AI-augmented",
automation:"Medium",
aiCanDo:"Medical data analysis and pattern recognition.",
humanValue:"Device design, safety and clinical context.",
future:"Healthcare AI and medical devices are creating interdisciplinary roles.",
roadmap:"Electronics → Biology → Instrumentation → Signal Processing → AI → Project",
higher:"M.Tech/MS Biomedical, Bioengineering",
interests:["Biology","Electronics","AI","Research"],
routes:["Private","Research","Higher Studies"]
}

],


"Environmental Engineering":[

{
name:"Environmental Engineer",
icon:"🌍",
description:"Develop engineering solutions for pollution, water, waste and sustainability.",
skills:"Water Treatment, Waste Management, Environmental Chemistry",
tools:"GIS, Environmental Modelling, Data Analysis",
projects:"Water treatment or environmental monitoring project.",
route:"Government / Consulting / Sustainability",
scope:"High",
aiImpact:"AI-augmented",
automation:"Low-Medium",
aiCanDo:"Monitoring, forecasting and data analysis.",
humanValue:"Engineering design, regulation and field implementation.",
future:"Climate, water and sustainability challenges create long-term engineering needs.",
roadmap:"Environmental Science → Water → Waste → Treatment → GIS/Data → Sustainability",
higher:"M.Tech Environmental Engineering, Sustainability",
interests:["Environment","Research"],
routes:["Private","Government","Research","Higher Studies"]
}

],


"Mechatronics Engineering":[

{
name:"Automation Engineer",
icon:"🤖",
description:"Develop automated manufacturing and industrial systems.",
skills:"PLC, Control Systems, Electronics, Mechanical Systems",
tools:"PLC, MATLAB, CAD, Automation Tools",
projects:"Automated conveyor, robotic arm or PLC project.",
route:"Manufacturing / Robotics / Automation",
scope:"Very High",
aiImpact:"AI-augmented",
automation:"Low-Medium",
aiCanDo:"Optimization and predictive maintenance.",
humanValue:"System integration, safety and physical implementation.",
future:"Automation creates demand for engineers who can design and maintain automated systems.",
roadmap:"Mechanical → Electronics → Control → PLC → Robotics → Automation",
higher:"M.Tech/MS Mechatronics, Robotics",
interests:["Machines","Electronics","Robotics","Coding"],
routes:["Private","Research","Startup","Higher Studies"]
}

],


"Instrumentation & Control Engineering":[

{
name:"Control Systems Engineer",
icon:"🎛️",
description:"Design systems that automatically control industrial processes.",
skills:"Control Systems, Signals, Electronics, Mathematics",
tools:"MATLAB/Simulink, PLC, Industrial Control Tools",
projects:"PID controller, motor control or automation project.",
route:"Automation / Manufacturing / Energy",
scope:"High",
aiImpact:"AI-augmented",
automation:"Low-Medium",
aiCanDo:"Optimization and predictive control assistance.",
humanValue:"Control architecture, safety and physical system understanding.",
future:"AI and traditional control systems are increasingly combined in robotics and industry.",
roadmap:"Signals → Control → Electronics → PLC → Automation → Robotics",
higher:"M.Tech/MS Control, Automation, Robotics",
interests:["Electronics","Machines","Mathematics","Robotics"],
routes:["Private","Research","Higher Studies"]
}

]

};


function findCareer(){

  var branch=document.getElementById("branch").value;
  var goal=document.getElementById("goal").value;

  if(branch===""){
    alert("Please select your engineering branch.");
    return;
  }

  var selected=[];

  var checks=document.querySelectorAll(".interest input:checked");

  for(var i=0;i<checks.length;i++){
    selected.push(checks[i].value);
  }

  var careers=careerData[branch] || [];

  var results=[];

  for(var i=0;i<careers.length;i++){

    var career=careers[i];

    var score=70;

    for(var j=0;j<selected.length;j++){

      if(career.interests.indexOf(selected[j])!==-1){
        score+=6;
      }

    }

    for(var r=0;r<career.routes.length;r++){

      if(career.routes[r]===goal){
        score+=8;
        break;
      }

    }

    if(score>99){
      score=99;
    }

    results.push({
      career:career,
      score:score
    });

  }

  results.sort(function(a,b){
    return b.score-a.score;
  });


  var summary=document.getElementById("summary");

  summary.innerHTML=
  "<strong>🎓 Branch:</strong> "+branch+
  "<br><strong>🎯 Preferred route:</strong> "+goal+
  "<br><strong>🚀 Career options found:</strong> "+results.length+
  "<br><br>⭐ Your match score is a guidance score based on your selected interests and career route.";


  var list=document.getElementById("careerList");

  list.innerHTML="";


  for(var i=0;i<results.length;i++){

    var c=results[i].career;
    var score=results[i].score;

    var card="";

    card+="<div class='career'>";

    card+="<h3>"+c.icon+" "+c.name+"</h3>";

    card+="<p class='description'>"+c.description+"</p>";

    card+="<span class='match'>⭐ "+score+"% Match</span>";


    card+="<div class='badges'>";

    card+="<span class='badge'>Scope: "+c.scope+"</span>";

    card+="<span class='badge'>AI: "+c.aiImpact+"</span>";

    card+="<span class='badge'>Automation: "+c.automation+"</span>";

    card+="</div>";


    card+="<div class='info'>";

    card+="<strong>🧠 Required Skills</strong>";

    card+="<p>"+c.skills+"</p>";

    card+="</div>";


    card+="<div class='info'>";

    card+="<strong>🛠️ Tools & Technologies</strong>";

    card+="<p>"+c.tools+"</p>";

    card+="</div>";


    card+="<div class='info'>";

    card+="<strong>🎓 Career Route</strong>";

    card+="<p>"+c.route+"</p>";

    card+="</div>";


    card+="<div class='ai'>";

    card+="<h4>🤖 What AI may automate</h4>";

    card+="<p>"+c.aiCanDo+"</p>";

    card+="<br>";

    card+="<h4>🧠 Human Skills Still Important</h4>";

    card+="<p>"+c.humanValue+"</p>";

    card+="</div>";


    card+="<div class='future'>";

    card+="<strong>🔮 Future of this Career</strong>";

    card+="<p>"+c.future+"</p>";

    card+="</div>";


    card+="<div class='details'>";

    card+="<strong>🛠️ Project Suggestion</strong>";

    card+="<p>"+c.projects+"</p>";

    card+="<br>";

    card+="<strong>🗺️ Career Roadmap</strong>";

    card+="<p>"+c.roadmap+"</p>";

    card+="<br>";

    card+="<strong>🎓 Higher Studies</strong>";

    card+="<p>"+c.higher+"</p>";

    card+="</div>";


    card+="</div>";


    list.innerHTML+=card;

  }


  document.getElementById("results").style.display="block";

  document.getElementById("roadmapSection").style.display="block";

  document.getElementById("results").scrollIntoView({
    behavior:"smooth"
  });

}

</script>

</body>

</html>
`;

  return HtmlService
    .createHtmlOutput(html)
    .setTitle("Engineer Career Navigator | Chirag Prajapati")
    .setXFrameOptionsMode(
      HtmlService.XFrameOptionsMode.ALLOWALL
    );

}
