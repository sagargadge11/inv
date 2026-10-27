(function(){
const root=document.getElementById("hroot");
const get=()=>{try{return JSON.parse(localStorage.getItem("inv_history")||"[]")}catch(e){return[]}};
const put=l=>{try{localStorage.setItem("inv_history",JSON.stringify(l))}catch(e){}};
const money=(n,c,l)=>{try{return new Intl.NumberFormat(l==="hi"?"en-IN":l,{style:"currency",currency:c}).format(n||0)}catch(e){return(n||0).toFixed(2)+" "+c}};
function el(tag,cls,txt){const e=document.createElement(tag);if(cls)e.className=cls;if(txt!=null)e.textContent=txt;return e}
function render(){
const list=get();root.innerHTML="";
if(!list.length){
const box=el("div","empty-state");
box.append(el("p",null,"No invoices yet. Invoices you download are saved here automatically."));
const a=el("a","btn","Create an invoice");a.href="index.html";box.append(a);root.append(box);return}
const bar=el("div","bar");bar.append(el("span","s",list.length+" saved invoice"+(list.length>1?"s":"")));
const clr=el("button","btn sm danger","Clear all");
clr.onclick=()=>{if(confirm("Delete all saved invoices from this browser?")){put([]);render()}};
bar.append(clr);root.append(bar);
const wrap=el("div","hlist");
list.forEach(d=>{
const row=el("div","hitem"),info=el("div");
info.append(el("div","t",(d.title||"Invoice")+" #"+(d.num||"")));
const who=(d.to||"").split("\n")[0];
info.append(el("div","s",[who,d.date,new Date(d.savedAt).toLocaleString()].filter(Boolean).join(" · ")));
row.append(info,el("div","amt2",money(d.total,d.cur,d.lang)));
const act=el("div","hact");
const ed=el("button","btn sm","Edit / Re-download");
ed.onclick=()=>{try{localStorage.setItem("inv_edit",JSON.stringify(d))}catch(e){}location.href="index.html"};
const del=el("button","btn sm danger","Delete");
del.onclick=()=>{put(get().filter(x=>x.id!==d.id));render()};
act.append(ed,del);row.append(act);wrap.append(row)});
root.append(wrap);
}
render();
})();
