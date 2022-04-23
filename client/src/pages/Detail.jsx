/**
    * Author: @gonzo036
    * Date: 04/22/2022
    * Ticket: TICKET-XXXXXXXX
    * Description: this file contains List product result styles
*/

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductByIdApi } from "../api/productApi";
import Breadcrumb from "../components/Breadcrumb";

export default function Detail() {
    const [product, setProduct] = useState(null);
    const { id } = useParams();

    useEffect(() => {
    getProductByIdApi(id)
        .then((response) => {
            if (response?.susecces) {
                setProduct(response.item);
            } else {
                setProduct({});
            }
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);

    if (!product) {
        return <></>;
    }
    return (
        <>
            <Breadcrumb />
            <div className="list_box_items">
                <div className="box_detail_product">
                    <div className="box_detail_product_img">
                        <img src={product.picture} alt={product.title} />
                    </div>

                    <div className="box_product">
                        <div className="box_product-detail">
                            <span>
                                {product.condition} {" - "}{product.sold_quantity} Vendidos
                            </span>
                            <div className="box_product-detail_title">{product.title}</div>
                            <div className="box_product-detail_title_price">
                                $ {product.price.amount.toFixed(0)}
                            </div>
                            <button>Comprar</button>
                        </div>
                    </div>
                    <div>
                        <div className="box_product-detail_subtitle">Descripción del producto</div>
                        <div className="box_product-detail_subtitle_info">{product.description}</div>
                    </div>
                </div>
            </div>
        </>
    );
}
