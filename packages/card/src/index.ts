import Action from "./Action";
import Actions from "./Actions";
import Container from "./Container";
import HorizontalBlock from "./HorizontalBlock";
import Media from "./Media";
import MediaItem from "./MediaItem";
import Primary from "./Primary";
import Subtitle from "./Subtitle";
import SupportingText from "./SupportingText";
import Title from "./Title";

export default class Card extends Container {
    public static Action = Action;
    public static Actions = Actions;
    public static HorizontalBlock = HorizontalBlock;
    public static Media = Media;
    public static MediaItem = MediaItem;
    public static Primary = Primary;
    public static Subtitle = Subtitle;
    public static SupportingText = SupportingText;
    public static Title = Title;
}
