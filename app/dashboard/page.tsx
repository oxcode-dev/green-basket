import { DashboardSetup } from '@/setups/DashboardSetup'
import React from 'react'

const page = () => {
    return (
        <DashboardSetup>
            <div className="p-3 md:p-4 border-gray-300 border-b">
                <div>
                    <h2>Account Management</h2>
                </div>
            </div>
        </DashboardSetup>
    )
}


export default page