import Link from 'next/link';
import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: (props) => <Link {...props} href={props.href ?? '#'} />, // eslint-disable-line jsx-a11y/anchor-has-content
    h2: (props) => <h2 style={{ marginTop: '1.6rem' }} {...props} />, // eslint-disable-line react/jsx-props-no-spreading
    h3: (props) => <h3 style={{ marginTop: '1.2rem' }} {...props} />, // eslint-disable-line react/jsx-props-no-spreading
    ...components,
  };
}
