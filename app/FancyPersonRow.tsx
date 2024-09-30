import { Text, View } from "react-native";
import { nicestyle } from "./(tabs)";

type PersonInfoStuff =  { firstname: string, lastname: string };

export function FancyPersonRow({firstname, lastname} : PersonInfoStuff) {
  return(
    <View style={{ backgroundColor: "cyan", height: 80 }}>
      <Text style={{ fontSize: 25 }}>{ firstname }</Text>
      <Text style={nicestyle.nicetext}>{ lastname }</Text>
    </View>
  );
}