(this["webpackJsonpmusic-player"]=this["webpackJsonpmusic-player"]||[]).push([[0],{14:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n(1),a=n.n(i),o=n(12),u=n.n(o),c=(n(27),n(28),n(3)),l=function(e){return e.audioList.currectClicked},s=function(e){return e.audioList.loadedFile},d="ADD_FILES",p="DELETE_FILES",f="CLICKED",j="LOADED_FILES",b="PLAY_PAUSE_BUTTON",O="AUDIO_PROGRESS",h="CURRENT_DURATION",g="REMAINING_DURATION";function m(e){return console.log("payload  payloadpayload",e),{type:b,payload:e}}var v=n(4),y=n.n(v),x=n(8),k=n(6),A=n(7),C=n(20),D=new(function(){function e(){Object(k.a)(this,e),this.hawlerInstance=[],this.audioPlayId={},this.audioObjectByIndex={},this.currentAudioId=null}return Object(A.a)(e,[{key:"play",value:function(e,t){var n=this;return console.log("In play method"),new Promise((function(r,i){var a=new C.Howl({src:e.src,format:"mp4",onloaderror:function(){console.error("Audio file is not loaded"),i()},onplayerror:function(){console.error("On play error"),i()},onplay:function(){console.info("Audio started playing")},onend:function(){console.info("Audio playing completed")},onmute:function(){console.info("Muted")}}),o=null;a.once("load",(function(){o=a.play(),n.currentAudioId=o,n.audioObjectByIndex[e.index]=a,n.audioPlayId[o]=a,console.log("in load ID",o),t(),r(o)})),a.once("end",(function(){n.onAudioEnd(o)}))}))}},{key:"onAudioEnd",value:function(e){console.log("Audio ended")}},{key:"stop",value:function(e){this.audioPlayId[e].stop(e)}},{key:"stopAll",value:function(){}},{key:"pause",value:function(e){this.audioPlayId[e].pause()}},{key:"resume",value:function(e){this.audioPlayId[e].play()}},{key:"currentAudio",get:function(){return this.audioPlayId[this.currentAudioId]}}]),e}()),B=D;window.audioPlayer=D;var I=null;function F(e){(isNaN(+e)&&(I=e),B.currentAudio)&&(!function(e){var t=e.audioProgress,n=e.audioCurrentDurationUpdate,r=e.audioRemainingDurationUpdate,i=B.currentAudio.seek()*(100/B.currentAudio.duration());t(i);var a=Math.floor(B.currentAudio.seek()/60)?Math.floor(B.currentAudio.seek()/60):0,o=Math.floor(B.currentAudio.seek()-60*a)?Math.floor(B.currentAudio.seek()-60*a):0;n({minut:a,seconds:o}),a=Math.floor(B.currentAudio.duration()/60),o=Math.floor(B.currentAudio.duration()-60*a),r({minut:a,seconds:o})}(I||e),B.currentAudio.playing()?requestAnimationFrame(F):cancelAnimationFrame(F))}function P(e,t){return N.apply(this,arguments)}function N(){return(N=Object(x.a)(y.a.mark((function e(t,n){var r,i;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("In play method"),r=B.audioObjectByIndex[t.index],B.currentAudio&&B.currentAudio.pause(),!r){e.next=7;break}return B.currentAudioId=r.play(),B.currentAudio.onStartCallBacks(),e.abrupt("return");case 7:return e.prev=7,i=function(){F(n)},e.next=11,B.play(t,i);case 11:B.currentAudio.onStartCallBacks=i,e.next=17;break;case 14:e.prev=14,e.t0=e.catch(7),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[7,14]])})))).apply(this,arguments)}var w=Object(c.b)((function(e){return{currentClickedItem:l(e),getLoadedFiles:s(e)}}),{audioProgress:function(e){return{type:O,value:e}},audioCurrentDurationUpdate:function(e){return{type:h,currentDurartion:e}},audioRemainingDurationUpdate:function(e){return{type:g,remainingDuration:e}}})((function(e){if(console.log(e),e.currentClickedItem){var t=e.currentClickedItem-1;P({src:e.getLoadedFiles[t],index:t},{audioProgress:e.audioProgress,audioCurrentDurationUpdate:e.audioCurrentDurationUpdate,audioRemainingDurationUpdate:e.audioRemainingDurationUpdate})}return Object(r.jsx)(r.Fragment,{})})),L=(n(14),[{fileName:"first audio",index:1},{fileName:"first audio",index:2},{fileName:"first audio",index:3},{fileName:"first audio",index:4},{fileName:"first audio",index:5},{fileName:"first audio",index:6}]);function S(e){console.log(this),this.updateClickedAudioItem(e+1),this.playPauseButton(!0),console.log(window.loadedFile)}function E(e){var t=this,n=e.props,i=e.files;return console.log(i,n),i.map((function(e){var i=e.fileName,a=e.index;console.log(t);var o=S.bind(n,a);return Object(r.jsx)("li",{className:"List",onClick:o,children:i},a)}))}var R=Object(c.b)((function(e){return{files:function(e){return e.fileInput.files}(e)}}),{updateClickedAudioItem:function(e){return console.log(e),{type:f,payload:e}},playPauseButton:m})((function(e){console.log("PROPS",e.updateClickedAudioItem);var t={props:e,files:e.files},n={props:e,files:L};return Object(r.jsxs)("div",{className:"myBox",children:[Object(r.jsx)(w,{}),Object(r.jsx)("ol",{children:E(e.files?t:n)})]})})),U=n(5),T=n(11),M=n(10),_=n.p+"static/media/folder-open.610cbfaa.svg",H=[];function V(e,t){return new Promise((function(n,r){var i=new FileReader;i.addEventListener("load",(function(){var r=i.result;H.push({fileName:e.name,index:t}),n(r)})),i.addEventListener("error",(function(){r("Something error in file loading :: STATE: ".concat(i.readyState))})),i.readAsDataURL(e)}))}function G(){return(G=Object(x.a)(y.a.mark((function e(t){var n,r,i,a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(n=[],r=0;r<t.files.length;r++)i=t.files.item(r),n.push(V(i,r));return e.next=4,Promise.all(n);case 4:return a=e.sent,window.loadedFiles=a,e.abrupt("return",{loadedFiles:a,fileData:H});case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var J=function(e){return G.apply(this,arguments)},q=function(e){Object(T.a)(n,e);var t=Object(M.a)(n);function n(e){var r;return Object(k.a)(this,n),(r=t.call(this,e)).fileDialogueRef=a.a.createRef(),r.onButtonClickHandler=r.onButtonClick.bind(Object(U.a)(r)),r.getSelectedFilesBinded=r.getSelectedFiles.bind(Object(U.a)(r)),r.state={filesAdded:!0,files:null},r}return Object(A.a)(n,[{key:"onButtonClick",value:function(){this.fileDialogueRef.current.click()}},{key:"getSelectedFiles",value:function(){var e=Object(x.a)(y.a.mark((function e(t){var n,r,i,a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target,e.next=3,J(n);case 3:r=e.sent,i=r.fileData,a=r.loadedFiles,this.props.addFiles(i),this.props.loadFiles(a),console.log("fileLoader component",i);case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)("input",{type:"file",ref:this.fileDialogueRef,style:{display:"none"},src:_,onChange:this.getSelectedFilesBinded,onClick:function(e){e.currentTarget.value=null},multiple:!0,accept:"audio/*"}),Object(r.jsx)("button",{onClick:this.onButtonClickHandler,children:"Open File"})]})}}]),n}(a.a.Component),K=Object(c.b)(null,{addFiles:function(e){return console.log(e),{type:d,payload:{files:e}}},loadFiles:function(e){return{type:j,payload:e}}})(q),X=n.p+"static/media/playButton.c49abbd7.svg",Y=n.p+"static/media/pauseButton.cadf7947.svg",z=function(e){Object(T.a)(n,e);var t=Object(M.a)(n);function n(e){var r;return Object(k.a)(this,n),(r=t.call(this,e)).handleButtonClick=r.clickedOnButton.bind(Object(U.a)(r)),r}return Object(A.a)(n,[{key:"clickedOnButton",value:function(){this.props.playPauseButton(!this.props.toggle),this.props.toggle?B.currentAudio.pause():(B.currentAudio.play(),B.currentAudio.onStartCallBacks&&B.currentAudio.onStartCallBacks())}},{key:"render",value:function(){var e=Object(r.jsx)("img",{src:X,alt:"pause-button"});return this.props.toggle&&(e=Object(r.jsx)("img",{src:Y,alt:"play-button"})),Object(r.jsx)("div",{className:"Interaction-button",onClick:this.handleButtonClick,children:e})}}]),n}(a.a.Component),Q=Object(c.b)((function(e){return{toggle:e.audioButton.toggle}}),{playPauseButton:m})(z),W=n.p+"static/media/previousButton.73c027af.svg",Z=function(e){Object(T.a)(n,e);var t=Object(M.a)(n);function n(e){var r;return Object(k.a)(this,n),(r=t.call(this,e)).state={toggle:!0},r.handleButtonClick=r.clickedOnButton.bind(Object(U.a)(r)),r}return Object(A.a)(n,[{key:"clickedOnButton",value:function(){console.log("Clicked",this.props)}},{key:"render",value:function(){var e=Object(r.jsx)("img",{src:W,alt:"pause-button"});return"next"===this.props.type&&(e=Object(r.jsx)("img",{src:W,alt:"next-button",style:{transform:"scaleX(-1)"}})),Object(r.jsx)("div",{className:"Interaction-button",onClick:this.handleButtonClick,children:e})}}]),n}(a.a.Component),$=n(21);function ee(e){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("p",{children:e.seconds})})}function te(e){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("p",{children:e.minut})})}function ne(e){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("p",{children:e.seconds})})}function re(e){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("p",{children:e.minut})})}var ie={AudioFilesList:R,FileOpenHandler:K,PlayButton:Q,PreviousAndNextButton:Z,Volume:function(){var e=Object(i.useState)(50),t=Object($.a)(e,2),n=t[0],a=t[1];return Object(r.jsxs)("div",{className:"Volume",children:[Object(r.jsx)("input",{type:"range",min:"1",max:"100",value:n,onChange:function(e){var t=e.target,n=t.value/100;a(t.value),B.currentAudio&&B.currentAudio.playing()&&B.currentAudio.volume(n)}}),Object(r.jsx)("p",{children:n})]})},ProgressBar:Object(c.b)((function(e){return{value:e.audioProgress.value,currentDurartion:e.audioProgress.currentDurartion,remainingDuration:e.audioProgress.remainingDuration}}))((function(e){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"Progress",children:[Object(r.jsxs)("div",{className:"progressTimer",children:[" ",Object(r.jsx)(te,{minut:e.remainingDuration.minut})," ",Object(r.jsx)("p",{children:":"})," ",Object(r.jsx)(ee,{seconds:e.remainingDuration.seconds})]}),Object(r.jsx)("progress",{type:"range",min:"1.5",max:"100",value:e.value}),Object(r.jsxs)("div",{className:"progressTimer",children:[" ",Object(r.jsx)(re,{minut:e.currentDurartion.minut})," ",Object(r.jsx)("p",{children:":"})," ",Object(r.jsx)(ne,{seconds:e.currentDurartion.seconds})]})]})})}))},ae=ie.PlayButton,oe=ie.PreviousAndNextButton,ue=ie.FileOpenHandler,ce=ie.AudioFilesList,le=ie.Volume,se=ie.ProgressBar;var de=function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsxs)("header",{className:"App-header",children:[Object(r.jsx)(ce,{}),Object(r.jsx)(ue,{}),Object(r.jsx)(se,{value:"0"}),Object(r.jsxs)("div",{className:"Audio-Controller",children:[Object(r.jsx)(oe,{type:"previous"}),Object(r.jsx)(ae,{}),Object(r.jsx)(oe,{type:"next"})]}),Object(r.jsx)(le,{})]})})},pe=n(9),fe=n(2),je={files:null,isFilesLoaded:!1};var be={currectClicked:null,loadedFile:null};var Oe={toggle:!1};var he={value:0,currentDurartion:{minut:0,seconds:0},remainingDuration:{minut:0,seconds:0}};var ge=Object(pe.b)({fileInput:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case d:return Object(fe.a)(Object(fe.a)({},e),{},{files:r.files});case p:return Object(fe.a)(Object(fe.a)({},e),{},{files:null});default:return e}},audioList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case f:return Object(fe.a)(Object(fe.a)({},e),{},{currectClicked:r});case j:return Object(fe.a)(Object(fe.a)({},e),{},{loadedFile:r});default:return e}},audioButton:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case b:return Object(fe.a)(Object(fe.a)({},e),{},{toggle:r});default:return e}},audioProgress:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.value,i=t.currentDurartion,a=t.remainingDuration;switch(n){case O:return Object(fe.a)(Object(fe.a)({},e),{},{value:r});case h:return Object(fe.a)(Object(fe.a)({},e),{},{currentDurartion:i});case g:return Object(fe.a)(Object(fe.a)({},e),{},{remainingDuration:a});default:return e}}}),me=Object(pe.c)(ge);u.a.render(Object(r.jsx)(c.a,{store:me,children:Object(r.jsx)(de,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.099b0016.chunk.js.map