// PSTUPFFull.jsx — Postnieks Impossibility Program · SAPM Companion Dashboard
// Bloomberg terminal aesthetic: JetBrains Mono + Newsreader, navy/gold/crimson/green
// Drop into: pages/dashboards/PSTUPFFull.jsx  OR  app/dashboards/PSTUPFFull/page.jsx
// Zero external dependencies beyond React.

import { useState } from 'react';
import SAPMNav from "./SAPMNav";

const META = {
  title: "Ultra-Processed Food (Full SAPM Paper)",
  subtitle: "System Welfare Cost of Engineered Dietary Harm",
  beta: "6.11",
  ci: "4.88–7.56",
  pi: "$1.2T",
  psa: "−$6.48T",
  mu: "$0.161",
  kappa: "0.87",
  type: "Institutional PST — No Impossibility Theorem | Class III System Welfare Destroyer",
  companion: "",
};

const CHANNELS = [
        { id:1, name:"Metabolic disease (obesity, T2D, CVD)", beta:"", value:"dominant", weight:"~45%" },
        { id:2, name:"Addiction and behavioral hijacking (YFAS)", beta:"", value:"significant", weight:"~15%" },
        { id:3, name:"Agricultural distortion (commodity crop subsidies)", beta:"", value:"significant", weight:"~15%" },
        { id:4, name:"Environmental degradation (packaging, supply chain)", beta:"", value:"significant", weight:"~10%" },
        { id:5, name:"Governance capture (95% COI on DGAC)", beta:"", value:"significant", weight:"~15%" },
];

const CROSS_DOMAIN = [
        { domain:"ERCOT (Texas Grid)", beta:"2,053", type:"Institutional", pi:"$2.3B" },
        { domain:"Orbital Debris (LEO)", beta:"2,053", type:"Impossibility", pi:"$293B" },
        { domain:"PFAS (Forever Chemicals)", beta:"35.2", type:"Impossibility", pi:"$4.1B" },
        { domain:"Gene Drives", beta:"12.4", type:"Impossibility", pi:"" },
        { domain:"Opioid Ecosystem", beta:"10.2", type:"Institutional", pi:"~$35B" },
        { domain:"Commercial Real Estate", beta:"8.4", type:"Institutional", pi:"$12-15B" },
        { domain:"Persistent Org. Pollutants", beta:"8.4", type:"Institutional", pi:"" },
        { domain:"Monoculture Agriculture", beta:"8.6", type:"Impossibility", pi:"$52B" },
        { domain:"Big Tech / Platform", beta:"7.4", type:"Institutional", pi:"$158B" },
        { domain:"Frontier AI", beta:"7.4", type:"Impossibility", pi:"" },
        { domain:"Tobacco", beta:"6.5", type:"Institutional", pi:"$965B" },
        { domain:"Student Loans / For-Profit Ed.", beta:"6.3", type:"Institutional", pi:"$46.8B" },
        { domain:"PBM Rebate System", beta:"6.3", type:"Institutional", pi:"$27.6B" },
        { domain:"Gambling (Commercial)", beta:"6.3", type:"Institutional", pi:"$44.2B" },
        { domain:"Coal Combustion", beta:"6.1", type:"Institutional", pi:"" },
        { domain:"Oil & Gas Extraction", beta:"6.2", type:"Institutional", pi:"$3.5T" },
        { domain:"Palm Oil", beta:"6.2", type:"Institutional", pi:"$67B" },
        { domain:"UPF / Ultra-Processed Food", beta:"6.2", type:"Institutional", pi:"" },
        { domain:"Aviation Emissions", beta:"4.6", type:"Institutional", pi:"$1.007T" },
        { domain:"Deep-Sea Mining", beta:"4.7", type:"Impossibility", pi:"" },
        { domain:"Global Fisheries", beta:"4.72", type:"Institutional", pi:"" },
        { domain:"Topsoil Erosion", beta:"4.3", type:"Impossibility", pi:"" },
        { domain:"Algorithmic Pricing", beta:"4.2", type:"Institutional", pi:"$39.5B" },
        { domain:"Gig Economy Platforms", beta:"4.2", type:"Institutional", pi:"" },
        { domain:"Water Privatization / Aquifer", beta:"4.2", type:"Institutional", pi:"$246B" },
        { domain:"Arms Exports", beta:"2.4", type:"Institutional", pi:"$293B" },
        { domain:"Antimicrobial Resistance", beta:"2.1", type:"Impossibility", pi:"" },
        { domain:"Nuclear Energy", beta:"0.7", type:"Impossibility", pi:"" },
        { domain:"WMD Capability Diffusion", beta:"—", type:"Impossibility", pi:"" },
        { domain:"Bitcoin (PoW)", beta:"5.0", type:"Impossibility", pi:"" },
];

const HIGHLIGHTS = [
        "β_W = 6.2 [4.8–8.1]. Full SAPM paper (distinct from §7b impossibility-frontier section). Five-channel decomposition across metabolic, addiction, agricultural, environmental, and governance.",
        "Class III — System Welfare Destroyer. Same tier as Bitcoin (5.0) and auto emissions (6.8). Below PFAS (35.2), above AMR (2.1) and nuclear (0.7).",
        "No impossibility theorem: Chile (24% SSB decline), UK SDIL (28.8% sugar reduction via reformulation), Mexico (12% SSB reduction) all demonstrate institutional correction works.",
        "Hall et al. RCT: ad libitum UPF access → 500 kcal/day overconsumption. Mechanism: texture engineering for rapid oral processing + protein dilution (protein-leverage hypothesis).",
        "Darcey et al. (NIH, Cell Metabolism, March 2025): D2 receptor downregulation mechanism contested. Structural brain damage channel (hippocampal atrophy, dementia risk) strengthened.",
        "GLP-1 agonists (semaglutide, tirzepatide): $100B+ market by 2030 documents neurobiological disruption while proving reversibility — confirming Type II not Type I classification.",
];


const PSF_PARAMS = {pi_c:68.0,pi_p:293.0,w_c:1810.0,kappa:1.38};
const PSF_DATA = [{pi:6.8,w:1625.2},{pi:19.27,w:1692.84},{pi:31.74,w:1745.13},{pi:44.21,w:1782.08},{pi:56.68,w:1803.68},{pi:69.15,w:1809.93},{pi:81.62,w:1800.85},{pi:94.09,w:1776.42},{pi:106.56,w:1736.64},{pi:119.03,w:1681.52},{pi:131.5,w:1611.05},{pi:143.97,w:1525.24},{pi:156.44,w:1424.09},{pi:168.91,w:1307.59},{pi:181.38,w:1175.74},{pi:193.85,w:1028.55},{pi:206.32,w:866.02},{pi:218.79,w:688.14},{pi:231.26,w:494.92},{pi:243.73,w:286.35},{pi:256.2,w:62.44},{pi:268.67,w:-176.82},{pi:281.14,w:-431.42},{pi:293.61,w:-701.36},{pi:306.08,w:-986.65},{pi:318.55,w:-1287.29},{pi:331.02,w:-1603.27},{pi:343.49,w:-1934.59},{pi:355.96,w:-2281.26},{pi:368.43,w:-2643.27},{pi:380.9,w:-3020.63}];

const MC_HIST = [{bin:"4.45",lo:4.4510,hi:4.5249,count:32},{bin:"4.52",lo:4.5249,hi:4.5988,count:44},{bin:"4.60",lo:4.5988,hi:4.6728,count:57},{bin:"4.67",lo:4.6728,hi:4.7467,count:86},{bin:"4.75",lo:4.7467,hi:4.8206,count:107},{bin:"4.82",lo:4.8206,hi:4.8946,count:147},{bin:"4.89",lo:4.8946,hi:4.9685,count:165},{bin:"4.97",lo:4.9685,hi:5.0425,count:198},{bin:"5.04",lo:5.0425,hi:5.1164,count:237},{bin:"5.12",lo:5.1164,hi:5.1903,count:256},{bin:"5.19",lo:5.1903,hi:5.2643,count:275},{bin:"5.26",lo:5.2643,hi:5.3382,count:290},{bin:"5.34",lo:5.3382,hi:5.4121,count:313},{bin:"5.41",lo:5.4121,hi:5.4861,count:294},{bin:"5.49",lo:5.4861,hi:5.5600,count:342},{bin:"5.56",lo:5.5600,hi:5.6340,count:340},{bin:"5.63",lo:5.6340,hi:5.7079,count:343},{bin:"5.71",lo:5.7079,hi:5.7818,count:331},{bin:"5.78",lo:5.7818,hi:5.8558,count:323},{bin:"5.86",lo:5.8558,hi:5.9297,count:341},{bin:"5.93",lo:5.9297,hi:6.0036,count:298},{bin:"6.00",lo:6.0036,hi:6.0776,count:293},{bin:"6.08",lo:6.0776,hi:6.1515,count:311},{bin:"6.15",lo:6.1515,hi:6.2255,count:309},{bin:"6.23",lo:6.2255,hi:6.2994,count:281},{bin:"6.30",lo:6.2994,hi:6.3733,count:261},{bin:"6.37",lo:6.3733,hi:6.4473,count:286},{bin:"6.45",lo:6.4473,hi:6.5212,count:256},{bin:"6.52",lo:6.5212,hi:6.5951,count:294},{bin:"6.60",lo:6.5951,hi:6.6691,count:245},{bin:"6.67",lo:6.6691,hi:6.7430,count:229},{bin:"6.74",lo:6.7430,hi:6.8170,count:237},{bin:"6.82",lo:6.8170,hi:6.8909,count:217},{bin:"6.89",lo:6.8909,hi:6.9648,count:202},{bin:"6.96",lo:6.9648,hi:7.0388,count:194},{bin:"7.04",lo:7.0388,hi:7.1127,count:176},{bin:"7.11",lo:7.1127,hi:7.1866,count:173},{bin:"7.19",lo:7.1866,hi:7.2606,count:143},{bin:"7.26",lo:7.2606,hi:7.3345,count:147},{bin:"7.33",lo:7.3345,hi:7.4085,count:157},{bin:"7.41",lo:7.4085,hi:7.4824,count:110},{bin:"7.48",lo:7.4824,hi:7.5563,count:106},{bin:"7.56",lo:7.5563,hi:7.6303,count:95},{bin:"7.63",lo:7.6303,hi:7.7042,count:88},{bin:"7.70",lo:7.7042,hi:7.7782,count:54},{bin:"7.78",lo:7.7782,hi:7.8521,count:72},{bin:"7.85",lo:7.8521,hi:7.9260,count:44},{bin:"7.93",lo:7.9260,hi:8.0000,count:36},{bin:"8.00",lo:8.0000,hi:8.0739,count:39},{bin:"8.07",lo:8.0739,hi:8.1478,count:26}];
const MC_STATS = {mean:6.1091,median:6.0367,ci_lo:4.8823,ci_hi:7.5606,pct_hw:100.0,pct_above_3:100.0,pct_above_5:92.4,min:3.9971,max:8.7965,n_draws:10000,seed:42};
const MC_CHANNELS = [{name:"Metabolic disease",mean:1064.69,p5:885.62,p50:1070.51,p95:1230.23,share:0.5895},{name:"Addiction & behavioral",mean:284.53,p5:208.51,p50:280.27,p95:375.05,share:0.1575},{name:"Agricultural distortion",mean:156.74,p5:114.61,p50:156.39,p95:200.23,share:0.0868},{name:"Environmental degradation",mean:119.87,p5:81.80,p50:118.51,p95:160.92,share:0.0664},{name:"Governance capture",mean:73.29,p5:43.25,p50:72.26,p95:104.96,share:0.0406},{name:"Intergenerational harm",mean:106.91,p5:71.07,p50:105.33,p95:146.21,share:0.0592}];
const MC_WELFARE = {mean:1806.02,ci_lo:1600.21,ci_hi:2000.29};

const THRESHOLDS = [{domain:"U.S. FDA front-of-pack labeling implementation",year:2027,confidence:"Medium",status:"FDA proposed January 2025; final rule expected 2026-2027",crossed:false},{domain:"GLP-1 agonist UPF demand disruption >10% market reduction",year:2028,confidence:"Medium",status:"Semaglutide/tirzepatide reducing UPF demand in clinical populations; market signal emerging",crossed:false},{domain:"California UPF labeling mandate",year:2028,confidence:"High",status:"AB 1066 enacted; implementation 2028",crossed:false},{domain:"SSB tax adoption in >10 U.S. states",year:2030,confidence:"Low",status:"Currently ~7 cities/1 state; industry preemption has blocked state-level adoption",crossed:false},{domain:"UK SDIL sugar reduction validated (>20% reformulation)",year:2020,confidence:"High",status:"28.8% average sugar reduction in covered beverages documented by 2020",crossed:true}];

const AXIOMS = {type:"institutional",items:[{id:"I1",name:"Palatability engineering beyond satiety",description:"UPF bliss-point optimization (Moskowitz methodology) engineers consumption rates that exceed satiety signals — producing 500 kcal/day overconsumption in RCT conditions (Hall et al. 2019) through mechanisms invisible at point of purchase."},{id:"I2",name:"Dietary guidelines regulatory capture",description:"95% COI rate on the 2020 DGAC with 700+ documented industry ties systematically excludes processing-level evidence from official guidance, preventing the information revelation that Pigouvian correction requires."},{id:"I3",name:"Subsidy-demand feedback",description:"$240.5B in Farm Bill commodity subsidies create structural price advantages for UPF ingredients (refined starches, corn syrup, vegetable oils) over whole foods, making UPF artificially cheap relative to nutritional equivalents."}]};

const METHODS_DATA = {
  welfare_function: "W computed across six channels: metabolic disease health costs (Rockefeller Foundation $1.1T anchor), addiction-welfare loss (YFAS prevalence × decision-utility gap), agricultural distortion, environmental degradation, governance capture, and intergenerational developmental harm.",
  cooperative_baseline: "Food system generating $68B in legitimate processing premium from genuine value-adding preservation, distribution, and preparation — without bliss-point addiction engineering or governance capture.",
  falsification: ["F1: Demonstrate that Hall et al. RCT 500 kcal/day overconsumption finding fails to replicate in a pre-registered, equivalently powered study with matched macronutrient content.","F2: Show that Chile\'s FLAL (front-of-pack labeling, marketing bans, school sales restrictions) failed to reduce SSB purchases or improve nutritional outcomes in the 3 years following implementation.","F3: Demonstrate that YFAS-measured food addiction prevalence does not predict treatment-resistant overconsumption or neurobiological markers of addictive behavior."],
  key_sources: ["Hall et al., Ultra-processed diets cause excess calorie intake (2019) Cell Metabolism","Rockefeller Foundation, True Cost of Food (2021)","Fazzino et al., Hyper-palatable foods (2019, 2023)","WHO, Global action plan for the prevention of NCDs (2023)"]
};

const C = {
  bg:'#0D0D0D', panel:'#1A1A1A', border:'rgba(255,255,255,0.08)',
  gold:'#F59E0B', crimson:'#EF4444', green:'#22C55E',
  text:'#F5F0E8', muted:'rgba(255,255,255,0.4)', thead:'#141414',
  mono:"'JetBrains Mono','Fira Code',monospace",
  serif:"'Newsreader','Georgia',serif",
};

function Metric({ label, value, sub, color }) {
  return (
    <div style={{flex:1,minWidth:140,background:C.panel,border:`1px solid ${C.border}`,borderRadius:3,padding:'12px 16px'}}>
      <div style={{fontFamily:C.mono,fontSize:11,color:C.muted,letterSpacing:1,marginBottom:4}}>{label}</div>
      <div style={{fontFamily:C.mono,fontSize:28,fontWeight:700,color:color||C.gold,lineHeight:1}}>{value}</div>
      {sub && <div style={{fontFamily:C.mono,fontSize:11,color:C.muted,marginTop:4}}>{sub}</div>}
    </div>
  );
}
function SectionTitle({ children }) {
  return <div style={{fontFamily:C.mono,fontSize:12,color:C.muted,letterSpacing:2,borderBottom:`1px solid ${C.border}`,paddingBottom:6,marginBottom:12,marginTop:20,textTransform:'uppercase'}}>{children}</div>;
}
function BetaBar({ beta, max }) {
  const pct = Math.min(100,(parseFloat(beta)||0)/(max||15)*100);
  const color = pct>80?C.crimson:pct>50?'#D97706':C.gold;
  return <div style={{background:'rgba(255,255,255,0.04)',borderRadius:2,height:8,flex:1,margin:'0 8px'}}><div style={{width:`${pct}%`,height:'100%',background:color,borderRadius:2,transition:'width 0.4s'}}/></div>;
}
function Tab({ label, active, onClick }) {
  return <button onClick={onClick} style={{fontFamily:C.mono,fontSize:10,letterSpacing:1,padding:'6px 14px',border:'none',cursor:'pointer',background:active?C.gold:'transparent',color:active?'#000':C.muted,borderBottom:active?`2px solid ${C.gold}`:'2px solid transparent',textTransform:'uppercase'}}>{label}</button>;
}

export default function PSTUPFFullDashboard() {
  const [tab, setTab] = useState('overview');
  const maxBeta = Math.max(...CROSS_DOMAIN.map(d=>parseFloat(d.beta)||0),parseFloat(META.beta)||0,10);

  return (
    <div style={{background:C.bg,minHeight:'100vh',fontFamily:C.mono,color:C.text}}>

      <div style={{background:C.panel,borderBottom:`2px solid ${C.gold}`,padding:'14px 24px',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <div>
          <div style={{fontFamily:C.mono,fontSize:11,color:C.muted,letterSpacing:2,marginBottom:4}}>POSTNIEKS IMPOSSIBILITY PROGRAM · SAPM</div>
          <div style={{fontFamily:C.serif,fontSize:24,fontWeight:700,color:C.text}}>{META.title}</div>
          {META.subtitle && <div style={{fontFamily:C.serif,fontSize:15,color:C.muted,marginTop:2,fontStyle:'italic'}}>{META.subtitle}</div>}
        </div>
        <div style={{textAlign:'right'}}>
          <div style={{fontFamily:C.mono,fontSize:11,color:C.muted,letterSpacing:1}}>SYSTEM BETA</div>
          <div style={{fontFamily:C.mono,fontSize:36,fontWeight:700,color:C.gold,lineHeight:1}}>β_W = {META.beta}</div>
          {META.ci && <div style={{fontFamily:C.mono,fontSize:11,color:C.muted}}>90% CI [{META.ci}]</div>}
        </div>
      </div>

      <div style={{background:'rgba(245,158,11,0.06)',padding:'8px 24px',display:'flex',gap:10,alignItems:'center',borderBottom:`1px solid ${C.border}`}}>
        <span style={{background:'rgba(34,197,94,0.15)',color:'#22C55E',fontSize:12,padding:'4px 10px',borderRadius:2,fontFamily:"'JetBrains Mono',monospace",letterSpacing:0.5}}>INSTITUTIONAL PST</span>
        <span style={{fontFamily:C.mono,fontSize:12,color:C.muted}}>{META.type}</span>
        {META.companion && <a href={META.companion} target="_blank" rel="noreferrer" style={{marginLeft:'auto',fontFamily:C.mono,fontSize:11,color:C.gold,textDecoration:'none'}}>↗ Companion</a>}
      </div>

      <div style={{background:C.panel,borderBottom:`1px solid ${C.border}`,padding:'0 24px',display:'flex',gap:4}}>
        {['overview','channels','cross-domain','highlights'].map(t=>(
          <Tab key={t} label={t} active={tab===t} onClick={()=>setTab(t)}/>
        ))}
      </div>

      <div style={{padding:'20px 24px',maxWidth:1100}}>

        {tab==='overview' && (
          <div>
            <div style={{display:'flex',gap:12,flexWrap:'wrap',marginBottom:16}}>
              <Metric label="β_W  (System Beta)" value={META.beta} sub={META.ci?`90% CI [${META.ci}]`:'Headline estimate'} color={C.gold}/>
              {META.pi && <Metric label="Private Payoff Π" value={META.pi+'/yr'} sub="Private sector capture" color={C.text}/>}
              {META.psa && <Metric label="System-Adj. Payoff" value={META.psa} sub="Net welfare: Π − β_W·W" color={C.crimson}/>}
              {META.mu && <Metric label="Break-Even μ*" value={META.mu} sub="Welfare neutrality threshold" color='#22C55E'/>}
              {META.kappa && <Metric label="PSF Curvature κ" value={META.kappa} sub="Pareto shortfall index" color={C.muted}/>}
            </div>
            
            {CHANNELS.length>0 && (
              <div>
                <SectionTitle>Channel Decomposition — Welfare Cost Waterfall</SectionTitle>
                {CHANNELS.map((ch,i)=>(
                  <div key={i} style={{display:'flex',alignItems:'center',marginBottom:8,gap:8}}>
                    <div style={{fontFamily:C.mono,fontSize:12,color:C.muted,width:22,textAlign:'right'}}>{ch.id}</div>
                    <div style={{fontFamily:C.serif,fontSize:15,color:C.text,width:300,flexShrink:0}}>{ch.name}</div>
                    <BetaBar beta={ch.beta} max={parseFloat(META.beta)||15}/>
                    <div style={{fontFamily:C.mono,fontSize:13,color:C.gold,width:55,textAlign:'right'}}>{ch.beta}</div>
                    <div style={{fontFamily:C.mono,fontSize:13,color:C.text,width:110,textAlign:'right'}}>{ch.value}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {tab==='channels' && (
          <div>
            <SectionTitle>Channel-by-Channel Breakdown</SectionTitle>
            <table style={{width:'100%',borderCollapse:'collapse',fontFamily:C.mono,fontSize:13}}>
              <thead>
                <tr style={{background:C.thead}}>
                  {['#','Channel','β_W(i)','δ_i ($/yr)','Weight'].map(h=>(
                    <th key={h} style={{padding:'8px 12px',textAlign:h==='Channel'?'left':'right',color:C.gold,borderBottom:`1px solid ${C.border}`}}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {CHANNELS.map((ch,i)=>(
                  <tr key={i} style={{background:i%2===0?C.panel:C.bg}}>
                    <td style={{padding:'8px 12px',color:C.muted,borderBottom:`1px solid ${C.border}`}}>{ch.id}</td>
                    <td style={{padding:'8px 12px',color:C.text,fontFamily:C.serif,fontSize:14,borderBottom:`1px solid ${C.border}`}}>{ch.name}</td>
                    <td style={{padding:'8px 12px',color:C.gold,textAlign:'right',borderBottom:`1px solid ${C.border}`}}>{ch.beta}</td>
                    <td style={{padding:'8px 12px',color:C.text,textAlign:'right',borderBottom:`1px solid ${C.border}`}}>{ch.value}</td>
                    <td style={{padding:'8px 12px',color:C.muted,textAlign:'right',borderBottom:`1px solid ${C.border}`}}>{ch.weight}</td>
                  </tr>
                ))}
                <tr style={{background:C.thead}}>
                  <td colSpan={2} style={{padding:'10px 12px',color:C.gold,fontWeight:700}}>AGGREGATE β_W</td>
                  <td colSpan={3} style={{padding:'10px 12px',color:C.gold,fontWeight:700,fontSize:16,textAlign:'right'}}>{META.beta}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {tab==='cross-domain' && (
          <div>
            <SectionTitle>Cross-Domain SAPM Registry</SectionTitle>
            <table style={{width:'100%',borderCollapse:'collapse',fontFamily:C.mono,fontSize:13}}>
              <thead>
                <tr style={{background:C.thead}}>
                  {['Domain','β_W','PST Type','Π ($/yr)'].map(h=>(
                    <th key={h} style={{padding:'8px 12px',textAlign:h==='Domain'||h==='PST Type'?'left':'right',color:C.gold,borderBottom:`1px solid ${C.border}`}}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[...CROSS_DOMAIN].sort((a,b)=>(parseFloat(b.beta)||0)-(parseFloat(a.beta)||0)).map((d,i)=>(
                  <tr key={i} style={{background:d.domain===META.title?'rgba(34,197,94,0.08)':i%2===0?C.panel:C.bg}}>
                    <td style={{padding:'8px 12px',color:d.domain===META.title?'#22C55E':C.text,fontFamily:C.serif,fontSize:14,borderBottom:`1px solid ${C.border}`}}>{d.domain===META.title?'▶ ':''}{d.domain}</td>
                    <td style={{padding:'8px 12px',color:parseFloat(d.beta)>10?C.crimson:C.gold,textAlign:'right',fontWeight:700,borderBottom:`1px solid ${C.border}`}}>{d.beta}</td>
                    <td style={{padding:'8px 12px',color:C.muted,borderBottom:`1px solid ${C.border}`}}>{d.type}</td>
                    <td style={{padding:'8px 12px',color:C.text,textAlign:'right',borderBottom:`1px solid ${C.border}`}}>{d.pi}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}


        {/* PSF TAB */}
        {tab === 'psf' && (
          <div>
            <SectionTitle>Private-Systemic Frontier</SectionTitle>
            <div style={{background:C.panel,border:`1px solid ${C.border}`,borderRadius:4,padding:16,marginBottom:16}}>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={PSF_DATA} margin={{top:10,right:30,left:20,bottom:10}}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
                  <XAxis dataKey="pi" stroke={C.muted} tick={{fontFamily:C.mono,fontSize:11}} label={{value:"Π (Private Payoff)",position:"bottom",fill:C.muted,fontFamily:C.mono,fontSize:11}} />
                  <YAxis stroke={C.muted} tick={{fontFamily:C.mono,fontSize:11}} label={{value:"W (System Welfare)",angle:-90,position:"insideLeft",fill:C.muted,fontFamily:C.mono,fontSize:11}} />
                  <Tooltip contentStyle={{background:C.panel,border:`1px solid ${C.border}`,fontFamily:C.mono,fontSize:12,color:C.text}} />
                  <Area type="monotone" dataKey="w" stroke={C.gold} fill="rgba(245,158,11,0.15)" strokeWidth={2} />
                  <ReferenceLine x={PSF_PARAMS.pi_c} stroke={C.green} strokeDasharray="5 5" label={{value:"Π_C",fill:C.green,fontFamily:C.mono,fontSize:11}} />
                  <ReferenceLine x={PSF_PARAMS.pi_p} stroke={C.crimson} strokeDasharray="5 5" label={{value:"Current",fill:C.crimson,fontFamily:C.mono,fontSize:11}} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <div style={{display:'flex',gap:12,flexWrap:'wrap'}}>
              <Metric label="COOPERATIVE PAYOFF Π_C" value={'$'+PSF_PARAMS.pi_c+'B'} sub="Welfare-maximizing extraction" color={C.green} />
              <Metric label="CURRENT PAYOFF Π_P" value={'$'+PSF_PARAMS.pi_p+'B'} sub="Actual private extraction" color={C.crimson} />
              <Metric label="OVER-EXTRACTION" value={'$'+(PSF_PARAMS.pi_p - PSF_PARAMS.pi_c)+'B'} sub="Gap driving welfare loss" color={C.gold} />
            </div>
            <div style={{marginTop:16,padding:16,background:C.panel,border:`1px solid ${C.border}`,borderRadius:4}}>
              <div style={{fontFamily:C.mono,fontSize:12,color:C.gold,marginBottom:8}}>SAPM ↔ CAPM CORRESPONDENCE</div>
              <table style={{width:'100%',borderCollapse:'collapse',fontFamily:C.mono,fontSize:13}}>
                <thead><tr style={{borderBottom:`1px solid ${C.border}`}}>
                  <th style={{padding:'8px 12px',textAlign:'left',color:C.gold}}>SAPM CONSTRUCT</th>
                  <th style={{padding:'8px 12px',textAlign:'left',color:C.gold}}>CAPM ANALOGUE</th>
                </tr></thead>
                <tbody>
                  {[['β_W (System Beta)','β (Market Beta)'],['PSF (Private-Systemic Frontier)','SML (Security Market Line)'],['μ* (Shadow Price)','r_f (Risk-Free Rate)'],['Πˢᵃ (System-Adjusted Payoff)','α (Jensen\'s Alpha)'],['W (System Welfare)','No equivalent — structurally invisible'],['𝒮_W (Welfare Efficiency)','Sharpe Ratio']].map(([s,c],i) => (
                    <tr key={i} style={{borderBottom:`1px solid rgba(255,255,255,0.04)`}}>
                      <td style={{padding:'8px 12px',color:C.text}}>{s}</td>
                      <td style={{padding:'8px 12px',color:C.muted,fontFamily:C.serif}}>{c}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* MONTE CARLO TAB */}

        {/* MONTE CARLO TAB */}
        {tab === 'monte-carlo' && (
          <div>
            <SectionTitle>Monte Carlo Simulation — {MC_STATS.n_draws.toLocaleString()} Draws (seed={MC_STATS.seed})</SectionTitle>
            <div style={{background:C.panel,border:`1px solid ${C.border}`,borderRadius:4,padding:16,marginBottom:16}}>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={MC_HIST} margin={{top:10,right:30,left:20,bottom:30}}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
                  <XAxis dataKey="bin" stroke={C.muted} tick={{fontFamily:C.mono,fontSize:9}} angle={-45} textAnchor="end" interval={4} />
                  <YAxis stroke={C.muted} tick={{fontFamily:C.mono,fontSize:11}} />
                  <Tooltip contentStyle={{background:C.panel,border:`1px solid ${C.border}`,fontFamily:C.mono,fontSize:12,color:C.text}} formatter={(v)=>[v,'Draws']} />
                  <Bar dataKey="count" fill={C.gold} />
                  <ReferenceLine x={MC_STATS.mean.toFixed(2)} stroke={C.crimson} strokeWidth={2} strokeDasharray="5 5" label={{value:'μ='+MC_STATS.mean.toFixed(2),fill:C.crimson,fontFamily:C.mono,fontSize:11,position:'top'}} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div style={{display:'flex',gap:12,flexWrap:'wrap',marginBottom:16}}>
              <Metric label="MEAN β_W" value={MC_STATS.mean.toFixed(2)} sub={'Median: '+MC_STATS.median.toFixed(2)} color={C.gold} />
              <Metric label="90% CI" value={'['+MC_STATS.ci_lo.toFixed(2)+', '+MC_STATS.ci_hi.toFixed(2)+']'} sub={'Range: '+MC_STATS.min.toFixed(2)+'–'+MC_STATS.max.toFixed(2)} color={C.muted} />
              <Metric label="% HOLLOW WIN" value={MC_STATS.pct_hw.toFixed(1)+'%'} sub={'β_W > 1 in all draws'} color={MC_STATS.pct_hw > 95 ? C.crimson : C.gold} />
              <Metric label="% β_W > 3" value={MC_STATS.pct_above_3.toFixed(1)+'%'} color={MC_STATS.pct_above_3 > 90 ? C.crimson : C.gold} />
              <Metric label="% β_W > 5" value={MC_STATS.pct_above_5.toFixed(1)+'%'} color={MC_STATS.pct_above_5 > 50 ? '#D97706' : C.gold} />
            </div>
            <SectionTitle>Channel Welfare Contributions</SectionTitle>
            <table style={{width:'100%',borderCollapse:'collapse',fontFamily:C.mono,fontSize:13}}>
              <thead><tr style={{borderBottom:`1px solid ${C.border}`}}>
                <th style={{padding:'8px 12px',textAlign:'left',color:C.gold}}>CHANNEL</th>
                <th style={{padding:'8px 12px',textAlign:'right',color:C.gold}}>MEAN $B</th>
                <th style={{padding:'8px 12px',textAlign:'right',color:C.gold}}>P5</th>
                <th style={{padding:'8px 12px',textAlign:'right',color:C.gold}}>P50</th>
                <th style={{padding:'8px 12px',textAlign:'right',color:C.gold}}>P95</th>
                <th style={{padding:'8px 12px',textAlign:'right',color:C.gold}}>SHARE</th>
              </tr></thead>
              <tbody>
                {MC_CHANNELS.map((ch,i) => (
                  <tr key={i} style={{borderBottom:`1px solid rgba(255,255,255,0.04)`,background:i%2===0?C.panel:C.bg}}>
                    <td style={{padding:'8px 12px',color:C.text,fontFamily:C.serif,fontSize:14}}>{ch.name}</td>
                    <td style={{padding:'8px 12px',color:C.gold,textAlign:'right',fontWeight:600}}>{ch.mean.toFixed(1)}</td>
                    <td style={{padding:'8px 12px',color:C.muted,textAlign:'right'}}>{ch.p5.toFixed(1)}</td>
                    <td style={{padding:'8px 12px',color:C.muted,textAlign:'right'}}>{ch.p50.toFixed(1)}</td>
                    <td style={{padding:'8px 12px',color:C.muted,textAlign:'right'}}>{ch.p95.toFixed(1)}</td>
                    <td style={{padding:'8px 12px',color:C.muted,textAlign:'right'}}>{(ch.share*100).toFixed(1)}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div style={{marginTop:16,padding:12,background:'rgba(245,158,11,0.06)',border:`1px solid rgba(245,158,11,0.15)`,borderRadius:4}}>
              <div style={{fontFamily:C.mono,fontSize:11,color:C.muted}}>Total welfare cost: <span style={{color:C.gold}}>${MC_WELFARE.mean.toFixed(1)}B</span> (90% CI: ${MC_WELFARE.ci_lo.toFixed(1)}B – ${MC_WELFARE.ci_hi.toFixed(1)}B) · Source: sapm_monte_carlo.py (seed=42)</div>
            </div>
          </div>
        )}
>
                <BarChart data={THRESHOLDS.map(t=>({...t,yearsFromNow:t.year-2026}))} layout="vertical" margin={{top:10,right:30,left:180,bottom:10}}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.06)" />
                  <XAxis type="number" stroke={C.muted} tick={{fontFamily:C.mono,fontSize:11}} label={{value:"Years from 2026",position:"bottom",fill:C.muted,fontFamily:C.mono,fontSize:11}} />
                  <YAxis type="category" dataKey="domain" stroke={C.muted} tick={{fontFamily:C.mono,fontSize:11}} width={170} />
                  <Tooltip contentStyle={{background:C.panel,border:`1px solid ${C.border}`,fontFamily:C.mono,fontSize:12,color:C.text}} />
                  <ReferenceLine x={0} stroke={C.crimson} strokeDasharray="3 3" label={{value:"NOW",fill:C.crimson,fontFamily:C.mono,fontSize:11}} />
                  <Bar dataKey="yearsFromNow" fill={C.gold} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div style={{display:'grid',gap:12}}>
              {THRESHOLDS.map((t,i) => (
                <div key={i} style={{display:'flex',alignItems:'center',gap:16,padding:'12px 16px',background:C.panel,border:`1px solid ${C.border}`,borderRadius:4,borderLeft:`3px solid ${t.crossed ? C.crimson : C.gold}`}}>
                  <div style={{fontFamily:C.mono,fontSize:14,color:t.crossed ? C.crimson : C.gold,fontWeight:700,minWidth:50}}>{t.year}</div>
                  <div style={{flex:1}}>
                    <div style={{fontFamily:C.mono,fontSize:13,color:C.text}}>{t.domain}</div>
                    <div style={{fontFamily:C.serif,fontSize:13,color:C.muted,marginTop:2}}>{t.status}</div>
                  </div>
                  <div style={{fontFamily:C.mono,fontSize:11,color:C.muted,padding:'2px 8px',border:`1px solid ${C.border}`,borderRadius:2}}>{t.confidence}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* METHODS TAB */}
        {tab === 'methods' && (
          <div>
            <SectionTitle>{AXIOMS.type === 'impossibility' ? 'Impossibility Axioms' : 'Institutional Failure Mechanisms'}</SectionTitle>
            <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',gap:12,marginBottom:20}}>
              {AXIOMS.items.map((a,i) => (
                <div key={i} style={{padding:16,background:C.panel,border:`1px solid ${AXIOMS.type === 'impossibility' ? 'rgba(239,68,68,0.2)' : C.border}`,borderRadius:4}}>
                  <div style={{fontFamily:C.mono,fontSize:12,color:AXIOMS.type === 'impossibility' ? C.crimson : C.gold,letterSpacing:1,marginBottom:6}}>{a.id}</div>
                  <div style={{fontFamily:C.serif,fontSize:15,color:C.text,fontWeight:600,marginBottom:6}}>{a.name}</div>
                  <div style={{fontFamily:C.serif,fontSize:14,color:C.muted,lineHeight:1.6}}>{a.description}</div>
                </div>
              ))}
            </div>

            <SectionTitle>System Welfare Function</SectionTitle>
            <div style={{padding:16,background:C.panel,border:`1px solid ${C.border}`,borderRadius:4,marginBottom:20}}>
              <div style={{fontFamily:C.serif,fontSize:15,color:C.text,lineHeight:1.7}}>{METHODS_DATA.welfare_function}</div>
            </div>

            <SectionTitle>Cooperative Baseline</SectionTitle>
            <div style={{padding:16,background:C.panel,border:`1px solid ${C.border}`,borderRadius:4,marginBottom:20}}>
              <div style={{fontFamily:C.serif,fontSize:15,color:C.text,lineHeight:1.7}}>{METHODS_DATA.cooperative_baseline}</div>
            </div>

            <SectionTitle>Falsification Criteria</SectionTitle>
            <div style={{display:'grid',gap:8,marginBottom:20}}>
              {METHODS_DATA.falsification.map((f,i) => (
                <div key={i} style={{padding:'10px 16px',background:C.panel,border:`1px solid ${C.border}`,borderRadius:4,fontFamily:C.serif,fontSize:14,color:C.text,lineHeight:1.6}}>{f}</div>
              ))}
            </div>

            <SectionTitle>Key Sources</SectionTitle>
            <div style={{padding:16,background:C.panel,border:`1px solid ${C.border}`,borderRadius:4,marginBottom:20}}>
              {METHODS_DATA.key_sources.map((s,i) => (
                <div key={i} style={{fontFamily:C.mono,fontSize:12,color:C.muted,padding:'4px 0',borderBottom:`1px solid rgba(255,255,255,0.04)`}}>{s}</div>
              ))}
            </div>

            <div style={{padding:16,background:'rgba(245,158,11,0.06)',border:`1px solid rgba(245,158,11,0.15)`,borderRadius:4}}>
              <div style={{fontFamily:C.mono,fontSize:12,color:C.gold,marginBottom:8}}>CITATION</div>
              <div style={{fontFamily:C.serif,fontSize:14,color:C.text,lineHeight:1.6}}>
                Postnieks, E. (2026). System Asset Pricing Model: {META.title}. SAPM Working Paper. Wooster LLC.
              </div>
            </div>
          </div>
        )}

        {tab==='highlights' && (
          <div>
            <SectionTitle>Key Findings</SectionTitle>
            {HIGHLIGHTS.map((h,i)=>(
              <div key={i} style={{display:'flex',gap:12,marginBottom:12,background:C.panel,border:`1px solid ${C.border}`,borderRadius:3,padding:'12px 16px'}}>
                <div style={{fontFamily:C.mono,fontSize:16,color:C.gold,flexShrink:0}}>▸</div>
                <div style={{fontFamily:C.serif,fontSize:15,color:C.text,lineHeight:1.7}}>{h}</div>
              </div>
            ))}
          </div>
        )}

      </div>

      
      {/* 𝒮_W WELFARE EFFICIENCY RATIO */}
      <div style={{padding:"24px",background:C.panel,border:"2px solid #D9770640",borderRadius:4,margin:"24px 0"}}>
        <div style={{fontFamily:C.mono,fontSize:12,color:"#D97706",letterSpacing:2,marginBottom:16}}>WELFARE EFFICIENCY RATIO</div>
        <div style={{display:"flex",alignItems:"baseline",gap:12,marginBottom:12}}>
          <span style={{fontFamily:C.mono,fontSize:42,fontWeight:700,color:"#D97706"}}>𝒮_W = 0.16</span>
        </div>
        <div style={{fontFamily:C.mono,fontSize:13,color:C.muted,marginBottom:16}}>
          S&P 500 long-run Sharpe ≈ 0.40 &nbsp;|&nbsp; Acceptable ≥ 0.30 &nbsp;|&nbsp; Poor &lt; 0.10
        </div>
        <div style={{fontFamily:C.serif,fontSize:16,color:"#D97706",lineHeight:1.7,fontStyle:"italic"}}>
          A Sharpe ratio this low would cause any fund manager to liquidate the position immediately.
        </div>
      </div>

      {/* GREEK SYMBOL GLOSSARY */}
      <details style={{margin:"24px 0"}}>
        <summary style={{fontFamily:C.mono,fontSize:13,color:C.gold,cursor:"pointer",padding:"12px 16px",background:C.panel,border:"1px solid rgba(245,158,11,0.15)",borderRadius:4,letterSpacing:1,listStyle:"none",display:"flex",alignItems:"center",gap:8}}>
          <span style={{color:C.gold,fontSize:14}}>▸</span> WHAT THESE SYMBOLS MEAN — AND WHY THEY MATTER
        </summary>
        <div style={{background:C.panel,border:"1px solid rgba(245,158,11,0.15)",borderTop:"none",borderRadius:"0 0 4px 4px",padding:"16px",overflowX:"auto"}}>
          <table style={{width:"100%",borderCollapse:"collapse",fontFamily:C.mono,fontSize:13}}>
            <thead>
              <tr style={{borderBottom:"1px solid rgba(255,255,255,0.1)"}}>
                <th style={{textAlign:"left",padding:"8px 10px",color:C.gold,fontSize:12,letterSpacing:1}}>SYMBOL</th>
                <th style={{textAlign:"left",padding:"8px 10px",color:C.gold,fontSize:12,letterSpacing:1}}>PRONOUNCED</th>
                <th style={{textAlign:"left",padding:"8px 10px",color:C.gold,fontSize:12,letterSpacing:1}}>WHAT IT MEASURES</th>
                <th style={{textAlign:"left",padding:"8px 10px",color:C.gold,fontSize:12,letterSpacing:1}}>CAPM EQUIVALENT</th>
                <th style={{textAlign:"left",padding:"8px 10px",color:C.gold,fontSize:12,letterSpacing:1}}>WHY IT MATTERS</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{borderBottom:"1px solid rgba(255,255,255,0.06)"}}>
                <td style={{padding:"10px",color:C.gold,fontWeight:600}}>β_W</td>
                <td style={{padding:"10px",color:C.text}}>beta-W</td>
                <td style={{padding:"10px",color:C.muted,fontFamily:C.serif}}>How much social welfare this sector destroys per dollar of private gain. β_W = 5.0 means $5 of welfare destroyed per $1 earned.</td>
                <td style={{padding:"10px",color:C.muted,fontFamily:C.serif}}>β (market beta) — measures how much an asset moves with the market</td>
                <td style={{padding:"10px",color:C.muted,fontFamily:C.serif}}>In CAPM, high beta means high financial risk. In SAPM, high β_W means high welfare destruction per dollar of revenue.</td>
              </tr>
              <tr style={{borderBottom:"1px solid rgba(255,255,255,0.06)"}}>
                <td style={{padding:"10px",color:C.gold,fontWeight:600}}>𝒮_W</td>
                <td style={{padding:"10px",color:C.text}}>S-W</td>
                <td style={{padding:"10px",color:C.muted,fontFamily:C.serif}}>Private gain per dollar of system welfare cost. Higher is better — but in PST domains it is always low.</td>
                <td style={{padding:"10px",color:C.muted,fontFamily:C.serif}}>Sharpe Ratio — return per unit of risk</td>
                <td style={{padding:"10px",color:C.muted,fontFamily:C.serif}}>S&P 500 long-run Sharpe ≈ 0.40. A Sharpe of 0.10 is poor. VW Dieselgate: 𝒮_W = 0.12. LIBOR: 𝒮_W ≈ 0. ERCOT: 𝒮_W = 0.0005. These are welfare efficiency ratios of industries that GDP calls productive.</td>
              </tr>
              <tr style={{borderBottom:"1px solid rgba(255,255,255,0.06)"}}>
                <td style={{padding:"10px",color:C.gold,fontWeight:600}}>T*</td>
                <td style={{padding:"10px",color:C.text}}>T-star</td>
                <td style={{padding:"10px",color:C.muted,fontFamily:C.serif}}>The predicted time until a Hollow Win collapses into outright failure.</td>
                <td style={{padding:"10px",color:C.muted,fontFamily:C.serif}}>Closest to duration or time-to-default in credit analysis</td>
                <td style={{padding:"10px",color:C.muted,fontFamily:C.serif}}>VW: T* = 6.1 years predicted, ~6 years observed. LIBOR: T* ≤ 0 — the system was failing from day one. Seven years of concealment, not surplus.</td>
              </tr>
              <tr style={{borderBottom:"1px solid rgba(255,255,255,0.06)"}}>
                <td style={{padding:"10px",color:C.gold,fontWeight:600}}>μ*</td>
                <td style={{padding:"10px",color:C.text}}>mu-star</td>
                <td style={{padding:"10px",color:C.muted,fontFamily:C.serif}}>The efficient price of system welfare — what it would cost to make the deal system-preserving. μ* = 1/β_W. Derived from frontier geometry, not assigned by an analyst.</td>
                <td style={{padding:"10px",color:C.muted,fontFamily:C.serif}}>Closest to the risk-free rate as a floor price for risk</td>
                <td style={{padding:"10px",color:C.muted,fontFamily:C.serif}}>β_W = 7.4 → μ* ≈ 0.135. β_W = 35.2 → μ* ≈ 0.028. Lower μ* means cheaper welfare preservation in theory — PST means it never happens without intervention.</td>
              </tr>
              <tr style={{borderBottom:"1px solid rgba(255,255,255,0.06)"}}>
                <td style={{padding:"10px",color:C.gold,fontWeight:600}}>Πˢᵃ</td>
                <td style={{padding:"10px",color:C.text}}>pi-SA</td>
                <td style={{padding:"10px",color:C.muted,fontFamily:C.serif}}>The deal's true value after subtracting welfare cost. Πˢᵃ = Π − μ* · ΔW. If negative, the deal destroys more welfare than it creates.</td>
                <td style={{padding:"10px",color:C.muted,fontFamily:C.serif}}>Jensen's alpha — return above what risk justifies</td>
                <td style={{padding:"10px",color:C.muted,fontFamily:C.serif}}>A deal that looks like +$2.3M joint gain may be −$2.4M system-adjusted. Every GDSS deployed today shows only the first number.</td>
              </tr>
              <tr style={{borderBottom:"1px solid rgba(255,255,255,0.06)"}}>
                <td style={{padding:"10px",color:C.gold,fontWeight:600}}>W</td>
                <td style={{padding:"10px",color:C.text}}>W</td>
                <td style={{padding:"10px",color:C.muted,fontFamily:C.serif}}>The health of the shared system both parties are embedded in. Not A's welfare. Not B's welfare. The system's.</td>
                <td style={{padding:"10px",color:C.muted,fontFamily:C.serif}}>No CAPM equivalent — this is the variable CAPM cannot see</td>
                <td style={{padding:"10px",color:C.muted,fontFamily:C.serif}}>The Private Pareto Theorem proves W cannot be computed from bilateral payoffs. It is structurally outside the payoff space. This is the impossibility.</td>
              </tr>
              <tr style={{borderBottom:"1px solid rgba(255,255,255,0.06)"}}>
                <td style={{padding:"10px",color:C.gold,fontWeight:600}}>δ</td>
                <td style={{padding:"10px",color:C.text}}>delta</td>
                <td style={{padding:"10px",color:C.muted,fontFamily:C.serif}}>Total accumulated welfare cost at crossover — the damage done before the Hollow Win collapses.</td>
                <td style={{padding:"10px",color:C.muted,fontFamily:C.serif}}>No direct equivalent</td>
                <td style={{padding:"10px",color:C.muted,fontFamily:C.serif}}>VW: δ ≈ $3.7 billion in accumulated emissions damage before EPA notice of violation.</td>
              </tr>
              <tr style={{borderBottom:"1px solid rgba(255,255,255,0.06)"}}>
                <td style={{padding:"10px",color:C.gold,fontWeight:600}}>η</td>
                <td style={{padding:"10px",color:C.text}}>eta</td>
                <td style={{padding:"10px",color:C.muted,fontFamily:C.serif}}>How quickly system damage feeds back into private costs. Low η means the Hollow Win persists longer before collapsing.</td>
                <td style={{padding:"10px",color:C.muted,fontFamily:C.serif}}>Closest to mean reversion speed in financial models</td>
                <td style={{padding:"10px",color:C.muted,fontFamily:C.serif}}>VW: η ≈ 0.3. ERCOT: η ≈ 0 — no feedback until catastrophic failure.</td>
              </tr>
              <tr>
                <td style={{padding:"10px",color:C.gold,fontWeight:600}}>λ</td>
                <td style={{padding:"10px",color:C.text}}>lambda</td>
                <td style={{padding:"10px",color:C.muted,fontFamily:C.serif}}>Rate of welfare cost accumulation per unit of private gain. Combined with η and δ determines T*.</td>
                <td style={{padding:"10px",color:C.muted,fontFamily:C.serif}}>No direct equivalent</td>
                <td style={{padding:"10px",color:C.muted,fontFamily:C.serif}}>Higher λ means faster damage accumulation.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </details>

      {/* Footer */}
      <div style={{background:C.panel,borderTop:`1px solid ${C.border}`,padding:'10px 24px',display:'flex',justifyContent:'space-between',marginTop:40}}>
        <div style={{fontFamily:C.mono,fontSize:11,color:C.muted}}>Erik Postnieks · Wooster LLC · Postnieks Impossibility Program</div>
        <div style={{fontFamily:C.mono,fontSize:11,color:C.muted}}>SAPM Working Paper · 2026</div>
      </div>
    <SAPMNav />
      </div>
  );
}
