/*eslint-env browser*/
window.addEventListener("load", init, flase);
var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};

function init () {
nine.addEventListener("click", enter($(“nine”).value), false);
eight.addEventListener("click", enter(), false);
seven.addEventListener("click", enter(), false);
six.addEventListener("click", enter(), false);
five.addEventListener("click", enter(), false);
four.addEventListener("click", enter(), false);
three.addEventListener("click", enter(), false);
two.addEventListener("click", enter(), false);
one.addEventListener("click", enter(), false);
zero.addEventListener("click", enter(), false);
add.addEventListener("click", enter(), false);
subtract.addEventListener("click", enter(), false);
multiply.addEventListener("click", enter(), false);
divide.addEventListener("click", enter(), false);
period.addEventListener("click", enter(), false);
equal.addEventListener("click", calculate(), false);
    
}
