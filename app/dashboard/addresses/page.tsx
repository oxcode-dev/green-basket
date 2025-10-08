'use client';

import AddressCard from '@/components/AddressCard';
import { EmptyState } from '@/components/EmptyState';
import Loading from '@/components/Loading';
import CreateAddressForm from '@/forms/dashboard/CreateAddressForm';
import { useFetchAddresses } from '@/hooks/useFetchAddresses';
import React from 'react'

const page = () => {
    const [open, setOpen] = React.useState(false);
    const addressCount = 4;

    const { addresses, isLoading} = useFetchAddresses();

    return (
        <div>
            <div className="p-3 md:p-4 border-gray-300 border-b flex justify-between items-center">
                <div>
                    <h2>Delivery Addresses</h2>
                </div>
                {
                    addresses && addresses?.length < addressCount ? (
                        <div>
                            <CreateAddressForm
                                open={open}
                                setOpen={setOpen}
                            />
                        </div>
                    ) : null
                }
                
            </div>
            <div className="p-3 md:p-4">
                { isLoading ? <Loading /> : null }
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    { addresses?.map((item, key) => (
                        <div key={key}>
                            <AddressCard address={item} />
                        </div>
                    ))}
                </div>
                { !isLoading && addresses?.length === 0 ? <EmptyState text="No Data!" /> : null }
            </div>
        </div>
    )
}

export default page