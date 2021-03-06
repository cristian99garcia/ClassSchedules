/**
 * Algunas funciones que creo que los tipos de datos 'primitivos' deberían
 * poseer, este archivo se debería importar una sola vez.
 */

String.prototype.replaceAll = function(a, b) {
  return this.split(a).join(b);
}

Array.prototype.remove = function(element) {
  removed = false;
  return this.filter(function(value) {
    if (!removed && element === value) {
      removed = true;
      return false;
    }

    return true;
  });
}

Array.prototype.removeAll = function(element) {
  return this.filter(function(value) {
    return element !== value;
  });
}
