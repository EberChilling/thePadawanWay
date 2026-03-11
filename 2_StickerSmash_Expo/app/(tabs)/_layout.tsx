import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons'; // Library used to add icons

export default function TabLayout(){
    return (
        // Activate a yellow color in the bottom tabs to know in which tab you are possitioned
        <Tabs screenOptions={{ tabBarActiveTintColor: '#ffd33d'}}> 

            <Tabs.Screen 
            name="index" 
            options={{
                title: 'Home',
                tabBarIcon: ({color,focused}) => (<Ionicons name={focused? 'home-sharp' : 'home-outline'} color={color} size={24} />),
                }} 
            />

            
            <Tabs.Screen 
                name="about" 
                options={{
                    title: 'About', 
                    tabBarIcon: ({color,focused}) => (<Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size ={24} />),
                }} 
            
            />

        </Tabs>
    );
}