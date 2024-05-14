
// Circle Radius:
circleRadius = 20;
var node_circle_radius = LiteGraph.createNode("basic/const");
node_circle_radius.title = "Circle Radius (Init)";
node_circle_radius.pos = [10, 200];
graph.add(node_circle_radius);
node_circle_radius.setValue(20);
node_circle_radius.color = "#fdf0d5";


var node_math_sum = LiteGraph.createNode("basic/sum");
node_math_sum.pos = [220, 250];
graph.add(node_math_sum);
node_circle_radius.connect(0,node_math_sum,0);
node_math_sum.color = "#fdf0d5";

var node_addedRadius = LiteGraph.createNode("basic/const");
node_addedRadius.pos = [10, 350];
node_addedRadius.title = "+10"
graph.add(node_addedRadius);
node_addedRadius.setValue(10);
node_addedRadius.connect(0,node_math_sum,1);
node_addedRadius.color = "#fdf0d5";

var node_watch_Radius = LiteGraph.createNode("basic/watch");
node_watch_Radius.pos = [480, 270];
node_watch_Radius.title = "Circle Radius";
graph.add(node_watch_Radius);
node_math_sum.connect(0,node_watch_Radius,0);
node_watch_Radius.color = "#fdf0d5";


node_circle_radius.onPropertyChanged = function(){
    circleRadius = node_math_sum.outputs[0]._data; 
}