webpackJsonp([9],{1223:function(module,exports,__webpack_require__){"use strict";var core_1=__webpack_require__(0),common_1=__webpack_require__(14),nga_module_1=__webpack_require__(300),linux_component_1=__webpack_require__(1278),linux_routing_1=__webpack_require__(1476),LinuxModule=function(){function LinuxModule(){}return LinuxModule=__decorate([core_1.NgModule({imports:[common_1.CommonModule,nga_module_1.NgaModule,linux_routing_1.routing],declarations:[linux_component_1.Linux]}),__metadata("design:paramtypes",[])],LinuxModule)}();Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=LinuxModule},1278:function(module,exports,__webpack_require__){"use strict";var core_1=__webpack_require__(0),Linux=function(){function Linux(){}return Linux=__decorate([core_1.Component({selector:"linux",encapsulation:core_1.ViewEncapsulation.None,styles:[__webpack_require__(1338)],template:__webpack_require__(1390)}),__metadata("design:paramtypes",[])],Linux)}();exports.Linux=Linux},1338:function(module,exports){module.exports=".linux-iframe {\n  width: 100%;\n  height: calc(100vh - 283px);\n  border: none;\n  background-color: #999; }\n"},1390:function(module,exports){module.exports='<div class="row">\n  <div class="col-md-12 col-xs-12">\n    <ba-card title="远程管理" baCardClass="with-scroll">\n      <iframe src="https://dms.console.aliyun.com/#/dms/rsList" class="linux-iframe"></iframe>\n    </ba-card>\n  </div>\n</div>\n'},1476:function(module,exports,__webpack_require__){"use strict";var router_1=__webpack_require__(40),linux_component_1=__webpack_require__(1278),routes=[{path:"",component:linux_component_1.Linux}];exports.routing=router_1.RouterModule.forChild(routes)}});