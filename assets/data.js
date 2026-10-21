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
    { iso: "FIN", name: "Finland", x: 6, y: 0, apply: "Online, then ID check at VFS New Delhi",
      you: { lvl: 2, route: "tech", text: "Employee permit from €1,600 a month, but a labour-market check applies. The specialist permit needs €3,937 a month." },
      nonskilled: { lvl: 1, text: "Mostly seasonal berry and farm work through specific recruiters." },
      skilled: { lvl: 4, text: "General minimum €1,600 a month; specialist and EU Blue Card €3,937 a month (2026)." },
      link: ["Migri – income requirement", "https://migri.fi/en/working-in-finland/income-requirement"] },
    { iso: "DNK", name: "Denmark", x: 4, y: 1, apply: "Dhaka (VFS)",
      you: { lvl: 1, route: "tech", text: "Pay Limit Scheme needs DKK 552,000 a year; the supplementary scheme DKK 446,000." },
      nonskilled: { lvl: 1, text: "No general route for non-skilled workers." },
      skilled: { lvl: 1, text: "DKK 552,000 a year, DKK 446,000 for advertised jobs, or a job on the Positive List." },
      link: ["New to Denmark – Fast-Track", "https://www.nyidanmark.dk/en-GB/You-want-to-apply/Work/Fast-track"] },
    { iso: "EST", name: "Estonia", x: 6, y: 1, apply: "New Delhi (Estonian Embassy)",
      you: { lvl: 2, route: "tech", text: "Tech hub, but a national quota of 1,292 permits. Pay must reach the average salary (€2,092 in 2025). Nomad visa needs €4,500 a month." },
      nonskilled: { lvl: 1, text: "Short-term work must pay the average salary; small national quota." },
      skilled: { lvl: 1, text: "Immigration quota 1,292 for 2026; salary at least the national average." },
      link: ["Estonian Interior Ministry – migration", "https://www.siseministeerium.ee/en/activities/efficient-population-management/migration"] },
    { iso: "IRL", name: "Ireland", x: 1, y: 2, apply: "Online, then by post to New Delhi (no trip)",
      you: { lvl: 3, route: "tech", text: "General Employment Permit from €36,605 a year. Experience can replace a degree. English-speaking." },
      nonskilled: { lvl: 2, text: "Permits for horticulture, meat processing and care assistants from €32,691 a year." },
      skilled: { lvl: 3, text: "From 1 March 2026: General permit €36,605; Critical Skills €40,904 with a degree, €68,911 without." },
      link: ["MRCI – 2026 thresholds", "https://www.mrci.ie/2026/03/06/new-employment-permit-salary-thresholds-from-1-march-2026/"] },
    { iso: "GBR", name: "United Kingdom", x: 2, y: 2, apply: "Dhaka (VFS)",
      you: { lvl: 1, route: "tech", text: "No personal degree needed, but developer jobs must pay the £54,700 going rate, and you need English at B2 level." },
      nonskilled: { lvl: 1, text: "Overseas recruitment of care workers closed in July 2025." },
      skilled: { lvl: 1, text: "Degree-level (RQF 6) jobs only, £41,700 or the going rate, English B2 from 8 January 2026." },
      link: ["GOV.UK – Skilled Worker visa", "https://www.gov.uk/skilled-worker-visa"] },
    { iso: "LVA", name: "Latvia", x: 6, y: 2, apply: "New Delhi (Latvian Embassy, in person)",
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
    { iso: "POL", name: "Poland", x: 5, y: 3, apply: "New Delhi (VFS Global)",
      you: { lvl: 4, route: "tech", text: "Big IT sector. The employer gets a work permit for you; fees and checks went up in 2026." },
      nonskilled: { lvl: 4, text: "Work permit plus D visa; higher fees and new refusal grounds in 2026." },
      skilled: { lvl: 4, text: "Employer-sponsored work permit; most steps now online." },
      link: ["Grant Thornton – 2026 changes", "https://grantthornton.pl/en/article/employment-of-foreign-nationals-in-poland-in-2026-key-changes-and-important-deadlines-in-immigration-regulations/"] },
    { iso: "LTU", name: "Lithuania", x: 6, y: 3, apply: "India (VFS Global; Indian X visa needed)",
      you: { lvl: 2, route: "tech", text: "Quota of 24,706 permits for 2026, down from 40,250 in 2024; the industry share ran out early." },
      nonskilled: { lvl: 2, text: "2026 quota 24,706; industry quota exhausted early." },
      skilled: { lvl: 2, text: "Quota applies to most employment permits." },
      link: ["LRT – quota exhausted", "https://www.lrt.lt/en/news-in-english/19/2415719/lithuanian-industry-exhausts-quota-for-hiring-third-country-nationals"] },
    { iso: "BEL", name: "Belgium", x: 2, y: 4, apply: "Dhaka (Belgian visa centre)",
      you: { lvl: -1, route: "none", text: "Not covered in this guide. Check the EU Immigration Portal." },
      nonskilled: { lvl: -1, text: "Not covered in this guide." },
      skilled: { lvl: -1, text: "Not covered in this guide." },
      link: ["EU Immigration Portal", "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal_en"] },
    { iso: "LUX", name: "Luxembourg", x: 3, y: 4, apply: "By courier to the embassy in New Delhi",
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
    { iso: "SVN", name: "Slovenia", x: 4, y: 6, apply: "New Delhi (Slovenian Embassy)",
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
    { iso: "BGR", name: "Bulgaria", x: 7, y: 6, apply: "New Delhi (VFS Global)",
      you: { lvl: 4, route: "farm", text: "Single permit; employers may only have 20–35% foreign staff; low wages (minimum wage about €620 a month)." },
      nonskilled: { lvl: 4, text: "Single permit with a 15-day labour-market test; 20–35% foreign-staff cap." },
      skilled: { lvl: 3, text: "Same single permit; EU Blue Card also available." },
      link: ["Bulgarian MFA – Bangladesh", "https://www.mfa.bg/en/embassyinfo/bangladesh"] },
    { iso: "BIH", name: "Bosnia & Herzegovina", x: 5, y: 7, apply: "New Delhi (embassy)",
      you: { lvl: 2, route: "farm", text: "7,427 permits for 2026; low wages; often misused as a transit route." },
      nonskilled: { lvl: 2, text: "Quota 7,427 permits for 2026." },
      skilled: { lvl: 2, text: "Quota applies." },
      link: ["Lexology – hiring in BiH", "https://www.lexology.com/library/detail.aspx?g=a122552e-d60a-4756-b99f-cbe7acbddb2f"] },
    { iso: "MNE", name: "Montenegro", x: 6, y: 7, apply: "VFS Global, Dhaka",
      you: { lvl: 2, route: "farm", text: "Summer hotel, restaurant and building jobs; €600 net minimum wage. A visiting MP raised hiring Bangladeshis in October 2026, but nothing is signed. See the Montenegro section." },
      nonskilled: { lvl: 2, text: "28,988 permits for 2026, mostly taken by Turkish, Serbian and Russian workers; 20,000+ summer workers short." },
      skilled: { lvl: 2, text: "IT and healthcare workers can get 3-year permits since January 2026, but the job market is small." },
      link: ["Government of Montenegro – visas for Bangladeshis", "https://www.gov.me/en/diplomatic-missions/embassies-and-consulates-of-montenegro/bangladesh"] },
    { iso: "MKD", name: "North Macedonia", x: 7, y: 7, apply: "—",
      you: { lvl: 0, route: "none", text: "BMET clearance on hold (September 2026)." },
      nonskilled: { lvl: 0, text: "BMET clearance on hold." },
      skilled: { lvl: 0, text: "BMET clearance on hold." },
      link: ["TBS – clearance on hold", "https://www.tbsnews.net/bangladesh/visas-holders-urge-bmet-resume-manpower-clearance-serbia-north-macedonia-moldova-1552981"] },
    { iso: "MLT", name: "Malta", x: 3, y: 8, apply: "Dhaka (VFS)",
      you: { lvl: 4, route: "farm", text: "Hospitality and general jobs through an Identità single permit plus a €250 pre-departure course. Developers can use a €30,000 fast-track. See the Malta section." },
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
    { iso: "CYP", name: "Cyprus", x: 8, y: 8, apply: "VFS Dhaka, decided in New Delhi",
      you: { lvl: 4, route: "tech", text: "Developer job at a foreign-owned company: €2,500 a month before tax and a degree or 2 years' experience. Farm and factory jobs are the backup. This is the Republic of Cyprus, not the north. See the Cyprus section." },
      nonskilled: { lvl: 3, text: "Department of Labour approval; caps on foreign staff per company. Minimum wage €1,088 a month." },
      skilled: { lvl: 4, text: "Fast-track at foreign-owned companies: €2,500 a month, a degree or 2 years' experience, no labour-market test." },
      link: ["Cyprus Mail – who can work", "https://cyprus-mail.com/2026/09/27/cyprus-labour-shortages-who-can-legally-work"] }
  ],

  /* Section A and B ranking tables (difficulty scale 1 = easiest, as in the markdown guide). */
  rankNonSkilled: [
    ["ROU", 2, "90,000 work permits for 2026. Trades on the shortage list. New official online hiring system.", "New Delhi (Romanian Embassy, eVisa appointment)"],
    ["HRV", 2, "100k+ permits a year, but few for Bangladeshis since a January 2025 crackdown (3,183 in Jan–Nov 2025). Since June 2026 you can change employer after 6 months.", "Dhaka (VFS), decided by the embassy in New Delhi"],
    ["ITA", 3, "Biggest legal European market for Bangladeshis. Yearly quota lottery (click days Jan–Feb 2027). Heavy fraud checks.", "Dhaka (Italian Embassy via VFS)"],
    ["GRC", 3, "Government-to-government seasonal farm programme (4,000 a year) through BOESL. New 2026 migration law.", "Dhaka (GVCW visa centre)"],
    ["MLT", 3, "Steady demand in hospitality, cleaning and construction. New mandatory €250 pre-departure course.", "Dhaka (VFS)"],
    ["BGR", 3, "Single permit. Employers may only have 20–35% foreign staff. Low wages.", "New Delhi (VFS Global)"],
    ["POL", 3, "Work permit plus D visa. Fees and refusal checks increased in 2026.", "New Delhi (VFS Global)"],
    ["PRT", 3.5, "Open job-seeker visa abolished in October 2025. You now need a real job contract.", "New Delhi (Portuguese Embassy)"],
    ["SVK", 3.5, "Shortage jobs (drivers, construction, factories). Stricter rules from July 2026.", "New Delhi (Slovak Embassy)"],
    ["CYP", 3.5, "Farm, factory, delivery and retail jobs. Company caps on foreign staff. The Republic of Cyprus only, not the north.", "Dhaka (VFS), decided in New Delhi"],
    ["SVN", 4, "Employers reluctant to hire Bangladeshis.", "New Delhi (Slovenian Embassy)"],
    ["LTU", 4, "Quota cut to 24,706; industry share ran out early.", "India (VFS Global)"],
    ["LVA", 4, "New quota and visa limits proposed in August 2026.", "New Delhi (Latvian Embassy)"],
    ["BIH", 4, "7,427 permits for 2026; low wages; transit-route risk.", "New Delhi (embassy)"],
    ["MNE", 4, "28,988 permits for 2026, mostly taken by Turkish, Serbian and Russian workers. €600 net minimum wage. Talks on a deal with Bangladesh (October 2026), nothing signed.", "Dhaka (VFS Global)"],
    ["CZE", 4.5, "Tiny quotas for Bangladeshis.", "New Delhi (Czech Embassy)"],
    ["SRB", "hold", "BMET clearance on hold (September 2026). Forced-labour cases reported.", "New Delhi (Serbian Embassy)"],
    ["MKD", "hold", "BMET clearance on hold (September 2026).", "—"],
    ["HUN", "closed", "Guest-worker permit ended on 6 June 2026.", "—"]
  ],

  rankSkilled: [
    ["DEU", 3, "Opportunity Card (job-search visa), or a job offer plus a recognised qualification. EU Blue Card from €50,700 a year (€45,934 in shortage jobs).", "Dhaka (German Embassy, online portal)"],
    ["FIN", 3, "General minimum €1,600 a month. Specialist and Blue Card €3,937 a month.", "Online, then ID check at VFS New Delhi"],
    ["CYP", 3, "Foreign-owned (often tech) companies: €2,500 a month before tax, a degree or 2 years' experience, no labour-market test. EU Blue Card €43,632 a year.", "Dhaka (VFS), decided in New Delhi"],
    ["AUT", 3.5, "Red-White-Red Card: 55 of 90 points for shortage jobs, collective-agreement pay.", "New Delhi (Austrian Embassy)"],
    ["IRL", 3.5, "General permit €36,605. Critical Skills €40,904 with a degree.", "Online, then by post to New Delhi (no trip)"],
    ["ESP", 4, "Employer authorisation. No labour-market test for hard-to-fill jobs.", "Dhaka (Spanish Embassy / BLS)"],
    ["FRA", 4, "Talent permits (reference salary €39,582) or shortage-list jobs. French helps.", "Dhaka (French Embassy)"],
    ["NLD", 4, "Recognised-sponsor employer; €5,942 a month (30+) or €4,357 (under 30).", "Dhaka (Dutch Embassy)"],
    ["SWE", 4, "At least SEK 34,470 a month (90% of the median wage, from June 2026).", "Dhaka (Swedish Embassy)"],
    ["DNK", 4.5, "DKK 552,000 a year, DKK 446,000 (supplementary), or a Positive List job.", "Dhaka (VFS)"],
    ["NOR", 4.5, "Degree or trade certificate; NOK 545,400+ a year for degree-level jobs.", "Dhaka (VFS, via Danish Embassy)"],
    ["GBR", 4.5, "Degree-level (RQF 6) job, £41,700 or the going rate, English B2.", "Dhaka (VFS)"],
    ["EST", 4.5, "Pay at least the average salary; national quota 1,292 a year.", "New Delhi (Estonian Embassy)"],
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
      ["Visa files go through VFS Global in Dhaka and are decided by the Croatian Embassy in New Delhi.", ["VFS Croatia–Bangladesh", "https://visa.vfsglobal.com/bgd/en/hrv"]],
      ["In January 2025 Croatia said it would stop issuing work permits to Bangladeshis, after 8,000 of 12,400 people given permits and visas in 2024 never arrived. Expect strict checks.", ["TBS", "https://www.tbsnews.net/bangladesh/croatia-stop-issuing-work-permits-bangladeshi-workers-embassy-says-1054731"]]
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
      ["No embassy in Bangladesh. Since 1 November 2025 D visas are lodged at VFS Global in New Delhi instead of at the embassy.", ["VFS Global", "https://www.vfsglobal.com/en/PDF/media-releases/2025/MR_Bulgaria_D_visa_services_rollout_in_India_Oct_2025.pdf"]]
    ],
    POL: [
      ["2026: permit fees up to PLN 400, new refusal grounds, most steps online.", ["Grant Thornton", "https://grantthornton.pl/en/article/employment-of-foreign-nationals-in-poland-in-2026-key-changes-and-important-deadlines-in-immigration-regulations/"]],
      ["Sweden's embassy in Dhaka stopped handling Polish Schengen visas after 15 April 2026.", ["Swedish Embassy notice", "https://www.swedenabroad.se/en/embassies/bangladesh-dhaka/current/news/notice-visa-application-poland/"]],
      ["The Polish Embassy in New Delhi covers Bangladesh and takes D visas through visa centres in India. We found no Polish visa centre in Dhaka.", ["gov.pl – Embassy in New Delhi", "https://www.gov.pl/web/india/d-type-national-visa"]]
    ],
    PRT: [
      ["Law 61/2025 (23 October 2025) abolished the open job-seeker visa; the replacement is for highly qualified people only.", ["Fragomen", "https://www.fragomen.com/insights/portugal-significant-immigration-reforms-in-effect.html"]],
      ["D1 work visas for Bangladeshis are handled by the Embassy of Portugal in New Delhi; police certificates must be legalised first.", ["Embassy of Portugal, New Delhi", "https://novadeli.embaixadaportugal.mne.gov.pt/en/"]]
    ],
    SVK: [
      ["Since 15 July 2026 you must stay in the job your permit was issued for.", ["Envoy", "https://www.envoyglobal.com/news-alert/slovakia-implements-foreign-worker-employment-changes/"]]
    ],
    CYP: [
      ["Bangladeshis are among the main nationalities in 26,710 general-employment permits (August 2026).", ["Cyprus Mail", "https://cyprus-mail.com/2026/09/27/cyprus-labour-shortages-who-can-legally-work"]],
      ["Apply for the visa at VFS Global in Dhaka; the Cyprus High Commission in New Delhi decides.", ["Visa Bangla", "https://visabangla.com/travel/cyprus.html"]],
      ["Only the Republic of Cyprus (the Greek-Cypriot south) is in the EU. Visas for Northern Cyprus, sold as a way into Europe, are a trap; details in the Cyprus section.", ["TBS", "https://www.tbsnews.net/features/panorama/how-bangladeshi-migrants-end-cyprus-450078"]]
    ],
    MNE: [
      ["2026 quota: 28,988 permits (21,668 jobs, 2,320 seasonal, 5,000 reserve).", ["Government of Montenegro", "https://www.gov.me/en/article/press-release-from-the-108th-cabinet-session"]],
      ["Bangladeshis can apply for the visa at VFS Global in Dhaka.", ["Government of Montenegro", "https://www.gov.me/en/diplomatic-missions/embassies-and-consulates-of-montenegro/bangladesh"]],
      ["On 5 October 2026 a visiting Montenegrin MP said the country needs 50,000+ workers a year and is open to a government deal with Bangladesh. Nothing is signed; details in the Montenegro section.", ["TBS", "https://www.tbsnews.net/foreign-policy/dhaka-podgorica-discuss-trade-investment-labour-cooperation-1563691"]]
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
      ["Apply online, then prove your identity at VFS Global in New Delhi. VFS India also verifies Bangladeshi documents.", ["Finland abroad – Bangladesh", "https://finlandabroad.fi/web/bgd/residence-permits-to-finland"]]
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
      ["Immigration quota 1,292 for 2026; short-term work must pay the average salary.", ["Estonian Interior Ministry", "https://www.siseministeerium.ee/en/activities/efficient-population-management/migration"]],
      ["Apply for the D visa at the Estonian Embassy in New Delhi; embassies in Dhaka that issue some Estonian short-stay visas cannot take D visas.", ["Estonian Embassy New Delhi", "https://newdelhi.mfa.ee/for-bangladesh-nepal-sri-lanka-citizens/"]]
    ],
    CYP: [
      ["Foreign-owned companies (tech, shipping, pharma) can hire non-EU staff on a fast-track: €2,500 a month before tax, a degree or 2 years' relevant experience, and a contract of at least 2 years. No labour-market test.", ["Zeno Legal", "https://www.zenolegal.com/resources/cyprus-work-permit-non-eu-employer-sponsorship-2026"]],
      ["EU Blue Card since July 2025: €43,632 a year; IT staff can show 3 years' experience in the last 7 instead of a degree.", ["Rightax", "https://rightax.com.cy/cyprus-eu-blue-card-guide/"]]
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
    { label: "Montenegro", value: 28988, shown: "28,988", note: "21,668 employment + 2,320 seasonal + 5,000 reserve permits." },
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
    { date: "24 Sep", where: "Bangladesh", text: "BMET clearance for Serbia, North Macedonia and Moldova on hold.", kind: "closed" },
    { date: "5 Oct", where: "Montenegro", text: "A visiting MP says Montenegro needs 50,000+ workers a year and is open to a deal with Bangladesh. Nothing signed yet.", kind: "mixed" }
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
    { name: "Keepmeposted", url: "https://keepmeposted.com.mt/", type: "country", for: ["you", "skilled"], where: "Malta", text: "Popular Maltese job board for iGaming, tech and office jobs." },
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
    { name: "Employment Agency of Montenegro", url: "https://www.zzzcg.me/", type: "country", for: ["nonskilled"], where: "Montenegro", text: "Official vacancies. Employers advertise here before they may hire a foreigner." },
    { name: "Zaposli.me", url: "https://zaposli.me/oglasi-za-posao/crna-gora", type: "country", for: ["nonskilled"], where: "Montenegro", text: "Montenegro's biggest job board; hotels hire here for the summer. Mostly in Montenegrin." },
    { name: "Ergodotisi", url: "https://www.ergodotisi.com/", type: "country", for: ["nonskilled", "skilled"], where: "Cyprus", text: "Cyprus's best-known job site, in Greek and English." },
    { name: "CyprusWork", url: "https://www.cypruswork.com/", type: "country", for: ["you", "skilled"], where: "Cyprus", text: "English-language job board with vacancies from over 1,000 recruiters." },
    { name: "MyJob.mu", url: "https://www.myjob.mu/", type: "country", for: ["you", "nonskilled", "skilled"], where: "Mauritius", text: "Mauritius's biggest job site, with IT, hotel and factory jobs." },
    { name: "Mauritius Jobs (government)", url: "https://mauritiusjobs.govmu.org/", type: "country", for: ["nonskilled", "skilled"], where: "Mauritius", text: "Official portal with local and overseas vacancies from registered employers." },
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
    ["Northern Cyprus", "Not in the EU and recognised only by Turkey. Agents sell its student visas as a back door to Europe; Bangladeshis who cross to the south and claim asylum are almost always refused (3% of claims in the EU succeeded in 2025).", ["EUAA", "https://www.euaa.europa.eu/latest-asylum-trends-annual-analysis/applications"]],
    ["Boat and Balkan routes", "97,832 Bangladeshis entered Europe irregularly in 2020–2024 (IOM), and many died. The EU's new migration pact makes legal status afterwards harder.", ["Bonik Barta", "https://en.bonikbarta.com/bangladesh/VQHz2VqTzKVHu8Hj"]]
  ],

  /* ---------- Where you apply: Dhaka or India, checked 21 October 2026 ----------
     group: dhaka (in person in Dhaka) | online (online, by post or by courier, no visit)
            | india (you must go to India) | closed (not open to you now).
     only: true = not covered elsewhere in this guide. src = [[label, url], ...] */
  where: {
    kpis: [
      { value: "20", label: "countries take your work-visa application without an India trip: in Dhaka, online or by post", src: ["List below", "#where-lists"] },
      { value: "13", label: "countries need a trip to India, almost all to New Delhi, often for an in-person appointment", src: ["List below", "#where-lists"] },
      { value: "Tk 17,700", label: "plus a hotel for the cheapest India trip: Indian visa processing and a Dhaka ⇄ Delhi return flight", src: ["Official costs", "#diy"] }
    ],
    rows: [
      { iso: "BEL", name: "Belgium", group: "dhaka", only: true, place: "Belgian visa centre, Dhaka", how: "Book at the Belgian Visa Application Centre in Dhaka, open since 16 November 2025. D-visa handling fee €250.", src: [["Belgium in India", "https://india.diplomatie.belgium.be/en/travel-belgium/visa-belgium/visa-belgium-if-you-live-bangladesh"]] },
      { iso: "HRV", name: "Croatia", group: "dhaka", place: "VFS Global, Banani", how: "VFS Dhaka sends your file to the Croatian Embassy in New Delhi, which decides. The honorary consulate in Dhaka does the identity check.", note: "Few permits for Bangladeshis since a January 2025 crackdown.", src: [["VFS Croatia–Bangladesh", "https://visa.vfsglobal.com/bgd/en/hrv"], ["TBS", "https://www.tbsnews.net/bangladesh/croatia-stop-issuing-work-permits-bangladeshi-workers-embassy-says-1054731"]] },
      { iso: "CYP", name: "Cyprus", group: "dhaka", place: "VFS Global, Gulshan", how: "VFS Dhaka sends your file to the Cyprus High Commission in New Delhi, which decides.", note: "Based on one Bangladeshi visa guide; check with VFS before you plan any Delhi trip.", src: [["Visa Bangla", "https://visabangla.com/travel/cyprus.html"]] },
      { iso: "DNK", name: "Denmark", group: "dhaka", place: "Online, then VFS Dhaka", how: "Apply online, then give your fingerprints and photo at VFS Global in Dhaka.", src: [["Embassy of Denmark", "https://bangladesh.um.dk/en/news/important-notice-vfs-closed-for-bangladesh-national-election"]] },
      { iso: "FRA", name: "France", group: "dhaka", place: "VFS Global, Dhaka", how: "Long-stay visas are lodged at VFS for the French Embassy in Dhaka.", src: [["France-Visas", "https://france-visas.gouv.fr/en/bangladesh"]] },
      { iso: "DEU", name: "Germany", group: "dhaka", place: "German Embassy, Dhaka", how: "Book through the embassy's own online system; the embassy in Dhaka decides.", src: [["German Mission Dhaka", "https://dhaka.diplo.de/bd-en/service/2346500-2346500"]] },
      { iso: "GRC", name: "Greece", group: "dhaka", place: "GVCW visa centre, Dhaka", how: "GVCW sends your file to the Greek Embassy in New Delhi, which decides. Courier Tk 10,200.", src: [["GVCW Bangladesh", "https://bd-gr.gvcworld.eu/en/visa-info-long-term-national-d-visa"]] },
      { iso: "ITA", name: "Italy", group: "dhaka", place: "VFS Global, Dhaka", how: "Apply with your nulla osta; the Italian Embassy in Dhaka decides.", src: [["VFS Italy–Bangladesh", "https://visa.vfsglobal.com/one-pager/italy/bangladesh/english/"]] },
      { iso: "MLT", name: "Malta", group: "dhaka", place: "VFS Global, Dhaka", how: "Book only after Identità's approval-in-principle letter arrives, and apply within 60 days of it.", src: [["VFS Malta–Bangladesh", "https://www.vfsglobal.com/one-pager/malta-extended-services/bangladesh/english/index.html"]] },
      { iso: "MNE", name: "Montenegro", group: "dhaka", place: "VFS Global, Dhaka", how: "Montenegrin D visas are handled at VFS Global in Dhaka.", src: [["Government of Montenegro", "https://www.gov.me/en/diplomatic-missions/embassies-and-consulates-of-montenegro/bangladesh"]] },
      { iso: "NLD", name: "Netherlands", group: "dhaka", place: "Dutch Embassy, Dhaka", how: "After the IND approves your permit, book the embassy online within 3 months to get the MVV visa sticker.", src: [["Netherlands Worldwide", "https://www.netherlandsworldwide.nl/visa-the-netherlands/mvv-long-stay/apply-bangladesh"]] },
      { iso: "NOR", name: "Norway", group: "dhaka", place: "VFS Global, Dhaka", how: "Apply online, then hand in your papers at VFS Dhaka; the Danish Embassy handles Norway's cases.", src: [["Norwegian Embassy", "https://www.norway.no/en/bangladesh/services-info/visitors-visa-res-permit/res-permit/"]] },
      { iso: "ESP", name: "Spain", group: "dhaka", place: "BLS International, Dhaka", how: "Lodge the work and residence visa at BLS for the Spanish Embassy in Dhaka.", src: [["BLS Spain Dhaka", "https://bgd.blsspainvisa.com/assets/pdf/RESIDENCE-AND-WORK-VISA-TRA.pdf"]] },
      { iso: "SWE", name: "Sweden", group: "dhaka", place: "Online, then VFS Dhaka", how: "Apply online to the Migration Agency, then give your fingerprints and photo at VFS Global in Dhaka.", src: [["VFS Sweden–Bangladesh", "https://visa.vfsglobal.com/one-pager/sweden/bangladesh/english/index.html"]] },
      { iso: "CHE", name: "Switzerland", group: "dhaka", place: "Swiss Embassy, Dhaka", how: "Work entry visas go to the Swiss Embassy in Gulshan. Book early: appointments are scarce.", src: [["Swiss government", "https://www.bundesreisezentrale.admin.ch/countries/bangladesh/en/home/visa/entry-ch/work-permits/where-to-apply-work-permits.html"]] },
      { iso: "GBR", name: "United Kingdom", group: "dhaka", place: "Online, then VFS Bangladesh", how: "Apply online on GOV.UK, then give your biometrics at a VFS centre in Bangladesh.", src: [["GOV.UK", "https://www.gov.uk/find-a-visa-application-centre"]] },

      { iso: "IRL", name: "Ireland", group: "online", place: "Online, then by post", how: "Apply online, then post your papers and passport to the Irish Embassy in New Delhi, or use an agent at VFS Kolkata. Bangladeshis give no biometrics.", src: [["Ireland.ie", "https://www.ireland.ie/en/india/newdelhi/services/visas/visas-for-ireland/"]] },
      { iso: "LUX", name: "Luxembourg", group: "online", only: true, place: "By courier to New Delhi", how: "Send the D-visa application to the Luxembourg Embassy in New Delhi by prepaid courier. The procedure changed on 1 October 2026.", src: [["Luxembourg Embassy New Delhi", "https://newdelhi.mae.lu/en/service_citoyens/visa-immigration/long-term-national-visa.html"]] },
      { iso: "MUS", name: "Mauritius", group: "online", place: "Online, by the employer", how: "Your employer applies for the permit in Mauritius; you travel after it is approved.", src: [["Mauritius labour ministry", "https://labour.govmu.org/Documents/A%20GUIDE%20FOR%20MIGRANT%20WORKERS%202019.PDF"]] },
      { iso: "NZL", name: "New Zealand", group: "online", place: "Online", how: "Apply online. The medical check is done at IOM in Dhaka.", src: [["IOM Bangladesh", "https://bangladesh.iom.int/new-zealand-all-types-visa-applicants"]] },

      { iso: "AUT", name: "Austria", group: "india", place: "Austrian Embassy, New Delhi", how: "The embassy in New Delhi covers Bangladesh; Austria has no mission in Dhaka.", src: [["European Commission", "https://intellectual-property-helpdesk.ec.europa.eu/organisations/austrian-embassy-new-delhi_en"], ["Daily Observer", "https://observerbd.com/news/499606"]] },
      { iso: "BIH", name: "Bosnia & Herzegovina", group: "india", place: "BiH Embassy, New Delhi", how: "The embassy in New Delhi covers Bangladesh and sometimes holds consular camps in Dhaka.", src: [["BSS", "https://www.bssnews.net/news/262769"]] },
      { iso: "BGR", name: "Bulgaria", group: "india", place: "VFS Global, New Delhi", how: "Since 1 November 2025 D visas are lodged at VFS in New Delhi instead of at the embassy.", src: [["Bulgarian MFA", "https://www.mfa.bg/en/embassyinfo/bangladesh"], ["VFS Global", "https://www.vfsglobal.com/en/PDF/media-releases/2025/MR_Bulgaria_D_visa_services_rollout_in_India_Oct_2025.pdf"]] },
      { iso: "CZE", name: "Czech Republic", group: "india", place: "Czech Embassy, New Delhi", how: "Apply in person after booking in the embassy's system. Places for Bangladeshis are very few.", src: [["Czech Embassy New Delhi", "https://mzv.gov.cz/newdelhi/en/ko/visa_information/long_term_visa_long_term_residence/index.html"]] },
      { iso: "EST", name: "Estonia", group: "india", place: "Estonian Embassy, New Delhi", how: "D visas cannot be lodged at the embassies in Dhaka that issue some Estonian short-stay visas.", src: [["Estonian Embassy New Delhi", "https://newdelhi.mfa.ee/for-bangladesh-nepal-sri-lanka-citizens/"]] },
      { iso: "FIN", name: "Finland", group: "india", place: "Online, then VFS New Delhi", how: "Apply online, then prove your identity at VFS Global in New Delhi. VFS India verifies Bangladeshi documents.", src: [["Finland abroad – Bangladesh", "https://finlandabroad.fi/web/bgd/residence-permits-to-finland"]] },
      { iso: "LVA", name: "Latvia", group: "india", place: "Latvian Embassy, New Delhi", how: "Apply in person, booking only at pieraksts.mfa.gov.lv/en/india.", src: [["Latvian MFA", "https://www2.mfa.gov.lv/en/newdelhi/consular-section/applying-for-a-long-stay-visa"]] },
      { iso: "LTU", name: "Lithuania", group: "india", place: "VFS Global, India", how: "Apply at a VFS centre in India. You need an Indian double-entry X visa first.", src: [["Lithuanian MFA", "https://in.mfa.lt/en/coming-to-lithuania/visas/visa-authority-and-visa-application-centers/114"]] },
      { iso: "POL", name: "Poland", group: "india", place: "VFS Global, New Delhi", how: "The Polish Embassy in New Delhi covers Bangladesh and takes D visas through visa centres in India.", note: "Some guides say Dhaka, but we found no Polish visa centre there.", src: [["gov.pl – Embassy in New Delhi", "https://www.gov.pl/web/india/d-type-national-visa"]] },
      { iso: "PRT", name: "Portugal", group: "india", place: "Portuguese Embassy (VFS), New Delhi", how: "VFS accepts you only with an Indian double-entry X visa, which allows up to 15 days in India.", src: [["Portuguese Embassy New Delhi", "https://novadeli.embaixadaportugal.mne.gov.pt/en/consular-section/visas"]] },
      { iso: "ROU", name: "Romania", group: "india", place: "Romanian Embassy, New Delhi", how: "Your appointment and consular interview are scheduled by your work-permit date and your eVisa application date.", src: [["Romanian Embassy New Delhi", "https://newdelhi.mae.ro/en/local-news/1202"]] },
      { iso: "SVK", name: "Slovakia", group: "india", place: "Slovak Embassy, New Delhi", how: "Apply in person; appointments by e-mail (cons.delhi@mzv.sk). Appointments for low- and medium-skilled work visas were suspended in 2024.", src: [["Slovak Embassy New Delhi", "https://www.mzv.sk/en/web/dilli-en/services/national-visa"]] },
      { iso: "SVN", name: "Slovenia", group: "india", place: "Slovenian Embassy, New Delhi", how: "The embassy in New Delhi covers Bangladesh.", src: [["Government of Slovenia", "https://www.gov.si/en/representations/"]] },

      { iso: "HUN", name: "Hungary", group: "closed", place: "Closed", how: "Guest-worker permits closed to new applications since 6 June 2026.", src: [["Fragomen", "https://www.fragomen.com/insights/hungary-guest-worker-program-ends.html"]] },
      { iso: "MDA", name: "Moldova", group: "closed", place: "On hold", how: "BMET clearance on hold (September 2026).", src: [["TBS", "https://www.tbsnews.net/bangladesh/visas-holders-urge-bmet-resume-manpower-clearance-serbia-north-macedonia-moldova-1552981"]] },
      { iso: "MKD", name: "North Macedonia", group: "closed", place: "On hold", how: "BMET clearance on hold (September 2026).", src: [["TBS", "https://www.tbsnews.net/bangladesh/visas-holders-urge-bmet-resume-manpower-clearance-serbia-north-macedonia-moldova-1552981"]] },
      { iso: "SRB", name: "Serbia", group: "closed", place: "On hold · Serbian Embassy, New Delhi", how: "BMET clearance on hold (September 2026). When it reopens, the visa is handled in New Delhi.", src: [["Welcome to Serbia", "https://welcometoserbia.gov.rs/help"]] }
    ]
  },

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
          { head: "In Germany · euros", total: "€2,094–3,694", items: [
            ["National visa €75 + VFS service charge €19.13", "€94.13", ["German Mission Dhaka", "https://dhaka.diplo.de/bd-en/service/2346500-2346500"]],
            ["EU Blue Card, issued after you arrive", "€100", ["Find English", "https://www.findenglish.de/blog/eu-blue-card-germany-2026-requirements-salary-threshold-how-to-apply"]],
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
      { label: "Croatia", low: 7, high: 15, bench: [0.4125, 0.4125], benchText: "BOESL fixed cost for skilled workers Tk 41,250 (2022)", shown: "Tk 7–15 lakh", note: "Ads: Tk 7–9 lakh through an agency, Tk 10–15 lakh through brokers." },
      { label: "Serbia (on hold)", low: 6, high: 15, shown: "Tk 6–15 lakh", note: "Ads: Tk 6–9 lakh; Tk 10–15 lakh through brokers. The welfare minister said a syndicate took about Tk 8 lakh each. BMET clearance is on hold." },
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
      { amount: "€10,000", where: "Portugal", text: "Some migrants paid close to €10,000 trying to enter Portugal on the right visa.", src: ["The Diplomat, 2024", "https://thediplomat.com/2024/10/portugals-immigration-overhaul-hits-south-asian-workers-hard/"] },
      { amount: "Tk 8 lakh", where: "Serbia", text: "The expatriates' welfare minister said a syndicate of travel agencies took about Tk 8 lakh each from hundreds of young men for Serbian work visas.", src: ["tob.news", "https://tob.news/the-serbian-work-visa-dilemma/"] },
      { amount: "Tk 10 lakh", where: "Russia", text: "Men who paid agents around Tk 10 lakh each for construction jobs were sent to the front line instead.", src: ["Bangladesh Pratidin, Oct 2026", "https://en.bd-pratidin.com/national/2026/10/15/71889"] },
      { amount: "NZ$15,000–40,000", where: "New Zealand", text: "115 Bangladeshi and Indian workers paid agents this much and arrived on work visas to find no jobs (2023).", src: ["TBS", "https://www.tbsnews.net/node/686434"] },
      { amount: "US$2,300", where: "Mauritius", text: "A Bangladeshi garment worker borrowed this to pay his agent. In February 2025 three clothing brands repaid nearly US$390,000 in recruitment fees to 637 Bangladeshi workers at his factory.", src: ["Transparentem", "https://transparentem.org/report/mauritius-disclosure/"] }
    ],

    /* Rules that make agency fees illegal or refundable. */
    rules: [
      ["Romania", "An authorised placement agency may not charge a foreign worker any commission, fee, guarantee or deposit.", ["WorkinRomania.gov.ro", "https://workinromania.gov.ro"]],
      ["Malta", "Licensed employment agencies may not charge job applicants, or deduct fees from their wages.", ["MaltaToday", "https://www.maltatoday.com.mt/news/national/109662/asian_couriers_paying_thousands_in_commissions_to_get_malta_delivery_job"]],
      ["Ireland", "An employer cannot recover employment-permit costs from your pay.", ["Recruitroo", "https://www.recruitroo.com/blog/ireland-employment-permit-costs-2026-full-breakdown"]],
      ["New Zealand", "Employers may not take money for a job, and must pay all recruitment costs at home and abroad.", ["Employment NZ", "https://www.employment.govt.nz/news-and-updates/auckland-company-charged-migrant-worker-almost-45000-for-his-job"]]
    ],

    /* What the government recruiter (BOESL) charges: one fixed all-in price.
       [destination, job, price in taka, what it covers, [label,url]] */
    fixed: [
      ["Croatia, Mauritius", "Skilled workers (2022 revision)", "Tk 41,250", "Service charge, welfare fee, pre-exit processing and training, insurance and smart card. Employers mostly pay the airfare.", ["Dhaka Tribune", "https://www.dhakatribune.com/business/279798/boesl-revises-migration-cost-for-9-countries"]],
      ["Bulgaria", "Garment workers, skilled (2022 revision)", "Tk 52,850", "Same items as above.", ["Dhaka Tribune", "https://www.dhakatribune.com/business/279798/boesl-revises-migration-cost-for-9-countries"]],
      ["Romania", "Government-fixed cost (2020)", "Tk 1.65 lakh", "All-in cost set when Romania opened to Bangladeshi workers.", ["TBS", "https://www.tbsnews.net/bangladesh/migration/romania-set-temporary-consular-services-dhaka-370771"]],
      ["Brunei (outside Europe)", "2026 circular", "Tk 44,850–56,350", "Unskilled to skilled, including welfare fee and insurance. Shows what a published government price looks like.", ["BOESL", "https://objectstorage.ap-dcc-gazipur-1.oraclecloud15.com/n/axvjbnqprylg/b/V2Ministry/o/office-boesl/2026/6/5651c1ae-8b4a-4ab9-8dce-0472670b31aa.pdf"]]
    ]
  },

  /* ---------- Official cost if you do it yourself, checked 18 October 2026 ----------
     With a real job offer and no agent: only government fees, compulsory
     visa-centre charges and your own documents. Amounts are in the currency
     each fee is charged in; nothing is converted. "you" is what the worker
     pays; "employer" is the employer's own permit or approval fee. */
  diy: {
    kpis: [
      { value: "Tk 12,000–27,000", label: "what everyone pays in Bangladesh: police clearance, BMET clearance and getting documents attested", src: ["TBS", "https://www.tbsnews.net/bangladesh/migrant-workers-pay-tk5500-welfare-fee-october-1550606"] },
      { value: "16 of 21", label: "euro countries where your own official fees abroad stay under €400", src: ["Table below", "#diy-table"] },
      { value: "Tk 4–15 lakh", label: "what Bangladeshis report paying agencies for the same visas", src: ["Agency prices", "#agency"] }
    ],

    /* Paid in Bangladesh, whatever the country. Same shape as costs.plans. */
    bd: { letter: "BD", title: "Paid in Bangladesh, whatever the country", tag: "Everyone",
      groups: [
        { head: "Always · taka", total: "Tk 12,000–27,000", items: [
          ["Police clearance certificate", "Tk 500", ["PCC guide", "https://policeclearance.bd/application-fees/"]],
          ["BMET clearance: welfare fee Tk 5,500 + insurance Tk 1,000; smart card free", "Tk 6,500", ["TBS", "https://www.tbsnews.net/bangladesh/migrant-workers-pay-tk5500-welfare-fee-october-1550606"]],
          ["Notary, translation and attestation of your documents", "Tk 5,000–20,000", null, "estimate"]
        ] },
        { head: "Only if the embassy is in New Delhi · taka", total: "Tk 17,700 + hotel", items: [
          ["Indian visa processing (the visa itself is free)", "Tk 1,500", ["Wego", "https://blog.wego.com/indian-tourist-visa-for-bangladeshi-nationals/"]],
          ["Dhaka ⇄ Delhi return flight, lowest fares seen", "Tk 16,200", ["GoZayaan", "https://gozayaan.com/route/dhaka-to-delhi-flight-ticket-price"]]
        ] },
        { head: "Only where a country asks for it", items: [
          ["IELTS (UK, New Zealand residence, many skilled jobs)", "Tk 31,100", ["IDP", "https://ielts.idp.com/bangladesh/about/ielts-exam-fee"]],
          ["UK tuberculosis test at an approved clinic, paid in taka", "US$70", ["GOV.UK", "https://www.gov.uk/government/publications/tuberculosis-test-for-a-uk-visa-clinics-in-bangladesh/tuberculosis-testing-in-bangladesh"]],
          ["New Zealand medical at IOM Dhaka", "Tk 10,100", ["IOM Bangladesh", "https://bangladesh.iom.int/new-zealand-all-types-visa-applicants"]]
        ] }
      ],
      note: "BMET clearance is required even when you find the job yourself. Ask BMET which papers it wants: employers' demand letters often need attestation by the Bangladesh embassy in that country." },

    /* Your official fees abroad in euro countries (low–high, euros). Charges
       paid in taka at a visa centre are in the note, not in the bar. */
    chart: [
      { label: "Montenegro", low: 0, high: 67, shown: "€0–67", note: "The employer files the €67 permit. You also pay VFS Tk 4,300 + courier Tk 7,735 and a visa fee." },
      { label: "Croatia", low: 93, high: 93, shown: "€93", note: "Visa. Plus VFS Tk 4,030 + courier Tk 3,900; the employer pays the permit (about €116)." },
      { label: "Slovenia", low: 82, high: 114, shown: "€82–114", note: "€70 if the employer applies in Slovenia, €102 at the embassy; card €12." },
      { label: "Bulgaria", low: 100, high: 120, shown: "€100–120", note: "D visa. The employer pays the single permit (about €200–250)." },
      { label: "Romania", low: 120, high: 120, shown: "€120", note: "D/AM visa. The employer pays the work permit (about €100)." },
      { label: "Poland", low: 80, high: 135, shown: "€80–135", note: "D visa, plus a VFS fee. The employer pays the PLN 400 permit." },
      { label: "Cyprus", low: 70, high: 140, shown: "€70–140", note: "Entry and residence permit €70; first entry in the Aliens' Register €70." },
      { label: "Germany", low: 194, high: 194, shown: "€194", note: "Visa €75 + VFS €19.13 + EU Blue Card €100." },
      { label: "Austria", low: 180, high: 218, shown: "€180–218", note: "Red-White-Red Card €218; older guides say €160 + €20 card." },
      { label: "Greece", low: 135, high: 240, shown: "€135–240", note: "Visa €75 or €180 + contract attestation €30 + GVCW fee €30; courier Tk 10,200. The residence-permit fee in Greece was not found." },
      { label: "Italy", low: 232, high: 242, shown: "€232–242", note: "Visa €116 + residence permit kit €116–126. Plus VFS Tk 2,850." },
      { label: "Estonia", low: 120, high: 280, shown: "€120–280", note: "D visa €120 (the employer registers the job, €130), or a residence permit €280." },
      { label: "Lithuania", low: 120, high: 285, shown: "€120–285", note: "D visa €120–140, or a residence permit €160 + VFS €125." },
      { label: "Slovakia", low: 264, high: 340, shown: "€264–340", note: "Residence application €250 + visa €14–90 (2024 fee schedule)." },
      { label: "Latvia", low: 250, high: 370, shown: "€250–370", note: "D visa €90 + residence permit €160 (€280 fast)." },
      { label: "Portugal", low: 296, high: 397, shown: "€296–397", note: "D visa €110 (+ VFS about €40) + AIMA residence permit €186–247." },
      { label: "Netherlands", low: 0, high: 423, shown: "€0–423", note: "The employer usually pays the €423 IND fee, which covers visa and permit." },
      { label: "France", low: 399, high: 449, shown: "€399–449", note: "Visa €99 + residence validation €300 (+ €50 stamp, per one source)." },
      { label: "Finland", low: 530, high: 750, shown: "€530–750", note: "Online first permit: €750 for most workers, €530 for specialists and Blue Card." },
      { label: "Malta", low: 250, high: 850, shown: "€250–850", note: "Pre-departure course €250; the €600 single permit is paid online by the employer or by you. Plus VFS Tk 13,935–20,900." },
      { label: "Ireland", low: 360, high: 1360, shown: "€360–1,360", note: "Visa €60 + residence card €300; the €1,000 permit is the employer's or yours, never deducted from pay." }
    ],

    /* Countries whose fees are in another currency, or not fully known. */
    other: [
      { label: "United Kingdom", shown: "£1,854–3,924", note: "Visa £819 + health surcharge £1,035 a year (1–3 years). Plus TB test US$70 and an English test." },
      { label: "Sweden", shown: "SEK 2,200", note: "Online application; the card is included." },
      { label: "Denmark", shown: "DKK 6,810", note: "Plus the VFS service fee in Dhaka." },
      { label: "Norway", shown: "NOK 6,300", note: "Plus a VFS service fee in taka equal to €21.42." },
      { label: "Switzerland", shown: "CHF 180–250", note: "Visa about CHF 80–150 + commune registration about CHF 100; the employer pays the cantonal permit." },
      { label: "Czech Republic", shown: "CZK 7,500", note: "Employee Card CZK 5,000 at the embassy + card CZK 2,500 on arrival." },
      { label: "New Zealand", shown: "NZ$1,540", note: "Work visa incl. levy, plus the Tk 10,100 medical. The employer pays NZ$775 + NZ$735." },
      { label: "Mauritius", shown: "MUR 0", note: "The employer pays the work permit (MUR 700 processing + permit fee), the MUR 500 yearly residence fee and your ticket home." },
      { label: "Spain", shown: "TIE €16–22 + visa", note: "The visa fee is paid in taka at BLS (amount not confirmed). The employer pays the work authorisation (about €204–408)." },
      { label: "Serbia (on hold)", shown: "RSD 23,120 + visa", note: "Single permit RSD 22,700 + submission RSD 420. BMET clearance is on hold." },
      { label: "Bosnia & Herzegovina", shown: "Not confirmed", note: "No official fee schedule found for the visa or the work permit." }
    ],

    /* Every country. status: open | hold | closed. delhi: add the New Delhi trip. */
    rows: [
      { iso: "ROU", name: "Romania", status: "open", delhi: true, apply: "New Delhi (embassy, eVisa appointment)", you: "D/AM visa €120", employer: "Work permit about €100, paid in lei", extra: "Only authorised employers on WorkinRomania.gov.ro; authorised agencies may not charge you. Residence card fee not found.", src: [["Skuad", "https://www.skuad.io/work-permit/romania"], ["Playroll", "https://www.playroll.com/work-permit-visas/romania"]] },
      { iso: "HRV", name: "Croatia", status: "open", apply: "Dhaka (VFS), decided in New Delhi", you: "Visa €93 + VFS Tk 4,030 + courier Tk 3,900", employer: "Residence and work permit about €116", extra: "Croatian A1.1 needed to renew after a year.", src: [["VFS Croatia", "https://visa.vfsglobal.com/bgd/en/hrv"]] },
      { iso: "ITA", name: "Italy", status: "open", apply: "Dhaka (VFS)", you: "Visa €116 + VFS Tk 2,850; residence permit kit €116–126 after arrival", employer: "Nulla osta revenue stamp €16", extra: "The employer applies on the Decreto Flussi click day.", src: [["Italian Embassy Dhaka", "https://ambdhaka.esteri.it/wp-content/uploads/2026/06/Subordinate-work-type-D.pdf"], ["Questura", "https://questure.poliziadistato.it/statics/29/documenti-da-inserire-nel-kit-postale-per-le-principali-tipologie-di-permesso-di-soggiorno.pdf"]] },
      { iso: "GRC", name: "Greece", status: "open", apply: "Dhaka (GVCW), decided in New Delhi", you: "Visa €75 or €180 + contract attestation €30 + GVCW €30 + courier Tk 10,200", employer: "Approval inside the yearly quota", extra: "Residence-permit fee in Greece not found. BOESL's government programme is the other route.", src: [["GVCW fees", "https://in-gr.gvcworld.eu/en/long-term-national-d-visa"], ["GVCW Bangladesh", "https://bd-gr.gvcworld.eu/en/visa-info-long-term-national-d-visa"]] },
      { iso: "MLT", name: "Malta", status: "open", apply: "Dhaka (VFS)", you: "Pre-departure course €250 + VFS Tk 13,935–20,900", employer: "Single permit €600 (paid online by the employer or by you)", extra: "Renewal €150 a year.", src: [["Identità", "https://identita.gov.mt/expatriates-unit-main-page/noneu-nationals/employment-related-permits/single-permit/single-permit-application/"], ["Free Malta", "https://freemalta.com/hub/single-permit"]] },
      { iso: "BGR", name: "Bulgaria", status: "open", delhi: true, apply: "New Delhi (VFS Global)", you: "D visa about €100–120", employer: "Single permit about €200–250", extra: "Foreign staff capped at 20–35% of a company.", src: [["Innovires", "https://www.innovires.com/en/blog/work-permit-bulgaria.html"]] },
      { iso: "POL", name: "Poland", status: "open", delhi: true, apply: "New Delhi (VFS Global)", you: "D visa €80–135 + VFS fee", employer: "Work permit PLN 400", extra: "", src: [["Worksol", "https://worksol.pl/en/the-real-cost-of-hiring-a-foreign-worker-in-poland-in-2026/"], ["gov.pl", "https://www.gov.pl/web/india/d-type-national-visa"]] },
      { iso: "PRT", name: "Portugal", status: "open", delhi: true, apply: "New Delhi (embassy)", you: "D visa €110 (+ VFS about €40) + AIMA residence permit €186–247", employer: "Registers the vacancy with IEFP", extra: "Apply to AIMA within 120 days of arrival.", src: [["Jobbatical", "https://www.jobbatical.com/blog/portugal-immigration-updates"]] },
      { iso: "SVK", name: "Slovakia", status: "open", delhi: true, apply: "New Delhi (embassy)", you: "Residence application €250 + visa €14–90", employer: "—", extra: "2024 fee schedule; confirm on minv.sk.", src: [["Euraxess Slovakia", "https://euraxesspoint.sav.sk/changes-in-administrative-fees-as-of-1-4-2024/"]] },
      { iso: "CYP", name: "Cyprus", status: "open", apply: "Dhaka (VFS), decided in New Delhi", you: "Entry and residence permit €70 + Aliens' Register €70 + visa fee", employer: "Applies for the employment approval", extra: "Older guides say apply in New Delhi; check with VFS first. See the Cyprus section.", src: [["Cyprus Interior Ministry", "https://moi.gov.cy/moi/CRMD/crmd.nsf/All/6324DD28E926D4CEC22589200033B369"], ["Visa Bangla", "https://visabangla.com/travel/cyprus.html"]] },
      { iso: "SVN", name: "Slovenia", status: "open", delhi: true, apply: "New Delhi (embassy)", you: "€102 at the embassy, or €70 if the employer applies in Slovenia; card €12", employer: "Can lodge the application in Slovenia", extra: "", src: [["EU Immigration Portal", "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/employed-worker-slovenia_en"]] },
      { iso: "LTU", name: "Lithuania", status: "open", delhi: true, apply: "India (VFS Global; Indian X visa needed)", you: "D visa €120–140, or residence permit €160 + VFS €125", employer: "—", extra: "2026 quota 24,706.", src: [["VFS Global", "https://www.vfsglobal.com/one-pager/lithuania/uae/residencepermit/english"], ["VisaVerge", "https://www.visaverge.com/schengen/lithuania-visa-fees-and-payment-information/"]] },
      { iso: "LVA", name: "Latvia", status: "open", delhi: true, apply: "New Delhi (embassy, in person)", you: "D visa €90 + residence permit €160 (€280 fast)", employer: "OCMA approval of the invitation", extra: "", src: [["Playroll", "https://playroll.com/work-permit-visas/latvia"]] },
      { iso: "BIH", name: "Bosnia & Herzegovina", status: "open", delhi: true, apply: "New Delhi (embassy)", you: "Visa D fee not confirmed", employer: "Work permit (fee not confirmed)", extra: "2026 quota 7,427.", src: [["Playroll", "https://playroll.com/work-permit-visas/bosnia-herzegovina"]] },
      { iso: "MNE", name: "Montenegro", status: "open", apply: "Dhaka (VFS)", you: "VFS Tk 4,300 + courier Tk 7,735 + visa fee", employer: "Residence and work permit €67", extra: "See the Montenegro section.", src: [["VFS Global", "https://visa.vfsglobal.com/one-pager/montenegro/bangladesh/english/index.html"], ["Montenegro e-government", "https://psc.gov.me/en/sektorske-informacije/ministarstvo-unutrasnjih-poslova/privremeni-boravak-i-rad-radna-dozvola"]] },
      { iso: "CZE", name: "Czech Republic", status: "open", delhi: true, apply: "New Delhi (embassy)", you: "Employee Card CZK 5,000 + card CZK 2,500 on arrival", employer: "—", extra: "Very few places for Bangladeshis.", src: [["Czech MFA", "https://mzv.gov.cz/tokyo/en/visas_and_consular_info/visa_and_consular_fees/index.html"], ["ARWS", "https://arws.cz/en/news-at-arrows/czech-visa-and-residence-permit-fees"]] },
      { iso: "DEU", name: "Germany", status: "open", apply: "Dhaka (embassy, online portal)", you: "Visa €75 + VFS €19.13 + EU Blue Card €100", employer: "Federal Employment Agency approval", extra: "", src: [["German Mission Dhaka", "https://dhaka.diplo.de/bd-en/service/2346500-2346500"], ["Find English", "https://www.findenglish.de/blog/eu-blue-card-germany-2026-requirements-salary-threshold-how-to-apply"]] },
      { iso: "FIN", name: "Finland", status: "open", delhi: true, apply: "Online, then ID check at VFS New Delhi", you: "€750 online (€530 for specialists and Blue Card)", employer: "—", extra: "Paper application €950.", src: [["Migri", "https://migri.fi/en/-/changes-to-finnish-immigration-service-processing-fees-as-of-1-january-2026"]] },
      { iso: "AUT", name: "Austria", status: "open", delhi: true, apply: "New Delhi (embassy)", you: "Red-White-Red Card €218 (older guides: €160 + €20 card)", employer: "—", extra: "", src: [["Visa Atlas", "https://visaatlas.org/fees/austria/red-white-red-card"]] },
      { iso: "IRL", name: "Ireland", status: "open", apply: "Online, then by post to New Delhi (no trip)", you: "Visa €60 + residence card €300", employer: "Employment permit €1,000 (or you; never deducted from pay)", extra: "", src: [["Citizens Information", "https://www.citizensinformation.ie/en/moving-country/working-in-ireland/employment-permits/work-permits/"]] },
      { iso: "ESP", name: "Spain", status: "open", apply: "Dhaka (embassy / BLS)", you: "Visa fee in taka at BLS (not confirmed) + TIE card €16–22", employer: "Work authorisation about €204–408", extra: "", src: [["BLS Spain Dhaka", "https://bgd.blsspainvisa.com/assets/pdf/RESIDENCE-AND-WORK-VISA-TRA.pdf"]] },
      { iso: "FRA", name: "France", status: "open", apply: "Dhaka (French Embassy)", you: "Visa €99 + residence validation €300 (+ €50 stamp)", employer: "OFII employer tax", extra: "Taxes rose on 1 May 2026.", src: [["Integration France", "https://www.integrationfrance.fr/articles/hausse-taxes-titres-sejour-mai-2026"]] },
      { iso: "NLD", name: "Netherlands", status: "open", apply: "Dhaka (Dutch Embassy)", you: "€0 if the employer pays the IND fee", employer: "IND fee €423 (recognised sponsor)", extra: "", src: [["Envoy", "https://www.envoyglobal.com/news-alert/the-netherlands-immigration-application-fees-2026/"]] },
      { iso: "SWE", name: "Sweden", status: "open", apply: "Online, then Dhaka (embassy)", you: "SEK 2,200", employer: "—", extra: "", src: [["Jobbatical", "https://www.jobbatical.com/blog/sweden-work-permit-guide-process-requirements"]] },
      { iso: "DNK", name: "Denmark", status: "open", apply: "Online, then VFS Dhaka", you: "DKK 6,810 + VFS fee", employer: "— (some repay the fee)", extra: "", src: [["Erickson Immigration Group", "https://eiglaw.com/denmark-increases-residence-permit-fees-for-work-study-and-family-cases/"]] },
      { iso: "NOR", name: "Norway", status: "open", apply: "VFS Dhaka (via Danish Embassy)", you: "NOK 6,300 + VFS fee in taka equal to €21.42", employer: "—", extra: "", src: [["Visa Atlas", "https://visaatlas.org/fees/norway/skilled-worker-permit"], ["Norwegian Embassy", "https://www.norway.no/en/bangladesh/services-info/visitors-visa-res-permit/res-permit/"]] },
      { iso: "GBR", name: "United Kingdom", status: "open", apply: "Dhaka (VFS)", you: "Visa £819 + health surcharge £1,035 a year + TB test US$70 + English test", employer: "Sponsorship certificate and Immigration Skills Charge", extra: "Fees rose on 8 April 2026.", src: [["Davidson Morris", "https://www.davidsonmorris.com/uk-visa-fees"], ["GOV.UK", "https://www.gov.uk/government/publications/tuberculosis-test-for-a-uk-visa-clinics-in-bangladesh/tuberculosis-testing-in-bangladesh"]] },
      { iso: "EST", name: "Estonia", status: "open", delhi: true, apply: "New Delhi (embassy)", you: "D visa €120, or residence permit €280", employer: "Registers short-term employment €130", extra: "", src: [["Jobbatical", "https://www.jobbatical.com/blog/estonia-immigration-fees"]] },
      { iso: "CHE", name: "Switzerland", status: "open", apply: "Dhaka (Swiss Embassy)", you: "Visa about CHF 80–150 + commune registration about CHF 100", employer: "Cantonal permit, CHF 100–550", extra: "Only 8,500 non-EU permits a year.", src: [["The Local", "https://www.thelocal.ch/20260122/how-much-do-switzerlands-work-permits-cost-in-2026"]] },
      { iso: "NZL", name: "New Zealand", status: "open", apply: "Online", you: "NZ$1,540 + medical Tk 10,100", employer: "Accreditation NZ$775 + job check NZ$735", extra: "See the New Zealand section.", src: [["INZ fee table", "https://www.immigration.govt.nz/assets/inz/documents/media/immigration-fee-and-levy-table-rates-from-1-october-2024.pdf"]] },
      { iso: "MUS", name: "Mauritius", status: "limited", apply: "Online: the employer applies (work permit or Occupation Permit)", you: "Nothing for a work permit: the employer pays recruitment costs", employer: "Work permit processing MUR 700 + permit fee; residence permit MUR 500 a year; your ticket home", extra: "Bangladeshis hired only for bakery, textile and printing jobs since September 2025. See the Mauritius section.", src: [["Mauritius labour ministry", "https://labour.govmu.org/Documents/A%20GUIDE%20FOR%20MIGRANT%20WORKERS%202019.PDF"], ["e-Work Permit guidelines", "https://workpermit.mu/eworkpermit_wkp/upload/cms/pdf/WP%20GUIDELINES%20UPDATED%20MAR2015.pdf"], ["Passport and Immigration Office", "https://passport.govmu.org/passport/?page_id=557"]] },
      { iso: "SRB", name: "Serbia", status: "hold", apply: "New Delhi (Serbian Embassy)", delhi: true, you: "Single permit RSD 22,700 + RSD 420; visa D extra", employer: "—", extra: "BMET clearance on hold (September 2026).", src: [["Welcome to Serbia", "https://welcometoserbia.gov.rs/help"]] },
      { iso: "MKD", name: "North Macedonia", status: "hold", apply: "—", you: "Not costed", employer: "—", extra: "BMET clearance on hold.", src: [] },
      { iso: "HUN", name: "Hungary", status: "closed", apply: "—", you: "Not costed", employer: "—", extra: "Guest-worker permit closed since 6 June 2026.", src: [] }
    ],

    /* Remote-work visas (Plan B): no job offer, so no employer fees. */
    remote: [
      ["Spain · digital nomad", "About €73 incl. TIE card €16.08; consular fee varies", ["Klevvera", "https://www.klevvera.com/blog/spain-digital-nomad-visa-cost-breakdown/"]],
      ["Portugal · D8 digital nomad", "Visa €110 · residence card about €170 · show €11,040 savings", ["Genki", "https://guide.genki.world/portugal-digital-nomad-visa/"]],
      ["Greece · digital nomad", "Visa €75 · residence permit €1,000", ["Remote Work Europe", "https://remoteworkeurope.eu/insights/greece-digital-nomad-visa/"]]
    ]
  },

  /* ---------- Cyprus deep dive (Republic of Cyprus), checked 20 October 2026 ----------
     Euros in Cyprus, taka in Bangladesh, US$ for the flight. */
  cyp: {
    kpis: [
      { value: "26,710", label: "general-employment work permits in force in August 2026; Bangladesh is one of the main nationalities", src: ["Cyprus Mail", "https://cyprus-mail.com/2026/09/27/cyprus-labour-shortages-who-can-legally-work"] },
      { value: "€1,088", label: "minimum wage a month before tax in 2026–2027; €979 in your first 6 months with an employer", src: ["Sigmalive", "https://en.sigmalive.com/cyprus-minimum-wage-set-at-e1088-from-january-1-2026"] },
      { value: "€2,500", label: "a month before tax gets a developer a fast permit at a foreign-owned company, with a degree or 2 years' experience", src: ["Zeno Legal", "https://www.zenolegal.com/resources/cyprus-work-permit-non-eu-employer-sponsorship-2026"] },
      { value: "3%", label: "of Bangladeshis' asylum claims in the EU succeeded in 2025: crossing from the north to claim asylum is no way in", src: ["EUAA", "https://www.euaa.europa.eu/latest-asylum-trends-annual-analysis/applications"] }
    ],

    /* kind: easier | tighter | closed | mixed */
    timeline: [
      { date: "7 Jul 2025", where: "Blue Card", text: "Cyprus starts taking EU Blue Card applications: €43,632 a year, and IT staff can show 3 years' experience instead of a degree.", kind: "easier" },
      { date: "30 Oct 2025", where: "Digital nomads", text: "The digital nomad visa reopens with 1,000 places a year.", kind: "easier" },
      { date: "1 Jan 2026", where: "Pay", text: "Minimum wage rises to €1,088 a month (€979 in the first 6 months), fixed until the end of 2027.", kind: "easier" },
      { date: "Sep 2026", where: "Agencies", text: "Parliament's labour committee links hiring through temporary employment agencies to trafficking; unions ask for inspections.", kind: "tighter" },
      { date: "1 Jan 2027", where: "Fast-track", text: "Renewals for existing key staff at foreign-owned companies must also pay €2,500 a month; the €2,000 transition ends on 31 December 2026.", kind: "tighter" }
    ],

    /* What each route asks you to earn, euros a month. plan = best fit for you. */
    thresholds: [
      { label: "Minimum wage, after 6 months", value: 1088, shown: "€1,088", note: "Before tax; €979 in your first 6 months with an employer (2026–2027)." },
      { label: "Fast-track at a foreign-owned company", value: 2500, shown: "€2,500", note: "Before tax, with a degree or 2 years' relevant experience and a contract of at least 2 years.", plan: true },
      { label: "Digital nomad visa, after tax", value: 3500, shown: "€3,500", note: "From employers or clients outside Cyprus; 1,000 places a year." },
      { label: "EU Blue Card", value: 3636, shown: "€3,636", note: "€43,632 a year before tax. IT staff can show 3 years' experience in the last 7 instead of a degree." }
    ],

    budget: { letter: "CY", title: "Cyprus · job on a work permit", tag: "No agent needed",
      groups: [
        { head: "In Bangladesh · taka", total: "Tk 12,000–27,000 + visa", items: [
          ["Police clearance certificate", "Tk 500", ["PCC guide", "https://policeclearance.bd/application-fees/"]],
          ["BMET clearance: welfare fee Tk 5,500 + insurance Tk 1,000", "Tk 6,500", ["TBS", "https://www.tbsnews.net/bangladesh/migrant-workers-pay-tk5500-welfare-fee-october-1550606"]],
          ["Notary, translation and attestation of your documents", "Tk 5,000–20,000", null, "estimate"],
          ["Entry visa at VFS Dhaka, decided by the High Commission in New Delhi", "Ask VFS", ["Visa Bangla", "https://visabangla.com/travel/cyprus.html"]]
        ] },
        { head: "Flight · US dollars", items: [
          ["Dhaka → Larnaca, one way with one stop (lowest online fares)", "US$470–652", ["Trip.com", "https://ph.trip.com/flights/airport-dac-lca/"]]
        ] },
        { head: "In Cyprus · euros", total: "€440–640", items: [
          ["Entry and residence permit", "€70", ["Cyprus Interior Ministry", "https://moi.gov.cy/moi/CRMD/crmd.nsf/All/6324DD28E926D4CEC22589200033B369"]],
          ["First entry in the Aliens' Register", "€70", ["Cyprus Interior Ministry", "https://moi.gov.cy/moi/CRMD/crmd.nsf/All/6324DD28E926D4CEC22589200033B369"]],
          ["Food, transport and phone until your first pay", "€300–500", null, "estimate"]
        ] }
      ],
      note: "The employer applies and pays for its own approval. Ask whether housing is included, and get it in your contract." },

    /* [title, text, [label,url]] */
    rules: [
      ["The north is not the EU", "Northern Cyprus is run by Turkish Cypriots and recognised only by Turkey. A visa for the north is not a visa for the Republic of Cyprus or the EU. Cyprus says about 9 in 10 irregular migrants arrive through Turkey and the north.", ["TBS", "https://www.tbsnews.net/features/panorama/how-bangladeshi-migrants-end-cyprus-450078"]],
      ["Fake 'EU job' offers", "In 2025 UN experts said agents promised jobs in the Republic of Cyprus or the EU, then sent more than 600 workers to a state-owned citrus farm in the north, where passports were taken and pay was little or none.", ["Business & Human Rights Centre", "https://www.business-humanrights.org/en/latest-news/cyprus-un-experts-alarmed-by-reports-of-exploitation-of-migrant-workers-at-citrus-farm-owned-by-state-owned-firm-cypfruvex-2/"]],
      ["Asylum is not a work route", "Bangladeshis made 37,000 asylum claims in the EU in 2025, and only 3% were accepted at the first decision.", ["EUAA", "https://www.euaa.europa.eu/latest-asylum-trends-annual-analysis/applications"]],
      ["Register within 7 days", "After you arrive, register with the Migration Department within 7 days. A general-employment permit lasts at most 4 years in total (6 in farming and livestock).", ["AGP Law", "https://www.agplaw.com/?p=634"]],
      ["Be careful with agency jobs", "In September 2026 parliament's labour committee linked hiring through temporary employment agencies to trafficking. Unions say some workers are rented out to hotels and building sites.", ["Cyprus Mail", "https://cyprus-mail.com/2026/09/23/workers-trafficked-to-cyprus-through-hiring-agencies"]]
    ],

    portals: [
      { name: "Ergodotisi", url: "https://www.ergodotisi.com/", where: "Job board", text: "Cyprus's best-known job site, in Greek and English. Try 'developer Limassol', 'farm' or 'delivery'." },
      { name: "Carierista", url: "https://www.carierista.com/", where: "Job board", text: "Job portal and professional network; the second most visited job site in Cyprus in April 2026." },
      { name: "CyprusWork", url: "https://www.cypruswork.com/", where: "Job board", text: "English-language job board with vacancies from over 1,000 recruiters." },
      { name: "Kariera.com.cy", url: "https://www.kariera.com.cy/", where: "Job board", text: "Long-running Cypriot job portal; most ads are in Greek." },
      { name: "Relocate.me", url: "https://relocate.me", where: "Tech jobs", text: "Filter by Cyprus for tech jobs that come with visa and relocation help." },
      { name: "Business in Cyprus (Business Facilitation Unit)", url: "https://www.businessincyprus.gov.cy/", where: "Cyprus · official", text: "The government unit that handles fast-track permits for foreign-owned companies." },
      { name: "Public Employment Service", url: "https://www.pescps.dl.mlsi.gov.cy/", where: "Government", text: "Official vacancies. Only people already allowed to work in Cyprus can apply, but it shows who is hiring." },
      { name: "Migration Department permit fees", url: "https://moi.gov.cy/moi/CRMD/crmd.nsf/All/6324DD28E926D4CEC22589200033B369", where: "Cyprus · official", text: "Official fees for entry, residence and employment permits." }
    ]
  },

  /* ---------- Malta deep dive, checked 21 October 2026 ----------
     Euros in Malta, taka in Bangladesh, US$ for the flight. */
  mlt: {
    kpis: [
      { value: "€994", label: "minimum wage a month before tax in 2026 (€229.44 a week)", src: ["WageIndicator", "https://wageindicator.org/salary/minimum-wage/malta"] },
      { value: "€250", label: "pre-departure course every first-time worker must pass; Identità checks the certificate since 1 March 2026", src: ["Identità", "https://identita.gov.mt/expatriates-unit-main-page/noneu-nationals/employment-related-permits/single-permit/expatriates-unit-single-permit-pre-departure-course/"] },
      { value: "€30,000", label: "a year gets a fast-track permit in 15 working days, with a degree or a related qualification and 3 years' experience", src: ["Envoy", "https://www.envoyglobal.com/news-alert/malta-new-specialist-employee-initiative/"] },
      { value: "€600", label: "for your first single permit, then €150 for each renewal year; a decision can take up to 4 months", src: ["Jobsplus", "https://jobsplus.gov.mt/find-candidates/non-eu-nationals-tcns"] }
    ],

    /* kind: easier | tighter | closed | mixed */
    timeline: [
      { date: "Jul 2024", where: "Couriers and cabs", text: "Malta stops issuing new work permits for food couriers and cab drivers; renewals with the same employer continue.", kind: "closed" },
      { date: "1 Aug 2025", where: "Labour migration policy", text: "Employers must advertise on Jobsplus and EURES for 3 weeks first, and firms that dismiss too many foreign workers can be refused. The Key Employee Initiative minimum rises to €45,000 a year.", kind: "tighter" },
      { date: "1 Jan 2026", where: "Pay and renewals", text: "Minimum wage rises to €229.44 a week; after the first year, a permit can be renewed for 2 years instead of 1.", kind: "easier" },
      { date: "1 Mar 2026", where: "Pre-departure course", text: "Identità starts checking the €250 course certificate on every first application.", kind: "tighter" }
    ],

    /* Yearly pay and permit thresholds, euros before tax. */
    pay: [
      { label: "National minimum wage", low: 11931, high: 11931, shown: "€11,931", note: "€994 a month, €229.44 a week (2026)." },
      { label: "Junior software developer", low: 22000, high: 30000, shown: "€22,000–30,000", note: "FreeMalta salary benchmark, 2026." },
      { label: "EU Blue Card minimum", low: 38000, high: 38000, shown: "about €38,000", note: "Needs a degree. About 1.5 times the average salary, updated every year." },
      { label: "Software engineer, typical", low: 42000, high: 56000, shown: "€42,000–56,000", note: "FreeMalta estimate; iGaming firms often pay 15–25% more." },
      { label: "Key Employee Initiative minimum", low: 45000, high: 45000, shown: "€45,000", note: "Managerial or highly technical jobs; proof of experience can count. Since 1 August 2025." }
    ],

    budget: { letter: "MT", title: "Malta · job on a single permit", tag: "No agent needed",
      groups: [
        { head: "In Bangladesh · taka", total: "Tk 25,935–47,900", items: [
          ["Police clearance certificate", "Tk 500", ["PCC guide", "https://policeclearance.bd/application-fees/"]],
          ["BMET clearance: welfare fee Tk 5,500 + insurance Tk 1,000", "Tk 6,500", ["TBS", "https://www.tbsnews.net/bangladesh/migrant-workers-pay-tk5500-welfare-fee-october-1550606"]],
          ["Notary, translation and attestation of your documents", "Tk 5,000–20,000", null, "estimate"],
          ["VFS Dhaka service charge for the D visa (standard or extended)", "Tk 13,935–20,900", ["VFS Malta–Bangladesh", "https://www.vfsglobal.com/one-pager/malta-extended-services/bangladesh/english/index.html"]]
        ] },
        { head: "Before you travel · euros", total: "€250–1,085", items: [
          ["Pre-departure course, every first-time worker", "€250", ["Identità", "https://identita.gov.mt/expatriates-unit-main-page/noneu-nationals/employment-related-permits/single-permit/expatriates-unit-single-permit-pre-departure-course/"]],
          ["Skills Pass, hotel and tourism jobs only (€230 + €5 interview booking)", "€235", ["Expatax", "https://expatax.mt/maltas-pre-departure-course-explained/"]],
          ["First single permit, paid online by the employer or by you", "€600", ["Jobsplus", "https://jobsplus.gov.mt/find-candidates/non-eu-nationals-tcns"]]
        ] },
        { head: "Flight · US dollars", items: [
          ["Dhaka → Malta, one way with one stop (lowest online fares)", "US$458–576", ["Jetcost", "https://us.jetcost.com/en/flights/dhaka-zia/malta-luqa/DAC-MLA"]]
        ] },
        { head: "In Malta · euros", total: "€650–1,000", items: [
          ["Room in a shared flat in Birkirkara or San Ġwann, before bills", "€350–500", ["FreeMalta", "https://freemalta.com/articles/shared-apartment-cost-malta-expats"]],
          ["Food, transport and phone until your first pay", "€300–500", null, "estimate"]
        ] }
      ],
      note: "Licensed Maltese agencies may not charge you, and pay below the €994 minimum is illegal. Rooms in Msida or Valletta cost €400–560 before bills." },

    /* [title, text, [label,url]] */
    rules: [
      ["No work before the permit", "It is illegal to employ you before Identità issues your permit, and the permit is for one employer.", ["Jobsplus", "https://jobsplus.gov.mt/find-candidates/non-eu-nationals-tcns"]],
      ["Below-minimum offers are illegal", "Some Bangladeshi agencies offered €600-a-month jobs and a €1,500 'gift' per worker to employers. Malta's minimum wage is €994 a month.", ["The Shift", "https://theshiftnews.com/2024/07/19/bangladeshi-agencies-targeting-malta-for-e600-a-month-jobs/"]],
      ["No new courier or cab jobs", "Since July 2024 Malta refuses new work permits for food couriers and cab drivers, so don't pay for these jobs.", ["MaltaToday", "https://www.maltatoday.com.mt/news/national/130415/abela_says_malta_has_enough_cab_drivers_and_couriers_after_hundreds_have_permits_refused"]],
      ["Employers are checked", "Jobsplus can refuse employers that dismiss too many foreign workers, and every job must be advertised in Malta and the EU first.", ["Jobsplus", "https://jobsplus.gov.mt/media/0c3ppzjb/malta-labour-migration-policy-implementation-doc-jul-2025.pdf"]],
      ["Processing can stop", "Malta has frozen Bangladeshi visa applications before, so keep your job in Bangladesh until your visa is issued.", ["Lovin Malta", "https://lovinmalta.com/news/bangladesh-malta-visa-applications-frozen/"]],
      ["Remote-work permit", "The Nomad Residence Permit needs €42,000 a year of income from outside Malta and is renewed one year at a time.", ["Residency Malta", "https://nomad.residencymalta.gov.mt/new-faqs"]]
    ],

    portals: [
      { name: "Jobsplus vacancies", url: "https://jobsplus.gov.mt/vacancy", where: "Government", text: "Malta's public employment service. Employers must advertise here before they may hire you." },
      { name: "Keepmeposted", url: "https://keepmeposted.com.mt/", where: "Job board", text: "Popular for iGaming, tech and office jobs." },
      { name: "jobsinmalta.com", url: "https://jobsinmalta.com/", where: "Job board", text: "The most visited Maltese job board in 2026, with job alerts." },
      { name: "Konnekt", url: "https://www.konnekt.com/", where: "Recruiter", text: "Recruiter and job portal for tech, finance and iGaming." },
      { name: "VacancyCentre", url: "https://www.vacancycentre.com/", where: "Job board", text: "Finance, IT and gaming jobs, run by CSB Group." },
      { name: "Careerjet Malta", url: "https://www.careerjet.com.mt/", where: "Search engine", text: "Collects job ads from many Maltese sites in one search." },
      { name: "Identità: single permit", url: "https://identita.gov.mt/expatriates-unit-main-page/noneu-nationals/employment-related-permits/single-permit/", where: "Malta · official", text: "Official rules and fees for the work-and-residence permit." },
      { name: "Skills Pass and pre-departure course", url: "https://skillspass.org.mt/", where: "Malta · official", text: "Where you register for the €250 course and the hotel-job Skills Pass." },
      { name: "VFS Global: Malta D visa in Dhaka", url: "https://www.vfsglobal.com/one-pager/malta-extended-services/bangladesh/english/index.html", where: "Visa · Dhaka", text: "Appointments, fees and the 60-day rule after your approval letter." }
    ]
  },

  /* ---------- Montenegro deep dive, checked 18 October 2026 ----------
     Montenegro uses the euro. Amounts are in the currency you pay them in:
     taka in Bangladesh, US$ for the flight, euros in Montenegro. */
  mne: {
    kpis: [
      { value: "28,988", label: "work permits for all foreign workers in 2026: 21,668 for jobs, 2,320 seasonal and 5,000 held in reserve", src: ["Government of Montenegro", "https://www.gov.me/en/article/press-release-from-the-108th-cabinet-session"] },
      { value: "20,000+", label: "workers missing each summer, mostly waiters, cooks, maids, receptionists and cleaners (Employment Agency, May 2026)", src: ["SeeSrpska", "https://seesrpska.com/en/zapisi/u-ljetnoj-sezoni-nedostaje-20000-radnika-30-5-2026"] },
      { value: "€600", label: "minimum monthly wage after tax for jobs up to secondary-school level; €800 for degree-level jobs", src: ["WageIndicator", "https://wageindicator.org/salary/minimum-wage/montenegro"] },
      { value: "VFS Dhaka", label: "is where Bangladeshis now apply for the visa, with no trip to India", src: ["Government of Montenegro", "https://www.gov.me/en/diplomatic-missions/embassies-and-consulates-of-montenegro/bangladesh"] }
    ],

    /* kind: easier | tighter | closed | mixed */
    timeline: [
      { date: "18 Dec 2025", where: "Quota", text: "The 2026 quota is set at 28,988 permits: 21,668 for jobs, 2,320 seasonal and a 5,000 reserve.", kind: "mixed" },
      { date: "17 Jan 2026", where: "Foreigners Act", text: "Permits can be applied for online; IT and healthcare workers can get permits for up to 3 years; only full-time workers can extend.", kind: "mixed" },
      { date: "23 Jul 2026", where: "Visas", text: "Visa rules aligned with the EU: Turkish, Russian, Chinese, Belarusian and Saudi citizens need visas from 1 November 2026.", kind: "tighter" },
      { date: "5 Oct 2026", where: "Bangladesh", text: "A visiting Montenegrin MP says the country needs 50,000+ workers a year and is open to a government-to-government deal with Bangladesh. Nothing is signed.", kind: "mixed" },
      { date: "Oct 2026", where: "Visas", text: "Montenegrin visas can be applied for at VFS Global centres, including Dhaka.", kind: "easier" }
    ],

    /* Temporary residence and work permits issued in 2025 (40,567 in total). */
    permits2025: [
      { label: "Turkey", value: 10346, shown: "10,346", note: "25.5% of all permits. Turkish citizens need visas from 1 November 2026." },
      { label: "Serbia", value: 8148, shown: "8,148", note: "The second-largest group." },
      { label: "Russia", value: 7429, shown: "7,429", note: "Russian citizens need visas from 1 November 2026." },
      { label: "All other countries", value: 14644, shown: "14,644", note: "Bangladesh is counted here; it is not reported on its own.", plan: true }
    ],

    /* Monthly pay, euros. After tax unless the label says before tax. */
    pay: [
      { label: "Minimum wage, jobs up to secondary school", low: 600, high: 600, shown: "€600", note: "After tax, since 1 October 2024." },
      { label: "Minimum wage, degree-level jobs", low: 800, high: 800, shown: "€800", note: "After tax, for education level VI and above." },
      { label: "Seasonal hotel and restaurant jobs (ads)", low: 700, high: 1000, shown: "€700–1,000", note: "After tax, usually with free housing and meals. Chefs earn more." },
      { label: "Average wage, all jobs (July 2026)", low: 1037, high: 1037, shown: "€1,037", note: "After tax. Before tax: €1,238 (Monstat)." },
      { label: "Programmers, before tax (middle 80%)", low: 604, high: 2180, shown: "€604–2,180", note: "Paylab salary survey. Lead developers: €1,016–3,770 before tax." }
    ],

    budget: { letter: "ME", title: "Montenegro · hotel or building job on a work permit", tag: "No agent needed",
      groups: [
        { head: "In Bangladesh · taka", total: "Tk 24,035–39,035", items: [
          ["Police clearance certificate", "Tk 500", ["PCC guide", "https://policeclearance.bd/application-fees/"]],
          ["VFS Global Dhaka service charge for the D visa", "Tk 4,300", ["VFS Global", "https://visa.vfsglobal.com/one-pager/montenegro/bangladesh/english/index.html"]],
          ["VFS two-way courier, compulsory", "Tk 7,735", ["VFS Global", "https://visa.vfsglobal.com/one-pager/montenegro/bangladesh/english/index.html"]],
          ["BMET clearance: welfare fee Tk 5,500 + insurance Tk 1,000", "Tk 6,500", ["TBS", "https://www.tbsnews.net/bangladesh/migrant-workers-pay-tk5500-welfare-fee-october-1550606"]],
          ["Notary, translation and attestation of your documents", "Tk 5,000–20,000", null, "estimate"]
        ] },
        { head: "Flight · US dollars", items: [
          ["Dhaka → Podgorica, one way via Istanbul (lowest online fares)", "US$986–1,019", ["Trip.com", "https://www.trip.com/flights/dhaka-to-podgorica/airfares-dac-tgd/"]]
        ] },
        { head: "In Montenegro · euros", total: "€367–567 (€818–1,018 if you rent)", items: [
          ["Residence and work permit: fee €60 + form €5 + request €2; the employer files it", "€67", ["Montenegro e-government", "https://psc.gov.me/en/sektorske-informacije/ministarstvo-unutrasnjih-poslova/privremeni-boravak-i-rad-radna-dozvola"]],
          ["Housing on many seasonal jobs: a bed and three meals a day", "€0", ["SeeSrpska", "https://seesrpska.com/en/zivot/budva-trazi-8000-sezonaca-za-ljeto-koje-je-pred-nama-17-2-2025"]],
          ["If you rent instead: one-bedroom in Podgorica, first month", "about €451", ["Life Indexed", "https://lifeindexed.com/cost/europe/montenegro/podgorica/2026/"]],
          ["Food, transport and phone until your first pay", "€300–500", null, "estimate"]
        ] }
      ],
      note: "The D visa fee itself (in euros) was not readable on VFS's Bangladesh page, so ask VFS. Get free housing and meals written into your contract." },

    /* [title, text, [label,url]] */
    rules: [
      ["Not in the EU or Schengen", "A Montenegrin permit does not let you work in Croatia or any EU country. Montenegro hopes to join the EU around 2028.", ["PISM", "https://pism.pl/publications/montenegro-has-closed-most-of-the-chapters-in-its-eu-accession-negotiations"]],
      ["A transit country", "The Council of Europe calls Montenegro mostly a transit point on the Western Balkan migration route. Crossing a border without papers is a crime and can kill.", ["Council of Europe", "https://rm.coe.int/edited-montenegro-country-profile-som-2026/48802ba867"]],
      ["One employer only", "The combined permit covers the employer that applied for it. Working for anyone else counts as illegal work.", ["Visa Atlas", "https://visaatlas.org/visas/montenegro/single-permit"]],
      ["Fingerprints within 10 days", "After you arrive you must give your biometrics at a police station within 10 days.", ["BDK Advokati", "https://bdkadvokati.com/montenegro-adopts-amendments-to-the-foreigners-act"]],
      ["Your embassy is in Rome", "Bangladesh's embassy in Rome also covers Montenegro.", ["Government of Montenegro", "https://www.gov.me/en/diplomatic-missions/diplomatic-missions-to-montenegro/bangladesh"]],
      ["Permanent residence", "Possible after 5 years of continuous legal residence.", ["Visa Atlas", "https://visaatlas.org/visas/montenegro/permanent-residence"]]
    ],

    portals: [
      { name: "Employment Agency of Montenegro", url: "https://www.zzzcg.me/", where: "Government", text: "Official vacancies ('slobodna radna mjesta'). Employers advertise here before they may hire a foreigner." },
      { name: "Zaposli.me", url: "https://www.zaposli.me/", where: "Job board", text: "Many large employers and hotels advertise here. Ads are mostly in Montenegrin, sometimes in English." },
      { name: "Prekoveze.me", url: "https://www.prekoveze.me/", where: "Job board", text: "A classifieds site with a big jobs section ('oglasi za posao'), in Montenegrin." },
      { name: "Careerjet Montenegro", url: "https://www.careerjet.me/", where: "Search engine", text: "Collects job ads from many Montenegrin sites in one search." },
      { name: "Europe Language Jobs: Montenegro", url: "https://www.europelanguagejobs.com/jobs-in-Montenegro-for-English-speakers", where: "English speakers", text: "Seasonal hotel jobs for English speakers, some with work-permit help." },
      { name: "VFS Global: Montenegro visa", url: "https://visa.vfsglobal.com/one-pager/montenegro/bangladesh/english/index.html", where: "Visa · Dhaka", text: "Fees, documents and appointments for the D visa in Dhaka." },
      { name: "Work permit rules", url: "https://psc.gov.me/en/sektorske-informacije/ministarstvo-unutrasnjih-poslova/privremeni-boravak-i-rad-radna-dozvola", where: "Montenegro · official", text: "Documents, fees and the 15-day deadline for the combined permit." },
      { name: "BOESL", url: "https://www.boesl.gov.bd", where: "Bangladesh", text: "If a government deal is signed, recruitment would most likely be announced here. Never pay a private agent for a 'G2G' place." }
    ]
  },

  /* ---------- Mauritius (outside Europe), checked 20 October 2026 ----------
     Amounts are in the currency you pay them in: Mauritian rupees (MUR) in
     Mauritius, taka in Bangladesh, US$ for the flight and the Premium Visa. */
  mus: {
    kpis: [
      { value: "8,975", label: "Bangladeshi workers in Mauritius in July 2026, down from 10,672 in November 2024", src: ["L'Express via AllAfrica", "https://fr.allafrica.com/stories/202607030159.html"] },
      { value: "MUR 50,000", label: "basic salary a month that a professional Occupation Permit needs, in every sector (2026)", src: ["EDB Mauritius", "https://edbmauritius.org/newsletter-august-2026-op"] },
      { value: "MUR 17,745", label: "national minimum wage a month from 1 January 2026", src: ["WageIndicator", "https://wageindicator.org/work/minimum-wage/updates/2026/mauritius-national-minimum-wage-increased-from-1-january-2026-february-11-2026"] },
      { value: "US$1,500", label: "a month of foreign income gets you the free Premium Visa for remote workers", src: ["Visa Atlas", "https://visaatlas.org/visas/mauritius/premium-visa"] }
    ],

    /* kind: easier | tighter | closed | mixed */
    timeline: [
      { date: "2023", where: "Bangladesh", text: "Mauritius stops almost all new hiring of Bangladeshi workers after many leave the employers named on their permits.", kind: "closed" },
      { date: "Sep 2025", where: "Bangladesh", text: "Hiring of Bangladeshis restarts, but only for short-staffed bakery, textile and printing jobs.", kind: "easier" },
      { date: "1 Jan 2026", where: "Pay", text: "The national minimum wage rises to MUR 17,745 a month.", kind: "easier" },
      { date: "Mar 2026", where: "Permits", text: "8,733 work-permit applications are still waiting, some since June 2025.", kind: "tighter" },
      { date: "8 Jun 2026", where: "Bangladesh", text: "The two labour ministers agree in Geneva to speed up a deal (MoU) to reopen hiring, mainly for textile workers. Not signed yet.", kind: "mixed" },
      { date: "24 Jun 2026", where: "Enforcement", text: "Police report 428 foreigners without valid papers arrested since January.", kind: "tighter" },
      { date: "Jul 2026", where: "Bangladesh", text: "The labour minister says future workers will be recruited through Bangladeshi government bodies and checked before they leave, to cut out middlemen.", kind: "mixed" },
      { date: "13 Aug 2026", where: "Permits", text: "Finance Act 2026: the professional Occupation Permit needs a MUR 50,000 basic salary in every sector. A new Technical permit for government-to-government recruits is not in force yet.", kind: "mixed" }
    ],

    /* Monthly pay before tax, MUR. Ranges are 2026 estimates from job sites. */
    pay: [
      { label: "National minimum wage", low: 17745, high: 17745, shown: "MUR 17,745", note: "From 1 January 2026. In export factories it can include housing and food allowances." },
      { label: "Junior developer", low: 25000, high: 40000, shown: "MUR 25,000–40,000", note: "MyJob.mu 2026 estimate." },
      { label: "Mid-level developer", low: 45000, high: 70000, shown: "MUR 45,000–70,000", note: "MyJob.mu 2026 estimate." },
      { label: "Senior developer or architect", low: 80000, high: 150000, shown: "MUR 80,000–150,000", note: "MyJob.mu 2026 estimate; some earn more." }
    ],

    budget: { letter: "MU", title: "Mauritius · job on a work permit or Occupation Permit", tag: "No agent needed",
      groups: [
        { head: "In Bangladesh · taka", total: "Tk 12,000–27,000", items: [
          ["Police clearance certificate", "Tk 500", ["PCC guide", "https://policeclearance.bd/application-fees/"]],
          ["BMET clearance: welfare fee Tk 5,500 + insurance Tk 1,000", "Tk 6,500", ["TBS", "https://www.tbsnews.net/bangladesh/migrant-workers-pay-tk5500-welfare-fee-october-1550606"]],
          ["Notary, translation and attestation of your documents", "Tk 5,000–20,000", null, "estimate"]
        ] },
        { head: "Flight · US dollars", items: [
          ["Dhaka → Mauritius, one way with one stop (online fares)", "US$423–835", ["Jetcost", "https://us.jetcost.com/en/flights/dhaka-zia/mauritius/DAC-MRU"]]
        ] },
        { head: "Paid by the employer · rupees", items: [
          ["Work permit: processing fee MUR 700 plus the permit fee", "Employer", ["e-Work Permit guidelines", "https://workpermit.mu/eworkpermit_wkp/upload/cms/pdf/WP%20GUIDELINES%20UPDATED%20MAR2015.pdf"]],
          ["Residence permit fee, every year", "MUR 500", ["Passport and Immigration Office", "https://passport.govmu.org/passport/?page_id=557"]],
          ["All recruitment costs, and your ticket home when the contract ends", "Employer", ["Mauritius labour ministry", "https://labour.govmu.org/Documents/A%20GUIDE%20FOR%20MIGRANT%20WORKERS%202019.PDF"]]
        ] }
      ],
      note: "Mauritius's labour ministry says employers bear all recruitment costs, including the work permit, and workers should not pay recruitment fees. Ask the employer to pay your outward flight too, and get housing written into your contract." },

    /* [title, text, [label,url]] */
    rules: [
      ["One employer only", "Your work permit is for one employer. Workers who leave become irregular: in March 2026 Mauritius counted 6,926 foreigners overstaying, 2,819 of them reported missing by their employer.", ["L'Express via AllAfrica", "https://fr.allafrica.com/stories/202604010677.html"]],
      ["Arrests and fines", "Police arrested 428 foreigners without valid papers between 1 January and 15 June 2026. Employers who hire them face fines of MUR 100,000–500,000 and up to 5 years in prison.", ["L'Express via AllAfrica", "https://fr.allafrica.com/stories/202606240382.html"]],
      ["Fees are still charged", "A Bangladeshi garment worker borrowed US$2,300 to pay his agent. Brands later repaid nearly US$390,000 in fees to 637 Bangladeshi workers at his factory.", ["Transparentem", "https://transparentem.org/report/mauritius-disclosure/"]],
      ["No work on a tourist visa", "Someone who enters Mauritius as a tourist may not work. Travel only after your permit is approved.", ["Australian High Commission", "https://mauritius.embassy.gov.au/plut/Working_in_Mauritius.html"]],
      ["Your embassy is in Port Louis", "The Bangladesh High Commission's labour wing: fsportlouis@probashi.gov.bd, +230 212 9527.", ["Expatriates' Welfare Ministry", "https://wewb.portal.gov.bd/site/page/847ba196-b014-49b4-b1f9-de178dba156e"]],
      ["Permanent residence", "Occupation Permit holders can apply after 5 years (3 years before the Finance Act 2025).", ["KPMG", "https://assets.kpmg.com/content/dam/kpmg/za/pdf/2025/tax-alert%2095-changes-to-residency-and-property-ownership-rules-post-the-finance-act-2025.pdf"]]
    ],

    portals: [
      { name: "MyJob.mu: IT jobs", url: "https://myjob.mu/jobs/information-technology", where: "Job board", text: "Mauritius's biggest job site. This page lists IT, web and software jobs." },
      { name: "MyJob.mu: hotel and tourism jobs", url: "https://myjob.mu/jobs/tourism-and-hospitality", where: "Job board", text: "Hotel, restaurant and tourism jobs on the same site." },
      { name: "Mauritius Jobs (government)", url: "https://mauritiusjobs.govmu.org/", where: "Government", text: "Official portal with local and overseas vacancies from registered employers." },
      { name: "CareerHub.mu", url: "https://careerhub.mu/", where: "Job board", text: "Local job board, one of the most visited in Mauritius." },
      { name: "HelloJob.mu", url: "https://hellojob.mu/", where: "Job board", text: "One of the first Mauritian job portals." },
      { name: "EDB: Occupation Permit and Premium Visa", url: "https://edbmauritius.org/", where: "Mauritius · official", text: "Official rules for the professional permit and the remote-work Premium Visa." },
      { name: "e-Work Permit (labour ministry)", url: "https://workpermit.mu/eworkpermit_wkp/web/index/pagename/faq", where: "Mauritius · official", text: "How employers apply for work permits: questions and answers." },
      { name: "Bangladesh High Commission, Port Louis", url: "https://portlouis.mofa.gov.bd/", where: "Bangladesh", text: "Your embassy in Mauritius. Labour wing: fsportlouis@probashi.gov.bd." },
      { name: "BOESL", url: "https://www.boesl.gov.bd", where: "Bangladesh", text: "If the government deal is signed, Mauritian factory jobs should be announced here. Never pay a private agent for a 'G2G' place." }
    ]
  },

  /* ---------- New Zealand (outside Europe), checked 8 October 2026 ----------
     Amounts are in the currency you pay them in: NZ$ in New Zealand, taka in
     Bangladesh, US$ for the flight. Pay is NZ$ an hour before tax; "a year"
     means 40 hours a week for 52 weeks. */
  nz: {
    kpis: [
      { value: "NZ$35.00", label: "an hour: the median wage that sets most visa pay rules, from 9 March 2026", src: ["Envoy", "https://www.envoyglobal.com/news-alert/new-zealand-adds-new-occupations-to-national-occupation-list-and-increases-median-wage/"] },
      { value: "2 years", label: "of New Zealand work at NZ$38.50 an hour or more can lead to residence without a degree, since 24 August 2026", src: ["INZ", "https://www.immigration.govt.nz/about-us/news-centre/final-details-about-changes-to-the-skilled-migrant-category-resident-visa-and-work-to-residence-visa/"] },
      { value: "NZ$1,540", label: "the work-visa fee you pay. The employer pays for its accreditation and the job check", src: ["INZ fee table", "https://www.immigration.govt.nz/assets/inz/documents/media/immigration-fee-and-levy-table-rates-from-1-october-2024.pdf"] },
      { value: "5.6%", label: "unemployment in the June 2026 quarter, the highest in more than a decade, so employers can be picky", src: ["Stats NZ via Mirage News", "https://www.miragenews.com/unemployment-rate-at-5-6-percent-in-june-2026-1721808/"] }
    ],

    /* kind: easier | tighter | closed | mixed (same keys as the Europe timeline) */
    timeline: [
      { date: "10 Mar 2025", where: "Work visa", text: "The median-wage pay floor is dropped (the market rate and the minimum wage still apply) and the experience needed falls from 3 years to 2.", kind: "easier" },
      { date: "8 Dec 2025", where: "Seasonal work", text: "Two new seasonal visas open for farm and tourism jobs: Global Workforce Seasonal and Peak Seasonal. Both ask for earlier seasonal experience.", kind: "easier" },
      { date: "9 Mar 2026", where: "Pay rules", text: "The median wage rises to NZ$35.00 an hour, and 47 more skilled jobs join the work-visa occupation list.", kind: "mixed" },
      { date: "1 Jun 2026", where: "Work visa", text: "The English test (IELTS 4.0 or equal) now also covers skill level 3 jobs such as chefs and supervisors. Developer jobs stay exempt.", kind: "tighter" },
      { date: "24 Aug 2026", where: "Residence", text: "New Skilled Work Experience and Trades & Technician pathways. Full points for New Zealand experience after 2 years instead of 3.", kind: "easier" },
      { date: "16 Nov 2026", where: "Graduates", text: "A new six-month Short-Term Graduate Work Visa will open, but only for people who studied in New Zealand.", kind: "easier" }
    ],

    /* Hourly thresholds. Yearly figures are hourly × 2,080. */
    wages: [
      { label: "Minimum wage", value: 23.95, shown: "NZ$23.95", note: "The legal floor for every job from 1 April 2026. About NZ$49,800 a year." },
      { label: "80% of median: partner can work", value: 28, shown: "NZ$28.00", note: "In a skill level 1–3 job, your partner can get an open work visa. About NZ$58,200 a year." },
      { label: "Median wage", value: 35, shown: "NZ$35.00", note: "The least a Skilled Migrant job may pay, and the Green List floor. About NZ$72,800 a year." },
      { label: "1.1 × median: experience pathway", value: 38.5, shown: "NZ$38.50", note: "Earn this for 2 years in New Zealand, have 5 years' experience in total, and you can apply for residence. About NZ$80,100 a year.", plan: true },
      { label: "1.2 × median: amber-list jobs", value: 42, shown: "NZ$42.00", note: "Same pathway for amber-list jobs such as ICT support and web administrator, but all 5 years must be in New Zealand. About NZ$87,400 a year." },
      { label: "Typical mid-career developer", value: 42.88, shown: "NZ$42.88", note: "Payscale's average of NZ$89,200 a year, divided by 2,080 hours. Early-career developers average about NZ$73,200 (NZ$35.19 an hour).", ref: true },
      { label: "1.5 × median: 3 points", value: 52.5, shown: "NZ$52.50", note: "3 Skilled Migrant points; 2 years of New Zealand work adds the other 3. About NZ$109,200 a year." },
      { label: "2 × median: 4 points", value: 70, shown: "NZ$70.00", note: "4 points, and the work visa's experience test no longer applies. About NZ$145,600 a year." },
      { label: "3 × median: 6 points", value: 105, shown: "NZ$105.00", note: "6 points from pay alone: residence with no New Zealand experience. About NZ$218,400 a year." }
    ],

    /* Your start-up budget, same shape as costs.plans. */
    budget: { letter: "NZ", title: "New Zealand · developer on a work visa", tag: "No agent needed",
      groups: [
        { head: "In Bangladesh · taka", total: "Tk 22,100–37,100", items: [
          ["Medical exam at IOM Dhaka, an INZ panel clinic (adult e-medical)", "Tk 10,100", ["IOM Bangladesh", "https://bangladesh.iom.int/new-zealand-all-types-visa-applicants"]],
          ["Police clearance certificate", "Tk 500", ["PCC guide", "https://policeclearance.bd/application-fees/"]],
          ["BMET clearance: welfare fee Tk 5,500 + insurance Tk 1,000", "Tk 6,500", ["TBS", "https://www.tbsnews.net/bangladesh/migrant-workers-pay-tk5500-welfare-fee-october-1550606"]],
          ["Notary, translation and attestation of your documents", "Tk 5,000–20,000", null, "estimate"]
        ] },
        { head: "Flight · US dollars", items: [
          ["Dhaka → Auckland, one way (average online fare)", "about US$640", ["Farecompare", "https://www.farecompare.com/flights/Dhaka-DAC/Auckland-AKL/market.html"]]
        ] },
        { head: "In New Zealand · NZ dollars", total: "NZ$3,940–4,740", items: [
          ["Work visa (AEWV), including the NZ$1,060 immigration levy", "NZ$1,540", ["INZ fee table", "https://www.immigration.govt.nz/assets/inz/documents/media/immigration-fee-and-levy-table-rates-from-1-october-2024.pdf"]],
          ["Room in a shared Auckland flat: 2 weeks' rent in advance at NZ$300 a week", "NZ$600", ["Cities Insider", "https://citiesinsider.com/country/new-zealand/auckland/flatting-and-shared-housing/en"]],
          ["Bond for that room, usually 4 weeks' rent", "up to NZ$1,200", ["Cities Insider", "https://citiesinsider.com/country/new-zealand/auckland/flatting-and-shared-housing/en"]],
          ["Food, transport and phone until your first pay", "NZ$600–1,400", null, "estimate"]
        ] }
      ],
      note: "Some tech employers pay the flight or the visa fee, so ask before you sign. IELTS (Tk 31,100) is not needed for a developer work visa, but residence later asks for IELTS 6.5 or equal." },

    /* [what, fee, who pays, [label,url]] */
    fees: [
      ["Work visa (AEWV)", "NZ$1,540 (fee NZ$480 + levy NZ$1,060)", "You", ["INZ fee table", "https://www.immigration.govt.nz/assets/inz/documents/media/immigration-fee-and-levy-table-rates-from-1-october-2024.pdf"]],
      ["Employer accreditation", "NZ$775 for up to 5 migrants · NZ$1,280 high-volume", "Employer", ["INZ", "https://www.immigration.govt.nz/work/for-employers/getting-accreditation-or-approval-to-hire/employer-accreditation-for-the-aewv/aewv-employer-accreditation-and-job-check-process/paying-for-aewv-employer-accreditation-and-job-checks/"]],
      ["Job check", "NZ$735", "Employer", ["INZ", "https://www.immigration.govt.nz/work/for-employers/getting-accreditation-or-approval-to-hire/employer-accreditation-for-the-aewv/aewv-employer-accreditation-and-job-check-process/paying-for-aewv-employer-accreditation-and-job-checks/"]],
      ["Recruitment, in New Zealand and overseas", "Ads, agency fees, accreditation, job check", "Employer, never you", ["INZ", "https://www.immigration.govt.nz/work/worker-rights/what-your-employer-must-do-when-they-hire-you-on-an-aewv"]],
      ["Seasonal visas (GWSV, PSV)", "From NZ$1,540", "You", ["INZ", "https://www.immigration.govt.nz/visas/global-workforce-seasonal-visa"]],
      ["Skilled Migrant residence", "NZ$6,450; the Expression of Interest is free", "You", ["Visa Atlas", "https://visaatlas.org/fees/new-zealand/skilled-migrant-category"]]
    ],

    /* Weekly rent ranges, NZ$. */
    rents: [
      { label: "Auckland · room in a shared flat", low: 220, high: 420, shown: "NZ$220–420", note: "About NZ$220 in Henderson and Avondale; NZ$280–420 in the CBD and city fringe. Power and internet are usually extra." },
      { label: "Wellington · room in a shared flat", low: 215, high: 380, shown: "NZ$215–380", note: "From NZ$215 in Newtown to NZ$380 in Te Aro and the CBD." },
      { label: "Wellington · whole home, median", low: 595, high: 600, shown: "NZ$595–600", note: "Trade Me Rental Price Index, June–July 2026." },
      { label: "Auckland · whole home, median", low: 655, high: 660, shown: "NZ$655–660", note: "Trade Me Rental Price Index, June–July 2026." }
    ],

    /* [rule, text, [label,url]] */
    tenancy: [
      ["Bond", "A landlord can ask for at most 4 weeks' rent and must lodge it with Tenancy Services.", ["myRent", "https://myrent.co.nz/maximum-bond-amount"]],
      ["Rent in advance", "At most 2 weeks' rent before you move in.", ["myRent", "https://myrent.co.nz/rent-in-advance"]],
      ["Renting a room from a tenant", "Flatmates are not covered by the tenancy law. Agree the bond, rent and notice in writing and get a receipt.", ["Tenancy Services", "https://tenancy.govt.nz/starting-a-tenancy/flatting/"]]
    ],

    accounts: [
      { amount: "NZ$15,000–40,000", where: "Auckland · 2023", text: "115 Bangladeshi and Indian workers arrived on work visas to find no jobs after paying agents this much. They were living in crowded, unsanitary houses; the count later reached 144.", src: ["TBS", "https://www.tbsnews.net/node/686434"] },
      { amount: "NZ$44,750", where: "Auckland · 2026", text: "A migrant paid this for a landscaping job. The company was fined NZ$16,000 and must repay him, and its director must pay him NZ$8,000 more.", src: ["Employment New Zealand", "https://www.employment.govt.nz/news-and-updates/auckland-company-charged-migrant-worker-almost-45000-for-his-job"] },
      { amount: "25 men", where: "Kuala Lumpur · 2024", text: "Bangladeshi men were stopped from boarding a flight to Auckland. A middleman had apparently convinced them they held valid work visas.", src: ["1News", "https://www.1news.co.nz/2024/05/08/25-men-caught-trying-to-enter-nz-without-proper-visas/"] }
    ],

    rules: [
      ["No payment for a job", "Employers may not take money (a 'premium') for giving you a job or letting you keep it. The Labour Inspectorate makes them pay it back, with penalties.", ["Employment NZ", "https://www.employment.govt.nz/news-and-updates/auckland-company-charged-migrant-worker-almost-45000-for-his-job"]],
      ["Recruitment is the employer's cost", "An accredited employer must pay all recruitment costs, in New Zealand and overseas, and cannot pass them on to you.", ["INZ", "https://www.immigration.govt.nz/work/worker-rights/what-your-employer-must-do-when-they-hire-you-on-an-aewv"]],
      ["Advisers must be licensed", "Anyone giving New Zealand visa advice, in Dhaka too, needs a licence from the Immigration Advisers Authority unless they are a New Zealand lawyer. Check the free register.", ["IAA", "https://iaa.govt.nz/for-migrants"]],
      ["INZ does not phone for money", "Scammers pose as INZ staff or licensed advisers. INZ officers do not call you asking for payment.", ["INZ via Scoop", "https://www.scoop.co.nz/stories/AK2601/S00291.htm"]]
    ],

    portals: [
      { name: "Seek", url: "https://www.seek.co.nz/", where: "Biggest job board", text: "Most developer jobs are here. Skip ads that say 'must have NZ work rights' and look for employers that mention visa support." },
      { name: "LinkedIn Jobs", url: "https://www.linkedin.com/jobs", where: "Tech", text: "Search 'New Zealand' with your stack plus 'accredited employer' or 'visa'." },
      { name: "Trade Me Jobs", url: "https://www.trademe.co.nz/a/jobs", where: "General", text: "The second-biggest board, strong for farm, trade and supervisor jobs." },
      { name: "Check if an employer is accredited", url: "https://www.immigration.govt.nz/new-zealand-visas/preparing-a-visa-application/working-in-nz/check-if-an-employer-is-accredited", where: "INZ · official", text: "Only accredited employers can hire you on a work visa. Some choose not to be listed, so also ask the employer." },
      { name: "WorkHere", url: "https://workhere.co.nz/", where: "Skilled migrants", text: "A recruiting platform that connects skilled people overseas with New Zealand employers." },
      { name: "Farm Source Jobs", url: "https://jobs.nzfarmsource.co.nz/", where: "Dairy and farm", text: "Farm-assistant and dairy jobs. Read each ad: some only accept people already in New Zealand." },
      { name: "PickNZ", url: "https://jobs.picknz.co.nz/", where: "Seasonal", text: "Fruit, vegetable and packhouse jobs. Seasonal visas need earlier seasonal experience." },
      { name: "Immigration Advisers Authority", url: "https://iaa.govt.nz/for-migrants", where: "Check advisers", text: "Look up any 'NZ visa consultant' on the free register before you pay them." },
      { name: "New Zealand Now", url: "https://www.newzealandnow.govt.nz/", where: "Government", text: "The government's guide to working and living in New Zealand." }
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
    ]],
    ["Where you apply", [
      ["Polish Embassy New Delhi – D-type national visa", "https://www.gov.pl/web/india/d-type-national-visa"],
      ["Portuguese Embassy New Delhi – visas (Indian X visa rule)", "https://novadeli.embaixadaportugal.mne.gov.pt/en/consular-section/visas"],
      ["Romanian Embassy New Delhi – visas for Bangladeshis", "https://newdelhi.mae.ro/en/local-news/1202"],
      ["Latvian Embassy New Delhi – long-stay visa", "https://www2.mfa.gov.lv/en/newdelhi/consular-section/applying-for-a-long-stay-visa"],
      ["Lithuanian MFA – visa centres in India", "https://in.mfa.lt/en/coming-to-lithuania/visas/visa-authority-and-visa-application-centers/114"],
      ["Estonian Embassy New Delhi – Bangladesh", "https://newdelhi.mfa.ee/for-bangladesh-nepal-sri-lanka-citizens/"],
      ["Finland abroad – residence permits (Bangladesh)", "https://finlandabroad.fi/web/bgd/residence-permits-to-finland"],
      ["Ireland.ie – visas from New Delhi", "https://www.ireland.ie/en/india/newdelhi/services/visas/visas-for-ireland/"],
      ["Belgium in India – visa if you live in Bangladesh", "https://india.diplomatie.belgium.be/en/travel-belgium/visa-belgium/visa-belgium-if-you-live-bangladesh"],
      ["Luxembourg Embassy New Delhi – long-term visa", "https://newdelhi.mae.lu/en/service_citoyens/visa-immigration/long-term-national-visa.html"],
      ["Netherlands Worldwide – MVV in Bangladesh", "https://www.netherlandsworldwide.nl/visa-the-netherlands/mvv-long-stay/apply-bangladesh"],
      ["Swiss government – where to apply for work visas", "https://www.bundesreisezentrale.admin.ch/countries/bangladesh/en/home/visa/entry-ch/work-permits/where-to-apply-work-permits.html"],
      ["VFS Global – Bulgaria D visas in India (2025)", "https://www.vfsglobal.com/en/PDF/media-releases/2025/MR_Bulgaria_D_visa_services_rollout_in_India_Oct_2025.pdf"],
      ["TBS – Croatia to stop issuing work permits to Bangladeshis (Jan 2025)", "https://www.tbsnews.net/bangladesh/croatia-stop-issuing-work-permits-bangladeshi-workers-embassy-says-1054731"]
    ]],
    ["Official fees (do it yourself)", [
      ["German Mission Dhaka – visa and VFS fees", "https://dhaka.diplo.de/bd-en/service/2346500-2346500"],
      ["Italian Embassy Dhaka – subordinate work visa", "https://ambdhaka.esteri.it/wp-content/uploads/2026/06/Subordinate-work-type-D.pdf"],
      ["Questura – residence permit kit costs", "https://questure.poliziadistato.it/statics/29/documenti-da-inserire-nel-kit-postale-per-le-principali-tipologie-di-permesso-di-soggiorno.pdf"],
      ["Identità – Malta single permit fees", "https://identita.gov.mt/expatriates-unit-main-page/noneu-nationals/employment-related-permits/single-permit/single-permit-application/"],
      ["Migri – Finland processing fees 2026", "https://migri.fi/en/-/changes-to-finnish-immigration-service-processing-fees-as-of-1-january-2026"],
      ["EU Immigration Portal – Slovenia single permit", "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/employed-worker-slovenia_en"],
      ["Cyprus Interior Ministry – permit fees", "https://moi.gov.cy/moi/CRMD/crmd.nsf/All/6324DD28E926D4CEC22589200033B369"],
      ["Czech MFA – consular fees", "https://mzv.gov.cz/tokyo/en/visas_and_consular_info/visa_and_consular_fees/index.html"],
      ["Welcome to Serbia – single permit fees", "https://welcometoserbia.gov.rs/help"],
      ["GVCW – Greek national visa fees", "https://in-gr.gvcworld.eu/en/long-term-national-d-visa"],
      ["GOV.UK – TB test in Bangladesh", "https://www.gov.uk/government/publications/tuberculosis-test-for-a-uk-visa-clinics-in-bangladesh/tuberculosis-testing-in-bangladesh"],
      ["Norwegian Embassy – residence permit via VFS", "https://www.norway.no/en/bangladesh/services-info/visitors-visa-res-permit/res-permit/"],
      ["Dhaka Tribune – BOESL fixed migration costs", "https://www.dhakatribune.com/business/279798/boesl-revises-migration-cost-for-9-countries"],
      ["TBS – how flawed vetting sent workers into harm's way", "https://www.tbsnews.net/bangladesh/migration/scams-smuggling-battlefields-how-flawed-vetting-sent-our-workers-harms-way"]
    ]],
    ["Cyprus", [
      ["Cyprus Mail – labour shortages: who can legally work (Sept 2026)", "https://cyprus-mail.com/2026/09/27/cyprus-labour-shortages-who-can-legally-work"],
      ["Cyprus Mail – workers trafficked through hiring agencies (Sept 2026)", "https://cyprus-mail.com/2026/09/23/workers-trafficked-to-cyprus-through-hiring-agencies"],
      ["Sigmalive – minimum wage €1,088 from January 2026", "https://en.sigmalive.com/cyprus-minimum-wage-set-at-e1088-from-january-1-2026"],
      ["Zeno Legal – Cyprus work permit for non-EU nationals 2026", "https://www.zenolegal.com/resources/cyprus-work-permit-non-eu-employer-sponsorship-2026"],
      ["Zeno Legal – Cyprus digital nomad visa 2026", "https://www.zenolegal.com/resources/cyprus-digital-nomad-visa-2026"],
      ["Rightax – Cyprus EU Blue Card guide", "https://rightax.com.cy/cyprus-eu-blue-card-guide/"],
      ["AGP Law – work permit for general employment", "https://www.agplaw.com/?p=634"],
      ["Visa Bangla – Cyprus visa for Bangladeshis", "https://visabangla.com/travel/cyprus.html"],
      ["TBS – how Bangladeshi migrants end up in Cyprus", "https://www.tbsnews.net/features/panorama/how-bangladeshi-migrants-end-cyprus-450078"],
      ["BHRRC – UN experts on the Cypfruvex citrus farm", "https://www.business-humanrights.org/en/latest-news/cyprus-un-experts-alarmed-by-reports-of-exploitation-of-migrant-workers-at-citrus-farm-owned-by-state-owned-firm-cypfruvex-2/"],
      ["EUAA – asylum applications in 2025", "https://www.euaa.europa.eu/latest-asylum-trends-annual-analysis/applications"]
    ]],
    ["Malta", [
      ["Identità – pre-departure course", "https://identita.gov.mt/expatriates-unit-main-page/noneu-nationals/employment-related-permits/single-permit/expatriates-unit-single-permit-pre-departure-course/"],
      ["Jobsplus – employing non-EU nationals (fees, timing)", "https://jobsplus.gov.mt/find-candidates/non-eu-nationals-tcns"],
      ["Jobsplus – labour migration policy, July 2025", "https://jobsplus.gov.mt/media/0c3ppzjb/malta-labour-migration-policy-implementation-doc-jul-2025.pdf"],
      ["WageIndicator – Malta minimum wage 2026", "https://wageindicator.org/salary/minimum-wage/malta"],
      ["Envoy – Specialist Employee Initiative", "https://www.envoyglobal.com/news-alert/malta-new-specialist-employee-initiative/"],
      ["CSB Group – Key Employee Initiative vs EU Blue Card (2026)", "https://www.csbgroup.com/articles/key-employee-initiative-kei-vs-eu-blue-card-choosing-the-right-skilled-worker-permit-for-malta-in-2026/"],
      ["MaltaToday – no new permits for couriers and cab drivers", "https://www.maltatoday.com.mt/news/national/130415/abela_says_malta_has_enough_cab_drivers_and_couriers_after_hundreds_have_permits_refused"],
      ["FreeMalta – software engineer salaries", "https://freemalta.com/articles/software-engineer-salary-malta"],
      ["FreeMalta – shared flat costs", "https://freemalta.com/articles/shared-apartment-cost-malta-expats"],
      ["Expatax – pre-departure course and Skills Pass", "https://expatax.mt/maltas-pre-departure-course-explained/"],
      ["Residency Malta – Nomad Residence Permit FAQ", "https://nomad.residencymalta.gov.mt/new-faqs"]
    ]],
    ["Montenegro", [
      ["Government of Montenegro – 2026 permit quota (108th Cabinet session)", "https://www.gov.me/en/article/press-release-from-the-108th-cabinet-session"],
      ["Government of Montenegro – visa rules for Bangladeshis", "https://www.gov.me/en/diplomatic-missions/embassies-and-consulates-of-montenegro/bangladesh"],
      ["Government of Montenegro – visa policy aligned with the EU", "https://www.gov.me/en/article/montenegro-fully-aligns-its-visa-policy-with-the-european-union-citizens-of-numerous-countries-can-now-apply-for-a-montenegrin-visa"],
      ["Montenegro e-government – temporary residence and work permit", "https://psc.gov.me/en/sektorske-informacije/ministarstvo-unutrasnjih-poslova/privremeni-boravak-i-rad-radna-dozvola"],
      ["BDK Advokati – 2026 Foreigners Act amendments", "https://bdkadvokati.com/montenegro-adopts-amendments-to-the-foreigners-act"],
      ["Montenegrobusiness – permits issued in 2025", "https://montenegrobusiness.eu/montenegro-moves-towards-integrated-work-and-residence-permits-as-dependence-on-foreign-labour-deepens/"],
      ["TBS – Dhaka and Podgorica discuss labour cooperation", "https://www.tbsnews.net/foreign-policy/dhaka-podgorica-discuss-trade-investment-labour-cooperation-1563691"],
      ["Bangladesh Pratidin – Montenegro may hire 50,000 workers a year", "https://en.bd-pratidin.com/national/2026/10/05/71337"],
      ["VFS Global – Montenegro visa in Bangladesh", "https://visa.vfsglobal.com/one-pager/montenegro/bangladesh/english/index.html"],
      ["Monstat – wages, July 2026", "https://monstat.org/uploads/files/zarade/2026/7/RAD_EN_Jul_2026.pdf"],
      ["SeeSrpska – 20,000 summer workers short", "https://seesrpska.com/en/zapisi/u-ljetnoj-sezoni-nedostaje-20000-radnika-30-5-2026"]
    ]],
    ["Mauritius", [
      ["Dhaka Tribune – Mauritius interested in hiring skilled Bangladeshi workers (June 2026)", "https://www.dhakatribune.com/bangladesh/foreign-affairs/412067/mauritius-labor-market-set-to-reopen-for"],
      ["Bangladesh Monitor – Bangladesh and Mauritius move to restore recruitment", "https://www.bangladeshmonitor.com.bd/en/bangladesh-mauritius-move-to-restore-labor-recruitment-ties"],
      ["L'Express via AllAfrica – Bangladeshi workers: tighter recruitment control (July 2026)", "https://fr.allafrica.com/stories/202607030159.html"],
      ["L'Express via AllAfrica – 8,733 work-permit applications pending (March 2026)", "https://fr.allafrica.com/stories/202603270354.html"],
      ["L'Express via AllAfrica – 6,926 foreigners overstaying (April 2026)", "https://fr.allafrica.com/stories/202604010677.html"],
      ["L'Express via AllAfrica – 428 foreigners arrested (June 2026)", "https://fr.allafrica.com/stories/202606240382.html"],
      ["EDB Mauritius – Occupation Permit changes (August 2026)", "https://edbmauritius.org/newsletter-august-2026-op"],
      ["TBI Mauritius – Technical Occupation Permit", "https://tbimauritius.com/technical-occupation-permit-mauritius/"],
      ["WageIndicator – minimum wage from 1 January 2026", "https://wageindicator.org/work/minimum-wage/updates/2026/mauritius-national-minimum-wage-increased-from-1-january-2026-february-11-2026"],
      ["MyJob.mu – salary trends 2026", "https://myjob.mu/advice/salary-guide/salary-trends-in-mauritius-2026-what-professionals-need-to-know-before-negotiating"],
      ["Visa Atlas – Premium Visa", "https://visaatlas.org/visas/mauritius/premium-visa"],
      ["Mauritius labour ministry – guide for migrant workers", "https://labour.govmu.org/Documents/A%20GUIDE%20FOR%20MIGRANT%20WORKERS%202019.PDF"],
      ["Transparentem – Mauritius apparel factories", "https://transparentem.org/report/mauritius-disclosure/"],
      ["TBS – BOESL revised migration cost (Mauritius, Croatia)", "https://www.tbsnews.net/bangladesh/migration/state-owned-recruiting-agency-boesl-revised-migration-cost-545894"]
    ]],
    ["New Zealand", [
      ["INZ – final details of the Skilled Migrant changes (24 August 2026)", "https://www.immigration.govt.nz/about-us/news-centre/final-details-about-changes-to-the-skilled-migrant-category-resident-visa-and-work-to-residence-visa/"],
      ["INZ – 2026 changes to the Skilled Migrant Category", "https://www.immigration.govt.nz/live/resident-visas-to-live-in-new-zealand/skilled-residence-pathways-in-new-zealand/skilled-migrant-category-pathway-to-residence/2026-changes-to-the-skilled-migrant-category-resident-visa/"],
      ["INZ – how the March 2025 AEWV changes may affect you", "https://www.immigration.govt.nz/about-us/news-centre/how-changes-to-the-accredited-employer-work-visa-aewv-may-affect-you/"],
      ["INZ – how long you can stay on an AEWV", "https://immigration.govt.nz/work/requirements-for-work-visas/how-long-you-can-work-on-work-visas/how-long-you-can-stay-on-an-aewv"],
      ["INZ – English rule extended to skill level 3 jobs", "https://www.immigration.govt.nz/about-us/news-centre/english-language-requirements-extended-to-aewv-skill-level-3-roles/"],
      ["INZ – new seasonal visas open 8 December 2025", "https://www.immigration.govt.nz/about-us/news-centre/new-seasonal-visas-open-8-december-2025"],
      ["INZ – Green List pathway to residence", "https://www.immigration.govt.nz/live/resident-visas-to-live-in-new-zealand/skilled-residence-pathways-in-new-zealand/green-list-pathway-to-residence"],
      ["INZ – bringing family on an AEWV", "https://www.immigration.govt.nz/process-to-apply/once-you-have-a-visa/bringing-family-to-new-zealand/bringing-family-if-you-have-a-work-visa/bringing-family-if-you-have-an-accredited-employer-work-visa-aewv/"],
      ["Envoy – median wage NZ$35 and new occupations (March 2026)", "https://www.envoyglobal.com/news-alert/new-zealand-adds-new-occupations-to-national-occupation-list-and-increases-median-wage/"],
      ["Payscale – software developer pay in New Zealand", "https://www.payscale.com/research/NZ/Job=Software_Developer/Salary/fb624084/Mid-Career"],
      ["Trade Me – Rental Price Index", "https://www.trademe.co.nz/c/property/news/rental-price-index"],
      ["TBS – New Zealand probing exploitation of Bangladeshi and Indian workers", "https://www.tbsnews.net/node/686434"]
    ]]
  ]
};
