(this["webpackJsonpmusic-player"]=this["webpackJsonpmusic-player"]||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var i=n(1),o=n(0),a=n.n(o),l=n(12),c=n.n(l),r=(n(25),n(26),n(6)),s=function(e){return e.audioList.currectClicked},u="ADD_FILES",d="DELETE_FILES",f="CLICKED";var p=n(3),j=n.n(p),b=n(9),h=n(4),v=n(5),O=n(19),g=new(function(){function e(){Object(h.a)(this,e),this.hawlerInstance=[],this.audioPlayId={}}return Object(v.a)(e,[{key:"play",value:function(e,t,n){var i=this,o=new O.Howl({src:e,autoplay:!1,loop:!1,preload:!0,volume:1,format:"mp4",onloaderror:function(){console.error("Audio file is not loaded"),n()},onplayerror:function(){console.error("On play error"),n()},onplay:function(){console.info("Audio started playing")},onend:function(){console.info("Audio playing completed"),t()},onmute:function(){console.info("Muted")}}),a={id:null};return o.once("load",(function(){console.log("here"),a.id=o.play(),i.audioPlayId[a.id]=o})),o.once("end",(function(){i.onAudioEnd(a)})),a}},{key:"onAudioEnd",value:function(e){console.log("IN onAudioEnd,,,,,deleting ID"),delete this.audioPlayId[e]}},{key:"stop",value:function(e){this.audioPlayId[e].stop(e)}},{key:"stopAll",value:function(){}},{key:"pause",value:function(e){this.audioPlayId[e].pause()}},{key:"resume",value:function(e){this.audioPlayId[e].play()}}]),e}()),y=g;function m(e){return new Promise((function(t,n){y.play(e,t,n)})).catch((function(e){console.log("Got error",e)}))}window.audioPlayer=g;var k=Object(r.b)((function(e){return{currentClickedItem:s(e)}}))((function(e){return console.log(e),Object(i.jsx)(i.Fragment,{})})),x=(n(33),[{fileName:"first audio",index:1},{fileName:"first audio",index:2},{fileName:"first audio",index:3},{fileName:"first audio",index:4},{fileName:"first audio",index:5},{fileName:"first audio",index:6}]);function C(e){console.log(this),this.updateClickedAudioItem(e),console.log(m)}function w(e){var t=this,n=e.props,o=e.files;return console.log(o,n),o.map((function(e){var o=e.fileName,a=e.index;console.log(t);var l=C.bind(n,a);return Object(i.jsx)("li",{className:"List",onClick:l,children:o},a)}))}var B=Object(r.b)((function(e){return{files:function(e){return e.fileInput.files}(e)}}),{updateClickedAudioItem:function(e){return console.log(e),{type:f,payload:e}}})((function(e){console.log("PROPS",e.updateClickedAudioItem);var t={props:e,files:e.files},n={props:e,files:x};return Object(i.jsxs)("div",{className:"myBox",children:[Object(i.jsx)(k,{}),Object(i.jsx)("ol",{children:w(e.files?t:n)})]})})),I=n(2),A=n(11),F=n(10),N=n.p+"static/media/folder-open.610cbfaa.svg",P=[];function L(e,t){return new Promise((function(n,i){var o=new FileReader;o.addEventListener("load",(function(){var i=o.result;P.push({fileName:e.name,index:t}),n(i)})),o.addEventListener("error",(function(){i("Something error in file loading :: STATE: ".concat(o.readyState))})),o.readAsDataURL(e)}))}function E(){return(E=Object(b.a)(j.a.mark((function e(t){var n,i,o,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(n=[],i=0;i<t.files.length;i++)o=t.files.item(i),n.push(L(o,i));return e.next=4,Promise.all(n);case 4:return a=e.sent,window.loadedFiles=a,e.abrupt("return",{loadedFiles:a,fileData:P});case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var D=function(e){return E.apply(this,arguments)},S=function(e){Object(A.a)(n,e);var t=Object(F.a)(n);function n(e){var i;return Object(h.a)(this,n),(i=t.call(this,e)).fileDialogueRef=a.a.createRef(),i.onButtonClickHandler=i.onButtonClick.bind(Object(I.a)(i)),i.getSelectedFilesBinded=i.getSelectedFiles.bind(Object(I.a)(i)),i.state={filesAdded:!0,files:null},i}return Object(v.a)(n,[{key:"onButtonClick",value:function(){this.fileDialogueRef.current.click()}},{key:"getSelectedFiles",value:function(){var e=Object(b.a)(j.a.mark((function e(t){var n,i,o;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target,e.next=3,D(n);case 3:i=e.sent,o=i.fileData,this.props.addFiles(o),console.log("fileLoader component",o);case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)("input",{type:"file",ref:this.fileDialogueRef,style:{display:"none"},src:N,onChange:this.getSelectedFilesBinded,onClick:function(e){e.currentTarget.value=null},multiple:!0,accept:"audio/*"}),Object(i.jsx)("button",{onClick:this.onButtonClickHandler,children:"Open File"})]})}}]),n}(a.a.Component),R=Object(r.b)(null,{addFiles:function(e){return console.log(e),{type:u,payload:{files:e}}}})(S),H=n.p+"static/media/playButton.c49abbd7.svg",T=n.p+"static/media/pauseButton.cadf7947.svg",_=function(e){Object(A.a)(n,e);var t=Object(F.a)(n);function n(e){var i;return Object(h.a)(this,n),(i=t.call(this,e)).state={toggle:!1},i.handleButtonClick=i.clickedOnButton.bind(Object(I.a)(i)),i}return Object(v.a)(n,[{key:"clickedOnButton",value:function(){if(this.setState({toggle:!this.state.toggle}),console.log(this.state.toggle),this.state.toggle);else if(!window.audioId.id)return}},{key:"render",value:function(){var e=Object(i.jsx)("img",{src:H,alt:"pause-button"});return this.state.toggle&&(e=Object(i.jsx)("img",{src:T,alt:"play-button"})),Object(i.jsx)("div",{className:"Interaction-button",onClick:this.handleButtonClick,children:e})}}]),n}(a.a.Component),J=n.p+"static/media/previousButton.73c027af.svg",G={AudioFilesList:B,FileOpenHandler:R,PlayButton:_,PreviousAndNextButton:function(e){Object(A.a)(n,e);var t=Object(F.a)(n);function n(e){var i;return Object(h.a)(this,n),(i=t.call(this,e)).state={toggle:!0},i.handleButtonClick=i.clickedOnButton.bind(Object(I.a)(i)),i}return Object(v.a)(n,[{key:"clickedOnButton",value:function(){console.log("Clicked",this.props)}},{key:"render",value:function(){var e=Object(i.jsx)("img",{src:J,alt:"pause-button"});return"next"===this.props.type&&(e=Object(i.jsx)("img",{src:J,alt:"next-button",style:{transform:"scaleX(-1)"}})),Object(i.jsx)("div",{className:"Interaction-button",onClick:this.handleButtonClick,children:e})}}]),n}(a.a.Component)},K=G.PlayButton,M=G.PreviousAndNextButton,U=G.FileOpenHandler,X=G.AudioFilesList;window.audioId={id:null},fetch("https://res.cloudinary.com/djcffe77b/video/upload/v1604324153/a_emeyr3.mp3",{cache:"force-cache"}).then((function(e){console.log("One audio is loaded")}));var q=function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsxs)("header",{className:"App-header",children:[Object(i.jsx)(X,{}),Object(i.jsx)(U,{}),Object(i.jsxs)("div",{className:"Audio-Controller",children:[Object(i.jsx)(M,{type:"previous"}),Object(i.jsx)(K,{}),Object(i.jsx)(M,{type:"next"})]})]})})},z=n(8),Q=n(7),V={files:null,isFilesLoaded:!1};var W={currectClicked:null};var Y=Object(z.b)({fileInput:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0,n=t.type,i=t.payload;switch(n){case u:return Object(Q.a)(Object(Q.a)({},e),{},{files:i.files});case d:return Object(Q.a)(Object(Q.a)({},e),{},{files:null});default:return e}},audioList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0,n=t.type,i=t.payload;switch(console.log(i),n){case f:return Object(Q.a)(Object(Q.a)({},e),{},{currectClicked:i});default:return e}}}),Z=Object(z.c)(Y);c.a.render(Object(i.jsx)(r.a,{store:Z,children:Object(i.jsx)(q,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.735f532c.chunk.js.map