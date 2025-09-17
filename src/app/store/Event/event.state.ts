import {Event} from '../../models/Event';  

export interface EventState {
  events: Event[];
  loading: boolean;
  error: any;
}

export const initialState: EventState = {
  events: [],
  loading: false,
  error: null,
};