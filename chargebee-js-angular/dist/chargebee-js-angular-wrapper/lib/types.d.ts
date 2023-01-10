export interface PaymentIntent {
    id: string;
    status: PaymentIntentStatus;
    amount: number;
    currency_code: string;
    gateway_account_id: string;
    gateway: Gateway;
    active_payment_attempt?: PaymentAttempt;
    customer_id?: string;
    reference_id?: string;
}
export declare enum PaymentIntentStatus {
    INITED = "inited",
    IN_PROGRESS = "in_progress",
    AUTHORIZED = "authorized",
    CONSUMED = "consumed"
}
export declare enum PaymentAttemptStatus {
    INITED = "inited",
    REQUIRES_IDENTIFICATION = "requires_identification",
    REQUIRES_CHALLENGE = "requires_challenge",
    REQUIRES_REDIRECTION = "requires_redirection",
    AUTHORIZED = "authorized",
    REFUSED = "refused"
}
export interface PaymentAttempt {
    status: PaymentAttemptStatus;
    type: string;
    active: boolean;
    id_at_gateway?: string;
    action_payload: any;
    error_code?: string;
    error_text?: string;
    error_msg?: string;
}
export declare enum Gateway {
    STRIPE = "stripe",
    ADYEN = "adyen",
    BRAINTREE = "braintree",
    SPREEDLY = "spreedly"
}
export interface AdditionalData {
    billingAddress?: Address;
    shippingAddress?: Address;
    email?: string;
    phone?: string;
}
export interface Callbacks {
    success?: (intent: PaymentIntent) => void;
    error?: (intent: PaymentIntent, error: any) => void;
    change?: (intent: PaymentIntent) => void;
}
export interface Address {
    firstName?: string;
    lastName?: string;
    phone?: string;
    addressLine1?: string;
    addressLine2?: string;
    addressLine3?: string;
    city?: string;
    state?: string;
    stateCode?: string;
    countryCode?: string;
    zip?: string;
}
//# sourceMappingURL=types.d.ts.map