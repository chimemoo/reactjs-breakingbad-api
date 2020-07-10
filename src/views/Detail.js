import React from 'react';
import { useLocation, Link } from 'react-router-dom';

function Detail() {
    const { value } = useLocation();

    return (
        <div>
            <div className="card">
                <div className="card-header">
                    {value.nickname}
                </div>
                <div className="card-body row">
                    <div className="col-sm-6">
                        <h5 class="card-title">{value.name}</h5>
                        <p class="card-text">Birthday : {value.birthday}</p>
                        <p class="card-text">Status : {value.status}</p>
                        <p class="card-text">Portrayed : {value.portrayed}</p>
                        <Link to="/" className="btn btn-primary">Back</Link>
                    </div>
                    <div className="col-sm-6">
                        <div style={{ justifyContent: 'center', display: 'flex' }}>
                            <img src={value.img} style={{ width: '100%' }} alt={value.name} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail;
