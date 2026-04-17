import { useState, useReducer, useEffect } from 'react'
import '../App.css'

function Header(props) {
  useEffect(() => {
    document.title = props.isOpen
      ? `${props.demoname} - Open`
      : `${props.demoname} - Closed`
  }, [props.isOpen, props.demoname])

  return (
    <header>
      <div className="header-top">
        <h1>This is {props.demoname} study Portal!</h1>
        {props.isOpen && (
          <nav>
            <ul className="header-menu">
              {props.menuItems.map((item) => (
                <li key={item}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}

function Body() {
  return (
    <main>
      <h2>Body</h2>
      <p>Welcome to the React app. This content is rendered from the Body component.</p>
    </main>
  )
}

function statusReducer(state, action) {
  switch(action.type) {
    case 'TOGGLE_STATUS':
      return { isOpen: !state.isOpen }
    case 'OPEN':
      return { isOpen: true }
    case 'CLOSE':
      return { isOpen: false }
    default:
      return state
  }
}

function Footer({ demoowner, demoyear, menuItems, onStatusChange }) {
  const [footerState, dispatch] = useReducer(statusReducer, { isOpen: true })

  useEffect(() => {
    onStatusChange(footerState.isOpen)
    document.title = footerState.isOpen ? 'Website Open' : 'Website Closed'
  }, [footerState.isOpen, onStatusChange])

  const handleToggleStatus = () => {
    dispatch({ type: 'TOGGLE_STATUS' })
  }

  const handleCloseWebsite = () => {
    dispatch({ type: 'CLOSE' })
  }

  return (
    <footer>
      <div className="footer-top">
        <nav>
          <ul className="footer-menu">
            {menuItems.map((item) => (
              <li key={item}>
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <p>© {demoowner} {demoyear}</p>
      <div className="footer-buttons">
        <button 
          className="footer-button" 
          type="button"
          title="Toggle website status"
          onClick={handleToggleStatus}
        >
          {footerState.isOpen ? 'Close Website' : 'Open Website'}
        </button>
        <button 
          className="footer-button close-btn" 
          type="button"
          title="Close website"
          onClick={handleCloseWebsite}
        >
          Close Now
        </button>
      </div>
    </footer>
  )
}

function HomePage() {
  const [isOpen, setIsOpen] = useState(true)
  const menuItems = ['Constantin', 'Home', 'Signup', 'Login']

  return (
    <div className="app-shell">
      <Header demoname="react Demo" menuItems={menuItems} isOpen={isOpen} />

      <section className="status-panel">
        <p>
         Web Site Status: <strong>{isOpen ? 'Open' : 'Closed'}</strong>
        </p>
        <button className="status-button" type="button" title="use of status hooks" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? 'Show Closed' : 'Show Open'}
        </button>
      </section>

      {isOpen && <Body />}

      {isOpen && <Footer demoowner="Neeraj Mahajan" demoyear="2026-2027" menuItems={menuItems} onStatusChange={setIsOpen} />}
    </div>
  )
}

export default HomePage