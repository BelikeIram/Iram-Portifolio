
import {About, Footer, Skills, Header, Testimonial, Work} from './container/index'
import Navbar from './component/Navbar/Navbar';
import './App.scss'
 
const App = ()=>{
    return(
        <>
         <div className='app'>
           <Navbar/>
           <Header/>
           <About/>
           <Work/>
           <Skills/>
           <Testimonial/>
           <Footer/>
         </div>
        </>
    )
}
export default App;