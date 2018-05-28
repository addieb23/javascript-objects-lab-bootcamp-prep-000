var recipes = {
  snacks: 'banana muffins',
  lunch: 'pbandj sandwich'
}

function updateObjectWithKeyAndValue(recipes, key, value){
  var newRecipes = Object.assign({}, {snacks: 'banana muffins',
  lunch: 'pbandj sandwich'})
  newRecipes[key] = value;
  return newRecipes
}

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value){
recipes[key] = value;
return recipes
}
