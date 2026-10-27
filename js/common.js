(function(){
var NAV={en:["Home","History","Guide","Help"],es:["Inicio","Historial","Guía","Ayuda"],fr:["Accueil","Historique","Guide","Aide"],de:["Start","Verlauf","Anleitung","Hilfe"],pt:["Início","Histórico","Guia","Ajuda"],hi:["होम","इतिहास","गाइड","सहायता"]};
var FOOT={en:"Your data never leaves your browser.",es:"Tus datos nunca salen de tu navegador.",fr:"Vos données ne quittent jamais votre navigateur.",de:"Ihre Daten verlassen nie Ihren Browser.",pt:"Seus dados nunca saem do seu navegador.",hi:"आपका डेटा आपके ब्राउज़र से बाहर नहीं जाता।"};
window.applyChrome=function(lang){
var n=NAV[lang]||NAV.en;
document.querySelectorAll(".nav a").forEach(function(a,i){a.textContent=n[i]});
var f=document.getElementById("f-priv");if(f)f.textContent=FOOT[lang]||FOOT.en;
var y=document.getElementById("year");if(y)y.textContent=new Date().getFullYear();
};
var l="en";try{l=localStorage.getItem("inv_lang")||"en"}catch(e){}
window.applyChrome(l);
})();
