// import React from "react";
// import 'mdb-react-ui-kit/dist/css/mdb.min.css'

// function Header() {
//   return (
// //     <div className="App">
// //     <nav>
// //   <div class="container-fluid">

// //     <button
// //       class="navbar-toggler"
// //       type="button"
// //       data-mdb-toggle="collapse"
// //       data-mdb-target="#navbarRightAlignExample"
// //       aria-controls="navbarRightAlignExample"
// //       aria-expanded="false"
// //       aria-label="Toggle navigation"
// //     >
// //       <i class="fas fa-bars"></i>
// //     </button>


// //     <div class="collapse navbar-collapse" id="navbarRightAlignExample">
 
// //       <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
// //         <li class="nav-item">
// //           <a class="nav-link active" aria-current="page" href="#">Home</a>
// //         </li>
// //         <li class="nav-item">
// //           <a class="nav-link" href="#">Link</a>
// //         </li>
     
// //         <li class="nav-item dropdown">
// //           <a
// //             class="nav-link dropdown-toggle"
// //             href="#"
// //             id="navbarDropdown"
// //             role="button"
// //             data-mdb-toggle="dropdown"
// //             aria-expanded="false"
// //           >
// //             Dropdown
// //           </a>
     
// //           <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
// //             <li>
// //               <a class="dropdown-item" href="#">Action</a>
// //             </li>
// //             <li>
// //               <a class="dropdown-item" href="#">Another action</a>
// //             </li>
// //             <li><hr class="dropdown-divider" /></li>
// //             <li>
// //               <a class="dropdown-item" href="#">Something else here</a>
// //             </li>
// //           </ul>
// //         </li>
// //         <li class="nav-item">
// //           <a class="nav-link disabled"
// //             >Disabled</a
// //           >
// //         </li>
// //       </ul>
    
// //     </div>
 
// //   </div>

// // </nav>

// //     </div> 
// <nav className="navbar navbar-expand-lg navbar-light bg-light">

//   <div className="container-fluid">
  
//     <button
//       className="navbar-toggler"
//       type="button"
//       data-mdb-toggle="collapse"
//       data-mdb-target="#navbarSupportedContent"
//       aria-controls="navbarSupportedContent"
//       aria-expanded="false"
//       aria-label="Toggle navigation"
//     >
//       <i className="fas fa-bars"></i>
//     </button>

    
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
    
//       <a className="navbar-brand mt-2 mt-lg-0" href="#">
//         <img
//           src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
//           height="15"
//           alt="MDB Logo"
//           loading="lazy"
//         />
//       </a>
     
//       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//         <li className="nav-item">
//           <a className="nav-link" href="#">Dashboard</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="#">Team</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="#">Projects</a>
//         </li>
//       </ul>
     
//     </div>
   

  
//     <div className="d-flex align-items-center">
     
//       <a className="text-reset me-3" href="#">
//         <i className="fas fa-shopping-cart"></i>
//       </a>

  
//       <div className="dropdown">
//         <a
//           className="text-reset me-3 dropdown-toggle hidden-arrow"
//           href="#"
//           id="navbarDropdownMenuLink"
//           role="button"
//           data-mdb-toggle="dropdown"
//           aria-expanded="false"
//         >
//           <i className="fas fa-bell"></i>
//           <span className="badge rounded-pill badge-notification bg-danger">1</span>
//         </a>
//         <ul
//           className="dropdown-menu dropdown-menu-end"
//           aria-labelledby="navbarDropdownMenuLink"
//         >
//           <li>
//             <a className="dropdown-item" href="#">Some news</a>
//           </li>
//           <li>
//             <a className="dropdown-item" href="#">Another news</a>
//           </li>
//           <li>
//             <a className="dropdown-item" href="#">Something else here</a>
//           </li>
//         </ul>
//       </div>
    
//       <div className="dropdown">
//         <a
//           className="dropdown-toggle d-flex align-items-center hidden-arrow"
//           href="#"
//           id="navbarDropdownMenuAvatar"
//           role="button"
//           data-mdb-toggle="dropdown"
//           aria-expanded="false"
//         >
//           <img
//             src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
//             className="rounded-circle"
//             height="25"
//             alt="Black and White Portrait of a Man"
//             loading="lazy"
//           />
//         </a>
//         <ul
//           className="dropdown-menu dropdown-menu-end"
//           aria-labelledby="navbarDropdownMenuAvatar"
//         >
//           <li>
//             <a className="dropdown-item" href="#">My profile</a>
//           </li>
//           <li>
//             <a className="dropdown-item" href="#">Settings</a>
//           </li>
//           <li>
//             <a className="dropdown-item" href="#">Logout</a>
//           </li>
//         </ul>
//       </div>
//     </div>

//   </div>

// </nav>

//   );
// }

// export default Header;
// import React, { useState } from 'react';
// import {
//   MDBNavbar,
//   MDBContainer,
//   MDBNavbarBrand,
//   MDBIcon,
//   MDBNavbarNav,
//   MDBNavbarItem,
//   MDBNavbarLink,
//   MDBNavbarToggler,
//   MDBCollapse
// } from 'mdb-react-ui-kit';

// export default function Header() {
//   const [showNavText, setShowNavText] = useState(false);

//   return (
//       <div>
//     {/* <MDBNavbar expand='lg' light bgColor='light'>
//       <MDBContainer fluid>
//         <MDBNavbarBrand href='#'>Navbar w/ text</MDBNavbarBrand>
//         <MDBNavbarToggler
//           type='button'
//           data-target='#navbarText'
//           aria-controls='navbarText'
//           aria-expanded='false'
//           aria-label='Toggle navigation'
//           onClick={() => setShowNavText(!showNavText)}
//         >
//           <MDBIcon icon='bars' fas />
//         </MDBNavbarToggler>
//         <MDBCollapse navbar show={showNavText}>
//           <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
//             <MDBNavbarItem>
//               <MDBNavbarLink active aria-current='page' href='#'>
//                 Home
//               </MDBNavbarLink>
//             </MDBNavbarItem>
//             <MDBNavbarItem>
//               <MDBNavbarLink href='#'>Features</MDBNavbarLink>
//             </MDBNavbarItem>
//             <MDBNavbarItem>
//               <MDBNavbarLink href='#'>Pricing</MDBNavbarLink>
//             </MDBNavbarItem>
//           </MDBNavbarNav>
//           <span className='navbar-text'> Navbar text with an inline element </span>
//         </MDBCollapse>
//       </MDBContainer>
//     </MDBNavbar> */}

// <Navbar bg="light" expand="lg">
//   <Container fluid>
//     <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
//     <Navbar.Toggle aria-controls="navbarScroll" />
//     <Navbar.Collapse id="navbarScroll">
//       <Nav
//         className="me-auto my-2 my-lg-0"
//         style={{ maxHeight: '100px' }}
//         navbarScroll
//       >
//         <Nav.Link href="#action1">Home</Nav.Link>
//         <Nav.Link href="#action2">Link</Nav.Link>
//         <NavDropdown title="Link" id="navbarScrollingDropdown">
//           <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
//           <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
//           <NavDropdown.Divider />
//           <NavDropdown.Item href="#action5">
//             Something else here
//           </NavDropdown.Item>
//         </NavDropdown>
//         <Nav.Link href="#" disabled>
//           Link
//         </Nav.Link>
//       </Nav>
//       <Form className="d-flex">
//         <FormControl
//           type="search"
//           placeholder="Search"
//           className="me-2"
//           aria-label="Search"
//         />
//         <Button variant="outline-success">Search</Button>
//       </Form>
//     </Navbar.Collapse>
//   </Container>
// </Navbar>

//     </div>
//   );
// }



import React, { useState } from 'react';
import { Button,Navbar,Toggle,Brand,Nav,Link,NavDropdown,Form,FormControl,Container } from 'react-bootstrap';

export default function Header() {
  const [showNavText, setShowNavText] = useState(false);

  return (
  
<Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
    <Navbar.Toggle 
    // aria-controls="navbarScroll" 
    aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">Home</Nav.Link>
        <Nav.Link href="#action2">Link</Nav.Link>
        <NavDropdown title="Link" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#" disabled>
          Link
        </Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>

  );
}