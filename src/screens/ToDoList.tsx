import React, {useEffect, useContext} from 'react';

import {
  FlatList,
  Text,
  View,
  StyleSheet,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import {Context} from '../store/context/contextGenerator';
import {getTodos} from '../api/todosApi';
import {todoAction} from '../store/actions/todoActions';

const ToDoList = () => {
  const {todoDispatch, todoState} = useContext<any>(Context);

  useEffect(() => {
    todoDispatch(todoAction.actionStart(null));
    getTodos()
      .then(data => {
        todoDispatch(todoAction.actionSuccess({data}));
      })
      .catch(e => {
        todoDispatch(
          todoAction.actionSuccess({error: e.message || 'server error'}),
        );
      });
    console.log('todoState', todoState);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View>
      <Text>Todos List</Text>
      {todoState.loader ? (
        <ActivityIndicator size="large" color="#00ff00" />
      ) : (
        <FlatList
          data={todoState.list}
          renderItem={({item}) => (
            <View style={styles.item}>
              <Text style={styles.title}>{item.title}</Text>
            </View>
          )}
          keyExtractor={(item: any) => item.id}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default ToDoList;
