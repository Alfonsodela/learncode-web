import styled from '@emotion/styled';

export type ImageSizes = 's' | 'm';
const imageWidthBySize = {
    s: 'width: 120px',
    m: 'width: 240px'
};

export const ImageContainer = styled.div<{ size?: ImageSizes }>`
    > img {
        width: 100%;
        height: auto;
    }
    ${({ size }) => imageWidthBySize[size || 'm']};
`;

