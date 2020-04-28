type QueueAction = {
  type: string;
  payload: string;
};

export default function queueReducer(
  state = [
    'zReP_EYZGEw',
    'dQw4w9WgXcQ',
    'PJWemSzExXs',
    'k4V3Mo61fJM',
    'e-ORhEE9VVg',
    '2hlT8CqZ2pA',
    'U0V1y2p1sgs',
  ],
  action: QueueAction
) {
  switch (action.type) {
    case 'add':
      return [...state, action.payload];
    case 'new queue':
      return action.payload;
    default:
      return state;
  }
}
