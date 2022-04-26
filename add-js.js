const user = {id:1, name:'tapu', job:'Web Developer'};
const userStringified = JSON.stringify(user);
// console.log(user);
// console.log(userStringified);


const shop = {
    name:'tapu',
    address:'tapu,2015',
    profit:1500000,
    products:['laptop', 'mobile', 'pepsi'],
    owner:{
        name:'tapu hasan',
        profession:'Business Man'
    },
    isExpensive:false,
}
const shopStringified = JSON.stringify(shop);
// console.log(shop);
// console.log(shopStringified);

const converted = JSON.parse(shopStringified);
console.log(converted);

