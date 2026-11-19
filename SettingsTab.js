import React, { useContext, useState } from 'react';
import { View, Text, TextInput, Switch, Button, StyleSheet } from 'react-native';
import { AppContext } from './AppContext';

export default function SettingsTab() {
  const { name, darkMode, saving, error, updateProfile } = useContext(AppContext);

  // Local draft values; only applied to global state when Save is pressed
  const [draftName, setDraftName] = useState(name);
  const [draftDark, setDraftDark] = useState(darkMode);

  const bg = darkMode ? '#121212' : '#ffffff';
  const fg = darkMode ? '#ffffff' : '#111111';

  return (
    <View style={[styles.container, { backgroundColor: bg }]}>
      <Text style={[styles.label, { color: fg }]}>Name</Text>
      <TextInput
        style={[styles.input, { color: fg, borderColor: fg }]}
        value={draftName}
        onChangeText={setDraftName}
        placeholder="Enter your name"
        placeholderTextColor="#888"
      />

      <View style={styles.row}>
        <Text style={[styles.label, { color: fg }]}>Dark Mode</Text>
        <Switch value={draftDark} onValueChange={setDraftDark} />
      </View>

      {error !== '' && <Text style={styles.error}>{error}</Text>}

      {saving ? (
        <Text style={[styles.saving, { color: fg }]}>Saving...</Text>
      ) : (
        <Button title="Save Changes" onPress={() => updateProfile(draftName, draftDark)} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  label: { fontSize: 18, marginBottom: 6 },
  input: { borderWidth: 1, borderRadius: 8, padding: 10, marginBottom: 20, fontSize: 16 },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  error: { color: 'red', marginBottom: 10 },
  saving: { fontSize: 18, textAlign: 'center' },
});