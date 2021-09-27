import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity, Image, Modal } from 'react-native';
import styles from './styles';
import { CTX } from '../../tools/context';
import appIcon from '../../../assets/icon.png';

import { Entypo } from '@expo/vector-icons';
import Timeline from 'react-native-timeline-flatlist';

import * as theme from '../../theme';
import StopWatch from '../StopWatch';
import TimeLine from '../TimeLine';

export default function PomodoroStart(props) {
  const [taskName, setTaskName] = useState('');
  const [started, setStarted] = useState(false);
  const stepContext = useContext(CTX);
  const { steps, _addStep, _resetSteps } = stepContext;
  const [modalVisible, setModalVisible] = useState(false);

  const handleButtonPress = () => {
    if (!started) {
      _resetSteps();
      _addStep({ title: 'Pomodoro Iniciado' });
    } else {
      _addStep({ title: 'Pomodoro Interrompido' });
    }

    setStarted(!started);
  };

  return (
    <View style={styles.content}>
      <View style={styles.cardView}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress()}
        >
          {!started ? (
            <Image
              style={{ height: 64, width: 64, alignSelf: 'center' }}
              source={{ uri: Image.resolveAssetSource(appIcon).uri }}
            />
          ) : (
            <Entypo
              name={'controller-stop'}
              size={64}
              color={theme.colors.primary}
            />
          )}

          <Text>{!started ? 'Iniciar' : 'Parar'}</Text>
        </TouchableOpacity>
      </View>
      {started && <StopWatch startMinutes={25} />}
      {steps && (
        <TouchableOpacity
          style={styles.button}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <Text>Resumo</Text>
        </TouchableOpacity>
      )}
      <Modal visible={modalVisible}>
        <TimeLine />
        <TouchableOpacity
          style={styles.buttonModal}
          underlayColor="#788eec"
          onPress={() => setModalVisible(!modalVisible)}
        >
          <Text style={styles.buttonText}>Fechar</Text>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}
