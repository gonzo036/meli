/**
    * Author: @gonzo036
    * Date: 04/22/2022
    * Ticket: TICKET-XXXXXXXX
    * Description: this file contains components
*/

import React from "react";
import { useNavigate } from "react-router-dom";
import Shipping from "../assets/images/shipping.png";

export default function SearchList({ product }) {
    const navigate = useNavigate();
    const handleClick = () => {
    navigate(`/items/${product.id}`);
};

return (
    <>
        <div className="search_list" onClick={handleClick}>
            <div className="item_img_list">
                <img src={product.picture} alt={product.title} />
            </div>
            <div className="list_detail">
                <div className="list_detail_price">
                    <div className="list_detail_small_price_content">
                        <span className="list_detail_price">
                            $ {product.price.amount}
                        </span>
                        {product.free_shipping && (
                            <img
                                src={Shipping}
                                alt="Shipping"
                                className="list_detail_avalible_shipping"
                            />
                        )}
                    </div>
                    <span className="list_detail_country">
                        {product.address}
                    </span>
                </div>
            <p className="list_detail_text_description">{product.title}</p>
            </div>
        </div>
    </>
  );
}
