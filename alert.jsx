if (typeof console === "undefined") {
  console = {
    log: function(message) {
      if (typeof __jsx_debugger_output__ !== 'undefined') {
        __jsx_debugger_output__(message); // Вывод в консоль отладки VS Code
      } else {
        $.writeln(message); // Альтернатива: вывод в ESTK
      }
    }
  };
}



alert("Hello_World");
x=5 
console.log (x);
console.log ('Привет');
alert("Hello2_World");
alert("Hello3_World");
alert("Hello4_World");
