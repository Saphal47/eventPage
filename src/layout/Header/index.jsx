import { useToggle } from "../../hooks/useToggle";
import { Button } from "../../components/Button";
import { Logo } from "../../components/Logo/index";
import { ModalLogin } from "../../components/Modal/ModalLogin";

const Menu = () => (
  <>
    <div className="flex flex-row space-x-8 text-xl font-semibold ">
    <p><a href="#home" className="text-white hover:text-gray-300">Home</a></p>
    <p><a href="#about" className="text-white hover:text-gray-300">About</a></p>
    <p><a href="#connect" className="text-white hover:text-gray-300">Connect</a></p>
      
    </div>
  </>
);

const Navbar = () => {
  const [isMenuOpen, toggleMenu] = useToggle(false);
  const [modal, setModal] = useToggle(false);
  
  return (
    <>
      <header className="container justify-between py-8 mb-16 items-center">
      <a
        href="https://lu.ma/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Logo />
      </a>

       
        <nav
          className={`lg:flex items-center lg:gap-6 ${isMenuOpen
            ? "flex flex-col gap-8 bg-purple-100 w-screen h-[100%] absolute z-10 left-0 top-0 pt-[160px]"
            : "hidden"
            }`} 
        >
          <Menu/>
        </nav>
        <Button color={"bg-red"} onClick={setModal}>
          Sign In
        </Button>
        <ModalLogin modal={modal} setModal={setModal} />
      </header>
    </>
  );
};

export default Navbar;
