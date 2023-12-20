import * as SC from "styled-components";

export const ResetCss = SC.createGlobalStyle`
    /*
    YUI 3.18.1 (build f7f2c86f2458) reset.css
    Copyright 2024, Yahoo! Inc. All rights reserved.
    Licensed under the BSD License.
    http://yuilibrary.com/license/
    */
    html{color:#000;background:#FFF}body,
    div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,
    form,fieldset,input,textarea,blockquote,p,
    th,td{margin:0;padding:0}table{border-collapse:collapse;border-spacing:0}
    fieldset,img{border:0}address,caption,cite,code,dfn,em,strong,
    th,var{font-style:normal;font-weight:normal}ol,ul{list-style:none}caption,
    th{text-align:left}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:normal}q:before,q:after{content:''}abbr,
    acronym{border:0;font-variant:normal}sup{vertical-align:text-top}sub{vertical-align:text-bottom}input,
    textarea,select{font-family:inherit;font-size:inherit;font-weight:inherit}input,textarea,select{*font-size:100%}legend{color:#000}
`;

export const GlobalCss = SC.createGlobalStyle`
    html {
        font-size: 62.5%;
    }
    body {
        font-size: 1.6rem;
        font-family: "Noto Sans JP", sans-serif;
        color: #333;
    }
    a {
        text-decoration: none;
        color: #333;
    }
    ul {
        list-style: none;
    }
    img {
        max-width: 100%;
        height: auto;
    }
    button {
        border: none;
        background: none;
        cursor: pointer;
    }
    input {
        border: none;
        outline: none;
    }
    textarea {
        border: none;
        outline: none;
    }
    select {
        border: none;
        outline: none;
    }
    * {
        box-sizing: border-box;
    }
`;
