import React from 'react';

const Fourteen = () => {
    return (
        <>
            <div className="container-fluid" style={{ backgroundColor: '#fff092' }}>
                <div className="container mt-5 pt-3 pb-3" style={{ width: "80%", margin: 'auto' }}>
                    <h1 className='mt-5 mb-5 text-center text-grey'>MEET OUR HAPPY CUSTOMERS</h1>
                    <div className="row g-4">
                        <div className="col-12 col-sm-6 col-md-4">
                            <iframe
                                height="315"
                                width="100%"
                                src="https://www.youtube.com/embed/HYPqf_eVvvM?si=9A37KFD4r0dxrlkS"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                                style={{ borderRadius: '8px' }}
                            ></iframe>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4">
                            <iframe
                                height="315"
                                width="100%"
                                src="https://www.youtube.com/embed/SQm3RxXRunw?si=WFMWJgXd57dWVWYy"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                                style={{ borderRadius: '8px' }}
                            ></iframe>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4">
                            <iframe
                                height="315"
                                width="100%"
                                src="https://www.youtube.com/embed/IZpUQ-S_LcM?si=BxVBUijNwouWXbEu"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                                style={{ borderRadius: '8px' }}
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
        </>
    );
};

export default Fourteen;
