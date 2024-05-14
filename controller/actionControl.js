var node_btn_enable_mouse = LiteGraph.createNode("widget/button");
node_btn_enable_mouse.title = "A/C: Mouse";
node_btn_enable_mouse.pos = [10, 700];
node_btn_enable_mouse.properties.text = "Double click Paint w/Mouse";
node_btn_enable_mouse.properties.font_size = 10;
graph.add(node_btn_enable_mouse);


let accessGivenColor = "#ccd5ae";
let accessDeniedColor = "#e63946";

node_btn_enable_mouse.onDblClick = function(){
    enableMousePaint = true;
    enableAutogenerator = false;
    this.color = accessGivenColor;
    node_btn_enable_auto.color = accessDeniedColor;
    node_btn_enable_tineLine.color = accessDeniedColor;
}


var node_btn_enable_auto = LiteGraph.createNode("widget/button");
node_btn_enable_auto.title = "A/C: Auto Gen";
node_btn_enable_auto.pos = [200, 700];
node_btn_enable_auto.properties.text = "Double click Paint Auto/Mode";
node_btn_enable_auto.properties.font_size = 10;
graph.add(node_btn_enable_auto);

node_btn_enable_auto.onDblClick = function(){
    this.color = accessGivenColor;
    enableMousePaint = false;
    enableAutogenerator = true;
    node_btn_enable_mouse.color = accessDeniedColor;
    node_btn_enable_tineLine.color = accessDeniedColor;
}

// enableTineLine

var node_btn_enable_tineLine = LiteGraph.createNode("widget/button");
node_btn_enable_tineLine.title = "A/C: Tine Line";
node_btn_enable_tineLine.pos = [400, 700];
node_btn_enable_tineLine.properties.text = "Double click: Draw TineLine";
node_btn_enable_tineLine.properties.font_size = 10;
graph.add(node_btn_enable_tineLine);

node_btn_enable_tineLine.onDblClick = function(){
    enableMousePaint = false;
    enableAutogenerator = false;
    enableTineLine = true;
    this.color = accessGivenColor;
    node_btn_enable_mouse.color = accessDeniedColor;
    node_btn_enable_auto.color = accessDeniedColor;
}