export default class Programmer {
  constructor(name, language){
    this.name = name;
    this.language = language;
  }

  evangelize(){
    if (this.language){
      return this.name + ": " + this.language.toUpperCase() + " IS THE BEST LANGUAGE EVER";
    } else {
      return this.name + ": RUBY IS THE BEST LANGUAGE EVER";
    }
  }
}

export function addJavaScript(languages){
  return languages + "JavaScript";
}

export var bestLanguages = ["Ruby", "Elixir"];