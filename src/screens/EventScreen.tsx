import React from 'react';
import LayoutWithFadeHeader from '@components/layout/LayoutWithFadeHeader';
import { View } from 'react-native';
import Event from '@components/common/Event';
import { useQuery } from '@tanstack/react-query';
import { getEventArticles, getEvents } from '@lib/api/event';
import { useRecoilState } from 'recoil';
import eventAtom from '@/store/event';

const EventScreen = () => {
  const [event, setEvent] = useRecoilState(eventAtom);
  return (
    <LayoutWithFadeHeader title={'이벤트'}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          paddingHorizontal: 20,
          paddingTop: 10,
          gap: 20,
        }}
      >
        {event?.map((event) => (
          <Event
            picture={event.picture}
            id={event.id}
            key={event.id}
            title={event.name}
            startDate={event.startDate}
            endDate={event.endDate}
          />
        ))}
      </View>
    </LayoutWithFadeHeader>
  );
};

export default EventScreen;
