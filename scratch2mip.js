(function(ext) {
    ext._shutdown = function() {};

    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    ext.right = function(degrees) {
        $.get('http://localhost:8080/right?degrees=' + degrees, null, function() {
            console.log('turn right ' + degrees + ' degrees');
        });
    };
    
    ext.left = function(degrees) {
        $.get('http://localhost:8080/left?degrees=' + degrees, null, function() {
            console.log('turn left ' + degrees + ' degrees');
        });
    };
    
    ext.forward = function(steps) {
        $.get('http://localhost:8080/forward?steps=' + steps, null, function() {
            console.log('move forward ' + steps + ' steps');
        });
    };
    
    ext.backward = function(steps) {
        $.get('http://localhost:8080/backward?steps=' + steps, null, function() {
            console.log('move backward ' + steps + ' steps');
        });
    };
    
    ext.chestChangeRed = function(red) {
        $.get('http://localhost:8080/chestChangeRed?red=' + red, null, null, null, function() {
            console.log('Change Chest Colour(red) ' + red );
        });
    };
	
    ext.chestChangeRgb = function(red, green, blue) {
        $.get('http://localhost:8080/chestChangeRgb?red=' + red + '&green=' + green + '&blue=' + blue, null, function() {
            console.log('Change Chest Colour(rgb) ' + red + green + blue );
        });
    };

    var lang = 'en';
    var locale = {
        en: {
            turn_right: 'turn right %n degrees',
            turn_left: 'turn left %n degrees',
            move_forward: 'move forward %n steps',
            move_backward: 'move backward %n steps',
	    chest_red: 'Change Chest Colour (Red) %n',
	    chest_rgb: 'Change Chest Colour (RGB) %n, %n, %n'
        },
    }

    var descriptor = {
        blocks: [
            [' ', 'MiP: ' + locale[lang].turn_right, 'right', 90],
            [' ', 'MiP: ' + locale[lang].turn_left, 'left', 90],
            [' ', 'MiP: ' + locale[lang].move_forward, 'forward'],
            [' ', 'MiP: ' + locale[lang].move_backward, 'backward'],
	    [' ', 'MiP: ' + locale[lang].chest_red, 'chestChangeRed'],
	    [' ', 'MiP: ' + locale[lang].chest_rgb, 'chestChangeRgb'],
        ]
    };

    ScratchExtensions.register('Scratch2MiP', descriptor, ext);
})({});
