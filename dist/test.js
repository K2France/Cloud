"use strict";require("core-js/modules/es.promise"),require("core-js/modules/web.queue-microtask");var e,t=(e=require("ava"))&&"object"==typeof e&&"default"in e?e.default:e;function o(e,t){global[e]=t}require("@k2oss/k2-broker-core/test-framework"),require("./index"),t("describe returns the hardcoded instance",async e=>{let t=null;o("postSchema",(function(e){t=e})),await Promise.resolve(ondescribe()),e.deepEqual(t,{objects:{"com.k2.todo":{displayName:"TODO",description:"Manages a TODO list",properties:{"com.k2.todo.id":{displayName:"ID",type:"number"},"com.k2.todo.userId":{displayName:"User ID",type:"number"},"com.k2.todo.title":{displayName:"Title",type:"string"},"com.k2.todo.completed":{displayName:"Completed",type:"boolean"}},methods:{"com.k2.todo.get":{displayName:"Get TODO",type:"read",inputs:["com.k2.todo.id"],outputs:["com.k2.todo.id","com.k2.todo.userId","com.k2.todo.title","com.k2.todo.completed"]}}}}}),e.pass()}),t("execute fails with the wrong parameters",async e=>{let t=await e.throwsAsync(Promise.resolve(onexecute("test1","unused",{},{})));e.deepEqual(t.message,"The object test1 is not supported."),t=await e.throwsAsync(Promise.resolve(onexecute("com.k2.todo","test2",{},{}))),e.deepEqual(t.message,"The method test2 is not supported."),e.pass()}),t("execute passes",async e=>{let t=null;o("XMLHttpRequest",class{constructor(){t=this.recorder={},this.recorder.headers={}}open(e,t){this.recorder.opened={method:e,url:t}}setRequestHeader(e,t){this.recorder.headers[e]=t}send(){queueMicrotask(()=>{this.readyState=4,this.status=200,this.responseText=JSON.stringify({id:123,userId:51,title:"Groceries",completed:!1}),this.onreadystatechange(),delete this.responseText})}});let s=null;o("postResult",(function(e){s=e})),await Promise.resolve(onexecute("com.k2.todo","com.k2.todo.get",{},{"com.k2.todo.id":123})),e.deepEqual(t,{opened:{method:"GET",url:"https://jsonplaceholder.typicode.com/todos/123"},headers:{test:"test value"}}),e.deepEqual(s,{"com.k2.todo.id":123,"com.k2.todo.userId":51,"com.k2.todo.title":"Groceries","com.k2.todo.completed":!1}),e.pass()});
//# sourceMappingURL=test.js.map