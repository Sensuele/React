const makeBusiness = (owner, cash, emp, director = 'Victor') => {
    
  const sumSponsors = eu.concat(rus, 'unexpected sponsor');
  console.log(`We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash}. And our employers: ${emp}`);
  console.log('And we have a sponsors: ');

  console.log(...sumSponsors);

  console.log(`Note. Be careful with ${eu[0]}. It's a huge risk.`);
}
makeBusiness.apply(null, ['Sam', null, money, employersNames]);