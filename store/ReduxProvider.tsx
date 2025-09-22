'use client';

import React from 'react';
import { Provider } from 'react-redux';
import { makeStore } from '.';

export default function ReduxProvider({ children }: { children: React.ReactNode }) {
    const store = makeStore(); // Create a new store instance

    return <Provider store={store}>{children}</Provider>;
}