//-------------------------------------------->
//-->  feature section card data
//-------------------------------------------->

//-->  image imports
import Layer from '../../assets/images/images/feature-layers.png';
import Base_Map from '../../assets/images/images/feature-base-map.png';
import Charts from '../../assets/images/images/feature-charts.png';
import Near_Me from '../../assets/images/images/feature-near-me.png';

const FeatData = [
  {
    key: `0`,
    image: `${Layer}`,
    title: `Multiple Layers`,
    content: `This platform allows for the viewing of different data on a single map layer without having to merge or exit the curent base map. With different graphical diplay settings the map can convey different data representations on different layers all at once.`,
    align: `right`,
  },
  {
    key: `1`,
    image: `${Base_Map}`,
    title: `Basemap Gallery`,
    content: `This widget allows for the changing of different basemap display and types such as imagery hybrid, mid-century, topography, open street, charted territory maps and so much more within a predefined gallery.`,
    align: `left`,
  },
  {
    key: `2`,
    image: `${Charts}`,
    title: `Charts`,
    content: `As a graphical representation of data, the chart widget displays  quantitativve attributes from  an operational layer. It enables users to identify personal patterns and trends in raw data`,
    align: `right`,
  },
  {
    key: `3`,
    image: `${Near_Me}`,
    title: `Near Me`,
    content: `Near me is a widget that allows you change that let’s you find features that are near a specified address. and these data features can also be viewd on different layers  `,
    align: `left`,
  },
];

export default FeatData;
