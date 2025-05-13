import {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';

import DashboardTopCard from '@/components/DashboardTopCard';
import CategoryCard from '@/components/CategoryCard';

const Dashboard = () => {
  const [categories, setCategories] = useState([
    'All',
    'Food',
    'Cloths',
    'Electronics',
    'Books',
  ]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        {/* TOP CARD - FEATURED ITEM */}
        <ScrollView horizontal>
          <DashboardTopCard />
        </ScrollView>

        {/* CATEGORIES */}
        <View style={styles.categoryContainer}>
          {categories.map((category, index) => (
            <CategoryCard key={index} totalBoxes={categories.length} index={index} />
          ))}
        </View>

        {/* PRODUCT CARDS */}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  categoryContainer: {
    position: 'relative',
    top: -50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    height: 100
  }
});

export default Dashboard;
