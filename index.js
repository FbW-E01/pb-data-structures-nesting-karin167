//1
let board = [
    [1, 2, 3],
    ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
    [true, false],
];

for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
        console.log(board[i][j]);
    }
}
console.log('================================================');
//2
const doggo = {
    name:'rexi',
    breed:'podel',
    favoriteFood:['pizza','ice-cream','steak'],
    doogoFood: function () {
        for (let i = 0; i < this.favoriteFood.length; i++){
            console.log(this.favoriteFood[i]);
        }

        // console.log(this.favoriteFood);
         //    return this.favoriteFood;
    },
}

// console.log(doggo.favoriteFood[1]);

console.log(doggo.doogoFood());

// מטודה פונקצייה בתוך אובייקט\

console.log('================================================');

//3
const recipes = {
ingredients:{ butter: '100 gram', sugar: "200 gram", flour: "50 gram"},
fun:function (){
    for(let i = 0; i < this.ingredients; i++){
        console.log(this.ingredients (i));
    }
},
}
recipes.ingredients.ginger ='30 gram'
recipes.ingredients.brownsugar=recipes.ingredients.sugar
delete recipes.ingredients.sugar;
console.log(recipes);
console.log(recipes.fun());
