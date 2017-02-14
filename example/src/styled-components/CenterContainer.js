import styled from 'styled-components';

const CenterContainer = styled.div`
    width: ${({ width }) => width ? width : '400px'};
    height: ${({ height }) => height ? height : '400px'};
    padding-top: ${({ paddingTop }) => paddingTop ? paddingTop : '0px'};
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`;

export default CenterContainer;