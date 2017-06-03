import Container from "./Container";
import EndDetail from "./EndDetail";
import StartDetail from "./StartDetail";

export default class Item extends Container {
    public static EndDetail = EndDetail;
    public static StartDetail = StartDetail;
}
