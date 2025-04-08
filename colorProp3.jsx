function getColorValuesFromLayer(layer, colorValues) {
  console.log("getColorValuesFromLayer: Layer name = " + layer.name); // ADDED
  var contents = layer.property("Contents");

  if (contents) {
    console.log("getColorValuesFromLayer: Contents found"); // ADDED
    getColorValuesFromContents(layer, contents, colorValues);
  } else {
    console.log("getColorValuesFromLayer: Contents NOT found"); // ADDED
  }
}

function getColorValuesFromContents(layer, contents, colorValues) {
  console.log("getColorValuesFromContents: Contents.numProperties = " + contents.numProperties); // ADDED
  if (!contents || !contents.numProperties) {
    return;
  }

  for (var i = 1; i <= contents.numProperties; i++) {
    var contentItem = contents.property(i);
    console.log("getColorValuesFromContents: contentItem.name = " + contentItem.name); // ADDED
    // Проверяем, является ли это "Group 1" (или "Shape 1" или что-то подобное)
    if (contentItem.name.indexOf("Group") === 0 || contentItem.name.indexOf("Shape") === 0) {
      console.log("getColorValuesFromContents: Found Group/Shape: " + contentItem.name); // ADDED
      getColorValuesFromGroup(layer, contentItem, colorValues);
    }
  }
}

function getColorValuesFromGroup(layer, group, colorValues) {
   console.log("getColorValuesFromGroup: Group.name = " + group.name + ", Group.numProperties = " + group.numProperties); // ADDED
  if (!group || !group.numProperties) {
    return;
  }

  for (var i = 1; i <= group.numProperties; i++) {
    var groupItem = group.property(i);
     console.log("getColorValuesFromGroup: groupItem.name = " + groupItem.name); // ADDED

    // Проверяем, является ли это "Stroke 1" или "Fill 1"
    if (groupItem.name.indexOf("Stroke") === 0 || groupItem.name.indexOf("Fill") === 0) {
       console.log("getColorValuesFromGroup: Found Stroke/Fill: " + groupItem.name); // ADDED
      getColorValuesFromStrokeOrFill(layer, groupItem, colorValues);
    }
  }
}

function getColorValuesFromStrokeOrFill(layer, strokeOrFill, colorValues) {
  console.log("getColorValuesFromStrokeOrFill: strokeOrFill.name = " + strokeOrFill.name + ", strokeOrFill.numProperties = " + strokeOrFill.numProperties); // ADDED
  if (!strokeOrFill || !strokeOrFill.numProperties) {
    return;
  }

  for (var i = 1; i <= strokeOrFill.numProperties; i++) {
    var prop = strokeOrFill.property(i);

    if (!prop) {
      console.warn("Обнаружено null-свойство. Пропускаем.");
      continue;
    }

    console.log("getColorValuesFromStrokeOrFill: prop.name = " + prop.name + ", prop.propertyType = " + prop.propertyType + ", prop.propertyValueType = " + prop.propertyValueType); // ADDED

    if (prop.propertyValueType === PropertyValueType.COLOR && prop.name === "Color") {
      console.log("getColorValuesFromStrokeOrFill: Found Color property!"); // ADDED
      colorValues.push({
        layerName: layer.name,
        propertyName: prop.name,
        value: prop.value
      });
    }
  }
}


getAllColorValues();