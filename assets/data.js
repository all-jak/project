/* Europe Work Visa Guide 2026 — all facts and figures used by the page.
   Checked 30 September 2026. Every figure has a source link in `sources`
   or next to the note that uses it. Edit here; app.js only renders. */
window.GUIDE = {
  checked: "30 September 2026",

  /* Openness scale used by the map and the ranking pills.
     Higher = easier to get a work visa. The markdown guide uses the
     inverse "difficulty 1–5" scale; the labels are the same. */
  levels: {
    "5": { label: "Easier", difficulty: "2" },
    "4": { label: "Moderate", difficulty: "3" },
    "3": { label: "Moderate–hard", difficulty: "3.5" },
    "2": { label: "Hard", difficulty: "4" },
    "1": { label: "Very hard", difficulty: "4.5–5" },
    "0": { label: "Closed or on hold", difficulty: "—" },
    "-1": { label: "Not covered", difficulty: "—" }
  },

  routes: {
    tech: "Tech job with visa sponsorship",
    remote: "Remote-work (digital nomad) visa",
    farm: "Farm, general or supervisor work",
    none: "No realistic route now"
  },

  /* x/y = position on the tile map (columns west→east, rows north→south). */
  countries: [
    { iso: "NOR", name: "Norway", x: 4, y: 0, apply: "Dhaka (VFS, via Danish Embassy)",
      you: { lvl: 1, route: "tech", text: "The skilled-worker permit needs a degree or trade certificate, and degree-level jobs must pay at least NOK 545,400 a year." },
      nonskilled: { lvl: 1, text: "No general route for non-skilled workers." },
      skilled: { lvl: 1, text: "From 1 May 2026: NOK 545,400 a year for bachelor-level jobs, NOK 624,700 for master's-level jobs." },
      link: ["UDI – skilled workers", "https://www.udi.no/en/want-to-apply/work-immigration/skilled-workers/"] },
    { iso: "SWE", name: "Sweden", x: 5, y: 0, apply: "Dhaka (Swedish Embassy)",
      you: { lvl: 3, route: "tech", text: "No degree rule. The job must pay at least 90% of the median wage: SEK 34,470 a month." },
      nonskilled: { lvl: 1, text: "Salary floor of SEK 34,470 a month rules out most non-skilled jobs." },
      skilled: { lvl: 2, text: "From 1 June 2026 the salary must be at least 90% of the median wage (SEK 34,470 a month)." },
      link: ["Migrationsverket – salary rule", "https://www.migrationsverket.se/en/employers/news-archive-for-employers/news/2026-06-16-new-median-salary-affects-the-salary-requirement-for-work-permits.html"] },
    { iso: "FIN", name: "Finland", x: 6, y: 0, apply: "Online, then ID check in New Delhi",
      you: { lvl: 2, route: "tech", text: "Employee permit from €1,600 a month, but a labour-market check applies. The specialist permit needs €3,937 a month." },
      nonskilled: { lvl: 1, text: "Mostly seasonal berry and farm work through specific recruiters." },
      skilled: { lvl: 4, text: "General minimum €1,600 a month; specialist and EU Blue Card €3,937 a month (2026)." },
      link: ["Migri – income requirement", "https://migri.fi/en/working-in-finland/income-requirement"] },
    { iso: "DNK", name: "Denmark", x: 4, y: 1, apply: "Dhaka (VFS)",
      you: { lvl: 1, route: "tech", text: "Pay Limit Scheme needs DKK 552,000 a year; the supplementary scheme DKK 446,000." },
      nonskilled: { lvl: 1, text: "No general route for non-skilled workers." },
      skilled: { lvl: 1, text: "DKK 552,000 a year, DKK 446,000 for advertised jobs, or a job on the Positive List." },
      link: ["New to Denmark – Fast-Track", "https://www.nyidanmark.dk/en-GB/You-want-to-apply/Work/Fast-track"] },
    { iso: "EST", name: "Estonia", x: 6, y: 1, apply: "Check the Estonian embassy page",
      you: { lvl: 2, route: "tech", text: "Tech hub, but a national quota of 1,292 permits. Pay must reach the average salary (€2,092 in 2025). Nomad visa needs €4,500 a month." },
      nonskilled: { lvl: 1, text: "Short-term work must pay the average salary; small national quota." },
      skilled: { lvl: 1, text: "Immigration quota 1,292 for 2026; salary at least the national average." },
      link: ["Estonian Interior Ministry – migration", "https://www.siseministeerium.ee/en/activities/efficient-population-management/migration"] },
    { iso: "IRL", name: "Ireland", x: 1, y: 2, apply: "New Delhi (by post; no biometrics)",
      you: { lvl: 3, route: "tech", text: "General Employment Permit from €36,605 a year. Experience can replace a degree. English-speaking." },
      nonskilled: { lvl: 2, text: "Permits for horticulture, meat processing and care assistants from €32,691 a year." },
      skilled: { lvl: 3, text: "From 1 March 2026: General permit €36,605; Critical Skills €40,904 with a degree, €68,911 without." },
      link: ["MRCI – 2026 thresholds", "https://www.mrci.ie/2026/03/06/new-employment-permit-salary-thresholds-from-1-march-2026/"] },
    { iso: "GBR", name: "United Kingdom", x: 2, y: 2, apply: "Dhaka (VFS)",
      you: { lvl: 1, route: "tech", text: "No personal degree needed, but developer jobs must pay the £54,700 going rate, and you need English at B2 level." },
      nonskilled: { lvl: 1, text: "Overseas recruitment of care workers closed in July 2025." },
      skilled: { lvl: 1, text: "Degree-level (RQF 6) jobs only, £41,700 or the going rate, English B2 from 8 January 2026." },
      link: ["GOV.UK – Skilled Worker visa", "https://www.gov.uk/skilled-worker-visa"] },
    { iso: "LVA", name: "Latvia", x: 6, y: 2, apply: "Check the Latvian embassy page",
      you: { lvl: 2, route: "farm", text: "In August 2026 the government proposed quotas and limits on visas for some countries." },
      nonskilled: { lvl: 2, text: "Proposed quotas and visa limits (August 2026)." },
      skilled: { lvl: 2, text: "Proposed quotas and visa limits (August 2026)." },
      link: ["Inbox.eu – proposal", "https://news.inbox.eu/150kwwc-latvia-may-sharply-limit-entry-for-foreigners-ministry-of-the-interior-proposes-introducing-quotas?language=en"] },
    { iso: "NLD", name: "Netherlands", x: 3, y: 3, apply: "Dhaka (Dutch Embassy)",
      you: { lvl: 3, route: "tech", text: "Highly skilled migrant permit has no degree rule: €4,357 a month under 30, €5,942 at 30+, with a recognised-sponsor employer. You are 29, so the lower rate applies if the IND receives the application before your 30th birthday." },
      nonskilled: { lvl: 1, text: "No general route for non-skilled workers." },
      skilled: { lvl: 2, text: "Recognised-sponsor employer and €5,942 a month (30+) or €4,357 (under 30)." },
      link: ["IND – recognised sponsors", "https://ind.nl/en/public-register-recognised-sponsors/public-register-work"] },
    { iso: "DEU", name: "Germany", x: 4, y: 3, apply: "Dhaka (German Embassy, online portal)",
      you: { lvl: 4, route: "tech", text: "EU Blue Card for IT specialists without a degree: 3 years' IT experience in the last 7 years and a job paying €45,934 a year." },
      nonskilled: { lvl: 1, text: "No general route without a qualification. Vocational training (Ausbildung) usually needs German B1." },
      skilled: { lvl: 4, text: "Opportunity Card (job-search visa), skilled-worker visa, or EU Blue Card from €50,700 (€45,934 in shortage jobs)." },
      link: ["German Embassy Dhaka – national visa", "https://dhaka.diplo.de/bd-en/service/2682868-2682868"] },
    { iso: "POL", name: "Poland", x: 5, y: 3, apply: "Dhaka (VFS), decided in New Delhi",
      you: { lvl: 4, route: "tech", text: "Big IT sector. The employer gets a work permit for you; fees and checks went up in 2026." },
      nonskilled: { lvl: 4, text: "Work permit plus D visa; higher fees and new refusal grounds in 2026." },
      skilled: { lvl: 4, text: "Employer-sponsored work permit; most steps now online." },
      link: ["Grant Thornton – 2026 changes", "https://grantthornton.pl/en/article/employment-of-foreign-nationals-in-poland-in-2026-key-changes-and-important-deadlines-in-immigration-regulations/"] },
    { iso: "LTU", name: "Lithuania", x: 6, y: 3, apply: "Check the Lithuanian embassy page",
      you: { lvl: 2, route: "tech", text: "Quota of 24,706 permits for 2026, down from 40,250 in 2024; the industry share ran out early." },
      nonskilled: { lvl: 2, text: "2026 quota 24,706; industry quota exhausted early." },
      skilled: { lvl: 2, text: "Quota applies to most employment permits." },
      link: ["LRT – quota exhausted", "https://www.lrt.lt/en/news-in-english/19/2415719/lithuanian-industry-exhausts-quota-for-hiring-third-country-nationals"] },
    { iso: "BEL", name: "Belgium", x: 2, y: 4, apply: "—",
      you: { lvl: -1, route: "none", text: "Not covered in this guide. Check the EU Immigration Portal." },
      nonskilled: { lvl: -1, text: "Not covered in this guide." },
      skilled: { lvl: -1, text: "Not covered in this guide." },
      link: ["EU Immigration Portal", "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal_en"] },
    { iso: "LUX", name: "Luxembourg", x: 3, y: 4, apply: "—",
      you: { lvl: -1, route: "none", text: "Not covered in this guide. Check the EU Immigration Portal." },
      nonskilled: { lvl: -1, text: "Not covered in this guide." },
      skilled: { lvl: -1, text: "Not covered in this guide." },
      link: ["EU Immigration Portal", "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal_en"] },
    { iso: "CZE", name: "Czech Republic", x: 4, y: 4, apply: "New Delhi (Czech Embassy)",
      you: { lvl: 1, route: "none", text: "Bangladesh is not in the Qualified Employee programme and slots at the New Delhi embassy are tiny." },
      nonskilled: { lvl: 1, text: "Seasonal quota of 60 a year, shared by five South Asian countries." },
      skilled: { lvl: 2, text: "Limited Employee Card slots through special programmes at the New Delhi embassy." },
      link: ["Czech Embassy New Delhi – quotas", "https://mzv.gov.cz/newdelhi/en/ko/visa_information/long_term_visa_long_term_residence/economic_migration_programs_and_quotas.html"] },
    { iso: "SVK", name: "Slovakia", x: 5, y: 4, apply: "New Delhi (Slovak Embassy)",
      you: { lvl: 3, route: "farm", text: "Shortage jobs in driving, warehouses and construction. Since 15 July 2026 you must stay in the job your permit names." },
      nonskilled: { lvl: 3, text: "Shortage occupations; stricter rules from 15 July 2026." },
      skilled: { lvl: 3, text: "Single permit through the employer." },
      link: ["IOM Migration Info Centre", "https://mic.iom.sk/en/work/work-permit.html"] },
    { iso: "FRA", name: "France", x: 2, y: 5, apply: "Dhaka (French Embassy)",
      you: { lvl: 1, route: "tech", text: "Talent permits need a degree or high pay (reference salary €39,582). French helps a lot." },
      nonskilled: { lvl: 1, text: "No general route for non-skilled workers." },
      skilled: { lvl: 2, text: "Talent permits and a shortage-job list exempt from the labour test until December 2026." },
      link: ["Fragomen – France changes", "https://www.fragomen.com/insights/france-changes-to-talent-permit-scheme-processing-timeframes-and-minimum-salary-levels.html"] },
    { iso: "CHE", name: "Switzerland", x: 3, y: 5, apply: "Dhaka (Swiss Embassy)",
      you: { lvl: 1, route: "none", text: "Only 8,500 permits a year for all non-EU nationals, and only for highly qualified people." },
      nonskilled: { lvl: 1, text: "No route for non-skilled workers." },
      skilled: { lvl: 1, text: "8,500 permits for all non-EU nationals in 2026." },
      link: ["Swiss Federal Council", "https://www.admin.ch/en/newnsb/7HwBjdg5HpBA"] },
    { iso: "AUT", name: "Austria", x: 4, y: 5, apply: "New Delhi (Austrian Embassy)",
      you: { lvl: 2, route: "tech", text: "Red-White-Red Card points depend on a formal qualification, so it is hard without one." },
      nonskilled: { lvl: 1, text: "No general route for non-skilled workers." },
      skilled: { lvl: 3, text: "Red-White-Red Card: 55 of 90 points for 130 shortage occupations, collective-agreement pay." },
      link: ["migration.gv.at – shortage occupations", "https://www.migration.gv.at/en/types-of-immigration/permanent-immigration/skilled-workers-in-shortage-occupations/"] },
    { iso: "HUN", name: "Hungary", x: 5, y: 5, apply: "—",
      you: { lvl: 0, route: "none", text: "Guest-worker permit closed to new applications since 6 June 2026." },
      nonskilled: { lvl: 0, text: "Guest-worker permit closed since 6 June 2026." },
      skilled: { lvl: 0, text: "Employment permits limited to a short list of countries; Bangladesh is not on it." },
      link: ["Fragomen – programme ends", "https://www.fragomen.com/insights/hungary-guest-worker-program-ends.html"] },
    { iso: "ROU", name: "Romania", x: 6, y: 5, apply: "New Delhi (Romanian Embassy)",
      you: { lvl: 5, route: "farm", text: "Farm, construction and driving jobs are on the 289-job shortage list. The employer must be authorised on WorkinRomania.gov.ro." },
      nonskilled: { lvl: 5, text: "90,000 permits for 2026; hiring only through WorkinRomania.gov.ro since August 2026." },
      skilled: { lvl: 4, text: "Same employer-sponsored permit; lower pay than Western Europe." },
      link: ["WorkinRomania.gov.ro", "https://workinromania.gov.ro"] },
    { iso: "MDA", name: "Moldova", x: 7, y: 5, apply: "—",
      you: { lvl: 0, route: "none", text: "BMET clearance for Moldova is on hold (September 2026)." },
      nonskilled: { lvl: 0, text: "BMET clearance on hold." },
      skilled: { lvl: 0, text: "BMET clearance on hold." },
      link: ["TBS – clearance on hold", "https://www.tbsnews.net/bangladesh/visas-holders-urge-bmet-resume-manpower-clearance-serbia-north-macedonia-moldova-1552981"] },
    { iso: "PRT", name: "Portugal", x: 0, y: 6, apply: "New Delhi (Portuguese Embassy)",
      you: { lvl: 3, route: "remote", text: "D8 remote-work visa: €3,680 a month plus €11,040 savings. Or the D1 work visa with a job contract." },
      nonskilled: { lvl: 3, text: "Open job-seeker visa abolished in October 2025; you now need a real job contract." },
      skilled: { lvl: 3, text: "D1 work visa with a contract; the new skilled job-seeker visa was not yet running in mid-2026." },
      link: ["Portugal visa portal", "https://vistos.mne.gov.pt/en/highlights/change-in-the-regime-regarding-work-seeking-visa-applications"] },
    { iso: "ESP", name: "Spain", x: 1, y: 6, apply: "Dhaka (Spanish Embassy / BLS)",
      you: { lvl: 4, route: "remote", text: "Digital-nomad visa accepts 3 years' experience instead of a degree. You need €2,849 a month of remote income (2026)." },
      nonskilled: { lvl: 1, text: "Collective hiring in origin (GECCO) exists but is limited." },
      skilled: { lvl: 2, text: "Employer authorisation; no labour-market test for jobs on the hard-to-fill list." },
      link: ["BLS Spain – long-term visa", "https://bgd.blsspainvisa.com/long-term-visa.php"] },
    { iso: "ITA", name: "Italy", x: 3, y: 6, apply: "Dhaka (Italian Embassy via VFS)",
      you: { lvl: 4, route: "farm", text: "Seasonal farm quota: an Italian farm must file for you on the 12 January 2027 click day." },
      nonskilled: { lvl: 4, text: "Biggest legal European market for Bangladeshis; yearly quota with click days; slow and fraud-prone." },
      skilled: { lvl: 3, text: "EU Blue Card outside the quota, but embassy processing is slow." },
      link: ["Italian Embassy Dhaka – work visa", "https://ambdhaka.esteri.it/en/servizi-consolari-e-visti/servizi-per-il-cittadino-straniero/visti/work-visa/"] },
    { iso: "SVN", name: "Slovenia", x: 4, y: 6, apply: "Check the Slovenian embassy page",
      you: { lvl: 2, route: "farm", text: "Single permit through the Employment Service; employers reported reluctant to hire Bangladeshis." },
      nonskilled: { lvl: 2, text: "Employers reported reluctant to hire Bangladeshis." },
      skilled: { lvl: 2, text: "Single permit through the Employment Service (ZRSZ)." },
      link: ["ZRSZ – single permit", "https://www.ess.gov.si/en/jobseekers/employment-of-non-eu-migrant-workers/work-in-slovenia/single-permit"] },
    { iso: "HRV", name: "Croatia", x: 5, y: 6, apply: "Dhaka (VFS), decided in New Delhi",
      you: { lvl: 5, route: "farm", text: "Seasonal tourism and farm permits run up to 3 years. The nomad stay needs €3,622.50 a month (max 18 months)." },
      nonskilled: { lvl: 5, text: "100,000+ permits a year; since June 2026 you can change employer after 6 months." },
      skilled: { lvl: 4, text: "EU Blue Card rules were relaxed; same employer route." },
      link: ["VFS Croatia – Bangladesh", "https://visa.vfsglobal.com/bgd/en/hrv"] },
    { iso: "SRB", name: "Serbia", x: 6, y: 6, apply: "New Delhi (Serbian Embassy)",
      you: { lvl: 0, route: "none", text: "BMET clearance on hold (September 2026); forced-labour allegations; not an EU route." },
      nonskilled: { lvl: 0, text: "BMET clearance on hold since September 2026." },
      skilled: { lvl: 0, text: "BMET clearance on hold since September 2026." },
      link: ["TBS – clearance on hold", "https://www.tbsnews.net/bangladesh/visas-holders-urge-bmet-resume-manpower-clearance-serbia-north-macedonia-moldova-1552981"] },
    { iso: "BGR", name: "Bulgaria", x: 7, y: 6, apply: "New Delhi (interview required)",
      you: { lvl: 4, route: "farm", text: "Single permit; employers may only have 20–35% foreign staff; low wages (minimum wage about €620 a month)." },
      nonskilled: { lvl: 4, text: "Single permit with a 15-day labour-market test; 20–35% foreign-staff cap." },
      skilled: { lvl: 3, text: "Same single permit; EU Blue Card also available." },
      link: ["Bulgarian MFA – Bangladesh", "https://www.mfa.bg/en/embassyinfo/bangladesh"] },
    { iso: "BIH", name: "Bosnia & Herzegovina", x: 5, y: 7, apply: "Check the embassy page",
      you: { lvl: 2, route: "farm", text: "7,427 permits for 2026; low wages; often misused as a transit route." },
      nonskilled: { lvl: 2, text: "Quota 7,427 permits for 2026." },
      skilled: { lvl: 2, text: "Quota applies." },
      link: ["Lexology – hiring in BiH", "https://www.lexology.com/library/detail.aspx?g=a122552e-d60a-4756-b99f-cbe7acbddb2f"] },
    { iso: "MNE", name: "Montenegro", x: 6, y: 7, apply: "Check the embassy page",
      you: { lvl: 2, route: "farm", text: "28,988 permits for 2026; low wages; often misused as a transit route." },
      nonskilled: { lvl: 2, text: "Quota 28,988 permits for 2026." },
      skilled: { lvl: 2, text: "Quota applies." },
      link: ["Rona Legal – Montenegro from Bangladesh", "https://www.ronalegal.com/en/blog/working-in-montenegro-from-bangladesh"] },
    { iso: "MKD", name: "North Macedonia", x: 7, y: 7, apply: "—",
      you: { lvl: 0, route: "none", text: "BMET clearance on hold (September 2026)." },
      nonskilled: { lvl: 0, text: "BMET clearance on hold." },
      skilled: { lvl: 0, text: "BMET clearance on hold." },
      link: ["TBS – clearance on hold", "https://www.tbsnews.net/bangladesh/visas-holders-urge-bmet-resume-manpower-clearance-serbia-north-macedonia-moldova-1552981"] },
    { iso: "MLT", name: "Malta", x: 3, y: 8, apply: "Dhaka (VFS)",
      you: { lvl: 4, route: "farm", text: "Hospitality and general jobs through an Identità single permit plus a €250 pre-departure course. Nomad permit needs €42,000 a year." },
      nonskilled: { lvl: 4, text: "Steady demand; mandatory €250 pre-departure course since 1 March 2026." },
      skilled: { lvl: 3, text: "Single permit through the employer." },
      link: ["Identità – single permit", "https://identita.gov.mt/expatriates-unit-main-page/noneu-nationals/employment-related-permits/single-permit/"] },
    { iso: "ALB", name: "Albania", x: 6, y: 8, apply: "Check the embassy page",
      you: { lvl: 2, route: "farm", text: "Employers reported reluctant to hire Bangladeshis; low wages." },
      nonskilled: { lvl: 2, text: "Employers reported reluctant to hire Bangladeshis." },
      skilled: { lvl: 2, text: "Low wages; small market." },
      link: ["TBS – Europe migration H1 2026", "https://www.tbsnews.net/world/europe-job-migration-surges-46-h1-amid-gulf-slump-1475796"] },
    { iso: "GRC", name: "Greece", x: 7, y: 8, apply: "Dhaka (GVCW visa centre)",
      you: { lvl: 4, route: "farm", text: "BOESL's government seasonal farm programme (4,000 a year), or the nomad visa at €3,500 a month net." },
      nonskilled: { lvl: 4, text: "Government-to-government seasonal farm programme; new migration law in February 2026." },
      skilled: { lvl: 3, text: "Employer permit with labour-market approval; contracts of at least 6 months." },
      link: ["GVCW – national D visa", "https://bd-gr.gvcworld.eu/en/visa-info-long-term-national-d-visa"] },
    { iso: "CYP", name: "Cyprus", x: 8, y: 8, apply: "New Delhi (High Commission)",
      you: { lvl: 3, route: "farm", text: "Farm, factory, delivery and retail jobs; company caps on foreign staff." },
      nonskilled: { lvl: 3, text: "Department of Labour approval; caps on foreign staff per company." },
      skilled: { lvl: 2, text: "Same employer route; small market." },
      link: ["Cyprus Mail – who can work", "https://cyprus-mail.com/2026/09/27/cyprus-labour-shortages-who-can-legally-work"] }
  ],

  /* Section A and B ranking tables (difficulty scale 1 = easiest, as in the markdown guide). */
  rankNonSkilled: [
    ["ROU", 2, "90,000 work permits for 2026. Trades on the shortage list. New official online hiring system.", "New Delhi (Romanian Embassy, eVisa appointment)"],
    ["HRV", 2, "100k+ permits a year. Since June 2026 you can change employer after 6 months.", "Dhaka (VFS), decided by the embassy in New Delhi"],
    ["ITA", 3, "Biggest legal European market for Bangladeshis. Yearly quota lottery (click days Jan–Feb 2027). Heavy fraud checks.", "Dhaka (Italian Embassy via VFS)"],
    ["GRC", 3, "Government-to-government seasonal farm programme (4,000 a year) through BOESL. New 2026 migration law.", "Dhaka (GVCW visa centre)"],
    ["MLT", 3, "Steady demand in hospitality, cleaning and construction. New mandatory €250 pre-departure course.", "Dhaka (VFS)"],
    ["BGR", 3, "Single permit. Employers may only have 20–35% foreign staff. Low wages.", "New Delhi (mandatory interview)"],
    ["POL", 3, "Work permit plus D visa. Fees and refusal checks increased in 2026.", "Dhaka (VFS), decided in New Delhi"],
    ["PRT", 3.5, "Open job-seeker visa abolished in October 2025. You now need a real job contract.", "New Delhi (Portuguese Embassy)"],
    ["SVK", 3.5, "Shortage jobs (drivers, construction, factories). Stricter rules from July 2026.", "New Delhi (Slovak Embassy)"],
    ["CYP", 3.5, "Farm, factory, delivery and retail jobs. Company caps on foreign staff.", "New Delhi (High Commission)"],
    ["SVN", 4, "Employers reluctant to hire Bangladeshis.", "Mostly New Delhi"],
    ["LTU", 4, "Quota cut to 24,706; industry share ran out early.", "Mostly New Delhi"],
    ["LVA", 4, "New quota and visa limits proposed in August 2026.", "Mostly New Delhi"],
    ["BIH", 4, "7,427 permits for 2026; low wages; transit-route risk.", "Check the embassy page"],
    ["MNE", 4, "28,988 permits for 2026; low wages; transit-route risk.", "Check the embassy page"],
    ["CZE", 4.5, "Tiny quotas for Bangladeshis.", "New Delhi (Czech Embassy)"],
    ["SRB", "hold", "BMET clearance on hold (September 2026). Forced-labour cases reported.", "New Delhi (Serbian Embassy)"],
    ["MKD", "hold", "BMET clearance on hold (September 2026).", "—"],
    ["HUN", "closed", "Guest-worker permit ended on 6 June 2026.", "—"]
  ],

  rankSkilled: [
    ["DEU", 3, "Opportunity Card (job-search visa), or a job offer plus a recognised qualification. EU Blue Card from €50,700 a year (€45,934 in shortage jobs).", "Dhaka (German Embassy, online portal)"],
    ["FIN", 3, "General minimum €1,600 a month. Specialist and Blue Card €3,937 a month.", "Online, then ID check in New Delhi"],
    ["AUT", 3.5, "Red-White-Red Card: 55 of 90 points for shortage jobs, collective-agreement pay.", "New Delhi (Austrian Embassy)"],
    ["IRL", 3.5, "General permit €36,605. Critical Skills €40,904 with a degree.", "New Delhi (by post, no biometrics)"],
    ["ESP", 4, "Employer authorisation. No labour-market test for hard-to-fill jobs.", "Dhaka (Spanish Embassy / BLS)"],
    ["FRA", 4, "Talent permits (reference salary €39,582) or shortage-list jobs. French helps.", "Dhaka (French Embassy)"],
    ["NLD", 4, "Recognised-sponsor employer; €5,942 a month (30+) or €4,357 (under 30).", "Dhaka (Dutch Embassy)"],
    ["SWE", 4, "At least SEK 34,470 a month (90% of the median wage, from June 2026).", "Dhaka (Swedish Embassy)"],
    ["DNK", 4.5, "DKK 552,000 a year, DKK 446,000 (supplementary), or a Positive List job.", "Dhaka (VFS)"],
    ["NOR", 4.5, "Degree or trade certificate; NOK 545,400+ a year for degree-level jobs.", "Dhaka (VFS, via Danish Embassy)"],
    ["GBR", 4.5, "Degree-level (RQF 6) job, £41,700 or the going rate, English B2.", "Dhaka (VFS)"],
    ["EST", 4.5, "Pay at least the average salary; national quota 1,292 a year.", "Check the embassy page"],
    ["CHE", 5, "Only 8,500 permits a year for all non-EU nationals; top specialists only.", "Dhaka (Swiss Embassy)"]
  ],

  /* Country notes shown under each ranking. src = [label, url]. */
  notesNonSkilled: {
    ROU: [
      ["90,000 permits for non-EU workers in 2026, down from 100,000 in 2025. Employers had asked for 150,000.", ["Romania Journal", "https://www.romaniajournal.ro/society-people/government-to-reduce-number-of-foreign-workers-in-2026/"]],
      ["Emergency Ordinance GEO 32/2026 in force since 27 April 2026: all hiring goes through WorkinRomania.gov.ro (live since 6 August 2026), and only jobs on the government shortage list are accepted.", ["Romania Insider", "https://www.romania-insider.com/platform-foreign-workers-coming-romania-and-running-aug-2026"]],
      ["The shortage list has 289 occupations in construction, food industry, agriculture, transport, tourism, retail and manufacturing (cook, electrician, mechanic, driver, welder, carpenter, mason…).", ["Shortage list explained", "https://teaha.ro/en/2026/08/07/shortage-occupations-for-foreign-workers-in-2026/"]],
      ["Agencies must be authorised and post guarantees; your salary goes into your own bank account; your contract must be in a language you understand.", ["KPMG", "https://kpmg.com/ro/en/insights/2026/04/access-foreign-nationals-romanian-labor-market--new-rules.html"]],
      ["Minimum wage RON 4,325 gross a month from 1 July 2026.", ["Legal500", "https://www.legal500.com/intelligence/romania/employment-and-hr/salariul-minim-brut-a-fost-majorat-la-4325-ron-de-la-1-iulie-2026"]],
      ["No embassy in Dhaka: you apply to the Romanian Embassy in New Delhi, with appointments through the eVisa system. The embassy says intermediaries are not needed.", ["Romanian Embassy New Delhi", "https://newdelhi.mae.ro/en/local-news/1202"]],
      ["Warning: private agents have charged Tk 10–12 lakh against Tk 1.65 lakh under the government arrangement.", ["TBS", "https://www.tbsnews.net/bangladesh/migration/romania-set-temporary-consular-services-dhaka-370771"]]
    ],
    HRV: [
      ["Over 160,000 permits in Jan–Nov 2025; Bangladesh got 3,183 (Nepal 29,579, India 14,500).", ["Croatia Week", "https://www.croatiaweek.com/foreign-workers-in-croatia-160000-permits-in-2025-where-they-come-from/"]],
      ["Since 4 June 2026: change employer after 6 months, seasonal permits up to 3 years, 3 months to find a new job if you lose yours.", ["Croatia Week", "https://www.croatiaweek.com/croatia-new-foreign-workers-law-2026/"]],
      ["You must pass a Croatian A1.1 exam to renew your permit after one year.", ["Croatia Week", "https://www.croatiaweek.com/croatia-mandatory-croatian-language-test-foreign-workers-law/"]],
      ["Visa files go through VFS Global in Dhaka and are decided by the Croatian Embassy in New Delhi.", ["VFS Croatia–Bangladesh", "https://visa.vfsglobal.com/bgd/en/hrv"]]
    ],
    ITA: [
      ["Decreto Flussi: 164,850 places in 2026 and 165,850 in 2027. Bangladesh is on the eligible list.", ["Immigrazione Bologna", "https://www.immigrazionebologna.it/en/2025/10/22/flows-decree-2026-2028/"]],
      ["Only an Italian employer can apply for your nulla osta. 2027 click days: 12 Jan (agriculture), 9 Feb (tourism), 16 Feb (general), 18 Feb (home care).", ["Click-day dates", "https://www.shimmigrations.com/decreto-flussi-2027-date-click-day/"]],
      ["Bangladeshi nulla osta are checked again since Decree-Law 145/2024, and the employer must confirm the job within 15 days.", ["Italian Embassy Dhaka", "https://ambdhaka.esteri.it/en/servizi-consolari-e-visti/servizi-per-il-cittadino-straniero/visti/work-visa/"]],
      ["A June 2026 report found 1,200+ people caught in a fake-contract visa scheme. Never pay for a nulla osta.", ["Hyphen", "https://hyphenonline.com/2026/06/01/italy-visa-fraud-scheme-bangladeshis-stranded-naples-dhaka/"]]
    ],
    GRC: [
      ["2022 agreement: 4,000 Bangladeshi seasonal farm workers a year for 5 years; up to 9 months a year; no permanent residence.", ["Daily Star", "https://www.thedailystar.net/nrb/migration/news/greece-signs-mou-recruit-4000-bangladeshi-workers-each-year-2958236"]],
      ["BOESL runs it and held a workshop on Greek jobs in August 2026.", ["BSS", "https://www.bssnews.net/others/414419"]],
      ["Law 5275/2026: yearly quotas by sector, contracts of at least 6 months, labour-market approval.", ["EY", "https://www.ey.com/en_gr/technical/tax/tax-alerts/law-5275-2026-immigration-policies"]],
      ["The Greece visa centre in Banani, Dhaka accepts national D visas (passport valid 1.5+ years).", ["GVCW", "https://bd-gr.gvcworld.eu/en/visa-info-long-term-national-d-visa"]]
    ],
    MLT: [
      ["From 1 March 2026 first-time applicants must pass a pre-departure course (about 10–12 hours, €250 total).", ["Identità", "https://identita.gov.mt/pre-departure-course-requirement-to-be-verified-as-from-1-march-2026/"]],
      ["Hospitality and tourism jobs also need the Skills Pass.", ["Skills Pass", "https://skillspass.org.mt/"]],
      ["Apply at VFS Dhaka within 60 days of the approval letter.", ["VFS Malta–Bangladesh", "https://www.vfsglobal.com/one-pager/malta-extended-services/bangladesh/english/index.html"]],
      ["Wages are low; some agencies have pushed €600-a-month jobs.", ["The Shift", "https://theshiftnews.com/2024/07/19/bangladeshi-agencies-targeting-malta-for-e600-a-month-jobs/"]]
    ],
    BGR: [
      ["Foreign staff capped at 20% (large firms) or 35% (small and medium firms); a draft law may raise this by 5 points.", ["Innovires", "https://www.innovires.com/en/blog/work-permit-bulgaria.html"]],
      ["No embassy in Bangladesh; D-visa interview at the Bulgarian Embassy in New Delhi.", ["Bulgarian MFA", "https://www.mfa.bg/en/embassyinfo/bangladesh"]]
    ],
    POL: [
      ["2026: permit fees up to PLN 400, new refusal grounds, most steps online.", ["Grant Thornton", "https://grantthornton.pl/en/article/employment-of-foreign-nationals-in-poland-in-2026-key-changes-and-important-deadlines-in-immigration-regulations/"]],
      ["Sweden's embassy in Dhaka stopped handling Polish Schengen visas after 15 April 2026.", ["Swedish Embassy notice", "https://www.swedenabroad.se/en/embassies/bangladesh-dhaka/current/news/notice-visa-application-poland/"]]
    ],
    PRT: [
      ["Law 61/2025 (23 October 2025) abolished the open job-seeker visa; the replacement is for highly qualified people only.", ["Fragomen", "https://www.fragomen.com/insights/portugal-significant-immigration-reforms-in-effect.html"]],
      ["D1 work visas for Bangladeshis are handled by the Embassy of Portugal in New Delhi; police certificates must be legalised first.", ["Embassy of Portugal, New Delhi", "https://novadeli.embaixadaportugal.mne.gov.pt/en/"]]
    ],
    SVK: [
      ["Since 15 July 2026 you must stay in the job your permit was issued for.", ["Envoy", "https://www.envoyglobal.com/news-alert/slovakia-implements-foreign-worker-employment-changes/"]]
    ],
    CYP: [
      ["Bangladeshis are among the main nationalities in 26,710 general-employment permits (August 2026).", ["Cyprus Mail", "https://cyprus-mail.com/2026/09/27/cyprus-labour-shortages-who-can-legally-work"]]
    ]
  },

  notesSkilled: {
    DEU: [
      ["Opportunity Card: a degree or 2-year+ vocational qualification, German A1 or English B2, about €1,091 a month in funds, and full recognition or at least 6 points.", ["Expatrio", "https://www.expatrio.com/opportunity-card"]],
      ["EU Blue Card 2026: €50,700, or €45,934.20 for shortage jobs, recent graduates, and IT specialists with 3 years' experience instead of a degree.", ["RT Partner", "https://www.rtpartner.de/en/immigration/blaue-karte-eu-mindestgehalt-2026/"]],
      ["Apply at the German Embassy in Dhaka through the online Consular Services Portal; processing about 3–8 weeks plus appointment waiting time.", ["German Embassy Dhaka", "https://dhaka.diplo.de/bd-en/service/2689548-2689548"]]
    ],
    FIN: [
      ["Employee permit minimum €1,600 a month; specialist and Blue Card €3,937 a month in 2026.", ["Migri", "https://migri.fi/en/working-in-finland/income-requirement"]],
      ["Apply online, then prove your identity in New Delhi.", ["Finland abroad – Bangladesh", "https://finlandabroad.fi/web/bgd/residence-permits-to-finland"]]
    ],
    AUT: [
      ["Shortage occupations (64 nationwide, 66 regional): 55 of 90 points, collective-agreement pay, no labour test. Other key workers: €3,465 a month.", ["migration.gv.at", "https://www.migration.gv.at/en/types-of-immigration/permanent-immigration/skilled-workers-in-shortage-occupations/"]],
      ["Bangladeshi applications are handled by the Austrian Embassy in New Delhi.", ["BMEIA", "https://www.bmeia.gv.at/en/austrian-embassy-new-delhi/travels-to-austria/entry-and-residence/settlement-and-residence"]]
    ],
    IRL: [
      ["From 1 March 2026: General permit €36,605; Critical Skills €40,904 (degree) or €68,911 (no degree); healthcare, meat and horticulture €32,691.", ["MRCI", "https://www.mrci.ie/2026/03/06/new-employment-permit-salary-thresholds-from-1-march-2026/"]],
      ["Apply to the Embassy of Ireland in New Delhi by post or through VFS Kolkata.", ["Ireland.ie", "https://www.ireland.ie/en/india/newdelhi/services/visas/visas-for-ireland/"]]
    ],
    ESP: [
      ["No labour-market test for the hard-to-fill catalogue; collective hiring in origin (GECCO 2026).", ["ARC Legal", "https://www.arc-legal.es/en/gecco-2026-spain-regulates-collective-hiring-of-foreign-workers-at-origin/"]],
      ["Visas at the Spanish Embassy in Dhaka through BLS.", ["BLS Spain", "https://bgd.blsspainvisa.com/long-term-visa.php"]]
    ],
    FRA: [
      ["Talent reference salary €39,582; EU Blue Card €59,373 (€47,498 for STEM shortage roles).", ["Fragomen", "https://www.fragomen.com/insights/france-changes-to-talent-permit-scheme-processing-timeframes-and-minimum-salary-levels.html"]]
    ],
    NLD: [
      ["2026 thresholds: €5,942 a month (30+), €4,357 (under 30), €3,122 (recent graduates); no diploma requirement.", ["Jobbatical", "https://www.jobbatical.com/blog/netherlands-highly-skilled-migrant-salary-thresholds-2026"]],
      ["Your employer must be on the IND recognised-sponsor register.", ["IND register", "https://ind.nl/en/public-register-recognised-sponsors/public-register-work"]]
    ],
    SWE: [
      ["From 1 June 2026: at least 90% of the median wage, SEK 34,470 a month (from 16 June 2026). No education requirement.", ["Migrationsverket", "https://www.migrationsverket.se/en/employers/news-archive-for-employers/news/2026-06-16-new-median-salary-affects-the-salary-requirement-for-work-permits.html"]]
    ],
    DNK: [
      ["Pay Limit DKK 552,000; supplementary DKK 446,000 (job advertised on Jobnet and EURES first); or a Positive List job.", ["Bird & Bird", "https://www.twobirds.com/en/insights/2026/denmark/udenlandsk-arbejdskraft---nye-bel%C3%B8bsgr%C3%A6nser-under-bel%C3%B8bsordningerne-og-opdateret-positivlister"]],
      ["Biometrics at VFS Dhaka.", ["Danish Embassy Dhaka", "https://bangladesh.um.dk/en/travel-and-residence/practical-information/residence-permit/how-and-where-to-apply"]]
    ],
    NOR: [
      ["From 1 May 2026: NOK 545,400 (bachelor-level jobs) or NOK 624,700 (master's).", ["UDI", "https://www.udi.no/en/want-to-apply/work-immigration/skilled-workers/"]],
      ["Apply through VFS in Dhaka; the Danish Embassy represents Norway.", ["Norway in Bangladesh", "https://www.norway.no/en/bangladesh/services-info/visitors-visa-res-permit/res-permit/"]]
    ],
    GBR: [
      ["Degree-level (RQF 6) jobs only, £41,700 or the going rate, English B2 from 8 January 2026. Care-worker recruitment closed July 2025.", ["Centuro Global", "https://www.centuroglobal.com/articles/uk-immigration-2026-changes/"]],
      ["Only employers on the licensed-sponsor register can hire you.", ["GOV.UK register", "https://www.gov.uk/government/publications/register-of-licensed-sponsors-workers"]]
    ],
    EST: [
      ["Immigration quota 1,292 for 2026; short-term work must pay the average salary.", ["Estonian Interior Ministry", "https://www.siseministeerium.ee/en/activities/efficient-population-management/migration"]]
    ],
    CHE: [
      ["8,500 permits for all non-EU nationals in 2026 (4,500 B + 4,000 L), highly qualified only.", ["Swiss Federal Council", "https://www.admin.ch/en/newnsb/7HwBjdg5HpBA"]]
    ]
  },

  /* ---------- charts ---------- */
  /* Euro countries only, so every bar is in the currency the country uses. */
  techFloors: [
    { label: "Finland · employee permit", value: 19200, shown: "€1,600 a month", note: "Minimum; a labour-market check applies and collective agreements pay more.", plan: false },
    { label: "Ireland · General Employment Permit", value: 36605, shown: "€36,605 a year", note: "Experience can replace a degree. Labour Market Needs Test applies.", plan: true },
    { label: "Germany · EU Blue Card for IT specialists", value: 45934, shown: "€45,934 a year", note: "3 years' IT experience in the last 7 years instead of a degree.", plan: true },
    { label: "Netherlands · highly skilled, under 30", value: 52284, shown: "€4,357 a month", note: "You are 29: file before your 30th birthday. No degree rule; recognised-sponsor employer; holiday pay not counted.", plan: true },
    { label: "Ireland · Critical Skills, no degree", value: 68911, shown: "€68,911 a year", note: "Critical Skills permit without a degree.", plan: false },
    { label: "Netherlands · highly skilled, 30+", value: 71304, shown: "€5,942 a month", note: "Applies if you are 30 or older on the day the IND receives the application.", plan: false }
  ],

  /* Countries with their own currency: shown in that currency, not converted. */
  otherFloors: [
    { label: "Sweden · work permit", shown: "SEK 34,470 a month", note: "No education requirement.", plan: true },
    { label: "Denmark · supplementary pay limit", shown: "DKK 446,000 a year", note: "Job advertised on Jobnet and EURES first." },
    { label: "Denmark · Pay Limit Scheme", shown: "DKK 552,000 a year", note: "No degree rule." },
    { label: "United Kingdom · software developer", shown: "£54,700 a year", note: "Going rate for SOC 2134; English B2." },
    { label: "Norway · degree-level jobs", shown: "NOK 545,400 a year", note: "Needs a degree or trade certificate." }
  ],

  remoteFloors: [
    { label: "Spain", value: 2849, shown: "€2,849 a month", note: "Degree OR 3 years' professional experience. Renewable residence.", plan: true },
    { label: "Greece", value: 3500, shown: "€3,500 a month (net)", note: "Apply at a Greek consulate before you travel.", plan: false },
    { label: "Malta", value: 3500, shown: "€42,000 a year", note: "Nomad Residence Permit.", plan: false },
    { label: "Croatia", value: 3622.5, shown: "€3,622.50 a month", note: "Up to 18 months, not renewable.", plan: false },
    { label: "Portugal", value: 3680, shown: "€3,680 a month", note: "Plus €11,040 in savings (D8 visa).", plan: false },
    { label: "Estonia", value: 4500, shown: "€4,500 a month", note: "Digital Nomad Visa.", plan: false },
    { label: "Romania", value: 5700, shown: "about €5,700 a month", note: "Three times the average gross salary (approximate).", plan: false }
  ],

  quotas: [
    { label: "Italy", value: 164850, shown: "164,850", note: "All work entries: 88,000 seasonal + 76,850 non-seasonal. Bangladesh is eligible." },
    { label: "Greece", value: 94240, shown: "94,240", note: "Seasonal workers (Law 5275/2026)." },
    { label: "Romania", value: 90000, shown: "90,000", note: "All work permits for non-EU workers; down from 100,000." },
    { label: "Montenegro", value: 28988, shown: "28,988", note: "Employment, seasonal and reserve permits." },
    { label: "Lithuania", value: 24706, shown: "24,706", note: "Down from 40,250 in 2024." },
    { label: "Switzerland", value: 8500, shown: "8,500", note: "All non-EU nationals, highly qualified only." },
    { label: "Bosnia & Herzegovina", value: 7427, shown: "7,427", note: "Across the three administrative units." },
    { label: "Estonia", value: 1292, shown: "1,292", note: "Residence permits for work or business." }
  ],

  croatia: [
    { label: "Nepal", value: 29579, shown: "29,579" },
    { label: "India", value: 14500, shown: "14,500" },
    { label: "Bangladesh", value: 3183, shown: "3,183", plan: true }
  ],

  europeShare: [
    { label: "Share of Bangladesh's overseas jobs", value: 5, shown: "5%" },
    { label: "Share of Bangladesh's remittances", value: 19.6, shown: "19.6%", plan: true }
  ],

  kpis: [
    { value: "18,220", label: "Bangladeshis went to Europe legally for work, Jan–Jun 2026", delta: "+46.4% on a year earlier", dir: "up", src: ["TBS", "https://www.tbsnews.net/world/europe-job-migration-surges-46-h1-amid-gulf-slump-1475796"] },
    { value: "4,645", label: "of them went to Italy, the largest European destination", delta: null, src: ["TBS", "https://www.tbsnews.net/world/europe-job-migration-surges-46-h1-amid-gulf-slump-1475796"] },
    { value: "9.69 lakh", label: "overseas jobs in total, FY2025–26: a five-year low", delta: "−5% on the year before", dir: "down", src: ["Daily Star", "https://www.thedailystar.net/business/economy/news/overseas-jobs-fall-five-year-low-amid-middle-east-uncertainty-4240871"] }
  ],

  /* kind: easier | tighter | closed | mixed */
  timeline: [
    { date: "8 Jan", where: "United Kingdom", text: "English requirement for Skilled Worker visas rises to B2.", kind: "tighter" },
    { date: "6 Feb", where: "Greece", text: "Law 5275/2026: new sector quotas, 6-month minimum contracts.", kind: "mixed" },
    { date: "1 Mar", where: "Malta", text: "€250 pre-departure course becomes mandatory for first permits.", kind: "tighter" },
    { date: "1 Mar", where: "Ireland", text: "Employment-permit salary floors rise (General permit €36,605).", kind: "tighter" },
    { date: "27 Apr", where: "Romania", text: "GEO 32/2026: shortage-job list, authorised employers and agencies only.", kind: "tighter" },
    { date: "1 May", where: "Norway", text: "Skilled-worker salary floors rise to NOK 545,400 / 624,700.", kind: "tighter" },
    { date: "1 Jun", where: "Sweden", text: "Work-permit salary floor raised to 90% of the median wage.", kind: "tighter" },
    { date: "1 Jun", where: "European Union", text: "EU Talent Pool law applies; matching platform expected around 2027.", kind: "easier" },
    { date: "4 Jun", where: "Croatia", text: "Change employer after 6 months; Croatian A1.1 needed to renew.", kind: "mixed" },
    { date: "6 Jun", where: "Hungary", text: "Guest-worker permits closed to new applications.", kind: "closed" },
    { date: "28 Jun", where: "India", text: "Tourist visas for Bangladeshis resume, so New Delhi embassies are reachable again.", kind: "easier" },
    { date: "15 Jul", where: "Slovakia", text: "Workers must stay in the job their permit names.", kind: "tighter" },
    { date: "6 Aug", where: "Romania", text: "WorkinRomania.gov.ro goes live; 289-job shortage list published.", kind: "easier" },
    { date: "Aug", where: "Latvia", text: "Interior Ministry proposes quotas and visa limits.", kind: "tighter" },
    { date: "24 Sep", where: "Bangladesh", text: "BMET clearance for Serbia, North Macedonia and Moldova on hold.", kind: "closed" }
  ],

  dhaka: [
    ["Croatia", "VFS (decided in New Delhi)"], ["Italy", "Embassy via VFS"], ["Greece", "GVCW centre"], ["Malta", "VFS"],
    ["Poland", "VFS (decided in New Delhi)"], ["Germany", "Embassy, online portal"], ["Spain", "Embassy / BLS"], ["France", "Embassy"],
    ["Netherlands", "Embassy"], ["Sweden", "Embassy"], ["Denmark", "VFS"], ["Norway", "VFS via Danish Embassy"], ["United Kingdom", "VFS"], ["Switzerland", "Embassy"]
  ],
  delhi: [
    ["Romania", "Embassy, eVisa appointment"], ["Bulgaria", "Embassy interview"], ["Portugal", "Embassy"], ["Slovakia", "Embassy"],
    ["Czech Republic", "Embassy"], ["Austria", "Embassy"], ["Ireland", "By post or VFS Kolkata"], ["Finland", "ID check at VFS"],
    ["Serbia", "Embassy"], ["Cyprus", "High Commission"]
  ],

  /* ---------- job portals ----------
     type: bd | eu | country | board | register | remote
     for: any of "you" (developer), "nonskilled", "skilled" */
  portals: [
    { name: "BMET Overseas Employment Platform", url: "https://www.oep.gov.bd/", type: "bd", for: ["you", "nonskilled", "skilled"], where: "Bangladesh", text: "Register as an aspirant migrant and see verified overseas employers and jobs." },
    { name: "Licensed recruiting agency check", url: "https://www.oep.gov.bd/agencies", type: "bd", for: ["you", "nonskilled", "skilled"], where: "Bangladesh", text: "Check an agency's RL number and that its status is Active before you pay anything." },
    { name: "BMET emigration clearance", url: "https://oc.bmet.gov.bd", type: "bd", for: ["you", "nonskilled", "skilled"], where: "Bangladesh", text: "Apply for your clearance smart card before you travel." },
    { name: "BOESL", url: "https://www.boesl.gov.bd", type: "bd", for: ["you", "nonskilled"], where: "Bangladesh", text: "Government-owned recruiter: government-to-government schemes such as Greek seasonal farm work." },
    { name: "BOESL recruitment portal", url: "https://brms.boesl.gov.bd/", type: "bd", for: ["you", "nonskilled"], where: "Bangladesh", text: "Apply to BOESL circulars online." },
    { name: "BAIRA member list", url: "https://baira.org.bd", type: "bd", for: ["nonskilled"], where: "Bangladesh", text: "A second check on a private agency's licence." },
    { name: "EURES", url: "https://eures.europa.eu", type: "eu", for: ["you", "nonskilled", "skilled"], where: "All EU/EEA", text: "The EU's job-mobility portal with vacancies from 31 countries." },
    { name: "EU Immigration Portal", url: "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal_en", type: "eu", for: ["you", "nonskilled", "skilled"], where: "All EU", text: "Official rules for non-EU workers, country by country." },
    { name: "Europass CV builder", url: "https://europass.europa.eu/en/third-country-nationals-and-europass", type: "eu", for: ["you", "nonskilled", "skilled"], where: "All EU", text: "Free, official EU tool to make a Europe-style CV." },
    { name: "WorkinRomania.gov.ro", url: "https://workinromania.gov.ro", type: "country", for: ["you", "nonskilled"], where: "Romania", text: "The only legal hiring channel now; your employer must be authorised here." },
    { name: "Croatian Employment Service – Burza rada", url: "https://burzarada.hzz.hr", type: "country", for: ["nonskilled"], where: "Croatia", text: "All registered vacancies in Croatia." },
    { name: "Jobsplus vacancies", url: "https://jobsplus.gov.mt/vacancy", type: "country", for: ["nonskilled"], where: "Malta", text: "Malta's public employment service." },
    { name: "Central Job Offers Database (CBOP)", url: "https://oferty.praca.gov.pl/portal", type: "country", for: ["you", "nonskilled"], where: "Poland", text: "Official database of vacancies from all Polish labour offices." },
    { name: "National Employment Service (NSZ)", url: "https://www.nsz.gov.rs", type: "country", for: ["nonskilled"], where: "Serbia", text: "Official vacancies (BMET clearance for Serbia is on hold)." },
    { name: "Czech jobs open to non-EU workers", url: "https://up.gov.cz/en/for-foreigners", type: "country", for: ["skilled", "nonskilled"], where: "Czech Republic", text: "Central database of vacancies for Employee Card and Blue Card holders." },
    { name: "Make it in Germany – job listings", url: "https://www.make-it-in-germany.com/en/working-in-germany/job-listings", type: "country", for: ["you", "skilled"], where: "Germany", text: "Government portal. Listed employers agreed to receive applications from abroad." },
    { name: "Federal Employment Agency – find a job", url: "https://www.arbeitsagentur.de/int/en/how-to-find-a-job", type: "country", for: ["you", "skilled"], where: "Germany", text: "Official German job search and advice for foreigners." },
    { name: "Work in Austria – Talent Hub", url: "https://jobs.workinaustria.com/?lang=en", type: "country", for: ["you", "skilled"], where: "Austria", text: "Government agency platform for international skilled workers (IT, electrical, mechatronics)." },
    { name: "Workindenmark", url: "https://www.workindenmark.dk/", type: "country", for: ["you", "skilled"], where: "Denmark", text: "Public employment service for international candidates, English-language jobs." },
    { name: "Job Market Finland", url: "https://tyomarkkinatori.fi/en", type: "country", for: ["you", "skilled"], where: "Finland", text: "National job platform; non-EU users log in by e-mail." },
    { name: "Work in Estonia", url: "https://workinestonia.com/", type: "country", for: ["you", "skilled"], where: "Estonia", text: "All English-language jobs in Estonia, strong in tech." },
    { name: "Work in Lithuania – jobs", url: "https://jobs.workinlithuania.com/", type: "country", for: ["you", "skilled"], where: "Lithuania", text: "Government-backed portal for international talent." },
    { name: "JobsIreland", url: "https://jobsireland.ie/", type: "country", for: ["you", "skilled"], where: "Ireland", text: "Ireland's public employment service." },
    { name: "Relocate.me", url: "https://relocate.me", type: "board", for: ["you"], where: "Europe", text: "Tech jobs that come with visa and relocation packages." },
    { name: "Arbeitnow – visa sponsorship jobs", url: "https://www.arbeitnow.com/visa-sponsorship-jobs", type: "board", for: ["you", "skilled"], where: "Germany / Europe", text: "English-speaking jobs that sponsor visas." },
    { name: "Arbeitnow – jobs with relocation", url: "https://www.arbeitnow.com/jobs-with-relocation", type: "board", for: ["you"], where: "Germany", text: "Jobs that pay for your move." },
    { name: "EnglishJobs.de – visa sponsorship", url: "https://englishjobs.de/jobs/visa-sponsorship", type: "board", for: ["you", "skilled"], where: "Germany", text: "English-speaking roles with sponsorship." },
    { name: "Landing.jobs", url: "https://landing.jobs", type: "board", for: ["you"], where: "Portugal / Europe", text: "Tech jobs with a visa and work-permit filter." },
    { name: "LinkedIn Jobs", url: "https://www.linkedin.com/jobs", type: "board", for: ["you", "skilled"], where: "Everywhere", text: "Search your job title plus “visa sponsorship” or “relocation”." },
    { name: "UK register of licensed sponsors", url: "https://www.gov.uk/government/publications/register-of-licensed-sponsors-workers", type: "register", for: ["you", "skilled"], where: "United Kingdom", text: "Every employer allowed to sponsor visas (CSV download)." },
    { name: "Netherlands recognised sponsors (work)", url: "https://ind.nl/en/public-register-recognised-sponsors/public-register-work", type: "register", for: ["you", "skilled"], where: "Netherlands", text: "Only these employers can hire you on a highly skilled migrant permit." },
    { name: "Denmark certified companies", url: "https://www.nyidanmark.dk/en-GB/You-want-to-apply/Work/Certification", type: "register", for: ["you", "skilled"], where: "Denmark", text: "Companies certified for the Fast-Track scheme." },
    { name: "Upwork", url: "https://www.upwork.com", type: "remote", for: ["you"], where: "Remote", text: "Build remote income and a paper trail of client contracts (for Plan B)." },
    { name: "We Work Remotely", url: "https://weworkremotely.com", type: "remote", for: ["you"], where: "Remote", text: "Remote developer jobs with foreign companies." },
    { name: "Remote OK", url: "https://remoteok.com", type: "remote", for: ["you"], where: "Remote", text: "Remote tech jobs board." }
  ],

  portalTypes: {
    bd: "Bangladesh government",
    eu: "EU-wide",
    country: "Official country portals",
    board: "Visa-sponsorship job boards",
    register: "Employers that sponsor visas",
    remote: "Remote work (Plan B)"
  },

  closedList: [
    ["Hungary", "Guest-worker permit closed to new applications since 6 June 2026 (Government Decree 92/2026).", ["Fragomen", "https://www.fragomen.com/insights/hungary-guest-worker-program-ends.html"]],
    ["Czech Republic", "Not in the Qualified Employee programme; very few Employee Card slots in New Delhi; seasonal quota of 60 a year shared by five countries.", ["Czech Embassy New Delhi", "https://mzv.gov.cz/newdelhi/en/ko/visa_information/long_term_visa_long_term_residence/economic_migration_programs_and_quotas.html"]],
    ["Serbia, North Macedonia, Moldova", "BMET clearance on hold; visa holders protested on 24 September 2026.", ["TBS", "https://www.tbsnews.net/bangladesh/visas-holders-urge-bmet-resume-manpower-clearance-serbia-north-macedonia-moldova-1552981"]],
    ["Russia, Belarus", "Bangladeshi men lured with civilian jobs were forced to fight in the war in Ukraine (AP, January 2026).", ["AP via Washington Post", "https://www.washingtonpost.com/world/2026/01/27/russia-ukraine-war-bangladesh-migrant-workers/27fd6fb0-fb40-11f0-954b-b80c7ed67fc7_story.html"]],
    ["Boat and Balkan routes", "97,832 Bangladeshis entered Europe irregularly in 2020–2024 (IOM), and many died. The EU's new migration pact makes legal status afterwards harder.", ["Bonik Barta", "https://en.bonikbarta.com/bangladesh/VQHz2VqTzKVHu8Hj"]]
  ],

  /* ---------- costs ----------
     Every amount is in the currency you pay it in: taka in Bangladesh,
     the destination's own currency abroad, US dollars for flights.
     Nothing is converted between currencies. */
  costs: {
    kpis: [
      { value: "Tk 4.63 lakh", label: "average recruitment cost of a Bangladeshi migrant worker, all destinations (BBS Labour Force Survey 2024)", src: ["TBS", "https://www.tbsnews.net/infograph/numbers/how-long-does-it-take-migrant-worker-recover-recruitment-costs-1237726"] },
      { value: "10.9 months", label: "of wages, on average, just to earn that money back", src: ["TBS", "https://www.tbsnews.net/infograph/numbers/how-long-does-it-take-migrant-worker-recover-recruitment-costs-1237726"] },
      { value: "53%", label: "of Italy-bound migrants paid more than Tk 5 lakh; 52% of all migrants paid brokers (BBS)", src: ["TBS", "https://www.tbsnews.net/bangladesh/migration/migration-cost-soars-52-workers-rely-brokers-go-abroad-bbs-872541"] }
    ],

    /* Plan budgets. item = [what, amount, source [label,url] or null, "estimate"?] */
    plans: [
      { letter: "A", title: "Germany · EU Blue Card for IT", tag: "No agent needed",
        groups: [
          { head: "In Bangladesh · taka", total: "Tk 43,100–58,100", items: [
            ["IELTS (Academic or General Training)", "Tk 31,100", ["IDP", "https://ielts.idp.com/bangladesh/about/ielts-exam-fee"]],
            ["Police clearance certificate", "Tk 500", ["PCC guide", "https://policeclearance.bd/application-fees/"]],
            ["Notary, translation and attestation of your documents", "Tk 5,000–20,000", null, "estimate"],
            ["BMET clearance: welfare fee Tk 5,500 (from 1 Oct 2026) + insurance Tk 1,000; smart card free", "Tk 6,500", ["TBS", "https://www.tbsnews.net/bangladesh/migrant-workers-pay-tk5500-welfare-fee-october-1550606"]]
          ] },
          { head: "Flight · US dollars", items: [
            ["Dhaka → Frankfurt, one way (online fares)", "US$417–478", ["Expedia", "https://expedia.com/lp/flights/dac/fra/dhaka-to-frankfurt"]]
          ] },
          { head: "In Germany · euros", total: "€2,075–3,675", items: [
            ["National visa €75 + EU Blue Card €100", "€175", ["Find English", "https://www.findenglish.de/blog/eu-blue-card-germany-2026-requirements-salary-threshold-how-to-apply"]],
            ["First month's rent: room in a Berlin shared flat (median, warm)", "€650", ["WG Lotse", "https://wglotse.de/en/find-a-wg/berlin/"]],
            ["Deposit of 1–3 months' cold rent, paid back when you move out", "€650–1,950", ["Rentumo (§551 BGB)", "https://rentumo.de/en/blog/security-deposit-germany-guide"]],
            ["Food, transport and phone until your first salary", "€600–900", null, "estimate"]
          ] }
        ],
        note: "Tech employers often pay your flight and first weeks of housing. Ask for a relocation package before you sign." },
      { letter: "B", title: "Spain · digital-nomad visa", tag: "No agent needed",
        groups: [
          { head: "In Bangladesh · taka", total: "Tk 5,500–20,500", items: [
            ["Police clearance certificate", "Tk 500", ["PCC guide", "https://policeclearance.bd/application-fees/"]],
            ["Notary, translation and attestation of your documents", "Tk 5,000–20,000", null, "estimate"]
          ] },
          { head: "Flight · US dollars", items: [
            ["Dhaka → Europe, one way (Amsterdam and Frankfurt examples)", "US$313–586", ["Expedia", "https://expedia.com/lp/flights/dac/ams/dhaka-to-amsterdam"]]
          ] },
          { head: "In Spain · euros", total: "€4,194–8,588", items: [
            ["Visa process for a do-it-yourself applicant (fees, health insurance, sworn translations)", "€1,000–2,500", ["Klevvera", "https://www.klevvera.com/blog/spain-digital-nomad-visa-cost-breakdown/"]],
            ["…of which private health insurance", "€600–1,800 a year", ["Klevvera", "https://www.klevvera.com/blog/spain-digital-nomad-visa-cost-breakdown/"]],
            ["…of which government fees incl. TIE card €16.08 (consular fee varies by nationality)", "about €73", ["Klevvera", "https://www.klevvera.com/blog/spain-digital-nomad-visa-cost-breakdown/"]],
            ["Move in, Madrid one-bedroom: first month + 1-month deposit + up to 2 months' extra guarantee", "€2,594–5,188", ["Spain Handbook", "https://spainhandbook.com/what-is-fianza-in-spain-deposit-rules-explained-simply/"]],
            ["Food, transport and phone for the first month", "€600–900", null, "estimate"]
          ] }
        ],
        note: "You must also prove €2,849 a month of remote income. Renting a room instead of a one-bedroom flat cuts the move-in cost a lot." },
      { letter: "C", title: "Farm or general work · Romania example", tag: "Agent route",
        groups: [
          { head: "Official costs in Bangladesh · taka", total: "Tk 30,700–34,700 + Delhi hotel", items: [
            ["Police clearance certificate", "Tk 500", ["PCC guide", "https://policeclearance.bd/application-fees/"]],
            ["Medical check (price quoted in agency ads)", "Tk 6,000–10,000", ["Reelpen", "https://www.reelpen.org/how-much-does-it-cost-to-go-to-romania/"]],
            ["BMET clearance (welfare fee + insurance)", "Tk 6,500", ["TBS", "https://www.tbsnews.net/bangladesh/migrant-workers-pay-tk5500-welfare-fee-october-1550606"]],
            ["Indian visa processing for the New Delhi interview (the visa itself is free)", "Tk 1,500", ["Wego", "https://blog.wego.com/indian-tourist-visa-for-bangladeshi-nationals/"]],
            ["Dhaka ⇄ Delhi return flight, lowest fares seen", "Tk 16,200", ["GoZayaan", "https://gozayaan.com/route/dhaka-to-delhi-flight-ticket-price"]]
          ] },
          { head: "Official costs abroad", items: [
            ["Romanian long-stay work visa (D/AM)", "€120", ["Skuad", "https://www.skuad.io/work-permit/romania"]],
            ["Flight to Europe, one way (online examples)", "US$313–586", ["Expedia", "https://expedia.com/lp/flights/dac/ams/dhaka-to-amsterdam"]]
          ] },
          { head: "What agencies charge · taka", items: [
            ["All-in price in 2026 agency ads", "Tk 4–7 lakh", ["Reelpen", "https://www.reelpen.org/how-much-does-it-cost-to-go-to-romania/"]],
            ["What workers report paying", "Tk 7–12 lakh", ["InfoMigrants", "https://www.infomigrants.net/en/post/44251/bangladeshi-migrants-in-romania-from-regular-to-undocumented-part-1-of-2"]],
            ["Government-fixed cost for Romania (2020)", "Tk 1.65 lakh", ["TBS", "https://www.tbsnews.net/bangladesh/migration/romania-set-temporary-consular-services-dhaka-370771"]]
          ] }
        ],
        note: "Under Romania's 2026 rules, an authorised placement agency may not charge you any fee. Most of the Tk 4–12 lakh goes to middlemen." }
    ],

    /* Range chart, lakh taka (Bangladeshi prices are quoted in taka). */
    agencyRanges: [
      { label: "Italy", low: 4, high: 15, bench: [2, 2.5], benchText: "Should not exceed Tk 2–2.5 lakh", shown: "Tk 4–15 lakh", note: "Ads: Tk 4–5 lakh (seasonal). Workers told TBS they paid up to Tk 15 lakh." },
      { label: "Croatia", low: 7, high: 15, shown: "Tk 7–15 lakh", note: "Ads: Tk 7–9 lakh through an agency, Tk 10–15 lakh through brokers." },
      { label: "Serbia (on hold)", low: 6, high: 15, shown: "Tk 6–15 lakh", note: "Ads: Tk 6–9 lakh; Tk 10–15 lakh through brokers. BMET clearance is on hold." },
      { label: "Romania", low: 4, high: 12, bench: [1.65, 1.65], benchText: "Government-fixed cost Tk 1.65 lakh (2020)", shown: "Tk 4–12 lakh", note: "Ads: Tk 4–7 lakh. Workers report Tk 7–8 lakh (InfoMigrants) and Tk 10–12 lakh (TBS)." },
      { label: "Malta", low: 7, high: 8, shown: "Tk 7–8 lakh", note: "Private-agency ads. Couriers also report paying €3,500–5,000 more to agencies in Malta." }
    ],
    average: { value: 4.63, text: "Average for all destinations: Tk 4.63 lakh (BBS 2024)" },

    /* Move-in cash for a flat, euros (all four cities use the euro). */
    moveIn: [
      { label: "Berlin · room in a shared flat", value: 2600, shown: "€2,600", note: "€650 rent + up to 3 months' deposit (deposit is on cold rent, so a little less).", plan: true },
      { label: "Dublin · one-bedroom, city centre", value: 4266, shown: "€4,266", note: "€2,133 rent + deposit capped at 1 month." },
      { label: "Berlin · one-bedroom", value: 4300, shown: "€4,300", note: "€1,075 median rent + up to 3 months' cold-rent deposit." },
      { label: "Madrid · one-bedroom, city centre", value: 5188, shown: "€5,188", note: "€1,297 rent + 1-month deposit + up to 2 months' extra guarantee." },
      { label: "Amsterdam · one-bedroom", value: 6300, shown: "€6,300", note: "Rent €1,800–2,400 (bar uses €2,100) + deposit capped at 2 months: €5,400–7,200." }
    ],

    /* Legal deposit limits: [country, rule, [label,url]] */
    deposits: [
      ["Germany", "Up to 3 months' cold rent, and you may pay it in 3 instalments.", ["Rentumo (§551 BGB)", "https://rentumo.de/en/blog/security-deposit-germany-guide"]],
      ["Netherlands", "Up to 2 months' basic rent for contracts from 1 July 2023.", ["Government.nl", "https://www.government.nl/topics/housing/rented-housing/step-by-step-plan-for-tenants"]],
      ["Spain", "1 month's rent by law, plus up to 2 months' extra guarantee.", ["Spain Handbook", "https://spainhandbook.com/what-is-fianza-in-spain-deposit-rules-explained-simply/"]],
      ["Ireland", "Up to 1 month's rent, plus 1 month paid in advance (since 9 August 2021).", ["Threshold", "https://threshold.ie/advocacy-campaign/singlepeople/"]]
    ],

    /* Official fees: [route, fees in the country's currency, who usually pays, [label,url]] */
    fees: [
      ["Germany · EU Blue Card", "National visa €75 · Blue Card €100", "You", ["Find English", "https://www.findenglish.de/blog/eu-blue-card-germany-2026-requirements-salary-threshold-how-to-apply"]],
      ["Netherlands · highly skilled migrant", "IND fee €423", "Usually the employer", ["Envoy", "https://www.envoyglobal.com/news-alert/the-netherlands-immigration-application-fees-2026/"]],
      ["Sweden · work permit", "Application fee SEK 2,200", "You, online", ["Jobbatical", "https://www.jobbatical.com/blog/sweden-work-permit-guide-process-requirements"]],
      ["Ireland · General Employment Permit", "Permit €1,000 · visa €60 · residence card €300", "Permit: employer or you, never deducted from your pay", ["Citizens Information", "https://www.citizensinformation.ie/en/moving-country/working-in-ireland/employment-permits/work-permits/"]],
      ["United Kingdom · Skilled Worker", "Visa £819 · health surcharge £1,035 a year", "You; sponsor fees are the employer's", ["Find My Visa", "https://findmyvisa.co.uk/skilled-worker-visa/cost"]],
      ["Poland · work permit", "Visa about €80–135 · permit PLN 400", "Visa: you · permit: employer", ["Worksol", "https://worksol.pl/en/the-real-cost-of-hiring-a-foreign-worker-in-poland-in-2026/"]],
      ["Spain · digital nomad", "About €73 incl. TIE card €16.08; consular fee varies", "You", ["Klevvera", "https://www.klevvera.com/blog/spain-digital-nomad-visa-cost-breakdown/"]],
      ["Portugal · D8 digital nomad", "Visa €110 · residence card about €170 · show €11,040 savings", "You", ["Genki", "https://guide.genki.world/portugal-digital-nomad-visa/"]],
      ["Greece · digital nomad", "Visa €75 · residence permit €1,000", "You", ["Remote Work Europe", "https://remoteworkeurope.eu/insights/greece-digital-nomad-visa/"]],
      ["Romania · work", "D/AM visa €120", "You; agencies may not charge you", ["Skuad", "https://www.skuad.io/work-permit/romania"]],
      ["Croatia · work", "Visa €93 · VFS service BDT 4,030 · courier BDT 3,900 · permit about €116", "Visa and VFS: you · permit: employer", ["VFS Croatia", "https://visa.vfsglobal.com/bgd/en/hrv"]],
      ["Italy · Decreto Flussi", "Visa €116 · nulla osta revenue stamp €16", "Visa: you · nulla osta: employer", ["TBS", "https://www.tbsnews.net/bangladesh/migration/record-bangladeshis-hired-italy-year-800m-sent-home-706554"]],
      ["Malta · single permit", "Permit €600 · pre-departure course €250 · VFS BDT 13,935–20,900", "Permit: employer · course and VFS: you", ["Free Malta", "https://freemalta.com/hub/single-permit"]],
      ["Bulgaria · single permit", "D visa €100–120 · permit about €200", "Visa: you · permit: employer", ["Innovires", "https://www.innovires.com/en/blog/work-permit-bulgaria.html"]]
    ],

    /* Costs paid in Bangladesh, in taka. Passport fees left out on purpose. */
    bd: [
      ["IELTS Academic or General Training (UKVI: Tk 34,850)", "Tk 31,100", ["IDP", "https://ielts.idp.com/bangladesh/about/ielts-exam-fee"]],
      ["Police clearance certificate", "Tk 500", ["PCC guide", "https://policeclearance.bd/application-fees/"]],
      ["BMET welfare fee from 1 October 2026 (was Tk 3,500)", "Tk 5,500", ["TBS", "https://www.tbsnews.net/bangladesh/migrant-workers-pay-tk5500-welfare-fee-october-1550606"]],
      ["BMET insurance fee", "Tk 1,000", ["Migrantimes", "https://migrantimes.com/labour-policy/27-09-2026/bangladesh-raises-overseas-workers-welfare-fee-to-tk-5500"]],
      ["BMET smart card", "Free", ["TBS", "https://www.tbsnews.net/bangladesh/expat-ministry-scraps-bmet-clearance-card-fee-tk250-outgoing-workers-1007091"]],
      ["Medical check for agency routes (price in agency ads)", "Tk 6,000–10,000", ["Reelpen", "https://www.reelpen.org/how-much-does-it-cost-to-go-to-romania/"]],
      ["Indian visa processing, only for New Delhi embassies", "Tk 1,500", ["Wego", "https://blog.wego.com/indian-tourist-visa-for-bangladeshi-nationals/"]],
      ["Dhaka ⇄ Delhi return flight, lowest fares seen", "Tk 16,200", ["GoZayaan", "https://gozayaan.com/route/dhaka-to-delhi-flight-ticket-price"]],
      ["Notary, translation and attestation of documents", "Tk 5,000–20,000", null, "estimate"]
    ],

    /* What Bangladeshi agencies and visa sites advertise, in taka. */
    ads: [
      ["Romania", "Tk 4–7 lakh", "Ads split it as: work authorisation Tk 20,000–50,000, visa Tk 12,000–15,000, medical Tk 6,000–10,000, police Tk 500–1,000, air ticket Tk 80,000–1,20,000, rest agency fee.", ["Reelpen", "https://www.reelpen.org/how-much-does-it-cost-to-go-to-romania/"]],
      ["Croatia", "Tk 7–9 lakh", "Through an agency; Tk 10–15 lakh through brokers (dalal).", ["Probash Guide", "https://probashguide.com/croatia-visa-update-bangladesh/"]],
      ["Malta", "Tk 7–8 lakh", "Private agency; the same site claims Tk 3–4 lakh through a government channel.", ["Tips Blog BD", "https://tipsblogbd.com/malta-work-permit/"]],
      ["Italy", "Tk 4–5 lakh", "Seasonal work visa, including visa, agency fee and air ticket.", ["Kajer Visa", "https://kajervisa.com/italy-jete-koto-taka-lage/"]],
      ["Serbia", "Tk 6–9 lakh", "Work visa through an agency; Tk 10–15 lakh through brokers. BMET clearance is on hold.", ["Uzzala Store", "https://www.uzzalastore.com/cost-of-traveling-from-bangladesh-to-serbia/"]]
    ],

    /* What workers told journalists and researchers. amount is in the currency they reported. */
    accounts: [
      { amount: "Tk 15 lakh", where: "Italy", text: "Workers told TBS they spent as much as Tk 15 lakh to reach Italy, when it should not cost more than Tk 2–2.5 lakh.", src: ["TBS", "https://www.tbsnews.net/bangladesh/migration/record-bangladeshis-hired-italy-year-800m-sent-home-706554"] },
      { amount: "€16,000", where: "Italy", text: "One worker paid €16,000 for a job in Italy that did not exist. More than 1,200 people were caught in the fake-contract scheme over four years.", src: ["Hyphen, June 2026", "https://hyphenonline.com/2026/06/01/italy-visa-fraud-scheme-bangladeshis-stranded-naples-dhaka/"] },
      { amount: "Tk 7–8 lakh", where: "Romania", text: "Bangladeshi migrants told InfoMigrants they spent BDT 700,000–800,000 to get to Romania.", src: ["InfoMigrants", "https://www.infomigrants.net/en/post/44251/bangladeshi-migrants-in-romania-from-regular-to-undocumented-part-1-of-2"] },
      { amount: "€7,000", where: "Romania", text: "Construction workers recruited for Romania were charged about €7,000 each; after arrival some were passed on to other companies.", src: ["Business & Human Rights Centre", "https://www.business-humanrights.org/en/latest-news/romania-bangladeshi-workers-forced-to-travel-undocumented-from-romania-after-being-subjected-to-labour-rights-violations-incl-in-construction-industry-incl-co-comment/"] },
      { amount: "€3,500", where: "Romania", text: "A Sri Lankan worker paid €3,500 for a kitchen job in Bucharest; a Nepali worker paid about €3,600 to an informal agent.", src: ["Al Jazeera, 2023", "https://www.aljazeera.com/features/2023/12/14/conned-exploited-trapped-romanias-new-flock-of-asian-delivery-riders"] },
      { amount: "€5,000", where: "Malta", text: "A delivery courier told MaltaToday he paid €5,000 to a recruitment company just to get a Bolt job, on top of visa and permit costs.", src: ["MaltaToday", "https://www.maltatoday.com.mt/news/national/109662/asian_couriers_paying_thousands_in_commissions_to_get_malta_delivery_job"] },
      { amount: "€3,500", where: "Malta", text: "One Maltese agency charged workers €3,500 in 'admin fees' in two instalments, although licensed agencies may not charge job seekers.", src: ["MaltaToday", "https://www.maltatoday.com.mt/news/national/109662/asian_couriers_paying_thousands_in_commissions_to_get_malta_delivery_job"] },
      { amount: "€1,500", where: "Malta", text: "Bangladeshi agencies offered Maltese employers a €1,500 'gift' per worker, which experts believe workers repay from their wages.", src: ["The Shift, 2024", "https://theshiftnews.com/2024/07/19/bangladeshi-agencies-targeting-malta-for-e600-a-month-jobs/"] },
      { amount: "US$10,000", where: "Serbia", text: "More than 40 Bangladeshi workers at the Linglong tyre plant arrived with recruitment debts of up to $10,000.", src: ["Business & Human Rights Centre", "https://www.business-humanrights.org/en/latest-news/serbia-rights-groups-allege-human-trafficking-and-forced-labor-involving-bangladeshi-workers-at-linglong-tire-plant-company-did-not-comment/"] },
      { amount: "€7,000", where: "Croatia", text: "A Nepali worker paid €7,000 in total for fees, documents and travel before landing in Croatia.", src: ["InfoMigrants", "https://www.infomigrants.net/en/post/69895/nepalese-workers-fueling-croatias-economy-amid-violence-and-exploitation"] },
      { amount: "€10,000", where: "Portugal", text: "Some migrants paid close to €10,000 trying to enter Portugal on the right visa.", src: ["The Diplomat, 2024", "https://thediplomat.com/2024/10/portugals-immigration-overhaul-hits-south-asian-workers-hard/"] }
    ],

    /* Rules that make agency fees illegal or refundable. */
    rules: [
      ["Romania", "An authorised placement agency may not charge a foreign worker any commission, fee, guarantee or deposit.", ["WorkinRomania.gov.ro", "https://workinromania.gov.ro"]],
      ["Malta", "Licensed employment agencies may not charge job applicants, or deduct fees from their wages.", ["MaltaToday", "https://www.maltatoday.com.mt/news/national/109662/asian_couriers_paying_thousands_in_commissions_to_get_malta_delivery_job"]],
      ["Ireland", "An employer cannot recover employment-permit costs from your pay.", ["Recruitroo", "https://www.recruitroo.com/blog/ireland-employment-permit-costs-2026-full-breakdown"]],
      ["Bangladesh", "Government schemes publish one fixed all-in charge. Example: BOESL's 2026 Brunei circular, Tk 44,850 (unskilled) to Tk 56,350 (skilled) including welfare fee and insurance.", ["BOESL", "https://objectstorage.ap-dcc-gazipur-1.oraclecloud15.com/n/axvjbnqprylg/b/V2Ministry/o/office-boesl/2026/6/5651c1ae-8b4a-4ab9-8dce-0472670b31aa.pdf"]]
    ]
  },

  sources: [
    ["Bangladesh", [
      ["TBS – Europe job migration surges 46% in H1 2026", "https://www.tbsnews.net/world/europe-job-migration-surges-46-h1-amid-gulf-slump-1475796"],
      ["Daily Star – overseas jobs fall to five-year low", "https://www.thedailystar.net/business/economy/news/overseas-jobs-fall-five-year-low-amid-middle-east-uncertainty-4240871"],
      ["TBS – BMET clearance for Serbia, North Macedonia, Moldova", "https://www.tbsnews.net/bangladesh/visas-holders-urge-bmet-resume-manpower-clearance-serbia-north-macedonia-moldova-1552981"],
      ["TBS – BMET ends Ami Probashi clearance contract", "https://www.tbsnews.net/bangladesh/migration/manpower-bureau-discontinues-emigration-clearance-card-training-services"],
      ["Business Today – India resumes tourist visas for Bangladeshis", "https://www.businesstoday.in/amp/nri/visa/story/india-opens-tourist-visa-window-for-bangladesh-from-june-28-after-prolonged-suspension-539229-2026-06-25"],
      ["ILO – EU–Bangladesh Talent Partnership", "https://www.ilo.org/resource/news/talent-partnership-triple-win-bangladesh-eu-member-states-and-migrant"]
    ]],
    ["Non-skilled routes", [
      ["Romania Insider – WorkinRomania platform live", "https://www.romania-insider.com/platform-foreign-workers-coming-romania-and-running-aug-2026"],
      ["KPMG – Romania GEO 32/2026", "https://kpmg.com/ro/en/insights/2026/04/access-foreign-nationals-romanian-labor-market--new-rules.html"],
      ["Croatia Week – Foreigners Act 2026", "https://www.croatiaweek.com/croatia-new-foreign-workers-law-2026/"],
      ["Italian Embassy Dhaka – work visa", "https://ambdhaka.esteri.it/en/servizi-consolari-e-visti/servizi-per-il-cittadino-straniero/visti/work-visa/"],
      ["Immigrazione Bologna – Decreto Flussi 2026–2028", "https://www.immigrazionebologna.it/en/2025/10/22/flows-decree-2026-2028/"],
      ["EY – Greece Law 5275/2026", "https://www.ey.com/en_gr/technical/tax/tax-alerts/law-5275-2026-immigration-policies"],
      ["Identità – Malta pre-departure course", "https://identita.gov.mt/pre-departure-course-requirement-to-be-verified-as-from-1-march-2026/"],
      ["Fragomen – Hungary guest-worker programme ends", "https://www.fragomen.com/insights/hungary-guest-worker-program-ends.html"]
    ]],
    ["Skilled and tech routes", [
      ["Jobbatical – Germany Blue Card for IT specialists", "https://www.jobbatical.com/blog/eu-blue-card-hr-guide-it-specialists-germany-latest"],
      ["RT Partner – Blue Card minimum salary 2026", "https://www.rtpartner.de/en/immigration/blaue-karte-eu-mindestgehalt-2026/"],
      ["German Embassy Dhaka – Opportunity Card", "https://dhaka.diplo.de/bd-en/service/2685670-2685670"],
      ["Jobbatical – Netherlands thresholds 2026", "https://www.jobbatical.com/blog/netherlands-highly-skilled-migrant-salary-thresholds-2026"],
      ["Migrationsverket – Sweden salary rule", "https://www.migrationsverket.se/en/employers/news-archive-for-employers/news/2026-06-16-new-median-salary-affects-the-salary-requirement-for-work-permits.html"],
      ["Citizens Information – Ireland General Employment Permit", "https://www.citizensinformation.ie/en/moving-country/working-in-ireland/employment-permits/work-permits/"],
      ["MRCI – Ireland thresholds from 1 March 2026", "https://www.mrci.ie/2026/03/06/new-employment-permit-salary-thresholds-from-1-march-2026/"],
      ["Hunt UK Visa Sponsors – SOC 2134 going rate", "https://huntukvisasponsors.com/uk-visa-occupation-eligibility/2134-programmers-and-software-development-professionals"],
      ["Bird & Bird – Denmark 2026 thresholds", "https://www.twobirds.com/en/insights/2026/denmark/udenlandsk-arbejdskraft---nye-bel%C3%B8bsgr%C3%A6nser-under-bel%C3%B8bsordningerne-og-opdateret-positivlister"]
    ]],
    ["Costs and worker accounts", [
      ["TBS – how long it takes to recover recruitment costs (BBS 2024)", "https://www.tbsnews.net/infograph/numbers/how-long-does-it-take-migrant-worker-recover-recruitment-costs-1237726"],
      ["TBS – 52% of workers rely on brokers (BBS)", "https://www.tbsnews.net/bangladesh/migration/migration-cost-soars-52-workers-rely-brokers-go-abroad-bbs-872541"],
      ["TBS – welfare fee rises to Tk 5,500", "https://www.tbsnews.net/bangladesh/migrant-workers-pay-tk5500-welfare-fee-october-1550606"],
      ["InfoMigrants – Bangladeshi migrants in Romania", "https://www.infomigrants.net/en/post/44251/bangladeshi-migrants-in-romania-from-regular-to-undocumented-part-1-of-2"],
      ["MaltaToday – couriers pay thousands in commissions", "https://www.maltatoday.com.mt/news/national/109662/asian_couriers_paying_thousands_in_commissions_to_get_malta_delivery_job"],
      ["Al Jazeera – Romania's Asian delivery riders", "https://www.aljazeera.com/features/2023/12/14/conned-exploited-trapped-romanias-new-flock-of-asian-delivery-riders"]
    ]],
    ["Remote-work visas", [
      ["Moving to Spain – digital nomad visa 2026", "https://movingtospain.com/spain-digital-nomad-visa/"],
      ["Portugalist – D8 requirements 2026", "https://www.portugalist.com/portugal-digital-nomad-visa/"],
      ["Remote Work Europe – Croatia 2026", "https://remoteworkeurope.eu/insights/croatia-digital-nomad-visa/"],
      ["Remote Work Europe – Greece 2026", "https://remoteworkeurope.eu/insights/greece-digital-nomad-visa-2026/"],
      ["Remote Work Europe – every option compared", "https://remoteworkeurope.eu/insights/digital-nomad-visas-europe-complete-guide/"]
    ]]
  ]
};
