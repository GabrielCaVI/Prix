function populateComponent(component, jsonObject) {
    component.data = jsonObject.data;
    component.configuration = jsonObject.configuration;
    component.styling = jsonObject.styling;
  }
function loadComponent(selector, jsonPath) {
  var component = document.querySelector(selector);
  axios
    .get(jsonPath)
    .then(function(json) {
      populateComponent(component, json.data);
    })
    .catch(console.error);
}
