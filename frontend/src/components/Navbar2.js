import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar2.css";
import myImg from "./Pulse.png";

// const Navbar2 = () => {
//   const { logout } = useLogout();
//   const { user } = useAuthContext();

//   const handleClick = () => {
//     logout();
//   };

//   return (
//     <>
//       <Navbar bg="dark" variant="dark">
//         <Container>
//           <Link to="/">
//             <img id="logoImg-n" src={myImg} />
//           </Link>
//           <Nav className="me-auto">
//             {user && (
//               <>
//                 <span
//                   className="hi"
//                   style={{ textDecoration: "none", color: "white" }}
//                 >
//                   {user.email}
//                 </span>
//                 {/* <Nav.Link href="/appointment">Appointment</Nav.Link>
//                 <Nav.Link href="/map">FindGymsNearYou</Nav.Link> */}
//                 <span className="hi">
//                   <Link
//                     to="/appointment"
//                     style={{ textDecoration: "none", color: "white" }}
//                   >
//                     {" "}
//                     Appointment{" "}
//                   </Link>
//                 </span>
//                 <span className="hi">
//                   <Link
//                     to="/map"
//                     style={{ textDecoration: "none", color: "white" }}
//                   >
//                     {" "}
//                     FindGymsNearYou{" "}
//                   </Link>
//                 </span>
//                 <span className="hi">
//                   <Link
//                     to="/shop"
//                     style={{ textDecoration: "none", color: "white" }}
//                   >
//                     {" "}
//                     Shop{" "}
//                   </Link>
//                 </span>
//                 <span className="hi">
//                   <Link
//                     to="/community"
//                     style={{ textDecoration: "none", color: "white" }}
//                   >
//                     {" "}
//                     Community{" "}
//                   </Link>
//                 </span>
//                 <span className="hi">
//                   <Link
//                     to="/chatbot"
//                     style={{ textDecoration: "none", color: "white" }}
//                   >
//                     {" "}
//                     Chatbot{" "}
//                   </Link>
//                 </span>
//                 <span className="hi">
//                   <Link
//                     to="/bmi"
//                     style={{ textDecoration: "none", color: "white" }}
//                   >
//                     {" "}
//                     BMI
//                   </Link>
//                 </span>
//                 <span className="hi">
//                   <Link
//                     to="/contact"
//                     style={{ textDecoration: "none", color: "white" }}
//                   >
//                     {" "}
//                     ContactUs
//                   </Link>
//                 </span>
//                 <span className="hi">
//                   <Link
//                     to="/about"
//                     style={{ textDecoration: "none", color: "white" }}
//                   >
//                     {" "}
//                     AboutUs
//                   </Link>
//                 </span>
//                 <span className="hi">
//                   <button
//                     onClick={handleClick}
//                     style={{ textDecoration: "none", color: "white" }}
//                   >
//                     Log out
//                   </button>
//                 </span>
//               </>
//             )}
//             {!user && (
//               <div>
//                 <span className="hi">
//                   <Link
//                     to="/login"
//                     style={{ textDecoration: "none", color: "white" }}
//                   >
//                     Login
//                   </Link>
//                 </span>
//                 <span className="hi">
//                   {" "}
//                   <Link
//                     to="/signup"
//                     style={{ textDecoration: "none", color: "white" }}
//                   >
//                     Signup
//                   </Link>
//                 </span>
//               </div>
//             )}
//             {/* <Nav.Link href="/">Home</Nav.Link>
//                 <Nav.Link href="#Heart">Is your heart fit?</Nav.Link>
//                 <Nav.Link href="#Community">Community</Nav.Link>
//                 <Nav.Link href="#pulsetransform">Pulse Transform</Nav.Link>
//                 <Nav.Link href="#dr">Consult doctor</Nav.Link>
//                 <Nav.Link href="/shop">Shop</Nav.Link>
//                 <Nav.Link href="/about">about us</Nav.Link>  */}
//           </Nav>
//         </Container>
//       </Navbar>
//     </>
//   );
// };

// export default Navbar2;

const Navbar2 = () => {
  const { logout } = useLogout();
  const handleClick = () => {
    logout();
  };
  return (
    <div className="flex items-center justify-between p-2 mb-3 text-2xl text-white bg-slate-500 absolute top-0 right-0 left-0 z-50">
      <div>Logo</div>
      <div>
        <ul className="flex">
          <li className="mr-6 p-2">
            <Link to="/" className="tracking-widest">
              Home
            </Link>
          </li>
          <li className="mr-6 p-2">
            <Link to="/appointment" className="tracking-widest">
              Appointment
            </Link>
          </li>
          <li className="mr-6 p-2">
            <Link to="/shop" className="tracking-widest">
              Shop
            </Link>
          </li>
          <li className="mr-6 p-2">
            <Link to="/map" className="tracking-widest">
              FindGymsNearYou
            </Link>
          </li>
          <li className="mr-6 p-2">
            <Link to="/BMI" className="tracking-widest">
              BMI
            </Link>
          </li>
          <li className="mr-6 p-2">
            <Link to="/chatbot" className="tracking-widest">
              Chatbot
            </Link>
          </li>
          <li
            onClick={handleClick}
            className="mr-6 bg-blue-700 p-2 rounded-md text-white hover:bg-blue-600 transition-all"
          >
            <Link to="/login" className="tracking-widest">
              Log Out
            </Link>
          </li>
          {/* <li className="mr-6 bg-blue-700 p-2 rounded-md text-white hover:bg-blue-600 transition-all">
            <Link to="/signup" className="tracking-wider">
              Sign Up
            </Link>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar2;
