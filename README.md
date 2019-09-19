### utai
~~~
script(src="https://gnjo.github.io/wrap/wrap.js")
script(src="https://gnjo.github.io/utai/ut.fast.js")
script(src="https://gnjo.github.io/utai/ut.core.js")
script(src="https://gnjo.github.io/utai/ut.cmds.js")
~~~
call rule
~~~
let x=function(a,b,c){
 let ut=this;
}

//var ut={} //ut.fast.js
x.call(ut,a,b,c)
~~~
