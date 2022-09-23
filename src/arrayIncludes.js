import arraysEqual from "./arraysEqual.js"

const arrayIncludes = (bigArray, smallArray) => {
  for (const array of bigArray) {
    if (arraysEqual(array, smallArray)) {
      return true
    }
  }
  return false
}

export default arrayIncludes
