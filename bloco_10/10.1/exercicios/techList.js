const techList = (array, name) => {
  if (array.length === 0)
  return 'Vazio!'; 
    
  const arrayOfTech = array
  .sort()
  .map((technology) => ({
    tech: technology,
    name,
  }));
  return arrayOfTech
};

module.exports = techList;