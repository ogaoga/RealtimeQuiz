import { GameRoomStatusData } from 'interfaces/Status';

export function expressPlayerStatus(
  status: GameRoomStatusData['currentStatus']
): string {
  switch (status) {
    case 'WAITING_QUESTION':
      return '出題を待っています…';
    case 'WAITING_ANSWER':
      return '解答オープンを待っています…';
    case 'CLOSE_ANSWER':
      return '結果発表を待っています…';
    case 'OPEN_ANSWER':
      return '結果発表を待っています…';
    case 'OPEN_AGGREGATE':
      return '結果発表';
    default:
      throw new Error(`Fatal: ユーザの状態が不明です．: ${status}`);
  }
}

/* eslint @typescript-eslint/explicit-module-boundary-types: 0 */
export const usePlayer = () => {
  return {
    expressPlayerStatus,
  };
};
