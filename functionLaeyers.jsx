// if (typeof console === "undefined") {
//   console = {
//     log: function(message) {
//       if (typeof __jsx_debugger_output__ !== 'undefined') {
//         __jsx_debugger_output__(message); // Вывод в консоль отладки VS Code
//       } else {
//         $.writeln(message); // Альтернатива: вывод в ESTK
//       }
//     }
//   };
// }




function LayersSelect() {

var comp = app.project.activeItem;
alert (comp.name);

if(!comp){alert("select active comp"); return}

// console.log(comp.selectedLayers[0]);
// console.log(comp.selectedLayers[0].source);
console.log(comp.numLayers);
var n= comp.numLayers;
// if (n>1){
    for (var i=1; i<= 1; i++){
    console.log(comp.layer(i).name);
        var m =comp.layer(i).numProperties;
        console.log(comp.layer(i).numProperties);
        if (m>1){
            for (var k=1; k<=m; k++){
                console.log(comp.layer(i)(k).name);
                var z = comp.layer(i)(k).numProperties;
                console.log(z);
                    if (z>1){
                        for (var x=1; x<=z; x++){
                            console.log(comp.layer(i)(k)(x).name);
                        }
                    }
            }
        }
    }
// console.log(comp.layer(2).name);
// console.log(comp.selectedLayers[0].name);
// console.log(comp.selectedLayers[0]("ADBE Effect Parade").name);
// console.log(comp.selectedLayers[0]("ADBE Effect Parade").numProperties);
// console.log(comp.selectedLayers[0]("Contents"));
// console.log(comp.selectedLayers[0]("Contents").name);
// console.log(comp.selectedLayers[0]("Contents").numProperties);
// console.log(comp.selectedLayers[0]("Contents")(1).name);
// console.log(comp.selectedLayers[0]("Contents")("Group 1").numProperties);
// console.log(comp.selectedLayers[0]("Contents")("Group 1")(2).name);
// console.log(comp.selectedLayers[0]("Contents")("Group 1")(2)(2).numProperties);
// console.log(comp.selectedLayers[0]("Contents")("Group 1")(2)(2).name);
// console.log(comp.selectedLayers[0]("Contents")("Group 1")(2)(2)(3).name);

// console.log(comp.selectedLayers[0]("ADBE Effect Parade")(1).name);
// console.log(comp.selectedLayers[0]("ADBE Effect Parade")(1).numProperties);
// console.log(comp.selectedLayers[0]("ADBE Effect Parade")(1)(5).name);
// console.log(comp.selectedLayers[0]("ADBE Effect Parade")(2).name);
// console.log(comp.selectedLayers[0]("ADBE Effect Parade").propertyIndex);
}  

LayersSelect ()