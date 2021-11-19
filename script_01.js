// // // Entscheidungsstrukturen | control flow

// // // Deklaration //**** Variant 1 **/
// // // let ageJohn, ageMark;
// // // let isJohnOlder;

// // // Deklaration + Assigment
const ageJohn = 30;
const ageMark = 32;

// // // Assigment (Wertzuweisung) //****  Variant 1 **/
// // // ageJohn = 30;
// // // ageMark = 25;

// // // Deklaration
let isJohnOlder, isJohnEqual;

// // //Test Logische Aussage
isJohnOlder = (ageJohn > ageMark);
isJohnEqual = (ageJohn == ageMark);

// // // console.log(typeof isJohnOlder) //****  Variant1 **/

// // // Ausgabe
console.log("ageJohn" + ageJohn);
console.log("ageMark" + ageMark);
// // console.log("isJohnOlder:" + isJohnOlder);
// // console.log("isJohnEqual:" + isJohnEqual);


// /**************** IF ************* */
// // TINA ----> There is no alternative!
// // entweder JA oder nix ... alternativlos


// // if (true) 
// // if (false) 
// if(isJohnOlder)
// {
//     console.log("John ist älter");
// }

/******************  IF - ELSE ****************/
//Mit Alternative
// entweder ja oder nein

if(isJohnOlder)
{
      // Ja-Zweig / true
        console.log("John ist älter.");
}
else   
{
      // Nein-Zweig /false
    console.log("John ist Jünger.");
}
