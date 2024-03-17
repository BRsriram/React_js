import React from "./node_modules/react";
import  ReactDOM  from "./node_modules/react-dom";
const parent = React.createElement("div", {class:'parent'},
 [
  React.createElement("div", {class:'child1'}, [React.createElement("h1", {},'sriramhiii'),React.createElement('p',{},'hi br sriram')]),
  React.createElement("div", {class:'child2'},[React.createElement('h2',{},'h2 sriram'),React.createElement('span',{},'child2 spannnnsss')]),
]);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);