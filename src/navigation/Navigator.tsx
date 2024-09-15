import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeViewModel from "../screens/home/Home.viewModel";
import DetailViewModel from "../screens/detail/Detail.viewModel";
import { Pokemon } from "../model/Pokemon";

export type RootStackParamList = {
    Home: {}
    Detail: { pokemon: Pokemon };
};

export enum NameScreens {
    Home = 'Home',
    Detail = 'Detail',
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Navigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={NameScreens.Home} options={{ title: "Listagem" }} component={HomeViewModel} />
                <Stack.Screen name={NameScreens.Detail} options={{ title: "Detalhes" }} component={DetailViewModel} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}