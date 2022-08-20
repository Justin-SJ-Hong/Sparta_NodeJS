function getAge(dateOfBirth) {
    // 코드 작성
    const birthday = Date.parse(dateOfBirth);
    var currentDate = Date.now()
    var age = Math.floor((currentDate - birthday) / (1000 * 60 * 60 * 24 * 365));
    
    return age;
  }
  
  console.log(getAge('1998-10-18 09:00:00'));
  // Print: 32