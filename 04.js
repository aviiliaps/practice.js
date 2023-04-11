function leapyear(year) {
    return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
  }
  console.log(leapyear(2014));
  console.log(leapyear(2001));
  console.log(leapyear(1600));
  console.log(leapyear(1800));
  console.log(leapyear(2000));