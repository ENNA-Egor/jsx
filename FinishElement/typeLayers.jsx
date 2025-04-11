function getAllColorValues() {
  var comp = app.project.activeItem;

  if (!comp || !(comp instanceof CompItem)) {
    alert("Пожалуйста, откройте композицию.");
    return;
  }

  var colorValues = [];

  for (var i = 1; i <= comp.numLayers; i++) {
    var layer = comp.layer(i);
    console.log( checkTypes(layer))
   
  }
}

function checkTypes(object){            
            if(object instanceof ShapeLayer) return "Shape Layer";
            if(object.property("Source Text") !== null) return "Text Layer";
            if(object.source instanceof CompItem) return "Composition";
            if(object.adjustmentLayer == true) return "Adjustment Layer";
            if(object.nullLayer == true) return "Null Object";
            if(object.hasVideo == false && object.hasAudio == true) return "Audio";
            if(object instanceof AVLayer && object.source.hasVideo == true && object.source.hasAudio == false && object.source.duration == 0 && !object.source.mainSource.color) return "Picture";
            if(object instanceof AVLayer && object.source.typeName == "Footage") return "Solid Layer";
            if(object.hasVideo == true && object.hasAudio == true && object.duration != 0) return "Video";            
            }


getAllColorValues()