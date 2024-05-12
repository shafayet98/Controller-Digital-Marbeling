var node_initCircleResolution = LiteGraph.createNode("basic/const");
node_initCircleResolution.title = "Circle Resolution (Init)";
node_initCircleResolution.pos = [10, 50];
graph.add(node_initCircleResolution);
node_initCircleResolution.setValue(12);


var node_scaleCircleResolutionSale = LiteGraph.createNode("math/scale");
node_scaleCircleResolutionSale.title = "x2";
node_scaleCircleResolutionSale.pos = [220, 50];
graph.add(node_scaleCircleResolutionSale);
node_scaleCircleResolutionSale.properties.factor = 2;
node_initCircleResolution.connect(0, node_scaleCircleResolutionSale, 0);


var node_watch_CircleRes = LiteGraph.createNode("basic/watch");
node_watch_CircleRes.pos = [320, 120];
node_watch_CircleRes.title = "Circle Resolution";
graph.add(node_watch_CircleRes);
node_scaleCircleResolutionSale.connect(0, node_watch_CircleRes, 0);

circleResolution = 10;
// scale up
node_initCircleResolution.onPropertyChanged = function () {
    let getInitialRes = this.properties.value;
    let upscaledValue = node_scaleCircleResolutionSale.properties.factor;
    circleResolution = getInitialRes * upscaledValue;
}