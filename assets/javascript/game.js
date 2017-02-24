$(document).ready(function(){
  //Declare Variables  
    var defeatedCharacter;
    var activeIndex;
    var activeCharacters;
    var characterAttackDiv;
    var characterDefenseDiv;
    var attackResult;
    initial();
    characterAttributes = {
                    attackSkill:[1,2,3,4,5],
                    defenseSkill:[4, 6, 8, 10,12],
                    luckSkill:[2,4,6,8,10],
                    hitPoints:[20,50,75,80,90],
                };
    
// This is the initializing functions that sets the beginning game state
    function initial() {
        $('.activeAttackChar').empty();
        $('.activeDefenseChar').empty();
        $('#restart').hide();
        $('.character').show();
        //fillAvailableCharacters()
        //function createCharacterNames(){}
       // $('.')

        characterAttackDiv = $('.activeAttackChar');
        characterDefenseDiv = $('.activeDefenseChar');

        attacker = '';
        defender = '';
        availableCharacters ={
                                name:[],
                                imageDetails:[],
                            };
        builtCharacters = {    name:[],
                               image:[],

        }

        selectedCharacters = { name:[],
                               imageDetails:[],

        };
        selectedIndex =0;
        activeCharacters = {
                            position :['',''],
                            attackRating:[','],
                            defenseRating:[','],
                            hitPoints:[','],
                            luckModifier:[','],
                            currentAttackValue:[','],
                            currentDefenseValue:[','],                        
                        };
        activeIndex = 0;
        defeatedCharacters ={
                             name:[],
                         };
        defeatedIndex =0;                
        attackResult = [','];

    //End Intitial Function
        };

            // This function will select the characters and make stats
                $(".character").on("click",function() {

                    if (activeIndex === 0) {
                    $(this).clone().appendTo(characterAttackDiv);
                    $(this).hide();
                    activeCharacters.position[activeIndex] = $(this).attr("name");
                    selectedCharacters.name[selectedIndex] = $(this).attr("name");
                    selectedCharacters.imageDetails = $(this);
                    selectedIndex++;

                        console.log(activeCharacters.position[activeIndex]);
                    
                    activeCharacters.attackRating[activeIndex] = characterAttributes.attackSkill[ (Math.floor( Math.random() * characterAttributes.attackSkill.length) )]*
                                                                 characterAttributes.luckSkill  [(Math.floor( Math.random() * characterAttributes.luckSkill.length) )];
                        console.log("Attack Rating " + activeCharacters.attackRating[activeIndex]);
                    
                    activeCharacters.defenseRating[activeIndex] = characterAttributes.defenseSkill[ (Math.floor( Math.random() * characterAttributes.defenseSkill.length) )]*
                                                                  characterAttributes.luckSkill   [(Math.floor( Math.random() * characterAttributes.luckSkill.length) )];
                        console.log("Defense Rating " + activeCharacters.defenseRating[activeIndex]);
                    
                    activeCharacters.hitPoints[activeIndex] = characterAttributes.hitPoints[ (Math.floor( Math.random() * characterAttributes.hitPoints.length) )]*
                                                              characterAttributes.luckSkill[(Math.floor( Math.random() * characterAttributes.luckSkill.length) )];
                        console.log("Hit Points " + activeCharacters.hitPoints[activeIndex]);

                    activeCharacters.luckModifier[activeIndex] = characterAttributes.luckSkill[ (Math.floor( Math.random() * characterAttributes.luckSkill.length) )]*
                                                              characterAttributes.luckSkill[(Math.floor( Math.random() * characterAttributes.luckSkill.length) )];
                        console.log("Luck Modifier " + activeCharacters.luckModifier[activeIndex]);
                    
                    activeIndex++;
                    }
                    else if (activeIndex === 1) {
                    $(this).clone().appendTo(characterDefenseDiv);
                    $(this).hide();
                    activeCharacters.position[activeIndex] = $(this).attr("name");
                    selectedCharacters.name[selectedIndex] = $(this).attr("name");
                    selectedCharacters.imageDetails = $(this);
                    selectedIndex++;
                    //$(characterDefenseDiv).html($( this ));
                        console.log(activeCharacters.position[activeIndex]);
                    
                    activeCharacters.attackRating[activeIndex] = characterAttributes.attackSkill[ (Math.floor( Math.random() * characterAttributes.attackSkill.length) )]*
                                                                 characterAttributes.luckSkill   [(Math.floor( Math.random() * characterAttributes.luckSkill.length) )];
                        console.log("Attack Rating " + activeCharacters.attackRating[activeIndex]);
                   
                    activeCharacters.defenseRating[activeIndex] = characterAttributes.defenseSkill[ (Math.floor( Math.random() * characterAttributes.defenseSkill.length) )]*
                                                    characterAttributes.luckSkill   [(Math.floor( Math.random() * characterAttributes.luckSkill.length) )];
                        console.log("Defense Rating " + activeCharacters.defenseRating[activeIndex]);
                    
                    activeCharacters.hitPoints[activeIndex] = characterAttributes.hitPoints[ (Math.floor( Math.random() * characterAttributes.hitPoints.length) )]*
                                                              characterAttributes.luckSkill[(Math.floor( Math.random() * characterAttributes.luckSkill.length) )];
                        console.log("Hit Points " + activeCharacters.hitPoints[activeIndex]);

                    activeCharacters.luckModifier[activeIndex] = characterAttributes.luckSkill[ (Math.floor( Math.random() * characterAttributes.luckSkill.length) )]*
                                                              characterAttributes.luckSkill[(Math.floor( Math.random() * characterAttributes.luckSkill.length) )];
                        console.log("Luck Modifier " + activeCharacters.luckModifier[activeIndex]);

                    activeIndex++;

                    }
                //End character on click    
                });

                //This is the function that determines the outcome of pressing the attack button
                 $('#attack-button').on('click', function() {
                    activeCharacters.currentAttackValue[0] = activeCharacters.attackRating[0]*([(Math.floor( Math.random() * 10 * activeCharacters.luckModifier[0]) )]);
                        console.log("Player 1 Attack Value " + activeCharacters.currentAttackValue[0]);

                    activeCharacters.currentDefenseValue[1] = activeCharacters.defenseRating[1]*([(Math.floor( Math.random() * activeCharacters.luckModifier[1]) )]);
                        console.log("Player 2 Defense Value " + activeCharacters.currentDefenseValue[1]);

                    attackResult[0] = ([(activeCharacters.currentAttackValue[0]-activeCharacters.currentDefenseValue[1])]);
                        console.log("Player 1 Attack Result " + attackResult[0]);

                    attackResult[0] = ([(activeCharacters.currentAttackValue[0]-activeCharacters.currentDefenseValue[1])]);
                        console.log("Player 2 Lost " + attackResult[0] + " Life");

                    activeCharacters.hitPoints[1] = (activeCharacters.hitPoints[1] - attackResult[0]);
                        console.log("New Player 2 Hit Point Total " + activeCharacters.hitPoints[1]);

                            if (activeCharacters.hitPoints[1] < 1) {
                                    alert("Player 2 Has Been Defeated");
                                    defeatedCharacters.name[defeatedIndex] = activeCharacters.position[1];
                                    defeatedIndex++;
                                    $('.activeDefenseChar').empty();
                                    //var defeatedCharacter = defeatedIndex.push(activeCharacters.position[1]);
                                    activeIndex--;
                                };
                             if (defeatedCharacters.name.length === 4) {
                                    alert("You Have Defeated All Challengers!");
                                    $('.activeAttackChar').empty();
                                    $('.activeDefenseChar').empty();
                                    $('#restart').show()
                                    };
                            

                            if (activeCharacters.hitPoints[1] > 0) {

                                    activeCharacters.currentAttackValue[1] = activeCharacters.attackRating[1]*([(Math.floor( Math.random() * 10 * activeCharacters.luckModifier[1]) )]);
                                        console.log("Player 2 Attack Value " + activeCharacters.currentAttackValue[1]);

                                    activeCharacters.currentDefenseValue[0] = activeCharacters.defenseRating[0]*([(Math.floor( Math.random() * activeCharacters.luckModifier[0]) )]);
                                        console.log("Player 1 Defense Value " + activeCharacters.currentDefenseValue[0]);

                                    attackResult[1] = ([Math.abs(activeCharacters.currentAttackValue[1]-activeCharacters.currentDefenseValue[0])]);
                                        console.log("Player 2 Attack Result " + attackResult[0]);

                                    attackResult[1] = ([Math.abs(activeCharacters.currentAttackValue[1]-activeCharacters.currentDefenseValue[0])]);
                                        console.log("Player 1 Lost " + attackResult[0] + " Life");

                                    activeCharacters.hitPoints[0] = (activeCharacters.hitPoints[0] - attackResult[1]);
                                    console.log("New Player 1 Hit Point Total " + activeCharacters.hitPoints[0]);   

                            if (activeCharacters.hitPoints[0] < 1 ) {
                                    alert("You Lose!");
                                    $('.activeAttackChar').empty();
                                    $('.activeDefenseChar').empty();
                                    $('#restart').show()
                                    }; 
                //End active characters hit point > 0 if statement
                            }
    // End Attack Button On click            
                });



     $('#restart').on('click',function() {
                        initial();
                        
               //End Initial Function on restart click
                });

    //End Document Ready Function
});





