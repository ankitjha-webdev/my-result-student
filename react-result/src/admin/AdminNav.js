import React from 'react'
export default function AdminNav() {
    return (
        <div>     
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
                <span>Upload Excel</span>
            </div>
            {/* <button className="btn btn-primary" onClick={this.addEmployee}> */}
            <div class="item-list">
                <div class="icons">
                <i class="fas fa-user-plus"></i>
                </div>
                <span>Add Student</span>
            </div>
            {/* </button> */}
            <div class="item-list">
                <div class="icons">
                    <i class="fas fa-users"></i>
                </div>
                <span>Users
                </span>
            </div> 
            <div class="item-list">
                <div class="icons">
                    <i class="fas fa-list"></i>
                </div>
                <span>Student list</span>
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
    )
}
