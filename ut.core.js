/**/

//css,elm,key,mid,fop,lop,run
//red,mac,lex
//css
;(function(root){
 let md={}
 md.styleclass='madamstyle'
 md.css=`
div.layer {
line-height: 1;
position: absolute;
color: white;
transition: background-image 0.7s ease;
background-image: url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7);
/*transparent*/
white-space: pre-wrap;
word-break: break-all;
font-family: monospace;
}
div.XXX {
background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQYV2NgYGD4DwABBAEAcCBlCwAAAABJRU5ErkJggg==);/*black*/
}
div.X00 {
/*position: initial !important;*/
background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQYV2NgYGD4DwABBAEAcCBlCwAAAABJRU5ErkJggg==);/*black*/
background-size: cover;
}
`; 
 ;
 Object.assign(root.md,md)
 //css setting
 function css(){
  let ut=this,fn=ut.fn
  ,el=fn.i3(`<style class="${ut.md.styleclass}">${ut.md.css}</style>`)
  ,head=fn.q('head')
  ;
  fn.a2(el,head)
  ;
  return ut
 }
 root.css=css
 ;
})(ut);
//elm
;(function(root){
 let md={},fn=root.fn
 md.baselayer='layer'
 md.layernames="XXX,X00,X01,X02,X03,X04,X05,X06,X07,X08,X09".split(',') //X00...X09 on the XXX 
 md.layers=fn.gc(md.baselayer)
 md.baselayerquery='body'
 Object.assign(root.md,md)

 //element setting
 function elm(){
  let ut=this,fn=ut.fn
  if(fn.q('.X00'))return console.log('double load')
  ;  
  let fr=fn.cfr(),xxx=void 0
  ;
  ut.md.layernames.map(d=>{
   let el=fn.i3(`<div class="${ut.md.baselayer} ${d}" data-id="${d}"></div>`)
   ,parent=(xxx)?xxx:fr
   fn.a2(el,parent)
   if(d==='XXX') xxx=el
   ;//X00...X09
   ut.sd[d]={}
   ut.sd[d].style={}
   //mdm.sd[d].flg=1
   ;
  })
  fn.a2(fr,fn.q(ut.md.baselayerquery))

  //console.log(mdm.md.layers)
  return ut;
 }
 root.elm=elm
})(ut);
//key
;(function(root){
 //key setting
 function key(){
  let ut=this,fn=ut.fn
  fn.dde('keydown',(e)=>{
   if(ut.md.keyblock)return;
   if(!(ut.sd["$$0"]===e.which)) ut.sd["$$1"]=ut.sd["$$0"];
   ut.sd["$$0"]=e.which
  })
  return ut;
 }
 root.key=key;
})(ut);
//mid
;(function(root){
 function mid(){
  let ut=this
  return ut
 }
 root.mid=mid;
})(ut);
//fop
;(function(root){
 function fop(i){
  //console.log(i)
  let ut=this;
  for(let el of ut.md.layers){
   let d=el.className.replace('layer','').trim()
   if(!(d==="XXX"))Object.assign(el,ut.sd[d])   
   Object.assign(el.style,ut.sd[d].style)
  }
 }
 root.fop=fop;
})(ut);
//lop
;(function(root){
 function lop(i){
  let ut=this,fn=ut.fn
  if(ut.md.readblock)return;
  let a=fn.addr(ut.sd['$$$']).set(ut.md.n)
  ,cmdline=ut.md.macros[a.get('@')][a.get('n')]||''
  ;
  if(cmdline){
   ut.sd['$$$']=a.get() //main+sub+':'+n
   ut.red(cmdline) //read the macro on the lineloop
  }
  ut.md.n+=1;
 } 
 root.lop=lop
})(ut);
//run
;(function(root){

 function run(str,opt){
  let ut=this
  Object.assign(ut,opt)
  ut.css().elm().key().mid().mac(str,1)
  ;
  ut.md.f=0
  ut.md.l=0
  ;
  ut.md.cf=setInterval(ut.fop,1000/ut.md.fps,ut.md.f++)
  ut.md.lf=setInterval(ut.lop,1000/ut.md.lps,ut.md.l++)
 }

 root.run=run;
})(ut);
