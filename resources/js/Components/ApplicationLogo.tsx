import { SVGAttributes } from 'react';

export interface ApplicationLogoProps extends SVGAttributes<SVGElement> {
    logoColor?: string;
    logoClassName?: string;
    isFullSize?: boolean;
}

export default function ApplicationLogo({
    logoColor,
    logoClassName,
    isFullSize = false,
    ...props
}: ApplicationLogoProps) {
    return (
        <svg
            width="32"
            height="32"
            version="1.1"
            viewBox={isFullSize ? '2.67 2.67 26.67 26.67' : '0 0 32 32'}
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g strokeWidth=".72731">
                <rect
                    className={logoClassName ? `text-primary ${logoClassName}` : 'text-primary'}
                    x="2.667"
                    y="2.667"
                    width="26.667"
                    height="26.667"
                    rx="4.7198"
                    fill={logoColor ?? 'currentColor'}
                />
                <path
                    d="m8.0948 8.0948v0.47198c0 2.6067 2.1144 4.7198 4.721 4.7198h0.49333v5.2508h5.1693v-5.2508h5.4278v-5.1918z"
                    fill="currentColor"
                />
                <path
                    d="m13.287 18.479c0-2.8673 2.3244-5.1918 5.1918-5.1918v10.62c-2.8673 0-5.1918-2.3245-5.1918-5.1918z"
                    fill="url(#paint0_linear_561_3720)"
                />
            </g>
            <defs>
                <linearGradient
                    id="paint0_linear_561_3720"
                    x1="18.056"
                    x2="18.056"
                    y1="26.732"
                    y2="10.277"
                    gradientTransform="matrix(.72731 0 0 .72731 2.667 2.3566)"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="currentColor" offset="0" />
                    <stop
                        className={logoClassName ? `text-primary ${logoClassName}` : 'text-primary'}
                        stopColor={logoColor ?? 'currentColor'}
                        offset="1"
                    />
                </linearGradient>
            </defs>
        </svg>
    );
}
