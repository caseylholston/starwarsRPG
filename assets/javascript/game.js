
  //Declare Variables  
    var attacker;
    var defender;
    var activeIndex;
    var activeCharacters;
    var hitPoints;
    var attackValue;
    var defenseValue;
    var characterAttackDiv;
    var characterDefenseDiv;
    var attackResult;
    initial();
    
// This is the initializing functions that sets the beginning game state
    function initial() {
        $('.activeAttackChar').empty();
        $('.activeDefenseChar').empty();
        $('#restart').empty();

        characterAttackDiv = $(".activeAttackChar");
        characterDefenseDiv = $(".activeDefenseChar");

        attacker = "";
        defender = "";
        activeCharacters = ["",""];
        activeIndex = 0;
        selectedIndex =[];
        hitPoints = "";
        attackValue = "";
        defenseValue = "";
        attackResult = "";
    

// This function will select the characters and make stats
    $(".character").on("click",function() {
        activeCharacters[activeIndex] += $(this).name;
        console.log(activeCharacters[activeIndex]);
        $(characterAttackDiv).html($( this ));
        console.log(characterAttackDiv);
        return;
    });

 }      

        // $('.number').on('click',function() {
        // numbers[workingIndex] += this.value;
        // console.log(numbers[workingIndex]);
        // $(numberDiv).text(numbers[workingIndex]);
        // return;
        //    });

        // $(".clear").on("click",function() {
        //     initial();
        // });
    

// This function will determine the outcome of the attack button
    //     function makeCharacter(){
    //     $('.number').on('click',function() {
    //         firstNumber += this.value;
    //         console.log(firstNumber);
    //         $('#first-number').html(firstNumber);
    //     });



    //     $('.clear').on('click',function() {
    //         initial();
    //     });
    // }


//  This is the function for the restart button
    // $('.clear').on('click',function() {
    //         initial();
    //     });





