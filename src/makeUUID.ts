const makeUUID = (prefix = "", length = 10): string => {
  var result = []
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  var charactersLength = characters.length
  for (var i = 0; i < length; i++) {
    result.push(characters.charAt(Math.floor(Math.random() * charactersLength)))
  }
  return prefix?.length > 0 ? `${prefix}-${result.join("")}` : result.join("")
}

export default makeUUID
