import { ImageBackground } from 'react-native';
import { styles } from './styles';
import backgroundImg from '../../assets/background.png';

interface Props {
    children: React.ReactNode;
}

export function Background({ children }: Props) {
  return (
    <ImageBackground
        source={backgroundImg} 
        style={styles.container}
        defaultSource={backgroundImg} //memoriza a imagem padrão, carrega mais rápido
    >
        {children}
    </ImageBackground>
  );
}