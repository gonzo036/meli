/**
    * Author: @gonzo036
    * Date: 04/22/2022
    * Ticket: TICKET-XXXXXXXX
    * Description: this file contains components
*/
import { useContext, useEffect, useState } from "react";

import { ProductContext } from "./context/ProductContext";

export default function Breadcrumb() {
    const { categories } = useContext(ProductContext);

    const [stringBreascrumb, setStringBreascrumb] = useState("");

    useEffect(() => {
    if (categories.length > 10) {
        let stringTemp = categories
        .slice(0, 3)
        .map((item) => <span className="breadcrumb_text" key={item.id}> {item.name} </span>)
        setStringBreascrumb(stringTemp);
    }
    }, [categories, stringBreascrumb]);

    return <div className="breadcrumb">{stringBreascrumb}</div>;
}
