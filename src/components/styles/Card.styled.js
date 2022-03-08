import styled from "styled-components";

export const StyledCard = styled.div`
    background-color: ${({ theme }) => theme.colors.darkerbg};
    padding-top: 30px;
    border-radius: 6pt;
    position: relative;
    height: 400px;

    .cardContentWrapper {
        position: absolute;
        left: 50%;
        top: -7%;
        transform: translate(-50%, -0%);
        height: 102%;
        width: 85%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    h3 {
        font-size: 25px;
        margin-bottom: 12px;
    }

    a {
        text-decoration: none;
        font-size: 32px;
        color: ${({ theme }) => theme.colors.primary};
        padding-left: 12px;
        transition: color 0.2s;
        &:hover {
            color: #229d53;
        }
    }

    p {
        margin-bottom: 20px;
        flex: 4;
    }

    .cardFooter {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }

    .divIcons {
        font-size: 25px;
        text-align: right;
        margin-bottom: 12px;
        color: ${({ theme }) => theme.colors.primary};
    }

    .projectsTags {
        display: flex;
        flex-wrap: wrap;
    }

    h5 {
        font-size: 16px;
        font-weight: 200;
        margin-right: 19px;
        margin-bottom: 4px;
        color: ${({ theme }) => theme.colors.secondary};
        justify-self: flex-end;
    }
`;
