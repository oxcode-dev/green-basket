import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/20/solid'
import React from 'react'


type ContactInfoProp = {
    description: string,
    icon: React.JSX.Element,
}
const contactInfoItems :ContactInfoProp[] = [
    {
      icon: <EnvelopeIcon className="size-8" />,
      description: '198 West 21th Street, Suite 721 New York NY 10016',
    },
    {
      icon: <PhoneIcon className="size-8" />,
      description: '+234 809 3483 434',
    },
    {
      icon: <MapPinIcon className="size-8" />,
      description: 'info@greenbasket.com',
    },
]
export const ContactInfoSection = () => {
    return (
        <div className="w-full container mx-auto md:py-16">

            <div className="grid sm:grid-cols-2 md:grid-cols-3 md:gap-6 sm:gap-4 gap-6 pt-6">
                {
                    contactInfoItems.map((item, key) => (
                        <div key={key} className="inline-flex justify-between items-center rounded-md border border-gray-200 w-full p-6 space-x-1.5 bg-white">
                            <div className="flex flex-col space-y-4 py-4">
                                {item.icon}
                                <p className="text-sm text-gray-600">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
