// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  var prop = document.body
  //result array = []
  var result = [];
  var getElement = function (element) {
    //check if class name = className
    var classlist = element.classList;
    if (classlist && classlist.contains(className)){
      result.push(element)
    }
    //check if has child(ren) nodes
    if (element.hasChildNodes())  {

     for (var i =0; i<element.childNodes.length; i++) {
      getElement(element.childNodes[i])
     }
    }
    //recursion over nodes to see if class name = className
  }

  //recursion function(document.body)
  getElement(prop)
  return result;
};
