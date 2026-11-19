import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AppContext } from './AppContext';

export default function HomeTab() {
  const { name, darkMode, saving } = useContext(AppContext);

  const bg = darkMode ? '#121212' : '#ffffff';
  const fg = darkMode ? '#ffffff' : '#111111';

  return (
    <View style={[styles.container, { backgroundColor: bg }]}>
      {saving ? (
        <Text style={[styles.text, { color: fg }]}>Saving...</Text>
      ) : (
        <>
          <Text style={[styles.title, { color: fg }]}>Welcome, {name}!</Text>
          <Text style={[styles.text, { color: fg }]}>
            Current theme: {darkMode ? 'Dark' : 'Light'}
          </Text>
          <Text style={[styles.hint, { color: fg }]}>
            Go to the Settings tab to change your name or theme.
          </Text>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 26, fontWeight: 'bold', marginBottom: 10 },
  text: { fontSize: 18, marginBottom: 10 },
  hint: { fontSize: 14, opacity: 0.7, textAlign: 'center' },
});