import dynamic from 'next/dynamic';
import ExtLink from './ext-link';
import { BlockQuote, H2, Li, Ol, P, Ul } from './tags';

export default {
  // default tags
  ol: Ol,
  ul: Ul,
  li: Li,
  p: P,
  blockquote: BlockQuote,
  h2: H2,
  a: ExtLink,

  Code: dynamic(() => import('./code')),
  Equation: dynamic(() => import('./equation')),
};