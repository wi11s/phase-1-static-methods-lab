class Formatter {
  constructor(string) {
    this.string = string
  }

  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]+/g, "");
  }

  static titleize(string) {
    const stringArray = string.split(' ')
    const titledStringArray = []
    stringArray.forEach(word => {
      if (word === 'the' || word === 'a' || word === 'an' || word === 'but' || word === 'of' || word === 'and' || word === 'for' || word === 'at' || word === 'by' || word === 'from') {
        titledStringArray.push(word)
      } else {
        titledStringArray.push(word[0].toUpperCase()+word.slice(1))
      }
    })
    const newString = titledStringArray.join(' ')
    const finalNewString = newString[0].toUpperCase()+newString.slice(1)
    return finalNewString
  }
}