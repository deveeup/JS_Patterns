/**
  * How to implement singleton?
  * 0. Create falsy value for validate instance
  * 1. Make the constructor private
  * 2. Create a static method who calls the private constructor and save the instasnce in a static variable
*/

class SingletonClass {
  static instance = undefined;

  constructor(version) {
    this.version = version;
  }

  static getInstance(version) {
    if (!SingletonClass.instance) {
      SingletonClass.instance = new SingletonClass(version);
    }
    return SingletonClass.instance;
  }
}

function appSingleton() {
  const singleton1 = SingletonClass.getInstance('v1');
  const singleton2 = SingletonClass.getInstance('v2');

  console.log(singleton1 === singleton2);
}

appSingleton();