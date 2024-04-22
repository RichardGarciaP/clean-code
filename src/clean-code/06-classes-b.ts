(() => {
  type Gender = "M" | "F";

  interface PersonProps {
    name: string;
    gender: Gender;
    birthdate: Date;
  }

  class Person {
    public birthdate: Date;
    public gender: Gender;
    public name: string;

    constructor({ name, gender, birthdate }: PersonProps) {
      this.name = name;
      this.gender = gender;
      this.birthdate = birthdate;
    }
  }

  interface UserProps extends PersonProps {
    email: string;
    role: string;
  }

  class User extends Person {
    private lastAccess: Date;
    public role: string;
    public email: string;

    constructor({ email, role, ...otherProps }: UserProps) {
      super({ ...otherProps });
      this.role = role;
      this.email = email;
      this.lastAccess = new Date();
    }

    checkCredentials() {
      return true;
    }
  }

  interface UserSettingsProps extends UserProps {
    workingDirectory: string;
    lastOpenFolder: string;
  }

  class UserSettings extends User {
    public workingDirectory: string;
    public lastOpenFolder: string;
    constructor({
      workingDirectory,
      lastOpenFolder,
      ...userProps
    }: UserSettingsProps) {
      super({ ...userProps });
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;
    }
  }

  const userSettings = new UserSettings({
    workingDirectory: "/usr/home",
    lastOpenFolder: "/home",
    email: "ragnar@gmail.com",
    role: "admin",
    name: "Ragnar",
    gender: "M",
    birthdate: new Date("1999-06-24"),
  });

  console.log({
    userSettings,
    areCredentialsValid: userSettings.checkCredentials(),
  });
})();
