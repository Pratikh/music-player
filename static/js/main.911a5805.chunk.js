(this["webpackJsonpmusic-player"]=this["webpackJsonpmusic-player"]||[]).push([[0],{12:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},36:function(e){e.exports=JSON.parse('{"Smile":[{"name":"Champagne Problems","url":"https://res.cloudinary.com/djcffe77b/video/upload/v1605266304/songs/Champagne_Problems_p35spc.mp3"}],"Smile2":[{"name":"Champagne Problems","url":"https://res.cloudinary.com/djcffe77b/video/upload/v1605266304/songs/Champagne_Problems_p35spc.mp3"}]}')},37:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(1),o=n.n(a),i=n(13),u=n.n(i),c=(n(27),n(28),n(3)),s=function(e){return e.audioList.currectClicked},l=function(e){return e.audioList.loadedFile},d=function(e){return e.audioVolume.volume},p="ADD_FILES",f="DELETE_FILES",j="CLICKED",b="LOADED_FILES",h="PLAY_PAUSE_BUTTON",m="AUDIO_PROGRESS",v="CURRENT_DURATION",O="REMAINING_DURATION",g="AUIDO_VOLUME";function y(e){return console.log("payload  payloadpayload",e),{type:h,payload:e}}var x=n(4),k=n.n(x),A=n(7),C=n(5),D=n(6),B=n(21),I=new(function(){function e(){Object(C.a)(this,e),this.hawlerInstance=[],this.audioPlayId={},this.audioObjectByIndex={},this.currentAudioId=null}return Object(D.a)(e,[{key:"play",value:function(e,t){var n=this;return console.log("In play method"),new Promise((function(r,a){var o=new B.Howl({src:e.src,format:"mp4",onloaderror:function(){console.error("Audio file is not loaded"),a()},onplayerror:function(){console.error("On play error"),a()},onplay:function(){console.info("Audio started playing")},onend:function(){console.info("Audio playing completed")},onmute:function(){console.info("Muted")}}),i=null;o.once("load",(function(){i=o.play(),n.currentAudioId=i,n.audioObjectByIndex[e.index]=o,n.audioPlayId[i]=o,console.log("in load ID",i),t(),r(i)})),o.once("end",(function(){n.onAudioEnd(i)}))}))}},{key:"onAudioEnd",value:function(e){console.log("Audio ended")}},{key:"stop",value:function(e){this.audioPlayId[e].stop(e)}},{key:"stopAll",value:function(){}},{key:"pause",value:function(e){this.audioPlayId[e].pause()}},{key:"resume",value:function(e){this.audioPlayId[e].play()}},{key:"currentAudio",get:function(){return this.audioPlayId[this.currentAudioId]}}]),e}()),P=I;window.audioPlayer=I;var F=null;function w(e){(isNaN(+e)&&(F=e),P.currentAudio)&&(!function(e){var t=e.audioProgress,n=e.audioCurrentDurationUpdate,r=e.audioRemainingDurationUpdate,a=P.currentAudio.seek()*(100/P.currentAudio.duration());t(a);var o=Math.floor(P.currentAudio.seek()/60)?Math.floor(P.currentAudio.seek()/60):0,i=Math.floor(P.currentAudio.seek()-60*o)?Math.floor(P.currentAudio.seek()-60*o):0;n({minut:o,seconds:i}),o=Math.floor(P.currentAudio.duration()/60),i=Math.floor(P.currentAudio.duration()-60*o),r({minut:o,seconds:i})}(F||e),P.currentAudio.playing()?requestAnimationFrame(w):cancelAnimationFrame(w))}function N(){return(N=Object(A.a)(k.a.mark((function e(t,n){var r,a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("In play method"),r=P.audioObjectByIndex[t.index],P.currentAudio&&P.currentAudio.pause(),!r){e.next=7;break}return P.currentAudioId=r.play(),P.currentAudio.onStartCallBacks(),e.abrupt("return");case 7:return e.prev=7,a=function(){w(n)},e.next=11,P.play(t,a);case 11:P.currentAudio.onStartCallBacks=a,e.next=17;break;case 14:e.prev=14,e.t0=e.catch(7),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[7,14]])})))).apply(this,arguments)}var L=Object(c.b)((function(e){return{currentClickedItem:s(e),getLoadedFiles:l(e)}}),{audioProgress:function(e){return{type:m,value:e}},audioCurrentDurationUpdate:function(e){return{type:v,currentDurartion:e}},audioRemainingDurationUpdate:function(e){return{type:O,remainingDuration:e}}})((function(e){if(console.log(e),e.currentClickedItem&&e.getLoadedFiles){var t=e.currentClickedItem-1;!function(e,t){N.apply(this,arguments)}({src:e.getLoadedFiles[t],index:t},{audioProgress:e.audioProgress,audioCurrentDurationUpdate:e.audioCurrentDurationUpdate,audioRemainingDurationUpdate:e.audioRemainingDurationUpdate})}return Object(r.jsx)(r.Fragment,{})})),E=(n(12),[{fileName:"first audio",index:1},{fileName:"first audio",index:2},{fileName:"first audio",index:3},{fileName:"first audio",index:4},{fileName:"first audio",index:5},{fileName:"first audio",index:6}]);function S(e){console.log(this),this.updateClickedAudioItem(e+1),this.playPauseButton(!0)}function R(e){var t=this,n=e.props,a=e.files;return console.log(a,n),a.map((function(e){var a=e.fileName,o=e.index;console.log(t);var i=S.bind(n,o);return Object(r.jsx)("li",{className:"List",onClick:i,children:a},o)}))}var U=Object(c.b)((function(e){return{files:function(e){return e.fileInput.files}(e)}}),{updateClickedAudioItem:function(e){return console.log(e),{type:j,payload:e}},playPauseButton:y})((function(e){var t={props:e,files:e.files},n={props:e,files:E};return Object(r.jsxs)("div",{className:"myBox",children:[Object(r.jsx)(L,{}),Object(r.jsx)("ol",{children:R(e.files?t:n)})]})})),T=n(8),_=n(11),M=n(10),V=n.p+"static/media/folder-open.610cbfaa.svg",H=[];function G(e,t){return new Promise((function(n,r){var a=new FileReader;a.addEventListener("load",(function(){var r=a.result;H.push({fileName:e.name,index:t}),n(r)})),a.addEventListener("error",(function(){r("Something error in file loading :: STATE: ".concat(a.readyState))})),a.readAsDataURL(e)}))}function J(){return(J=Object(A.a)(k.a.mark((function e(t){var n,r,a,o;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(n=[],r=0;r<t.files.length;r++)a=t.files.item(r),n.push(G(a,r));return e.next=4,Promise.all(n);case 4:return o=e.sent,window.loadedFiles=o,e.abrupt("return",{loadedFiles:o,fileData:H});case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Y=function(e){return J.apply(this,arguments)},q=n(19),K=n.n(q),X=n(36),z=new(function(){function e(){Object(C.a)(this,e),this.loadedAssets=[],window.loadedAssets=this.loadedAssets,window.data=X}return Object(D.a)(e,[{key:"loading",value:function(){var e=Object(A.a)(k.a.mark((function e(t,n){var r,a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.blob();case 2:r=e.sent,a={name:t,data:r},this.loadedAssets.push(a),console.log("aaa");case 6:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"loadAsset",value:function(){var e=Object(A.a)(k.a.mark((function e(){var t,n,r=this,a=arguments;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:K.a.noop,n=[],K.a.forEach(X,(function(e){e.forEach((function(e){var t=e.url,a=e.name,o=r.loading.bind(r,a);n.push(fetch(t,{cache:"force-cache"}).then(o))}))})),e.prev=3,e.next=6,Promise.all(n);case 6:console.log("FETCHED ALL ASSETS"),t(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),console.error("Got this error:::SORRY ",e.t0);case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(){return e.apply(this,arguments)}}()}]),e}()),Q=function(e){Object(_.a)(n,e);var t=Object(M.a)(n);function n(e){var r;return Object(C.a)(this,n),(r=t.call(this,e)).fileDialogueRef=o.a.createRef(),r.onButtonClickHandler=r.onButtonClick.bind(Object(T.a)(r)),r.getSelectedFilesBinded=r.getSelectedFiles.bind(Object(T.a)(r)),r.state={filesAdded:!0,files:null},window.assetLoad=z,r}return Object(D.a)(n,[{key:"componentDidMount",value:function(){}},{key:"onButtonClick",value:function(){this.fileDialogueRef.current.click()}},{key:"getSelectedFiles",value:function(){var e=Object(A.a)(k.a.mark((function e(t){var n,r,a,o;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target,e.next=3,Y(n);case 3:r=e.sent,a=r.fileData,o=r.loadedFiles,this.props.addFiles(a),this.props.loadFiles(o),console.log("fileLoader component",a);case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)("input",{type:"file",ref:this.fileDialogueRef,style:{display:"none"},src:V,onChange:this.getSelectedFilesBinded,onClick:function(e){e.currentTarget.value=null},multiple:!0,accept:"audio/*"}),Object(r.jsx)("button",{className:"fileButton",onClick:this.onButtonClickHandler,children:"Open File"})]})}}]),n}(o.a.Component),W=Object(c.b)(null,{addFiles:function(e){return console.log(e),{type:p,payload:{files:e}}},loadFiles:function(e){return{type:b,payload:e}}})(Q),Z=n.p+"static/media/playButton.c49abbd7.svg",$=n.p+"static/media/pauseButton.cadf7947.svg",ee=function(e){Object(_.a)(n,e);var t=Object(M.a)(n);function n(e){var r;return Object(C.a)(this,n),(r=t.call(this,e)).handleButtonClick=r.clickedOnButton.bind(Object(T.a)(r)),r}return Object(D.a)(n,[{key:"clickedOnButton",value:function(){this.props.playPauseButton(!this.props.toggle),this.props.toggle?P.currentAudio.pause():(P.currentAudio.play(),P.currentAudio.onStartCallBacks&&P.currentAudio.onStartCallBacks())}},{key:"render",value:function(){var e=Object(r.jsx)("img",{src:Z,alt:"pause-button"});return this.props.toggle&&(e=Object(r.jsx)("img",{src:$,alt:"play-button"})),Object(r.jsx)("div",{className:"Interaction-button",onClick:this.handleButtonClick,children:e})}}]),n}(o.a.Component),te=Object(c.b)((function(e){return{toggle:e.audioButton.toggle}}),{playPauseButton:y})(ee),ne=n.p+"static/media/previousButton.73c027af.svg";function re(e){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("p",{children:e.seconds})})}function ae(e){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("p",{children:e.minut})})}function oe(e){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("p",{children:e.seconds})})}function ie(e){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("p",{children:e.minut})})}var ue={AudioFilesList:U,FileOpenHandler:W,PlayButton:te,PreviousAndNextButton:function(e){Object(_.a)(n,e);var t=Object(M.a)(n);function n(e){var r;return Object(C.a)(this,n),(r=t.call(this,e)).state={toggle:!0},r.handleButtonClick=r.clickedOnButton.bind(Object(T.a)(r)),r}return Object(D.a)(n,[{key:"clickedOnButton",value:function(){console.log("Clicked",this.props)}},{key:"render",value:function(){var e=Object(r.jsx)("img",{src:ne,alt:"pause-button"});return"next"===this.props.type&&(e=Object(r.jsx)("img",{src:ne,alt:"next-button",style:{transform:"scaleX(-1)"}})),Object(r.jsx)("div",{className:"Interaction-button",onClick:this.handleButtonClick,children:e})}}]),n}(o.a.Component),Volume:Object(c.b)((function(e){return{volume:d(e)}}),{audioVolumeUpdate:function(e){return console.log(e),{type:g,volume:e}}})((function(e){return Object(r.jsxs)("div",{className:"Volume",children:[Object(r.jsx)("input",{type:"range",min:"1",max:"100",value:e.volume,onChange:function(t){var n=t.target,r=n.value/100;e.audioVolumeUpdate(n.value),P.currentAudio&&P.currentAudio.playing()&&P.currentAudio.volume(r)}}),Object(r.jsx)("p",{children:e.volume})]})})),ProgressBar:Object(c.b)((function(e){return{value:e.audioProgress.value,currentDurartion:e.audioProgress.currentDurartion,remainingDuration:e.audioProgress.remainingDuration}}))((function(e){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"Progress",children:[Object(r.jsxs)("div",{className:"progressTimer",children:[" ",Object(r.jsx)(ae,{minut:e.remainingDuration.minut})," ",Object(r.jsx)("p",{children:":"})," ",Object(r.jsx)(re,{seconds:e.remainingDuration.seconds})]}),Object(r.jsx)("progress",{type:"range",min:"1.5",max:"100",value:e.value}),Object(r.jsxs)("div",{className:"progressTimer",children:[" ",Object(r.jsx)(ie,{minut:e.currentDurartion.minut})," ",Object(r.jsx)("p",{children:":"})," ",Object(r.jsx)(oe,{seconds:e.currentDurartion.seconds})]})]})})}))},ce=ue.PlayButton,se=ue.PreviousAndNextButton,le=ue.FileOpenHandler,de=ue.AudioFilesList,pe=ue.Volume,fe=ue.ProgressBar;var je=function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsxs)("header",{className:"App-header",children:[Object(r.jsx)(de,{}),Object(r.jsx)(le,{}),Object(r.jsx)(fe,{value:"0"}),Object(r.jsx)(pe,{}),Object(r.jsxs)("div",{className:"Audio-Controller",children:[Object(r.jsx)(se,{type:"previous"}),Object(r.jsx)(ce,{}),Object(r.jsx)(se,{type:"next"})]})]})})},be=n(9),he=n(2),me={files:null,isFilesLoaded:!1};var ve={currectClicked:null,loadedFile:null};var Oe={toggle:!1};var ge={value:0,currentDurartion:{minut:0,seconds:0},remainingDuration:{minut:0,seconds:0}};var ye={volume:50};var xe=Object(be.b)({fileInput:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case p:return Object(he.a)(Object(he.a)({},e),{},{files:r.files});case f:return Object(he.a)(Object(he.a)({},e),{},{files:null});default:return e}},audioList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case j:return Object(he.a)(Object(he.a)({},e),{},{currectClicked:r});case b:return Object(he.a)(Object(he.a)({},e),{},{loadedFile:r});default:return e}},audioButton:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.payload;switch(n){case h:return Object(he.a)(Object(he.a)({},e),{},{toggle:r});default:return e}},audioProgress:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.value,a=t.currentDurartion,o=t.remainingDuration;switch(n){case m:return Object(he.a)(Object(he.a)({},e),{},{value:r});case v:return Object(he.a)(Object(he.a)({},e),{},{currentDurartion:a});case O:return Object(he.a)(Object(he.a)({},e),{},{remainingDuration:o});default:return e}},audioVolume:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0,n=t.type,r=t.volume;switch(n){case g:return Object(he.a)(Object(he.a)({},e),{},{volume:r});default:return e}}}),ke=Object(be.c)(xe);u.a.render(Object(r.jsx)(c.a,{store:ke,children:Object(r.jsx)(je,{})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.911a5805.chunk.js.map