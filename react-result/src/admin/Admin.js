import React from 'react'
import '../admin/Admin.css'
import AdminNav from './AdminNav'
import ListResultComponent from '../components/ListResultComponent'
export default function Admin() {

    return (
        <div>
            <AdminNav />
            <section className="section">
          <ListResultComponent/>
            </section>
        </div>
    )
}
