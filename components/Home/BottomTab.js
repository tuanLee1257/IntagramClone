import React, {useState} from 'react';
import {
  Image,
  SafeAreaView,
  TouchableOpacity,
  View,
  StyleSheet,
  Text,
} from 'react-native';
import {Divider} from 'react-native-elements';

function BottomTab({icons}) {
  const [activeTab, setActiveTab] = useState('Home');
  const Icon = ({icon}) => (
    <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
      <Image
        source={activeTab === icon.name ? icon.inactive : icon.active}
        style={[
          styles.icon,
          icon.name == 'Profile' ? styles.profile(activeTab) : null,
        ]}
      />
    </TouchableOpacity>
  );
  return (
    <View>
      <Divider
        width={1}
        orientation="horizontal"
        style={{backgroundColor: '#C1C1C1'}}
      />
      <View style={styles.container}>
        {icons.map((icon, index) => (
          <Icon icon={icon} key={index} />
        ))}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 50,
    paddingTop: 10,
  },
  icon: {
    height: 32,
    width: 32,
  },
  profile: (activeTab = '') => ({
    borderRadius: 50,
    borderColor: '#ff8501',
    borderWidth: activeTab == 'Profile' ? 1 : 0,
  }),
});

export default BottomTab;
