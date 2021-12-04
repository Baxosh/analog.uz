import React from 'react'
import Svg, { Circle, Line, Path, Rect } from 'react-native-svg'


export function Share() {
    return (
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path
                d="M5.77215 17.1899C5.80843 16.682 5.82656 16.4281 5.86619 16.2491C6.11712 15.1151 6.97957 14.3733 8.13837 14.2949C8.32136 14.2825 8.60682 14.3051 9.17775 14.3502C10.0233 14.4171 10.9433 14.4667 11.8122 14.4667C12.7806 14.4667 13.8621 14.4051 14.8467 14.3266C15.4049 14.2822 15.684 14.2599 15.8752 14.274C17.0091 14.3577 17.8755 15.1025 18.1286 16.2109C18.1713 16.3978 18.1895 16.6529 18.2259 17.1629V17.1629C18.267 17.7377 18.2875 18.025 18.2665 18.2635C18.1458 19.6323 17.1105 20.7441 15.7538 20.962C15.5175 21 15.2293 21 14.6531 21H11.8122H9.31986C8.76857 21 8.49293 21 8.26658 20.9652C6.89315 20.7543 5.8443 19.6279 5.73178 18.2429C5.71324 18.0147 5.73288 17.7397 5.77215 17.1899V17.1899Z"
                stroke="#3A72D4" stroke-width="1.4"/>
            <Path
                d="M8.5 7.5C8.5 5.567 10.067 4 12 4V4C13.933 4 15.5 5.567 15.5 7.5V8C15.5 9.65685 14.1569 11 12.5 11V11H11.5V11C9.84315 11 8.5 9.65685 8.5 8V7.5Z"
                stroke="#3A72D4" stroke-width="1.4"/>
            <Path d="M20.5 14C20.5 14 22 14.6176 22 16.5C22 18.3824 20.5 19 20.5 19" stroke="#3A72D4" stroke-width="1.4"
                  stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M3.5 14C3.5 14 2 14.5 2 16.5C2 18.5 3.5 19 3.5 19" stroke="#3A72D4" stroke-width="1.4"
                  stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M18 4.5C18 4.5 20 4.91455 20 7C20 9.08545 18 9.5 18 9.5" stroke="#3A72D4" stroke-width="1.4"
                  stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M6 4.5C6 4.5 4 4.83423 4 7C4 9.16576 6 9.5 6 9.5" stroke="#3A72D4" stroke-width="1.4"
                  stroke-linecap="round" stroke-linejoin="round"/>
        </Svg>

    )
}


export function Bookmark() {
    return (
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path
                d="M5 10C5 8.13872 5 7.20808 5.24472 6.45492C5.73931 4.93273 6.93273 3.73931 8.45492 3.24472C9.20808 3 10.1387 3 12 3V3C13.8613 3 14.7919 3 15.5451 3.24472C17.0673 3.73931 18.2607 4.93273 18.7553 6.45492C19 7.20808 19 8.13872 19 10V13.9231C19 17.2481 19 18.9106 18.3366 19.4508C17.9696 19.7496 17.4997 19.8919 17.0286 19.8468C16.1769 19.7653 15.2547 18.3821 13.4103 15.6155V15.6155C12.8934 14.84 12.6349 14.4523 12.2953 14.3474C12.1029 14.2879 11.8971 14.2879 11.7047 14.3474C11.3651 14.4523 11.1066 14.84 10.5897 15.6155V15.6155C8.74529 18.3821 7.82311 19.7653 6.97145 19.8468C6.50033 19.8919 6.03041 19.7496 5.66342 19.4508C5 18.9106 5 17.2481 5 13.9231V10Z"
                stroke="#3A72D4" stroke-width="1.4" stroke-linejoin="round"/>
        </Svg>
    )
}

export function Discovery() {
    return (
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Rect x="2" y="2" width="20" height="20" rx="6" stroke="#3A72D4" stroke-width="1.4"/>
            <Path
                d="M13.5587 9.77168L11.5677 8.81662C10.3209 8.21853 9.6975 7.91948 9.26808 8.12083C9.13388 8.18376 9.01534 8.27573 8.92104 8.3901C8.61934 8.75604 8.75415 9.43419 9.02377 10.7905L9.02377 10.7905L9.45431 12.9563C9.53069 13.3406 9.56888 13.5327 9.66967 13.6909C9.70291 13.7431 9.74091 13.7921 9.7832 13.8372C9.91145 13.9742 10.088 14.0589 10.4413 14.2283L12.4322 15.1834C13.6791 15.7815 14.3025 16.0805 14.7319 15.8792C14.8661 15.8162 14.9846 15.7243 15.0789 15.6099C15.3806 15.244 15.2458 14.5658 14.9762 13.2095L14.5457 11.0437C14.4693 10.6594 14.4311 10.4673 14.3303 10.3091C14.2971 10.2569 14.2591 10.2079 14.2168 10.1628C14.0885 10.0258 13.9119 9.94111 13.5587 9.77168Z"
                stroke="#3A72D4" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
        </Svg>)
}


export function Language() {
    return (
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Circle cx="5" cy="8" r="3" stroke="#3A72D4" stroke-width="1.4"/>
            <Circle cx="19" cy="18" r="3" stroke="#3A72D4" stroke-width="1.4"/>
            <Path d="M22 8L12 8" stroke="#3A72D4" stroke-width="1.4" stroke-linecap="round"/>
            <Path d="M12 18H2" stroke="#3A72D4" stroke-width="1.4" stroke-linecap="round"/>
        </Svg>
    )
}

export function Lock() {
    return (
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Rect x="2" y="2" width="20" height="20" rx="6" stroke="#3A72D4" stroke-width="1.4"/>
            <Path
                d="M9.5 10.3461L10.2 10.3462V10.3461H9.5ZM10.5813 12.5L11.2813 12.5005C11.2815 12.2667 11.1649 12.0482 10.9705 11.9182L10.5813 12.5ZM13.6175 12.5L13.2283 11.9182C13.045 12.0408 12.9302 12.2426 12.9185 12.4628L13.6175 12.5ZM13.5098 14.5202L14.2088 14.5575L13.5098 14.5202ZM13.5405 14.887L14.235 14.7996L13.5405 14.887ZM10.5422 14.8593L9.85149 14.7459L10.5422 14.8593ZM10.2 10.3461C10.2 9.81095 10.393 9.41667 10.6835 9.15123C10.9806 8.8798 11.4284 8.7 11.9999 8.7V7.3C11.1352 7.3 10.333 7.57511 9.73918 8.11767C9.13881 8.66622 8.8 9.44501 8.8 10.3461H10.2ZM11.9999 8.7C13.1852 8.7 14.0014 9.41931 14.0014 10.3461H15.4014C15.4014 8.40032 13.6873 7.3 11.9999 7.3V8.7ZM10.9705 11.9182C10.6749 11.7204 10.5033 11.5467 10.3937 11.3457C10.2833 11.1432 10.2 10.8466 10.2 10.3462L8.8 10.3461C8.79996 10.9995 8.90864 11.5466 9.16452 12.0159C9.42125 12.4868 9.79035 12.8131 10.1921 13.0818L10.9705 11.9182ZM9.88129 12.4995L9.87978 14.5472L11.2798 14.5483L11.2813 12.5005L9.88129 12.4995ZM11.5813 16.7676H12.6175V15.3676H11.5813V16.7676ZM14.0014 10.3461C14.0014 10.8459 13.9177 11.1423 13.8068 11.3448C13.6967 11.5462 13.5244 11.7201 13.2283 11.9182L14.0067 13.0818C14.408 12.8134 14.7776 12.4874 15.035 12.0168C15.2918 11.5475 15.4014 11.0002 15.4014 10.3461H14.0014ZM14.2088 14.5575L14.3165 12.5372L12.9185 12.4628L12.8108 14.483L14.2088 14.5575ZM12.6175 16.7676C13.1274 16.7676 13.5601 16.4815 13.8322 16.1494C14.1125 15.807 14.301 15.3248 14.235 14.7996L12.8459 14.9743C12.8565 15.0586 12.8274 15.1667 12.7491 15.2623C12.6624 15.3681 12.5953 15.3676 12.6175 15.3676V16.7676ZM9.85149 14.7459C9.67968 15.7922 10.4969 16.7676 11.5813 16.7676V15.3676C11.3598 15.3676 11.2013 15.1658 11.233 14.9728L9.85149 14.7459ZM12.8108 14.483C12.7999 14.6872 12.837 14.9032 12.8459 14.9743L14.235 14.7996C14.2133 14.627 14.2066 14.5986 14.2088 14.5575L12.8108 14.483ZM9.87978 14.5472C9.87975 14.5795 9.87404 14.6086 9.85149 14.7459L11.233 14.9728C11.2444 14.9034 11.2796 14.7254 11.2798 14.5483L9.87978 14.5472Z"
                fill="#3A72D4"/>
        </Svg>
    )
}

export function Info() {
    return (
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Rect x="2" y="2" width="20" height="20" rx="6" stroke="#3A72D4" stroke-width="1.4"/>
            <Path
                d="M12.7832 7.32779C12.7832 7.76041 12.4325 8.11112 11.9999 8.11112C11.5673 8.11112 11.2166 7.76041 11.2166 7.32779C11.2166 6.89516 11.5673 6.54445 11.9999 6.54445C12.4325 6.54445 12.7832 6.89516 12.7832 7.32779Z"
                fill="#3A72D4"/>
            <Path d="M12 10.3333V15.8889" stroke="#3A72D4" stroke-width="1.4" stroke-linecap="round"
                  stroke-linejoin="round"/>
        </Svg>
    )
}

export function Profile() {
    return (
        <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path
                d="M4.40334 17.3222C4.44 16.9879 4.45832 16.8208 4.48127 16.7015C4.75983 15.2543 5.93043 14.2799 7.40422 14.2686C7.52566 14.2677 7.71526 14.2816 8.09447 14.3095C9.27227 14.3959 10.599 14.4667 11.7854 14.4667C13.0237 14.4667 14.3969 14.3896 15.5907 14.298C15.9564 14.27 16.1392 14.256 16.2581 14.2563C17.6545 14.2601 18.7825 15.1264 19.1463 16.4745C19.1773 16.5893 19.2069 16.748 19.2661 17.0653V17.0653C19.3314 17.4153 19.364 17.5902 19.3767 17.7324C19.524 19.3759 18.3162 20.8298 16.6735 20.9865C16.5314 21 16.3534 21 15.9975 21L11.7854 21H7.69989C7.37599 21 7.21405 21 7.08163 20.9882C5.50997 20.8487 4.31503 19.5155 4.34763 17.938C4.35038 17.8051 4.36803 17.6441 4.40334 17.3222V17.3222Z"
                stroke="#3A72D4" stroke-width="1.4"/>
            <Path
                d="M8 7C8 4.79086 9.79086 3 12 3V3C14.2091 3 16 4.79086 16 7V7.57143C16 9.46498 14.465 11 12.5714 11V11H11.4286V11C9.53502 11 8 9.46498 8 7.57143V7Z"
                stroke="#3A72D4" stroke-width="1.4"/>
        </Svg>

    )
}

export function QRCode() {
    return (
        <Svg width="67" height="50" viewBox="0 0 67 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Rect x="0.5" y="0.5" width="66" height="49" rx="19.5" fill="white" stroke="#B9C9E4"/>
            <Path d="M44 29V29C44 32.3137 41.3137 35 38 35V35" stroke="#B9C9E4" stroke-width="1.4"
                  stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M38 15V15C41.3137 15 44 17.6863 44 21V21" stroke="#B9C9E4" stroke-width="1.4"
                  stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M24 21V21C24 17.6863 26.6863 15 30 15V15" stroke="#B9C9E4" stroke-width="1.4"
                  stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M30 35V35C26.6863 35 24 32.3137 24 29V29" stroke="#B9C9E4" stroke-width="1.4"
                  stroke-linecap="round" stroke-linejoin="round"/>
            <Path d="M26 27C26 27 30.8726 27 34 27C37.1274 27 42 27 42 27" stroke="#B9C9E4" stroke-width="1.4"
                  stroke-linecap="round"/>
        </Svg>
    )
}