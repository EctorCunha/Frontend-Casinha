import React, { forwardRef, useEffect, useCallback } from 'react';
import { Helmet } from 'react-helmet';

export const Page = forwardRef(({ title, children, ...rest }, ref) => {
    return (
        <div ref={ref} {...rest}>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            {children}
        </div>
    );
});

