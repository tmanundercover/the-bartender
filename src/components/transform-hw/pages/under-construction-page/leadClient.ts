import clientUtils from "./clientUtils";
import {SanityColdLead} from "../../../../common/sanityIo/Types";

const createLead = (lead: SanityColdLead) => {
    return fetch("/collect-email-address" ?? "",
        {
            method: 'POST',
            body: JSON.stringify(lead),
        },
    )
        .then((response: any) => {
            return clientUtils.processResponse(response, 'ColdLead');
        })
        .catch((e: any) => {
            // console.error(LOG, 'ERROR', 'error', e);
            // eslint-disable-next-line prefer-promise-reject-errors
            return Promise.reject({attempt: Error(e)});
        });
};
export default {createLead}