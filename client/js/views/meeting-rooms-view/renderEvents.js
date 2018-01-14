import {getCoords, getNodeFromMarkup} from './../../tools/helpers';

const getEventMarkup = (createEventId, isFilled, inputRoomId, _dateCreateEventFrom, _dateCreateEventTo) => {
  const eventId = (createEventId !== null) ? `data-event-id="${createEventId}"` : '';
  const roomId = (inputRoomId !== undefined) ? `data-room-parent-id="${inputRoomId}"` : '';
  const dateCreateEventFrom = (_dateCreateEventFrom !== undefined) ? `data-create-event-from="${_dateCreateEventFrom}"` : '';
  const dateCreateEventTo = (_dateCreateEventTo !== undefined) ? `data-create-event-to="${_dateCreateEventTo}"` : '';
  const extraClass = (isFilled) ? 'time-slot--filled' : 'time-slot--empty';
  const extraAttr = (isFilled) ? 'data-event-edit-trigger' : 'data-event-new-trigger';
  return `<span class="time-slot ${extraClass}" ${eventId} ${extraAttr} ${dateCreateEventFrom} ${dateCreateEventTo} ${roomId}></span>`
};

const getEventNode = (createEventId, eventMarkupState, left, width, inputRoomId, dateCreateEventFrom, dateCreateEventTo) => {
  const eventMarkup = getEventMarkup(createEventId, eventMarkupState, inputRoomId, dateCreateEventFrom, dateCreateEventTo);
  let eventNode = getNodeFromMarkup(eventMarkup);

  eventNode.style.cssText = `left: ${left}px; 
            width: ${width}px`;

  return eventNode;
};

export default (inputEvents, inputDate) => {
  const eventContainerArr = document.querySelectorAll('.diagram__room .diagram__cell');
  const inputDateDay = new Date(inputDate.getFullYear(), inputDate.getMonth(), inputDate.getDate()).valueOf();
  const now = new Date();
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()).valueOf();

  for (let eventContainer of Array.from(eventContainerArr)) {
    const MINUTE = 60 * 1000;
    const diagramRowBody = eventContainer.parentNode;
    const diagramRowBodyCoordsLeft = getCoords(diagramRowBody).left;
    const containerTimeStart = +eventContainer.getAttribute('data-time');
    const containerEventTimeStart = +eventContainer.getAttribute('data-event-started');
    const containerEventTimeEnd = +eventContainer.getAttribute('data-event-ended');
    const containerWidth = getComputedStyle(eventContainer).width.slice(0, -2);
    const minuteLength = containerWidth / 60; //Длина минуты в пикселях
    const containerCoordsLeft = getCoords(eventContainer).left;
    const insertValue = containerCoordsLeft - diagramRowBodyCoordsLeft;
    const containerRoomId = diagramRowBody.parentNode.parentNode.getAttribute('data-room-id');
    let leftMoovingValue;
    let eventWidth;
    let eventCreateDateTo; //Дата для создания события
    let eventCreateDateForm; //Дата для создания события

    for (let event of inputEvents) {
      const dateStart = new Date(event.dateStart);
      const dateEnd = new Date(event.dateEnd);
      const eventStartDay = new Date(dateStart.getFullYear(), dateStart.getMonth(), dateStart.getDate()).valueOf();
      const hourEventStart = dateStart.getHours();
      const minuteEventStart = dateStart.getMinutes();
      const eventRoomId = event.room.id;
      const eventDuration = (dateEnd.valueOf() - dateStart.valueOf()) / MINUTE; //Длительность события

      const IS_THE_RIGHT_ROOM = containerRoomId === eventRoomId;
      const IS_THE_RIGHT_HOUR = hourEventStart === containerTimeStart;

      if (eventStartDay === inputDateDay) { //Если событие происходит в этот день
        if (IS_THE_RIGHT_ROOM && IS_THE_RIGHT_HOUR) {
          leftMoovingValue = insertValue + minuteLength * minuteEventStart;
          eventWidth = minuteLength * eventDuration;
          diagramRowBody.appendChild(getEventNode(event.id, true, leftMoovingValue, eventWidth));
        }
      } else if (eventStartDay > inputDateDay) { //Если событие происходит в будущем

      } else if (eventStartDay < inputDateDay) { //Если событие происходит в прошлом

      }
    }

    if (today <= inputDateDay) {
      if (containerTimeStart === currentHour) { //Если время контейнера соответствует текущему времени
        eventWidth = minuteLength * (60 - currentMinute);
        leftMoovingValue = insertValue + minuteLength * currentMinute;

        if (containerEventTimeStart > 0) { //Если в контейнере есть время начала события
          eventWidth = (containerEventTimeStart - currentMinute) * minuteLength;
        } else if (containerEventTimeEnd > 0) {
          eventWidth = (60 - containerEventTimeEnd - (currentMinute - containerEventTimeEnd)) * minuteLength;
          leftMoovingValue = insertValue + (containerEventTimeEnd * minuteLength);
          leftMoovingValue = insertValue + currentMinute * minuteLength;
        }

        eventCreateDateTo = new Date(inputDate.getFullYear(), inputDate.getMonth(), inputDate.getDate(), containerTimeStart, currentMinute);
        diagramRowBody.appendChild(getEventNode(null, false, leftMoovingValue, eventWidth, containerRoomId, eventCreateDateTo));
      } else if (containerTimeStart > currentHour) {
        leftMoovingValue = insertValue;
        eventWidth = containerWidth;
        eventCreateDateTo = new Date(inputDate.getFullYear(), inputDate.getMonth(), inputDate.getDate(), containerTimeStart);

        if (containerEventTimeEnd > 0) { //Если в контейнере есть время окончания события
          eventWidth =(60 - containerEventTimeEnd) * minuteLength;
          leftMoovingValue = insertValue + ( containerEventTimeEnd * minuteLength);

          eventCreateDateTo = new Date(inputDate.getFullYear(), inputDate.getMonth(), inputDate.getDate(), containerTimeStart, containerEventTimeEnd);
        } else if (containerEventTimeStart > 0) {
          eventWidth =containerEventTimeStart * minuteLength;
          leftMoovingValue = insertValue;
          eventCreateDateTo = new Date(inputDate.getFullYear(), inputDate.getMonth(), inputDate.getDate(), containerTimeStart);
        }

        diagramRowBody.appendChild(getEventNode(null, false, leftMoovingValue, eventWidth, containerRoomId, eventCreateDateTo));
      }
    // } else if (today < inputDateDay) {
    //   leftMoovingValue = insertValue;
    //   eventWidth = containerWidth;
    //   eventCreateDateTo = new Date(inputDate.getFullYear(), inputDate.getMonth(), inputDate.getDate(), containerTimeStart);
    //   diagramRowBody.appendChild(getEventNode(null, false, leftMoovingValue, eventWidth, containerRoomId, eventCreateDateTo));
    }
  }
};