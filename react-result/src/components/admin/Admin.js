import React from 'react'
import '../admin/Admin.css'
import AdminNav from './AdminNav'
import ListEmployeeComponent from './ListEmployeeComponent'
export default function Admin() {

    return (
        <div>
            <AdminNav />
            <section className="section">
             <ListEmployeeComponent/>
            </section>
        </div>
    )
}
