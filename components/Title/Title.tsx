import React, {FC} from 'react';
import {Text} from 'react-native';
import style from './Styles';

interface TitleProps {
  title: string;
}
const Title: FC<TitleProps> = ({title}) => {
  return <Text style={style.title}>{title}</Text>;
};

export default Title;
