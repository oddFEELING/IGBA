//--------------------------------------->
//-->  data for footer section
//--------------------------------------->

//-->  import icons
import Google from '../../assets/images/icons/footer-google-icon.svg';
import Twitter from '../../assets/images/icons/footer-twitter-icon.svg';
import Linkedin from '../../assets/images/icons/footer-linkedin-icon.svg';
import Facebook from '../../assets/images/icons/footer-facebook-icon.svg';

//-->  links in the company section
const CompanyLinks = [
  {
    key: `0`,
    text: `About IGBA`,
    link: `/`,
  },
  {
    key: `1`,
    text: `Contact`,
    link: `/`,
  },
  {
    key: `2`,
    text: `Help and FAQ`,
    link: `/`,
  },
  {
    key: `3`,
    text: `Whats next?`,
    link: `/`,
  },
];

//-->  data for social media handles
const ConnectData = [
  {
    key: `0`,
    icon: `${Google}`,
    message: `Subscribe for Newsletter`,
  },
  {
    key: `1`,
    icon: `${Twitter}`,
    message: `Follow us on Twitter`,
  },
  {
    key: `2`,
    icon: `${Linkedin}`,
    message: `Connect with us on Linkedin`,
  },
  {
    key: `3`,
    icon: `${Facebook}`,
    message: `Like us on Facebook`,
  },
];

//-->  newsletter message
const NewsMsg = ``;

//-->   export all data
export { CompanyLinks, ConnectData, NewsMsg };
