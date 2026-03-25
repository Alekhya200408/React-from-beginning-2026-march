
import Tea from "./new"

function App() {

  const username="alekhya"

  return (
  //  <h1>Hello|Alekhya</h1>
  <>
  <Tea/>
  {/* in {} we only write evaluated expressions */}
  <h1>Hello {username}</h1>
  
  </> 

  )
}

export default App
// we only returns one value in jsx also we can wrap all in single div or <>it is called fragment</>