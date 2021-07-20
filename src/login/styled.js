import styled from 'styled-components';


export const AreaLogin = styled.div`

    background-color: rgba(0, 0, 0, 0.527);
    padding: 30px;
    max-width:300px;
    margin: auto;
    margin-top: 60px;
    text-align: center;
    border-radius: 20% 0;
    box-shadow: 0px 0px 10px #ccc;
    color: #fff;

    h1{
        font-size: 24px;
    }

    .form-imput{
        text-align: left;
        label{
            display: block;
        }
        input{
            margin-bottom: 20px;
            padding: 10px;
            font-size: 16px;
            outline: none;
            border: 1px solid #ccc
            border-radius: 5px;
            width: 280px;
            transition: 0.3s;

            &:hover{
                border: 2px solid #7d2ae8
            }

        }
    }
`;
