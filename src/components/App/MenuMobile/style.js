import styled from "styled-components";

const MenuContent = styled.div`
    position: absolute;
    display: flex;
    width: 90%;
    height: 58px;
    margin: auto;
    left: 0;
    right: 0;
    bottom: 10px;
    background: #0a0000;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    /* overflow: hidden; */

    div{     
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        /* background: yellowgreen; */
    }
    div:nth-child(1){
        width: 25%;
    }
    div:nth-child(1)::after{
        position: absolute;
        content: '';
        width: 10%;
        height: 4px;
        bottom: 0;
        border-radius: 4px;
        background: ${props => (props.page == 'home' ? "#F7A616" : "transparent")};
    }

    div:nth-child(2){
        width: 25%;
        /* background: gray; */
    }
    div:nth-child(2)::after{
        position: absolute;
        content: '';
        width: 10%;
        height: 4px;
        bottom: 0;
        border-radius: 4px;
        background: ${props => (props.page == 'user' ? "#F7A616" : "transparent")};
    }

    div:nth-child(3){
        width: 25%;
        /* background: blue; */
    }
    div:nth-child(3)::after{
        position: absolute;
        content: '';
        width: 10%;
        height: 4px;
        bottom: 0;
        border-radius: 4px;
        background: ${props => (props.page == 'favoritos' ? "#F7A616" : "transparent")};
    }

    div:nth-child(4){
        width: 25%;
        /* background: goldenrod; */
    }
    div:nth-child(4)::after{
        position: absolute;
        content: '';
        width: 10%;
        height: 4px;
        bottom: -2px;
        border-radius: 4px;
        background: ${props => (props.page == 'bag' ? "#F7A616" : "transparent")};
    }


    .icons{
        width: 30px;
        height: 30px;
        /* background: red; */
    }


`
export {MenuContent}