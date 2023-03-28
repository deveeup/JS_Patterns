/**
  * How to implement singleton?
  * 0. Create falsy value for validate instance
  * 1. Make the constructor private
  * 2. Create a static method who calls the private constructor and save the instasnce in a static variable
*/

class SingletonTS {
  private static instance: SingletonTS;
  private version: string;

  private constructor() {
    this.version = this.version;
  }

  static getInstance(version: string): SingletonTS {
    if (!SingletonTS.instance) {
      SingletonTS.instance = new SingletonTS(version);
    }
    return SingletonTS.instance;
  }
}

function appSingletonTS() {
  const singleton1 = SingletonClass.getInstance('v1');
  const singleton2 = SingletonClass.getInstance('v2');

  console.log(singleton1 === singleton2);
}

appSingletonTS();