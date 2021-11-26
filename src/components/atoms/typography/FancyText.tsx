// Libraries
import styled from 'styled-components';

export default styled.h1`
  font-weight: var(--font-weight-bold);
  font-family: var(--font-family);
  font-style: normal;
  font-size: 3rem;
  line-height: 1.6;
  display: inline-block;

  /* Fallback: Set a background color. */
  background-color: var(--color-text-secondary);

  background-image: linear-gradient(
    90deg,
    #0c62a8 0%,
    #b8427d 46.24%,
    #fda265 95.43%
  );

  /* Set the background size and repeat properties. */
  background-size: 100%;
  background-repeat: repeat;

  /* Use the text as a mask for the background. */
  /* This will show the gradient as a text color rather than element bg. */
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
`;
