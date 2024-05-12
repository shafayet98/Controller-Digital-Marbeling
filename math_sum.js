//node constructor class
function MathSum()
{
  this.addInput("Init Radius","number");
  this.addInput("Added Radius","number");
  this.addOutput("Updated Radius","number");
  this.properties = { precision: 1 };
}

//name to show
MathSum.title = "Scale Initial Radius";

//function to call when the node is executed
MathSum.prototype.onExecute = function()
{
  var A = this.getInputData(0);
  if( A === undefined )
    A = 0;
  var B = this.getInputData(1);
  if( B === undefined )
    B = 0;
  this.setOutputData( 0, A + B );
}

//register in the system
LiteGraph.registerNodeType("basic/sum", MathSum );