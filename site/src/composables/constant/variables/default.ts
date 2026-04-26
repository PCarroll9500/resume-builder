import { PREVIEW_SELECTOR } from "./render";
import type { ResumeStyles } from "../../stores/style";

export const DEFAULT_STYLES = {
  marginV: 50,
  marginH: 45,
  lineHeight: 1.3,
  paragraphSpace: 5,
  headingSpaceBelow: 5,
  themeColor: "#377bb5",
  fontCJK: {
    name: "华康宋体",
    fontFamily: "HKST"
  },
  fontEN: {
    name: "Minion Pro"
  },
  fontSize: 15,
  paper: "A4"
} as ResumeStyles;

export const DEFAULT_MD_CONTENT = `---
name: Patrick Carroll
header:
  - text: <span class="iconify" data-icon="tabler:phone"></span> (843) 437-6951
    newLine: true
  - text: <span class="iconify" data-icon="tabler:mail"></span> PatrickCarroll.IT@outlook.com
    link: mailto:PatrickCarroll.IT@outlook.com
  - text: <span class="iconify" data-icon="tabler:brand-github"></span> PCarroll9500
    link: https://github.com/PCarroll9500
  - text: <span class="iconify" data-icon="tabler:map-pin"></span> Beavercreek, Ohio
  - text: <span class="iconify" data-icon="tabler:shield-lock"></span> Clearance: Top-Secret SCI
    newLine: true
---

<!-- Important: Replace all template content, especially contact details, with your own information. -->

<!-- Important: When updating your email address, remember to change both the "text" (visible text) and the "link" (underlying hyperlink) fields. -->

10+ years of technical experience in programming, automation, and signal analysis. Reliable, motivated, and seeking opportunities supporting the DoD.


## Experience

**Junior Model and Simulation Engineer**
  ~ Radiance Technologies, Beavercreek, Ohio
  ~ Aug 2024 – Present

- Integrate Simulink models into AFSIM plugins in C++.
- Introduce new models into pipeline automation via MATLAB scripting. Automate testing of verification and validation data.
- Maintain version control via SVN.
- Collaborate in a Kanban Agile team environment.


**Information Systems Technician**
  ~ United States Navy Reserve, Cincinnati, Ohio
  ~ Apr 2019 – Feb 2025

- Support the Navy part time. Trained in Cisco Routers, Switches, End Devices, IPv4 and IPv6 addressing, network protocols, and troubleshooting.
- Qualified in Enlisted Information Warfare.


**System Software Support Engineer**
  ~ MBS Professional, Mason, Ohio
  ~ Jan 2024 – Aug 2024

- Developed and streamlined Windows 10/11 PC deployment via imaging, Windows PE, and batch scripting.
- Created an AI-driven Text-to-Speech add-in for automating PowerPoint training.
- Created documentation to set parameters and update the SQL Server database per customer configurations.


**IT Systems Administration Assistant**
  ~ Texas A&M Corpus Christi, Corpus Christi, Texas
  ~ Aug 2019 – Dec 2021

- Handled 700+ tickets dealing with the administration of User Accounts, E-mail, Listserv, Security Groups, Distribution Groups, Shared Mailboxes, File Systems, HPC and Active Directory.


**Submarine Electronics Technician**
  ~ United States Navy, Norfolk, Virginia
  ~ Apr 2014 – Apr 2019

- Played a key role in signal analysis and navigation, significantly improving safety of ship and tactical awareness.
- Led teams of 2-3 in the maintenance and repair of critical systems.
- Qualified in Submarine Electronic Warfare Support System, Maintenance, Tag-Out, Electronic Key Management Systems User (KMI) with 100% accountability, Qualified in Enlisted Submarine Warfare.


## Education

**Texas A&M–Corpus Christi**
  ~ Corpus Christi, Texas

B.S. in Computer Science, Focus: Systems Programming
  ~ Dec 2023 (GPA 3.65)


## Projects

**Document AI Organization & Scanner**

Document classification, renaming, meta-tagging, and organization using AI. Utilized Microsoft Azure AI Intelligence, OpenAI, Python, Java, and JavaScript.

**Comparing LLM Context Similarity**

Tested the similarities and accuracy of different OpenAI models with Jupyter Notebooks.

**Battlezone Remake**

A recreation of the 1980s tank simulator done in C/C++ OpenGL, recreated with the iconic Green Vector 3D graphics, particle effects and collision detection.


## Certifications

**CompTIA Security+**

**Cisco CCNA1**


## Skills

**Languages:** C, C#, C++, Java, Python, HTML/CSS/JavaScript, SQL, VBA, PowerShell, Batch, Bash

**Tools & Platforms:** AFSIM, Simulink, MATLAB, Azure AI, OpenAI, Jupyter Notebooks, Active Directory, Windows PE, SVN, Git

**Networking:** Cisco Routers/Switches, IPv4/IPv6, Network Protocols & Troubleshooting
`;

export const DEFAULT_CSS_CONTENT = `/* Backbone CSS for Resume Template 1 */

/* Basic */

${PREVIEW_SELECTOR} [data-scope="vue-smart-pages"][data-part="page"] {
  background-color: white;
  color: black;
  text-align: justify;
  -moz-hyphens: auto;
  -ms-hyphens: auto;
  -webkit-hyphens: auto;
  hyphens: auto;
}

${PREVIEW_SELECTOR} p,
${PREVIEW_SELECTOR} li,
${PREVIEW_SELECTOR} dl {
  margin: 0;
}

/* Headings */

${PREVIEW_SELECTOR} h1,
${PREVIEW_SELECTOR} h2,
${PREVIEW_SELECTOR} h3 {
  font-weight: bold;
}

${PREVIEW_SELECTOR} h1 {
  font-size: 2.13em;
}

${PREVIEW_SELECTOR} h2,
${PREVIEW_SELECTOR} h3 {
  margin-bottom: 5px;
  font-size: 1.2em;
}

${PREVIEW_SELECTOR} h2 {
  border-bottom-style: solid;
  border-bottom-width: 1px;
}

/* Lists */

${PREVIEW_SELECTOR} ul,
${PREVIEW_SELECTOR} ol {
  padding-left: 1.5em;
  margin: 0.2em 0;
}

${PREVIEW_SELECTOR} ul {
  list-style-type: circle;
}

${PREVIEW_SELECTOR} ol {
  list-style-type: decimal;
}

/* Definition Lists */

${PREVIEW_SELECTOR} dl {
  display: flex;
}

${PREVIEW_SELECTOR} dl dt,
${PREVIEW_SELECTOR} dl dd:not(:last-child) {
  flex: 1;
}

/* Tex */

${PREVIEW_SELECTOR} :not(span.katex-display) > span.katex {
  font-size: 1em !important;
}

/* SVG & Images */

${PREVIEW_SELECTOR} svg.iconify {
  vertical-align: -0.2em;
}

${PREVIEW_SELECTOR} img {
  max-width: 100%;
}

/* Header */

${PREVIEW_SELECTOR} .resume-header {
  text-align: center;
}

${PREVIEW_SELECTOR} .resume-header h1 {
  text-align: center;
  line-height: 1;
  margin-bottom: 8px;
}

${PREVIEW_SELECTOR} .resume-header-item:not(.no-separator)::after {
  content: " | ";
}

/* Citations */

${PREVIEW_SELECTOR} [data-scope="cross-ref"][data-part="definitions"] {
  padding-left: 1.2em;
}

${PREVIEW_SELECTOR} [data-scope="cross-ref"][data-part="definition"] p {
  margin-left: 0.5em;
}

${PREVIEW_SELECTOR} [data-scope="cross-ref"][data-part="definition"]::marker {
  content: attr(data-label);
}

${PREVIEW_SELECTOR} [data-scope="cross-ref"][data-part="reference"] {
  font-size: 100%;
  top: 0;
}

/* Dark & print mode */
/* You might want to comment out the following lines if you change the background or text color. */

.dark ${PREVIEW_SELECTOR} [data-scope="vue-smart-pages"][data-part="page"] {
  background-color: hsl(213, 12%, 15%);
  color: hsl(216, 12%, 84%);
}

@media print {
  .dark ${PREVIEW_SELECTOR} [data-scope="vue-smart-pages"][data-part="page"] {
    background-color: white;
    color: black;
  }
}
`;
