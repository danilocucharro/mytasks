import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

import { FontAwesome } from "@expo/vector-icons";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

type TaskCardProps = {
  description: string,
  handleRemoveTask: (description: string) => void,
  handleChangeTaskStatus: (taskDescription: string, status: boolean) => void,
  isDone: boolean
}

export function TaskCard({ 
  description,
  isDone,
  handleRemoveTask,
  handleChangeTaskStatus
 }: TaskCardProps) {
  return (
    <View style={styles.taskContent}>
      <TouchableOpacity
        onPress={() => handleChangeTaskStatus(description, isDone)}
      >
        {isDone ? (
          <FontAwesome name="check-circle" size={24} color="#5E60CE" />
        ): (
          <MaterialIcons name="radio-button-unchecked" size={24} color="#4EA8DE" />
        )}
      </TouchableOpacity>

      {isDone ? (
        <Text style={[styles.txtTaskDescription, {textDecorationLine: "line-through", color: "#808080"}]}>
          {description}
        </Text>
      ) : (
        <Text style={styles.txtTaskDescription}>
        {description}
      </Text>
      )

      }

      <TouchableOpacity
        onPress={() => handleRemoveTask(description)}
      >
        <FontAwesome6 name="trash-can" size={20} color="#808080" />
      </TouchableOpacity>
    </View>
  )
}