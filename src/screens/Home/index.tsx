import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { Header } from '../../components/Header';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 
import { Navbar } from '../../components/Navbar/index.';

export const Home = () => {
  
  return (
    <View style={styles.body}>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <Navbar/>
        <Header/>
        <ScrollView
          style={styles.scrollScreen}
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.title}>Following</Text>
          <View style={styles.boxContent}>
            <Text style={styles.subtitle}>
              Followed Categories
            </Text>
              <ScrollView
                style={styles.scrollFollowed}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
              >
                <TouchableOpacity activeOpacity={0.7}>
                  <View style={styles.followedCard}>
                    <View>
                      <Image
                        style={styles.followedImage}
                        source={{uri: 'https://static-cdn.jtvnw.net/ttv-boxart/32399_IGDB-272x380.jpg'}}
                      />
                      <Text 
                        style={styles.followedText}
                        numberOfLines={1}
                      >Counter-Strike: Global Ofensive</Text>
                      <View style={styles.countBox}>
                        <MaterialIcons
                          name='circle'
                          color={'red'}
                        />
                        <Text style={styles.countText}>945.1K</Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7}>
                  <View style={styles.followedCard}>
                    <View>
                      <Image
                        style={styles.followedImage}
                        source={{uri: 'https://static-cdn.jtvnw.net/ttv-boxart/Fortnite.jpg'}}
                      />
                      <Text 
                        style={styles.followedText}
                        numberOfLines={1}
                      >Fortnite</Text>
                      <View style={styles.countBox}>
                        <MaterialIcons
                          name='circle'
                          color={'red'}
                        />
                        <Text style={styles.countText}>41.3K</Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7}>
                  <View style={styles.followedCard}>
                    <View>
                      <Image
                        style={styles.followedImage}
                        source={{uri: 'https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg'}}
                      />
                      <Text 
                        style={styles.followedText}
                        numberOfLines={1}
                      >League of Legends</Text>
                      <View style={styles.countBox}>
                        <MaterialIcons
                          name='circle'
                          color={'red'}
                        />
                        <Text style={styles.countText}>118.8K</Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7}>
                  <View style={styles.followedCard}>
                    <View>
                      <Image
                        style={styles.followedImage}
                        source={{uri: 'https://static-cdn.jtvnw.net/ttv-boxart/493057-272x380.jpg'}}
                      />
                      <Text 
                        style={styles.followedText}
                        numberOfLines={1}
                      >PUBG: BATTLEGROUNDS</Text>
                      <View style={styles.countBox}>
                        <MaterialIcons
                          name='circle'
                          color={'red'}
                        />
                        <Text style={styles.countText}>5.7K</Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7}>
                  <View style={styles.followedCard}>
                    <View>
                      <Image
                        style={styles.followedImage}
                        source={{uri: 'https://static-cdn.jtvnw.net/ttv-boxart/32982_IGDB-272x380.jpg'}}
                      />
                      <Text 
                        style={styles.followedText}
                        numberOfLines={1}
                      >Grand Theft Auto: Five</Text>
                      <View style={styles.countBox}>
                        <MaterialIcons
                          name='circle'
                          color={'red'}
                        />
                        <Text style={styles.countText}>24.5K</Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7}>
                  <View style={styles.followedCard}>
                    <View>
                      <Image
                        style={styles.followedImage}
                        source={{uri: 'https://static-cdn.jtvnw.net/ttv-boxart/493597_IGDB-188x250.jpg'}}
                      />
                      <Text 
                        style={styles.followedText}
                        numberOfLines={1}
                      >New World</Text>
                      <View style={styles.countBox}>
                        <MaterialIcons
                          name='circle'
                          color={'red'}
                        />
                        <Text style={styles.countText}>39K</Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              </ScrollView>
          </View>
          <View style={styles.boxContent}>
            <Text
              style={styles.subtitle} 
              numberOfLines={1}
              >Channels Recommended For You</Text>
              <TouchableOpacity activeOpacity={0.7}>
                <View style={styles.channelsRecCard}>
                  <View>
                    <Image
                      style={styles.videoThumb}
                      source={{uri: 'https://technewsbrasil.com.br/wp-content/uploads/2021/10/gow3.png'}}
                    />
                    <View style={styles.countBoxLive}>
                      <MaterialIcons
                        name='circle'
                        color={'red'}
                      />
                      <Text style={styles.countTextLive}>45.1K</Text>
                    </View>
                  </View>
                  <View style={styles.liveInfo}>
                    <View style={styles.alignNameIcon}>
                      <Image 
                        style={styles.smallIcon}
                        source={{uri: 'https://static-cdn.jtvnw.net/jtv_user_pictures/d96bbd7a-26e5-4c5e-b6a5-149d708a973b-profile_image-70x70.png'}}
                      />
                      <Text 
                        style={styles.creatorName}
                      >
                        PaulinhoLOKObr
                      </Text>
                    </View>
                    <Text
                      numberOfLines={1}
                      style={styles.liveName}
                    >
                      ZERANDO SEM MORRER CONFIA - BACKSEAT/SPOILER = BAN
                    </Text>
                    <Text
                      numberOfLines={1}
                      style={styles.gameName}
                    >
                      God of War Ragnarök
                    </Text>
                    <Text
                      numberOfLines={1}
                      style={styles.liveLanguage}
                    >
                      Português
                    </Text>
                  </View>
                  <View>
                    <TouchableOpacity>
                    <Entypo 
                      name="dots-three-vertical"
                      size={18}
                      color="black"
                      style={styles.verticalDots}
                    />
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.7}>
                <View style={styles.channelsRecCard}>
                  <View>
                    <Image
                      style={styles.videoThumb}
                      source={{uri: 'https://i.ytimg.com/vi/keayVUwJy5A/hqdefault.jpg'}}
                    />
                     <View style={styles.countBoxLive}>
                      <MaterialIcons
                        name='circle'
                        color={'red'}
                      />
                      <Text style={styles.countTextLive}>13.5K</Text>
                    </View>
                  </View>
                  
                  <View style={styles.liveInfo}>
                    <View style={styles.alignNameIcon}>
                      <Image 
                        style={styles.smallIcon}
                        source={{uri: 'https://static-cdn.jtvnw.net/jtv_user_pictures/b99a08d2-29ab-4ff1-99eb-01246d41efb7-profile_image-70x70.png'}}
                      />
                      <Text 
                        style={styles.creatorName}
                      >
                        tioorochitwitch
                      </Text>
                    </View>
                    <Text
                      numberOfLines={1}
                      style={styles.liveName}
                    >
                      live ruim pq to com depressao
                    </Text>
                    <Text
                      numberOfLines={1}
                      style={styles.gameName}
                    >
                      Just Chatting
                    </Text>
                    <Text
                      numberOfLines={1}
                      style={styles.liveLanguage}
                    >
                      Português
                    </Text>
                  </View>
                  <View>
                    <TouchableOpacity>
                    <Entypo 
                      name="dots-three-vertical"
                      size={18}
                      color="black"
                      style={styles.verticalDots}
                    />
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.7}>
                <View style={styles.channelsRecCard}>
                  <View>
                    <Image
                      style={styles.videoThumb}
                      source={{uri: 'https://img-cdn.hltv.org/gallerypicture/pMMrEtx-Qnq2-mhfZeZSti.jpg?ixlib=java-2.1.0&w=1200&s=897c4487777efd5c63e036b6847ce65e'}}
                    />
                     <View style={styles.countBoxLive}>
                      <MaterialIcons
                        name='circle'
                        color={'red'}
                      />
                      <Text style={styles.countTextLive}>23.5K</Text>
                    </View>
                  </View>
                  <View style={styles.liveInfo}>
                    <View style={styles.alignNameIcon}>
                      <Image 
                        style={styles.smallIcon}
                        source={{uri: 'https://static-cdn.jtvnw.net/jtv_user_pictures/f4b12683-57ff-4b57-926a-67512b43a7ff-profile_image-50x50.png'}}
                      />
                      <Text 
                        style={styles.creatorName}
                      >
                        Gaules
                      </Text>
                    </View>
                    <Text
                      numberOfLines={1}
                      style={styles.liveName}
                    >
                      Rerun: IEM Rio Major 2022 - !vote - Siga @gaules nas redes sociais
                    </Text>
                    <Text
                      numberOfLines={1}
                      style={styles.gameName}
                    >
                      Counter-Strike: Global Offensive
                    </Text>
                    <Text
                      numberOfLines={1}
                      style={styles.liveLanguage}
                    >
                      Português
                    </Text>
                  </View>
                  <View>
                    <TouchableOpacity>
                    <Entypo 
                      name="dots-three-vertical"
                      size={18}
                      color="black"
                      style={styles.verticalDots}
                    />
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.7}>
                <View style={styles.channelsRecCard}>
                  <View>
                    <Image
                      style={styles.videoThumb}
                      source={{uri: 'https://i.pinimg.com/originals/3d/65/30/3d6530cc3b1dc5700bdb979bc36c8ef4.jpg'}}
                    />
                     <View style={styles.countBoxLive}>
                      <MaterialIcons
                        name='circle'
                        color={'red'}
                      />
                      <Text style={styles.countTextLive}>8.7K</Text>
                    </View>
                  </View>
                  <View style={styles.liveInfo}>
                    <View style={styles.alignNameIcon}>
                      <Image 
                        style={styles.smallIcon}
                        source={{uri: 'https://static-cdn.jtvnw.net/jtv_user_pictures/044e146b-09ff-449d-b2a1-95a2358ac3a8-profile_image-50x50.png'}}
                      />
                      
                      <Text 
                        style={styles.creatorName}
                      >
                        jukes
                      </Text>
                    </View>
                    <Text
                      numberOfLines={1}
                      style={styles.liveName}
                    >
                      MEC STREAM DO JUKERA
                    </Text>
                    <Text
                      numberOfLines={1}
                      style={styles.gameName}
                    >
                      League of Legends
                    </Text>
                    <Text
                      numberOfLines={1}
                      style={styles.liveLanguage}
                    >
                      Português
                    </Text>
                  </View>
                  <View>
                    <TouchableOpacity>
                    <Entypo 
                      name="dots-three-vertical"
                      size={18}
                      color="black"
                      style={styles.verticalDots}
                    />
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
          </View>
          <View style={styles.boxContent}>
            <Text style={styles.subtitle}>
              Your Offline Channels
            </Text>
            <TouchableOpacity activeOpacity={0.5}>
              <View style={styles.favoriteBox}>
                <View style={styles.favoriteInfo}>
                  <Image
                    style={styles.favoriteIcon}
                    source={{uri: 'https://static-cdn.jtvnw.net/jtv_user_pictures/e0e33c68-f53d-4308-a780-62b1bfd09d17-profile_image-70x70.png'}}
                  />
                  <View>
                    <Text style={styles.favoriteName}>RatoBorrachudo</Text>
                    <Text style={styles.favoriteQuantity}>8 new videos</Text>
                  </View>
                </View>
                <MaterialIcons
                  name='circle'
                  color={'#c9c8d1'}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5}>
              <View style={styles.favoriteBox}>
                <View style={styles.favoriteInfo}>
                  <Image
                    style={styles.favoriteIcon}
                    source={{uri: 'https://static-cdn.jtvnw.net/jtv_user_pictures/7b68f6a2-1316-47c9-98e6-4413dad16837-profile_image-70x70.jpg'}}
                  />
                  <View>
                    <Text style={styles.favoriteName}>vitongemaplys</Text>
                    <Text style={styles.favoriteQuantity}>3 new videos</Text>
                  </View>
                </View>
                <MaterialIcons
                  name='circle'
                  color={'#c9c8d1'}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5}>
              <View style={styles.favoriteBox}>
                <View style={styles.favoriteInfo}>
                  <Image
                    style={styles.favoriteIcon}
                    source={{uri: 'https://static-cdn.jtvnw.net/jtv_user_pictures/e6473c34-32ea-4b52-be4c-38774f889c05-profile_image-150x150.png'}}
                  />
                  <View>
                    <Text style={styles.favoriteName}>RudyCaro</Text>
                    <Text style={styles.favoriteQuantity}>1 new videos</Text>
                  </View>
                </View>
                <MaterialIcons
                  name='circle'
                  color={'#c9c8d1'}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5}>
              <View style={styles.favoriteBox}>
                <View style={styles.favoriteInfo}>
                  <Image
                    style={styles.favoriteIcon}
                    source={{uri: 'https://static-cdn.jtvnw.net/jtv_user_pictures/97d9a674-2da7-4d91-a95d-0711cee887e9-profile_image-150x150.png'}}
                  />
                  <View>
                    <Text style={styles.favoriteName}>bbnogames</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.5}>
              <View style={styles.favoriteBox}>
                <View style={styles.favoriteInfo}>
                  <Image
                    style={styles.favoriteIcon}
                    source={{uri: 'https://static-cdn.jtvnw.net/jtv_user_pictures/f6f436db-7996-407b-b57e-cd5460f39dc0-profile_image-70x70.png'}}
                  />
                  <View>
                    <Text style={styles.favoriteName}>yungbuda7k</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
