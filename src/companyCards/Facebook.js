import React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import { Icon } from '@iconify/react';
import sharpFacebook from '@iconify/icons-ic/sharp-facebook';

export default ({ cardContent, id, setModalShow, setCardId }) => {
  return (
    <VerticalTimelineElement
      ssName="vertical-timeline-element--work"
      contentStyle={{
        background: '#f3f3f3',
        color: 'black',
        textAlign: 'center',
      }}
      contentArrowStyle={{ borderRight: '7px solid  #f3f3f3' }}
      iconStyle={{
        background: '#f3f3f3',
        color: '#1877F2',
        borderStyle: 'solid',
        borderColor: cardContent.protestColor,
      }}
      icon={<Icon icon={sharpFacebook} />}
      onTimelineElementClick={() => {
        setModalShow(true);
        setCardId(id);
      }}
    >
      <h1>{cardContent.companyName}</h1>
      <h4>{cardContent.theme}</h4>
      <h4>{cardContent.date}</h4>
      <h4>{cardContent.location}</h4>
    </VerticalTimelineElement>
  );
};
