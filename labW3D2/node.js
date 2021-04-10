"use strict";
let node4 = { name: "label", children: null};
let node5 = { name: "input", children: null};
let node3 = { name: "p", children: null};
let node2 = { name: "div", children: [node4, node5]};
let node1 = { name: "body", children: [node2, node3]};

// eslint-disable-next-line require-jsdoc
function classAdder(node){
  //node.class = "classNode"
  console.log(node.name);
  if(node.children === null) return;

  if(Array.isArray(node.children)){
    for(const el of node.children){
      classAdder(el);
    }
  }
 // return node
}
classAdder(node1);