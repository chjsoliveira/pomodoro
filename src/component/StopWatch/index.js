import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

export default function StopWatch({ startMinutes }) {
  const [seconds, setSeconds] = useState(59);
  const [minutes, setMinutes] = useState(startMinutes - 1);
  const [stop, setStop] = useState(false);

  const restartStopWatch = () => {
    setSeconds(59);
    setMinutes(startMinutes - 1);
  };

  const stopTime = () => {
    setStop(!stop);
  };

  const decrementTime = () => {
    if (stop === false) {
      if (seconds === 0) {
        if (minutes === 0) {
          stopTime();
        } else {
          setSeconds(59);
          setMinutes(minutes - 1);
        }
      } else {
        setSeconds(seconds - 1);
      }
    }
  };

  useEffect(() => {
    const id = setInterval(() => {
      decrementTime();
    }, 1000);
    return () => clearInterval(id);
  }, [seconds, minutes]);

  return (
    <View style={styles.container}>
      <Text>
        {minutes < 10 ? '0' + minutes.toString() : minutes.toString()}:
        {seconds < 10 ? '0' + seconds.toString() : seconds.toString()}
      </Text>
    </View>
  );
}
