(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(22)},16:function(e,t,a){},18:function(e,t,a){},20:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var i=a(0),o=a.n(i),n=a(7),r=a.n(n);a(16),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=a(1),s=a(2),l=a(4),u=a(3),d=a(5);var p=function(e){return o.a.createElement("section",null,e.children)};a(18);var m=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={},a.handleClick=function(e){alert("Click")},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"Media",onClick:this.handleClick},o.a.createElement("div",{className:"Media-cover"},o.a.createElement("img",{className:"Media-image",src:this.props.image,alt:"",width:260,height:160}),o.a.createElement("h3",{className:"Media-title"},this.props.title),o.a.createElement("p",{className:"Media-author"},this.props.author)))}}]),t}(i.PureComponent);a(20);a(9);var g=function(e){return o.a.createElement("div",{className:"Playlist"},e.playlist.map(function(e,t){return o.a.createElement(m,{key:t,title:e.title,author:e.author,image:e.cover})}))};var v=function(e){return o.a.createElement("div",null,o.a.createElement("p",null,e.decription),o.a.createElement("h2",null),o.a.createElement(g,{playlist:e.playlist}))};var h=function(e){return o.a.createElement("div",null,e.categories.map(function(e){return o.a.createElement(v,Object.assign({key:e.id},e))}))},b=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(p,null,o.a.createElement(h,{categories:this.props.data.categories})))}}]),t}(i.Component),y=a(8);r.a.render(o.a.createElement(b,{data:y}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e){e.exports={categories:[{id:1,description:"Lo mejor de la semana",title:"Destacados",playlist:[{title:"\xbfQu\xe9 es responsive Design?",author:"LeonidasEsteban",type:"video",cover:"./images/covers/responsive.jpg",src:"http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4",id:1},{title:"C\xf3mo optimzar la carga de un website",author:"LeonidasEsteban",type:"video",cover:"./images/covers/optimizar.jpg",src:"http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4",id:2},{title:"Qu\xe9 es Bitcoin",author:"Yograterol",type:"video",cover:"./images/covers/bitcoin.jpg",src:"http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4",id:3},{title:"Que pas\xf3 con HTML5",author:"Freddier",type:"video",cover:"./images/covers/html5.jpg",src:"http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4",id:4},{title:"Lo mejor de Mejorando.la",author:"Cvander",type:"video",cover:"./images/covers/mejorandola.jpg",src:"http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4",id:5}]},{id:2,description:"Lo mejor para concentrarte",title:"Para programar",playlist:[{title:"One more time",author:"Daft Punk",type:"video",cover:"./images/covers/one-more-time.jpg",src:"http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4",id:1},{title:"Midnight City",author:"M83",type:"video",cover:"./images/covers/midnight.jpg",src:"http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4",id:5},{title:"Solar Sailer",author:"Daft Punk",type:"video",cover:"./images/covers/solar-sailer.jpg",src:"http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4",id:2},{title:"The social network",author:"The social network",type:"video",cover:"./images/covers/social.jpg",src:"http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4",id:4},{title:"No vaya a ser",author:"Pablo Alboran",type:"video",cover:"./images/covers/no-vaya-a-ser.jpg",src:"http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4",id:3}]},{id:3,description:"Si no te queda de otra",title:"Regueton",playlist:[{title:"Despacito",author:"Luis Fonsi",type:"video",cover:"./images/covers/despacito.jpg",src:"http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4",id:1},{title:"Echame la culpa",author:"Luis fonsi",type:"video",cover:"./images/covers/echame-la-culpa.jpg",src:"http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4",id:3},{title:"Mi Gente",author:"J Bavil",type:"video",cover:"./images/covers/mi-gente.jpg",src:"http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4",id:2},{title:"Felices los 4",author:"Maluma",type:"video",cover:"./images/covers/felices.jpg",src:"http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4",id:4},{title:"Me Reh\xfaso",author:"Danny Ocean",type:"video",cover:"./images/covers/rehuso.jpg",src:"http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4",id:5}]}]}}},[[10,2,1]]]);
//# sourceMappingURL=main.ef91719e.chunk.js.map