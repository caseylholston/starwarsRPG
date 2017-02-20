$(document).ready(function(){
    
    var firstNumber;
    var secondNumber;
    var result;

    initial();
    
// This is the initializing functions that sets the beginning game state
    function initial() {
        $('#first-number').empty();
        $('#operator').empty();
        $('#second-number').empty();
        $('#result').empty();

        firstNumber = '';
        secondNumber = '';
        operator = ''
        result = '';
        makeCharacter();
    };
// This function will make the characters stats
        function makeCharacter(){
        $('.number').on('click',function() {
            firstNumber += this.value;
            console.log(firstNumber);
            $('#first-number').html(firstNumber);
        });



        $('.clear').on('click',function() {
            initial();
        });
    }

// This function will determine the outcome of the attack button
        function makeCharacter(){
        $('.number').on('click',function() {
            firstNumber += this.value;
            console.log(firstNumber);
            $('#first-number').html(firstNumber);
        });



        $('.clear').on('click',function() {
            initial();
        });
    }


//  This is the function for the restart button
    $('.clear').on('click',function() {
            initial();
        });


});


