import { AiOutlineUser, AiOutlineShoppingCart } from "react-icons/ai";
import logo from "../../assets/imgs/logo.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-gradient-to-bl from-sky-500 to-sky-300">
      <div className="container mx-auto flex flex-row items-center justify-between">
        <div>
          <Link to={"/"}>
            <img src={logo} alt="logo" className="w-fit max-w-[60px]" />
          </Link>
        </div>
        <div>
          <input
            type="text"
            placeholder="ابحث هنا"
            className="search w-full max-w-xs rounded-md py-1 text-center caret-sky-800 outline-none placeholder:text-sm placeholder:text-slate-50 focus-within:placeholder:text-sky-500"
          />
        </div>
        <div className="mr-2 flex gap-1 justify-self-start text-slate-50 sm:gap-2 md:gap-4 ">
          <Link to="/login">
            <button className="btn icon px-3 py-1 text-xs hover:bg-white hover:text-slate-900 sm:text-base">
              <AiOutlineUser />
              دخول
            </button>
          </Link>
          <Link to="/cart">
            <button className="btn icon px-3 py-1 text-xs hover:bg-white hover:text-slate-900 sm:text-base">
              <AiOutlineShoppingCart />
              العربة
            </button>
          </Link>
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
