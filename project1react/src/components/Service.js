const Service = ({service, isNew}) => {
    return (
        <div className={`box ${isNew ? "box1" : ""}`}>
            <p className="newParag">
                {service}
                {isNew && (
                    <>
                        <br />
                        <span>(nowość)</span>
                    </>
                )}
            </p>
        </div>
    );
};
export default Service;
