import React from 'react'

export const SideBar = () => {
    return (
        <>
            <div className='bg-white rounded p-2 border shadow'>
                <div className="input-group rounded">
                    <input type="text" className="form-control " placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    <span className="input-group-text bg-light" id="basic-addon2"><i className="bi bi-search"></i></span>
                </div>
                <ul className="list-unstyled mb-0 p-2">
                    <li><a className="dropdown-item d-flex align-items-center gap-2 py-2" href="#">
                        <span className="d-inline-block bg-success rounded-circle" style={{ width: '.5em', height: '.5em' }}></span>
                        Action
                    </a></li>
                    <li><a className="dropdown-item d-flex align-items-center gap-2 py-2" href="#">
                        <span className="d-inline-block bg-primary rounded-circle" style={{ width: '.5em', height: '.5em' }}></span>
                        Another action
                    </a></li>
                    <li><a className="dropdown-item d-flex align-items-center gap-2 py-2" href="#">
                        <span className="d-inline-block bg-danger rounded-circle" style={{ width: '.5em', height: '.5em' }}></span>
                        Something else here
                    </a></li>
                    <li><a className="dropdown-item d-flex align-items-center gap-2 py-2" href="#">
                        <span className="d-inline-block bg-info rounded-circle" style={{ width: '.5em', height: '.5em' }}></span>
                        Separated link
                    </a></li>
                </ul>
            </div>

            <h5 className='mt-3'>Categories</h5>
            <ul className="list-group shadow">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    A list item
                    <span className="badge bg-primary rounded-pill">14</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    A second list item
                    <span className="badge bg-primary rounded-pill">2</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    A third list item
                    <span className="badge bg-primary rounded-pill">1</span>
                </li>
            </ul>

            <h5 className="mt-3">Top Posts</h5>
            <div className="list-group">
                <a href="#" className="list-group-item list-group-item-action " aria-current="true">
                    <div className="d-flex w-100 justify-content-between">
                        <h6 className="mb-1 bolder">List group item heading</h6>
                        <small>3 days ago</small>
                    </div>
                    <small>And some small print.</small>
                </a>
                <a href="#" className="list-group-item list-group-item-action " aria-current="true">
                    <div className="d-flex w-100 justify-content-between">
                        <h6 className="mb-1 bolder">List group item heading</h6>
                        <small>3 days ago</small>
                    </div>
                    <small>And some small print.</small>
                </a>
            </div>
        </>

    )
}
