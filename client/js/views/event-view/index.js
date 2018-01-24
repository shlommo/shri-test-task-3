import EventNewView from './event-new-view';
import EventEditView from './event-edit-view';

export const eventNewView = (data) => new EventNewView(data);
export const eventEditView = (data) => new EventEditView(data);
