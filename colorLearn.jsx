function startCode(){

var comp = app.project.activeItem;

if (!comp) {
   console.log ("select active comp");
   alert ("select active comp");
   return;
}

    console.log  (comp.selectedLayers[0].name);
    console.log  (comp.selectedLayers[0].source);
    console.log  (comp.selectedLayers[0].numProperties);
   //  console.log  (comp.selectedLayers[0].solidSource.color.value);
    console.log  (comp.selectedLayers[0].source.mainSource.color);
}

startCode()