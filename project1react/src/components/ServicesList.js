import Service from "./Service";
import {services} from "./../data/data";

const ServicesList = () => {
    return (
        <div>
            <div className="sec2_container">
                <div className="page_container">
                    <div className="sec2_box">
                        <h3 className="heading3" id="heading3">
                            {" "}
                            Czym zajmuje się nasza firma ?
                        </h3>
                        <div className="box_container">
                            {services.map(({id, serviceName, isNew}) => (
                                <Service key={id} service={serviceName} isNew={isNew} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ServicesList;
