var recipes = {
  snacks: 'banana muffins',
  lunch: 'pbandj sandwich'
}

function updateObjectWithKeyAndValue(recipes, key, value){
  var newObj = Object.assign({}, {recipes})
  recipes[key] = value;
  return newObj
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value){
recipes[key] = value;
return recipes
}
