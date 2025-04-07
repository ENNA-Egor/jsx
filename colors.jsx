


// Получаем активный слой
var comp = app.project.activeItem.name;
console.log(comp);

var activeLayer = app.project.activeItem.layers;

// Создаем массив для хранения свойств цвета
var colorProperties = [];

console.log (activeLayer.length);
console.log (activeLayer[12].name);
// console.log (activeLayer[3].propertySpec.propertyIndex);
console.log (activeLayer[12].numProperties);

// for (var i =1; i<=activeLayer.length; i++) {
//     console.log (activeLayer[i].name);
//     console.log (activeLayer[i].numProperties);
//     for (var n = 1; n<=activeLayer[i].numProperties; n++){
//       console.log(activeLayer[i].propertyGroup[n].name)
//     }
// }

// Проходим по всем группам свойств слоя
// for (var groupIndex = 1; groupIndex <= activeLayer.propertyGroups.length; groupIndex++) {
//   var propertyGroup = activeLayer.propertyGroup(groupIndex);

//   // Проходим по всем свойствам в группе
//   for (var i = 0; i < propertyGroup.numProperties; i++) {
//     // Получаем свойство
//     var property = propertyGroup.property(i);

//     // Проверяем, является ли свойство свойством цвета
//     if (property.propertyType == PropertyType.COLOR) {
//       // Добавляем свойство в массив
//       colorProperties.push(property);
//     }
//   }
// }

// // Выводим результат
// if (colorProperties.length > 0) {
//   console.log("Найдены следующие свойства цвета:\n" + colorProperties.join("\n"));
// } else {
//   console.log("Свойства цвета не найдены.");
// }

// В этом скрипте:

// 1. Внешний цикл for проходит по всем группам свойств слоя (activeLayer.propertyGroups.length).
// 2. Внутренний цикл for проходит по всем свойствам в каждой группе.
// 3. Остальная логика остается прежней: проверка типа свойства и добавление его в массив.

// Этот скрипт теперь будет искать свойства цвета во всех группах свойств выбранного слоя. 

// Надеюсь, эта модификация сделает скрипт более универсальным!