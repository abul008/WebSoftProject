import styled from "styled-components" ;

const TwoNavPage = styled.div `
height: 100vh;
width: 20%;
min-width: 240px;
position: fixed;
background: white;
position: fixed;
right: 0;
z-index:3;
top:0;
font-family: sans-serif;
    nav{
       height: 100%;
       min-width: 298px;
    }
    nav ul {
        display: flex;
        flex-direction: column;
        height: 100%;
        overflow: auto;
        padding:0px;
        // background: -webkit-linear-gradient(to right, #2c3e50, #2980b9);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #2c3e50, #2980b9); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        box-shadow: rgb(0 0 0 / 16%) 0px 1px 4px;
}
     nav ul::-webkit-scrollbar{
        width: 8px;
        height: 5px;
}
     nav ul::-webkit-scrollbar-thumb {
        background: #77ab85;
        background: linear-gradient(to right, #3e3d3d, #000000);
        border-radius: 16px 0px 0px 16px;
}
    nav ul::-webkit-scrollbar:hover {
        /*box-shadow: 0px 2px 1px 2px #5a5d648a ;*/
        width: 0px;
        height: 8px;
        background-color: #ced0d44f;
}
    nav ul a {
        font-size: 16px;
        color: white;
        padding: 12px 20px;
        text-decoration: none;
        position: relative;
        cursor: "pointer";
        padding: 16px 30px;
        displey: flex;
}
    
    nav ul a:before{
        content: "";
        position: absolute;
        background: #ffffff;
        border-radius: 20px 20px 0px 0px;
        width: 0%;
        height: 8px;
        left: 0px;
        transition: 0.3s;
        bottom: 0px;
  }
    nav ul a::after{
        content: "";
        position: absolute;
        background: #ffffff;
        border-radius:0px 0px 20px 20px;
        width: 0%;
        height: 8px;
        left: 0px;
        transition: 0.3s;
        top: 0px;
  }
    nav ul a:hover::after{
        width: 100%;
  }
    nav ul a:hover::before{
        width: 100%;
  }
    nav ul a:hover{
        color: white;

  }
    nav ul span{
        
        display: flex;
        justify-content: space-between;
    }
    nav ul span:hover{
        color: #77ab85;
  }
  .active{
      background:black;
      background: linear-gradient(rgb(29, 151, 108), rgb(147, 249, 185));
      color:white
  }
  `
const Navlinkoption = styled.div`
    display: flex;
    flex-direction: column;
    border-top:solid 1px grey;
    font-family: sans-serif;
    
`
const NavLinkSeeMoreCantrol = styled.div `
    // width: 50%;
    display: flex;
    align-items: center;
    font-family: inherit;
    justify-content: space-between;
    font-weight: 800;
    color:white;
    cursor: pointer;
`
const NavTwoTitlesLinkCantrol = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 7px 1px;
    font-family: fantasy;
    font-size: 26px;
    border-bottom: solid 1px gray;
`





export {
    TwoNavPage,
    NavLinkSeeMoreCantrol,
    Navlinkoption,
    NavTwoTitlesLinkCantrol
};