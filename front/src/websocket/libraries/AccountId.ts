import { v4 as uuidv4 } from 'uuid';

const ACCOUNT_ID_KEY = 'accountId';

/**
 * アカウントIDを設定する
 */
export const setAccountId = (accountId: string): void => {
  window.sessionStorage.setItem(ACCOUNT_ID_KEY, accountId);
};

/**
 * アカウントIDを取得する
 */
export const getAccountId = (): string => {
  const accountId: string | null = window.sessionStorage.getItem(
    ACCOUNT_ID_KEY
  );

  if (!accountId) {
    // なければ新規作成
    const newId = uuidv4();
    setAccountId(newId);
    return newId;
  }

  return accountId;
};
