import React, { Component, useEffect, useState } from "react";
import { View, Text, FlatList, TextInput, StyleSheet } from "react-native";
const data = [
  {
    id: 1,
    names: "Ingabire christine",
    age: 27,
    gender: "Female",
    role: "Software engineer",
  },
  {
    id: 2,
    names: "Urimubenshi Daniel",
    age: 27,
    gender: "male",
    role: "project manager",
  },
];
const Search = () => {
  const [searchItem, setSearchItem] = useState("");
  const [employees, setEmployees] = useState(data);
  useEffect(() => {
    setEmployees(
      data.filter((employee) =>
        employee.names.toLowerCase().includes(searchItem.toLocaleLowerCase())
      )
    );
  }, [searchItem]);
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search....."
        style={styles.searchInput}
        value={searchItem}
        onChangeText={(text) => setSearchItem(text)}
      />
      <FlatList
        data={employees}
        style={styles.flatList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text style={styles.text}>Names {item.names}</Text>
            <Text style={styles.text}>Age {item.names}</Text>
            <Text style={styles.text}>Gender: {item.gender}</Text>
            <Text style={styles.text}>Role: {item.role}</Text>
          </View>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 100,
  },
  searchInput: {
    borderBottomWidth: 2,
    paddingLeft: 10,
    borderBottomColor: "#009688",
    backgroundColor: "#FFFFFF",
    height: 40,
  },
  listItem: {
    backgroundColor: "#666",
    padding: 10,
    marginBottom: 5,
  },
  text: {
    color: "#fff",
    fontSize: 15,
  },
  flatList: {
    marginTop: 10,
  },
});

export default Search;
