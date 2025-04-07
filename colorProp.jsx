if (typeof console === "undefined") {
  console = {
    log: function(message) {
      if (typeof __jsx_debugger_output__ !== 'undefined') {
        __jsx_debugger_output__(message); // Вывод в консоль отладки VS Code
      } else {
        $.writeln(message); // Альтернатива: вывод в ESTK
      }
    }
  };
}


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
      var colorValue = colorValues[i].value;
      console.log("  Layer: " + colorInfo.layerName + ", Property: " + colorInfo.propertyName );
      // console.log( colorValue);
      console.log("  Layer: " + colorInfo.layerName + ", Property: " + colorInfo.propertyName  + ", Color: " + colorValue.toString());
      // console.log("  Layer: " + colorInfo.layerName + ", Property: " + colorInfo.propertyName  + `, Color:  ${colorValue}`);
    }
  } else {
    alert("В данной композиции не найдено свойств цвета.");
  }
}

function getColorValuesFromLayer(layer, colorValues) {
  // Ищем свойство Contents
  var contents = findPropertyByName(layer, "Contents");
  if (contents == null){console.log(contents)
  }else {console.log(contents.numProperties)
  var n = contents.numProperties
  }
  if (contents) {
    for (var i=1; i<=n; i++){
    // console.log(contents(i).name)
    getColorValuesFromProperties(layer, contents(i), colorValues);    
    }
  }

  // Перебираем эффекты
  for (var j = 1; j <= layer.property("Effects").numProperties; j++) {
    var effect = layer.property("Effects").property(j);
    getColorValuesFromProperties(layer, effect, colorValues);
  }
}

function getColorValuesFromProperties(layer, propertyGroup, colorValues) {
  if (!propertyGroup) {
    return;
  }

  if (propertyGroup.numProperties) {
    console.log(propertyGroup.numProperties)
    for (var k = 1; k <= propertyGroup.numProperties; k++) {
      var prop = propertyGroup.property(k);
    // console.log("NameGroup " +propertyGroup.property(k).name)
    // console.log(propertyGroup.property(k).numProperties)
    // if (propertyGroup.property(k).name =="Contents"){
    //   console.log(propertyGroup.property(k).numProperties)
    //   for (var n= 1; n<= propertyGroup.property(k).numProperties; n++){
    //     console.log(propertyGroup.property(k).property(n).name)
    //     console.log(propertyGroup.property(k).property(n).numProperties)
    //     var cont = propertyGroup.property(k).property(n).numProperties
    //      for (m=1; m<= cont; m++){
    //         // console.log(propertyGroup.property(k).property(n).property(m).name)
    //         var contentName = propertyGroup.property(k).property(n).property(m).name
    //         if (contentName == "Color"){
    //             console.log (propertyGroup.property(k).property(n).property(m).value)
    //         }
    //      }
    //   }
    // }
    // console.log(propertyGroup.Contents.property(2).name)
    // console.log(propertyGroup.Contents.property(2).numProperties)
    // console.log(propertyGroup.Contents.property(2).property(3).name)
    // console.log(propertyGroup.Contents.property(2).property(3).value)

      if (!prop) continue; // Пропускаем null properties

      if (prop.propertyValueType == PropertyValueType.COLOR) {
        colorValues.push({
          layerName: layer.name,
          propertyName: prop.name,
          value: prop.value
        });
      }

      if (prop.propertyType == PropertyType.PROPERTY) {
        getColorValuesFromProperties(layer, prop, colorValues);
      }
    }
  }
}

// Функция для поиска свойства по имени (рекурсивно)
function findPropertyByName(propertyGroup, propertyName) {
  if (!propertyGroup || !propertyGroup.numProperties) {
    return null;
  }

  for (var i = 1; i <= propertyGroup.numProperties; i++) {
    var prop = propertyGroup.property(i);
    console.log( prop.name)
    if (!prop) continue; // Пропускаем null properties

    if (prop.name === propertyName) {
    console.log( prop)
    console.log( prop.propertyType)
    console.log( PropertyType.PROPERTY)
      return prop;
    }

    if (prop.propertyType == PropertyType.PROPERTY) {
      var found = findPropertyByName(prop, propertyName);
      if (found) {
        return found;
      }
    }
  }

  return null;
}

getAllColorValues();
