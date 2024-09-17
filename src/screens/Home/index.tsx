import { TextInput, TouchableOpacity, View, Text, Image, FlatList, Alert } from "react-native";
import { Banner } from "./components/Banner";

import { styles } from "./styles";
import { TaskCard } from "./components/TaskCard";
import { useState } from "react";

type TasksType = {
  description: string,
  isDone: boolean
}[]

export function Home() {
  const [tasks, setTasks] = useState<TasksType>([])
  const [finishedTasks, setFinishedTasks] = useState<TasksType>([])
  const [taskName, setTaskName] = useState<string>("")

  function handleAddTask(taskDescription: string) {
    if (taskDescription === "") {
      return Alert.alert("De uma descricao pra task!")
    }
    setTasks(prevState => [...prevState,{
      description: taskDescription,
      isDone: false
    }])

    setTaskName("")
  }

  function handleRemoveTask(description: string) {
    const newTaskList = tasks.filter(task => task.description != description)

    setTasks(newTaskList)
  }

  function handleChangeTaskStatus(taskDescription: string, status: boolean) {
    const newTaskList = tasks.filter(task => task.description != taskDescription)

    setTasks([...newTaskList, {
      description: taskDescription,
      isDone: !status 
    }])

    setFinishedTasks(prevState => [...prevState, {
      description: taskDescription,
      isDone: status
    }])
  }

  return (
    <View>
      <Banner />
      <View style={styles.container}>
        <View style={styles.formTaskContent}>
          <TextInput
            style={styles.inputTask}
            placeholder="Add a new task!"
            placeholderTextColor={"#808080"}
            onChangeText={text => setTaskName(text)}
            value={taskName}
          />

          <TouchableOpacity
            style={styles.btnAddTask}
            onPress={() => handleAddTask(taskName)}
          >
            <Text style={styles.txtAddTask}>
              +
            </Text>
          </TouchableOpacity>
        </View>

        <View>
          <View style={styles.infoTasks}>
            <View style={styles.progressContent}>
              <Text style={styles.txtCreatedTasks}>
                Criadas
              </Text>
              <Text style={styles.txtCountTaskProgress}>{tasks.length}</Text>
            </View>

            <View style={styles.progressContent}>
              <Text style={styles.txtFinishedTasks}>
                Concluidas
              </Text>
              <Text style={styles.txtCountTaskProgress}>{finishedTasks.length}</Text>
            </View>
          </View>

          <View style={styles.separator}></View>

          {tasks.length < 1 ? (
            <View style={styles.taskListEmpty}>
              <Image source={require('../../../assets/Clipboard.png')}/>

              <Text style={styles.txtEmptyAlert}>
              <Text style={styles.txtEmptyAlertBold}>Você ainda não tem tarefas cadastradas</Text>{"\n"}
              Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          ) : (
            <FlatList
              data={tasks}
              keyExtractor={item => item.description}
              renderItem={({item}) => (
                <TaskCard 
                  description={item.description}
                  handleRemoveTask={handleRemoveTask}
                  isDone={item.isDone}
                  handleChangeTaskStatus={() => handleChangeTaskStatus(item.description, item.isDone)}
                />
              )}
            />
          )
          }
        </View>
      </View>
    </View>
  )
}