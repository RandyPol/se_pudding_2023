import React from 'react'
// Import the routing components from react-router-dom
import { Route, Switch, useLocation } from 'react-router-dom'
// Import the components
import LandingPage from './LandingPage'
import Header from './Header'
import Team from './Team'
import SlidesShow from './SlidesShow'
import Footer from './Footer'

function App() {
  const location = useLocation()
  return (
    <div className={'page'}>
      {location.pathname !== '/' && <Header />}
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <main className="page__container">
          <Route path="/dataSlide">
            <SlidesShow />
          </Route>
          <Route path="/team">
            <Team />
          </Route>
        </main>
      </Switch>
      <Footer />
    </div>
  )
}

export default App
