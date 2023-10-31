import { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

export default function PortfolioApp() {
  const [showProfile, setShowProfile] = useState(true);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.titleText}>Mi Portafolio</Text>
        <View style={styles.navigationContainer}>
          <Button
            onPress={() => setShowProfile(true)}
            title="Mi Info"
            color="gray"
          />
          <Button
            onPress={() => setShowProfile(false)}
            title="Mi Repo"
            color="gray"
          />
        </View>
      </View>

      {showProfile ?
        <View style={styles.profileContainer}>
          <View style={styles.profileHeader}>
            <Image style={styles.profileImage} source={require('./assets/SofyanAmrabat.jpg')} />
            <View style={styles.descriptionContainer}>
              <Text style={styles.descriptionTitle}>Sobre Mí</Text>
              <Text>Soy profesor y me gusta mi trabajo, aunque a veces hago ejercicios complicados para mis estudiantes.</Text>
            </View>
          </View>
          <Text style={styles.likesTitle}>Cosas que me gustan:</Text>
          <ScrollView style={styles.likesList}>
            <Text style={styles.likesItem}>Salir a pasear</Text>
            <Text style={styles.likesItem}>Salir a pasear</Text>
            <Text style={styles.likesItem}>Senderismo</Text>
            <Text style={styles.likesItem}>Ir a la playa</Text>
            <Text style={styles.likesItem}>Domingos de misa</Text>
            <Text style={styles.likesItem}>Tocar la guitarra</Text>
            <Text style={styles.likesItem}>Disfrutar de la naturaleza en días lluviosos</Text>
            <Text style={styles.likesItem}>Viajar y explorar nuevos lugares</Text>
            <Text style={styles.likesItem}>Escuchar música variada</Text>
            <Text style={styles.likesItem}>Ver anime</Text>
            <Text style={styles.likesItem}>Disfrutar de una ducha relajante</Text>
            <Text style={styles.likesItem}>Jugar videojuegos</Text>
            <Text style={styles.likesItem}>Cenas románticas</Text>
            <Text style={styles.likesItem}>Aprender cosas nuevas</Text>
            <Text style={styles.likesItem}>Practicar deportes</Text>
            <Text style={styles.likesItem}>Leer libros interesantes</Text>
            <Text style={styles.likesItem}>Cocinar platos deliciosos</Text>
            <Text style={styles.likesItem}>Pasar tiempo con amigos y familia</Text>
            <Text style={styles.likesItem}>Meditación y mindfulness</Text>
            <Text style={styles.likesItem}>Fotografía</Text>
            <Text style={styles.likesItem}>Arte y diseño creativo</Text>            
          </ScrollView>
        </View>
        :
        <View style={styles.profileContainer}>
          <View style={styles.qrContainer}>
            <QRCode value="https://github.com/adhernea" />
          </View>
        </View>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContainer: {
    height: '15%',
    paddingTop: 50,
    width: '100%',
  },
  titleText: {
    backgroundColor: 'gray',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
  },
  navigationContainer: {
    flexDirection: 'row',
    backgroundColor: 'darkgray',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  profileContainer: {
    width: '100%',
    borderWidth: 2,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '85%'
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  profileImage: {
    height: 90,
    width: 90,
    borderRadius: 45
  },
  descriptionContainer: {
    margin: 10,
    backgroundColor: 'lightgray',
    padding: 10,
    borderRadius: 10,
    width: '70%'
  },
  descriptionTitle: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 20
  },
  likesTitle: {
    color: 'black',
    fontWeight: "900",
    fontSize: 20,
    textAlign: 'center',
  },
  likesList: {
    padding: 10
  },
  likesItem: {
    borderColor: 'black',
    borderWidth: 1,
    borderStyle: 'dashed',
    padding: 20,
    color: 'darkred',
    textAlign: 'center',
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 16,
    backgroundColor: 'silver'
  },
  qrContainer: {
    justifyContent: 'center',
    borderWidth: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center'
  },
});
