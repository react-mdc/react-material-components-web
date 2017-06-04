import Container from "./Container";
import {
    Body1,
    Body2,
    Caption,
    Display1,
    Display2,
    Display3,
    Display4,
    Headline,
    Subheading1,
    Subheading2,
    Title,
} from "./shortcuts";
import Text from "./Text";

export default class Typography extends Container {
    public static Text = Text;

    public static Body1 = Body1;
    public static Body2 = Body2;
    public static Caption = Caption;
    public static Display1 = Display1;
    public static Display2 = Display2;
    public static Display3 = Display3;
    public static Display4 = Display4;
    public static Headline = Headline;
    public static Subheading1 = Subheading1;
    public static Subheading2 = Subheading2;
    public static Title = Title;
}
