const verfifyYear = (year) => {
  return year % 100 === 0 ? year % 400 === 0 : year % 4 == 0;
}

verfifyYear(2008)