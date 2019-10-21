// Code your solution here
function findMatching(array, name) {
  return array.filter((driver) => {
    return driver.toLowerCase() === name.toLowerCase()
  })
}
