import React, {ReactElement} from 'react';
import MaskedView from '@react-native-masked-view/masked-view';
import LinearGradient from 'react-native-linear-gradient';
import THEME_COLOR from '../styles/theme-color';

interface Props {
  component: ReactElement;
}

const GradientComponent = ({component}: Props) => {
  return (
    <MaskedView maskElement={component}>
      <LinearGradient
        colors={[THEME_COLOR.Pink, THEME_COLOR.Purple]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        {React.cloneElement(component, {
          style: [component.props.style, {opacity: 0}],
        })}
      </LinearGradient>
    </MaskedView>
  );
};

export default GradientComponent;
