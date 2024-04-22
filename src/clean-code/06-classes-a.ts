(() => {
  type Gender = "M" | "F";

  class Person {
    constructor(
      public name: string,
      public gender: Gender,
      public birthdate: Date
    ) {}
  }

  class User extends Person {
    private lastAccess: Date;

    constructor(
      public email: string,
      public role: string,
      public name: string,
      public gender: Gender,
      public birthdate: Date
    ) {
      super(name, gender, birthdate);
      this.lastAccess = new Date();
    }

    checkCredentials() {
      return true;
    }
  }

  class UserSettings extends User {
    constructor(
      public workingDirectory: string,
      public lastOpenFolder: string,
      public email: string,
      public role: string,
      public name: string,
      public gender: Gender,
      public birthdate: Date
    ) {
      super(email, role, name, gender, birthdate);
    }
  }

  const userSettings = new UserSettings(
    "/usr/home",
    "/home",
    "ragnar@gmail.com",
    "admin",
    "Ragnar",
    "M",
    new Date("1999-06-24")
  );

  console.log({
    userSettings,
    areCredentialsValid: userSettings.checkCredentials(),
  });
})();
