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
  price: number;
  action?: () => void;
};

const StickyNote: React.FC<StickyNoteProps> = ({
  title,
  subtitle,
  listItems,
  price,
  action,
}) => {
  return (
    <div className={c.wrapper}>
      <StickyNoteBack className={c.background} />
      <div className={c.titleWrapper}>
        <h4 className={c.title}>{title}</h4>
        <p className={c.subtitle}>{subtitle} </p>
      </div>
      <div className={c.listWrapper}>
        {listItems?.map((item, index) => (
          <div key={index} className={c.listItem}>
            <item.icon className={c.icon} />
            <span className={c.text}>{item.text}</span>
          </div>
        ))}
      </div>
      <div className={c.moreInfo}>
        <span className={c.price}>{price} €</span>
        {action && (
          <button className={c.actionButton} onClick={action}>
            Više informacija
          </button>
        )}
      </div>
    </div>
  );
};

export default StickyNote;
