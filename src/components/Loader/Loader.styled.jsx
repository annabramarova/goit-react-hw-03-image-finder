
import styled from "@emotion/styled"
import { keyframes } from '@emotion/react'

const animate = keyframes`
    to {
        transform: rotate(1turn);
    }`


const Preloader = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    margin: 0;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #1a1817ea;
    z-index: 1001;
    opacity: 1;
    visibility: visible;

    &.done {
        opacity: 0;
        visibility: hidden;
        pointer-events: none;
    }`


const Loader = styled.div`
width: 20em;
    height: 20em;
    font-size: 10px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1001;

    opacity: 1;
    visibility: visible;

    &.done {
        opacity: 0;
        visibility: hidden;
        pointer-events: none;
    }`

const Face = styled.div`
position: absolute;
    border-radius: 50%;
    border-style: solid;
    animation: ${animate} 3s linear infinite;
    
    &:nth-of-type(1) {
    width: 100%;
    height: 100%;
    color: #0064ff;
    border-color: currentColor transparent transparent currentColor;
    border-width: 0.2em 0.2em 0em 0em;
    --deg: -45deg;
    animation-direction: normal;
}

    &:nth-of-type(2) {
    width: 70%;
    height: 70%;
    color: gold;

    border-color: currentColor currentColor transparent transparent;
    border-width: 0.2em 0em 0em 0.2em;
    --deg: -135deg;
    animation-direction: reverse;
}`

const Circle = styled.div`position: absolute;
    width: 50%;
    height: 0.1em;
    top: 50%;
    left: 50%;
    background-color: transparent;
    transform: rotate(var(--deg));
    transform-origin: left;
    
    &::before {
    position: absolute;
    top: -0.5em;
    right: -0.5em;
    content: '';
    width: 1em;
    height: 1em;
    background-color: currentColor;
    border-radius: 50%;
    box-shadow: 0 0 2em, 0 0 4em, 0 0 6em, 0 0 8em, 0 0 10em, 0 0 0 0.5em rgba(255, 255, 0, 0.1);
}`


export { Preloader, Loader, Circle, Face,}