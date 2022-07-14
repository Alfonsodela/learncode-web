import { css } from '@emotion/react'
import styled from '@emotion/styled';

const errorInput = css`
    border: 2px solid var(--error);
    margin-bottom: 1.25rem;
`


export const Input = styled.input< {hasError?: boolean}>`
    color: var(--dark);
    padding: var(--padding-xs);
    border: 2px solid var (--purple);
    border-radius: var(--border-radius);
    width: 100%;
    max-widht: var(--input-width);

    ${({ hasError }) => (hasError ? errorInput : '')}

    &:placeholder {
        color: var(--paragraph);
    }
`