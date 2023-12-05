const person = {
    name1: 'Kunal',
    name2: 'Hitesh',
    name3: 'Abhishek',
    sayHello: function() {
      console.log(`Hello, Good Morning ${this.name1}`);
      console.log(`Hello, Good Morning ${this.name2}`);
      console.log(`Hello, Good Morning ${this.name3}`);
    }
  };
  
  person.sayHello();