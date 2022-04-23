/**
    * Author: @gonzo036
    * Date: 04/22/2022
    * Ticket: TICKET-XXXXXXXX
    * Description: this file contains List product result styles
*/

import { useState } from "react";
import { ProductContext } from "./components/context/ProductContext";
import { AppRoutes } from "./routes/AppRoutes";
import "./styles/normalize.css";
import "./styles/general.scss";

function App() {
    const [categories, setCategories] = useState([]);

    return (
        <>
            <ProductContext.Provider value={{ categories, setCategories }}>
                <AppRoutes />
            </ProductContext.Provider>
        </>
    );
}

export default App;
