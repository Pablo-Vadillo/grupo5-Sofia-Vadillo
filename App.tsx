import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, Image, Switch, TouchableOpacity } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

type Profile = {
  name: string;
  image: any;
  about: string;
  likes: string[];
  github: string;
  theme: {
    backgroundColor: string;
    textColor: string;
  };
};

type Profiles = {
  [key: string]: Profile;
};

const profiles: Profiles = {
  persona1: {
    name: "PABLO",
    image: require('./assets/Pabloimage.png'),
    about: "Soy Pablo Vadillo Núñez, me gustan el desarrollo y estoy en proceso de aprender aun más",
    likes: ["Desarrollo Web", "Videojuegos", "Música"],
    github: "https://github.com/Pablo-Vadillo",
    theme: {
      backgroundColor: 'white',
      textColor: 'black',
    },
  },
  persona2: {
    name: "SOFIA",
    image: require('./assets/Sofiaimage.jpg'),
    about: "Soy Sofia, me gustan las ratas y estoy en proceso de tener más",
    likes: ["Ratas", "Arte", "Literatura"],
    github: "https://github.com/Sofiapglez",
    theme: {
      backgroundColor: 'white',
      textColor: 'black',
    },
  },
};

export default function PortfolioApp() {
  const [selectedProfileKey, setSelectedProfileKey] = useState<keyof Profiles>('persona1');
  const [darkMode, setDarkMode] = useState(false);
  const [showLikes, setShowLikes] = useState(false);

  const profile = profiles[selectedProfileKey];
  const theme = darkMode ? { backgroundColor: 'black', textColor: 'white' } : profile.theme;

  return (
  
    <View style={[styles.mainContainer, {backgroundColor: theme.backgroundColor}]}>
      <View style={styles.headerContainer}>
        <Text style={[styles.titleText, {color: theme.textColor}]}>Mi Portafolio</Text>
        <View style={styles.navigationContainer}>
          <Button
            onPress={() => setSelectedProfileKey('persona1')}
            title="Pablo"
            color="gray"
          />

          <Button  
            onPress={() => setSelectedProfileKey('persona2')}
            title="Sofia"
            color="gray"
          />

          <Switch
            onValueChange={() => setDarkMode(prev => !prev)}
            value={darkMode}
          />
        </View>
      </View>

      <View style={[styles.cardContainerStyle, { backgroundColor: darkMode ? 'black' : '#dbdbdb' }]}>
        <View style={styles.profileHeader}>
          <Image style={styles.profileImage} source={profile.image} />
          <Text style={[styles.profileText, {color: theme.textColor}]}>{profile.name}</Text>
        </View>
        <Text style={[styles.profileAbout, {color: theme.textColor}]}>{profile.about}</Text>

        <TouchableOpacity
          onPress={() => setShowLikes(!showLikes)}
          style={styles.likesButton}
        >
          <Text style={[styles.likesButtonText, {color: theme.textColor}]}>Ver Gustos</Text>
        </TouchableOpacity>

        {showLikes && (
          <View style={styles.likesContainer}>
            {profile.likes.map((like, index) => (
              <Text key={index} style={[styles.likeText, {color: theme.textColor}]}>
                {like}
              </Text>
            ))}
          </View>
        )}

        <View style={styles.qrContainer}>
          <QRCode value={profile.github} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContainer: {
    height: '15%',
    paddingTop: 50,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
  },
  navigationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    height: 100,
    width: 100,
    borderRadius: 50,
    marginRight: 20,
  },
  profileText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  profileAbout: {
    textAlign: 'center',
    marginBottom: 20,
  },
  likesButton: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#b8b4b7',
    borderRadius: 5,
  },
  likesButtonText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  likesContainer: {
    marginTop: 10,
  },
  likeText: {
    textAlign: 'center',
  },
  qrContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,

  },
  cardContainerStyle: {
    width: '80%',
    borderWidth: 2,
    borderColor: 'gray',
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});