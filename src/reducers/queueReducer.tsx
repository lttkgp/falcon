type QueueAction = {
  type: string;
  payload: string;
};

export default function queueReducer(state = [], action: QueueAction) {
  switch (action.type) {
    case 'add':
      return [...state, action.payload];
    case 'new queue':
      return action.payload;
    default:
      return state;
  }
}
