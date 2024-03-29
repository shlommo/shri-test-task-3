import {getCoords, getNodeFromMarkup, parseObjToHash} from './../../tools/helpers';
import {monthNames} from './../../data/data';
import hideOnClickOutside from '../../tools/hide-on-click-outside';
import {router} from './../../router';


const getTimeSlotInfoTemplate = (event, rooms, users) => {
  const dateStart = new Date(event.dateStart);
  const dateEnd = new Date(event.dateEnd);
  const getMinutes = (date) => {
    return (date.getMinutes() < 10) ? `0${date.getMinutes()}` : date.getMinutes();
  };
  const inclineMonths = monthNames.map((month) => {
    const lastLetterCharCode = month.toLowerCase().charCodeAt(month.length - 1);
    let inclineMonth;

    if (lastLetterCharCode === 1100 || lastLetterCharCode === 1081) {
      inclineMonth = month.slice(0, -1) + 'я';
    } else if (lastLetterCharCode === 1090) {
      inclineMonth = month + 'а';
    }
    return inclineMonth.toLowerCase();
  });

  let roomName;
  for (let room of rooms) {
    if (room.id === event.room.id) {
      roomName = room.title;
    }
  }

  let userLogin;
  let userAvatarUrl;

  for (let user of users) {
    if (user.id === event.users[0].id) {
      userLogin = user.login;
      userAvatarUrl = user.avatarUrl;
    }
  }

  let members;
  const usersLength = event.users.length;

  if (usersLength === 1) {
    members = '';
  } else if (usersLength === 2) {
    members = `&nbsp;и&nbsp;${usersLength - 1} участник`;
  } else if (usersLength > 2 && event.users.length < 5) {
    members = `&nbsp;и&nbsp;${usersLength - 1} участника`;
  } else {
    members = `&nbsp;и&nbsp;${usersLength - 1} участников`;
  }

  const time = `${dateStart.getHours()}:${getMinutes(dateStart)}—${dateEnd.getHours()}:${getMinutes(dateEnd)}`;
  const eventEditInputData = {
    eventId: event.id,
    startTime: dateStart.getTime(),
    endTime: dateEnd.getTime()
  };


  return `<div class="time-slot-info" id="timeSlotInfoModal">
    <i class="time-slot-info__marker"></i>
    <div class="time-slot-info__cnt">
        <a href="/event/${parseObjToHash(eventEditInputData)}/edit" class="time-slot-info__trigger">
            <i>
                <svg width="12" height="12">
                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-edit"></use>
                </svg>
            </i>
        </a>

        <div class="time-slot-info__title">
            ${event.title}
        </div>

        <div class="time-slot-info__descr">
            ${dateStart.getDate()} ${inclineMonths[dateStart.getMonth()]}, ${time}&nbsp;·&nbsp;${roomName}
        </div>
        <div class="time-slot-info__users">
            <div class="user">
                <div class="user__icon">
                    <img src="${userAvatarUrl}" alt="">
                </div>
                ${userLogin}
            </div>${members}
        </div>
    </div>
  </div>`;
};


export default (parent, events, rooms, users) => {
  const timeSlotArr = parent.querySelectorAll('[data-event-edit-trigger]');

  for ( let timeSlot of Array.from(timeSlotArr) ) {
    const timeSlotClickHandler = (e) => {
      e.preventDefault();

      const timeSlotComputedStyle = getComputedStyle(timeSlot);
      const timeSlotHeight = +timeSlotComputedStyle.height.slice(0, -2);
      const timeSlotWidth = +timeSlotComputedStyle.width.slice(0, -2);
      const timeSlotCoords = getCoords(timeSlot);
      const timeSlotTop = timeSlotCoords.top;
      const timeSlotLeft = timeSlotCoords.left;
      const diagramContent = parent.querySelector('.diagram__content');
      const diagramContentCoords = getCoords(diagramContent);
      const diagramContentTopCoords = diagramContentCoords.top;
      const windowWidth = window.innerWidth;
      const timeSlotEventId = timeSlot.getAttribute('data-event-id');
      let timeSlotInfoTemplate;
      let timeSlotInfoNode;

      for (let event of events) {
        if (event.id === timeSlotEventId) {
          timeSlotInfoTemplate = getTimeSlotInfoTemplate(event, rooms, users);
          timeSlotInfoNode = getNodeFromMarkup(timeSlotInfoTemplate);
        }
      }

      timeSlot.classList.add('focused');
      diagramContent.appendChild(timeSlotInfoNode);

      setTimeout(() => {
        if (windowWidth < 1280) {
          const timeSlotInfoMarker = document.querySelector('.time-slot-info__marker');
          const timeSlotInfoMarkerWidth = +getComputedStyle(timeSlotInfoMarker).width.slice(0, -2);
          timeSlotInfoNode.style.cssText = `top: ${timeSlotTop + timeSlotHeight}px;`;
          timeSlotInfoMarker.style.left = `${timeSlotLeft + timeSlotWidth / 2 - timeSlotInfoMarkerWidth / 2}px`;
        } else {
          const timeSlotNodeWidth = getComputedStyle(timeSlotInfoNode).width.slice(0, -2);
          const leftMoveValue = timeSlotLeft + timeSlotWidth / 2 - timeSlotNodeWidth / 2;
          timeSlotInfoNode.style.cssText = `top: ${timeSlotTop - diagramContentTopCoords + timeSlotHeight}px; left: ${leftMoveValue}px`;
        }
        timeSlotInfoNode.classList.add('showed');
      }, 100);

      setTimeout(() => {
        hideOnClickOutside('#timeSlotInfoModal', () => {
          timeSlot.classList.remove('focused');
          if (diagramContent.contains(timeSlotInfoNode)) {
            diagramContent.removeChild(timeSlotInfoNode);
          }
        });
      }, 10);

      const timeSlotInfoTrigger = diagramContent.querySelector('.time-slot-info__trigger');

      timeSlotInfoTrigger.addEventListener('click', (ev) => {
        ev.preventDefault();
        const eventHref = timeSlotInfoTrigger.getAttribute('href');

        diagramContent.removeChild(timeSlotInfoNode);
        timeSlot.removeEventListener('click', timeSlotClickHandler);
        router.navigate(eventHref);
      });
    };

    timeSlot.addEventListener('click', timeSlotClickHandler);
  }
};
