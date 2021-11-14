import React from 'react'
import '../admin/Admin.css'
import AdminNav from './AdminNav'
import Details from './Details'
export default function Admin() {

    return (
        <div>
            <AdminNav />
            <section className="section">
               <Details/>
            </section>
        </div>
    )
}
