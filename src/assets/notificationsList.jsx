import {
  uniqueNamesGenerator,
  adjectives,
  colors,
  names,
} from "unique-names-generator";

const generateNumber = () => {
  const randomUsersNumber = Math.floor(Math.random() * (25 - 3 + 1)) + 3;
  return randomUsersNumber;
};
const generateName = () => {
  const shortName = uniqueNamesGenerator({
    dictionaries: [names, adjectives, colors],
    length: 2,
  });
  return shortName.toLowerCase();
};

const myComments = [
  "non si può perdere una partita così, c'è da vergognarsi",
  "grande! finalmente un'innovazione e che cavolo",
  "grande bomber, come stai?",
  "ma stai zitto, smettila",
  "lascia stare, non capisci",
];

const getNotifications = () => {
  return [
    {
      text: (
        <span>
          <span className="font-bold">{generateName()}</span>,{" "}
          <span className="font-bold">{generateName()}</span> e altri{" "}
          {generateNumber()} piace il tuo commento {myComments[0]}
        </span>
      ),
      picturesDisplayed: 2,
      timeStamp: "15m",
      isLike: true,
    },
    {
      text: (
        <span>
          <span className="font-bold">{generateName()}</span>,{" "}
          <span className="font-bold">{generateName()}</span> e altri{" "}
          {generateNumber()} piace il tuo commento {myComments[1]}
        </span>
      ),
      picturesDisplayed: 2,
      timeStamp: "15h",
      isLike: true,
    },
    {
      text: (
        <span>
          <span className="font-bold">{generateName()}</span> ha risposto al tuo
          commento {myComments[2]} sul post di{" "}
          <span className="font-bold">{generateName()}</span>: ciao Nico! tutto
          bene!
        </span>
      ),
      picturesDisplayed: 1,
      timeStamp: "20h",
      isLike: false,
    },
    {
      text: (
        <span>
          <span className="font-bold">{generateName()}</span> ha messo mi piace
          al reel di <span className="font-bold">{generateName()}</span> che hai
          repostato
        </span>
      ),
      picturesDisplayed: 1,
      timeStamp: "1g",
      isLike: true,
    },
    {
      text: (
        <span>
          <span className="font-bold">{generateName()}</span>,{" "}
          <span className="font-bold">{generateName()}</span> e altri{" "}
          {generateNumber()} piace il tuo commento: {myComments[3]}
        </span>
      ),
      picturesDisplayed: 2,
      timeStamp: "2g",
      isLike: true,
    },
    {
      text: (
        <span>
          <span className="font-bold">{generateName()}</span> ha risposto al tuo
          commento {myComments[4]} sul post di{" "}
          <span className="font-bold">{generateName()}</span>: concordo
          pienamente
        </span>
      ),
      picturesDisplayed: 1,
      timeStamp: "2g",
      isLike: false,
    },
    {
      text: (
        <span>
          <span className="font-bold">{generateName()}</span>,{" "}
          <span className="font-bold">{generateName()}</span> e altri{" "}
          {generateNumber()} piace il tuo reel
        </span>
      ),
      picturesDisplayed: 2,
      timeStamp: "3g",
      isLike: true,
    },
    {
      text: (
        <span>
          <span className="font-bold">{generateName()}</span> ha commentato il
          tuo post: bellissimo!
        </span>
      ),
      picturesDisplayed: 1,
      timeStamp: "4g",
      isLike: false,
    },
    {
      text: (
        <span>
          <span className="font-bold">{generateName()}</span> ha menzionato te
          in un commento
        </span>
      ),
      picturesDisplayed: 1,
      timeStamp: "5g",
      isLike: false,
    },
    {
      text: (
        <span>
          <span className="font-bold">{generateName()}</span> e{" "}
          <span className="font-bold">{generateName()}</span> piace la tua foto
        </span>
      ),
      picturesDisplayed: 2,
      timeStamp: "6g",
      isLike: true,
    },
    {
      text: (
        <span>
          <span className="font-bold">{generateName()}</span> ha condiviso il
          tuo post
        </span>
      ),
      picturesDisplayed: 1,
      timeStamp: "7g",
      isLike: true,
    },
  ];
};

export default getNotifications;
