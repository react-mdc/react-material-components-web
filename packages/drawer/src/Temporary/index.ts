import Container from "./Container";
import Content from "./Content";
import Drawer from "./Drawer";
import Header from "./Header";
import HeaderContent from "./HeaderContent";
import ToolbarSpacer from "./ToolbarSpacer";

export default class Temporary extends Container {
    public static Content = Content;
    public static Drawer = Drawer;
    public static Header = Header;
    public static HeaderContent = HeaderContent;
    public static ToolbarSpacer = ToolbarSpacer;
}
