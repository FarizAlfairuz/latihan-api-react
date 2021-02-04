import React from 'react'

var MemberCard = (props) => {
    if (props.id != null) {
        return (
            <div id={props.id}>
                {
                    <div className="card" style={{ width: "30rem" }}>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-sm">
                                    <img alt="avatar" src={props.avatar} className="rounded-circle" />
                                </div>
                                <div className="col-sm">
                                    {/* <h5 className="card-title">{"ID: " + props.id}</h5> */}
                                    <h5 className="card-title">{"Name: " + props.first_name + " " + props.last_name}</h5>
                                    <p className="card-text">{"Email: " + props.email}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        )
    } else {
        return null

    }
}

export default MemberCard
