import { css } from '@emotion/react';
import styled from '@emotion/styled';

export type ButtonVariants = 'purple' | 'green';

const purpleBackground = css`
 background-color: var(--purple);
`;

const greenBackground = css`
 background-color: var(--green);
`;

export const Button = styled.button<{ variant?: ButtonVariants }>`
    color: var(--dark);
    background-color:  var(--green);
    border: 2px solid var(--border);
    text-transform: uppercase;
    font-size: 1.25rem;
    font-weight: bold;
    padding: var(--padding-xs);
    text-transform: uppercase;

    ${(props) => (props.variant === 'purple' ? purpleBackground : greenBackground)}

    &:disabled {
        background-color: var(--snippet);
        cursor: not-allowed;
    }
`