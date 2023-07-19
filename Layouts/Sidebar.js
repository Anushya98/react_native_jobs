import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Sidebar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Sidebar Symbol */}
      <View style={styles.sidebarSymbol}>
        <TouchableOpacity onPress={() => navigation.closeDrawer()}>
          <Text style={styles.sidebarButton}>☰</Text>
        </TouchableOpacity>
      </View>

      {/* Sidebar Content */}
      <View style={styles.sidebarContent}>
        {/* Add your sidebar items here */}
        <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
          <Text style={styles.sidebarItem}>Dashboard</Text>
        </TouchableOpacity>
        {/* Add other sidebar items here */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    paddingTop: 50,
  },
  sidebarSymbol: {
    alignItems: 'flex-end',
    paddingRight: 15,
  },
  sidebarButton: {
    fontSize: 24,
    color: 'black',
  },
  sidebarContent: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  sidebarItem: {
    marginBottom: 20,
  },
});

export default Sidebar;