
$(document).ready(function() {
         
    // sending a connect request to the server.
    var socket = io.connect('http://localhost:5000');
  
    // An event handler for submit button & get input value 
    $('input.sync').on('click', function(event) {
        socket.emit('chat', {
            data: $('#inputtext').val(),
            opsi: $('#opt').val(),
        });
        return false;
    });
    
    // event 'after connect'   
    socket.on('after connect', function(msg) {
        console.log('After connect', msg);
    });
  
    // event 'update value'
    socket.on('update value', function(msg) {
        console.log('Value updated');
        $('#output').text(msg.data + msg.opsi);
    });
});