import './App.css'
import Title from './components/Title'
import Calculator from './components/Calculator'

function App() {
  
  return (
    <>
      
      <div className="big-title">
        <Title title= "Calculator9000" />
        <Title text = "This is a calculator" />     
      </div>
      <Calculator />
    
    </>
  )
}

export default App
