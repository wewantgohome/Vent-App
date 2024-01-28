import React from 'react';
import { Text, View } from 'react-native';
import LayoutWithFadeHeader from '@components/layout/LayoutWithFadeHeader';
import Vent from '@components/common/Vent';
import { useRecoilState } from 'recoil';
import ventAtom from '@/store/vent';

const VentScreen = () => {
  const [vent, setVent] = useRecoilState(ventAtom);
  return (
    <LayoutWithFadeHeader title={'벤트'}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          paddingHorizontal: 20,
          paddingTop: 10,
          gap: 34,
        }}
      >
        {vent.map((vent) => (
          <Vent
            maxMember={vent.maxMember}
            currentMember={vent.currentMember}
            location={vent.location}
            picture={vent.picture}
            title={vent.name}
            id={vent.id}
          />
        ))}
      </View>
    </LayoutWithFadeHeader>
  );
};

export default VentScreen;
