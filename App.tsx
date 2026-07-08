import React, { useState } from 'react';
import { StyleSheet, View, Platform, ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

// Hide Metro Fast Refresh indicator overlay on web
if (Platform.OS === 'web' && typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    .__expo_fast_refresh {
      display: none !important;
    }
  `;
  document.head.appendChild(style);
}

import { HomeScreen } from './src/screens/HomeScreen';
import { DashboardScreen } from './src/screens/DashboardScreen';
import { CharacterCreationScreen } from './src/screens/CharacterCreationScreen';
import { ThemeProvider } from './src/context/ThemeContext';
import { AdventureProvider } from './src/context/AdventureContext';
import { AdventureLobbyScreen } from './src/screens/AdventureLobbyScreen';
import { MasterDashboardScreen } from './src/screens/MasterDashboardScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<'home' | 'dashboard' | 'create' | 'adventure-lobby' | 'master-dashboard'>('home');
  const [selectedCharacterId, setSelectedCharacterId] = useState<string | null>(null);

  const [fontsLoaded, fontError] = useFonts({
    ionicons: require('./assets/Fonts/Ionicons.ttf'),
    Ionicons: require('./assets/Fonts/Ionicons.ttf'),
  });

  if (fontError) {
    console.warn("Font loading error:", fontError);
  }

  if (!fontsLoaded && !fontError) {
    return (
      <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <ActivityIndicator size="large" color="#60A5FA" />
      </View>
    );
  }

  const handleSelectCharacter = (id: string) => {
    setSelectedCharacterId(id);
    setCurrentScreen('dashboard');
  };

  const handleBackToHome = () => {
    setCurrentScreen('home');
    setSelectedCharacterId(null);
  };

  return (
    <ThemeProvider>
      <AdventureProvider>
        <View style={styles.container}>
          <StatusBar style="light" />
          {currentScreen === 'home' ? (
            <HomeScreen 
              onSelectCharacter={handleSelectCharacter} 
              onCreateCharacter={() => setCurrentScreen('create')}
              onNavigateToAdventure={() => setCurrentScreen('adventure-lobby')}
            />
          ) : currentScreen === 'create' ? (
            <CharacterCreationScreen 
              onBack={handleBackToHome} 
              onSuccess={handleBackToHome} 
            />
          ) : currentScreen === 'adventure-lobby' ? (
            <AdventureLobbyScreen
              onBack={handleBackToHome}
              onNavigateToMaster={() => setCurrentScreen('master-dashboard')}
              onNavigateToDashboard={(charId) => {
                setSelectedCharacterId(charId);
                setCurrentScreen('dashboard');
              }}
            />
          ) : currentScreen === 'master-dashboard' ? (
            <MasterDashboardScreen
              onBack={handleBackToHome}
            />
          ) : (
            <DashboardScreen characterId={selectedCharacterId!} onBack={handleBackToHome} />
          )}
        </View>
      </AdventureProvider>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A',
  },
});
