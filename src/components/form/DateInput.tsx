import {useState} from "react";
import {Image, Pressable, StyleSheet, Text, View} from "react-native";
import {Colors} from "../../assets/constants/colors";
import {Calendar, DateData} from "react-native-calendars";

export function DateInput() {
  const [isActive, setisActive] = useState(false);
  const [date, setDate] = useState<DateData>();

  return (
    <Pressable
      onPress={() => {
        setisActive(true);
      }}
      style={({pressed}) =>
        pressed ? [styles.btn, styles.pressed] : styles.btn
      }>
      <View style={styles.container}>
        <Text style={styles.text}>{date == null ? "Data" : date.dateString}</Text>
        <Image
          source={require("../../assets/images/calendarIcon.png")}
          style={styles.img}
        />
      </View>

      <View
        style={
          !isActive
            ? styles.calendarContainerDesactivated
            : styles.calendarContainer
        }>
        <Calendar style={styles.calendar} onDayPress={(date) => {
          setisActive(false);
          setDate(date);
        }}/>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: "92%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
    backgroundColor: Colors.primaryColor,
    borderRadius: 12,
  },

  pressed: {
    backgroundColor: Colors.primaryColorDark,
  },

  container: {
    height: 60,
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  calendarContainer: {
    width: "100%",
    borderTopColor: Colors.primaryColorLight,
    borderTopWidth: 2,
    paddingTop: 18,
    paddingBottom: 20,
  },

  calendarContainerDesactivated: {
    display: "none",
  },

  calendar: {
    borderRadius: 4,
  },

  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },

  img: {
    width: 26,
    height: 26,
  },
});
