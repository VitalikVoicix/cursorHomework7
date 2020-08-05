
const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };


const getMyTaxes = function(salary){
     let taxInCash = this.tax*salary;
     return  `Tax is ${taxInCash}` 
}

console.log(getMyTaxes.call(ukraine,15000))
console.log(getMyTaxes.call(latvia,15000))
console.log(getMyTaxes.call(litva,15000))



const getMiddleTaxes = function(){
    let taxInCash = this.tax*this.middleSalary;  
    return this.middleSalary - taxInCash;
}

console.log(getMiddleTaxes.call(ukraine))
console.log(getMiddleTaxes.call(latvia))
console.log(getMiddleTaxes.call(litva))


const getTotalTaxes = function(){
    let allTaxPay = this.tax * this.middleSalary * this.vacancies;
    return allTaxPay;
}
console.log(getTotalTaxes.call(ukraine))
console.log(getTotalTaxes.call(latvia))
console.log(getTotalTaxes.call(litva))


function  getMySalary (){  
     setInterval(() =>{
     let obj = {}
     obj.salary = Math.floor(1500 + Math.random() * (2000 + 1 - 1500))
     obj.taxes = Math.round(this.tax * obj.salary);
     obj.profit = obj.salary - obj.taxes;
      console.log(obj);
},10000)
}
getMySalary.call(ukraine);


let container=document.querySelector("#root");
container.innerHTML=`
<p> Податок для ІТ спеціаліста в Україні при зарплаті в 15000 : ${getMyTaxes.call(ukraine,15000)}</p>
<p> Податок для ІТ спеціаліста в Латвії при зарплаті в 15000 : ${getMyTaxes.call(latvia,15000)}</p>
<p> Податок для ІТ спеціаліста в Литві при зарплаті в 15000 : ${getMyTaxes.call(litva,15000)}</p>
<hr>
<p>Середнє надходження коштів до місцевих бюджетів від ІТ спеціалістів в Україні: ${getMiddleTaxes.call(ukraine)}</p>
<p> Середнє надходження коштів до місцевих бюджетів від ІТ спеціалістів в Латвії: ${getMiddleTaxes.call(latvia)}</p>
<p> Середнє надходження коштів до місцевих бюджетів від ІТ спеціалістів в Литві: ${getMiddleTaxes.call(litva)}</p>
<hr>
<p>Загальне  надходження коштів до місцевих бюджетів від ІТ спеціалістів в Україні: ${getTotalTaxes.call(ukraine)}</p>
<p> Загальне  надходження коштів до місцевих бюджетів від ІТ спеціалістів в Латвії: ${getTotalTaxes.call(latvia)}</p>
<p> Загальне надходження коштів до місцевих бюджетів від ІТ спеціалістів в Литві: ${getTotalTaxes.call(litva)}</p>
<p>Останню фукцію побачите в консолі!</p>
`





