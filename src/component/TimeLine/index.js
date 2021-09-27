import React, { useContext } from 'react';
import { View, Image } from 'react-native';
import Timeline from 'react-native-timeline-flatlist';
import styles from './styles';
import { CTX } from '../../tools/context';

const TimeLine = ({ navigation }) => {
  const stepContext = useContext(CTX);
  const { steps } = stepContext;

  const handleGoBack = () => {
    navigation.goBack();
  };
  const data = [
    {
      time: '09:00',
      title: 'Nome da Tarefa',
      circleColor: '#009688',
      lineColor: '#009688',
    },
    {
      time: '09:15',
      title: 'Tarefa Finalizada',
    },
    {
      time: '09:15',
      title: 'Nome da Segunda Tarefa',
    },
    {
      time: '09:25',
      title: 'Pomodori completo',
      icon: require('../../../assets/icon.png'),
    },
    {
      time: '09:25',
      title: 'Iniciar pausa X minutos',
      icon: require('../../../assets/coffe.png'),
    },
    {
      time: '09:30',
      title: 'Nome da Terceira Tarefa',
    },
    {
      time: '10:00',
      title: 'Pomodoro finalizado',
      lineColor: '#009688',
      circleColor: 'red',
    },
  ];
  return (
    <View style={styles.container}>
      <View style={{ padding: 10, height: 100 }}>
        <Image
          style={{ height: 64, width: 64, alignSelf: 'center' }}
          source={require('../../../assets/icon.png')}
        />
      </View>
      <View style={{ flex: 1 }}>
        <Timeline
          style={styles.list}
          data={steps}
          circleSize={20}
          circleColor="rgb(45,156,219)"
          lineColor="rgb(45,156,219)"
          timeContainerStyle={{ minWidth: 52, marginTop: -5 }}
          timeStyle={{
            textAlign: 'center',
            backgroundColor: '#ff9797',
            color: 'white',
            padding: 5,
            borderRadius: 13,
            marginTop: 5,
          }}
          descriptionStyle={{ color: 'gray' }}
          options={{
            style: { paddingTop: 5 },
          }}
          //innerCircle={'dot'}
          innerCircle={'icon'}
        />
      </View>
    </View>
  );
};

export default TimeLine;
