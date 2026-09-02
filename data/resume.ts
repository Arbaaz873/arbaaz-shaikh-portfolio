export const profile = {
  name: "Arbaaz Shaikh",
  role: "Senior Cybersecurity Engineer",
  tagline:
    "I cut Critical/High vulnerability exposure 76% faster, across 30,000+ enterprise assets.",
  location: "Pune, Maharashtra, India",
  email: "arbaazshaikh554@gmail.com",
  phone: "+91 82081 19244",
  linkedin: "linkedin.com/in/arbaaz-shaikh-512569138",
  linkedinUrl: "https://www.linkedin.com/in/arbaaz-shaikh-512569138",
  summary:
    "Cybersecurity engineer with 5+ years focused on vulnerability management and 8+ years in enterprise IT. I run the full lifecycle — scanning, prioritization, remediation SLAs, and audit evidence — across Qualys VMDR, CrowdStrike Falcon EDR, and AWS/Azure. Vendor-side experience at Qualys supporting Google, Apple, IBM, and Deloitte informs how I tune detection and cut false positives on the operator side. CEH v13 AI certified; currently pursuing CISSP.",
  status: "Open to Senior / Lead Vulnerability Management & Cloud Security roles",
};

export const scanSummary = [
  { label: "Critical/High remediation time", value: "76%", detail: "faster — 30 days to 7" },
  { label: "Hybrid assets under management", value: "30,000+", detail: "on-prem, AWS, Azure" },
  { label: "Reporting effort", value: "40%", detail: "reduced via API automation" },
  { label: "Patch compliance", value: "+25%", detail: "cross-departmental improvement" },
  { label: "Audit non-conformities", value: "0", detail: "ISO 27001 · SOC 2 · GDPR" },
];

export type Severity = "critical" | "high" | "medium" | "resolved";

export interface Engagement {
  id: string;
  severity: Severity;
  title: string;
  window: string;
  context: string;
  actions: string[];
  outcome: string;
  stack: string[];
}

export const engagements: Engagement[] = [
  {
    id: "VM-2024-01",
    severity: "critical",
    title: "Rebuilding the enterprise remediation pipeline",
    window: "BHS Corrugated · 2024–Present",
    context:
      "Critical and High findings were sitting open for close to a month across a 30,000-asset hybrid estate, with no consistent SLA enforcement between the scanning team and the IT groups who owned the fix.",
    actions: [
      "Re-scoped Qualys VMDR scan windows and asset groups to cut noise and false-positive re-triage",
      "Wrote PowerShell + Qualys REST API tooling to auto-generate SLA-tagged remediation tickets and stakeholder reports",
      "Embedded vulnerability gates into Golden Image builds with the DevOps team, stopping known-bad images at the source",
    ],
    outcome:
      "Critical/High mean time to remediate dropped from 30 days to 7 (76%), and patch compliance improved 25% across departments that previously worked off ad-hoc spreadsheets.",
    stack: ["Qualys VMDR", "PowerShell", "REST API", "CrowdStrike Falcon", "AWS/Azure"],
  },
  {
    id: "IR-2024-07",
    severity: "high",
    title: "Zero-day response: Log4j & HTTP/2 Rapid Reset",
    window: "BHS Corrugated · War-room incident response",
    context:
      "Two separate zero-day disclosures required identifying every exposed asset across a hybrid estate within hours of public disclosure, before automated scan coverage caught up.",
    actions: [
      "Ran targeted Qualys and manual asset queries to fingerprint exposure ahead of vendor signature updates",
      "Coordinated a cross-functional war room spanning IT, network, and application teams",
      "Applied compensating controls to assets that could not be patched inside the response window",
    ],
    outcome:
      "Affected assets identified, isolated, and remediated inside a 48-hour SLA on both incidents, with zero confirmed exploitation.",
    stack: ["Qualys VMDR", "Wireshark", "Nmap", "Incident coordination"],
  },
  {
    id: "GRC-2024-03",
    severity: "medium",
    title: "Turning EOL systems into an audit non-issue",
    window: "BHS Corrugated · ISO 27001 / SOC 2 / GDPR",
    context:
      "A set of end-of-life systems couldn't be patched on the standard SLA, which meant every audit cycle became a manual, high-stress justification exercise.",
    actions: [
      "Built a formal Risk Acceptance framework with documented compensating controls for EOL assets",
      "Acted as primary technical SME across ISO 27001, SOC 2, and GDPR audit cycles",
      "Standardized evidence packages so recurring audits stopped requiring a fresh scramble",
    ],
    outcome:
      "Zero non-conformities across all three frameworks, and audit prep time dropped from a team scramble to a scheduled review.",
    stack: ["ISO 27001", "SOC 2", "GDPR", "Risk Acceptance"],
  },
  {
    id: "INT-2023-11",
    severity: "resolved",
    title: "Diagnosing a silent Qualys API failure in Power Apps",
    window: "Applied integration work",
    context:
      "A custom Power Apps connector to the Qualys API was failing intermittently, with the Swagger-generated header parameters serializing requests in a way the API didn't expect.",
    actions: [
      "Traced the failure to auto-generated header parameters in the Swagger definition serializing an empty JSON object as a form-encoded body",
      "Rebuilt the connector definition to send the correct content type and payload shape",
    ],
    outcome:
      "Connector calls succeeded consistently, unblocking a reporting workflow that had been failing silently for end users.",
    stack: ["Qualys API", "Power Apps", "Swagger/OpenAPI"],
  },
];

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
}

export const experience: ExperienceItem[] = [
  {
    company: "BHS Corrugated India Pvt Ltd",
    role: "Cyber Security Analyst — Vulnerability Management",
    period: "Feb 2024 — Present",
    location: "Pune, India",
    bullets: [
      "Own the vulnerability management lifecycle across 30,000+ hybrid assets, cutting Critical/High remediation time 76% (30 → 7 days).",
      "Run Qualys Cloud Agents and CrowdStrike Falcon EDR across AWS, Azure, and on-prem for unified visibility and real-time prevention.",
      "Lead vulnerability assessments with Wireshark, Nmap, Burp Suite, and OpenVAS; translate findings into hardened firewall and zero-trust policy.",
      "Built PowerShell + REST API tooling for agent health and reporting, cutting reporting time 40% and lifting patch compliance 25%.",
      "Primary technical SME for ISO 27001, SOC 2, and GDPR audits — zero non-conformities across every cycle.",
      "Led incident response for Log4j and HTTP/2 Rapid Reset zero-days, resolving both inside 48-hour SLAs.",
    ],
  },
  {
    company: "Qualys Inc.",
    role: "Technical Engineer — Security Applications",
    period: "Feb 2022 — Jan 2024",
    location: "Pune, India",
    bullets: [
      "Deployed and supported Qualys VMDR, Patch Management, and Continuous Monitoring for Google, Apple, IBM, Deloitte, Mercedes-Benz, BMW, and Syngenta.",
      "Automated patching and reporting workflows with the Qualys API, Postman, and cURL, improving remediation accuracy for enterprise clients.",
      "Configured AWS/Azure/GCP Cloud Connectors and deployed Virtual Scanners and Gateway Services for secure cloud-to-platform integration.",
      "Managed escalated Sev1 incidents with Engineering and Product to minimize client impact and accelerate resolution.",
      "Built Splunk dashboards and used SQL to improve vulnerability detection logic and platform performance monitoring.",
    ],
  },
  {
    company: "Capita India Pvt Ltd",
    role: "Senior Executive — Finance Operations (Aviva Client)",
    period: "Aug 2019 — Feb 2022",
    location: "Pune, India",
    bullets: [
      "Managed enterprise financial systems (IBM Mainframe, Oracle GL, Oracle ARCS), using SQL to resolve data-integrity issues.",
      "Administered SAP Business Objects and Oracle Fusion Middleware, including IAM access management and cross-platform integrations.",
      "Resolved escalated infrastructure issues through enterprise ticketing (Salesforce), applying core DNS/DHCP networking principles.",
    ],
  },
  {
    company: "Concentrix Daksh Services India Pvt Ltd",
    role: "Operations Representative — Technical Support",
    period: "Sep 2018 — Jun 2019",
    location: "Pune, India",
    bullets: [
      "Diagnosed and resolved enterprise network and connectivity escalations using core DNS/DHCP/domain concepts.",
      "Used SecureLink, Bomgar, and JIRA to triage faults and accelerate resolution of critical outages.",
    ],
  },
];

export const capabilities = [
  {
    group: "Vulnerability & Endpoint",
    items: ["Qualys VMDR", "Qualys Total Cloud", "Qualys Patch Management", "CrowdStrike Falcon EDR", "OpenVAS", "SLA-driven remediation"],
  },
  {
    group: "Cloud & Infrastructure",
    items: ["AWS", "Azure", "GCP", "Infrastructure hardening", "CI/CD security gates", "Golden Image scanning"],
  },
  {
    group: "Offensive & Analysis",
    items: ["CEH v13 AI", "Burp Suite", "Nmap", "Wireshark", "Threat hunting", "Zero-day response"],
  },
  {
    group: "Automation & Data",
    items: ["Splunk", "PowerShell", "REST APIs", "Postman", "cURL", "SQL"],
  },
  {
    group: "Governance & Risk",
    items: ["ISO 27001", "SOC 2", "GDPR", "Risk acceptance frameworks", "Audit management", "Compensating controls"],
  },
];

export const certifications = [
  { name: "Certified Ethical Hacker (CEH v13 AI)", issuer: "EC-Council", year: "2025" },
  { name: "Qualys Vulnerability Management", issuer: "Qualys Inc.", year: "2022" },
  { name: "Qualys Cloud Agent", issuer: "Qualys Inc.", year: "2022" },
  { name: "Qualys Patch Management", issuer: "Qualys Inc.", year: "2022" },
];

export const education = [
  {
    school: "Poona Institute of Management Sciences and Entrepreneurship (SPPU)",
    degree: "MBA, Information Technology",
    year: "2020",
  },
  {
    school: "Poona College of Arts, Science and Commerce",
    degree: "Bachelor of Computer Application",
    year: "2018",
  },
];
