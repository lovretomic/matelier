import StickyNoteBack from "../../assets/images/sticky-note.svg?react";
import c from "./StickyNote.module.scss";

type IconListItem = {
  icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  text: string;
};

type StickyNoteProps = {
  title: string;
  subtitle?: string;
  listItems?: IconListItem[];
};

const StickyNote: React.FC<StickyNoteProps> = ({
  title,
  subtitle,
  listItems,
}) => {
  return (
    <div className={c.wrapper}>
      <StickyNoteBack className={c.background} />
      <div className={c.titleWrapper}>
        <h4 className={c.title}>{title}</h4>
        <p className={c.subtitle}>{subtitle} </p>
      </div>
      <div className={c.contentWrapper}>
        {listItems?.map((item, index) => (
          <div key={index} className={c.listItem}>
            <div className={c.iconDiv}>
              <item.icon className={c.icon} />
            </div>
            <span className={c.text}>{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StickyNote;
