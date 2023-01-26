import styles from "./index.module.scss";
import "./animations.scss";
import { developers } from "api/developers";
import { Developer } from "types/entities";
import { Developer as DeveloperIMG } from "utils/SVG";
import { useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";
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
  isLeftCard: boolean;
};

const Card: React.FC<PropsTypeCard> = ({
  developer,
  hovered,
  setHovered,
  isLeftCard,
}) => {
  const nodeRef = useRef(null);
  const infoBlockRef = useRef<HTMLDivElement>(null);
  const className = isLeftCard ? "developerRightCard" : "developerLeftCard";
  const infoBlockHeight = hovered
    ? 0
    : infoBlockRef.current
    ? infoBlockRef.current.scrollHeight
    : "auto";
  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={hovered}
      timeout={700}
      unmountOnExit={false}
      classNames={className}
    >
      <div
        ref={nodeRef}
        className={classNames(styles.card)}
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
    </CSSTransition>
  );
};
const Menu: React.FC<PropsTypeMenu> = ({ developer, hovered, isLeftCard }) => {
  const nodeRef = useRef(null);
  const className = isLeftCard
    ? "developerCard_LeftMenu "
    : "developerCard_RightMenu";
  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={hovered}
      timeout={700}
      unmountOnExit={false}
      classNames={"developerCard_menu"}
    >
      <div ref={nodeRef} className={"developerCard_menu " + className}>
        {/* <div className={classNames([styles.menu, { [styles.open]: hovered }])}> */}
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
    </CSSTransition>
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
      <Menu developer={developer} hovered={hovered} isLeftCard={isLeftCard} />
    </div>
  );
};

const DeveloperCards: React.FC = () => {
  return (
    <div className={styles.developers}>
      {developers.map((developer, i) => (
        <DeveloperCard key={developer.id} developer={developer} index={i} />
      ))}
    </div>
  );
};

export default DeveloperCards;
