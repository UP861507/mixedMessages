const random = () => {
    //type of food
    let main = ['pizza', 'kebak', 'chicken wings', 'chips', 'nuggets', 'burger'];
    let sauce = ['ketchup', 'burger sauce', 'mayonnaise', 'bbq'];

    //make type of food random
    let randomMain = Math.floor(Math.random() * main.length);
    let randomSauce = Math.floor(Math.random() * sauce.length);

    //output random result to console
    let output = [];
    output.push(`you can get ${randomMain} with ${randomSauce} when feeling hungry`);
    return output
};

console.log(random());