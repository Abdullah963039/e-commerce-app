import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import logo from "../../assets/imgs/logo.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-gradient-to-bl from-sky-500 to-sky-300">
      <div className="container flex flex-row items-center justify-between mx-auto">
        <div>
          <Link to={"/"}>
            <img src={logo} alt="logo" className="max-w-[60px] w-fit" />
          </Link>
        </div>
        <div>
          <input
            type="text"
            placeholder="ابحث هنا"
            className="search rounded-md text-center py-1 outline-none w-full max-w-xs placeholder:text-slate-50 placeholder:text-sm focus-within:placeholder:text-sky-500 caret-sky-800"
          />
        </div>
        <div className="flex gap-1 sm:gap-2 md:gap-4 text-slate-50 mr-2 justify-self-start ">
          <Link to="/login">
            <button className="btn icon text-xs py-1 px-3 sm:text-base hover:bg-white hover:text-slate-900">
              <AiOutlineUser />
              دخول
            </button>
          </Link>
          <button className="btn icon text-xs py-1 px-3 sm:text-base hover:bg-white hover:text-slate-900">
            <AiOutlineShoppingCart />
            العربة
          </button>
        </div>
      </div>
    </header>
  );
}
// export default function Header({ login = false, cart = false }) {
//   return (
//     <header>
//       <Navbar bg="dark" expand="lg" className="d-flex">
//         <Container>
//           <Navbar.Brand>
//             <Link to="/">
//               <img
//                 src={logo}
//                 alt="logo"
//                 style={{
//                   width: "50px",
//                 }}
//               />
//             </Link>
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls="navbarScroll" />
//           <Navbar.Collapse id="navbarScroll">
//             <div className="d-flex align-items-center flex-column gap-3 flex-lg-row w-100 mt-3 mt-lg-0">
//               <Form className="mx-auto w-50">
//                 <Form.Control
//                   type="search"
//                   placeholder="بحث"
//                   className="me-2"
//                   aria-label="Search"
//                 />
//               </Form>
//               <Stack
//                 gap={2}
//                 direction="horizontal"
//                 className="mt-3 mt-sm-0 align-items-center justify-content-center"
//               >
//                 {login && (
//                   <Link to="/login">
//                     <Button
//                       variant="outline-secondary"
//                       className="d-flex align-items-center gap-1"
//                     >
//                       <FiLogIn />
//                       دخول
//                     </Button>
//                   </Link>
//                 )}
//                 {cart && (
//                   <Link to="/">
//                     <Button
//                       variant="outline-secondary"
//                       className="d-flex align-items-center gap-1"
//                     >
//                       <BsCart2 />
//                       العربة
//                     </Button>
//                   </Link>
//                 )}
//               </Stack>
//             </div>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </header>
//   );
// }
