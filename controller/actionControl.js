var node_btn_enable_mouse = LiteGraph.createNode("widget/button");
node_btn_enable_mouse.title = "A/C: Mouse";
node_btn_enable_mouse.pos = [10, 700];
node_btn_enable_mouse.properties.text = "Double click Paint w/Mouse";
node_btn_enable_mouse.properties.font_size = 10;
graph.add(node_btn_enable_mouse);

node_btn_enable_mouse.onDblClick = function(){
    enableMousePaint = true;
    enableAutogenerator = false;
    console.log(enableMousePaint);
}


var node_btn_enable_auto = LiteGraph.createNode("widget/button");
node_btn_enable_auto.title = "A/C: Auto Gen";
node_btn_enable_auto.pos = [200, 700];
node_btn_enable_auto.properties.text = "Double click Paint Auto/Mode";
node_btn_enable_auto.properties.font_size = 10;
graph.add(node_btn_enable_auto);

node_btn_enable_auto.onDblClick = function(){
    enableMousePaint = false;
    enableAutogenerator = true;
    console.log(enableMousePaint);
}