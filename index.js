var recipes = {
  snacks: 'banana muffins',
  lunch: 'pbandj sandwich'
}

function updateObjectWithKeyAndValue(recipes, key, value){
  recipes[key] = value;
  return recipes
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value){
recipes[key] = value;
return recipes
}
