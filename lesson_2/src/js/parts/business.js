import {employersNames} from './employers';
import {money, eu, rus} from './money';

class BusinessInfo{
  constructor(eu, rus, owner, director, cash, emp ){
    this.eu = eu;
    this. rus = rus;
    this.owner = owner;
    this.director = director;
    this.cash = cash;
    this.emp = emp;
}
  completeSponsors(){
      this.sumSponsors = [...this.eu, ...this.rus, 'unexpected sponsor'];
  }
  makeBusiness(){
      console.log(`We have a business. Owner: ${this.owner}, director: ${this.director}. Our budget: ${this.cash}. And our employers: ${this.emp}`);
      console.log(`And we have a sponsors: ${this.sumSponsors.join(', ')}`);
      console.log(`Note. Be careful with ${this.eu[0]}. It's a huge risk.`);
  }
  
}
const mainBusiness = new BusinessInfo(eu, rus, 'Sam', money,employersNames);
mainBusiness.makeBusiness();