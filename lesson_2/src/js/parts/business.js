import {employersNames} from './employers';
import {money, eu, rus} from './money';

class BusinessInfo{
  constructor({
      eu: eu, rus: rus, owner: owner, director: director, cash: cash, emp: emp} = {
      eu: ['Google','Apple'], rus: ['Yandex','Mail']}
  ){
      this.eu = eu;
      this. rus = rus;
      this.owner = owner;
      this.director = director;
      this.cash = cash;
      this.emp = emp;

      this.init(); // Инициализация //
  }
  completeSponsors(){
      this.sumSponsors = [...this.eu, ...this.rus, 'unexpected sponsor'];
  }
  makeBusiness(){
      console.log(`We have a business. Owner: ${this.owner}, director: ${this.director}. Our budget: ${this.cash}. And our employers: ${this.emp}`);
      console.log(`And we have a sponsors: ${this.sumSponsors.join(', ')}`);
      console.log(`Note. Be careful with ${this.eu[0]}. It's a huge risk.`);
  }
  init(){
      this.completeSponsors();
      this.makeBusiness();
  }
}
const mainBusiness = new BusinessInfo({
  eu: eu,
  rus: rus,
  owner: 'Sam',
  cash: money,
  emp: employersNames,
});