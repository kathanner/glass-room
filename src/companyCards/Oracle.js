import React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
// npm install --save-dev @iconify/react @iconify/icons-logos
import { Icon } from '@iconify/react';
import oracleIcon from '@iconify/icons-logos/oracle';

export default ({ cardContent, id, setModalShow, setCardId }) => {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{
        background: '#f3f3f3',
        color: 'black',
        textAlign: 'center',
      }}
      contentArrowStyle={{ borderRight: '7px solid  #f3f3f3' }}
      iconStyle={{
        background: '#f3f3f3',
        borderStyle: 'solid',
        borderColor: cardContent.protestColor,
      }}
      icon={<Icon icon={oracleIcon} />}
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
