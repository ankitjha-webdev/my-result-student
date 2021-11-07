import React from 'react'
import '../admin/Admin.css'
export default function Admin() {
    
    return (
        <div>
            {/* <div className="container"> */}
                       {/* <section className="home-section">
                       <div className="admin-navbar">
                            <div className="row">
                                <div className="col-md-12">
                                <h1>Admin</h1>
                                    <ul className="nav nav-tabs">
                                        <li className="nav-item">
                                            <a className="nav-link active" href="#">Home</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Profile</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Messages</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                       </section> */}


<nav class="navbar" id="nav">
        <button class="toggle-menu" id="menu">
            <i class="fas fa-bars"></i>
        </button>
        <div class="nav-items">
            <div class="admin-profile">
                <div class="icons">
                    <img src="user.png" alt="admin"/>
                </div>
                <span>Admin</span>
            </div>
            <div class="item-list">
                <div class="icons">
                    <i class="fas fa-tachometer-alt"></i>
                </div>
                <span>Dashboard</span>
            </div>
            <div class="item-list">
                <div class="icons">
                    <i class="fas fa-wallet"></i>
                </div>
                <span>Coupons</span>
            </div>
            <div class="item-list">
                <div class="icons">
                    <i class="far fa-comment-dots"></i>
                </div>
                <span>Messages</span>
            </div>
            <div class="item-list">
                <div class="icons">
                    <i class="fas fa-users"></i>
                </div>
                <span>Team</span>
            </div>
            <div class="item-list">
                <div class="icons">
                    <i class="fas fa-list"></i>
                </div>
                <span>Userlist</span>
            </div>
            <div class="logout">
                <div class="icons">
                    <i class="fas fa-sign-out-alt"></i>
                </div>
                <span>Logout</span>
            </div>
        </div>
    </nav>
                        </div>
                    
        // </div>
    )
}
