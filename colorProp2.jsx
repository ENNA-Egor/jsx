function getAllColorValues() {
  var comp = app.project.activeItem;

  if (!comp || !(comp instanceof CompItem)) {
    alert("Пожалуйста, откройте композицию.");
    return;
  }

  var colorValues = [];

  for (var i = 1; i <= comp.numLayers; i++) {
    var layer = comp.layer(i);
    getColorValuesFromLayer(layer, colorValues);
  }

  if (colorValues.length > 0) {
    console.log("Найдены следующие значения цветов:");
    for (var i = 0; i < colorValues.length; i++) {
      var colorInfo = colorValues[i];
      console.log("  Layer: " + colorInfo.layerName + ", Property: " + colorInfo.propertyName + ", Value: " + colorInfo.value);
    }
  } else {
    alert("В данной композиции не найдено свойств цвета.");
  }
}

function getColorValuesFromLayer(layer, colorValues) {
  if (layer.numProperties){
    for(var n=1; n<=layer.numProperties; n++){
      getColorValuesFromProperties(layer, layer.property(n), colorValues); // Начинаем с самого слоя
    }
  }
}

function getColorValuesFromProperties(layer, propertyGroup, colorValues) {
        //  console.log (layer)
        //  console.log (propertyGroup)
         console.log (propertyGroup.name)
  if (!propertyGroup) {
    return;
  }

  if (propertyGroup.numProperties) {
    for (var k = 1; k <= propertyGroup.numProperties; k++) {
      var prop = propertyGroup.property(k);
    console.log (prop.name)
      if (!prop) {
        console.warn("Обнаружено null-свойство. Пропускаем.");
        continue;
      }

      // Отладочная информация:
      // console.log("  Имя свойства: " + prop.name + ", Тип свойства: " + prop.propertyType + ", Тип значения: " + prop.propertyValueType);

      if (prop.propertyValueType === PropertyValueType.COLOR) {
         // console.log (prop.propertyValueType)
         // console.log (PropertyValueType.COLOR)
        colorValues.push({
          layerName: layer.name,
          propertyName: prop.name,
          value: prop.value
        });
        console.log (colorValues)
      }

      // Рекурсивно вызываем для групп свойств. Используем canSetEnabled как индикатор группы.
      if (prop.canSetEnabled) {
         getColorValuesFromProperties(layer, prop, colorValues);
      }
    }
  }
}

getAllColorValues();
