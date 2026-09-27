export {};

export interface MidtransResult {
  order_id: string;
  transaction_status: string;
  gross_amount: string;
  payment_type: string;
  status_code: string;
  [key: string]: unknown;
}

export interface SnapCallbacks {
  onSuccess?: (result: MidtransResult) => void;
  onPending?: (result: MidtransResult) => void;
  onError?: (result: MidtransResult) => void;
  onClose?: () => void;
}

declare global {
  interface Window {
    snap: {
      pay: (token: string, callbacks?: SnapCallbacks) => void;
    };
  }
}
