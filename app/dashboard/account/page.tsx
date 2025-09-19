'use client';

import ChangePasswordForm from '@/forms/dashboard/ChangePasswordForm'
import React, { useState } from 'react'

const page = () => {
    const [selectedTab, setSelectedTab] = useState<Boolean>(true)
    return (
        <div>

            <div className="p-3 md:p-4 border-gray-300 border-b">
                <div>
                    <h2>Account Management</h2>
                </div>
            </div>
            
            <div className="py-4 p-6">
                <div className="">
                    <div role="tablist" className="tabs tabs-border space-x-4">
                        <a onClick={() => setSelectedTab(true)} role="tab" className={`tab ${selectedTab ? 'tab-active' : '!text-gray-500'} hover:!text-gray-800`}>
                            Change Password
                        </a>
                        <a onClick={() => setSelectedTab(false)} role="tab" className={`tab ${!selectedTab ? 'tab-active' : '!text-gray-500'} hover:!text-gray-800`}>
                            Delete Account
                        </a>
                    </div>

                    <div className="w-full md:max-w-md">
                        {selectedTab ? <ChangePasswordForm /> : null}
                    </div>

                </div>
            </div>
        </div>

    )
}

export default page