import styles from "./index.module.scss";
import { developers } from "api/developers";
import { Developer } from "types/entities";
import { Developer as DeveloperIMG } from "utils/SVG";
import { useState, useRef } from "react";
import classNames from "classnames";
import Skills from "components/Skills";
type PropsType = {
  index: number;
  developer: Developer;
};
type PropsTypeCard = {
  isLeftCard: boolean;
  developer: Developer;
  hovered: boolean;
  setHovered: (hovered: boolean) => void;
};
type PropsTypeMenu = {
  developer: Developer;
  hovered: boolean;
};

const Card: React.FC<PropsTypeCard> = ({
  developer,
  hovered,
  setHovered,
  isLeftCard,
}) => {
  const infoBlockRef = useRef<HTMLDivElement>(null);
  const infoBlockHeight = hovered
    ? 0
    : infoBlockRef.current
    ? infoBlockRef.current.scrollHeight
    : "auto";
  return (
    <div
      className={classNames([styles.card, { [styles.leftCard]: isLeftCard }])}
      onMouseEnter={() => setHovered(true)}
    >
      <div className={styles.image}>
        {developer.img ? (
          <img src={developer.img} alt="avatar" />
        ) : (
          <DeveloperIMG />
        )}
      </div>
      <div
        ref={infoBlockRef}
        className={styles.info}
        style={{ height: infoBlockHeight }}
      >
        <p className={styles.name}>{developer.name}</p>
        <p className={styles.role}>{developer.role}</p>
      </div>
    </div>
  );
};
const Menu: React.FC<PropsTypeMenu> = ({ developer, hovered }) => {
  return (
    <div className={classNames([styles.menu, { [styles.open]: hovered }])}>
      <div className={styles.parent}>
        <div className={styles.info}>
          <p className={styles.name}>{developer.name}</p>
          <p className={styles.role}>{developer.role}</p>
          <p className={styles.short_description}>
            {developer.short_description}
          </p>
        </div>
        <Skills skills={developer.skills} className={styles.skills} />
      </div>
    </div>
  );
};
const DeveloperCard: React.FC<PropsType> = ({ developer, index }) => {
  const [hovered, setHovered] = useState(false);
  const isLeftCard = (index + 1) % 2 === 0;

  return (
    <div
      onMouseLeave={() => setHovered(false)}
      className={classNames([
        styles.container,
        { [styles.leftContainer]: isLeftCard },
        { [styles.hoveredContainer]: hovered },
      ])}
    >
      <Card
        isLeftCard={isLeftCard}
        developer={developer}
        hovered={hovered}
        setHovered={setHovered}
      />
      <Menu developer={developer} hovered={hovered} />
    </div>
  );
};

const DeveloperCards: React.FC = () => {
  return (
    <div className={styles.developers}>
      {developers.map((developer, i) => (
        <DeveloperCard developer={developer} index={i} />
      ))}
    </div>
  );
};

export default DeveloperCards;
