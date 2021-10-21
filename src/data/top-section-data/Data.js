//--------------------------------------->
//-->  Data fot the top card
//--------------------------------------->
//-->   import icons to be used
import MapIcon from '../../assets/svg/card-map-icon.svg';
import LayerIcon from '../../assets/svg/card-layer-icon.svg';
import InsightIcon from '../../assets/svg/card-insight-icon.svg';

const Title = 'Mapping development with ease';

const Card_Data = [
  {
    key: `0`,
    icon: `${MapIcon}`,
    title: `Robust Maps`,
    content: `View several layers of data on a single map with distinct colourinng and nodes.`,
  },
  {
    key: `1`,
    icon: `${LayerIcon}`,
    title: `Layer Your Data`,
    content: `Input preset data files from ArcGis or upload a local data file of your choice.`,
  },
  {
    key: `2`,
    icon: `${InsightIcon}`,
    title: `Draw Insights`,
    content: `Functional chart widget that shows quantitative attributes from an operational layer.`,
  },
];

//-->  export data
export default Card_Data;
export { Title };
