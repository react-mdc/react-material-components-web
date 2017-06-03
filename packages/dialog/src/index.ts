import Backdrop from "./Backdrop";
import Body from "./Body";
import Container from "./Container";
import Footer from "./Footer";
import Header from "./Header";
import Surface from "./Surface";

export default class Dialog extends Container {
    public Backdrop = Backdrop;
    public Body = Body;
    public Footer = Footer;
    public Header = Header;
    public Surface = Surface;
}
