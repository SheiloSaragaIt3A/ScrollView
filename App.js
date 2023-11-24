import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

const scrollData = [
  {
    id: 1,
    fullname: 'Aninipot Joshua',
    place: 'Baang, Catigbian, Bohol',
  },
  {
    id: 2,
    fullname: 'Bale Lloyd',
    place: 'Baang, Catigbian, Bohol',
  },
  {
    id: 3,
    fullname: 'Bugnos Eric',
    place: 'Baang, Catigbian, Bohol',
  },
  {
    id: 4,
    fullname: 'Barogga Teflor',
    place: 'Baang, Catigbian, Boholl',
  },
  {
    id: 5,
    fullname: 'Cabudbud Jaylord',
    place: 'Bagtic, Catigbian, Bohol',
  },
  {
    id: 6,
    fullname: 'Digaum Ulygen ',
    place: 'Baang, Catigbian, Bohol',
  },
  {
    id: 7,
    fullname: 'Daguing Jess Warren',
    place: 'Liboron, Catigbian, Bohol',
  },
  {
    id: 8,
    fullname: 'Daguing Noryn',
    place: 'Liboron, Catigbian, Bohol',
  },
  {
    id: 9,
    fullname: 'Jagunos Mervin',
    place: 'Liboron, Catigbian, Bohol',
  },
  {
    id: 10,
    fullname: 'Gementiza Melvin',
    place: 'Liboron, Catigbian, Bohol',
  },
  {
    id: 11,
    fullname: 'Lauronal Jomar',
    place: 'Liboron, Catigbian, Bohol',
  },
  {
    id: 12,
    fullname: 'Luzon Mark Edward',
    place: 'Liboron, Catigbian, Bohol',
  },
  {
    id: 13,
    fullname: 'Languita Loren',
    place: 'Baang, Catigbian, Bohol',
  },
  {
    id: 14,
    fullname: 'Laolao Edzel',
    place: 'Baang, Catigbian, Bohol',
  },
  {
    id: 15,
    fullname: 'Laguros Angeline',
    place: 'Baang, Catigbian, Bohol',
  },
  {
    id: 16,
    fullname: 'Malano Dominick',
    place: 'Hhagbuaya, Catigbian, Bohol',
  },
  {
    id: 17,
    fullname: 'Oracion Kenneth Ivan',
    place: 'Baang, Catigbian, Bohol',
  },
  {
    id: 18,
    fullname: 'Prisiados Ronalyn',
    place: 'Ipo, Catigbian, Bohol',
  },
  {
    id: 19,
    fullname: 'Panganoron Michael',
    place: 'Baang, Catigbian, Bohol',
  },
  {
    id: 20,
    fullname: 'Saraga Sheilo',
    place: 'Baang, Catigbian, Bohol',
  },
  {
    id: 21,
    fullname: 'Salibay Jessa Mae',
    place: 'Baang, Catigbian, Bohol',
  },
  {
    id: 22,
    fullname: 'Senados Clara',
    place: 'Baang, Catigbian, Bohol',
  },
  {
    id: 23,
    fullname: 'Sab Liezel',
    place: 'Liboron, Catigbian, Bohol',
  },
  {
    id: 24,
    fullname: 'Salandron Joan',
    place: 'Baang, Catigbian, Bohol',
  },
  {
    id: 25,
    fullname: 'Teves Joshua',
    place: 'Baang, Catigbian, Bohol',
  },
  {
    id: 26,
    fullname: 'Usaraga Alden',
    place: 'Liboron, Catigbian, Bohol',
  },
  {
    id: 27,
    fullname: 'Samante Carmelito',
    place: 'Alegria, Catigbian, Bohol',
  },
  {
    id: 28,
    fullname: 'Inson Jeanne',
    place: 'Alegria, Catigbian, Bohol',
  },
  {
    id: 29,
    fullname: 'Ponte Jezel',
    place: 'Baang, Catigbian, Bohol',
  },
  {
    id: 30,
    fullname: 'Jandayan Jhysine',
    place: 'Baang, Catigbian, Bohol',
  },
  {
    id: 31,
    fullname: 'Patac Resty Jay',
    place: 'Baang, Catigbian, Bohol',
  },
  
]


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.dataTitle}>List of Guest</Text>
      <ScrollView style={styles.dataView}>
          {scrollData.map((item) => (
            <View key={item.id} style={styles.dataId}>
              <View style={styles.dataText}>
                <Text style={styles.fullname}>{item.fullname}</Text>
                <Text style={styles.place}>{item.place}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginLeft: 30,
    marginTop: 250,
  },
  dataTitle:{
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  dataView: {
    flex: 1,
  },
  dataId: {
    flexDirection: 'column',
  },
  fullname: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  place:{
    fontSize: 18,
    marginBottom: 5,
  }
});