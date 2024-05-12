var node_color_generate = LiteGraph.createNode("widget/button");
node_color_generate.title = "Color Generator";
node_color_generate.pos = [10, 500];
node_color_generate.properties.text = "Double click Generate Color";
node_color_generate.properties.font_size = 10;
graph.add(node_color_generate);

node_color_generate.onDblClick = function(){
    genColorR = Math.floor(Math.random()*255);
    genColorG = Math.floor(Math.random()*255);
    genColorB = Math.floor(Math.random()*255);
}

var node_alphaControl = LiteGraph.createNode("widget/knob");
node_alphaControl.title = "Alpha";
node_alphaControl.pos = [200, 500];
graph.add(node_alphaControl);
node_alphaControl.onMouseLeave = function(){
    alphaVal = Math.floor(this.value * 255);
    console.log(genColorR,genColorG,genColorB,alphaVal);
}



// var node_variable = LiteGraph.createNode("basic/variable");
// node_variable.title = "Get Alpha";
// node_variable.pos = [300, 500];
// graph.add(node_variable);
// node_alphaControl.connect(0,node_variable,0);


// var node_watch = LiteGraph.createNode("basic/watch");
// node_watch.pos = [400,600];
// graph.add(node_watch);
// node_variable.connect(0,node_watch,0);
// node_watch.onPropertyChanged = function() {
//     console.log(this);
// }
