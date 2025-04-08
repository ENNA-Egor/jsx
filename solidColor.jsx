function getSolidLayerColor(layer) {
   console.log(layer.source instanceof SolidSource)
   console.log("layer.source.typeName: " + layer.source.typeName)
  // Проверяем, что слой является слоем Solid
  if (layer instanceof AVLayer && layer.source instanceof SolidSource) {
    // Получаем цвет Solid слоя
    var color = layer.source.color;
    return color;
  } else {
    // Если это не Solid слой, возвращаем null или выдаем ошибку
    return null; // Или throw new Error("Слой не является Solid слоем.");
  }
}

// Пример использования:
function main() {
  var comp = app.project.activeItem;

  if (!comp || !(comp instanceof CompItem)) {
    alert("Пожалуйста, откройте композицию.");
    return;
  }

  // Получаем активный слой (или любой другой слой по индексу)
  var layer = comp.selectedLayers[0]; // Получаем первый выделенный слой

  if (!layer) {
    alert("Пожалуйста, выберите Solid слой.");
    return;
  }

  var solidColor = getSolidLayerColor(layer);

  if (solidColor) {
    console.log("Цвет Solid слоя: " + solidColor); // Выводим цвет в консоль
    // solidColor - это массив [red, green, blue] (значения от 0 до 1)
    var red = solidColor[0];
    var green = solidColor[1];
    var blue = solidColor[2];

    console.log("R: " + red + ", G: " + green + ", B: " + blue);

  } else {
    alert("Выбранный слой не является Solid слоем.");
  }
}

main();
