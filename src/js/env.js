
const json = {

}

function request () {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(json)

    }, 0)
  })
}

export default request
