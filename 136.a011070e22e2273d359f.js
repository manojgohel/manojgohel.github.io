"use strict";(self.webpackChunkfileon=self.webpackChunkfileon||[]).push([[136],{36136:function(Y,x,s){s.r(x),s.d(x,{AssetsModule:function(){return L}});var A=s(61116),f=s(60649),b=s(89406),Z=s(61904),C=s(14322),u=s(71412),h=s(89666),g=s(99597),e=s(16942),T=s(53915),y=s(613),O=s(84677),M=s(29517),k=s(51820),N=s(8765),q=["newDomainModal"];function P(o,a){if(1&o){var t=e.EpF();e.TgZ(0,"z-modal",3),e.ALo(1,"translate"),e.TgZ(2,"form",4),e.NdJ("submit",function(){var r=e.CHM(t).$implicit,p=e.MAs(9),d=e.MAs(16);return r.submit({name:p.value,maxLevel:d.value,isDomain:!0}),r.close()}),e.TgZ(3,"div",5),e.TgZ(4,"label",6),e._uU(5),e.ALo(6,"translate"),e.qZA(),e.TgZ(7,"div",7),e._UZ(8,"input",8,9),e.qZA(),e.qZA(),e.TgZ(10,"div",5),e.TgZ(11,"label",6),e._uU(12),e.ALo(13,"translate"),e.qZA(),e.TgZ(14,"div",7),e._UZ(15,"input",10,11),e.qZA(),e.qZA(),e.qZA(),e.TgZ(17,"button",12),e.NdJ("click",function(){var r=e.CHM(t).$implicit,p=e.MAs(9),d=e.MAs(16);return r.submit({name:p.value,maxLevel:d.value,isDomain:!0}),r.close()}),e._UZ(18,"i",13),e.TgZ(19,"span",14),e._uU(20,"Common.Save"),e.qZA(),e.qZA(),e.qZA()}if(2&o){var n=a.$implicit;e.Q6J("title",e.lcZ(1,4,"Assets.AddHierarchy"))("popup-control",n),e.xp6(5),e.Oqu(e.lcZ(6,6,"Name")),e.xp6(7),e.Oqu(e.lcZ(13,8,"Max level"))}}function S(o,a){if(1&o&&(e.TgZ(0,"div",19),e.TgZ(1,"label"),e._uU(2,"Host"),e.qZA(),e.TgZ(3,"em",20),e._uU(4),e.qZA(),e.qZA()),2&o){var t=e.oxw().$implicit;e.xp6(4),e.Oqu(null==t?null:t.host)}}function U(o,a){if(1&o&&(e.TgZ(0,"div",19),e.TgZ(1,"label"),e._uU(2,"Owner"),e.qZA(),e.TgZ(3,"em",20),e._uU(4),e.qZA(),e.qZA()),2&o){var t=e.oxw().$implicit;e.xp6(4),e.Oqu(null==t?null:t.ownerDisplayName)}}function w(o,a){if(1&o&&(e.TgZ(0,"div",19),e.TgZ(1,"label"),e._uU(2,"Storage class"),e.qZA(),e.TgZ(3,"em",20),e._uU(4),e.qZA(),e.qZA()),2&o){var t=e.oxw().$implicit;e.xp6(4),e.Oqu(null==t?null:t.storageClass)}}function E(o,a){if(1&o&&(e.TgZ(0,"div",19),e.TgZ(1,"label"),e._uU(2,"Size"),e.qZA(),e.TgZ(3,"em",20),e._uU(4),e.ALo(5,"filesize"),e.qZA(),e.qZA()),2&o){var t=e.oxw().$implicit;e.xp6(4),e.AsE("",null==t?null:t.size," (bytes) ~ ",e.lcZ(5,2,null==t?null:t.size),"")}}function R(o,a){if(1&o&&(e.TgZ(0,"div",19),e.TgZ(1,"label"),e._uU(2,"Region"),e.qZA(),e.TgZ(3,"em",20),e._uU(4),e.qZA(),e.qZA()),2&o){var t=e.oxw().$implicit;e.xp6(4),e.Oqu(null==t?null:t.region)}}function $(o,a){if(1&o&&(e.TgZ(0,"div",19),e.TgZ(1,"label"),e._uU(2,"Path"),e.qZA(),e.TgZ(3,"em",20),e._uU(4),e.qZA(),e.qZA()),2&o){var t=e.oxw().$implicit;e.xp6(4),e.Oqu(null==t?null:t.path)}}function z(o,a){if(1&o&&(e.TgZ(0,"div",15),e._UZ(1,"z-svg-icon",16),e.ALo(2,"fileicon"),e.qZA(),e.TgZ(3,"div",17),e._UZ(4,"z-toolbar",18),e.TgZ(5,"div",19),e.TgZ(6,"label"),e._uU(7,"Name"),e.qZA(),e.TgZ(8,"em",20),e._uU(9),e.qZA(),e.qZA(),e.TgZ(10,"div",19),e.TgZ(11,"label"),e._uU(12,"Type"),e.qZA(),e.TgZ(13,"em",20),e._uU(14),e.qZA(),e.qZA(),e.YNc(15,S,5,1,"div",21),e.YNc(16,U,5,1,"div",21),e.YNc(17,w,5,1,"div",21),e.YNc(18,E,6,4,"div",21),e.YNc(19,R,5,1,"div",21),e.YNc(20,$,5,1,"div",21),e.qZA()),2&o){var t=a.$implicit,n=e.oxw();e.xp6(1),e.s9C("iconName",e.lcZ(2,11,t)),e.xp6(3),e.Q6J("actions",n.objectActions)("context",t),e.xp6(5),e.Oqu(null==t?null:t.name),e.xp6(5),e.Oqu(null!=t&&t.isContainer?"Folder":null!=t&&t.isBucket?"Bucket":null==t?null:t.extension),e.xp6(1),e.Q6J("ngIf",null==t?null:t.host),e.xp6(1),e.Q6J("ngIf",null==t?null:t.ownerDisplayName),e.xp6(1),e.Q6J("ngIf",null==t?null:t.storageClass),e.xp6(1),e.Q6J("ngIf",null==t?null:t.size),e.xp6(1),e.Q6J("ngIf",null==t?null:t.region),e.xp6(1),e.Q6J("ngIf",null==t?null:t.path)}}var I=[{path:"",component:function(){function o(a,t,n){this.remoteFileConnector=a,this.alertService=t,this.globalService=n,this.command$=new h.x}return o.prototype.ngAfterViewInit=function(){var a=this;this.tableConfig=new u.Xu({defaultActionEnabled:!0,selectionMode:"multiple",selectionType:"tick",fullTextSearch:!0,columns:[{name:"Name",field:"name",show:!0,type:"text",editType:"typing",sortable:!0,flex:"1 1 100px"},{name:"Type",field:"extension",show:!0,editable:!0,type:"text",editType:"typing",sortable:!0,flex:"0 1 100px"},{name:"Size",field:"size",show:!0,editable:!0,type:"text",editType:"typing",sortable:!0,flex:"0 1 100px"},{name:"Last updated",field:"lastUpdatedDate",show:!0,editable:!0,type:"text",editType:"typing",sortable:!0,flex:"0 1 200px"}],rowActions:[{name:"Common.Open",category:u.hX.GREEN,type:"fn",show:function(n){return n.isContainer||n.isBucket},proceed:function(n){return a.command$.next({type:u.gA.OPEN_CONTAINER,context:n})}}]}),this.treeConfig=new u.jZ({nodeActions:[{name:"Bucket",iconClasses:"bi bi-plus-circle",category:u.hX.YELLOW,type:"search",show:function(n){var i;return null===(i=null==n?void 0:n.data)||void 0===i?void 0:i.isRoot},proceed:function(n,i){n.node.children.forEach(function(p){p.show=function(){var d;return!i.detail||(null===(d=p.label)||void 0===d?void 0:d.indexOf(i.detail))>-1}})}},{name:"S3Browser.AddBucket",iconClasses:"bi bi-plus-circle-fill",category:u.hX.YELLOW,type:"modal",show:function(n){var i;return null===(i=null==n?void 0:n.data)||void 0===i?void 0:i.isRoot},modalTemplate:this.newDomainModal,proceed:function(n,i){var r=n.node,p=i.name,d=i.level;r&&(a.globalService.isProcessing=!0,r.connector.createObject(r.data,{name:p,level:d,isDomain:!0}).pipe((0,g.x)(function(){return a.globalService.isProcessing=!1})).subscribe({next:function(c){c?(r.children||(r.children=[]),r.allChildren.push(c),r.children.push(r.connector.mapNodeFn(c,r)),a.command$.next({type:u.gA.CONTAINER_REFRESH,context:r}),a.alertService.success({message:c.bucketName+" created."})):a.alertService.error({message:"Failed to create new bucket."})},error:function(c){a.alertService.error(c)}}))}},{name:"S3Browser.DeleteBucket",iconClasses:"bi bi-trash-fill",category:u.hX.RED,type:"fn",show:function(n){return n&&n.data&&n.data.isBucket&&n.data.region},proceed:function(n){var i=n.selected,l=n.node;a.globalService.isProcessing=!0,l.connector.delete([l.data]).pipe((0,g.x)(function(){return a.globalService.isProcessing=!1})).subscribe(function(r){if(r){if(l.parent){var p=l.parent.children.indexOf(l);l.parent.children.splice(p,1)}i===l&&a.command$.next({type:u.gA.SELECT_NODE,context:l.parent}),a.alertService.success({message:'Delete successfully. (Bucket "'+l.data.bucketName+'").'})}else a.alertService.error({message:'Delete fail. (Bucket "'+l.data.bucketName+'").'})})}}]}),this.toolbarActions=[{name:"Common.Delete",iconClasses:"bi bi-trash",category:u.hX.RED,type:"fn",show:function(n){var i=n.parent;return i&&i.data&&(i.data.isBucket||i.data.isContainer)},enabled:function(n){var l=n.selected;return l&&0!==l.length},proceed:function(n){var i=n.parent,l=n.selected,r=n.connector;l&&(a.globalService.isProcessing=!0,r.delete(l).pipe((0,g.x)(function(){return a.globalService.isProcessing=!1})).subscribe(function(p){if(p){var d=l.filter(function(c){return c.isContainer});d.length>0&&d.forEach(function(c){var v=i.children.findIndex(function(m){return m&&m.data&&m.data.key===c.key});i.children.splice(v,1)}),l.forEach(function(c){var v=i.allChildren.findIndex(function(m){return m&&m.key===c.key});i.allChildren.splice(v,1)}),a.command$.next({type:u.gA.CONTAINER_REFRESH,context:i}),a.alertService.success({message:"Delete sucessfully. (Object "+l.map(function(c){return c.key}).join(",")+")."})}else a.alertService.success({message:"Delete fail. (Object "+l.map(function(c){return c.key}).join(",")+")."})}))}}]},o.\u0275fac=function(t){return new(t||o)(e.Y36(u.gn),e.Y36(u.c9),e.Y36(u.Uh))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-assets"]],viewQuery:function(t,n){var i;(1&t&&e.Gf(q,5),2&t)&&(e.iGM(i=e.CRH())&&(n.newDomainModal=i.first))},decls:5,vars:6,consts:[[3,"tableConfig","treeConfig","command$","defaultConnector","multiple","infoPaneTemplate"],["newDomainModal",""],["infoPaneTemplate",""],[3,"title","popup-control"],[3,"z-modal-body","submit"],[1,"form-group"],[1,"text-sentence"],[1,"input-group"],["type","text",1,"form-control"],["name",""],["type","number",1,"form-control"],["maxLevel",""],["type","button",1,"btn","btn-primary",3,"z-modal-footer","click"],[1,"bi","bi-check2"],["translate",""],[1,"text-center"],["svgRef","assets/icons-files.svg","height","8rem","defaultIconName","file-blank",3,"iconName"],[1,"list","vertical"],[1,"list-item",3,"actions","context"],[1,"list-item","vertical"],[1,"form-text","text-muted"],["class","list-item vertical",4,"ngIf"]],template:function(t,n){if(1&t&&(e._UZ(0,"explorer",0),e.YNc(1,P,21,10,"ng-template",null,1,e.W1O),e.YNc(3,z,21,13,"ng-template",null,2,e.W1O)),2&t){var i=e.MAs(4);e.Q6J("tableConfig",n.tableConfig)("treeConfig",n.treeConfig)("command$",n.command$)("defaultConnector",n.remoteFileConnector)("multiple",!1)("infoPaneTemplate",i)}},directives:[T.g,y.z,f.Pi,O.b,M.n,A.O5],pipes:[f.X$,k.J,N.p],styles:[".badge-outline-primary[_ngcontent-%COMP%]{border:1px solid #0066ff;color:#06f!important;background:transparent!important}.badge-outline-secondary[_ngcontent-%COMP%]{border:1px solid #6c757d;color:#6c757d!important;background:transparent!important}.badge-outline-success[_ngcontent-%COMP%]{border:1px solid #28a745;color:#28a745!important;background:transparent!important}.badge-outline-info[_ngcontent-%COMP%]{border:1px solid #17a2b8;color:#17a2b8!important;background:transparent!important}.badge-outline-warning[_ngcontent-%COMP%]{border:1px solid #ffc107;color:#ffc107!important;background:transparent!important}.badge-outline-danger[_ngcontent-%COMP%]{border:1px solid #de3163;color:#de3163!important;background:transparent!important}.badge-outline-light[_ngcontent-%COMP%]{border:1px solid #f8f9fa;color:#f8f9fa!important;background:transparent!important}.badge-outline-dark[_ngcontent-%COMP%]{border:1px solid #343a40;color:#343a40!important;background:transparent!important}.alert-outline-primary[_ngcontent-%COMP%]{border:1px solid #0066ff;color:#06f!important;background:transparent!important}.alert-outline-secondary[_ngcontent-%COMP%]{border:1px solid #6c757d;color:#6c757d!important;background:transparent!important}.alert-outline-success[_ngcontent-%COMP%]{border:1px solid #28a745;color:#28a745!important;background:transparent!important}.alert-outline-info[_ngcontent-%COMP%]{border:1px solid #17a2b8;color:#17a2b8!important;background:transparent!important}.alert-outline-warning[_ngcontent-%COMP%]{border:1px solid #ffc107;color:#ffc107!important;background:transparent!important}.alert-outline-danger[_ngcontent-%COMP%]{border:1px solid #de3163;color:#de3163!important;background:transparent!important}.alert-outline-light[_ngcontent-%COMP%]{border:1px solid #f8f9fa;color:#f8f9fa!important;background:transparent!important}.alert-outline-dark[_ngcontent-%COMP%]{border:1px solid #343a40;color:#343a40!important;background:transparent!important}"]}),o}(),data:{title:(0,C.J)("Assets.Title"),forceReuse:!0}}],B=function(){function o(){}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({providers:[],imports:[[Z.Bz.forChild(I)],Z.Bz]}),o}(),J=s(18971),L=function(){function o(){}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({providers:[],imports:[[A.ez,f.aw,b.m,B,J.IJ]]}),o}()}}]);