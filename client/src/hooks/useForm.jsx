/**
    * Author: @gonzo036
    * Date: 04/22/2022
    * Ticket: TICKET-XXXXXXXX
    * Description: this file contains hooks form
*/

import { useState } from "react";

export const useForm = (initialState = {}) => {
    const [values, setValues] = useState(initialState);

    const reset = (newFormState = initialState) => {
        setValues(newFormState);
    };

    const handleInputChange = ({ target }) => {
        setValues({
            ...values,
            [target.name]: target.value,
        });
    };

    return [values, handleInputChange, reset];
};
