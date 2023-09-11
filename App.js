import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Search from "./Search";
import { Appbar, PaperProvider } from "react-native-paper";

export default function App() {
  return (
    <PaperProvider>
      <View>
        <StatusBar barStyle="dark-content" backgroundColor="white" />
        <Appbar.Header>
          <Appbar.Content title="Search App" />
          <Appbar.Action icon="dots-vertical" />
        </Appbar.Header>
      </View>
      <View style={styles.container}>
        <Search />
        <StatusBar style="auto" />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccc",
    padding: 20,
  },
});
