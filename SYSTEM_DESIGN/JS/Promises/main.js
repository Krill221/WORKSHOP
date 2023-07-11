


async function bootstrap(){
  p = new Promise( res => {
    console.log(0)
    setTimeout(() => {
      console.log(111)
      res()
    },1000)
  })
  await p
  console.log(222)

}
bootstrap()