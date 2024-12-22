import { library } from '@fortawesome/fontawesome-svg-core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faApple,
  faGoogle,
  faFacebook,
  faGithub,
  faDiscord,
  faYoutube,
  faFigma,
  faMicrosoft,
  faSquareReddit,
  faMendeley,
  faCcVisa,
  faCcAmazonPay
} from '@fortawesome/free-brands-svg-icons';

library.add([
  faApple,
  faGoogle,
  faFacebook,
  faGithub,
  faDiscord,
  faYoutube,
  faFigma,
  faMicrosoft,
  faSquareReddit,
  faMendeley,
  faCcAmazonPay
]);

export const IconsMapper: { [name: string]: IconDefinition } = {
  Apple: faApple,
  Google: faGoogle,
  Facebook: faFacebook,
  Github: faGithub,
  Discord: faDiscord,
  Youtube: faYoutube,
  Figma: faFigma,
  Microsoft: faMicrosoft,
  Reddit: faSquareReddit,
  Mendeley: faMendeley,
  Amazon: faCcAmazonPay,
  Visa: faCcVisa
};

export const getIconDefinitionByBrand = (iconName: string): IconDefinition => {
  return IconsMapper[iconName] || IconsMapper['Visa'];
};
