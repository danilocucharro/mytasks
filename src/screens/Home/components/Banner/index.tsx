import { Image, View } from "react-native";

import { styles } from "./styles";

export function Banner() {
  return (
    <View style={styles.bannerContainer}>
      <Image source={require('../../../../../assets/Logo.png')}/>
    </View>
  )
}