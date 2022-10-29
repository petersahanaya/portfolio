import { lazy, Suspense } from 'react'
import { Routes, Route }from 'react-router-dom'
const Home = lazy(() => import('./Pages/Home'))
const Project = lazy(() => import('./Pages/Project'))
const App = () => {
  return (
    <div className="App">
      <Suspense fallback={""}>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/project' element={<Project/>}/>
        </Routes>     
      </Suspense>
   </div>
  )
}

export default App
