import { ViewStatus } from '../../types/ViewStatus';

export function expressRoomStatus(status: ViewStatus): string {
  switch (status) {
    case ViewStatus.WAITING_QUESTION:
      return '出題を待っています…';
    case ViewStatus.WAITING_ANSWER:
      return '解答オープンを待っています…';
    case ViewStatus.CLOSE_ANSWER:
    case ViewStatus.OPEN_ANSWER:
      return '結果発表を待っています…';
    case ViewStatus.OPEN_AGGRIGATE:
      return '結果発表';
    default:
      throw new Error('Fatal: ユーザの状態が不明です．');
  }
}