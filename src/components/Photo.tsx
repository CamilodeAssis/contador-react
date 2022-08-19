import { Children, ReactNode } from 'react';

type Props = {
    legend: string;
    children: ReactNode;
}



export const Photo = ({legend, children}: Props) => {
    return (
        <div>
            {children}
            <p>{legend}</p>
        </div>
    );
}