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
	
    ext.chestChangeGreen = function(green) {
        $.get('http://localhost:8080/chestChangeRed?green=' + green, null, null, null, function() {
            console.log('Change Chest Colour(green) ' + green );
        });
    };


    var lang = 'en';
    var locale = {
        en: {
            turn_right: 'turn right %n degrees',
            turn_left: 'turn left %n degrees',
            move_forward: 'move forward %n steps',
            move_backward: 'move backward %n steps',
	    chest_red: 'Change Chest Colour (red) %n'
	    chest_green: 'Change Chest Colour (green) %n'
        },
    }

    var descriptor = {
        blocks: [
            [' ', 'MiP: ' + locale[lang].turn_right, 'right', 90],
            [' ', 'MiP: ' + locale[lang].turn_left, 'left', 90],
            [' ', 'MiP: ' + locale[lang].move_forward, 'forward'],
            [' ', 'MiP: ' + locale[lang].move_backward, 'backward'],
	    [' ', 'MiP: ' + locale[lang].chest_red, 'chestChangeRed']
	    [' ', 'MiP: ' + locale[lang].chest_green, 'chestChangeGreen']
        ]
    };

    ScratchExtensions.register('Scratch2MiP', descriptor, ext);
})({});
