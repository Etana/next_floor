var href = window.location.href;
if(/[1-9]/.test(href)) {
  window.document.addEventListener('keydown', function(e){
    if(!e.ctrlKey || !e.shiftKey) return;
    switch(e.which) {
      case 65:
        var diff = 1; break;
      case 88:
        var diff = -1; break;
      default:
        return;
    }
    var re = /([1-9][0-9]*)([^1-9]*)$/;
    window.location.href= encodeURI(decodeURI(href).replace(re, function(_, num, end){
      return parseInt(num) + diff + end
    }));
  });
};
