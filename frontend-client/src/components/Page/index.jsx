import { forwardRef, useEffect, useCallback, useState } from 'react';
import { useLocation } from 'react-router';
import { Helmet } from 'react-helmet';

export const Page = forwardRef(({ title, children, ...rest }, ref) => {
  const [metaTags, setMetaTags] = useState({
    title: '',
    description: '',
  });

  const location = useLocation();

  const initialize = useCallback(() => {
    let newTitle = 'Casinha';
    let newDescription = 'Encontre locações por temporada com Casinha. Tiny House confortável, prática e de valor acessível. Você se sentirá em casa.';

    if (title && title.length) {
      newTitle = title + ' | ' + newTitle;
    }

    else if(description){
      newDescription = description + ' - ' + newDescription;
    }

    setMetaTags({
      title: newTitle,
      description: newDescription,
    });
  }, [location]);

  useEffect(() => {
    initialize();
  }, [initialize]);

  return (
    <div ref={ref} {...rest}>
      <Helmet>
        <title>{metaTags.title}</title>
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta name="description" content={metaTags.description} />
      </Helmet>
      {children}
    </div>
  );
});
