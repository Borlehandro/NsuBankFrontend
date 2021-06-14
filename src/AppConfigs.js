class AppConfigs {
    static API_URL = "http://localhost:8080";

    static OPERATORS_LIST = AppConfigs.API_URL + "/crud/operator/find-all";
    static PAYMENTS_LIST = AppConfigs.API_URL + "/list/payments";
    static CREDITS_HISTORY_LIST = AppConfigs.API_URL + "/list/credit-history";
    static CREDITS_PLAN_LIST = AppConfigs.API_URL + "/list/credit-table";

    // Users
    static USER_LIST = AppConfigs.API_URL + "/crud/client/find-all";
    static DELETE_USER = AppConfigs.API_URL + "/crud/client/delete";
    static EDIT_USER = AppConfigs.API_URL + "/crud/client/edit";
    static ADD_USER = AppConfigs.API_URL + "/crud/client/create";
    static USER_FIND = AppConfigs.API_URL + "/crud/client/find";

    // Credits
    static CREDITS_LIST = AppConfigs.API_URL + "/crud/credit/find-all";
    static DELETE_CREDIT = AppConfigs.API_URL + "/crud/credit/delete";
    static EDIT_CREDIT = AppConfigs.API_URL + "/crud/credit/edit";
    static GIVE_CREDIT = AppConfigs.API_URL + "/client/give-credit";
    static CREDIT_FIND = AppConfigs.API_URL + "/crud/credit/find"

    // Offer
    static OFFERS_LIST = AppConfigs.API_URL + "/crud/offer/find-all";
    static DELETE_OFFER = AppConfigs.API_URL + "/crud/offer/delete";
    static EDIT_OFFER = AppConfigs.API_URL + "/crud/offer/edit";
    static ADD_OFFER = AppConfigs.API_URL + "/crud/offer/create";
    static OFFER_FIND = AppConfigs.API_URL + "/crud/offer/find";
    static SET_OFFER = AppConfigs.API_URL + "/client/set-offer";

    // Payments
    static PROCESS_PAYMENT = AppConfigs.API_URL + "/payments/process";
}

export default AppConfigs;