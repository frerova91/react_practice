import styled from 'styled-components'

export const MyModal = styled.div`
    top: 0;
    left: 0;
    z-index:1;
    width: 100%;
    height: 100%;
    position: fixed;
    background: #15151515;

  & > img{
    display: block;
    max-width: 55vmax;
    max-height: 55vmax;
    margin: 50px auto;
    box-shadow: 3px 5px 7px rgba(0,0,0,0.3);
    /*border: 3px solid white;*/
  }
`
