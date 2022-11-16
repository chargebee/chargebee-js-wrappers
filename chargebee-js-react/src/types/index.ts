enum ComponentType {
  Card = 'card',
  Bank = 'bank_account',
  IDeal = 'ideal',
  Dotpay = 'dotpay',
  Paypal = 'paypal',
  Netbanking = 'netbanking',
  Applepay = 'applepay',
}

enum PaymentIntentStatus {
  INITED = 'inited',
  IN_PROGRESS = 'in_progress',
  AUTHORIZED = 'authorized',
  CONSUMED = 'consumed',
}

enum PaymentMethodType {
  CARD = 'card',
  IDEAL = 'ideal',
  SOFORT = 'sofort',
  BANCONTACT = 'bancontact',
  GOOGLE_PAY = 'google_pay',
  PAYPAL_EXPRESS_CHECKOUT = 'paypal_express_checkout',
  DOTPAY = 'dotpay',
  GIROPAY = 'giropay',
  Netbanking_EMANDATES = 'netbanking_emandates',
  APPLEPAY = 'apple_pay',
  UPI = 'upi',
  DIRECT_DEBIT = 'direct_debit',
}

enum Gateway {
  STRIPE = 'stripe',
  ADYEN = 'adyen',
  BRAINTREE = 'braintree',
  SPREEDLY = 'spreedly',
  CHARGEBEE = 'chargebee',
  CHECKOUT_COM = 'checkout_com',
  CYBERSOURCE = 'cybersource',
  BLUESNAP = 'bluesnap',
  INGENICO_DIRECT = 'ingenico_direct',
  WORLDPAY = 'worldpay',
  AUTHORIZE_NET = 'authorize_net',
  MOLLIE = 'mollie',
  RAZORPAY = 'razorpay',
  CHARGEBEE_PAYMENTS = 'chargebee_payments',
}

type PayerInfo = {
  customer?: Customer;
  shipping_address?: Address;
  billing_address?: Address;
};

enum PaymentAttemptStatus {
  INITED = 'inited',
  REQUIRES_IDENTIFICATION = 'requires_identification',
  REQUIRES_CHALLENGE = 'requires_challenge',
  REQUIRES_REDIRECTION = 'requires_redirection',
  AUTHORIZED = 'authorized',
  REFUSED = 'refused',
}

type PaymentAttempt = {
  id: string;
  status: PaymentAttemptStatus;
  type: string;
  active: boolean;
  id_at_gateway?: string;
  action_payload: any;
  error_code?: string;
  error_text?: string;
  error_msg?: string;
};

export type PaymentIntent = {
  id: string;
  status: PaymentIntentStatus;
  amount: number;
  currency_code: string;
  gateway_account_id: string;
  gateway: Gateway;
  active_payment_attempt?: PaymentAttempt;
  customer_id?: string;
  reference_id?: string;
  payment_method_type: PaymentMethodType;
  success_url?: string;
  business_entity_id?: string;
  payer_info?: PayerInfo;
};

export type AdditionalData = {
  cardBillingAddress?: Address; //  | -- Duplicate parameters
  billingAddress?: Address; //  |
  customerBillingAddress?: Address;
  shippingAddress?: Address;
  customer?: Customer;
  email?: string;
  phone?: string;
  plan?: string;

  // Adyen
  encryptedCardDetails?: string;

  // CBToken - Id at vault parameter
  vaultId?: string;

  //Options
  locale?: string;

  // RBI Mandate
  mandate?: Mandate;
};

type Customer = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
};

type Mandate = {
  requireMandate: boolean;
  description?: string;
};

type Address = {
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
  zip?: string | number;
};

export type Callbacks = {
  success?: Function;
  error?: Function;
  change?: Function;
  cancel?: Function;
};

export interface Component {
  name: string;
  type: ComponentType;
  status: Number;
  focus: Function;
  clear: Function;
  blur: Function;
  update: Function;
  createField: Function;
  mount(id?: any): Promise<boolean>;
  framesCreated(): string[];
  delegateEvent(event: CustomEvent): void;
  tokenize(data?: any): any;
  authorizeWith3ds(
    paymentIntent: PaymentIntent,
    additionalData: AdditionalData,
    callbacks: Callbacks
  ): Promise<PaymentIntent>;
}
