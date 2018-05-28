var recipes = {
  snacks: 'banana muffins',
  lunch: 'pbandj sandwich'
}

function updateObjectWithKeyAndValue(recipes, key, value){
  Object.assign({}, {snacks: 'banana muffins',
  lunch: 'pbandj sandwich'})
  recipes[key] = value;
  return Object
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value){
recipes[key] = value;
return recipes
}

function deleteFromObjectByKey(object, key){

}
