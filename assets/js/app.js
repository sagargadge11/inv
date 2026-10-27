const T={
en:{invoice:"Invoice",from:"From",to:"Bill To",date:"Date",due:"Due Date",item:"Item",qty:"Qty",rate:"Rate",amt:"Amount",add:"+ Add item",notes:"Notes",terms:"Terms",sub:"Subtotal",disc:"Discount",tax:"Tax",ship:"Shipping",total:"Total",paid:"Amount Paid",bal:"Balance Due",dl:"Download PDF",lang:"Language",cur:"Currency",whoFrom:"Who is this from?",whoTo:"Who is this to?",notesPh:"Notes – any relevant information",termsPh:"Terms and conditions, late fees, payment methods",itemPh:"Description of item/service",h1:"Free Invoice Generator",sub2:"Fill in the details, pick a language and currency, then download your invoice as a PDF.",hint:"In the print dialog choose “Save as PDF” as the destination."},
es:{invoice:"Factura",from:"De",to:"Facturar a",date:"Fecha",due:"Vencimiento",item:"Artículo",qty:"Cant.",rate:"Precio",amt:"Importe",add:"+ Añadir artículo",notes:"Notas",terms:"Condiciones",sub:"Subtotal",disc:"Descuento",tax:"Impuesto",ship:"Envío",total:"Total",paid:"Importe pagado",bal:"Saldo pendiente",dl:"Descargar PDF",lang:"Idioma",cur:"Moneda",whoFrom:"¿De quién es?",whoTo:"¿Para quién es?",notesPh:"Notas: información relevante",termsPh:"Condiciones, recargos por demora, formas de pago",itemPh:"Descripción del artículo/servicio",h1:"Generador de facturas gratis",sub2:"Rellena los datos, elige idioma y moneda y descarga tu factura en PDF.",hint:"En el diálogo de impresión elige «Guardar como PDF»."},
fr:{invoice:"Facture",from:"De",to:"Facturer à",date:"Date",due:"Échéance",item:"Article",qty:"Qté",rate:"Prix",amt:"Montant",add:"+ Ajouter un article",notes:"Notes",terms:"Conditions",sub:"Sous-total",disc:"Remise",tax:"Taxe",ship:"Livraison",total:"Total",paid:"Montant payé",bal:"Solde dû",dl:"Télécharger le PDF",lang:"Langue",cur:"Devise",whoFrom:"De la part de ?",whoTo:"Pour qui ?",notesPh:"Notes – informations utiles",termsPh:"Conditions, pénalités de retard, modes de paiement",itemPh:"Description de l'article/service",h1:"Générateur de factures gratuit",sub2:"Remplissez les détails, choisissez la langue et la devise, puis téléchargez votre facture en PDF.",hint:"Dans la fenêtre d'impression, choisissez « Enregistrer au format PDF »."},
de:{invoice:"Rechnung",from:"Von",to:"Rechnung an",date:"Datum",due:"Fälligkeit",item:"Position",qty:"Menge",rate:"Preis",amt:"Betrag",add:"+ Position hinzufügen",notes:"Hinweise",terms:"Bedingungen",sub:"Zwischensumme",disc:"Rabatt",tax:"Steuer",ship:"Versand",total:"Gesamt",paid:"Bezahlt",bal:"Offener Betrag",dl:"PDF herunterladen",lang:"Sprache",cur:"Währung",whoFrom:"Von wem?",whoTo:"An wen?",notesPh:"Hinweise – relevante Informationen",termsPh:"Bedingungen, Verzugsgebühren, Zahlungsarten",itemPh:"Beschreibung der Leistung",h1:"Kostenloser Rechnungsgenerator",sub2:"Details ausfüllen, Sprache und Währung wählen und die Rechnung als PDF herunterladen.",hint:"Wählen Sie im Druckdialog „Als PDF speichern“."},
pt:{invoice:"Fatura",from:"De",to:"Faturar para",date:"Data",due:"Vencimento",item:"Item",qty:"Qtd.",rate:"Preço",amt:"Valor",add:"+ Adicionar item",notes:"Notas",terms:"Termos",sub:"Subtotal",disc:"Desconto",tax:"Imposto",ship:"Frete",total:"Total",paid:"Valor pago",bal:"Saldo devedor",dl:"Baixar PDF",lang:"Idioma",cur:"Moeda",whoFrom:"De quem?",whoTo:"Para quem?",notesPh:"Notas – informações relevantes",termsPh:"Termos, multas por atraso, formas de pagamento",itemPh:"Descrição do item/serviço",h1:"Gerador de faturas grátis",sub2:"Preencha os dados, escolha idioma e moeda e baixe sua fatura em PDF.",hint:"Na janela de impressão, escolha “Salvar como PDF”."},
hi:{invoice:"चालान",from:"प्रेषक",to:"बिल प्राप्तकर्ता",date:"तारीख",due:"देय तिथि",item:"वस्तु",qty:"मात्रा",rate:"दर",amt:"राशि",add:"+ वस्तु जोड़ें",notes:"टिप्पणियाँ",terms:"नियम व शर्तें",sub:"उप-योग",disc:"छूट",tax:"कर",ship:"शिपिंग",total:"कुल",paid:"भुगतान की गई राशि",bal:"बकाया राशि",dl:"PDF डाउनलोड करें",lang:"भाषा",cur:"मुद्रा",whoFrom:"यह किसकी तरफ से है?",whoTo:"यह किसके लिए है?",notesPh:"टिप्पणियाँ – कोई भी ज़रूरी जानकारी",termsPh:"नियम, विलंब शुल्क, भुगतान के तरीके",itemPh:"वस्तु/सेवा का विवरण",h1:"मुफ़्त चालान जनरेटर",sub2:"विवरण भरें, भाषा और मुद्रा चुनें, फिर अपना चालान PDF में डाउनलोड करें।",hint:"प्रिंट डायलॉग में “Save as PDF” चुनें।"}
};
const LOGO={en:"+ Add logo",es:"+ Añadir logo",fr:"+ Ajouter un logo",de:"+ Logo hinzufügen",pt:"+ Adicionar logo",hi:"+ लोगो जोड़ें"};
const FOOT={en:"Your data never leaves your browser.",es:"Tus datos nunca salen de tu navegador.",fr:"Vos données ne quittent jamais votre navigateur.",de:"Ihre Daten verlassen nie Ihren Browser.",pt:"Seus dados nunca saem do seu navegador.",hi:"आपका डेटा आपके ब्राउज़र से बाहर नहीं जाता।"};
const LN={en:"English",es:"Español",fr:"Français",de:"Deutsch",pt:"Português",hi:"हिन्दी"};
const CUR=["USD","EUR","GBP","INR","JPY","AUD","CAD","CHF","CNY","AED","SGD","BRL","MXN","ZAR"];
const $=id=>document.getElementById(id);
let lang="en",cur="USD",items=[{d:"",q:1,r:0}];
const today=new Date(),iso=d=>d.toISOString().slice(0,10);
$("date").value=iso(today);$("due").value=iso(new Date(+today+30*864e5));
$("lang").innerHTML=Object.entries(LN).map(([k,v])=>`<option value="${k}">${v}</option>`).join("");
$("cur").innerHTML=CUR.map(c=>{let n=c;try{n=c+" – "+new Intl.DisplayNames(["en"],{type:"currency"}).of(c)}catch(e){}return `<option value="${c}">${n}</option>`}).join("");
const money=n=>{try{return new Intl.NumberFormat(lang==="hi"?"en-IN":lang,{style:"currency",currency:cur}).format(n||0)}catch(e){return (n||0).toFixed(2)}};
const esc=s=>String(s).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;");
function renderItems(){
const t=T[lang];
$("items").innerHTML=items.map((it,i)=>`<div class="row"><textarea class="desc" rows="1" data-i="${i}" data-f="d" placeholder="${esc(t.itemPh)}" style="min-height:38px">${esc(it.d)}</textarea><input type="number" min="0" step="any" data-i="${i}" data-f="q" value="${it.q}"><input type="number" min="0" step="any" data-i="${i}" data-f="r" value="${it.r}"><div class="amt" id="a${i}">${money(it.q*it.r)}</div><button class="x" data-x="${i}" aria-label="Remove">×</button></div>`).join("");
}
function totals(){
items.forEach((it,i)=>{const e=$("a"+i);if(e)e.textContent=money(it.q*it.r)});
const sub=items.reduce((s,i)=>s+i.q*i.r,0),disc=sub*(+$("disc").value||0)/100,tax=(sub-disc)*(+$("tax").value||0)/100;
const total=sub-disc+tax+(+$("ship").value||0);
$("v-sub").textContent=money(sub);$("v-total").textContent=money(total);$("v-bal").textContent=money(total-(+$("paid").value||0));
}
function applyLang(){
const t=T[lang],prev=$("title").dataset.auto;
if(!prev||$("title").value===prev){$("title").value=t.invoice}$("title").dataset.auto=t.invoice;
const m={"l-from":"from","l-to":"to","l-date":"date","l-due":"due","h-desc":"item","h-qty":"qty","h-rate":"rate","h-amt":"amt","add":"add","l-notes":"notes","l-terms":"terms","k-sub":"sub","k-disc":"disc","k-tax":"tax","k-ship":"ship","k-total":"total","k-paid":"paid","k-bal":"bal","t-dl":"dl","t-lang":"lang","t-cur":"cur","h1":"h1","sub":"sub2"};
for(const k in m)$(k).textContent=t[m[k]];
document.querySelectorAll("[data-ph]").forEach(e=>e.placeholder=t[e.dataset.ph]);
$("logoTxt").textContent=LOGO[lang];$("f-priv").textContent=FOOT[lang];document.documentElement.lang=lang;renderItems();totals();
}
$("lang").onchange=e=>{lang=e.target.value;applyLang()};
$("cur").onchange=e=>{cur=e.target.value;renderItems();totals()};
$("add").onclick=()=>{items.push({d:"",q:1,r:0});renderItems();totals()};
$("items").addEventListener("input",e=>{const el=e.target,i=el.dataset.i;if(i==null)return;items[i][el.dataset.f]=el.dataset.f==="d"?el.value:(+el.value||0);totals()});
$("items").addEventListener("click",e=>{const x=e.target.dataset.x;if(x==null)return;items.splice(+x,1);if(!items.length)items.push({d:"",q:1,r:0});renderItems();totals()});
["disc","tax","ship","paid"].forEach(id=>$(id).addEventListener("input",totals));
let logo="",dls=null;
try{claude.use("downloads").then(x=>dls=x).catch(()=>{})}catch(e){}
function setLogo(v){logo=v;$("logoImg").src=v||"";$("logoImg").hidden=!v;$("logoTxt").hidden=!!v;$("logoX").hidden=!v;$("logoLbl").classList.toggle("has",!!v)}
$("logo").onchange=e=>{const f=e.target.files[0];if(!f)return;if(f.size>3e6){alert("Max 3 MB");return}const r=new FileReader();r.onload=()=>setLogo(r.result);r.readAsDataURL(f);e.target.value=""};
$("logoX").onclick=()=>setLogo("");
const nl=v=>esc(v).replace(/\n/g,"<br>");
const fd=v=>{try{return v?new Date(v+"T00:00").toLocaleDateString(lang==="hi"?"en-IN":lang,{day:"numeric",month:"short",year:"numeric"}):""}catch(e){return v}};
function pdfHTML(){
const t=T[lang],sub=items.reduce((a,i)=>a+i.q*i.r,0),dp=+$("disc").value||0,tp=+$("tax").value||0,sh=+$("ship").value||0,pd=+$("paid").value||0;
const dv=sub*dp/100,tv=(sub-dv)*tp/100,total=sub-dv+tv+sh;
let list=items.filter(i=>i.d.trim()||i.r);if(!list.length)list=items;
const td="padding:8px;border-bottom:1px solid #e5e5e5;vertical-align:top;";
const rows=list.map(i=>`<tr><td style="${td}">${nl(i.d)}</td><td style="${td}text-align:right">${i.q}</td><td style="${td}text-align:right">${money(i.r)}</td><td style="${td}text-align:right">${money(i.q*i.r)}</td></tr>`).join("");
const tr=(k,v,b)=>`<tr><td style="padding:4px 8px;color:#666;text-align:right${b?";font-weight:700;color:#000":""}">${k}</td><td style="padding:4px 8px;text-align:right;white-space:nowrap${b?";font-weight:700;font-size:15px":""}">${v}</td></tr>`;
const blk=(k,v)=>v.trim()?`<div style="margin-top:16px"><div style="font-size:10px;font-weight:600;letter-spacing:.6px;text-transform:uppercase;color:#666;margin-bottom:4px">${k}</div><div>${nl(v)}</div></div>`:"";
const th="padding:8px;background:#777620;color:#fff;font-size:10px;letter-spacing:.6px;text-transform:uppercase;";
return `<div style="width:794px;padding:44px;background:#fff;color:#111;font-family:Inter,Arial,sans-serif;font-size:12px;line-height:18px">
<table style="width:100%;border-collapse:collapse"><tr><td style="vertical-align:top">${logo?`<img src="${logo}" style="max-height:80px;max-width:200px;display:block;margin-bottom:12px">`:""}<div style="font-size:28px;font-weight:700;text-transform:uppercase;letter-spacing:.02em">${esc($("title").value)}</div></td>
<td style="vertical-align:top;text-align:right;color:#666;line-height:22px"># <b style="color:#000">${esc($("num").value)}</b><br>${t.date}: <b style="color:#000">${fd($("date").value)}</b><br>${t.due}: <b style="color:#000">${fd($("due").value)}</b></td></tr></table>
<table style="width:100%;border-collapse:collapse;margin-top:24px"><tr><td style="width:50%;vertical-align:top;padding-right:16px">${blk(t.from,$("from").value)}</td><td style="vertical-align:top">${blk(t.to,$("to").value)}</td></tr></table>
<table style="width:100%;border-collapse:collapse;margin-top:24px"><tr><th style="${th}text-align:left">${t.item}</th><th style="${th}text-align:right;width:60px">${t.qty}</th><th style="${th}text-align:right;width:110px">${t.rate}</th><th style="${th}text-align:right;width:120px">${t.amt}</th></tr>${rows}</table>
<table style="margin:16px 0 0 auto;border-collapse:collapse">${tr(t.sub,money(sub))}${dp?tr(t.disc+" ("+dp+"%)","−"+money(dv)):""}${tp?tr(t.tax+" ("+tp+"%)",money(tv)):""}${sh?tr(t.ship,money(sh)):""}${tr(t.total,money(total),1)}${pd?tr(t.paid,money(pd)):""}${pd?tr(t.bal,money(total-pd),1):""}</table>
${blk(t.notes,$("notes").value)}${blk(t.terms,$("terms").value)}</div>`}
async function makePdf(){
const h=$("pdfHost");h.innerHTML=pdfHTML();
try{await document.fonts.ready}catch(e){}
const imgs=[...h.querySelectorAll("img")];await Promise.all(imgs.map(i=>i.decode?i.decode().catch(()=>{}):0));
try{return await html2pdf().set({margin:0,image:{type:"jpeg",quality:.95},html2canvas:{scale:2,useCORS:true,backgroundColor:"#fff"},jsPDF:{unit:"pt",format:"a4",orientation:"portrait"},pagebreak:{mode:["css","legacy"]}}).from(h.firstElementChild).outputPdf("blob")}finally{h.innerHTML=""}}
$("dl").onclick=async()=>{
const b=$("dl");b.disabled=true;
try{
const blob=await makePdf(),name=(($("title").value||"Invoice")+"-"+$("num").value).replace(/[\\/:*?"<>|]/g,"").trim()+".pdf";
if(dls)await dls.save({filename:name,data:blob});
else{const a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download=name;document.body.appendChild(a);a.click();a.remove()}
saveHistory();
}catch(e){if(!e||e.code!=="declined")alert("Could not create the PDF. Please try again.")}
finally{b.disabled=false}};
let editId=null;
function snapshot(){
const sub=items.reduce((x,i)=>x+i.q*i.r,0),dv=sub*(+$("disc").value||0)/100,tv=(sub-dv)*(+$("tax").value||0)/100,total=sub-dv+tv+(+$("ship").value||0);
return{id:editId||("i"+Date.now()),savedAt:Date.now(),lang,cur,title:$("title").value,num:$("num").value,date:$("date").value,due:$("due").value,from:$("from").value,to:$("to").value,items:items.map(i=>({...i})),disc:$("disc").value,tax:$("tax").value,ship:$("ship").value,paid:$("paid").value,notes:$("notes").value,terms:$("terms").value,total,logo};
}
function saveHistory(){
try{
let list=JSON.parse(localStorage.getItem("inv_history")||"[]");const d=snapshot();editId=d.id;
list=[d,...list.filter(x=>x.id!==d.id)].slice(0,30);
try{localStorage.setItem("inv_history",JSON.stringify(list))}catch(e){list.forEach(x=>{if(x.id!==d.id)x.logo=""});localStorage.setItem("inv_history",JSON.stringify(list))}
}catch(e){}
}
function loadInv(d){
editId=d.id;lang=d.lang||"en";cur=d.cur||"USD";$("lang").value=lang;$("cur").value=cur;
$("title").value=d.title;$("title").dataset.auto="__loaded";
["num","date","due","from","to","disc","tax","ship","paid","notes","terms"].forEach(k=>$(k).value=d[k]??"");
items=(d.items&&d.items.length?d.items:[{d:"",q:1,r:0}]).map(i=>({d:i.d||"",q:+i.q||0,r:+i.r||0}));
setLogo(d.logo||"");
}
try{const raw=localStorage.getItem("inv_edit");if(raw){localStorage.removeItem("inv_edit");loadInv(JSON.parse(raw))}}catch(e){}
applyLang();
