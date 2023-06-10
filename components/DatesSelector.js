import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Platform,
  TouchableOpacity,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

function DatesSelector({ fromDate, setFromDate, toDate, setToDate }) {
  const [showPicker, setShowPicker] = useState(false);
  const [pickerType, setPickerType] = useState("from"); // "from" or "to"
  const minimumDate = new Date("2023-05-11");

  function showDateTimePicker(type) {
    setPickerType(type);
    setShowPicker(true);
  }

  function hideDateTimePicker() {
    setShowPicker(false);
  }

  function adjustDate(selectedDate) {
    return selectedDate instanceof Date
      ? new Date(
          selectedDate.getTime() - selectedDate.getTimezoneOffset() * 60000
        )
      : null;
  }

  function handleDateChange(event, selectedDate) {
    if (pickerType === "from") {
      handleFromChange(event, selectedDate);
    } else {
      handleToChange(event, selectedDate);
    }

    hideDateTimePicker();
  }

  function handleFromChange(event, selectedDate) {
    const adjustedDate = adjustDate(selectedDate);
    setFromDate(adjustedDate ? adjustedDate.toISOString().split("T")[0] : null);
  }
  const handleToChange = (event, selectedDate) => {
    const adjustedDate = adjustDate(selectedDate);
    setToDate(adjustedDate ? adjustedDate.toISOString().split("T")[0] : null);
  };

  function renderDatePicker() {
    return (
      <DateTimePicker
        testID="dateTimePicker"
        value={
          pickerType === "from"
            ? fromDate
              ? new Date(fromDate + "T00:00:00")
              : new Date()
            : toDate
            ? new Date(toDate + "T00:00:00")
            : new Date()
        }
        minimumDate={minimumDate}
        mode="date"
        is24Hour={true}
        display={Platform.OS === "ios" ? "inline" : "default"}
        onChange={handleDateChange}
      />
    );
  }

  function renderIOSDatePickers() {
    return (
      <View style={styles.iosDate}>
        <View style={styles.iosDateElement}>
          <Text style={styles.iosText}>Search From</Text>
          <DateTimePicker
            testID="fromDateTimePicker"
            value={fromDate ? new Date(fromDate + "T00:00:00") : new Date()}
            minimumDate={minimumDate}
            mode="date"
            is24Hour={true}
            onChange={(event, selectedDate) =>
              handleFromChange(event, selectedDate)
            }
          />
        </View>
        <View style={styles.iosDateElement}>
          <Text style={styles.iosText}>Search To </Text>
          <DateTimePicker
            testID="toDateTimePicker"
            value={toDate ? new Date(toDate + "T00:00:00") : new Date()}
            minimumDate={minimumDate}
            mode="date"
            is24Hour={true}
            onChange={(event, selectedDate) =>
              handleToChange(event, selectedDate)
            }
          />
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {Platform.OS !== "ios" && (
        <>
          <View style={styles.dateContainer}>
            <TouchableOpacity
              style={[styles.button, fromDate && styles.buttonSelected]}
              onPress={() => showDateTimePicker("from")}
            >
              <Text>
                {fromDate === null
                  ? "Search Results From"
                  : `Search from: ${fromDate}`}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonSmall}
              onPress={() => setFromDate(null)}
            >
              <Text>Reset</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.dateContainer}>
            <TouchableOpacity
              style={[styles.button, toDate && styles.buttonSelected]}
              onPress={() => showDateTimePicker("to")}
            >
              <Text>
                {toDate === null ? "Search Results To" : `Search to: ${toDate}`}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonSmall}
              onPress={() => setToDate(null)}
            >
              <Text>Reset</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
      {Platform.OS !== "ios" && showPicker && renderDatePicker()}
      {Platform.OS === "ios" && renderIOSDatePickers()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#CCCCCC",
    padding: 10,
    flex: 0,
    justifyContent: "center",
    rowGap: 10,
  },
  button: {
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginRight: 10,
    borderColor: "black",
    backgroundColor: "transparent",
    width: 190,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonSmall: {
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginRight: 10,
    borderColor: "black",
    backgroundColor: "transparent",
    width: 90,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 14,
    color: "#333333",
  },
  buttonSelected: {
    backgroundColor: "#34B27E",
  },
  iosDate: {
    flex: 0,
    flexDirection: "column",

    alignContent: "center",
    alignItems: "center",
    rowGap: 10,
  },
  iosDateElement: {
    alignItems: "center",
    rowGap: 10,
    borderWidth: 1,
    borderRadius: 5,
    width: 200,
    height: 75,
  },
  dateContainer: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "center",
  },
  iosText: {
    fontSize: 16,
  },
});

export default DatesSelector;
