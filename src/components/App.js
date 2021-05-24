import Navbar from "./Navbar";
import Footer from "./Footer";


function App() {
  return (
      <div>
          <Navbar/>
          <Footer/>
      </div>
  );
}

export default App;


// <Router>
//     <NavLink to='/'>Home</NavLink>
//     <NavLink to='/About'>About</NavLink>
//     <Switch>
//         <Route exact path='/' component={Home}></Route>
//         <Route exact path='/About' component={About}></Route>
//         <Route exact component={Error}></Route>
//     </Switch>
// </Router>