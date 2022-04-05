import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Dashboard from './components/Dashboard/Dashboard';
import Home from './components/Home/Home';
import Navigation from './components/Navigation/Navigation';
import NotFound from './components/NotFound/NotFound';
import Review from './components/Review/Review';
import useReview from './hooks/useReview';


function App() {
  const [reviews] = useReview()
  return (
    <div className="App">
      <Navigation></Navigation>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/review' element={<div className='review-link'>
          {
            reviews.map(review => <Review 
              key={review.id}
              review={review}
              />)
          }
        </div>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
