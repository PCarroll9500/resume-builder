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
---
name: Patrick Carroll
header:
  - text: |
      <span style="font-size: 1.2em; font-weight: bold;">Junior Model and Simulation Engineer</span>
  - text: <span class="iconify" data-icon="tabler:phone"></span>    843-437-6951
    newLine: true
  - text: <span class="iconify" data-icon="tabler:mail"></span> patrickcarroll.it@outlook.com
    link: patrickcarroll.it@outlook.com
  - text: <span class="iconify" data-icon="tabler:brand-github"></span> PCarroll9500
    link: https://github.com/PCarroll9500
  - text: <span class="iconify" data-icon="charm:person"></span> PCarroll9500.github.io
    link: https://pcarroll9500.github.io
---

## Security Clearence
Active Top-Secret SCI
  ~ 2014 - Present

## Education

B.S. in Computer Science (GPA 3.65)
  ~ Texas A&M-Corpus Christi
  ~ 04/2019 - 12/2023

## Summary
10+ years of experience spanning software development, RF signal analysis, and automation within department of defense. Proven track record building CI/CD pipelines, integrating simulation models, and deploying scalable solutions across government programs.

## Experience

**Junior Model and Simulation Engineer**
  ~ Radiance Technologies, Beavercreek, Ohio 
  ~ 08/2024 - Present

- Developed and maintained CI/CD pipelines to build, test, and validate Simulink models into AFSIM plugins.
- Package models and plugins to deploy across multiple government programs and agencies. 
- Partner with cross-functional engineering teams and government customers to integrate new models and features.
<div style="margin-top: 8px"></div>

**Information Systems Technician**
  ~ United States Navy Reserve, Cinncinati, Ohio
  ~ 04/2019 - 04/2025

- Support the Navy part time. Trained in Cisco Routers, Switches, 
End Devices, IPv4 and IPv6 addressing, network protocols, and 
troubleshooting. Qualified in Enlisted Information Warfare. 
<div style="margin-top: 8px"></div>

**System Software Support Engineer**
  ~ MBS Professional, Mason, Ohio
  ~ 01/2024 - 08/2024

- Developed Windows Preinstall scripts for Image Capture/Deployment.
- Developed VBA MS Powerpoint add-in for AI-driven Text-To-Speach short video presentations.
- Developed VBA macros in MS Word for SQL database interactions.
<div style="margin-top: 8px"></div>

**IT Systems Administration Assistant**
  ~ Texas A&M Corpus Christi, Corpus Christi, Texas 
  ~ 08/2019 - 12/2021

- Handled 700+ tickets dealing with the administration of User 
Accounts, E-mail, Listserv, Security Groups, Distribution Groups, 
Shared Mailboxes, File Systems, HPC and Active Directory.
<div style="margin-top: 8px"></div>

**Submarine Electronics Technician**

  ~ United States Navy, Norfolk Virginia
  ~ 04/2014 - 04/2019

- Analyzed and classified different types of RF signals.

- Led teams of 2-3 in the maintenance and repair of critical systems.

- Supported joint operations at sea.
<div style="margin-top: 8px"></div>

## Projects
**Stock Bot**, Automated day-trading engine that scans for volatile stocks, analyzes news using GPT-4o, and executes trades via the Interactive Brokers API. Built with Python, and hosted on AWS.

<div style="margin-top: 8px"></div>

**Document AI Organization & Scanner**, Document classification, renaming, meta-tagging, and organization using AI. Utilized, Microsoft Azure AI Intelligence, Open AI, Python, Java, and JavaScript.

<div style="margin-top: 8px"></div>

**Battlezone**, Recreation of the 1980s tank simulator in C/C++ OpenGL, with iconic Green Vector 3d graphics, particle effects and collision detection..

<div style="margin-top: 8px"></div>

**Comparing LLM Context Similarity**, Tested the similarities and accuracy of 
different OpenAI models with Jupyter Notebooks. 

## Skills

**Programming Languages:** <span class="iconify" data-icon="vscode-icons:file-type-cpp2"></span> C/C++,
<span class="iconify" data-icon="vscode-icons:file-type-python"></span> Python,
<span class="iconify" data-icon="vscode-icons:file-type-matlab"></span> MATLAB,
<span class="iconify" data-icon="vscode-icons:file-type-html"></span> HTML,
<span class="iconify" data-icon="vscode-icons:file-type-css"></span> CSS,
<span class="iconify" data-icon="vscode-icons:file-type-js-official"></span> JavaScript

**Tools and Frameworks:** Tortiouse SVN, GIT, Jira, Confluence, Jenkins, Groovy

## Certifications
CompTIA Security+
  ~ 06/2022 - Present

Microsoft Certified: Azure AI Fundamentals
  ~ 07/2023 - Present
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
