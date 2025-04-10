/*function getAllColorValues() {
  var comp = app.project.activeItem;

  if (!comp || !(comp instanceof CompItem)) {
    alert("Пожалуйста, откройте композицию.");
    return;
  }

  var colorValues = [];

  for (var i = 1; i <= comp.numLayers; i++) {
    var layer = comp.layer(i);
   //  console.log (layer)
    console.log (layer.source)
   ///////////////////////////Определение текстового слоя ///////////////////////

    // Проверяем, является ли источник слоя TextDocument
  // Сначала убедимся, что у слоя есть источник (source)
//   if (layer.source && layer.source instanceof TextDocument) {
//   }
  // Дополнительная проверка (для случаев, когда источник может быть не установлен напрямую)
  // Если у слоя есть свойство "Source Text", то это текстовый слой
  if (layer.property("Source Text") !== null) {
      console.log ("this layer Text" + layer.name);
  }

/////////////////////////////////пределение шейпа/////////////////////////////

//     if (layer.property("Source Text") !== null) {
//       console.log ("this layer Text" + layer.name);


   

  }
}

getAllColorValues()*/

function getLayerType(layer) {
  if (!layer) {
    return "Неизвестный";
  }

  if (layer instanceof AVLayer) {
    if (layer instanceof AVLayer && layer.source.typeName == "Footage") {
      return "Solid";
    } else if (layer.source instanceof CompItem) {
      return "Precomp";
    } else if (layer.source instanceof FootageItem) {
        if(layer.source.mainSource.isStill){
          return "Image";
        }
        else{
          return "Video";
        }

    } else {
      return "AVLayer"; // Общий AVLayer
    }
  } else if (layer instanceof TextLayer) {
    return "Text";
  } else if (layer instanceof CameraLayer) {
    return "Camera";
  } else if (layer instanceof LightLayer) {
    return "Light";
  } else if (layer instanceof NullLayer) {
    return "Null";
  } else {
    return "Другой тип";
  }
}

// Пример использования
try {
  var comp = app.project.activeItem;
  if (comp && comp instanceof CompItem) {
    var layerIndex = 2;
    var layer = comp.layer(layerIndex);

    if (layer) {
      var layerType = getLayerType(layer);
      console.log("Тип слоя " + layerIndex + ": " + layerType);
    } else {
      console.log("Слой " + layerIndex + " не найден.");
    }
  } else {
    console.log("Нет активной композиции или она не является композицией.");
  }
} catch (e) {
  console.log("Произошла ошибка: " + e);
}
