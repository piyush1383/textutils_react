import React from 'react'
// import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    // We are using curly brackets to write javaScript in it and ` sign to use the template literals 
    // ${ We can write javascript in the brackets } 
    // We are passing mode as properties as props.mode
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="#">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link" href="/">{props.aboutText}</a>
          </li> */}
         
          
        </ul>
        {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-primary" type="submit">Search</button>
        </form> */}
        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                                                  {/* if props.mode is light then make the value of props.mode dark otherwise light  */}
             <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
             <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
        </div>
      </div>
    </div>
  </nav>
 
  )
}

// we have set the types of title as string so when we try to give a number then it will show error

// Navbar.propTypes = {
//     title: PropTypes.string.isRequired,
//     aboutText: PropTypes.string
// }

// when we dont pass the title and aboutText then it will take the deafaultProps

// Navbar.defaultProps = {
//     title: 'Set title here',
//     aboutText: 'About text here'
// };