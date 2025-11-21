import brand1 from "../../../public/assets/img/brand/brand-1.jpg";
import brand2 from "../../../public/assets/img/brand/brand-2.jpg";
import brand3 from "../../../public/assets/img/brand/brand-3.jpg";
import brand4 from "../../../public/assets/img/brand/brand-4.jpg";
import brand5 from "../../../public/assets/img/brand/brand-5.jpg";
import brand6 from "../../../public/assets/img/brand/brand-6.jpg";
import brand7 from "../../../public/assets/img/brand/brand-7.jpg";
import brand8 from "../../../public/assets/img/brand/brand-8.jpg";
import brand9 from "../../../public/assets/img/brand/brand-9.jpg";
import brand10 from "../../../public/assets/img/brand/brand-10.jpg";
import brand11 from "../../../public/assets/img/brand/brand-11.jpg";
import brand12 from "../../../public/assets/img/brand/brand-12.jpg";
import brand13 from "../../../public/assets/img/brand/brand-13.jpg";
import brand14 from "../../../public/assets/img/brand/brand-14.jpg";
import brand15 from "../../../public/assets/img/brand/brand-15.jpg";
import brand16 from "../../../public/assets/img/brand/brand-16.jpg";
import brand17 from "../../../public/assets/img/brand/brand-17.jpg";
import brand18 from "../../../public/assets/img/brand/brand-18.jpg";
import brand19 from "../../../public/assets/img/brand/brand-19.jpg";
import brand20 from "../../../public/assets/img/brand/brand-20.jpg";
import brand21 from "../../../public/assets/img/brand/brand-21.jpg";
import brand22 from "../../../public/assets/img/brand/brand-22.jpg";
import brand23 from "../../../public/assets/img/brand/brand-23.jpg";
import brand24 from "../../../public/assets/img/brand/brand-24.jpg";
import brand25 from "../../../public/assets/img/brand/brand-25.jpg";
import Image from "next/image";

const brandImages = [
    brand1, brand2,
    brand3, brand4,
    brand5, brand6,
    brand7, brand8,
    brand9, brand10,
    brand11, brand12,
    brand13, brand14,
    brand15, brand16,
    brand17, brand18,
    brand19, brand20,
    brand21, brand22,
    brand23, brand24,
    brand25
];

const BrandShowcaseBrand = () => {
    return (
        <div className="tp-brand-inner-area pb-80">
            <div className="container container-1230">
                <div className="row gx-70 row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1">
                    {brandImages.map((img, index) => (
                        <div className="col" key={index}>
                            <div className="tp-brand-inner-item mb-65">
                                <Image style={{width:"100%", height:"auto"}} src={img} alt={`brand-${index + 1}`} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BrandShowcaseBrand;
