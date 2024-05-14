

var node_tine_Z = LiteGraph.createNode("basic/const");
node_tine_Z.title = "Tine: Z";
node_tine_Z.pos = [400, 830];
graph.add(node_tine_Z);
node_tine_Z.setValue(0);

node_tine_Z.onPropertyChanged = function(){
    tineLineZ = this.properties.value;
    // console.log(tineLineZ);
}

var node_tine_C = LiteGraph.createNode("basic/const");
node_tine_C.title = "Tine: C";
node_tine_C.pos = [400, 900];
graph.add(node_tine_C);
node_tine_C.setValue(4);

node_tine_C.onPropertyChanged = function(){
    tineLineZ = this.properties.value;
    // console.log(tineLineZ);
}