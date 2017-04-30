+function(){"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function n(e,t,i){for(;e=e.offsetParent;)if(x(e,t)===i)return!0;return!1}var a=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),o=JParticles,s=o.utils,r=o.Base,l=Math.random,f=Math.abs,c=Math.PI,u=Math.ceil,h=2*c,p=s.pInt,v=s.limitRandom,m=s.calcSpeed,y=s.scaleValue,x=s.getCss,d=s.offset,O=s.isElement,X=(s.isFunction,s.defineReadOnlyProperty),Y=function(o){function r(i,n){return e(this,r),t(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,r,i,n))}return i(r,o),a(r,[{key:"version",get:function(){return"3.0.0"}}]),a(r,[{key:"init",value:function(){var e=this.set,t=e.num,i=e.range,n=e.eventElem;t>0&&(O(n)||n===document||(this.set.eventElem=this.c),i>0&&(this.positionX=l()*this.cw,this.positionY=l()*this.ch,this.defineLineShape(),this.positionEvent()),this.mouseX=this.mouseY=0,this.createDots(),this.draw(),this.parallaxEvent())}},{key:"defineLineShape",value:function(){var e=this,t=this.set,i=t.proximity,n=t.range;switch(t.lineShape){case"cube":this.lineShapeMaker=function(t,a,o,s,r){var l=e.positionX,c=e.positionY;f(t-o)<=i&&f(a-s)<=i&&f(t-l)<=n&&f(a-c)<=n&&f(o-l)<=n&&f(s-c)<=n&&r()};break;default:this.lineShapeMaker=function(t,a,o,s,r){var l=e.positionX,c=e.positionY;f(t-o)<=i&&f(a-s)<=i&&(f(t-l)<=n&&f(a-c)<=n||f(o-l)<=n&&f(s-c)<=n)&&r()}}}},{key:"createDots",value:function(){for(var e=this.cw,t=this.ch,i=this.color,n=this.set,a=n.num,o=n.maxR,s=n.minR,r=n.maxSpeed,l=n.minSpeed,f=p(y(a,e)),c=this.dots=[];f--;){var h=v(o,s);c.push({r:h,x:v(e-h,h),y:v(t-h,h),vx:m(r,l),vy:m(r,l),color:i(),layer:u(v(3,1)),parallaxOffsetX:0,parallaxOffsetY:0})}}},{key:"draw",value:function(){var e=this.cw,t=this.ch,i=this.cxt,n=this.set,a=n.num,o=n.range,s=n.lineWidth,r=n.opacity;a<=0||(i.clearRect(0,0,e,t),i.lineWidth=s,i.globalAlpha=r,this.updateXY(),this.dots.forEach(function(e){var t=e.x,n=e.y,a=e.r,o=e.parallaxOffsetX,s=e.parallaxOffsetY;i.save(),i.beginPath(),i.arc(t+o,n+s,a,0,h),i.fillStyle=e.color,i.fill(),i.restore()}),o>0&&this.connectDots(),this.requestAnimationFrame())}},{key:"connectDots",value:function(){var e=this.dots,t=this.cxt,i=this.lineShapeMaker,n=e.length;e.forEach(function(a,o){for(var s=a.x+a.parallaxOffsetX,r=a.y+a.parallaxOffsetY;++o<n;)!function(){var n=e[o],l=n.x+n.parallaxOffsetX,f=n.y+n.parallaxOffsetY;i(s,r,l,f,function(){t.save(),t.beginPath(),t.moveTo(s,r),t.lineTo(l,f),t.strokeStyle=a.color,t.stroke(),t.restore()})}()})}},{key:"updateXY",value:function(){var e=this.paused,t=this.mouseX,i=this.mouseY,n=this.cw,a=this.ch,o=this.set,s=o.parallax,r=o.parallaxPerspective;this.dots.forEach(function(o){if(!e){if(s){var l=r*o.layer;o.parallaxOffsetX+=(t/l-o.parallaxOffsetX)/10,o.parallaxOffsetY+=(i/l-o.parallaxOffsetY)/10}o.x+=o.vx,o.y+=o.vy;var f=o.x,c=o.y,u=o.r,h=o.parallaxOffsetX,p=o.parallaxOffsetY;f+=h,c+=p,(f+u>=n||f-u<=0)&&(o.vx*=-1),(c+u>=a||c-u<=0)&&(o.vy*=-1)}})}},{key:"setElemOffset",value:function(){return this.elemOffset=this.set.eventElem===document?null:d(this.set.eventElem)}},{key:"positionEvent",value:function(){var e=this,t=this.set,i=t.eventElem,a=t.range;if(!(a>this.cw&&a>this.ch)){var o=function(t){e.paused||(e.positionX=t.pageX,e.positionY=t.pageY,e.setElemOffset()&&(n(i,"position","fixed")&&(e.positionX=t.clientX,e.positionY=t.clientY),e.positionX-=e.elemOffset.left,e.positionY-=e.elemOffset.top))};s.on(i,"mousemove",o),this.onDestroy(function(){s.off(i,"mousemove",o)})}}},{key:"parallaxEvent",value:function(){var e=this,t=this.set,i=t.parallax,a=t.eventElem;if(i){var o=function(t){if(!e.paused){var i=t.pageX,o=t.pageY;e.setElemOffset()&&(n(a,"position","fixed")&&(i=t.clientX,o=t.clientY),i-=e.elemOffset.left,o-=e.elemOffset.top);var s=e.cw,r=e.ch;e.mouseX=i-s/2,e.mouseY=o-r/2}};s.on(a,"mousemove",o),this.onDestroy(function(){s.off(a,"mousemove",o)})}}},{key:"resize",value:function(){var e=this;s.resize(this,function(t,i){var n=e.set,a=n.num,o=n.range;a>0&&o>0&&(e.positionX*=t,e.positionY*=i)})}}]),r}(r);Y.defaultConfig={num:.12,maxR:2.4,minR:.6,maxSpeed:1,minSpeed:0,proximity:130,range:160,lineWidth:.2,lineShape:"spider",eventElem:null,parallax:!1,parallaxPerspective:3},X(Y,"particle")}();